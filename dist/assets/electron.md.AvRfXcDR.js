import{_ as s,c as a,o as p,ae as e}from"./chunks/framework.Dgg8-8ov.js";const u=JSON.parse('{"title":"Electron","description":"","frontmatter":{},"headers":[],"relativePath":"electron.md","filePath":"electron.md","lastUpdated":1750597022000}'),l={name:"electron.md"};function i(t,n,c,o,r,d){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="electron" tabindex="-1">Electron <a class="header-anchor" href="#electron" aria-label="Permalink to &quot;Electron&quot;">​</a></h1><h2 id="一、核心概念" tabindex="-1">一、核心概念 <a class="header-anchor" href="#一、核心概念" aria-label="Permalink to &quot;一、核心概念&quot;">​</a></h2><ol><li><p><strong>跨平台桌面应用</strong></p><ul><li>支持 Windows/macOS/Linux</li><li>基于 Chromium 和 Node.js</li></ul></li><li><p><strong>主进程与渲染进程</strong></p><ul><li>主进程 (main.js)：控制应用生命周期和原生 API</li><li>渲染进程 (HTML/JS)：负责 UI 渲染</li></ul></li><li><p><strong>多进程架构</strong></p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> ┌───────────┐ ┌───────────┐</span></span>
<span class="line"><span> │ 主进程 │◄───►│ 渲染进程 1 │</span></span>
<span class="line"><span> └───────────┘ └───────────┘</span></span>
<span class="line"><span>        ▲             ▲</span></span>
<span class="line"><span>        │             │</span></span>
<span class="line"><span>        ▼             ▼</span></span>
<span class="line"><span> ┌───────────┐ ┌───────────┐</span></span>
<span class="line"><span> │ 渲染进程 2 │ │ 渲染进程 3 │</span></span>
<span class="line"><span> └───────────┘ └───────────┘</span></span></code></pre></div><h2 id="项目初始化" tabindex="-1">项目初始化 <a class="header-anchor" href="#项目初始化" aria-label="Permalink to &quot;项目初始化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm init electron-vue@latest my-app</span></span>
<span class="line"><span>cd my-app</span></span>
<span class="line"><span>npm install</span></span>
<span class="line"><span>npm start</span></span></code></pre></div><h2 id="基本目录结构" tabindex="-1">基本目录结构 <a class="header-anchor" href="#基本目录结构" aria-label="Permalink to &quot;基本目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-app/</span></span>
<span class="line"><span>├── node_modules/</span></span>
<span class="line"><span>├── public/</span></span>
<span class="line"><span>│   └── index.html      # 主窗口HTML</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>│   ├── main/           # 主进程代码</span></span>
<span class="line"><span>│   │   └── main.js</span></span>
<span class="line"><span>│   └── renderer/       # 渲染进程代码</span></span>
<span class="line"><span>│       ├── renderer.js</span></span>
<span class="line"><span>│       └── style.css</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── .gitignore</span></span></code></pre></div><h2 id="主进程文件-main-js" tabindex="-1">主进程文件（main.js） <a class="header-anchor" href="#主进程文件-main-js" aria-label="Permalink to &quot;主进程文件（main.js）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { app, BrowserWindow } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function createWindow() {</span></span>
<span class="line"><span>  const win = new BrowserWindow({</span></span>
<span class="line"><span>    width: 800,</span></span>
<span class="line"><span>    height: 600,</span></span>
<span class="line"><span>    webPreferences: {</span></span>
<span class="line"><span>      nodeIntegration: true,</span></span>
<span class="line"><span>      contextIsolation: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  win.loadFile(&#39;public/index.html&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>  createWindow()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  app.on(&#39;activate&#39;, function () {</span></span>
<span class="line"><span>    if (BrowserWindow.getAllWindows().length === 0) createWindow()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.on(&#39;window-all-closed&#39;, function () {</span></span>
<span class="line"><span>  if (process.platform !== &#39;darwin&#39;) app.quit()</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="生命周期管理" tabindex="-1">生命周期管理 <a class="header-anchor" href="#生命周期管理" aria-label="Permalink to &quot;生命周期管理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { app } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 应用准备就绪</span></span>
<span class="line"><span>app.whenReady().then(() =&gt; { /* ... */ })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 所有窗口关闭时</span></span>
<span class="line"><span>app.on(&#39;window-all-closed&#39;, () =&gt; {</span></span>
<span class="line"><span>  if (process.platform !== &#39;darwin&#39;) app.quit()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 应用激活时 (macOS)</span></span>
<span class="line"><span>app.on(&#39;activate&#39;, () =&gt; { /* ... */ })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 应用即将退出</span></span>
<span class="line"><span>app.on(&#39;will-quit&#39;, () =&gt; { /* ... */ })</span></span></code></pre></div><h2 id="窗口管理" tabindex="-1">窗口管理 <a class="header-anchor" href="#窗口管理" aria-label="Permalink to &quot;窗口管理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { BrowserWindow } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建窗口</span></span>
<span class="line"><span>const win = new BrowserWindow({</span></span>
<span class="line"><span>  width: 800,</span></span>
<span class="line"><span>  height: 600,</span></span>
<span class="line"><span>  minWidth: 400,</span></span>
<span class="line"><span>  minHeight: 300,</span></span>
<span class="line"><span>  titleBarStyle: &#39;hidden&#39;, // macOS 隐藏标题栏</span></span>
<span class="line"><span>  webPreferences: {</span></span>
<span class="line"><span>    nodeIntegration: true,</span></span>
<span class="line"><span>    contextIsolation: false</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加载URL</span></span>
<span class="line"><span>win.loadURL(&#39;https://example.com&#39;)</span></span>
<span class="line"><span>win.loadFile(&#39;index.html&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 窗口事件</span></span>
<span class="line"><span>win.on(&#39;closed&#39;, () =&gt; { /* ... */ })</span></span>
<span class="line"><span>win.on(&#39;resize&#39;, () =&gt; { /* ... */ })</span></span></code></pre></div><h2 id="进程间通信-ipc" tabindex="-1">进程间通信 (IPC) <a class="header-anchor" href="#进程间通信-ipc" aria-label="Permalink to &quot;进程间通信 (IPC)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 主进程 (main.js)</span></span>
<span class="line"><span>const { ipcMain } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ipcMain.on(&#39;message-from-renderer&#39;, (event, arg) =&gt; {</span></span>
<span class="line"><span>  console.log(arg) // 打印: &#39;Hello from renderer&#39;</span></span>
<span class="line"><span>  event.sender.send(&#39;reply&#39;, &#39;Hello from main&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 渲染进程 (renderer.js)</span></span>
<span class="line"><span>const { ipcRenderer } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ipcRenderer.send(&#39;message-from-renderer&#39;, &#39;Hello from renderer&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ipcRenderer.on(&#39;reply&#39;, (event, arg) =&gt; {</span></span>
<span class="line"><span>  console.log(arg) // 打印: &#39;Hello from main&#39;</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="系统托盘" tabindex="-1">系统托盘 <a class="header-anchor" href="#系统托盘" aria-label="Permalink to &quot;系统托盘&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { app, Tray, Menu } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tray = null</span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span> tray = new Tray(&#39;path/to/icon.png&#39;)</span></span>
<span class="line"><span> const contextMenu = Menu.buildFromTemplate([</span></span>
<span class="line"><span>   { label: &#39;Item 1&#39;, type: &#39;radio&#39; },</span></span>
<span class="line"><span>   { label: &#39;Item 2&#39;, type: &#39;radio&#39; },</span></span>
<span class="line"><span>   { label: &#39;Exit&#39;, click: () =&gt; app.quit() }</span></span>
<span class="line"><span> ])</span></span>
<span class="line"><span> tray.setToolTip(&#39;Electron App&#39;)</span></span>
<span class="line"><span> tray.setContextMenu(contextMenu)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="文件操作-node-js-集成" tabindex="-1">文件操作 (Node.js 集成) <a class="header-anchor" href="#文件操作-node-js-集成" aria-label="Permalink to &quot;文件操作 (Node.js 集成)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 渲染进程中使用Node.js API</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 读取文件</span></span>
<span class="line"><span>fs.readFile(path.join(__dirname, &#39;data.txt&#39;), (err, data) =&gt; {</span></span>
<span class="line"><span>  if (err) throw err</span></span>
<span class="line"><span>  console.log(data.toString())</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 写入文件</span></span>
<span class="line"><span>fs.writeFile(&#39;output.txt&#39;, &#39;Hello World!&#39;, (err) =&gt; {</span></span>
<span class="line"><span>  if (err) throw err</span></span>
<span class="line"><span>  console.log(&#39;File saved&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,20)]))}const g=s(l,[["render",i]]);export{u as __pageData,g as default};
