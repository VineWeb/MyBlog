<template>
  <el-button @click="show = !show">Toggle</el-button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(true)
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>