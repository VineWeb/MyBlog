<!-- @format -->

# Vue 基础

## 一: Vue 2.x 和 Vue 3.x 在生命周期

> Vue 2.x 和 Vue 3.x 在生命周期钩子的命名和触发时机上有一些区别。以下是 Vue 2.x 和 Vue 3.x 生命周期钩子的对比：

### Vue 2.x 生命周期钩子：

#### 创建阶段（Initialization）：

- `beforeCreate`: 在实例初始化之后，数据观测和事件配置之前调用。
- `created`: 在实例创建完成后被调用，此时实例已完成数据观测和初始化。

#### 挂载阶段（Mounting）：

- `beforeMount`: 在挂载开始之前被调用，`render` 函数首次被调用。
- `mounted`: el 被新创建的 vm.$el 替换，并挂载到实例上之后调用。

#### 更新阶段（Updating）：

- `beforeUpdate`: 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
- `updated`: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。

#### 销毁阶段（Destruction）：

- `beforeDestroy`: 实例销毁之前调用，此时实例仍然完全可用。
- `destroyed`: 实例销毁后调用，Vue 实例的所有指令、事件监听器都被解绑，子实例被销毁。

### Vue 3.x 生命周期钩子：

#### 创建阶段（Initialization）：

- `beforeCreate`: 在实例初始化之后，数据观测和事件配置之前调用。
- `created`: 在实例创建完成后被调用，此时实例已完成数据观测和初始化。

#### 挂载阶段（Mounting）：

- `beforeMount`: 在挂载开始之前被调用，`render` 函数首次被调用。
- `mounted`: 在挂载完成后调用，此时 el 被新创建的 vm.$el 替换，已挂载到实例上。

#### 更新阶段（Updating）：

- `beforeUpdate`: 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
- `updated`: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。

#### 销毁阶段（Destruction）：

- `beforeUnmount`: 在卸载之前调用。
- `unmounted`: 在卸载完成后调用。

### 补充说明：

- beforeCreate 和 created 阶段： 主要用于初始化数据、注入依赖，但此时尚未创建实例的 DOM。
- beforeMount 和 mounted 阶段： 与 DOM 相关的操作在这里进行，例如获取 DOM 元素的引用、进行一些初始化渲染等。
- beforeUpdate 和 updated 阶段： 主要用于响应数据变化，进行相应的更新操作。在 beforeUpdate 中，数据已经更新，但 DOM 尚未重新渲染。在 updated 中，DOM 已经完成重新渲染。
- beforeDestroy 和 destroyed 阶段： 在这个阶段可以进行一些清理工作，比如清除定时器、解绑事件监听器等。在 destroyed 阶段，实例已经解除与 Vue 的绑定，但实例的数据和方法仍然可以访问。
- Vue 3.x 引入了 `beforeUnmount` 和 `unmounted` 钩子，用于替代 Vue 2.x 中的 `beforeDestroy` 和 `destroyed`，更直观地表示组件卸载的阶段。

- 其他阶段的生命周期钩子在 Vue 2.x 和 Vue 3.x 中基本保持一致，只是在卸载阶段进行了改名。在迁移时，需要注意更新生命周期钩子的命名。
  这些生命周期钩子提供了在不同阶段执行自定义逻辑的机会，有助于开发者在合适的时机处理相关的操作。

## 二: Vue 中的数据双向绑定是通过 **MVVM 模式**（Model-View-ViewModel）实现的，具体来说，Vue 使用了 **响应式数据** 和 **虚拟 DOM** 结合的方式来实现双向数据绑定。

以下是 Vue 中数据双向绑定的实现原理：

1. **响应式数据：**

   Vue 通过 Object.defineProperty 方法来劫持（拦截）对象的属性，使得当属性值发生变化时，能够自动触发相关的更新。这个过程就是数据的响应式化。

   ```javascript
   // 例子
   let data = { message: "Hello, Vue!" };

   Object.defineProperty(data, "message", {
     get() {
       console.log("Get operation");
       return value;
     },
     set(newValue) {
       console.log("Set operation");
       value = newValue;
     },
   });
   ```

2. **虚拟 DOM：**

   Vue 使用虚拟 DOM（Virtual DOM）来实现高效的 DOM 更新。在数据发生变化时，Vue 会先更新虚拟 DOM，然后通过比较新旧虚拟 DOM，找出变化的部分，最后只更新实际改变的部分到真实 DOM。

