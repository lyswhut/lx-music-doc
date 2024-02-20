---
id: statusbar-lyric
title: 状态栏歌词
---

我对安卓原生不熟悉，目前不打算去适配它，熟悉安卓的同学可以去帮忙适配（JS部分的实现可以交给我做）

项目运行方式看：[源码使用方法](/mobile/use-source-code)

若遇到问题可以回帖讨论 :)

桌面歌词相关的信息：[https://github.com/lyswhut/lx-music-mobile/issues/30](https://github.com/lyswhut/lx-music-mobile/issues/30)

---

从v0.13.0起，有了一个显示状态栏歌词的方式：通过调用第三方Xposed模块【[墨•状态栏歌词](https://github.com/Block-Network/StatusBarLyric)】的API支持来状态栏歌词。
但考虑到要依赖第三方应用，并且是Xposed模块，预计用的人会比较少，所以暂不考虑将此特性合并到主分支。

包含此特性的代码在`statusbar_lyric`分支上，想要此功能的人可以在 [releases](https://github.com/lyswhut/lx-music-mobile/releases) 下载版本号带 **`sl`** 的包。
