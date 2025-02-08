# 我的obsidian数字花园仓库：荒原往事

Vercel地址：[blog.qudange.top](blog.qudange.top)

Github pages地址：[dangehub.github.io](dangehub.github.io)

相比于原模板，我进行了**如下改动**：
- 增加了docker支持
- 增加了gisus评论系统
- 增加了github pages部署，脱离vercel等第三方服务的依赖

如果需要开启gisus评论系统，应该修改`src/site/_includes/components/user/notes/footer/001-comment.njk`文件，将其中的参数替换成自己的。

如果需要使用docker，但不想自己构建镜像，只需要使用本仓库的`docker-compose.yml`即可。但请确保notes目录下存在笔记，如果为空，容器启动后会报错。

如果想自己在本地构建镜像，请把`Dockerfile`、`docker-compose-build.yml`与`.dockerignore`放到你的digital-garden目录下，使用命令`docker-compose up --build`来启动，不过这种方式在windows下可能会出现无法实时构建的问题，我也没找到原因。而在wsl中就不存在这个问题。

如果需要使用github pages部署，则使用本仓库的`gh_pages`工作流

**不足**：依然依赖obsidian-digital-garden插件的转换，因此如果直接把obsidian的笔记放进来，可能会有部分内容无法被正确解析（比如dataview，但是可以通过dataview-publish插件提前渲染为静态来规避）

路线图：
- [ ] 修改digital-garden插件，使之允许把转换后的文件输出到本地


---
以下为原仓库说明
---

# Digital Obsidian Garden
This is the template to be used together with the [Digital Garden Obsidian Plugin](https://github.com/oleeskild/Obsidian-Digital-Garden). 
See the README in the plugin repo for information on how to set it up.

---
## Docs
Docs are available at [dg-docs.ole.dev](https://dg-docs.ole.dev/)
