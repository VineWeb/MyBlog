# vue 面试真题
## 1.谈谈对Vue的理解
1. vue是一套构建用户界面的**渐进式框架**
   - 声明式渲染 
   - 组件
   - 路由
   - 状态管理 vuex  pinia
   - 构建, webpack, vite
2. MVVM 模式
   - view  视图  (被 Vue 实例管理的 DOM 节点。)
   - viewModel 视图模型 (DOM Listenersm, Directives)  Vue实例(一个同步 Model 和 View 的对象)
   - model 模型  Plain Javascript Objects (数据对象)
3. 采用虚拟DOM  js对象 diff
4. 组件化: 实现高内聚, 低耦合, 单向数据流
   - 组件化开发能大幅度提高应用开发效率、测试性、复用性等
## 2.谈谈对SPA ( single page application )

| 特性             | 单页面应用 (SPA)                   | 多页面应用 (MPA)                   |
|------------------|-------------------------------------|-------------------------------------|
| 组成             | 一个主页面和页面组件                | 多个完整的页面                      |
| 刷新方式         | 局部刷新                            | 整页刷新                            |
| SEO 搜索引擎优化 | 无法实现                            | 容易实现                            |
| 页面切换         | 速度快，用户体验良好                | 切换加载资源，速度慢，用户体验差    |
| 维护成本         | 相对容易                            | 相对复杂                            |
1. 用户体验好, 快, 内容的改变不需要重新加载整个页面, 服务端压力小
2. SPA应用不利于搜索引擎的抓取
3. 首次渲染速度相对较慢, (第一次返回空的html, 需要再次请求首屏数据) 白屏时间长
   
## 3. 虚拟DOM
1. Virtual DOM 就是用js对象来描述真实DOM, 由于直接操作DOM性能低, 但是js对象操作效率高, 可以将DOM操作转化成js操作, 最终通过diff算法比对差异进行更新DOM(减少对真实DOM的操作)
2. 虚拟DOM不依赖真实平台环境从而也可以实现跨平台
3. VDOM如何生成?
   - 组件编写模板 - template
   - 模板会被编译器编译成渲染函数- render
   - 挂载中会调用render函数, 返回的对象就是虚拟dom
   - 会在后续的patch过程中进一步转化为真实dom
4. VDOM如何做diff
   - 挂载过程结束后, 会记录第一次生成的VDOM - oldVnode
   - 当响应式数据变化时, 将会引起组件重新render, 此时就会生成新的VDOM - newVnode
   - 使用oldVnode与newVnode做diff操作, 将更改的部分应到真实的DOM上, 从而转换为最小量的dom操作, 高效更新视图
## 4. 聊一聊对vue组件化的理解
- webComponent组件化的核心组成: 模板, 属性, 事件, 插槽, 生命周期
- 组件化好处: 高内聚, 可复用, 可组合
- 单向数据流, 或者vmodel
> vue中的每个组件都有渲染函数watcher/effect
> 数据是响应式的, 数据变化后会执行watcher/effect
> 组件要合理的划分, 如何不拆分组件, 那更新的时候整个页面都要重新渲染
> 如果过分的拆分组件, 导致watcher/effect过多, 也会造成性能浪费
## 5.vue3中的CompositionAPI的优势是?
1. vue2中采用的OptionsAPI, 用户提供的data, props, methods, computed, watch等属性, 用户编写复杂业务逻辑会出现大量的逻辑融合
2. Vue2中所有的属性都是通过this访问, this存在指向明确问题
3. vue2中很多未使用的方法和属性依旧会被打包, 并且所有的全局API都在Vue对象上公开, CompositionAPI对tree-shaking更加友好, 代码也更容易压缩
4. 组件逻辑共享问题, vue2采用的是mixins实现组件之间的逻辑共享, 但是会有数据来源不明确, 命名冲突, 数据覆盖等问题, Vue3使用CompositionAPI提取公共逻辑非常方便
5. 简单的组件仍然可以采用OptionsAPI进行编写, compositionAPI在复杂的逻辑中有着明显的优势
## 6. tree shaking
- Tree shaking是基于ES6模板语法 (import 和 exports) 
- 编译阶段就利用ES6 Module判断哪些模块已经加载使用
- 判断哪些模块和变量未被使用或者引用, 进而删除对应代码
  > 打包构建时候体积也会相对更小
  > 减少程序执行时间
  > 便于维护
## 7. **v-if** vs **v-show**
`v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。
`v-if` 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。
相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS `display` 属性会被切换。
总的来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。

## 8. **v-if** 和 **v-for**
> 警告! 同时使用 v-if 和 v-for 是不推荐的，因为这样二者的优先级不明显。请查看风格指南获得更多信息。
- 当 v-if 和 v-for 同时存在于一个元素上的时候，v-if 会首先被执行。
- 当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名：
```js
 // 这会抛出一个错误，因为属性 todo 此时
 // 没有在该实例上定义
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
```
在外新包装一层 `<template>` 再在其上使用 v-for 可以解决这个问题 (这也更加明显易读)：
```js
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```
## 9. vue3和vue2的区别
- 速度更快
  1. 重写了虚拟Dom实现
  2. 编译模板的优化
  3. 更高效的组件初始化
  4. update性能提高1.3~2倍
- 体积减少
  1. tree-shaking 基于ES6模板语法 (import 和 exports) 使用到什么函数就导入什么函数使用
  2. tree-shaking  打包出来的包体积变小了
- 更易维护
  1. compositon Api 可与现有的Options API一起使用
  2. 灵活的逻辑组合与复用
- 更接近原生
  1. 可以自定义渲染 API
- 更易使用
  1. 响应式 Api 暴露出来
- 更多的新特性
  1. Fragment 组件现在支持有多个根节点
  2. Teleport 是一种能够将我们的模板移动到 DOM 中 Vue app 之外的其他位置的技术，“传送门”
  3. Composition API 组合式`api`, 更加容易维护我们的代码, 将相同功能的变量进行一个集中式的管理
  4. CreteRenderer  自定义渲染器

## 10. `watch` 和 `watchEffect`
 `watch` 和 `watchEffect` 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：
 - `watch`只追踪明确侦听的数据源, 它不会追踪任何在回调中访问到的东西, 另外, 仅在数据源确实改变时才会触发回调。`watch`会避免在发生副作用时追踪依赖, 因此, 我们能更加精确地控制回调函数的触发时机
 - `watchEffect`, 则会在副作用发生期间追踪依赖。他会在同步执行过程中， 自动追踪所有能访问到的响应性数据。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。
```js
watch(
  source,
  (newValue, oldValue) => {
    // 立即执行，且当 `source` 改变时再次执行
  },
  { 
    immediate: true, // 立即执行
    deep: true, // 强制转成深层侦听器
  }
)

watchEffect(() => {
  /* 在响应式数据变化时同步执行 */
})
```

## 11. 简单说一下diff算法









## 12. 说一下vue2的双向绑定数据的原理
- `vue2`是采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个属性的`setter`，`getter`，在数据变动时发布消息给订阅者，出发相应的监听回调。



## 13. EventBus通常在同一个页面或者试图内通信是没有问题的。但是如果你跨页面，也就是跨Vue组件的生命周期之间进行通信，这种简单的EventBu是无法满足需求的。因为切换页面导致组件的挂载和销毁，丢失事件监听，或者事件监听还未开始。
