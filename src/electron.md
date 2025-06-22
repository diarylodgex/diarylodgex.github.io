# Electron

## 一、核心概念

1. **跨平台桌面应用**

   - 支持 Windows/macOS/Linux
   - 基于 Chromium 和 Node.js

2. **主进程与渲染进程**

   - 主进程 (main.js)：控制应用生命周期和原生 API
   - 渲染进程 (HTML/JS)：负责 UI 渲染

3. **多进程架构**
  ``` 
   ┌───────────┐ ┌───────────┐
   │ 主进程 │◄───►│ 渲染进程 1 │
   └───────────┘ └───────────┘
          ▲             ▲
          │             │
          ▼             ▼
   ┌───────────┐ ┌───────────┐
   │ 渲染进程 2 │ │ 渲染进程 3 │
   └───────────┘ └───────────┘
  ``` 
## 项目初始化

```
npm init electron-vue@latest my-app
cd my-app
npm install
npm start
```

## 基本目录结构

```
my-app/
├── node_modules/
├── public/
│   └── index.html      # 主窗口HTML
├── src/
│   ├── main/           # 主进程代码
│   │   └── main.js
│   └── renderer/       # 渲染进程代码
│       ├── renderer.js
│       └── style.css
├── package.json
└── .gitignore
```

## 主进程文件（main.js）

```
const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('public/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
```
## 生命周期管理
```
const { app } = require('electron')

// 应用准备就绪
app.whenReady().then(() => { /* ... */ })

// 所有窗口关闭时
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 应用激活时 (macOS)
app.on('activate', () => { /* ... */ })

// 应用即将退出
app.on('will-quit', () => { /* ... */ })
```
## 窗口管理
``` 
const { BrowserWindow } = require('electron')

// 创建窗口
const win = new BrowserWindow({
  width: 800,
  height: 600,
  minWidth: 400,
  minHeight: 300,
  titleBarStyle: 'hidden', // macOS 隐藏标题栏
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
})

// 加载URL
win.loadURL('https://example.com')
win.loadFile('index.html')

// 窗口事件
win.on('closed', () => { /* ... */ })
win.on('resize', () => { /* ... */ })
```
## 进程间通信 (IPC)
```
// 主进程 (main.js)
const { ipcMain } = require('electron')

ipcMain.on('message-from-renderer', (event, arg) => {
  console.log(arg) // 打印: 'Hello from renderer'
  event.sender.send('reply', 'Hello from main')
})

// 渲染进程 (renderer.js)
const { ipcRenderer } = require('electron')

ipcRenderer.send('message-from-renderer', 'Hello from renderer')

ipcRenderer.on('reply', (event, arg) => {
  console.log(arg) // 打印: 'Hello from main'
})
```
 ## 系统托盘
 ```
 const { app, Tray, Menu } = require('electron')

let tray = null
app.whenReady().then(() => {
  tray = new Tray('path/to/icon.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item 1', type: 'radio' },
    { label: 'Item 2', type: 'radio' },
    { label: 'Exit', click: () => app.quit() }
  ])
  tray.setToolTip('Electron App')
  tray.setContextMenu(contextMenu)
})
```
## 文件操作 (Node.js 集成)
```
// 渲染进程中使用Node.js API
const fs = require('fs')
const path = require('path')

// 读取文件
fs.readFile(path.join(__dirname, 'data.txt'), (err, data) => {
  if (err) throw err
  console.log(data.toString())
})

// 写入文件
fs.writeFile('output.txt', 'Hello World!', (err) => {
  if (err) throw err
  console.log('File saved')
})
``` 
