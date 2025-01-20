---
id: download
title: 软件下载
---

## 下载地址

### 桌面版

- 正式版：[https://github.com/lyswhut/lx-music-desktop/releases](https://github.com/lyswhut/lx-music-desktop/releases)
- 测试版：[https://github.com/lyswhut/lx-music-desktop/actions/workflows/beta-pack.yml](https://github.com/lyswhut/lx-music-desktop/actions/workflows/beta-pack.yml)

### 移动版

- 正式版：[https://github.com/lyswhut/lx-music-mobile/releases](https://github.com/lyswhut/lx-music-mobile/releases)
- 测试版：[https://github.com/lyswhut/lx-music-mobile/actions/workflows/beta-pack.yml](https://github.com/lyswhut/lx-music-mobile/actions/workflows/beta-pack.yml)

:::caution
测试版包含一些正式版未包含的特性，仅用于体验新功能和测试。测试版可能包含一些未知 bug，使用起来可能不稳定。

<b>普通用户建议优先使用正式版。</b>专业用户以及愿意协助测试的用户可以尝试使用测试版。
:::

:::tip
**测试版通过 GitHub Actions 进行分发，需要登录 GitHub 账号才能下载。**

如果你没有或不方便注册/登录 GitHub，也可以通过 nightly.link 下载：

- 桌面测试版：[https://nightly.link/lyswhut/lx-music-desktop/workflows/beta-pack/beta](https://nightly.link/lyswhut/lx-music-desktop/workflows/beta-pack/beta)
- 移动测试版：[https://nightly.link/lyswhut/lx-music-mobile/workflows/beta-pack/beta](https://nightly.link/lyswhut/lx-music-mobile/workflows/beta-pack/beta)

**nightly.link 仅指向最新的测试版本。**
:::

<!-- ## 网盘下载（推荐国内用户在网盘下载）

推荐国内用户使用此方式下载，软件发布更新时，此网盘的安装包会同步更新到最新版本。

[https://www.lanzoui.com/b0bf2cfa/](https://www.lanzoui.com/b0bf2cfa/) 

密码：`glqw`

:::tip
若链接无法打开请百度：蓝奏云链接打不开
::: -->

## 软件安装包说明

### 桌面版

以 `.dmg` 结尾的文件适用于 macOS 系统。

以 `.deb`/`.rpm`/`.AppImage`/`.pacman` 结尾的文件适用于 Linux 系统。

带 `win_` 或 `Setup` 的文件适用于 Windows 系统。

- 以 `Setup.exe` 结尾的文件为**安装版**，具备「自动更新」功能，软件启动时会自动检测并安装更新。  
  *但若你所在网络访问 GitHub 较慢，则可能会更新失败，这时需要手动下载安装包覆盖安装。*
- 以 `green.7z` 结尾的文件为**免安装版**，解压后可直接运行里面的 `lx-music-desktop.exe`，但无法自动更新。
- 带 `x64` 的文件适用于 64 位操作系统，`x86` 适用于 32 位操作系统，`arm64` 适用于较新的 Arm 机器。

:::tip
**免安装版**打包为 7z 文件（以 `.7z` 结尾），需要用「解压缩软件」解压后才可以运行。

若你的电脑没安装解压缩软件，推荐使用 [7-Zip](https://7-zip.org/)、[NanaZip](https://github.com/M2Team/NanaZip) 或 [Bandizip](https://www.bandisoft.com/bandizip/)。
:::

:::caution
从 v2.5.0 起，LX Music 的 Windows 版本默认不再支持 Windows 7/8/8.1 系统。

但考虑到仍然有许多人使用 Windows 7，我们特别构建了能在 Windows 7/8/8.1 上使用的**免安装版**（文件名带 `win7`）。

需要注意的是，`win7` 版本缺乏安全更新。若非必要，请不要使用该版本。

若你不懂选择哪个版本，建议优先使用**安装版**！
:::

### 移动版

以 `.apk` 结尾的文件适用于 Android 系统。

- 建议优先下载 `arm64-v8a` 安装包，若无法安装再下载 `universal` 安装包。
- 另外还有 `armeabi-v7a`/`x86_64` 等安装包，若有需要可自行下载。
- 版本号包含 `sl` 的安装包为「墨·状态栏」特别版，详情看[状态栏歌词](./mobile/statusbar-lyric)。
- `universal` 安装包的内部版本号总是低于单架构安装包的内部版本（包括跨版本）。安装新版本时，如果遇到版本号太低的提示，请尝试使用其他单架构安装包。

***目前没有计划支持 iOS 和 HarmonyOS NEXT。***

## 关于杀软报毒的说明

如果有杀毒软件报毒或提示有可疑行为，**请先确认软件是从本页面提供的渠道下载的**。

如果确认是从本页面提供的渠道下载的，那么大概率为误报。**我们不对第三方渠道下载的安全性作任何保证。**

详情请参阅「**常见问题**」中的「**杀毒软件提示有病毒或恶意行为**」部分。