3. **指令和表达式：**

   在模板中，Vue 提供了一些指令（Directives）来处理 DOM 元素。其中，`v-model` 是用于实现双向数据绑定的指令。`v-model` 会在表单元素上创建一个与数据属性相绑定的监听器，当表单元素的值发生变化时，数据也会相应地更新。

   ```html
   <!-- 示例 -->
   <input v-model="message" />
   ```

4. **事件监听器：**

   Vue 通过监听表单元素的输入事件（input、change 等）来实现数据的双向绑定。当用户在输入框中输入内容时，触发输入事件，Vue 通过监听器更新数据。反之，当数据变化时，也会更新输入框中的内容。

总体来说，Vue 的双向数据绑定是通过响应式数据、虚拟 DOM、指令和事件监听器的结合来实现的。这种机制让开发者能够以更直观和简洁的方式处理数据和视图之间的关系，提高了开发效率。

## 三: 具体详细地描述 Vue 2.x 和 Vue 3.x 中数据双向绑定的实现，并附上相关代码示例。

### Vue 2.x:

1. **Object.defineProperty：**

   Vue 2.x 主要通过使用 `Object.defineProperty` 对数据对象进行劫持，为数据属性设置 getter 和 setter，从而在属性值发生变化时能够触发相应的更新。

   ```javascript
   // 示例
   var data = { message: "Hello, Vue!" };

   Object.defineProperty(data, "message", {
     get() {
       console.log("Get operation");
       return value;
     },
     set(newValue) {
       console.log("Set operation");
       value = newValue;
     },
   });
   ```

2. **Watcher：**

   Vue 2.x 中使用 Watcher 来监听数据的变化。Watcher 负责收集依赖（Dep），当数据发生变化时，Watcher 会通知相关的依赖进行更新。

   ```javascript
   // 示例
   new Watcher(vm, "message", updateComponent);
   ```

### Vue 3.x:

1. **Reactivity API：**

   Vue 3.x 引入了 Reactivity API，通过 `ref`、`reactive` 等函数提供更灵活的响应式数据处理能力。`ref` 用于创建一个包装对象，`reactive` 用于创建一个响应式对象。

   ```javascript
   // 示例
   // Vue 3.x
   import { ref } from "vue";

   const message = ref("Hello, Vue!");
   ```

2. **Proxy：**

   Vue 3.x 中使用了 Proxy 对象来实现数据的响应式，相比于 Object.defineProperty，Proxy 提供了更多的拦截器方法，使得更灵活且性能更好。

   ```javascript
   // 示例
   const data = { message: "Hello, Vue!" };

   const reactiveData = new Proxy(data, {
     get(target, key) {
       console.log("Get operation");
       return target[key];
     },
     set(target, key, value) {
       console.log("Set operation");
       target[key] = value;
       // 触发更新操作
       // ...
       return true;
     },
   });
   ```

3. **Vue 3.x 中去除了 Watcher：**

   在 Vue 3.x 中，Watcher 被更轻量的 Effect 取代。Effect 会在数据变化时自动运行，不再需要手动创建 Watcher。

   ```javascript
   // 示例
   import { reactive, effect } from "vue";

   const data = reactive({ message: "Hello, Vue!" });

   effect(() => {
     console.log("Data changed:", data.message);
   });
   ```

### 总结：

Vue 3.x 中使用 Reactivity API 和 Proxy 实现了更灵活、高性能的响应式数据处理。同时，Vue 3.x 的 Composition API 提供了更好的组织代码的方式，使得组件的逻辑更加清晰。以上代码示例旨在突出 Vue 2.x 和 Vue 3.x 中双向绑定的核心机制。

## 四: Vue 的模板语法

> Vue 的模板语法是一种声明式的语法，用于将数据渲染到 DOM 上。
> Vue 模板语法基于 HTML，并添加了一些特殊的指令，以实现数据绑定、条件渲染、循环渲染等功能。以下是一些常用的 Vue 模板语法指令：

1. **插值表达式（Interpolation）：**

   插值表达式使用双大括号 `{{ }}` 将表达式包裹起来，用于将数据渲染到页面上。

   ```html
   <span>{{ message }}</span>
   ```

