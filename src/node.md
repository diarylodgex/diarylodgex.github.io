# Node.js 开发文档

## 一、核心概念

### 1. 事件驱动架构

```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// 注册事件监听器
myEmitter.on('event', () => {
  console.log('事件触发!');
});

// 触发事件
myEmitter.emit('event');
```

### 2.非阻塞 I/O

```
const fs = require('fs');

// 异步读取文件 (非阻塞)
fs.readFile('/path/to/file', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 同步读取文件 (阻塞)
const data = fs.readFileSync('/path/to/file');
console.log(data);
```

###  3. 单线程 vs 多线程

```
// 单线程执行 (阻塞)
function calculate() {
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += i;
  }
  return result;
}

// 多线程执行 (Worker Threads)
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on('message', (result) => console.log(result));
} else {
  parentPort.postMessage(calculate());
}
```
## 二、内置模块
### 1. 文件系统 (fs)

```
const fs = require('fs/promises'); // 推荐使用Promise API

// 读取文件
fs.readFile('data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// 写入文件
fs.writeFile('output.txt', 'Hello World!')
  .then(() => console.log('写入成功'))
  .catch(err => console.error(err));

// 目录操作
fs.mkdir('new-dir')
  .then(() => fs.readdir('.'))
  .then(files => console.log(files))
  .catch(err => console.error(err));
```

### 2.HTTP 服务器

```
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(3000, 'localhost', () => {
  console.log('服务器运行在 http://localhost:3000/');
});
```
### 3. 路径处理
```
 TODO 后续补齐 server端的

```
### 4. 事件模块 (events)


```
const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    this.emit('message', `${message} (${new Date().toISOString()})`);
  }
}

const logger = new Logger();

logger.on('message', (msg) => {
  console.log(`日志: ${msg}`);
});

logger.log('系统启动');
```

### 5. 流 (stream)

```
 const fs = require('fs');

// 创建可读流
const readStream = fs.createReadStream('input.txt', { encoding: 'utf8' });

// 创建可写流
const writeStream = fs.createWriteStream('output.txt');

// 管道操作 (高效处理大文件)
readStream.pipe(writeStream);

// 监听事件
readStream.on('data', (chunk) => {
  console.log(`读取到数据块: ${chunk.length} 字节`);
});

readStream.on('end', () => {
  console.log('读取完成');
});
```

## 三、异步编程

### 1. 回调函数
```
const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件失败:', err);
    return;
  }
  console.log('文件内容:', data);
});
 
 const fs = require('fs/promises');

fs.readFile('data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

```
### 2. Promise
```
// 并行执行多个Promise
Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt')
])
  .then(([data1, data2]) => console.log(data1, data2))
  .catch(err => console.error(err));
```
### 3. async/await
```
const fs = require('fs/promises');

async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log(data1, data2);
  } catch (err) {
    console.error(err);
  }
}
readFiles();
```
### 4. 事件循环机制

```
┌───────────────────────────┐
│           定时器队列        │
└─────────────┬─────────────┘
              │
┌─────────────▼─────────────┐
│          I/O回调队列        │
└─────────────┬─────────────┘
              │
┌─────────────▼─────────────┐
│          空闲/预备队列      │
└─────────────┬─────────────┘
              │
┌─────────────▼─────────────┐
│           轮询阶段          │
│  (等待新的I/O事件)          │
└─────────────┬─────────────┘
              │
┌─────────────▼─────────────┐
│           检查阶段          │
│  (执行setImmediate回调)     │
└─────────────┬─────────────┘
              │
┌─────────────▼─────────────┐
│       关闭回调队列          │
└───────────────────────────┘
```

## 四、模块系统

### 1.  CommonJS 模块
```
 // math.js (模块导出)
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// main.js (模块导入)
const math = require('./math');

console.log(math.add(5, 3)); // 8
console.log(math.subtract(5, 3)); // 2
 
```
### 2.  ES6 模块
```
// 1. 启用 ES 模块支持 (package.json)
{
  "type": "module"
}
 // math.js (模块导出)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js (模块导入)
import { add, subtract } from './math';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```
### 3. 执行顺序
```
 // 模块加载是同步的
console.log('模块开始加载');

const dependency = require('./dependency');
console.log('依赖模块已加载');

// 模块初始化代码
console.log('模块初始化完成');

// 导出接口
exports.doSomething = () => { /* ... */ };
```

## 五、实用工具
### 1. 实用工具
```
# 使用内置调试器
node inspect myscript.js

# Chrome DevTools 调试
node --inspect-brk myscript.js

# 在浏览器中打开
chrome://inspect
```
### 2. 性能分析
```
# 生成 CPU 性能分析文件
node --prof myscript.js

# 生成内存堆快照
const inspector = require('inspector');
inspector.open();

// 在代码中触发堆快照
const session = new inspector.Session();
session.connect();
session.post('HeapProfiler.takeHeapSnapshot', null, (err, data) => {
  // 保存堆快照数据
});
```
### 3. 环境变量
```
// 访问环境变量
console.log(process.env.NODE_ENV); // 例如: 'development'
console.log(process.env.PORT); // 例如: 3000

// package.json 中设置环境变量
{
  "scripts": {
    "start": "NODE_ENV=production node server.js"
  }
}
```
### 4. 进程管理
```
// 获取当前进程信息
console.log('进程ID:', process.pid);
console.log('命令行参数:', process.argv);
console.log('内存使用情况:', process.memoryUsage());

// 监听进程退出事件
process.on('exit', (code) => {
  console.log(`进程退出，退出码: ${code}`);
});

// 主动退出进程
process.exit(1); // 退出码1表示异常退出
```

## 六、最佳实践
### 1. 错误处理
```
// 全局错误处理
process.on('uncaughtException', (err) => {
  console.error('未捕获的异常:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('未处理的Promise拒绝:', promise, '原因:', reason);
});

// 使用 domain 模块 (不推荐用于新代码)
const domain = require('domain');

const d = domain.create();
d.on('error', (err) => {
  console.error('Domain 捕获的错误:', err);
});

d.run(() => {
  // 可能抛出错误的代码
});
```
### 2. 性能优化
```
// 1. 使用集群模块实现多实例
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.end('Hello World!');
  }).listen(3000);
}

// 2. 避免阻塞事件循环
// 不好的做法
function processLargeArray() {
  const arr = new Array(1e6).fill(0);
  return arr.map((_, i) => i * 2);
}

// 好的做法 (使用 Worker Threads)
const { Worker } = require('worker_threads');

new Worker(`
  const arr = new Array(1e6).fill(0);
  parentPort.postMessage(arr.map((_, i) => i * 2));
`, { eval: true }).on('message', (result) => {
  console.log('处理完成');
});
```
### 3. 安全建议
```
// 1. 验证用户输入
const http = require('http');
const { exec } = require('child_process');

http.createServer((req, res) => {
  if (req.url.startsWith('/exec')) {
    const command = req.url.split('=')[1];
    
    // 危险: 直接执行用户输入
    // exec(command, (err, stdout) => { ... });
    
    // 安全做法: 验证输入
    const allowedCommands = ['ls', 'pwd'];
    if (allowedCommands.includes(command)) {
      exec(command, (err, stdout) => {
        res.end(stdout);
      });
    } else {
      res.statusCode = 400;
      res.end('Invalid command');
    }
  }
}).listen(3000);

// 2. 最小化权限运行
process.setgid(1000); // 设置组ID
process.setuid(1000); // 设置用户ID
```