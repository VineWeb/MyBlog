# 插槽Slots
## 默认插槽
> 默认插槽`mySlots.vue`代码如下:
```vue
<!-- 默认插槽 -->
<template>
  <div>
    <slot>默认的内容</slot>
  </div>
</template>

<script setup lang="ts">
</script>
```
## 具名插槽
> 具名插槽`nameSlots.vue`代码如下:
```vue
<!-- 具名插槽 -->
<template>
  <div class="container">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <p>默认的内容</p>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>

    <!-- 
      <template v-slot:[dynamicSlotName]>
      ...
      </template>
    -->

    <!-- 缩写为 -->
    <!--
      <template #[dynamicSlotName]>
      ...
      </template>
    -->
  </div>
</template>

<script setup lang="ts">

</script>
```
## 作用域插槽
> 具名插槽`scopeSlots.vue`代码如下:
```vue
<!-- 作用域插槽 -->
<template>
  <div class="container">
    <div class="scope">
      <slot :text="text" :count="count"></slot>
    </div>
    <el-button type="primary" @click="count+=1">点我+1</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const text = ref('作用域插槽')
const count = ref(1)
</script>

```

## 引用插槽
> `Index.vue`引用代码如下:

```vue
<template>
  <div>
    <div>
      <h3>这是默认的Slot: </h3>
      <mySlots>这是我的传入的内容</mySlots>
      <mySlots></mySlots>
    </div>

  <div>
    <h3>具名的Slot: </h3>
    <nameSlots>
      <template v-slot>这是中间的</template>
      <template v-slot:header>这是头部</template>
      <template #footer>这是尾部的</template>
    </nameSlots>
  </div>
  <div>
    <h3>作用域的Slot: </h3>
    <scopeSlots>
      <template v-slot="slotProps">
        <p>作用域的text: {{ slotProps.text }}</p>
        <p>作用域的Count: {{ slotProps.count }}</p>
      </template>
    </scopeSlots>
  </div>
  </div>
</template>

<script setup lang="ts">
import mySlots from './components/mySlots.vue';
import nameSlots from './components/nameSlots.vue';
// @ts-ignore
import scopeSlots from './components/scopeSlots.vue';
</script>

```
## 以下是真实的实现展示:
<Index />
<script setup>
import Index from './Index.vue'
</script>