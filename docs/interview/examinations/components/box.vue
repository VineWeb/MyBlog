<template>
  <div style="display: flex;">
    <div class="box" ref="boxRef"></div>
    <div class="box1" ref="boxRef1"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const boxRef = ref<any>(null)
const boxRef1 = ref<any>(null)
onMounted(() => {
  // console.log(boxRef.value.clientWidth as any, 'boxRef.value.clientWidth') // 140 'boxRef.value.clientWidth'
  // console.log(boxRef.value.offsetWidth as any, 'boxRef.value.offsetWidth') // 144 'boxRef.value.offsetWidth'
  // console.log(boxRef.value.scrollWidth as any, 'boxRef.value.scrollWidth') // 140 'boxRef.value.scrollWidth'
  // console.log(boxRef1.value.clientWidth as any, 'boxRef1.value.clientWidth') // 96 'boxRef1.value.clientWidth'
  // console.log(boxRef1.value.offsetWidth as any, 'boxRef1.value.offsetWidth') // 100 'boxRef1.value.offsetWidth'
  // console.log(boxRef1.value.scrollWidth as any, 'boxRef1.value.scrollWidth') // 96 'boxRef1.value.scrollWidth'
})
</script>
<style lang="scss" scoped>
  .box {
    width: 100px;
    height: 100px;
    padding: 20px;
    border: 2px solid yellow;
    margin: 5px;
    background-color: red;
    box-sizing: content-box;
  }
  .box1 {
    width: 100px;
    height: 100px;
    padding: 20px;
    border: 2px solid green;
    margin: 5px;
    background-color: orange;
    box-sizing: border-box;
  }
</style>
   