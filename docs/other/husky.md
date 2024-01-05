# husky 

## 1.安装

```bash
  npm install husky --save-dev
```

## 2.用法
> 编辑package.json > prepare脚本并运行一次：
```bash
npm pkg set scripts.prepare="husky install" 
npm run prepare
```
> 添加一个钩子：
```bash
npx husky add .husky/pre-commit " npm run format " 
git add .husky/pre-commit
```
> 进行提交：
```bash
git commit -m '提交pre-commit'
# `npm run format` 将运行
```

## package.json

```json
 "husky": {
    "pre-commit": "npm run format"
  },
  "scripts": {
    "prepare": "husky install",
    "format": "prettier --write . && git add ."
  }
```

## 出现以下警告
> warning: LF will be replaced by CRLF in .husky/pre-commit.
> The file will have its original line endings in your working directory
该警告是因为 Git 在检出文件时，发现文件的行尾符 (`LF`, Unix 风格) 将被替换为 `CRLF` (Windows 风格)。这可能是因为 Git 的 `core.autocrlf` 设置或者 `.gitattributes` 文件中的配置导致的。

要解决这个问题，你可以按照以下步骤之一进行操作：

### 1. 确认 `.gitattributes` 配置

检查你的项目中是否存在名为 `.gitattributes` 的文件，并确保其中没有针对 `*.vue` 文件指定的行尾符转换规则。如果存在，请检查和修改该文件。

```plaintext
# .gitattributes
*.vue text eol=lf
```

### 2. 检查 `core.autocrlf` 设置

在 Git 中，`core.autocrlf` 是一个配置项，它决定了是否在检出和提交时自动转换行尾符。在 Windows 环境下，有时会出现这个问题。

可以通过以下命令查看当前的配置：

```bash
git config core.autocrlf
```

如果返回 `true`，表示启用了自动转换。你可以通过以下命令禁用它：

```bash
git config --global core.autocrlf false
```

### 3. 使用 .editorconfig 文件

你还可以使用 `.editorconfig` 文件来指定项目的代码风格和行尾符处理方式。在项目根目录创建一个名为 `.editorconfig` 的文件，并添加如下内容：

```plaintext
# .editorconfig
[*]
end_of_line = lf
```

然后，确保你的编辑器支持 `.editorconfig` 文件，并在项目中生效。

无论你选择哪种方式，都应该解决 Git 提示的行尾符问题。