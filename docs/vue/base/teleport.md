# Teleport
> `<Teleport>` 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。


> `<Teleport>` 接收一个 to prop 来指定传送的目标。to 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。这段代码的作用就是告诉 Vue“把以下模板片段传送到 body 标签下”。
代码如下: 
```
<template>
  <el-button @click="open = true">Open Modal</el-button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p><br/>
      <el-button @click="open = false">Close Modal</el-button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const open = ref(false)
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(0,0,0,.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
```
> 你可以点击下面这个按钮，然后通过浏览器的开发者工具，在 `<body>` 标签下找到模态框元素：

<custom-teleport />

<script lang='ts' setup>
import CustomTeleport from './customTeleport.vue'
</script>