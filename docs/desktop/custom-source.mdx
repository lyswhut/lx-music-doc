---
id: custom-source
title: 自定义源脚本编写说明
---


文件请使用 UTF-8 编码格式编写，脚本所用编程语言为 JavaScript，可以使用 ES6+ 语法。

脚本与应用的交互是使用类似事件收发的方式进行，这是一个基本的脚本例子：

```js
/**
 * @name 测试音乐源
 * @description 我只是一个测试音乐源哦
 * @version 1.0.0
 * @author xxx
 * @homepage http://xxx
 */


const { EVENT_NAMES, request, on, send } = globalThis.lx

const qualitys = {
  kw: {
    '128k': '128',
    '320k': '320',
    flac: 'flac',
    flac24bit: 'flac24bit',
  },
  local: {},
}
const httpRequest = (url, options) => new Promise((resolve, reject) => {
  request(url, options, (err, resp) => {
    if (err) return reject(err)
    resolve(resp.body)
  })
})

const apis = {
  kw: {
    musicUrl({ songmid }, quality) {
      return httpRequest('http://xxx').then(data => {
        return data.url
      })
    },
  },
  local: {
    musicUrl(info) {
      return httpRequest('http://xxx').then(data => {
        return data.url
      })
    },
    pic(info) {
      return httpRequest('http://xxx').then(data => {
        return data.url
      })
    },
    lyric(info) {
      return httpRequest('http://xxx').then(data => {
        return {
          lyric: '...', // 歌曲歌词
          tlyric: '...', // 翻译歌词，没有可为 null
          rlyric: '...', // 罗马音歌词，没有可为 null
          lxlyric: '...', // lx 逐字歌词，没有可为 null，歌词格式为 [分钟:秒.毫秒]<开始时间（基于该句）,持续时间>歌词文字
                          // 例如： [00:00.000]<0,36>测<36,36>试<50,60>歌<80,75>词
        }
      })
    }
  }
}

// 注册应用 API 请求事件
// source 音乐源，可能的值取决于初始化时传入的 sources 对象的源 key 值
// info 请求附加信息，内容根据 action 变化
// action 请求操作类型，目前只有 musicUrl，即获取音乐 URL 链接，
//    当 action 为 musicUrl 时 info 的结构：{type, musicInfo}，
//        info.type：音乐质量，可能的值有 128k / 320k / flac / flac24bit（取决于初始化时对应源传入的 qualitys 值中的一个）
//                   特殊情况：源为 local 时，该值为 null
//        info.musicInfo：音乐信息对象，里面有音乐 ID、名字等信息
on(EVENT_NAMES.request, ({ source, action, info }) => {
  // 被调用时必须返回 Promise 对象
  switch (action) {
    // action 为 musicUrl 时需要在 Promise 返回歌曲 url
    case 'musicUrl':
      return apis[source].musicUrl(info.musicInfo, qualitys[source][info.type]).catch(err => {
        console.log(err)
        return Promise.reject(err)
      })
    // action 为 lyric 时需要在 Promise 返回歌词信息
    case 'lyric':
      return apis[source].musicUrl(info.musicInfo).catch(err => {
        console.log(err)
        return Promise.reject(err)
      })
    // action 为 pic 时需要在 Promise 返回歌曲封面 url
    case 'pic':
      return apis[source].musicUrl(info.musicInfo).catch(err => {
        console.log(err)
        return Promise.reject(err)
      })
  }
})

// 脚本初始化完成后需要发送 inited 事件告知应用
// 注意：初始化事件被发送前，执行脚本的过程中出现任何错误将视为脚本初始化失败
send(EVENT_NAMES.inited, {
  openDevTools: false, // 是否打开开发者工具，方便用于调试脚本
  sources: { // 当前脚本支持的源
    kw: { // 支持的源对象，可用 key 值：kw/kg/tx/wy/mg/local
      name: '酷我音乐',
      type: 'music',  // 目前固定为 music
      actions: ['musicUrl'], // 除了 local 外，其他的固定为 ['musicUrl']
      qualitys: ['128k', '320k', 'flac', 'flac24bit'], // 当前脚本的该源所支持获取的 Url 音质，有效的值有：['128k', '320k', 'flac', 'flac24bit']
    },
    // ...
    local: {
      name: '本地音乐',
      type: 'music',  // 目前固定为 music
      actions: ['musicUrl', 'lyric', 'pic'], // 源为 local 时，支持 ['musicUrl', 'lyric', 'pic']
      qualitys: [], // 源为 local 时，该值传入空数组即可
    },
  },
})

```

