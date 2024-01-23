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

## 5. 交叉轴垂直于主轴，交叉轴的对齐方式：align-items: flex-start | flex-end | center | baseline | stretch;

1. flex-start：交叉轴的起点对齐
2. flex-end：交叉轴的终点对齐
3. center: 交叉轴的中点对齐
4. baseline: 项目的第一行文字的基线对齐
5. stretch(默认值): 如果项目未设置高度或者设为auto，将占满当前容器的高度。
```
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
```
<AlignItems />
## 6. 项目的属性
> `flex`属性 `flex`属性是`flex-grow`, `flex-shrink`和`flex-basis`的简写，默认值是`1 0 auto`。后两个属性可选。
> `flex: [<flex-grow><flex-shrink>? || <flex-basis>]`
  
- 该属性有两个快捷值: `auto (1 1 auto)` 和 `none (0 0 auto)`
- 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
- 看到的 `flex: 1` 或者 `flex: 2` 等等。它相当于`flex: 1 1 0` 或者 `flex: 2 1 0`，元素可以在 `flex-basis 为 0` 的基础上伸缩。
> flex 简写形式中第一个数值是 flex-grow。赋值为正数的话是让元素增加所占空间。第二个数值是flex-shrink — 正数可以让它缩小所占空间，但是只有在 flex 元素总和超出主轴才会生效。最后一个数值是 flex-basis；flex 元素是在这个基准值的基础上缩放的。
- order属性：按照order的大小来排列, 数值越小, 排列越靠前, 默认为0
- align-self属性：align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
align-self: auto | flex-start | flex-end | center | baseline | stretch
```
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
```
<ItemAttrs />
## 7. 项目中内页表格不确定高度时候
```
<template>
  <div class="page-container">
    <div class="search-top">
      <el-input
      v-model="keyword"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
    </div>
    <div class="tag">
      <el-badge :value="12" class="item">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button>replies</el-button>
      </el-badge>
    </div>
    <div class="table-body">
      <!-- height="100%" 为了固定表头 -->
      <el-table :data="tableData" height="100%" style="width: 100%">
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" width="120" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick"
              >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue'
const keyword = ref('')
const select = ref('1')
const tableData = Array.from({length: 20}, (v, i) => {
  return {
    date: `2016-05-${3+i > 9 ? 3+i : '0'+(3+i)}`,
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  }
})
const handleClick = () => {
  console.log('click')
}
</script>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: 800px;
  background-color: pink;
  padding: 12px;
  display: flex;
  flex-direction: column;
  .tag {
    margin: 20px 0;
    .item {
      margin-right: 10px;
    }
  }
  .table-body {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
```
<OverflowFlex />
<script lang="ts" setup>
  import Flex from './components/Flex.vue'
  import DirectionColumn from './components/DirectionColumn.vue'
  import FlexWrap from './components/FlexWrap.vue'
  import JustifyContent from './components/JustifyContent.vue'
  import AlignItems from './components/AlignItems.vue'
  import ItemAttrs from './components/ItemAttrs.vue'
  import OverflowFlex from './components/OverflowFlex.vue'
</script>