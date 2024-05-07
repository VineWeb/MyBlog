# Transition 组件
> `<Transition>` 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。进入或离开可以由以下的条件之一触发：
- 由 v-if 所触发的切换
- 由 v-show 所触发的切换
- 由特殊元素 `<component>` 切换的动态组件
- 改变特殊的 key 属性
- 以下是最基本用法的示例：
```
<button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>
```

```
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
```
<custom-transition />
> 当一个 `<Transition>` 组件中的元素被插入或移除时，会发生下面这些事情：
1. Vue 会自动检测目标元素是否应用了 CSS 过渡或动画。如果是，则一些 CSS 过渡 class 会在适当的时机被添加和移除。

2. 如果有作为监听器的 JavaScript 钩子，这些钩子函数会在适当时机被调用。

3. 如果没有探测到 CSS 过渡或动画、也没有提供 JavaScript 钩子，那么 DOM 的插入、删除操作将在浏览器的下一个动画帧后执行。


<script lang='ts' setup>
import CustomTransition from './customTransition.vue'
</script>