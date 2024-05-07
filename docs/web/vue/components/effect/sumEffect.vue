<template>
  <div>{{ counter }}</div>
  <div>{{ num1 }}</div>
  <div>{{ num2 }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const num1 = ref(0)
const num2 = ref(0)
let timer = 0
console.time('timer1')
const setTimer = () => {
  timer = setTimeout(() => {
    num1.value +=10;
    setTimer()
    if (num1.value>=1000) {
      console.timeEnd('timer1')
      clearTimeout(timer)
    }
  }, 16)
}
console.time('timer2')
const setTimer2 = () => {
  num2.value += 10
  if (num2.value < 1000) {
    requestAnimationFrame(setTimer2)
  } else {
    console.timeEnd('timer2')
  }
}
requestAnimationFrame(setTimer2)

// 定义计数器的目标值和持续时间
const endValue = 208977;
const duration = 3000; // 3秒

// 使用ref创建一个响应式的计数器变量
const counter = ref(0);
const startValue = 0;
let startTime: number | null = null;

// 更新计数器的函数
const updateCounter = (timestamp: number) => {
  if (startTime === null) {
    startTime = timestamp;
  }
  const elapsedTime = timestamp - startTime;
  const progress = Math.min(elapsedTime / duration, 1);

  counter.value = Math.floor(progress * (endValue - startValue) + startValue);

  if (progress < 1) {
    requestAnimationFrame(updateCounter);
  }
};
onMounted(() => {
  // 使用requestAnimationFrame开始动画
  requestAnimationFrame(updateCounter);
  setTimer()
});


</script>
