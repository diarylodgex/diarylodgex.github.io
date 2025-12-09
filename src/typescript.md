# Typescript

## express 项目实际应用

### .tsxignore 配置

使用tsx执行命令时tsx --watch  src/app.ts  --ignore log/** 该配置无效
添加.tsxignore文件 配置以下内容开始生效
```
logs/**
node_modules/**
dist/**
public/**
```
### 项目无后缀运行
在项目中添加tsconfig.json文件 配置如下
```tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler"
    // 有后缀版本的
    // "moduleResolution": "node",
    // "noEmit": true,
    // "allowImportingTsExtensions": true,

  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

```