# Pinia 
## 一: Pinia 简介
> Pinia 是一个基于 Vue 3 的状态管理库，用于管理 Vue.js 应用中的状态。它提供了类似于 Vuex 的状态管理功能，但是在一些方面进行了改进，并且专为 Vue 3 进行了优化。

### Pinia 的核心概念：

1. **Store（仓库）：**

   在 Pinia 中，状态被组织成一个个的 Store，每个 Store 对应应用中的一个模块化状态单元。Store 包含了该模块的状态（state）、获取器（getter）、动作（action）等。

   ```javascript
   // 示例
   import { createPinia } from 'pinia';

   const pinia = createPinia();

   const counterStore = pinia.defineStore('counter', {
     state: () => ({
       count: 0
     }),
     getters: {
       doubleCount: state => state.count * 2
     },
     actions: {
       increment() {
         this.state.count++;
       },
       asyncIncrement() {
         setTimeout(() => {
           this.increment();
         }, 1000);
       }
     }
   });
   ```

2. **State（状态）：**

   State 是 Store 中的数据状态，它是响应式的，意味着当 State 发生变化时，相关的组件会自动重新渲染。

   ```javascript
   // 示例
   const counterStore = pinia.defineStore('counter', {
     state: () => ({
       count: 0
     })
   });
   ```

3. **Getter（获取器）：**

   Getter 允许你从 Store 中获取计算后的状态，类似于 Vuex 中的 Getter。

   ```javascript
   // 示例
   const counterStore = pinia.defineStore('counter', {
     state: () => ({
       count: 0
     }),
     getters: {
       doubleCount: state => state.count * 2
     }
   });
   ```

4. **Action（动作）：**

   Action 是用于操作 State 的函数，可以包含异步操作，类似于 Vuex 中的 Action。

   ```javascript
   // 示例
   const counterStore = pinia.defineStore('counter', {
     state: () => ({
       count: 0
     }),
     actions: {
       increment() {
         this.state.count++;
       },
       asyncIncrement() {
         setTimeout(() => {
           this.increment();
         }, 1000);
       }
     }
   });
   ```

5. **Plugin（插件）：**

   Pinia 支持插件，你可以通过插件来扩展或修改 Store 的行为。

   ```javascript
   // 示例
   const myPlugin = (context) => {
     // 在 Store 创建后调用
     context.$onStoreCreated(store => {
       // 在 Store 创建时执行一些逻辑
     });
   };

   const pinia = createPinia({
     plugins: [myPlugin]
   });
   ```

6. **Devtools（开发者工具）：**

   Pinia 提供了开发者工具，使你能够更方便地调试和监控你的状态变化。

   ```javascript
   // 示例
   import { createPinia } from 'pinia';

   const pinia = createPinia();
   app.use(pinia);
   ```

这些核心概念使得 Pinia 能够提供一个简洁而强大的状态管理解决方案，特别是对于 Vue 3 生态系统。 Pinia 被设计成轻量、灵活，并充分利用 Vue 3 的新特性，使得状态管理在 Vue 3 项目中更加直观和高效。

## 二: 在 Vue 3 中，使用 Pinia 结合 `setup` 函数编写 Store 和在组件中使用 Pinia 的步骤如下：

### 编写 Pinia Store：

1. **安装 Pinia：**

   ```bash
   npm install pinia
   ```

2. **创建 Pinia Store 文件：**

   在你的项目中创建一个 Pinia Store 文件，比如 `counterStore.js`：

   ```javascript
   // counterStore.js
   import { defineStore } from 'pinia';

   export const useCounterStore = defineStore('counter', {
     state: () => ({
       count: 0,
     }),
     actions: {
       increment() {
         this.count++;
       },
     },
   });
   ```

### 在组件中使用 Pinia：

1. **安装 Pinia：**

   在你的 Vue 3 项目中，确保已经安装了 Pinia：

   ```bash
   npm install pinia
   ```

2. **创建和使用组件：**

   在组件中使用 Pinia 的 `useStore` 函数获取 Store 实例，并在 `setup` 函数中使用：

   ```vue
   <!-- Counter.vue -->
   <template>
     <div>
       <p>Count: {{ counter }}</p>
       <button @click="increment">Increment</button>
     </div>
   </template>

   <script>
   import { ref, defineComponent } from 'vue';
   import { useCounterStore } from '../stores';

   export default defineComponent({
     setup() {
       // 使用 Pinia 的 Store
       const counterStore = useCounterStore();

       // 使用 ref 创建响应式变量
       const counter = ref(counterStore.state.count);

       // 监听 Store 中的 count 变化
       counterStore.$on('update:count', (newCount) => {
         counter.value = newCount;
       });

       // 定义组件的方法
       const increment = () => {
         counterStore.increment();
       };

       // 返回 setup 函数的上下文
       return {
         counter,
         increment,
       };
     },
   });
   </script>
   ```

在上述例子中，`useCounterStore` 函数用于获取 Pinia 的 Store 实例，然后在 `setup` 函数中创建了一个响应式变量 `counter`，并监听了 `update:count` 事件来更新 `counter` 变量。最后，定义了组件的 `increment` 方法。

这样，你就能够在 Vue 3 中使用 Pinia 并结合 `setup` 函数进行状态管理。

## 三: 修改数据，三种方式
1. **第一种：**
```js
counterStore.count +=1
```

2. **第二种：**
```js
counterStore.$patch({
  count: 95
})
```

3. **第三种：**
```js
counterStore.increment(1);
```

## 四: 使用的时候要变成响应式

```ts
import { useCounterStore } from '@/stores';
const countStore = useCounterStore()

// 使用响应式数据
import { storeToRefs } from "pinia";
const { count } = storeToRefs(countStore)

// 使用方法
countStore.increment(1)
```