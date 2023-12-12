---
id: desktop-lyric
sidebar_position: 6
title: 桌面歌词显示异常
---


### Windows 7 系统桌面歌词显示异常

Windows 7 未开启 Aero 效果时桌面歌词会有问题，详情看上面的 **Windows 7 下界面异常** 方法解决。

### MAC OS 系统、桌面歌词有残留阴影

此问题似乎是Electron的Bug，翻阅electron的issue列表发现该Bug以存在很久了，遗憾的是没有一直都没有修复，由于我没有装MAC平台的电脑，没法重现，就没再去electron提issue，更多信息看：

- [https://github.com/electron/electron/issues/21173](https://github.com/electron/electron/issues/21173)
- [https://github.com/electron/electron/issues/14304](https://github.com/electron/electron/issues/14304)

### Linux 系统下桌面歌词窗口异常

`v1.2.1`以前的版本在 Ubuntu 18.10 下第一次开启桌面歌词时歌词窗口会变白，需要关闭后再开启，
`v1.2.1`及之后的版本已修复该问题。

其他 Linux 系统未测试，如有异常也是意料之中，目前不打算去处理 Linux 平台的桌面歌词问题，但你可以尝试按照`Linux 下界面异常`的解决方案去解决。

