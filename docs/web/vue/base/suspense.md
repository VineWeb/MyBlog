# Suspense 组件
我们常常会将 `<Suspense>` 和 `<Transition>`、`<KeepAlive>` 等组件结合。要保证这些组件都能正常工作，嵌套的顺序非常重要。

另外，这些组件都通常与 Vue Router 中的 `<RouterView>` 组件结合使用。

下面的示例展示了如何嵌套这些组件，使它们都能按照预期的方式运行。若想组合得更简单，你也可以删除一些你不需要的组件：

```
<RouterView v-slot="{ Component }">
  <template v-if="Component">
    <Transition mode="out-in">
      <KeepAlive>
        <Suspense>
          <!-- 主要内容 -->
          <component :is="Component"></component>

          <!-- 加载中状态 -->
          <template #fallback>
            正在加载...
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
  </template>
</RouterView>
```
Vue Router 使用动态导入对懒加载组件进行了内置支持。这些与异步组件不同，目前他们不会触发 `<Suspense>`。但是，它们仍然可以有异步组件作为后代，这些组件可以照常触发 `<Suspense>`。

> 以下简单的一个父组件`parent.vue`和子组件`customSuspense.vue`的示例, 在`customSuspense.vue`进行一个ajax请求
```
// parent.vue
<div class="parent">
  <h3>我是父组件</h3>
  <Suspense>
    <template v-slot:default>
      <custom-suspense />
    </template>
    <template v-slot:fallback>
      <h2>加载中......</h2>
    </template>
  </Suspense>
</div>

<script setup lang="ts">
import { Suspense } from 'vue';
import customSuspense from './customSuspense.vue';
</script>
<style>
.parent {
  background-color: pink;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>
```
```
// customSuspense.vue
<template>
  <div class="child">
    <h3>我是子组件</h3>
    <p style="color: purple">{{ chp }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
 const chp = ref('')
  import axios from 'axios'
  const {data: {data: {text}}} = await axios.get('https://api.shadiao.pro/chp')
  chp.value = text

</script>

<style scoped>
  .child {
    margin-top: 20px;
    background-color: orange;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 5px;
  }
</style>
```

<div class="parent">
  <h3>我是父组件</h3>
  <Suspense>
    <template v-slot:default>
      <custom-suspense />
    </template>
    <template v-slot:fallback>
      <h2>加载中......</h2>
    </template>
  </Suspense>
</div>

<script setup lang="ts">
import { Suspense } from 'vue';
import customSuspense from './customSuspense.vue';
</script>
<style>
.parent {
  background-color: pink;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>