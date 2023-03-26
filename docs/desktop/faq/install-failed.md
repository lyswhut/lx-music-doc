---
id: install-failed
sidebar_position: 4
title: 安装失败
---

### Windows 安装版安装失败

#### 覆盖安装时安装失败

出现这个问题的原因一般是你当初在安装本软件的时候是以管理员身份安装的，运行软件的时候没有以管理员身份运行，所以卸载后无法再装上。

安装本软件时建议选择 `为当前用户安装`，并安装在当前用户目录或者安装在不需要管理员权限的目录（即其他分区下），不要选`为所有用户安装`。

#### 提示安装程序并未成功地运行完成或安装过程中出现错误

对于部分电脑出现安装失败的问题，可以做出以下尝试：

- 若你之前可以安装成功，但现在安装失败，就去**控制面板-程序和功能**或用第三方卸载工具看下有没有之前的版本残留，若同时在不同路径下安装了多个版本就可能会出现该问题，这种情况卸载掉所有版本重新安装即可
- 清理安装路径下的残留文件
- 清理注册表（建议用清理工具清理）

#### 安装结束后，无法启动软件

安装结束后，安装目录只有卸载程序没有其他内容

- 可能是你使用错了安装包，例如使用Windows arm64版安装包在x64系统安装就会出现这个问题
- 覆盖安装时更改了安装目录，覆盖安装时不能更改安装目录，若想更改目录需将软件卸载再安装

解决方式：使用控制面板-卸载功能卸载应用，然后选对安装包安装一般即可解决。

#### 提示缺少`xxx.dll`

如果你使用的是免安装版（压缩包版），则需要将所有文件解压出来才能运行，否则将提示缺失`ffmpeg.dll`之类的问题。

如果你使用的是安装版出现这个提示，则可能是你电脑缺少某些dll导致的，正常的系统是没有这个问题的，可以尝试如下几个解决办法：

- 尝试重新安装软件
- 以管理员权限打开`cmd`，输入`sfc /scannow`回车等待检查完成重启电脑
- 若上面的方法**修复、重启**电脑后仍然不行，就自行百度弹出的**错误信息**看下别人是怎么解决的

### MAC OS无法启动软件，提示 lx-music-desktop 已损坏、无法打开“lx-music-desktop”，无法验证开发者

这是因为软件没有签名，被系统阻止运行

在终端里输入 `sudo xattr -rd com.apple.quarantine /Applications/lx-music-desktop.app`，然后输入你的电脑密码即可

还可以参考：

- <http://www.pc6.com/edu/168719.html>
- <https://blog.csdn.net/for641/article/details/104811538>