---
id: custom-source
title: 自定义源脚本编写说明
---


文件请使用UTF-8编码格式编写，脚本所用编程语言为JavaScript，可以使用ES6+语法，脚本与应用的交互是使用类似事件收发的方式进行，这是一个基本的脚本例子：

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
}

// 注册应用API请求事件
// source 音乐源，可能的值取决于初始化时传入的sources对象的源key值
// info 请求附加信息，内容根据action变化
// action 请求操作类型，目前只有musicUrl，即获取音乐URL链接，
//    当action为musicUrl时info的结构：{type, musicInfo}，
//        info.type：音乐质量，可能的值有128k / 320k / flac / flac24bit（取决于初始化时对应源传入的qualitys值中的一个），
//        info.musicInfo：音乐信息对象，里面有音乐ID、名字等信息
on(EVENT_NAMES.request, ({ source, action, info }) => {
  // 回调必须返回 Promise 对象
  switch (action) {
    // action 为 musicUrl 时需要在 Promise 返回歌曲 url
    case 'musicUrl':
      return apis[source].musicUrl(info.musicInfo, qualitys[source][info.type]).catch(err => {
        console.log(err)
        return Promise.reject(err)
      })
  }
})

// 脚本初始化完成后需要发送inited事件告知应用
send(EVENT_NAMES.inited, {
  status: true, // 初始化成功 or 失败
  openDevTools: false, // 是否打开开发者工具，方便用于调试脚本
  sources: { // 当前脚本支持的源
    kw: { // 支持的源对象，可用key值：kw/kg/tx/wy/mg
      name: '酷我音乐',
      type: 'music',  // 目前固定为 music
      actions: ['musicUrl'], // 目前固定为 ['musicUrl']
      qualitys: ['128k', '320k', 'flac', 'flac24bit'], // 当前脚本的该源所支持获取的Url音质，有效的值有：['128k', '320k', 'flac', 'flac24bit']
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

- `@name `：源的名字，建议不要过长，24个字符以内
- `@description `：源的描述，建议不要过长，36个字符以内，可不填，不填时必须保留 @description
- `@version`：源的版本号，可不填，不填时可以删除 @version
- `@author `：脚本作者名字，可不填，不填时可以删除 @author
- `@homepage `：脚本主页，可不填，不填时可以删除 @homepage

## `globalThis.lx`

应用为脚本暴露的API对象。

### `globalThis.lx.version`

自定义源API版本，API变更时此版本号将会更改（新增于v1.14.0之后）

### `globalThis.lx.EVENT_NAMES`

常量事件名称对象，发送、注册事件时传入事件名时使用，可用值：

| 事件名 | 描述
| --- | ---
| `inited` | 脚本初始化完成后发送给应用的事件名，发送该事件时需要传入以下信息：`{status, sources, openDevTools}`<br />`status`：初始化结果（`true`成功，`false`失败）<br />`openDevTools`：是否打开DevTools，此选项可用于开发脚本时的调试<br />`sources`：支持的源信息对象，<br />`sources[kw/kg/tx/wy/mg].name`：源的名字（目前非必须）<br />`sources[kw/kg/tx/wy/mg].type`：源类型，目前固定值需为`music`<br />`sources[kw/kg/tx/wy/mg].actions`：支持的actions，由于目前只支持`musicUrl`，所以固定传`['musicUrl']`即可<br />`sources[kw/kg/tx/wy/mg].qualitys`：该源支持的音质列表，有效的值为`['128k', '320k', 'flac', 'flac24bit']`，该字段用于控制应用可用的音质类型
| `request` | 应用API请求事件名，回调入参：`handler({ source, action, info})`，回调必须返回`Promise`对象<br />`source`：音乐源，可能的值取决于初始化时传入的`sources`对象的源key值<br />`info`：请求附加信息，内容根据`action`变化<br />`action`：请求操作类型，目前只有`musicUrl`，即获取音乐URL链接，需要在 Promise 返回歌曲 url，`info`的结构：`{type, musicInfo}`，`info.type`：音乐质量，可能的值有`128k` / `320k` / `flac` / `flac24bit`（取决于初始化时对应源传入的`qualitys`值中的一个），`info.musicInfo`：音乐信息对象，里面有音乐ID、名字等信息
| `updateAlert` | 显示源更新弹窗，发送该事件时的参数：`{log, updateUrl}`<br />`log`：更新日志，必传，字符串类型，内容可以使用`\n`换行，最大长度1024，超过此长度后将被截取超出的部分<br />`updateUrl`：更新地址，用于引导用户去该地址更新源，选传，需为http协议的url地址，最大长度1024<br />此事件每次运行脚本只能调用一次（源版本v1.2.0新增）<br />例子：`lx.send(lx.EVENT_NAMES.updateAlert, { log: 'hello world', updateUrl: 'https://xxx.com' })`


### `globalThis.lx.on`

事件注册方法，应用主动与脚本通信时使用：

```js
/**
 * @param event_name 事件名
 * @param handler 事件处理回调 -- 注意：注册的回调必须返回 Promise 对象
 */
globalThis.lx.on(event_name, handler)
```

**注意：** 注册的回调必须返回 `Promise` 对象。

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

HTTP请求方法，用于发送HTTP请求，此HTTP请求方法不受跨域规则限制：

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

- `globalThis.lx.utils.buffer.from`：对应Node.js的 `Buffer.from`
- `globalThis.lx.utils.buffer.bufToString`：Buffer转字符串 `bufToString(buffer, format)`，`format`对应Node.js `Buffer.toString`的参数（v1.14.0之后新增）
- `globalThis.lx.utils.crypto.aesEncrypt`：AES加密 `aesEncrypt(buffer, mode, key, iv)`
- `globalThis.lx.utils.crypto.md5`：MD5加密 `md5(str)`
- `globalThis.lx.utils.crypto.randomBytes`：生成随机字符串 `randomBytes(size)`
- `globalThis.lx.utils.crypto.rsaEncrypt`：RSA加密 `rsaEncrypt(buffer, key)`
- `globalThis.lx.utils.zlib.inflate`：解压 `inflate(buffer: Buffer) => Promise<Buffer>`（API版本v1.3.0新增）
- `globalThis.lx.utils.zlib.deflate`：压缩 `deflate(buffer: Buffer) => Promise<Buffer>`（API版本v1.3.0新增）

### PC端自定义源与移动端自定义源的区别

- 移动端 `init` 事件无 `openDevTools` 选项
- 移动端 `lx.utils` 的某些方法不可用，对于不可用或部分可用的方法，背后会有括号说明
- 移动端只有极少部分宿主环境API可用，详情看 可用宿主环境API 说明
- 移动端新增了 `lx.env` 与 `lx.currentScriptInfo`
- 移动端由于预加载脚本与自定义脚本运行在同一个环境下，出于对预加载脚本的安全性考虑，除了 `Function.prototype.toString`、`Function.prototype.toLocaleString`、`Object.prototype.toString` 外的其他JavaScript内置属性都会被冻结，所以类似 `Array.prototype.push = ...` 的代码都将无效，但扩展内置对象的行为是允许的，例如：`Array.prototype.myPush = ...`

以上是自定义源功能在PC端与移动端的区别，目前仅提供以上工具方法，如果需要其他方法可以开issue讨论。
