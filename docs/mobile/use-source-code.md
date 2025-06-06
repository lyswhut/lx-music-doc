---
id: use-source-code
title: 源码使用方法
---

### 环境要求

- Node.js 16+

### 项目环境准备

1. **安装 Node.js 环境 (如已安装请跳过)**：下载 [Node.js](https://nodejs.org/en/)，安装结束后，打开命令行输入 `node -v`，输出 Node.js 的版本号即表示已安装完成；
2. **安装 Android 开发环境**：若你没有安装 Android 开发环境，可以看环境准备的 [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) 说明；
3. **拉取代码**：克隆本仓库代码；
4. **安装依赖**：在项目根目录打开命令行，执行命令：`npm install`，若此命令执行的过程中报错可以尝试百度报错内容找解决方法，或在 GitHub [提交 Issue](https://github.com/lyswhut/lx-music-mobile/issues?q=is%3Aissue+) 贴出报错日志一起讨论解决；
5. 使用 Android Studio 打开项目根目录下的 `android` 文件夹，同步一遍 gradle。

### 项目启动步骤

1. 启动模拟器或连接真实设备；
2. **启动开发服务器**：在项目根目录打开命令行，执行命令：`npm run dev`，若开发服务器意外停止了，可以执行 `npm start` 重新启动；
3. **开发**：修改项目下的 JavaScript 文件即可实时看到修改后的效果。

### Native 开发

使用 Android Studio 打开项目根目录下的 `android` 文件夹，即可在 Android Studio 内进行 Android 代码的开发与调试。

### 构建安装包

首先生成 Android 签名文件，然后将你的签名文件放在 `android/app/`，然后在 `android/` 新建 `keystore.properties` 文件，填入你的签名信息：

```properties
storeFile=
storePassword=
keyAlias=
keyPassword=
```

最后在 `android/` 执行命令 `./gradlew assembleRelease`，构建的安装包在 `android/app/build/outputs/apk/release/`。

