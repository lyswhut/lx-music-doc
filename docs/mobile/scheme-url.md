---
id: scheme-url
title: Scheme URL 支持
---

从 v1.6.0 起支持 Scheme URL，可以使用此功能从浏览器等场景下调用 LX Music。

调用传参格式与桌面版一致，入参格式说明看[桌面版 Scheme URL 说明](/desktop/scheme-url)，但目前仅支持以下 URL：

### `data` 方式传参

以经过 URL 编码的 JSON 数据传参，例：`lxmusic://music/play?data=xxxx`，其中 `xxxx` 为经过 URL 编码后的 JSON 数据，JSON 数据内容取决于下表的参数部分。

| 描述 | URL | 参数 |
| --- | --- | --- |
| 播放歌单 | `songlist/play` | `source<String>`（源，必传）<br />`id<String/Number>`（歌单 ID，选传）<br />`url<String>`（歌单 URL，选传）*其中 `id` 与 `url` 必传只传其中一个*<br />`index<Number>`（播放第几首歌，选传，从 0 开始） |
| 播放歌曲 | `music/play` | `name<String>`（歌曲名，必传）<br />`singer<String>`（艺术家名，必传）<br />`source<String>`（源，必传）<br />`songmid<String/Number>`（歌曲 ID，必传）<br />`img<String>`（歌曲图片链接，选传）<br />`albumId<String/Number>`（歌曲专辑 ID，选传）<br />`interval<String>`（格式化后的歌曲时长，选传，例：`03:55`）<br />`albumName<String>`（专辑名，选传）<br />`types<Object>`（歌曲可用音质数组，必传）<br />数组格式：`[{"type": "<音质>", size: "<格式化后的文件大小，选传>", hash: "<kg 源必传>"}]`<br />例：`[{"type": "128k", size: "3.56M"}, {"type": "320k", size: null}]`）<br /><br />以下为平台特定参数：<br />`hash<String>`（歌曲 hash，kg 源必传）<br />`strMediaMid<String>`（歌曲 strMediaMid，tx 源必传）<br />`albumMid<String>`（歌曲 albumMid，tx 源专用，选传）<br />`copyrightId<String>`（歌曲 copyrightId，mg 源必传）<br />`lrcUrl<String>`、`trcUrl<String>`、`mrcUrl<String>`（歌曲 lrcUrl、trcUrl 与 mrcUrl，mg 源专用，选传） |
| 搜索并播放歌曲 | `music/searchPlay` | `name<String>`（歌曲名，必传）<br />`singer<String>`（艺术家名，选传）<br />`albumName<String>`（专辑名，选传）<br />`interval<String>`（时长，`xx:xx` 的形式，选传）<br />`playLater<Boolean>`（是否稍后播放，选传，默认 `false` 立即播放） |

#### 以 data 传参的例子

以经过 URL 编码的 JSON 数据传参，例：`lxmusic://music/play?data=xxxx`，其中 `xxxx` 为经过 URL 编码后的 JSON 数据。

- 打开歌单：`lxmusic://songlist/play?data=%7B%22source%22:%22kw%22,%22id%22:%223373919903%22%7D`
- 搜索歌曲：`lxmusic://music/search?data=%7B%22keywords%22:%22%E7%AA%81%E7%84%B6%E7%9A%84%E8%87%AA%E6%88%91%22%7D`

### `URL` 方式传参

由于 URL 传参只适用于简单传参场景，所以目前只支持以下功能的调用：

| 描述 | URL | 参数 |
| --- | --- | --- |
| 搜索并播放歌曲 | `music/searchPlay/{name-singer}` | `name-singer`（歌曲名，必传）可以只传入歌曲名，也可以传入 **`歌曲名-艺术家`** |
| 播放歌曲 | `player/play` |
| 暂停播放 | `player/pause` |
| 切换下一曲 | `player/skipNext` |
| 切换上一曲 | `player/skipPrev` |
| 切换播放或暂停 | `player/togglePlay` |
| 收藏当前播放的歌曲 | `player/collect` |
| 取消收藏当前播放的歌曲 | `player/uncollect` |
| 不喜欢当前播放的歌曲 | `player/dislike` |

#### 以 URL 传参的例子

用 `lxmusic://` 拼接上表中填充参数后的 URL 即可，填充参数时最好将参数单独转一下 URL 编码，否则若参数中存在特殊字符（如 `/`）将导致异常的调用。

- 搜索并播放歌曲：`lxmusic://music/searchPlay/%E7%AA%81%E7%84%B6%E7%9A%84%E8%87%AA%E6%88%91`
- 切换下一曲：`lxmusic://player/skipNext`

相关 issue 看：[https://github.com/lyswhut/lx-music-desktop/issues/1056](https://github.com/lyswhut/lx-music-desktop/issues/1056)