2. **指令（Directives）：**

   指令是以 `v-` 开头的特殊属性，用于在模板中应用特殊的行为。常用的指令有：

   - **`v-bind`：** 动态地绑定一个或多个属性。

     ```html
     <a v-bind:href="url">Link</a>
     ```

   - **`v-model`：** 用于实现表单元素与数据的双向绑定。

     ```html
     <input v-model="message" />
     ```

   - **`v-for`：** 用于循环渲染数组或对象。

     ```html
     <ul>
       <li v-for="item in items">{{ item }}</li>
     </ul>
     ```

   - **`v-if`、`v-else-if`、`v-else`：** 用于条件性地渲染元素。

     ```html
     <p v-if="isTrue">This is true.</p>
     <p v-else>This is false.</p>
     ```

   - **`v-show`：** 根据表达式的真假切换元素的显示和隐藏状态。

     ```html
     <div v-show="isVisible">Visible when true</div>
     ```

   - **`v-on`：** 用于绑定事件处理函数。

     ```html
     <button v-on:click="handleClick">Click me</button>
     ```

   - **`v-pre`：** 跳过这个元素和所有子元素的编译过程。常用于包裹不需要 Vue 编译的代码。

     ```html
     <div v-pre>{{ this will not be compiled }}</div>
     ```

   - **`v-cloak`：** 这个指令保持在元素上直到关联实例结束编译。和 CSS 规则 `[v-cloak] { display: none; }` 一起使用，可以防止闪烁。

3. **过滤器（Filters）：**

   过滤器允许在模板中进行文本格式化。它们以管道符 `|` 的形式使用。

   ```html
   <p>{{ message | capitalize }}</p>
   ```

   在上述例子中，`capitalize` 是一个自定义的过滤器。

这只是 Vue 模板语法的一小部分，还有其他一些高级用法和指令，可以根据具体需求去学习和应用。 Vue 模板语法的设计目标是简单直观，同时提供足够的灵活性，以适应各种场景。

## 五: Vue 组件之间通信

> 组件通信是前端开发中一个重要的话题，有多种方式可以实现组件之间的通信。以下是一些常用的通信方式以及它们之间的区别：

1. **父子组件通信：**

   - **Props（属性）：** 通过在父组件中使用 `props` 将数据传递给子组件。

     ```vue
     <!-- 父组件 -->
     <template>
       <child-component :message="parentMessage"></child-component>
     </template>

     <script>
     import ChildComponent from "./ChildComponent.vue";

     export default {
       components: {
         ChildComponent,
       },
       data() {
         return {
           parentMessage: "Hello from parent",
         };
       },
     };
     </script>

     <!-- 子组件 -->
     <template>
       <div>{{ message }}</div>
     </template>

     <script>
     export default {
       props: ["message"],
     };
     </script>
     ```

   - **自定义事件：** 通过在子组件中触发自定义事件，然后在父组件中监听这些事件。

     ```vue
     <!-- 父组件 -->
     <template>
       <child-component @child-event="handleChildEvent"></child-component>
     </template>

     <script>
     import ChildComponent from "./ChildComponent.vue";

     export default {
       components: {
         ChildComponent,
       },
       methods: {
         handleChildEvent(data) {
           console.log("Received data from child:", data);
         },
       },
     };
     </script>

     <!-- 子组件 -->
     <template>
       <button @click="triggerEvent">Trigger Event</button>
     </template>

     <script>
     export default {
       methods: {
         triggerEvent() {
           this.$emit("child-event", "Hello from child");
         },
       },
     };
     </script>
     ```

2. **兄弟组件通信：**

   - **通过父组件中转：** 如果两个兄弟组件有共同的父组件，可以通过父组件进行通信，将数据传递给一个兄弟组件，然后再通过这个兄弟组件传递给另一个兄弟组件。

   - **使用 Vuex：** Vuex 是 Vue 的状态管理库，适用于中大型项目。通过在 Vuex 中维护共享的状态，多个组件可以访问和修改这个状态，实现组件之间的通信。

