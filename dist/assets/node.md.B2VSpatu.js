import{_ as a,c as n,o as p,ae as e}from"./chunks/framework.Dgg8-8ov.js";const u=JSON.parse('{"title":"Node.js 开发文档","description":"","frontmatter":{},"headers":[],"relativePath":"node.md","filePath":"node.md","lastUpdated":1750597022000}'),l={name:"node.md"};function i(t,s,c,o,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="node-js-开发文档" tabindex="-1">Node.js 开发文档 <a class="header-anchor" href="#node-js-开发文档" aria-label="Permalink to &quot;Node.js 开发文档&quot;">​</a></h1><h2 id="一、核心概念" tabindex="-1">一、核心概念 <a class="header-anchor" href="#一、核心概念" aria-label="Permalink to &quot;一、核心概念&quot;">​</a></h2><h3 id="_1-事件驱动架构" tabindex="-1">1. 事件驱动架构 <a class="header-anchor" href="#_1-事件驱动架构" aria-label="Permalink to &quot;1. 事件驱动架构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const EventEmitter = require(&#39;events&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyEmitter extends EventEmitter {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const myEmitter = new MyEmitter();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注册事件监听器</span></span>
<span class="line"><span>myEmitter.on(&#39;event&#39;, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;事件触发!&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 触发事件</span></span>
<span class="line"><span>myEmitter.emit(&#39;event&#39;);</span></span></code></pre></div><h3 id="_2-非阻塞-i-o" tabindex="-1">2.非阻塞 I/O <a class="header-anchor" href="#_2-非阻塞-i-o" aria-label="Permalink to &quot;2.非阻塞 I/O&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 异步读取文件 (非阻塞)</span></span>
<span class="line"><span>fs.readFile(&#39;/path/to/file&#39;, (err, data) =&gt; {</span></span>
<span class="line"><span>  if (err) throw err;</span></span>
<span class="line"><span>  console.log(data);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 同步读取文件 (阻塞)</span></span>
<span class="line"><span>const data = fs.readFileSync(&#39;/path/to/file&#39;);</span></span>
<span class="line"><span>console.log(data);</span></span></code></pre></div><h3 id="_3-单线程-vs-多线程" tabindex="-1">3. 单线程 vs 多线程 <a class="header-anchor" href="#_3-单线程-vs-多线程" aria-label="Permalink to &quot;3. 单线程 vs 多线程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 单线程执行 (阻塞)</span></span>
<span class="line"><span>function calculate() {</span></span>
<span class="line"><span>  let result = 0;</span></span>
<span class="line"><span>  for (let i = 0; i &lt; 1e9; i++) {</span></span>
<span class="line"><span>    result += i;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return result;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多线程执行 (Worker Threads)</span></span>
<span class="line"><span>const { Worker, isMainThread, parentPort } = require(&#39;worker_threads&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (isMainThread) {</span></span>
<span class="line"><span>  const worker = new Worker(__filename);</span></span>
<span class="line"><span>  worker.on(&#39;message&#39;, (result) =&gt; console.log(result));</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  parentPort.postMessage(calculate());</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="二、内置模块" tabindex="-1">二、内置模块 <a class="header-anchor" href="#二、内置模块" aria-label="Permalink to &quot;二、内置模块&quot;">​</a></h2><h3 id="_1-文件系统-fs" tabindex="-1">1. 文件系统 (fs) <a class="header-anchor" href="#_1-文件系统-fs" aria-label="Permalink to &quot;1. 文件系统 (fs)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs/promises&#39;); // 推荐使用Promise API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 读取文件</span></span>
<span class="line"><span>fs.readFile(&#39;data.txt&#39;, &#39;utf8&#39;)</span></span>
<span class="line"><span>  .then(data =&gt; console.log(data))</span></span>
<span class="line"><span>  .catch(err =&gt; console.error(err));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 写入文件</span></span>
<span class="line"><span>fs.writeFile(&#39;output.txt&#39;, &#39;Hello World!&#39;)</span></span>
<span class="line"><span>  .then(() =&gt; console.log(&#39;写入成功&#39;))</span></span>
<span class="line"><span>  .catch(err =&gt; console.error(err));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 目录操作</span></span>
<span class="line"><span>fs.mkdir(&#39;new-dir&#39;)</span></span>
<span class="line"><span>  .then(() =&gt; fs.readdir(&#39;.&#39;))</span></span>
<span class="line"><span>  .then(files =&gt; console.log(files))</span></span>
<span class="line"><span>  .catch(err =&gt; console.error(err));</span></span></code></pre></div><h3 id="_2-http-服务器" tabindex="-1">2.HTTP 服务器 <a class="header-anchor" href="#_2-http-服务器" aria-label="Permalink to &quot;2.HTTP 服务器&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const http = require(&#39;http&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const server = http.createServer((req, res) =&gt; {</span></span>
<span class="line"><span>  res.statusCode = 200;</span></span>
<span class="line"><span>  res.setHeader(&#39;Content-Type&#39;, &#39;text/plain&#39;);</span></span>
<span class="line"><span>  res.end(&#39;Hello World!\\n&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server.listen(3000, &#39;localhost&#39;, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;服务器运行在 http://localhost:3000/&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="_3-路径处理" tabindex="-1">3. 路径处理 <a class="header-anchor" href="#_3-路径处理" aria-label="Permalink to &quot;3. 路径处理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> TODO 后续补齐 server端的</span></span></code></pre></div><h3 id="_4-事件模块-events" tabindex="-1">4. 事件模块 (events) <a class="header-anchor" href="#_4-事件模块-events" aria-label="Permalink to &quot;4. 事件模块 (events)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const EventEmitter = require(&#39;events&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Logger extends EventEmitter {</span></span>
<span class="line"><span>  log(message) {</span></span>
<span class="line"><span>    this.emit(&#39;message&#39;, \`\${message} (\${new Date().toISOString()})\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const logger = new Logger();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>logger.on(&#39;message&#39;, (msg) =&gt; {</span></span>
<span class="line"><span>  console.log(\`日志: \${msg}\`);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>logger.log(&#39;系统启动&#39;);</span></span></code></pre></div><h3 id="_5-流-stream" tabindex="-1">5. 流 (stream) <a class="header-anchor" href="#_5-流-stream" aria-label="Permalink to &quot;5. 流 (stream)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建可读流</span></span>
<span class="line"><span>const readStream = fs.createReadStream(&#39;input.txt&#39;, { encoding: &#39;utf8&#39; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建可写流</span></span>
<span class="line"><span>const writeStream = fs.createWriteStream(&#39;output.txt&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 管道操作 (高效处理大文件)</span></span>
<span class="line"><span>readStream.pipe(writeStream);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听事件</span></span>
<span class="line"><span>readStream.on(&#39;data&#39;, (chunk) =&gt; {</span></span>
<span class="line"><span>  console.log(\`读取到数据块: \${chunk.length} 字节\`);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>readStream.on(&#39;end&#39;, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;读取完成&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="三、异步编程" tabindex="-1">三、异步编程 <a class="header-anchor" href="#三、异步编程" aria-label="Permalink to &quot;三、异步编程&quot;">​</a></h2><h3 id="_1-回调函数" tabindex="-1">1. 回调函数 <a class="header-anchor" href="#_1-回调函数" aria-label="Permalink to &quot;1. 回调函数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>fs.readFile(&#39;data.txt&#39;, &#39;utf8&#39;, (err, data) =&gt; {</span></span>
<span class="line"><span>  if (err) {</span></span>
<span class="line"><span>    console.error(&#39;读取文件失败:&#39;, err);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log(&#39;文件内容:&#39;, data);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> const fs = require(&#39;fs/promises&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.readFile(&#39;data.txt&#39;, &#39;utf8&#39;)</span></span>
<span class="line"><span>  .then(data =&gt; console.log(data))</span></span>
<span class="line"><span>  .catch(err =&gt; console.error(err));</span></span></code></pre></div><h3 id="_2-promise" tabindex="-1">2. Promise <a class="header-anchor" href="#_2-promise" aria-label="Permalink to &quot;2. Promise&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 并行执行多个Promise</span></span>
<span class="line"><span>Promise.all([</span></span>
<span class="line"><span>  fs.readFile(&#39;file1.txt&#39;),</span></span>
<span class="line"><span>  fs.readFile(&#39;file2.txt&#39;)</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>  .then(([data1, data2]) =&gt; console.log(data1, data2))</span></span>
<span class="line"><span>  .catch(err =&gt; console.error(err));</span></span></code></pre></div><h3 id="_3-async-await" tabindex="-1">3. async/await <a class="header-anchor" href="#_3-async-await" aria-label="Permalink to &quot;3. async/await&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs/promises&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function readFiles() {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const data1 = await fs.readFile(&#39;file1.txt&#39;, &#39;utf8&#39;);</span></span>
<span class="line"><span>    const data2 = await fs.readFile(&#39;file2.txt&#39;, &#39;utf8&#39;);</span></span>
<span class="line"><span>    console.log(data1, data2);</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.error(err);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>readFiles();</span></span></code></pre></div><h3 id="_4-事件循环机制" tabindex="-1">4. 事件循环机制 <a class="header-anchor" href="#_4-事件循环机制" aria-label="Permalink to &quot;4. 事件循环机制&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌───────────────────────────┐</span></span>
<span class="line"><span>│           定时器队列        │</span></span>
<span class="line"><span>└─────────────┬─────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>┌─────────────▼─────────────┐</span></span>
<span class="line"><span>│          I/O回调队列        │</span></span>
<span class="line"><span>└─────────────┬─────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>┌─────────────▼─────────────┐</span></span>
<span class="line"><span>│          空闲/预备队列      │</span></span>
<span class="line"><span>└─────────────┬─────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>┌─────────────▼─────────────┐</span></span>
<span class="line"><span>│           轮询阶段          │</span></span>
<span class="line"><span>│  (等待新的I/O事件)          │</span></span>
<span class="line"><span>└─────────────┬─────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>┌─────────────▼─────────────┐</span></span>
<span class="line"><span>│           检查阶段          │</span></span>
<span class="line"><span>│  (执行setImmediate回调)     │</span></span>
<span class="line"><span>└─────────────┬─────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>┌─────────────▼─────────────┐</span></span>
<span class="line"><span>│       关闭回调队列          │</span></span>
<span class="line"><span>└───────────────────────────┘</span></span></code></pre></div><h2 id="四、模块系统" tabindex="-1">四、模块系统 <a class="header-anchor" href="#四、模块系统" aria-label="Permalink to &quot;四、模块系统&quot;">​</a></h2><h3 id="_1-commonjs-模块" tabindex="-1">1. CommonJS 模块 <a class="header-anchor" href="#_1-commonjs-模块" aria-label="Permalink to &quot;1.  CommonJS 模块&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> // math.js (模块导出)</span></span>
<span class="line"><span>exports.add = (a, b) =&gt; a + b;</span></span>
<span class="line"><span>exports.subtract = (a, b) =&gt; a - b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main.js (模块导入)</span></span>
<span class="line"><span>const math = require(&#39;./math&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(math.add(5, 3)); // 8</span></span>
<span class="line"><span>console.log(math.subtract(5, 3)); // 2</span></span></code></pre></div><h3 id="_2-es6-模块" tabindex="-1">2. ES6 模块 <a class="header-anchor" href="#_2-es6-模块" aria-label="Permalink to &quot;2.  ES6 模块&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 1. 启用 ES 模块支持 (package.json)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;module&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> // math.js (模块导出)</span></span>
<span class="line"><span>export const add = (a, b) =&gt; a + b;</span></span>
<span class="line"><span>export const subtract = (a, b) =&gt; a - b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main.js (模块导入)</span></span>
<span class="line"><span>import { add, subtract } from &#39;./math&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(add(5, 3)); // 8</span></span>
<span class="line"><span>console.log(subtract(5, 3)); // 2</span></span></code></pre></div><h3 id="_3-执行顺序" tabindex="-1">3. 执行顺序 <a class="header-anchor" href="#_3-执行顺序" aria-label="Permalink to &quot;3. 执行顺序&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> // 模块加载是同步的</span></span>
<span class="line"><span>console.log(&#39;模块开始加载&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const dependency = require(&#39;./dependency&#39;);</span></span>
<span class="line"><span>console.log(&#39;依赖模块已加载&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 模块初始化代码</span></span>
<span class="line"><span>console.log(&#39;模块初始化完成&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 导出接口</span></span>
<span class="line"><span>exports.doSomething = () =&gt; { /* ... */ };</span></span></code></pre></div><h2 id="五、实用工具" tabindex="-1">五、实用工具 <a class="header-anchor" href="#五、实用工具" aria-label="Permalink to &quot;五、实用工具&quot;">​</a></h2><h3 id="_1-实用工具" tabindex="-1">1. 实用工具 <a class="header-anchor" href="#_1-实用工具" aria-label="Permalink to &quot;1. 实用工具&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 使用内置调试器</span></span>
<span class="line"><span>node inspect myscript.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Chrome DevTools 调试</span></span>
<span class="line"><span>node --inspect-brk myscript.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在浏览器中打开</span></span>
<span class="line"><span>chrome://inspect</span></span></code></pre></div><h3 id="_2-性能分析" tabindex="-1">2. 性能分析 <a class="header-anchor" href="#_2-性能分析" aria-label="Permalink to &quot;2. 性能分析&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 生成 CPU 性能分析文件</span></span>
<span class="line"><span>node --prof myscript.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 生成内存堆快照</span></span>
<span class="line"><span>const inspector = require(&#39;inspector&#39;);</span></span>
<span class="line"><span>inspector.open();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在代码中触发堆快照</span></span>
<span class="line"><span>const session = new inspector.Session();</span></span>
<span class="line"><span>session.connect();</span></span>
<span class="line"><span>session.post(&#39;HeapProfiler.takeHeapSnapshot&#39;, null, (err, data) =&gt; {</span></span>
<span class="line"><span>  // 保存堆快照数据</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="_3-环境变量" tabindex="-1">3. 环境变量 <a class="header-anchor" href="#_3-环境变量" aria-label="Permalink to &quot;3. 环境变量&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 访问环境变量</span></span>
<span class="line"><span>console.log(process.env.NODE_ENV); // 例如: &#39;development&#39;</span></span>
<span class="line"><span>console.log(process.env.PORT); // 例如: 3000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// package.json 中设置环境变量</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start&quot;: &quot;NODE_ENV=production node server.js&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-进程管理" tabindex="-1">4. 进程管理 <a class="header-anchor" href="#_4-进程管理" aria-label="Permalink to &quot;4. 进程管理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 获取当前进程信息</span></span>
<span class="line"><span>console.log(&#39;进程ID:&#39;, process.pid);</span></span>
<span class="line"><span>console.log(&#39;命令行参数:&#39;, process.argv);</span></span>
<span class="line"><span>console.log(&#39;内存使用情况:&#39;, process.memoryUsage());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听进程退出事件</span></span>
<span class="line"><span>process.on(&#39;exit&#39;, (code) =&gt; {</span></span>
<span class="line"><span>  console.log(\`进程退出，退出码: \${code}\`);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 主动退出进程</span></span>
<span class="line"><span>process.exit(1); // 退出码1表示异常退出</span></span></code></pre></div><h2 id="六、最佳实践" tabindex="-1">六、最佳实践 <a class="header-anchor" href="#六、最佳实践" aria-label="Permalink to &quot;六、最佳实践&quot;">​</a></h2><h3 id="_1-错误处理" tabindex="-1">1. 错误处理 <a class="header-anchor" href="#_1-错误处理" aria-label="Permalink to &quot;1. 错误处理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 全局错误处理</span></span>
<span class="line"><span>process.on(&#39;uncaughtException&#39;, (err) =&gt; {</span></span>
<span class="line"><span>  console.error(&#39;未捕获的异常:&#39;, err);</span></span>
<span class="line"><span>  process.exit(1);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process.on(&#39;unhandledRejection&#39;, (reason, promise) =&gt; {</span></span>
<span class="line"><span>  console.error(&#39;未处理的Promise拒绝:&#39;, promise, &#39;原因:&#39;, reason);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用 domain 模块 (不推荐用于新代码)</span></span>
<span class="line"><span>const domain = require(&#39;domain&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const d = domain.create();</span></span>
<span class="line"><span>d.on(&#39;error&#39;, (err) =&gt; {</span></span>
<span class="line"><span>  console.error(&#39;Domain 捕获的错误:&#39;, err);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>d.run(() =&gt; {</span></span>
<span class="line"><span>  // 可能抛出错误的代码</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="_2-性能优化" tabindex="-1">2. 性能优化 <a class="header-anchor" href="#_2-性能优化" aria-label="Permalink to &quot;2. 性能优化&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 1. 使用集群模块实现多实例</span></span>
<span class="line"><span>const cluster = require(&#39;cluster&#39;);</span></span>
<span class="line"><span>const http = require(&#39;http&#39;);</span></span>
<span class="line"><span>const numCPUs = require(&#39;os&#39;).cpus().length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (cluster.isPrimary) {</span></span>
<span class="line"><span>  for (let i = 0; i &lt; numCPUs; i++) {</span></span>
<span class="line"><span>    cluster.fork();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  http.createServer((req, res) =&gt; {</span></span>
<span class="line"><span>    res.end(&#39;Hello World!&#39;);</span></span>
<span class="line"><span>  }).listen(3000);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 避免阻塞事件循环</span></span>
<span class="line"><span>// 不好的做法</span></span>
<span class="line"><span>function processLargeArray() {</span></span>
<span class="line"><span>  const arr = new Array(1e6).fill(0);</span></span>
<span class="line"><span>  return arr.map((_, i) =&gt; i * 2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 好的做法 (使用 Worker Threads)</span></span>
<span class="line"><span>const { Worker } = require(&#39;worker_threads&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Worker(\`</span></span>
<span class="line"><span>  const arr = new Array(1e6).fill(0);</span></span>
<span class="line"><span>  parentPort.postMessage(arr.map((_, i) =&gt; i * 2));</span></span>
<span class="line"><span>\`, { eval: true }).on(&#39;message&#39;, (result) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;处理完成&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="_3-安全建议" tabindex="-1">3. 安全建议 <a class="header-anchor" href="#_3-安全建议" aria-label="Permalink to &quot;3. 安全建议&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 1. 验证用户输入</span></span>
<span class="line"><span>const http = require(&#39;http&#39;);</span></span>
<span class="line"><span>const { exec } = require(&#39;child_process&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http.createServer((req, res) =&gt; {</span></span>
<span class="line"><span>  if (req.url.startsWith(&#39;/exec&#39;)) {</span></span>
<span class="line"><span>    const command = req.url.split(&#39;=&#39;)[1];</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 危险: 直接执行用户输入</span></span>
<span class="line"><span>    // exec(command, (err, stdout) =&gt; { ... });</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 安全做法: 验证输入</span></span>
<span class="line"><span>    const allowedCommands = [&#39;ls&#39;, &#39;pwd&#39;];</span></span>
<span class="line"><span>    if (allowedCommands.includes(command)) {</span></span>
<span class="line"><span>      exec(command, (err, stdout) =&gt; {</span></span>
<span class="line"><span>        res.end(stdout);</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      res.statusCode = 400;</span></span>
<span class="line"><span>      res.end(&#39;Invalid command&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}).listen(3000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 最小化权限运行</span></span>
<span class="line"><span>process.setgid(1000); // 设置组ID</span></span>
<span class="line"><span>process.setuid(1000); // 设置用户ID</span></span></code></pre></div>`,51)]))}const g=a(l,[["render",i]]);export{u as __pageData,g as default};
