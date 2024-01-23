<template>
  <h3>align-items: flex-start;</h3>
  <div class="flex-container flex-start">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
  </div>
  <h3>align-items: flex-end;</h3>
  <div class="flex-container flex-end">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
  </div>
  <h3>align-items: center;</h3>
  <div class="flex-container flex-center">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
  </div>
  <h3>align-items: baseline;</h3>
  <div class="flex-container flex-baseline">
    <div class="sub-item" style="font-size: 52px;">text</div>
    <div class="sub-item">text</div>
    <div class="sub-item" style="font-size: 22px;">text</div>
    <div class="sub-item" style="font-size: 12px;">text</div>
  </div>
  <h3>align-items: stretch;</h3>
  <div class="flex-container flex-stretch">
    <div class="sub-item">1<span class="span"></span></div>
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
  margin-right: 10px;
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
  align-items: flex-start;
}
.flex-end {
  align-items: flex-end;
}
.flex-center {
  align-items: center;
}
.flex-baseline {
  align-items: baseline;
}
.flex-stretch {
  align-items: stretch;
  height: auto;
}
</style>