---
{"title":"Obsidian轻量级PPT教程，如何快速展示你的笔记","date":"2025-01-04","lastmod":"2025-01-04","creation date":"2025-01-04 14:28","modification date":"星期六 2025 一月4日 14:28:39","categories":null,"tags":["obsidian","PPT技巧"],"alases":null,"dg-publish":true,"dg-path":"Obsidian/Obsidian轻量级PPT教程，如何快速展示你的笔记-发布版.md","permalink":"/Obsidian/Obsidian轻量级PPT教程，如何快速展示你的笔记-发布版/","dgPassFrontmatter":true,"noteIcon":""}
---

# 前言

不管是学习还是工作中，我们都有展示内容的需求，一般我们会采用幻灯片（后文中简称PPT）来展示。PPT相比与传统的文稿相比，能把图文组合排列，让信息更直观的传达，同时还能辅以动画来引导观众视线，降低主持人的演讲压力。

随着我们在obsidian（后文中简称ob）笔记系统的深耕，在ob中制作PPT变成了一个自然而然的需求，本文将介绍几种常见的在ob中制作PPT的方式，包括了ob自带的幻灯片与白板核心插件，以及第三方插件slides extend、advanced canvas与excalidraw。当然你应该知晓：ob的PPT能力不可能比专业的PPT软件好用，因此你需要认识其局限性，结合自己的需求与其能力上限来开展后续工作，闲话少说，让我们开始吧。

# 核心插件：幻灯片

## 相关资料

