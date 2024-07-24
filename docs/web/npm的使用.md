---
掌握常用的 npm 命令：简化你的项目管理
---
## 介绍

>  npm 是 Node.js 生态系统中最受欢迎的包管理工具之一。本文将介绍一些常用的 npm 命令，帮助你在项目开发中更高效地管理依赖项、运行脚本和执行其他常见任务。

## 初始化项目

   >  使用 `npm init` 命令可以初始化一个新的 npm 项目。它会引导你填写一些项目信息，并生成一个 `package.json` 文件，用于管理项目的元数据和依赖项。

   ```
   npm init
   ```

   > 当你运行 `npm init -y` 命令时，npm 会自动填充 `package.json` 文件的所有字段，并使用默认值来生成文件。你无需回答任何问题。
   >
   > -y` 参数表示 "yes"，即自动接受所有默认值。
   >
   > 这种方式适用于当你想要快速初始化一个新的 npm 项目，并且不需要在生成的 `package.json` 文件中进行任何自定义设置时。

   ```js
   npm init -y
   ```

## 安装依赖项

   使用 `npm install` 命令可以安装项目的依赖项。通过指定包名和版本号，你可以安装特定的包。

   > 安装指定包（最新版本）：

   ```
   npm install <package-name>
   ```

   > 安装指定包（指定版本）：

   ```
   npm install <package-name>@<version>
   ```

   > 安装开发依赖项（只在开发阶段使用）：

   ```
   npm install <package-name> --save-dev
   ```

## 更新依赖项

   使用 `npm update` 命令可以更新项目的依赖项。你可以选择更新所有依赖项或特定的依赖项。

   > 更新所有依赖项：

   ```
   npm update
   ```

   > 更新指定依赖项：

   ```
   npm update <package-name>
   ```

   > 更新指定依赖项：

   ```
   npm install <package-name>@latest
   ```

## 运行脚本

   `package.json` 文件中的 `scripts` 字段允许你定义自定义脚本。使用 `npm run` 命令可以运行这些脚本。

   > 运行脚本：

   ```
   npm run <script-name>
   ```

   > 例如，如果你的 `package.json` 文件中有一个名为 `start` 的脚本，你可以使用以下命令启动应用程序：

   ```
   npm run start
   ```

## 卸载依赖项

   使用 `npm uninstall` 命令可以卸载项目的依赖项。

   > 卸载指定依赖项：

   ```
   npm uninstall <package-name>
   ```

   > 卸载开发依赖项：

   ```
   npm uninstall <package-name> --save-dev
   ```

## 查看安装的依赖项

   > 使用 `npm list` 命令可以查看项目中安装的所有依赖项及其版本。

   ```
   npm list
   ```

   > 若要查看特定依赖项的详细信息，可以使用以下命令：

   ```
   npm list <package-name>
   ```

## 清理缓存

   > 使用 `npm cache clean` 命令可以清理 npm 缓存。

   ```
   npm cache clean
   ```

   这将删除缓存的包和数据，以释放磁盘空间。
## 依赖报错，同步`package-lock.json`，等
   > **同步`package-lock.json`，或是报错无法解决，依赖无法更新**

   1. 使用 `npm install` 命令可以更新package-lock.json

   ```
   npm install
   ```

   2. 假如不成功，或是依赖报错解决办法，先移除node_modules 再安装依赖

   ```js
   rm -rf node_modules
   npm install
   ```
## 使用npm官方提供的命令查看镜像源：

```bash
npm config get registry
```
命令执行后，会输出当前npm使用的镜像源地址: `https://registry.npmjs.org/`

## 切回使用官方镜像源，可以使用以下命令

```bash
npm config set https://registry.npmjs.org/

```

## `npm` 常用简写，命令行中快速执行操作

   1. `npm i`：等同于 `npm install`，用于安装项目的依赖项。
      ```shell
      npm i
      npm install
      ```

   2. `npm ci`：等同于 `npm ci`，用于以干净的方式安装项目的依赖项，根据 `package-lock.json` 或 `npm-shrinkwrap.json` 精确安装依赖项的指定版本。
      ```shell
      npm ci
      ```
   3. `npm ls`：等同于 `npm list`，用于查看已安装的依赖项。
       ```shell
      npm ls
      npm list
      ```
   4. `npm rm`：等同于 `npm uninstall`，用于卸载项目的依赖项。       
      ```shell
      npm rm
      npm uninstall
      ```

   5. `npm run`：用于运行在 `package.json` 的 `scripts` 字段中定义的自定义脚本。可以使用简写 `npm start` 代替 `npm run start`。
      ```shell
      npm start
      npm run start
      ```
   6. `npm t`：等同于 `npm test`，用于运行项目中定义的测试脚本。
      ```shell
      npm t
      npm test
      ```
   7. `npm publish`：用于将你的包发布到 npm 公共仓库。
      ```shell
      npm publish
      ```
   8.  `npm ci`：用于在 CI/CD（持续集成/持续交付）环境中以干净的方式安装项目的依赖项。
         ```shell
         npm ci
       
         // 其他方式
         rm -rf node_modules
         npm install
         ```
## **登录到 npm 并发布包的流程**
   > 可以分为以下几个步骤

   1. **创建 `npm` 账号：** 如果你还没有 `npm` 账号，首先需要在 npm 官方网站上创建一个账号。访问 https://www.npmjs.com/signup 并按照指示完成注册过程。

   2. **登录到 `npm`：** 使用你的 `npm` 账号登录到命令行界面。

       ```
       npm login
       ```

       运行上述命令后，`npm` 将提示你输入你的用户名、密码和电子邮件地址。输入正确的信息后，你将成功登录到 `npm`。

   3. **构建项目：** 在发布之前，确保你的项目已经构建并准备好发布。确保所有必要的文件和依赖项都包含在你的项目中，并且项目可以正确运行。

   4. **更新版本号：** 在发布之前，你需要确保每次发布时都提高包的版本号。在 `package.json` 文件中修改 `version` 字段，可以使用 [语义化版本号](https://semver.org/lang/zh-CN/) 规范来指定适当的版本号。

   5. **发布包：** 使用以下命令将你的包发布到 `npm`：

       ```
       npm publish
       ```

       运行上述命令后，`npm `将会将你的包上传到 `npm `仓库，并分配一个唯一的包名和版本号。

   6. **验证发布结果：** 成功发布后，你可以通过访问你的包在 `npm` 官方网站上的页面来验证发布结果。其他用户现在可以使用你的包来安装和使用。

      你可以在 https://www.npmjs.com/package/your-package-name 中查看你的包的页面，将 `your-package-name` 替换为你实际的包名。

   > 以上是 `npm` 登录和发布流程的基本步骤。在发布前，还应该仔细检查你的包是否符合 `npm` 的发布准则，并确保你的包是可靠和高质量的。
   > 请记住，在发布前备份你的项目文件，并在发布后及时处理任何反馈或问题。

## 结语
> 本文介绍了一些常用的 `npm` 命令，帮助你更好地管理项目中的依赖项、运行脚本和执行其他常见任务。熟练掌握这些命令将使你的项目管理更加高效和便捷。

> 无论你是在初始化项目、安装依赖项、更新依赖项还是运行自定义脚本，`npm` 命令都能提供强大的功能。随着你的经验的积累，你将更加熟悉这些命令，并能够更好地利用它们来管理你的项目。

> 希望本文能够帮助你更好地掌握常用的 `npm` 命令，并在项目开发中提升效率！

