<template>
  <h3>放大情况</h3>
  <div class="flex-container flex-grow">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
    <div class="sub-item">3</div>
  </div>
  <h3>缩小情况</h3>
  <div class="flex-container flex-shrink">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
    <div class="sub-item">3</div>
  </div>
  <h3>按照flex-basis占用大小，子项目全部宽度加起来大于容器宽度时候, flex-shrink设置为0不缩小</h3>
  <div class="flex-container flex-basis flex-shrink-0">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
    <div class="sub-item">3</div>
  </div>
  <h3>按照flex-basis占用大小，子项目全部宽度加起来小于容器宽度时候, flex-grow设置为0不放大</h3>
  <div class="flex-container flex-basis flex-grow-0">
    <div class="sub-item">1</div>
    <div class="sub-item">2</div>
    <div class="sub-item">3</div>
  </div>
  <h3>按照order的大小来排列, 数值越小, 排列越靠前, 默认为0</h3>
  <div class="flex-container1">
    <div class="sub-item1">1</div>
    <div class="sub-item1">2</div>
    <div class="sub-item1">3</div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.sub-item {
  margin-right: 10px;
  background-color: orange;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub-item1 {
  flex: 1;
  margin-right: 10px;
  background-color: orange;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.flex-container1 {
  width: 400px;
  height: 150px;
  background-color: skyblue;
  display: flex;
  margin-bottom: 20px;
  overflow: auto;
  @for $i from 1 to 10 {
    .sub-item1 {
      &:nth-child(#{$i}) {
        order: (#{10-$i});
      }
    }
  }
}

.flex-container {
  width: 400px;
  height: 150px;
  background-color: skyblue;
  display: flex;
  margin-bottom: 20px;
  overflow: auto;
}

.flex-grow {
  .sub-item {
    @for $i from 1 through 10 {
      &:nth-of-type(#{$i}) {
        flex-grow: (#{$i});
        // 在 flex 元素总和小于容器宽度时候, 下面的两行加不加效果都一致, 都会flex-grow对应放大
        flex-shrink: 0;
        flex-basis: 50px;
      }
    }
  }
}
.flex-shrink {
  .sub-item {
    width: 200px;
    @for $i from 1 through 10 {
      &:nth-of-type(#{$i}) {
        flex-shrink: (#{$i});
        // 在 flex 元素总和超出主轴后, 下面的两行加不加效果都一致, 都会flex-shrink对应缩小
        flex-grow: 0;
        flex-basis: 200px;
      }
    }
  }
}
.flex-basis {
  .sub-item {
    flex-basis: 200px;
  }
  &.flex-shrink-0 {
    .sub-item {
      flex-shrink: 0;
    }
  }
  &.flex-grow-0 {
    .sub-item {
      flex-basis: 100px;
      flex-grow: 0;
    }
  }
}
</style>