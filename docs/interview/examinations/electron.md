# Electron
## 安装
```bash
npm install --save-dev electron
```
## 构建
```json
// package.json
{
  "name": "my-app-name",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  },
  "build": {
    "appId": "com.example.yourapp",
    "productName": "Your App Name",
    "directories": {
      "output": "dist"
    },
    "files": [
      "dist/**/*",
      "main.js",
      "package.json"
    ],
    "win": {
      "target": "nsis"
    },
    "mac": {
      "target": "dmg"
    },
    "linux": {
      "target": "AppImage"
    }
  },
  "devDependencies": {
    "electron": "^latest-version",
    "electron-builder": "^latest-version"
  }
}

```
## 运行
```json
// package.json
{
  "scripts": {
    "start": "electron ."
  }
}

```
```bash
npm start
```

##  package.json
```bash
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "author": "Vine",
  "license": "MIT"
}
```


## 创建一个index.html (渲染进程)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
</head>
<body>
    <h1>Hello World!</h1>
    <p>
        We are using Node.js <span id="node-version"></span>,
        Chromium <span id="chrome-version"></span>,
        and Electron <span id="electron-version"></span>.
    </p>
</body>
</html>
```

## 创建一个main.js (主进程)
```js
const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

## 创建一个preload.js (预加载脚本)
```js
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
```


## contentBridge
> 在proload.js 使用 contentBridge 注入方法 window.electron.startDrag将向主进程发送IPC消息。
```js
// proload.js
const { contextBridge, ipcRenderer } = require('electron')
const path = require('node:path')

contextBridge.exposeInMainWorld('electron', {
  startDrag: (fileName) => {
    ipcRenderer.send('ondragstart', path.join(process.cwd(), fileName))
  }
})

```
### Index.html
添加一个可拖动元素到 index.html, 并引用你的渲染器脚本：
```
<div style="border:2px solid black;border-radius:3px;padding:5px;display:inline-block" draggable="true" id="drag">拖动我</div>
<script src="renderer.js"></script>
```
### Renderer.js
在 renderer.js 通过调用通过上述 contextBridge 添加的方法来设置渲染器进程处理拖动事件。

```js
document.getElementById('drag').ondragstart = (event) => {
  event.preventDefault()
  window.electron.startDrag('drag-and-drop.md')
}
```

### 打包 使用electron-builder 
```bash
npm install --save-dev electron-builder
```
```json
// package.json
{
  "scripts": {
    "build": "electron-builder"
  },
  "build": {
    "appId": "com.mycompany.myapp", // 应用程序ID
    "win": {
      "icon": "./logo.ico", // 应用程序图标
      "target": [
        {
          "target": "nsis", // 目标平台
          "arch": [
            "x64" // 生成64位按照包
          ]
        }
      ]
    },
    "nsis":{
      "oneClick": false, // 显示安装向导页面
      "perMachine": true, // 是否允许安装到当前用户的文件夹
      "allowToChangeInstallationDirectory": true // 是否允许用户更改安装目录

    }
  }
}
```
## 渲染器对主进程通讯
> 渲染器进程可以通过调用 contextBridge.exposeInMainWorld 方法将方法暴露给主进程。
```js
// preload.js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  send: (data) => {
    ipcRenderer.send(data)
  }
})
```
> 渲染进程发送消息到主进程
```js
// renderer.js
const btn = document.getElementById('btn')
btn.addListener('click', () => {
  window.electron.send('hello')
})
```
> 主进程接收消息
```js
// main.js
const { BrowserWindow, ipcMain } = require('electron')
function getMessage (event, message) {
  console.log(message) // hello
}
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })
  // 在这里处理事件
  ipcMain.on('send', getMessage)

  // 加载页面
  win.loadFile('./pages/index.html')

  // 打开调试器
  win.webContents.openDevTools()
}
app.on('ready', () => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit() // 不是mac系统
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
```


## 主进程对渲染进程通讯
> 主进程可以通过调用 ipcMain.handle 方法将方法暴露给渲染进程。
```js
// main.js
const { BrowserWindow, ipcMain } = require('electron')
function sendMessage () {
  return 'hello'
}
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })
  // 在这里处理事件
  ipcMain.handle('emitsend', sendMessage)

  // 加载页面
  win.loadFile('./pages/index.html')

  // 打开调试器
  win.webContents.openDevTools()
}
app.on('ready', () => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit() // 不是mac系统
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
```
> 渲染器进程可以通过调用 contextBridge.exposeInMainWorld 方法将方法暴露给主进程。
```js
// preload.js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  onSend: () => ipcRenderer.invoke('emitsend')
})
```
> 渲染器进程获取主进程发送的消息
```js
// renderer.js
const btn = document.getElementById('btn')
btn.addListener('click', () => {
  window.electron.onSend().then((data) => {
    console.log(data) // hello
  })

})

```