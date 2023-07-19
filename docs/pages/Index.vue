<template>
  <div class="vc-index">
    <el-tag class="mr-4" v-for="item in tags" :key="item.id" :type="item.type">{{ item.name }}</el-tag>
    <el-col class="mt-8 poetry"> 每日歌词：{{ poetryItem?.content }}</el-col>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { nanoid } from 'nanoid';
import { useRandomItem } from '../hooks/usePoetry.js';
const { poetryItem } = useRandomItem();
const formPoetry = ref({})
const tags = [
  { id: nanoid(), name: '代码', type: '' },
  { id: nanoid(), name: '生活', type: 'success' },
  { id: nanoid(), name: '时事', type: 'info' },
  { id: nanoid(), name: '学习', type: 'warning' },
  { id: nanoid(), name: '看书', type: 'danger' },
]

// 在组件挂载后，初始化 formPoetry 的值为随机项的值
onMounted(() => {
  formPoetry.value = poetryItem;
});
</script>

<style lang="scss" scoped>
.poetry {
  font-weight: bold;
  background: linear-gradient(45deg, #ff0, #99ccff); /* 渐变背景颜色 */
  background-clip: text; /* 文字裁剪为渐变 */
  -webkit-background-clip: text; /* Safari 支持 */
  color: transparent; /* 隐藏原始文字颜色 */
  mix-blend-mode: difference; /* 使用混合模式 */
  animation: lyricsAnimation 5s linear infinite; /* 添加动画效果 */
  background-size: 200% 200%; /* 背景大小为文字的两倍 */
}
/* 定义动画的关键帧 */
@keyframes lyricsAnimation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
</style>