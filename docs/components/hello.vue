<template>
  <div class="text-3xl font-bold underline text-orange-800">
    This is Hello world
  </div>
  <p class="text-white p">这是p标签</p>
  <p class="text-orange-800">这是p标签</p>
  <div class="flex items-center text-white">
    <el-tag class="vn-tag ml-2" v-for="(item, itemIndex) in tags" :key="item.id" :type="item.type">{{ item.name }}</el-tag>
  </div>
  <br/>
  <el-button type="primary" @click="onClick">Click Me consolelog song</el-button>
</template>

<script setup>
const tags = [
  { name: '前端', id: 0, type: 'success' },
  { name: '时事', id: 1, type: 'info' },
  { name: '杂文', id: 2, type: 'warning' },
];
const onClick = () => {
  console.log('宋老师')
}
</script>

<style lang="scss" scoped>

</style>