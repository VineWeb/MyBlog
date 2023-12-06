# CSS
> CSS（Cascading Style Sheets）是一种样式表语言，用于描述HTML或XML文档的外观和样式。通过CSS，开发者可以控制页面的布局、颜色、字体、大小以及其他视觉方面的样式。以下是CSS的一些基本概念和常见用法：
## CSS简介
### 1. CSS语法：

CSS的语法由选择器和声明块组成，声明块中包含一个或多个属性-值对。

```css
/* 选择器 */
selector {
    /* 属性-值对 */
    property: value;
}
```

### 2. 选择器（Selectors）：

- **元素选择器：** 选择HTML元素。例如，`p`表示选择所有段落。
- **类选择器：** 选择具有特定类的元素。例如，`.classname`表示选择所有具有`classname`类的元素。
- **ID选择器：** 选择具有特定ID的元素。例如，`#id`表示选择具有`id`为`id`的元素。
- **属性选择器：** 选择具有特定属性或属性值的元素。例如，`[attribute=value]`表示选择具有`attribute`属性且值为`value`的元素。
- **伪类和伪元素：** 通过使用冒号（:）来选择元素的特定状态或位置。例如，`:hover`表示选择鼠标悬停的元素，`::before`表示选择元素的前面插入的内容。

### 3. CSS属性：

- **颜色属性：** `color`用于定义文本颜色，`background-color`用于定义背景颜色。
- **字体属性：** `font-family`定义字体，`font-size`定义字体大小，`font-weight`定义字体粗细。
- **文本属性：** `text-align`定义文本水平对齐方式，`line-height`定义行高，`text-decoration`定义文本修饰（如下划线）。
- **盒模型属性：** `width`和`height`定义元素的宽度和高度，`margin`和`padding`定义外边距和内边距。

### 4. CSS盒模型：

每个HTML元素都被看作一个矩形框，具有内容区、内边距、边框和外边距。

- **内容区（Content Area）：** 包含元素的实际内容，由`width`和`height`定义。
- **内边距（Padding）：** 包围在内容区域外部，由`padding`定义。
- **边框（Border）：** 包围在内边距外部，由`border`定义。
- **外边距（Margin）：** 包围在边框外部，由`margin`定义。

### 5. CSS布局：

- **定位（Positioning）：** 使用`position`属性定义元素的定位方式，如`relative`、`absolute`、`fixed`等。
- **浮动（Floating）：** 使用`float`属性将元素浮动到左或右。
- **弹性盒子布局（Flexbox）：** 使用`display: flex`创建弹性容器，通过`justify-content`和`align-items`等属性控制子元素的布局。
- **栅格布局（Grid）：** 使用`display: grid`创建栅格容器，通过`grid-template-columns`和`grid-template-rows`等属性定义列和行。

以上是CSS的一些基本概念和用法，CSS的功能非常丰富，可以用于实现各种复杂的布局和样式效果。在实际开发中，通常会结合HTML和JavaScript一起使用，以创建富有交互性和视觉吸引力的Web页面。

## CSS3新特性

CSS3引入了许多新特性，增强了对样式和布局的控制，使得前端开发更加灵活和强大。以下是一些CSS3的新特性：

### 1. 选择器：

- **属性选择器的增强：** CSS3引入了更多强大的属性选择器，如属性存在性检测、属性值包含、以及属性值前缀和后缀匹配等。

    ```css
    /* 例如，属性存在性检测 */
    input[type="text"] {
        /* 样式 */
    }
    ```

- **伪类和伪元素的扩展：** 引入了新的伪类和伪元素，如`:nth-child`、`:nth-of-type`、`::before`、`::after`等。

    ```css
    /* 例如，nth-child选择器 */
    li:nth-child(2n) {
        /* 样式 */
    }
    ```

### 2. 盒模型：

- **圆角（Border Radius）：** 通过`border-radius`属性为元素添加圆角。

    ```css
    div {
        border-radius: 10px;
    }
    ```

- **阴影（Box Shadow）：** 通过`box-shadow`属性为元素添加阴影效果。

    ```css
    div {
        box-shadow: 5px 5px 10px #888888;
    }
    ```

### 3. 背景和渐变：

- **多背景图（Multiple Background Images）：** 允许一个元素同时设置多个背景图像。

    ```css
    div {
        background-image: url(image1.jpg), url(image2.jpg);
    }
    ```

- **线性渐变和径向渐变（Linear and Radial Gradients）：** 允许创建平滑的颜色渐变。

    ```css
    /* 线性渐变 */
    div {
        background: linear-gradient(to right, red, yellow);
    }

    /* 径向渐变 */
    div {
        background: radial-gradient(circle, red, yellow);
    }
    ```

### 4. 字体和文本效果：

- **Web字体（Web Fonts）：** 允许通过`@font-face`引入自定义字体。

    ```css
    @font-face {
        font-family: 'CustomFont';
        src: url('customfont.woff') format('woff');
    }

    body {
        font-family: 'CustomFont', sans-serif;
    }
    ```

- **文字阴影（Text Shadow）：** 通过`text-shadow`属性为文字添加阴影效果。

    ```css
    h1 {
        text-shadow: 2px 2px 2px #888888;
    }
    ```

### 5. 过渡和动画：

- **过渡（Transitions）：** 允许在元素的属性值发生变化时添加平滑的过渡效果。

    ```css
    div {
        transition: width 0.3s ease-in-out;
    }

    div:hover {
        width: 200px;
    }
    ```

- **动画（Animations）：** 允许通过`@keyframes`定义关键帧，实现更复杂的动画效果。

    ```css
    @keyframes slidein {
        from {
            margin-left: 100%;
        }
        to {
            margin-left: 0%;
        }
    }

    div {
        animation: slidein 3s ease-in-out;
    }
    ```

### 6. 布局：

- **Flexbox：** 引入了弹性盒子布局，通过`display: flex`实现更灵活的布局。

    ```css
    .container {
        display: flex;
        justify-content: space-between;
    }
    ```

- **Grid布局：** 允许通过`display: grid`实现网格布局，更直观地定义元素的排列。

    ```css
    .container {
        display: grid;
        grid-template-columns: 100px 100px 100px;
    }
    ```

这些特性使得CSS3更加强大和灵活，为开发者提供了更多的工具来创建现代化、交互性强的Web页面。在使用这些特性时，要注意浏览器的兼容性，并根据项目的需求谨慎选择使用。