## 自定义源信息

文件的开头必须包含以下注释：

```js
/**
 * @name 测试脚本
 * @description 我只是一个测试脚本
 * @version 1.0.0
 * @author xxx
 * @homepage http://xxx
 */

```

- `@name`：源的名字，建议不要过长，24 个字符以内。
- `@description`：源的描述，建议不要过长，36 个字符以内，可不填，不填时可以删除它。
- `@version`：源的版本号，可不填，不填时可以删除它。
- `@author`：源的作者名字，可不填，不填时可以删除它。
- `@homepage`：源的主页，可不填，不填时可以删除它。

## `globalThis.lx`

应用为脚本暴露的 API 对象。

### `globalThis.lx.version`

自定义源 API 版本，API 变更时此版本号将会更改。

### `globalThis.lx.env`

自定义源运行环境，桌面版将固定为 `desktop`。

### `globalThis.lx.currentScriptInfo`

当前自定义源脚本信息（导入时在头部解析到的）：

- `globalThis.lx.currentScriptInfo.name`：源的名字，即 `@name` 的内容。
- `globalThis.lx.currentScriptInfo.description`：源的描述，即 `@description` 的内容。
- `globalThis.lx.currentScriptInfo.version`：源的版本号，即 `@version` 的内容。
- `globalThis.lx.currentScriptInfo.author`：源的作者名字，即 `@author` 的内容。
- `globalThis.lx.currentScriptInfo.homepage`：源的主页，即 `@homepage` 的内容。
- `globalThis.lx.currentScriptInfo.rawScript`：源的原始代码。

### `globalThis.lx.EVENT_NAMES`

常量事件名称对象，发送、注册事件时传入事件名时使用，可用值：

| 事件名 | 描述 |
| --- | --- |
| `inited` | 脚本初始化完成后发送给应用的事件名，发送该事件时需要传入以下信息：`{ sources, openDevTools }`<br />`openDevTools`：是否打开 DevTools，此选项可用于开发脚本时的调试<br />`sources`：支持的源信息对象<br />`sources[kw/kg/tx/wy/mg/local].name`：源的名字（目前非必须）<br />`sources[kw/kg/tx/wy/mg/local].type`：源类型，目前固定值需为 `music`<br />`sources[kw/kg/tx/wy/mg/local].actions`：支持的 actions 数组，`local` 源可用值为 `musicUrl`、`lyric`、`pic`，其他源只支持 `musicUrl`<br />`sources[kw/kg/tx/wy/mg/local].qualitys`：该源支持的音质列表，有效的值为`['128k', '320k', 'flac', 'flac24bit']`，该字段用于控制应用可用的音质类型，当 `source` 为 `local` 时，传入 `[]` 即可 |
| `request` | 应用 API 请求事件名，回调入参：`handler({ source, action, info})`，回调必须返回 `Promise` 对象<br />`source`：音乐源，可能的值取决于初始化时传入的 `sources` 对象的源 key 值<br />`info`：请求附加信息，内容根据 `action` 变化<br />`action`：请求操作类型，取决于发送 `inited` 事件时传入的 `actions` 数组中的值<br />当为 `musicUrl` 时表示获取音乐URL链接，`info` 的结构：`{type, musicInfo}`<br/>`info.type`：音乐质量，可能的值有 `128k` / `320k` / `flac` / `flac24bit`（取决于初始化时对应源传入的 `qualitys` 值中的一个，`source` 为 `local` 时该值为 `null`）<br/>`info.musicInfo`：音乐信息对象，里面有音乐 ID、名字等信息，该操作需要在 Promise 返回 HTTP 形式的歌曲 URL<br />当为 `lyric` 时，表示获取音乐歌词，`info` 的结构：`{musicInfo}`，该操作需要在 Promise 返回歌曲的歌词信息（结构为 `{lryic,tlryic,rlyric,lxlyric}`，例如：`{lyric:'..',tlryic:...}`）<br />当为 `pic` 时，表示获取音乐封面图片，`info` 的结构：`{musicInfo}`，该操作需要在 Promise 返回 HTTP 形式的歌曲封面图片 URL |
| `updateAlert` | 显示源更新弹窗，发送该事件时的参数：`{log, updateUrl}`<br />`log`：更新日志，必传，字符串类型，内容可以使用 `\n` 换行，最大长度 1024，超过此长度后将将丢弃超出的部分<br />`updateUrl`：更新地址，用于引导用户去该地址更新源，选传，需为 HTTP 协议的 URL 地址，最大长度 1024<br />此事件每次运行脚本只能调用一次<br />例子：`lx.send(lx.EVENT_NAMES.updateAlert, { log: 'hello world', updateUrl: 'https://xxx.com' })` |

