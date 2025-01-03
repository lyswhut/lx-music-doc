---
id: list-multiple-selection
sidebar_position: 1.5
title: 列表多选
---


从 v0.18.0 起，列表多选需要键盘配合，想要多选前需按下 <kbd>Shift</kbd> 或 <kbd>Ctrl</kbd> 键然后再鼠标点击想要选中的内容即可触发多选机制，其中 <kbd>Shift</kbd> 键用于连续选择，<kbd>Ctrl</kbd> 键用于不连续选择。当列表获取焦点时，按 <kbd>Ctrl</kbd> + <kbd>A</kbd> 可以快速全选（注：若按了没效果则需要点一下列表区域使列表获取焦点）。

- 例子一：想要选中 1~5 项，则先按下 <kbd>Shift</kbd> 键后，鼠标点击第 1 项，再点击第 5 项即可完成选择；
- 例子二：想要选中第 1 项与第 3 项，则先按下 <kbd>Ctrl</kbd> 键后，鼠标点击第 1 项，再点击第 3 项即可完成选择；
- 例子三：想要选中当前列表的全部内容，键盘先按下 <kbd>Ctrl</kbd> 键不放，然后按 <kbd>A</kbd> 键，即可完成选择。

用 <kbd>Shift</kbd> 或 <kbd>Ctrl</kbd> 选择时，鼠标点击未选中的内容会将其选中，点击已选择的内容会将其取消选择，若想全部取消选择，在不按 <kbd>Shift</kbd> 或 <kbd>Alt</kbd> 键的情况下，随意点击列表里的一项内容即可全部取消选择。


:::tip
在 macOS 上 <kbd>Ctrl</kbd> 键对应 <kbd>Command</kbd> 键。
:::

:::tip
选完后可用鼠标右击弹出右键菜单操作已选的内容。
:::
