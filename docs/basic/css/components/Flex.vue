<template>
  <div class="flex-container">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
    <div class="sub-item">3</div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  .sub-item {
    width: 100px;
    height: 100px;
    background-color: orange;
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>