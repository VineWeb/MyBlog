# HTML
> HTML（Hypertext Markup Language）是一种用于构建和表示网页结构的标记语言。HTML由一系列的标签（tag）组成，这些标签用来描述文档的结构和内容。下面是HTML的一些基本要素和常用标签：
## HTML简介
### 1. HTML文档结构：

```html
<!DOCTYPE html>
<html>
<head>
    <title>文档标题</title>
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```

- `<!DOCTYPE html>`：定义文档类型和版本。
- `<html>`：HTML文档的根元素。
- `<head>`：包含文档的元信息，如标题、字符集等。
- `<title>`：定义网页的标题，显示在浏览器标签页上。
- `<body>`：包含实际的页面内容。

### 2. 常用文本标签：

- `<h1>` to `<h6>`：定义标题，级别从1到6，h1最大，h6最小。
- `<p>`：定义段落。
- `<a>`：定义超链接。
- `<strong>`：定义强调文本，通常显示为粗体。
- `<em>`：定义强调文本，通常显示为斜体。
- `<span>`：用于组合文本的容器，通常用于样式设置。

### 3. 列表标签：

- `<ul>`：定义无序列表。
- `<ol>`：定义有序列表。
- `<li>`：定义列表项。

### 4. 表格标签：

```html
<table>
    <thead>
        <tr>
            <th>表头1</th>
            <th>表头2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>行1列1</td>
            <td>行1列2</td>
        </tr>
        <tr>
            <td>行2列1</td>
            <td>行2列2</td>
        </tr>
    </tbody>
</table>
```

- `<table>`：定义表格。
- `<thead>`：定义表头部分。
- `<tbody>`：定义表格主体部分。
- `<tr>`：定义表格行。
- `<th>`：定义表头单元格。
- `<td>`：定义数据单元格。

### 5. 表单标签：

```html
<form action="/submit" method="post">
    <label for="username">用户名：</label>
    <input type="text" id="username" name="username" required>
    <br>
    <label for="password">密码：</label>
    <input type="password" id="password" name="password" required>
    <br>
    <input type="submit" value="提交">
</form>
```

- `<form>`：定义表单。
- `<label>`：定义表单标签。
- `<input>`：定义输入框。
- `type="text"`：文本输入框。
- `type="password"`：密码输入框。
- `type="submit"`：提交按钮。
- `required`：要求用户填写该字段。

这只是HTML的一小部分内容，HTML还有很多其他标签和属性，用于描述更复杂的页面结构和内容。在实际开发中，HTML通常与CSS（样式表）和JavaScript（脚本语言）一起使用，以创建丰富和交互性强的网页。

## HTML5
> HTML5（Hypertext Markup Language, version 5）是HTML的第五个主要版本，引入了许多新特性和改进，以支持现代Web应用的开发。以下是一些HTML5的常见特性：

1. **语义化标签：**
   - 引入了更多的语义化标签，如`<header>`、`<footer>`、`<nav>`、`<article>`、`<section>`等，使页面结构更加清晰，有助于搜索引擎理解和索引。

2. **多媒体元素：**
   - 新增`<audio>`和`<video>`标签，使得在页面上嵌入音频和视频更加简单。同时，引入了`<source>`标签，支持多个媒体源，以增加兼容性。

3. **Canvas绘图：**
   - 引入了`<canvas>`元素，提供了通过JavaScript绘制图形、图像和动画的功能，为游戏和图形应用提供了更好的支持。

4. **本地存储：**
   - 提供了`localStorage`和`sessionStorage`，允许网页在客户端本地存储数据，以便在页面刷新或重新访问时保留数据。

5. **Web存储：**
   - 引入了`IndexedDB`，为大规模数据的客户端存储提供了解决方案，可在离线状态下访问数据。

6. **新表单元素：**
   - 新增了一些表单元素，如`<input>`的新类型，包括`date`、`email`、`url`等，以及`<datalist>`元素，用于提供输入字段的预定义选项列表。

7. **SVG和MathML：**
   - HTML5原生支持可缩放矢量图形（SVG）和数学标记语言（MathML），使得在网页上嵌入高质量的图形和数学公式更加方便。

8. **WebSocket：**
   - 引入了WebSocket API，支持在浏览器和服务器之间建立持久的双向通信，提供更高效的实时通信方式。

9. **Web Workers：**
   - 支持在后台运行的Web Workers，允许在单独的线程中执行脚本，提高Web应用的性能和响应性。

10. **Geolocation API：**
    - 提供了`navigator.geolocation`对象，使得浏览器能够获取用户的地理位置信息。

11. **拖放API：**
    - 引入了拖放API，通过`draggable`属性和相关事件，使得元素之间的拖拽和释放更加容易实现。

这些特性使HTML5成为一种更强大、更灵活的标记语言，为开发者提供了丰富的工具和功能，以构建现代Web应用。