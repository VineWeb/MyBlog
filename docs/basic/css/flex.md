# Flex
## 1. 基础布局: display: flex;
```
<template>
  <div class="flex-container">
    <div class="sub-item"></div>
    <div class="sub-item"></div>
    <div class="sub-item"></div>
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
```
<Flex />

## 2. 更改主轴方向: flex-direction: row | row-reverse | column | column-reverse;
1. row（默认值）：主轴为水平方向，起点在左端。
2. row-reverse：主轴为水平方向，起点在右端。
3. column：主轴为垂直方向，起点在上沿。
4. column-reverse：主轴为垂直方向，起点在下沿。
```
<template>
  <div class="flex-container">
    <div class="sub-item"></div>
    <div class="sub-item"></div>
    <div class="sub-item"></div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: column; // 主轴为垂直方向，起点在上沿
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
```
<DirectionColumn />
## 3. 换行: flex-wrap: nowrap | wrap | wrap-reverse;

1. nowrap（默认值）：不换行。
2. wrap：换行。
3. wrap-reverse: 换行, 第一行在下方
```
<template>
  <div class="flex-container">
    <div class="sub-item" v-for="i in 10" :key="i">{{ i }}</div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
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
```
<FlexWrap />

## 4.主轴上的对齐方式: justify-content: flex-start | flex-end | center | space-between | space-around;

1. flex-start（默认值）：左对齐
2. flex-end：右对齐
3. center：居中
4. space-between： 两端对齐，项目之间的间隔相等，两端贴左右两端
5. space-around：每个项目的两侧的间隔相等，就是说左右两端其实距离两端有半个间隔。
```
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
    <div class="sub-item">
      1：
      <span class="span">左侧离左侧为右侧间隔的一半</span>
    </div>
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
```
<JustifyContent />
<script lang="ts" setup>
  import Flex from './components/Flex.vue'
  import DirectionColumn from './components/DirectionColumn.vue'
  import FlexWrap from './components/FlexWrap.vue'
  import JustifyContent from './components/JustifyContent.vue'
</script>