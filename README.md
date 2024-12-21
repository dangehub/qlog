# 我的obsidian数字花园仓库

相比于原仓库，我进行了如下改动：
- 增加了docker支持
- 增加了gisus评论系统

如果需要开启gisus评论系统，应该修改`src/site/_includes/components/user/notes/footer/001-comment.njk`文件，将其中的参数替换成自己的。

如果需要使用docker，但不想自己构建镜像，只需要使用本仓库的`docker-compose.yml`即可。

如果想自己在本地构建镜像，请把`Dockerfile`、`docker-compose-build.yml`与`.dockerignore`放到你的digital-garden目录下，使用命令`docker-compose up --build`来启动，不过这种方式在windows下可能会出现无法实时构建的问题，我也没找到原因。而在wsl中就不存在这个问题。

不足：依然依赖obsidian-digital-garden插件的转换，因此如果直接把obsidian的笔记放进来，可能会有部分内容无法被正确解析。

路线图：
- 修改digital-garden插件，使之可以把转换后的文件输出到本地


---
以下为原仓库说明
---

# Digital Obsidian Garden
This is the template to be used together with the [Digital Garden Obsidian Plugin](https://github.com/oleeskild/Obsidian-Digital-Garden). 
See the README in the plugin repo for information on how to set it up.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/oleeskild/digitalgarden)

---
## Docs
Docs are available at [dg-docs.ole.dev](https://dg-docs.ole.dev/)
