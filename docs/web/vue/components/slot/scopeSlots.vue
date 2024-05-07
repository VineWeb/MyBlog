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

<style scoped>

</style>