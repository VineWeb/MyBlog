# CSS 面试题
## 1. 盒子模型
### 1.1 文档布局, CSS基础盒模型由四个部分组成: 
1. `content`
2. `padding`
3. `border`
4. `margin`
<Box />

### 1.2 标准盒模型
> `width/height`只是内容宽/高度, 不包含了`padding`和`border`值
- 盒子总宽度 = width + padding + border + margin
   `width(100px)  + padding(2 * 20)px + border (2 * 2)px + margin(2 * 5)px = 154px` 
- 盒子总高度 = height + padding + border + margin
### 1.3 IE 怪异盒模型
> `width/height` 包含了`padding`和`border`值
- 盒子总宽度 = width `(100px)` + margin `(2 * 5)px`
 `width(100px) + margin(2 * 5)px = 110px` 
- 盒子总高度 = height + margin
### 1.4 一般获取的clientWidth
```
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
  console.log(boxRef.value.clientWidth as any, 'boxRef.value.clientWidth') // 140 'boxRef.value.clientWidth'
  console.log(boxRef.value.offsetWidth as any, 'boxRef.value.offsetWidth') // 144 'boxRef.value.offsetWidth'
  console.log(boxRef.value.scrollWidth as any, 'boxRef.value.scrollWidth') // 140 'boxRef.value.scrollWidth'
  console.log(boxRef1.value.clientWidth as any, 'boxRef1.value.clientWidth') // 96 'boxRef1.value.clientWidth'
  console.log(boxRef1.value.offsetWidth as any, 'boxRef1.value.offsetWidth') // 100 'boxRef1.value.offsetWidth'
  console.log(boxRef1.value.scrollWidth as any, 'boxRef1.value.scrollWidth') // 96 'boxRef1.value.scrollWidth'
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
```

### 1.5 图示
<ImgShow :url="BoxPng" />

## 2. BFC (Block Formatting Context), 即`块级格式化上下文`。
1. 防止margin重叠（塌陷）
2. 清除内部浮动
3. 进行多栏布局
**方式：**
- 浮动元素，即设置float值为left，right；
- 设置overflow值为auto，scroll，hidden；（不能设置为visible）
- 设置display的值为inline-block、flex，inline-flex，grid；
- 设置position的值为absolute，或者fixed。

## 3. 响应式布局
> 页面的设计根据设备的环境(系统平台(window, iphone， ipad)，屏幕尺寸等)进行响应的响应和调整。
> 同时适配PC + 平板 + 手机
- 实现响应式布局的方法有如下: 
### 3.1 媒体查询
> 通过媒体查询，可以通过给不同分辨率的设备编写不同的样式来实现响应的布局。
```
@media screen and (max-width: 1920px) {
  // 具体css规则
}
@media screen (min-width: 375px) and (max-width: 600px) {
  // 视口宽度在375px-600px之间
}
```
### 3.2. 百分比
- `width`和`height`属性的百分比是根据父标签的宽高来决定的。
- 子元素的`padding`和`margin`的百分比是相对于父标签的宽度来决定的。
- 子元素的`top/left`和`bottom/right`的百分比是相对于非`static`定位的父元素的高度/宽度
- border-radius是百分比的, 是相对于自身的宽度
### 3.3. vw/vh
- `vw`表示相对于视图窗口的宽度，`vh`表示相对于视图窗口高度。
- `1vw`等于视口宽度的百分之一
### 3.4. rem
- `rem`是相对于根元素`html`的`font-size`属性， 默认情况下浏览器字体大小为`16px`，此时的`1rem=16px`
```
// 动态设置根元素的字体大小
function initFontSize () {
  // 获取屏幕宽度
  const width = document.documentElement.clientWidth

  // 设置根元素的font-size
  document.documentElement.style.fontSize = width / 10 + 'px'
}
init()

// 监听窗口变化, 重新设置
window.addEventListener('resize', init)
```
## 4. CSS隐藏元素的方式
1. `display: none`
2. `visibility: hidden`
3. `opacity: 0`
4. `position: absolute; left: -2000px`, 隐藏元素在视口外
5. `设置height, width的元素属性都为0`
| CSS样式 | display: none | visibility: hidden | opacity: 0 |
| ------- | ------------ | ------------------ | ----------- |
| 页面中 | 不存在 | 存在 | 存在 |
| 重排 | 会 | 不会 | 不会 |
| 重绘 | 会 | 会 | 不一定 |
| 自身绑定事件 | 不触发 | 不触发 | 可触发 |
| transition | 不支持 | 支持 | 支持 |
| 子元素可复原 | 不能 | 能 | 不能 |
| 被遮挡的元素可触发事件 | 能 | 能 | 不能 |

## 5.
<script lang='ts' setup>
  // 1.x
  import BoxPng from './images/box_css.png'
  import ImgShow from './components/imgShow.vue'
  import Box from './components/box.vue'
</script>