3. **非父子关系组件通信：**

   - **事件总线（Event Bus）：** 创建一个全局的 Vue 实例作为事件总线，通过它来触发和监听事件。

     ```javascript
     // 创建事件总线
     const bus = new Vue();

     // 发送事件
     bus.$emit("event-name", data);

     // 接收事件
     bus.$on("event-name", (data) => {
       // 处理数据
     });
     ```

   - **Provide / Inject：** 父组件通过 `provide` 提供数据，子组件通过 `inject` 注入数据，实现非直接父子关系组件之间的通信。

     ```vue
     <!-- 父组件 -->
     <template>
       <child-component></child-component>
     </template>

     <script>
     import ChildComponent from "./ChildComponent.vue";

     export default {
       provide() {
         return {
           sharedData: "Hello from parent",
         };
       },
       components: {
         ChildComponent,
       },
     };
     </script>

     <!-- 子组件 -->
     <template>
       <div>{{ sharedData }}</div>
     </template>

     <script>
     export default {
       inject: ["sharedData"],
     };
     </script>
     ```

   - **Vuex：** 除了用于父子组件通信，Vuex 也适用于任何组件之间的通信。 Vuex 的 store 中的状态是全局的，可以被所有组件访问。

这些通信方式各有优缺点，选择合适的方式取决于项目的规模、结构和需求。 Prop 和自定义事件是 Vue 中最基础和常用的通信方式，而 Vuex 则适用于更复杂的状态管理场景。 Event Bus 和 Provide / Inject 则在某些场景下提供了更灵活的解决方案。

## 六: Vue Router 是 Vue.js 官方的路由管理库，用于在 Vue 应用中实现路由导航。

> Vue Route 允许你通过声明式的方式定义应用的导航规则，并提供了一些组件和 API 来实现页面间的切换和数据传递。

### Vue Router 的基本用法：

1. **安装和引入：**

   首先，你需要安装 Vue Router：

   ```bash
   npm install vue-router
   ```

   然后，在你的 Vue 项目中引入并使用它：

   ```javascript
   // main.js
   import Vue from "vue";
   import App from "./App.vue";
   import VueRouter from "vue-router";

   Vue.use(VueRouter);

   const router = new VueRouter({
     routes: [
       { path: "/", component: Home },
       { path: "/about", component: About },
       // 其他路由配置
     ],
   });

   new Vue({
     render: (h) => h(App),
     router,
   }).$mount("#app");
   ```

2. **路由视图：**

   在你的应用模板中，使用 `<router-view>` 来显示匹配到的组件：

   ```vue
   <!-- App.vue -->
   <template>
     <div id="app">
       <router-view></router-view>
     </div>
   </template>
   ```

3. **导航链接：**

   使用 `<router-link>` 来创建导航链接：

   ```vue
   <!-- App.vue -->
   <template>
     <div id="app">
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>

       <router-view></router-view>
     </div>
   </template>
   ```

### 路由导航守卫：

Vue Router 提供了一系列的导航守卫，允许你在路由切换前后执行一些逻辑。以下是一些常用的导航守卫：

1. **全局前置守卫 (`beforeEach`)：**

   在路由切换开始之前执行，常用于进行权限验证。

   ```javascript
   router.beforeEach((to, from, next) => {
     // 在路由切换前执行逻辑
     // 可以进行权限验证等操作
     next(); // 执行 next() 表示继续路由切换，不执行表示中断切换
   });
   ```

2. **全局解析守卫 (`beforeResolve`)：**

   在导航被确认之前执行，和 `beforeEach` 类似，但是在组件内的 `beforeRouteEnter` 守卫之后触发。

   ```javascript
   router.beforeResolve((to, from, next) => {
     // 在导航被确认之前执行
     next();
   });
   ```

3. **全局后置守卫 (`afterEach`)：**

   在路由切换完成之后执行，无论导航成功还是失败都会被调用。

   ```javascript
   router.afterEach((to, from) => {
     // 在路由切换完成之后执行
   });
   ```

4. **路由独享的守卫：**

   你可以在单个路由配置中定义独享的守卫：

   ```javascript
   const router = new VueRouter({
     routes: [
       {
         path: "/profile",
         component: Profile,
         beforeEnter: (to, from, next) => {
           // 在进入路由前执行逻辑
           next();
         },
       },
     ],
   });
   ```

5. **组件内的守卫 (`beforeRouteEnter`, `beforeRouteUpdate`, `beforeRouteLeave`)：**

   这些守卫可以在组件内部直接定义，分别在组件被创建、复用和销毁时触发。

   ```javascript
   export default {
     beforeRouteEnter(to, from, next) {
       // 在组件被创建时执行
       next();
     },
     beforeRouteUpdate(to, from, next) {
       // 在路由变化时组件被复用时执行
       next();
     },
     beforeRouteLeave(to, from, next) {
       // 在离开组件时执行
     },
   };
   ```

