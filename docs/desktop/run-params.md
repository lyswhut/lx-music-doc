---
id: run-params
title: 支持的启动参数
---

目前软件已支持的启动参数如下：

### `-search`

启动软件时自动在搜索框搜索指定的内容。例如 `-search="突然的自我 - 伍佰"`。

### `-dha`

禁用硬件加速启动 *(Disable Hardware Acceleration)*，窗口显示有问题时可以尝试添加此参数启动。*适用于 v1.6.0 及后续版本*

### `-dt`

以非透明模式启动 *(Disable Transparent)*，对于未开启 Aero 效果的 Windows 7 系统可加此参数启动以确保界面正常显示。

注：该参数对桌面歌词无效；原 `-nt` 参数已重命名为 `-dt`。*v1.6.0 起重命名*

### `-dhmkh`

禁用硬件媒体密钥处理 *(Disable Hardware Media Key Handling)*，此选项将禁用 Chromium 的 *Hardware Media Key Handling* 特性。*适用于 v1.9.0 及后续版本*

### `-proxy-server`

设置代理服务器，代理软件的所有流量。例如 `-proxy-server="127.0.0.1:1081"`。*适用于 v1.17.0 及后续版本*

注：不支持设置账号密码；软件内「设置 → 网络设置 → HTTP 代理设置」选项仅代理接口请求的流量，优先级更高。

### `-proxy-bypass-list`

绕过代理服务器的主机列表，以分号分隔。例如 `-proxy-bypass-list="<local>;*.google.com;*foo.com;1.2.3.4:5678"`。*适用于 v1.17.0 及后续版本*

注：与 `-proxy-server` 一起使用才有效；此设置对软件内接口请求无效。

### `-play`

启动时播放指定列表的音乐。参数说明：

| 参数名称 | 描述 |
| --- | --- |
| `type` | 播放类型，目前固定为 `songList` |
| `source` | 播放源，可用值为 `kw/kg/tx/wy/mg/myList`<br/> *`kw/kg/tx/wy/mg` 对应各源的在线列表，`myList` 为本地列表* |
| `link` | 要播放的在线列表歌单链接或 ID<br/> `source` 为 `kw/kg/tx/wy/mg` 之一（即在线列表）时必传<br/> 举例：`./lx-music-desktop -play="type=songList&source=kw&link=<歌单 URL / ID>"`<br/> *注意：如果传入的是 URL，必须对 URL 进行编码后再传入* | 
| `name` | 要播放的本地列表歌单名字<br/> `source` 为 `myList` 时必传<br/> 举例：`./lx-music-desktop -play="type=songList&source=myList&name=默认列表"` |
| `index` | 从列表的哪个位置开始播放，可选，若不传则默认播放第一首歌曲<br/> 举例：`./lx-music-desktop -play="type=songList&source=myList&name=默认列表&index=2"` |

