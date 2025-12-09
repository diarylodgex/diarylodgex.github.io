# TypeScript 核心使用文档 
## 一、概述
### 什么是 TypeScript
1. TypeScript 是微软推出的强类型超集，兼容所有 JavaScript 语法，并在其基础上增加了静态类型、接口、泛型等特性，最终编译为纯 JavaScript 运行。
核心优势：类型校验、代码提示、重构友好、大型项目可维护性提升。
适用场景：前端工程化项目（React/Vue）、Node.js 后端、跨端应用（RN / 小程序）。
2. 环境准备
安装 TypeScript
```
bash
运行
# 全局安装
npm install -g typescript

# 项目本地安装（推荐）
npm install -D typescript @types/node
```
初始化配置文件
```bash
# 生成 tsconfig.json（核心配置文件）
tsc --init
```
## 二、基础语法
1. 类型注解（核心）
TypeScript 核心是为变量 / 函数 / 对象添加类型约束，编译期校验类型错误。
<!-- 类型	语法示例	说明	
基础类型	let num: number = 10;	数字、字符串、布尔等	
数组	let arr: number[] = [1, 2, 3];	限定数组元素类型	
元组	let tuple: [string, number] = ['a', 1];	固定长度 + 类型的数组	
枚举	enum Status { Success = 1, Fail }	枚举值映射	
任意类型	let anyVal: any = '任意值';	关闭类型校验（慎用）	
空 / 未定义	let empty: null = null;	null/undefined	
联合类型	`let union: string	number = 1;`	多类型可选
类型别名	`type ID = string	number;`	复用复杂类型 -->
``` ts
// 基础类型
let username: string = "张三";
let age: number = 20;
let isVip: boolean = true;

// 数组
let nums: number[] = [1, 2, 3];
let strs: Array<string> = ["a", "b"]; // 泛型写法

// 联合类型
let id: string | number = 1001;
id = "user_1001"; // 合法

// 类型别名
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };
```
2. 基础函数
``` ts
// 入参+返回值类型约束
function add(a: number, b: number): number {
  return a + b;
}

// 可选参数（?）+ 默认参数
function getUser(name: string, age?: number, gender: string = "男"): { name: string; age?: number } {
  return { name, age };
}

// 剩余参数
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

```
函数类型别名
``` ts
// 定义函数类型
type Fn = (a: number, b: number) => number;

// 实现函数
const multiply: Fn = (a, b) => a * b;
```
3. 接口(interface)
用于约束对象 / 类的结构，支持扩展、合并。
``` ts
// 基础接口
interface User {
  id: string | number;
  name: string;
  age?: number; // 可选属性
  readonly status: boolean; // 只读属性
}

// 实现接口
const user: User = {
  id: 1001,
  name: "张三",
  status: true,
};

// 接口扩展
interface AdminUser extends User {
  role: string; // 新增属性
}

const admin: AdminUser = {
  id: 1002,
  name: "管理员",
  status: true,
  role: "super_admin",
};
```
4. 类(class)
支持访问修饰符、接口实现、继承。
``` ts
// 类定义
class Person {
  private name: string; // 私有属性（仅类内部访问）
  public age: number; // 公有属性（默认）
  protected gender: string; // 受保护属性（子类可访问）

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public getName(): string {
    return this.name;
  }
}

// 子类继承
class Student extends Person {
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

  public getGender(): string {
    return this.gender; // 子类可访问protected属性
  }
}

// 类实现接口
interface Printable {
  print(): void;
}

class Book implements Printable {
  print(): void {
    console.log("打印书籍");
  }
}
```
## 三、高级特性
1.  泛型（Generic）
解决类型复用问题，支持 “类型参数化”。
基础泛型
``` ts
// 泛型函数
function getArray<T>(value: T, length: number): T[] {
  return new Array(length).fill(value);
}

// 使用泛型
const strArr = getArray<string>("a", 3); // ["a", "a", "a"]
const numArr = getArray<number>(10, 2); // [10, 10]
```
泛型接口/类
``` ts
// 泛型接口
interface Result<T> {
  code: number;
  data: T;
}

// 泛型类
class Cache<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  get(): T[] {
    return this.data;
  }
}

const cache = new Cache<number>();
cache.add(10);
cache.get(); // [10]
```
2. 类型断言
手动指定变量类型（编译期生效，运行期无影响）
```ts
// 方式1：as 语法（推荐）
const str: unknown = "hello";
const strLength = (str as string).length;

// 方式2：<> 语法（React 中避免使用，与JSX冲突）
const num: unknown = 10;
const numVal = <number>num;
```
3. 类型守卫
缩小类型范围，常用 typeof/instanceof/in。
``` ts
// typeof 守卫
function isString(val: unknown): val is string {
  return typeof val === "string";
}

// instanceof 守卫
function printValue(val: Date | string) {
  if (val instanceof Date) {
    console.log(val.toLocaleString());
  } else {
    console.log(val);
  }
}

// in 守卫
interface Cat {
  meow: () => void;
}
interface Dog {
  bark: () => void;
}

function animalCall(animal: Cat | Dog) {
  if ("meow" in animal) {
    animal.meow();
  } else {
    animal.bark();
  }
}
```
## 四、工程化配置（tsconfig.json）
核心配置项说明，按需调整：
``` json
{
  "compilerOptions": {
    "target": "ES2020", // 编译目标JS版本
    "module": "ESNext", // 模块系统（ESModule/CommonJS）
    "outDir": "./dist", // 编译输出目录
    "rootDir": "./src", // 源码根目录
    "strict": true, // 开启严格模式（必开）
    "esModuleInterop": true, // 兼容CommonJS模块
    "skipLibCheck": true, // 跳过第三方类型文件校验
    "resolveJsonModule": true, // 支持导入JSON文件
    "declaration": true, // 生成.d.ts类型声明文件
    "sourceMap": true // 生成sourceMap（调试用）
  },
  "include": ["./src/**/*"], // 要编译的文件
  "exclude": ["node_modules", "dist"] // 排除文件
}
```

