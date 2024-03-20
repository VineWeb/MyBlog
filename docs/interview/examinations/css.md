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

## 5. 回流和重绘是什么? 如何区分?
- 回流：布局引擎会根据各种样式计算每个盒子在页面的大小和位置。
- 重绘：当计算好盒模型的位置，大小以及其他属性后，浏览器根据每个盒子特性进行绘制。
- ！！！回流必定触发重绘，重绘不一定会引起回流。
### 5.1 浏览器解析渲染机制
1. 解析HTML，生成DOM树；解析CSS，生成CSSOM树。
2. 将DOM树和CSSOM树结合，生成渲染树（Render Tree）。
3. Layout（回流）：根据生成的渲染树，进行回流（Layout），得到节点的几何信息（位置，大小）
4. Painting（重绘）：根据渲染树以及回流得到的几何信息，得到节点的绝对像素
5. Display：将像素发送给GPU，展示在页面上。
### 5.2 回流（重排）的触发时机
> 回流主要是计算**节点的位置**和**几何信息**，当页面布局发生改变或者几何信息发生变化的时候，就会触发回流
1. 添加和删除可见的DOM元素
2. 元素的位置发生变化
3. 元素的大小发生变化（外边距，内边距，边框大小，宽度和高度等）
4. 内容发生变化，文本变化或者图片发生改变
5. 页面一开始渲染的时候（无法避免）
6. 浏览器的窗口变化
7. 通过api获取距离值
  > offsetTop、offsetLeft、offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientWidth、clientHeight、clientLeft、clientTop、`getComputedStyle`
  上述的属性有一个**共性**: 需要通过即时计算获取。所以需要触发**回流**获得。
### 5.3 重绘的触发时机
> **回流(重排)**一定会触发**重绘**
1. 颜色的改变(color, background)
2. 阴影的修改
### 5.4 如何减少回流(重排)
1. 设定元素的样式，应通过改变元素的`class`类名
2. 避免设置多项内联样式
3. 应用元素的动画，使用`position`的`fixed`和`absolute`使得元素脱离文档流。
4. 使用`transform`、`opacity`、`filters`动画属性
5. js插入节点或者js改变样式时候常用三种方式
```
// 1. 缓存值
// 多次触发回流
const el = document.getElementById('el')
for ( let i = 0; i < 10; i++ ) {
  el.style.top = el.offsetTop + 10 + 'px'
  el.style.left = el.offsetLeft + 10 + 'px'
}

// 合并计算, 优化回流
const el = document.getElementById('el')
let offTop = el.offsetTop;
let offLeft = el.offsetLeft;

// 循环计算
for ( let i = 0; i < 10; i++ ) {
  offTop += 10
  offLeft += 10
}

// 最后再进行赋值
el.style.top = offTop + 'px'
el.style.left = offLeft + 'px'

```

```
// 2. 使用类名合并样式更改
// 触发回流
const box = document.getElementById('box')
box.style.width = '100px'
box.style.height = '100px'
box.style.border = '1px solid #eeeeee'
box.style.backgroundColor = 'skyblue'
<style>
.blue {
  width: 100px;
  height: 100px;
  border: 1px solid #eeeeee;
  background-color: skyblue;
}
<style/>

<script>
const box = document.getElementById('box')
box.classList.add('blue')
</script>
```

```
// 3. 通过设置元素`display:none`后再设置`display: block`;
// 触发回流
const box = document.getElementById('box');
box.style.width = '100px';
box.style.height = '100px';
box.style.border = '1px solid #eeeeee';
box.style.backgroundColor = 'skyblue';

// 设置display: none 再设置回来
const box = document.getElementById('box');
box.style.dispaly = 'none';
box.style.width = '100px';
box.style.height = '100px';
box.style.border = '1px solid #eeeeee';
box.style.backgroundColor = 'skyblue';
box.style.dispaly = 'block';
```
## 6. CSS优化性能
1. 内联首屏主要的css
2. 异步加载其他css
3. css资源压缩
4. 合理使用选择器
5. 减少使用或者避免使用`@import`
6. 减少回流(重排)操作
7. css3动画尽量使用`transform`
<script lang='ts' setup>
  // 1.x
  import BoxPng from './images/box_css.png'
  import ImgShow from './components/imgShow.vue'
  import Box from './components/box.vue'
</script>