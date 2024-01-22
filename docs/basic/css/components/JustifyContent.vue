<template>
  <h3>justify-content: flex-start;</h3>
  <div class="flex-container flex-start">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
  </div>
  <h3>justify-content: flex-end;</h3>
  <div class="flex-container flex-end">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
  </div>
  <h3>justify-content: center;</h3>
  <div class="flex-container flex-center">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
  </div>
  <h3>justify-content: space-between;</h3>
  <div class="flex-container flex-space-between">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
  </div>
  <h3>justify-content: flex-space-around;</h3>
  <div class="flex-container flex-space-around">
    <div class="sub-item">1：<span class="span">左侧离左侧为右侧间隔的一半</span></div>
    <div class="sub-item">2</div>
    <div class="sub-item">3</div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.span {
  font-size: 18px;
  transform: scale(0.5);
}
.sub-item {
  width: 100px;
  height: 100px;
  background-color: orange;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-container {
  width: 500px;
  height: 150px;
  background-color: skyblue;
  display: flex;
  margin-bottom: 20px;
}
.flex-start {
  justify-content: flex-start;
}
.flex-end {
  justify-content: flex-end;
}
.flex-center {
  justify-content: center;
}
.flex-space-between {
  justify-content: space-between;
}
.flex-space-around {
  justify-content: space-around;
}
</style>