## 七: Mixin
> 在 Vue 中，Mixin 是一种用于组件复用的特性。Mixin 允许你在多个组件之间共享 Vue 组件的选项，比如 data、methods、生命周期钩子等。通过使用 Mixin，你可以将一些通用的逻辑或功能封装在一个对象中，然后在多个组件中引入这个 Mixin，以达到代码复用的目的。

### 如何使用 Mixin：

1. **定义 Mixin：**

   ```javascript
   // myMixin.js
   export const myMixin = {
     data() {
       return {
         message: 'Hello from Mixin!',
       };
     },
     methods: {
       logMessage() {
         console.log(this.message);
       },
     },
   };
   ```

2. **在组件中引入 Mixin：**

   ```vue
   <!-- MyComponent.vue -->
   <template>
     <div>
       <p>{{ message }}</p>
       <button @click="logMessage">Log Message</button>
     </div>
   </template>

   <script>
   import { myMixin } from './myMixin';

   export default {
     mixins: [myMixin],
     // 组件的其他选项
   };
   </script>
   ```

### 注意事项：

1. **数据合并：**

   如果 Mixin 和组件有相同的选项（如 data、methods 等），Vue 会进行合并。数据选项会被合并成一个对象，methods 会被合并成一个包含了组件和 Mixin 中方法的数组。当有冲突时，组件选项会覆盖 Mixin 中的选项。

2. **生命周期钩子的执行顺序：**

   Vue 会按照创建实例的顺序调用生命周期钩子，先调用 Mixin 的生命周期钩子，然后再调用组件的生命周期钩子。

3. **全局 Mixin：**

   你也可以通过 `Vue.mixin` 全局注册 Mixin，但要谨慎使用全局 Mixin，因为它会影响所有组件。

   ```javascript
   // main.js
   import Vue from 'vue';
   import { myMixin } from './myMixin';

   Vue.mixin(myMixin);
   ```

   全局 Mixin 可能会导致命名冲突和意外行为，建议在组件内使用 Mixin。

4. **避免滥用 Mixin：**

   Mixin 是一个强大的工具，但滥用 Mixin 可能导致代码难以理解和维护。建议在必要的时候使用 Mixin，尽量保持组件的简洁性和可读性。

总体而言，Mixin 是一个方便的工具，可以帮助你在 Vue 组件之间共享代码和逻辑。然而，在使用时需要注意一些合并规则和生命周期钩子的执行顺序，以避免潜在的问题。

## 八: 在 Vue 3 中，Mixin 的概念仍然存在，但 Vue 3 推荐使用 Composition API 来实现组件之间的代码复用，而不再依赖于 Mixin。Composition API 是 Vue 3 中引入的一种新的组织组件逻辑的方式。

### Composition API：

Composition API 提供了一组函数和语法糖，使得组件的逻辑可以更灵活地组织和复用。与 Mixin 不同，Composition API 允许你将相关逻辑集中到一个函数中，并在组件中进行引用。

#### 举例：

```vue
<!-- MyComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="logMessage">Log Message</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

// 使用 Composition API
export default {
  setup() {
    const message = ref('Hello from Composition API!');

    const logMessage = () => {
      console.log(message.value);
    };

    // 生命周期钩子
    onMounted(() => {
      console.log('Component is mounted!');
    });

    return {
      message,
      logMessage,
    };
  },
};
</script>
```

在上述例子中，`setup` 函数中使用了 `ref` 创建了响应式变量 `message`，并定义了 `logMessage` 函数。`onMounted` 是一个 Composition API 提供的生命周期钩子，用于在组件被挂载后执行。

### Composition API 的优势：

1. **逻辑封装更直观：** 使用 Composition API，你可以将相关逻辑封装到一个函数中，使得组件的逻辑更加清晰和直观。

2. **逻辑复用更灵活：** 通过函数的形式，你可以更自由地选择性地引用逻辑函数，实现更灵活的代码复用。

3. **类型推导更强大：** Composition API 提供了更好的类型推导支持，使得在使用 TypeScript 时更容易进行类型检查。

虽然 Mixin 仍然可用，但 Vue 3 引入的 Composition API 提供了更强大和灵活的方式来组织组件逻辑，是 Vue 3 推荐的代码复用方式。
