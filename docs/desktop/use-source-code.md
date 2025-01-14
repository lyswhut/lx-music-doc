---
id: use-source-code
title: 源码使用方法
---

### 环境要求

- Node.js 16+

### 环境准备

1. **安装 Node.js 环境 (如已安装请跳过)**：下载并安装 [Node.js](https://nodejs.org/en/)，安装结束后，打开命令行输入 `node -v`，输出 Node.js 的版本号即表示已安装完成；
2. **安装 Visual Studio Build Tools (如已安装请跳过)**：下载并安装 [Visual Studio Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools)，安装程序后勾选「使用 C++ 的桌面开发」安装即可；
3. **拉取代码**：克隆本仓库代码；
4. **安装依赖**：在项目根目录打开命令行，执行命令：`npm install`，若此命令执行的过程中报错可以尝试百度报错内容找解决方法。

### 开发及构建

```bash
# 开发模式
npm run dev

# 构建免安装版
npm run pack:dir

# 构建安装包（Windows）
npm run pack:win

# 构建安装包（macOS）
npm run pack:mac

# 构建安装包（Linux）
npm run pack:linux
```
