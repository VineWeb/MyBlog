# Vue-router

## 一：安装
```bash
npm install vue-router
```
## 二：简单的路由使用
```
import { createRouter, createWebHashHistory } from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')

// 现在，应用已经启动了！
```
## 三：Vue项目常见引入路由方式
### 第一步: 在src下新建一个router文件夹，文件夹新建一个index.ts/js
```js
// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/', component: () => import(`@/pages/Home/index.vue`) },
  { path: '/about', component: () => import(`@/pages/About/index.vue`) },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
```
### 第二步: 在App.vue文件引入router-view标签
```vue
 <template>
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
 </template>
```
### 第三步: 在main.ts/js引入App.vue和router/index.ts/js

```ts
import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
```

## 四：编程式导航

```js
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })



```
```
// 动态路由匹配  如下图所示: 
router.push('/users/:username')
```
| model                          | path	                    | $route.params                            | 
| ------------------------------ |:------------------------:| ----------------------------------------:|
| /users/:username	             | /users/eduardo           | `{ username: 'eduardo' }`                |
| /users/:username/posts/:postId | /users/eduardo/posts/123 | `{ username: 'eduardo', postId: '123' }` |

#### 使用配置项router/index.ts
```js
import { createRouter, createWebHistory } from "vue-router";
const base = '/blog/';
// 路由懒加载
const About = () => import("@/pages/About/index.vue")
const routes = [
    // 第一种方式
    {
      path: "/home",
      name: "Home",
      component: () => import("@/pages/Home/index.vue"),
    },
    // 第二种方式
    {
      path: '/about',
      name: 'About',
      component: About
    },
    // 捕获所有路由或 404 Not found 路由
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/pages/notFound/index.vue"),
    },
    // 重定向路由到'/home'路径
    {
      path: "/",
      redirect: "/home", // redirect: { name: 'Home' }
    }
]
const router = createRouter({
  history: createWebHistory(base),
  routes,
});
export default router;
```
## 五：RouterView 插槽
`RotuerView` 组件暴露了一个插槽，可以用来渲染路由组件：
```vue
<router-view v-slot="{ Component }">
  <component :is="Component" />
</router-view>
```
上面的代码等价于不带插槽的 `<router-view />`，但是当我们想要获得其他功能时，插槽提供了额外的扩展性。
### KeepAlive & Transition

> `KeepAlive` & `Transition`
当在处理 `KeepAlive` 组件时，我们通常想要保持路由组件活跃，而不是 RouterView 本身。为了实现这个目的，我们可以将 `KeepAlive` 组件放置在插槽内：

```vue
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
```
___
> 类似地，插槽允许我们使用一个 `Transition` 组件来实现在路由组件之间切换时实现过渡效果：

```vue
<router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>
```
___
> 我们也可以在 `Transaction` 组件内使用 `KeepAlive` 组件：

```vue
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
```
关于更多 `RouterView` 组件和 `Transition` 组件之间的互动，请参考 `Transitions` 指南。

> 传递 `props` 和插槽
我们可以利用其插槽给路由组件传递 `props` 或插槽：

```vue
<router-view v-slot="{ Component }">
  <component :is="Component" some-prop="a value">
    <p>Some slotted content</p>
  </component>
</router-view>
```

实践中通常不会这么做，因为这样会导致所有路由组件都使用相同的 `props` 和插槽。请查阅传递 `props` 给路由组件获取其他传递 `props` 的方式。

### 模板引用
> 使用插槽可以让我们直接将模板引用放置在路由组件上：

```vue
<router-view v-slot="{ Component }">
  <component :is="Component" ref="mainContent" />
</router-view>
```

而如果我们将引用放在 `<router-view>` 上，那引用将会被 `RouterView` 的实例填充，而不是路由组件本身。

## 六：导航守卫和组合式 API
> 全局前置守卫
```js
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

在 `setup` 中访问路由和当前路由
因为我们在 `setup` 里面没有访问 `this`，所以我们不能再直接访问 `this.$router` 或 `this.$route`。作为替代，我们使用 `useRouter` 和 `useRoute` 函数：

```js
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
          ...query,
        },
      })
    }
  },
}
```

`route` 对象是一个响应式对象，所以它的任何属性都可以被监听，但你应该避免监听整个 `route` 对象。在大多数情况下，你应该直接监听你期望改变的参数。

```js
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const userData = ref()

    // 当参数更改时获取用户信息
    watch(
      () => route.params.id,
      async newId => {
        userData.value = await fetchUser(newId)
      }
    )
  },
}
```

请注意，在模板中我们仍然可以访问 `$router` 和 `$route`，所以不需要在 setup 中返回 router 或 route。

## 七：addRoute使用，作为菜单权限使用
> 1. router/createRoute.ts/js文件如下
```js
import { Router, RouteRecordRaw } from 'vue-router';
function generateRouter (routeTree) {
  let newRoutes = routeTree.map(route => {
    let _route: RouteRecordRaw = {
      path: route.path,
      name: route.name,
      component: () => import(`/* webpackChunkName: "${ route.name }" */@/pages/${ route.name }/index.vue`),
      children: []
    }

    if (route.children) {
      _route.children = generateRouter(route.children);
    }

    return _route;
  });

  return newRoutes;
}

export function routerBeforeEach (router, store) {
  router.beforeEach(async(to, from, next) => {
    if (!store.state.hasAuth) {
      await store.dispatch('SET_ROUTE_TREE');
      const newRoutes = generateRouter(store.state.routeTree);
      newRoutes.forEach(route => router.addRoute(route));
      next({ path: to.path });
    } else {
      next();
    }
  })
}
```
> 2. store/index.ts/js
```js
import { createStore } from 'vuex';
export default createStore({
  state: {
      hasAuth: false,
      routeTree: [],
      uid: 3,
  },
  mutations: {
    SET_ROUTE_TREE (state, routeTree) {
      state.routeTree = routeTree;
    },
    SET_AUTH (state, auth) {
      state.hasAuth = auth;
    }
  },
  actions: {
    async SET_ROUTE_TREE ({ commit, state }) {
      const routeTree = await getUserRouteList(state.uid);
      commit('SET_ROUTE_TREE', routeTree);
      commit('SET_AUTH', true);
    }
  }
})
```
> 3. 在main.ts/js使用
```js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { routerBeforeEach } from './router/createRoute';
routerBeforeEach(router, store);
createApp(App).use(store).use(router).mount('#app');
```
