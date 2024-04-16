---
id: open-api
title: 开放API服务
---

从 v2.7.0 起支持开放API服务，启用该功能后，将会在本地启动一个http服务，提供以下接口供第三方软件调用。

:::tip
若你要实时获取播放器状态，我们强烈建议使用SSE接口来获取状态，而不是通过轮询的方式重复调用状态接口。
:::

### 获取播放器状态

接口地址：`/status`

请求方法：`GET`

请求入参：

| 参数名称 | 描述 |
| --- | ---  |
| `filter` | 过滤返回的字段，可选，可用名字看响应数据格式的字段名，多个用 `,` 分隔。<br/> 默认值：`status,name,singer,albumName,lyricLineText,duration,progress,playbackRate` |

响应数据格式：JSON

| 字段名 | 描述 |
| --- | ---  |
| `status` | 播放器状态，可能的值为 `playing`、`paused`、`error`、`stoped` |
| `name` | 歌曲名字 |
| `singer` | 歌手名字 |
| `albumName` | 专辑名字 |
| `duration` | 歌曲时长（秒） |
| `progress` | 歌曲进度（秒） |
| `playbackRate` | 播放速率 |
| `picUrl` | 歌曲封面图片链接，可能为 HTTP链接 或 [Data Url](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) |
| `lyricLineText` | 当前句歌词文本 |
| `lyricLineAllText` | 当前句歌词及扩展歌词文本（扩展歌词包含翻译、罗马音等，按换行符分割） |
| `lyric` | 当前歌曲LRC歌词文本 |
| `collect` | 当前歌曲是否已收藏 |

响应数据例子：

```json
{
  "status": "playing",
  "name": "天使的翅膀",
  "singer": "徐誉滕",
  "albumName": "李雷和韩梅梅",
  "duration": 214.543673,
  "progress": 5.051338,
  "playbackRate": 1,
  "picUrl": "http://xxx",
  "lyricLineText": "徐誉滕 - 天使的翅膀"
}

```

### 获取当前LRC歌词

接口地址：`/lyric`

请求方法：`GET`

响应数据格式：UTF-8编码的LRC文本

响应数据例子：

```txt
[ar:安琥]
[ti:天使的翅膀]
[by:]
[al:全年伤感歌曲大盘点2]
[offset:0]
[00:00.0]徐誉滕 - 天使的翅膀
[00:05.50]词：徐誉滕
[00:10.100]曲：徐誉滕
[00:15.150]落叶随风将要去何方
[00:21.503]只留给天空美丽一场
[00:27.561]曾飞舞的声音
[00:30.723]像天使的翅膀
[00:33.632]划过我幸福的过往
[00:40.799]爱曾经来到过的地方
[00:47.345]依昔留着昨天的芬芳
```

### 播放器状态订阅

SSE事件流接口，本接口接受一个普通的 HTTP GET 请求，只是请求会保持长链接状态，播放器的状态在变更时通过文本事件流的形式将其实时返回，你可以使用以下命令测试该接口：

```bash
curl -N http://127.0.0.1:23330/subscribe-player-status
```

其他语言使用该接口的例子：[lx-music-desktop/1824#issuecomment-2027888681](https://github.com/lyswhut/lx-music-desktop/issues/1824#issuecomment-2027888681)

更多详情请阅读 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)

接口地址：`/subscribe-player-status`

请求方法：`GET`

请求入参：

| 参数名称 | 描述 |
| --- | ---  |
| `filter` | 过滤返回的字段，可选，可用名字看响应数据格式的字段名，多个用 `,` 分隔。<br/> 默认值：`status,name,singer,albumName,lyricLineText,duration,progress,playbackRate` |

响应数据格式：SSE文本事件流

| 事件名称 | 描述 |
| --- | ---  |
| `status` | 播放器状态，可能的值为 `playing`、`paused`、`error`、`stoped` |
| `name` | 歌曲名字 |
| `singer` | 歌手名字 |
| `albumName` | 专辑名字 |
| `duration` | 歌曲时长（秒） |
| `progress` | 歌曲进度（秒） |
| `playbackRate` | 播放速率 |
| `picUrl` | 歌曲封面图片链接，可能为 HTTP链接 或 [Data Url](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) |
| `lyricLineText` | 当前句歌词文本 |
| `lyricLineAllText` | 当前句歌词及扩展歌词文本（扩展歌词包含翻译、罗马音等，按换行符分割） |
| `lyric` | 当前歌曲LRC歌词文本 |
| `collect` | 当前歌曲是否已收藏 |

响应数据例子：

```txt
event: status
data: "playing"

event: name
data: "交换余生"

event: singer
data: "林俊杰"

event: albumName
data: "幸存者 Drifter"

```

若你想要提供更多API，可以到GitHub开issue讨论 :)
