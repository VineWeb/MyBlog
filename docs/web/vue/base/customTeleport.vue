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