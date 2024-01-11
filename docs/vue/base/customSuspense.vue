<template>
  <div class="child">
    <h3>我是子组件</h3>
    <p style="color: purple">{{ chp }}</p>
  </div>
</template>

<script setup lang="ts">
 // @ts-nocheck
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