**注意：初始化事件被发送前，执行脚本的过程中出现任何错误将视为脚本初始化失败。**

### `globalThis.lx.on`

事件注册方法，应用主动与脚本通信时使用：

```js
/**
 * @param event_name 事件名
 * @param handler 事件处理回调 -- 注意：注册的回调在被调用时必须返回 Promise 对象
 */
globalThis.lx.on(event_name, handler)
```

**注意**：注册的回调在被调用时必须返回 `Promise` 对象。

### `globalThis.lx.send`

事件发送方法，脚本主动与应用通信时使用：

```js
/**
 * @param event_name 事件名
 * @param datas 要传给应用的数据
 */
globalThis.lx.send(event_name, datas)
```

### `globalThis.lx.request`

HTTP 请求方法，用于发送 HTTP 请求，此 HTTP 请求方法不受跨域规则限制：

```js
/**
 * @param url 请求的URL
 * @param options 请求选项，可用选项有 method / headers / body / form / formData / timeout
 * @param callback 请求结果的回调 入参：err, resp, body
 * @return 返回一个方法，调用此方法可以终止HTTP请求
 */
const cancelHttp = globalThis.lx.request(url, options, callback)
```

### `globalThis.lx.utils`

应用提供给脚本的工具方法：

- `globalThis.lx.utils.buffer.from`：对应 Node.js 的 `Buffer.from`。
- `globalThis.lx.utils.buffer.bufToString`：Buffer 转字符串 `bufToString(buffer, format)`，`format` 对应 Node.js `Buffer.toString` 的参数。
- `globalThis.lx.utils.crypto.aesEncrypt`：AES 加密 `aesEncrypt(buffer, mode, key, iv)`。
- `globalThis.lx.utils.crypto.md5`：MD5 加密 `md5(str)`。
- `globalThis.lx.utils.crypto.randomBytes`：生成随机字符串 `randomBytes(size)`。
- `globalThis.lx.utils.crypto.rsaEncrypt`：RSA 加密 `rsaEncrypt(buffer, key)`。
- `globalThis.lx.utils.zlib.inflate`：解压 `inflate(buffer: Buffer) => Promise<Buffer>`。
- `globalThis.lx.utils.zlib.deflate`：压缩 `deflate(buffer: Buffer) => Promise<Buffer>`。

## 桌面版自定义源与移动版自定义源的区别

- 移动版 `inited` 事件无 `openDevTools` 选项。
- 移动版 `lx.utils` 的某些方法不可用，对于不可用或部分可用的方法，背后会有括号说明。
- 移动版只有极少部分宿主环境 API 可用，详情看「可用宿主环境 API」说明。
- 移动版由于预加载脚本与自定义脚本运行在同一个环境下，出于对预加载脚本的安全性考虑，除了 `Function.prototype.toString`、`Function.prototype.toLocaleString`、`Object.prototype.toString` 外的其他 JavaScript 内置属性都会被冻结，所以类似 `Array.prototype.push = ...` 的代码都将无效，但扩展内置对象的行为是允许的，例如：`Array.prototype.myPush = ...`。

以上是自定义源功能在桌面版与移动版的区别，目前仅提供以上工具方法，如果需要其他方法可以在 GitHub [提交 Issue](https://github.com/lyswhut/lx-music-desktop/issues?q=is%3Aissue+) 进行讨论。