## 五、常见场景示例
1. 接口请求类型约束
``` ts
// 定义请求参数类型
interface LoginParams {
  username: string;
  password: string;
  remember?: boolean;
}

// 定义响应数据类型
interface LoginResult {
  token: string;
  userInfo: {
    id: number;
    name: string;
  };
}

// 接口请求函数
async function login(params: LoginParams): Promise<LoginResult> {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(params),
  });
  return res.json();
}
```
2. 工具类型（内置）
TypeScript 内置常用工具类型，简化类型处理：
```ts

// Partial<T>：将所有属性变为可选
type PartialUser = Partial<User>;

// Required<T>：将所有属性变为必选
type RequiredUser = Required<User>;

// Readonly<T>：将所有属性变为只读
type ReadonlyUser = Readonly<User>;

// Pick<T, K>：选取T中的K属性
type PickUser = Pick<User, "id" | "name">;

// Omit<T, K>：排除T中的K属性
type OmitUser = Omit<User, "status">;
```
## 六、常见问题
1. 类型 “any” 的滥用
问题：any 会关闭类型校验，导致 TS 失去意义。
解决：优先使用 unknown + 类型守卫，或精准定义类型。
2. 第三方库无类型
方案 1：安装 @types/xxx（如 npm install @types/lodash）。
方案 2：手动声明模块（创建 typings.d.ts）。
```
declare module "xxx"; // 简单声明
```
3. 编译报错 “找不到名称”
原因：未配置 tsconfig.json 的 include，或类型文件未引入。
解决：检查 include 覆盖源码目录，或通过
 ```
/// <reference path="./types.d.ts" /> 引入类型。
``` 

## 七、参考资料
1. [TypeScript 官方文档](https://www.typescriptlang.org/docs/handbook/intro.html)
2. [TypeScript 中文文档](https://www.tslang.cn/docs/home.html)
3. [TSConfig 配置参考](https://www.typescriptlang.org/zh/tsconfig/)