- 官方文档：[幻灯片 - Obsidian 中文帮助 - Obsidian Publish](https://publish.obsidian.md/help-zh/%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%B9%BB%E7%81%AF%E7%89%87)

## 使用教程

ob原生提供了一个核心插件，当你开启此插件后，可以在任何一个文件上右键选择`开始演示`或者按`ctrl`+`p`输入`幻灯片：开始演示`开启幻灯片模式。


此模式下，被打开的文档会被当作一个PPT播放，使用三个短横线`---`作为翻页符来拆分文档，通过左右箭头来控制PPT的翻页。

## 优点/推荐使用场景

- 兼容ob的所有语法

- 快速展示已有笔记，在对原笔记修改程度最轻的基础上，快速的把一篇笔记转换成一个PPT。

## 缺点/局限性分析

- 功能过于简陋，缺少动画等功能
- 当单页PPT内容过多时，多余的内容只会被截断，无法滚动播放。

# 第三方插件：slides extend

## 相关资料

- 项目开源地址：[ebullient/obsidian-slides-extended: Create markdown-based reveal.js presentations in Obsidian](https://github.com/ebullient/obsidian-slides-extended)
- 项目文档：见GitHub仓库的`docs`目录（ps：readme里也不放一下链接）
- 此插件由reveal.js驱动，因此可以参考reveal.js的文档：[The HTML presentation framework | reveal.js](https://revealjs.com/)
- ps：这个项目是继承自`advanced slides`插件，原插件作者表示做插件赚不到钱，在营收方式上和ob官方有矛盾，导致他决定停止发布插件的后续更新。

## 使用教程

- 基本的操作逻辑与核心插件幻灯片一致，`---`作为分页符
- 支持动画，参考文档：[自动动画 | Reveal.js --- Auto-Animate | reveal.js](https://revealjs.com/auto-animate/)
- 支持excalidraw


其中为了支持excalidraw嵌入，需要让excalidraw自动生成对应的图片，下面设置二选一：
1. 打开【嵌入到Markdown文档中的绘图】— 【导出】— 【导出设置】— 【自动导出SVG副本】或【自动导出PNG副本】
2. 把excalidraw文件以md视图打开（编辑器右上角三个点或者命令搜索”excalidraw 切换“），手动添加frontmatter  `excalidraw-autoexport:svg` （值也可以设置为png/both）这种方法只会让设置后的文件自动生成对应图片，并且在excalidraw文件被编辑后自动修改对应图片

## 优点/推荐使用场景

- 纯代码编辑与笔记一脉相承，可以很快的把笔记转换成PPT
- 纯代码编辑意味着很容易做自动化，如果你有固定格式的笔记（如日记），可以自行设计PPT模板，能自动化制作一系列PPT
- 因为插件会在一个端口上运行一个web服务器，因此可以在局域网内做PPT演示，在内网工作时有奇效

## 缺点/局限性分析

- 缺少可视化操作，不直观，让非专业用户望而生畏
- 纯代码编辑可能因为一个错误的字母而失效，增加了犯错的可能性

# 核心插件：白板+第三方插件advanced canvas

因为官方自带的白板本身是不具备展示功能的，因此我们需要通过advanced canvas插件来拓展。

这种方式更适合笔记本身就是以白板方式保存的场景，此外白板也特别适合头脑风暴，碎片知识整理，配合这个方法可以厘清分散的思路。

## 相关资料

- 白板的官方文档：[白板 - Obsidian 中文帮助 - Obsidian Publish](https://publish.obsidian.md/help-zh/%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E7%99%BD%E6%9D%BF)
- advanced canvas 项目开源地址：[Developer-Mike/obsidian-advanced-canvas: ⚡ Supercharge your Obsidian.md canvas experience! Create presentations, flowcharts and more!](https://github.com/Developer-Mike/obsidian-advanced-canvas)

## 使用教程

安装好advanced canvas插件，无需任何配置，在ob里新建一个白板文件，然后在正下方能看到在原有白板的基础上多出来两个按钮，点击或拖拽`Drag to add slide`按钮即可新增PPT分页区域。

每一个区域就是一页PPT，第一次创建的PPT分页就是整个PPT的封面，右上角有一个`start`标识。

![assets/Pasted image 20250101134306.png](/img/user/105-%E6%9E%81%E5%AE%A2/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7/obsidian%E5%81%9Appt/assets/Pasted%20image%2020250101134306.png)

在创建了PPT分页后，按`ctrl`+`p`输入命令`Advanced Canvas:Start presentation`即可开始PPT展示。

这种方式制作的PPT的展示顺序由PPT分页的箭头控制，如果只是添加了多个分页，但是没有使用箭头将PPT分页连接起来，播放时则只展示start分页。

可以通过箭头实现PPT的复杂跳转逻辑，比如1-->2-->3-->2-->4-->5，但需要注意，start分页只能连接一个后续节点，如果连接多个，则只有第一个连接的分页会被识别。

## 优点/推荐使用场景

- 因为基于ob自带的白板功能，所以对ob的支持更好，还可以内嵌ob笔记
- 白板的书写过程本身就包含了排版，因此转换成PPT所需工作量更小
- 基于箭头的PPT分页跳转控制，可以很轻松的制作来回跳转的PPT。

## 缺点/局限性分析

- 如果原文档是文字笔记，还需要把文字转换成白板，付出精力过多时不如直接使用powerpoint。
- 无法实现更多的动画效果，只能在PPT分页中切换。

# 第三方插件：excalidraw

## 相关资料

- 项目开源地址：[zsviczian/obsidian-excalidraw-plugin: A plugin to edit and view Excalidraw drawings in Obsidian](https://github.com/zsviczian/obsidian-excalidraw-plugin)
- 项目文档：[欢迎 - Excalidraw --- Welcome - Excalidraw](https://excalidraw-obsidian.online/Welcome) （建设中）
- （强烈推荐）[PKMer_Excalidraw 脚本：Slideshow 完美实现画板幻灯片演示的脚本](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/excalidraw/excalidraw%E8%84%9A%E6%9C%AC-slideshow%E5%AE%8C%E7%BE%8E%E5%AE%9E%E7%8E%B0%E7%94%BB%E6%9D%BF%E5%B9%BB%E7%81%AF%E7%89%87%E6%BC%94%E7%A4%BA%E7%9A%84%E8%84%9A%E6%9C%AC/)

## 使用教程

具体教程见pkmer文章：[PKMer_Excalidraw 脚本：Slideshow 完美实现画板幻灯片演示的脚本](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/excalidraw/excalidraw%E8%84%9A%E6%9C%AC-slideshow%E5%AE%8C%E7%BE%8E%E5%AE%9E%E7%8E%B0%E7%94%BB%E6%9D%BF%E5%B9%BB%E7%81%AF%E7%89%87%E6%BC%94%E7%A4%BA%E7%9A%84%E8%84%9A%E6%9C%AC/)，本文只做简单说明。

需要先在excalidraw的脚本库中安装`slideshow`脚本，然后可以通过箭头和frames的编号来控制幻灯片顺序。

## 优点/推荐使用场景

- excalidraw 有着ob里最强的画图能力，用它来做PPT，内容丰富的上限极高
- frame编号和箭头这两种方式来控制PPT的镜头运动，兼顾了简单出图与复杂运动轨迹的需求

## 缺点/局限性分析

- excalidraw 相对重量级，对设备性能要求更高
- 同白板一样，都需要根据文字内容再创作，不能直接转换

# 后话

为什么执着于用obsidian做PPT呢？因为之前工作电脑性能孱弱，加之保密单位无法连接外网，用老旧的office做一个精致的PPT也很困难，相比之下性冷淡的obsidian简洁PPT反而更符合理工科的口味。加上我日常也用obsidian写工作笔记，用obsidian做PPT简直顺理成章。

然后我开始探索用obsidian做PPT的方法，那个时候还是在b站up`johnny学`那里了解到了advanced slides插件，结果时过境迁，as插件作者都停更了（这里也挺唏嘘的，做开源确实是一条正反馈早逝的道路…）。

此外，我还是想强调一下：用obsidian做PPT不是要适可而止，不要为了做而做，而是真正去满足你的需求。想要用它做出很好看的PPT也并非不可能，但是需要付出远超使用专业软件的精力，君子不器，强求all in one不是正道。

当然如果只是”玩“或者”炫技“，当我没说，这个世界需要更多”没意义“的探索，上面的建议只针对把obsidian当作生产力工具的人。

最后，love and peace.