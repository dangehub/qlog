---
{"title":"README","date":"2024-09-07","lastmod":"2024-09-08","creation date":"2024-09-07 09:34","modification date":"星期日 2024 九月8日 16:24:45","tags":["gardenEntry"],"categories":null,"alases":null,"dg-publish":true,"dg-home":true,"permalink":"/README/","dgPassFrontmatter":true,"noteIcon":""}
---

# 中文版说明

这是obsidian-digital-garden插件自托管库的一种不完美实现

相比于原仓库，我进行了如下改动：
- 增加了docker支持
- 增加了gisus评论系统

如果需要开启gisus评论系统，应该修改`src/site/_includes/components/user/notes/footer/001-comment.njk`文件，将其中的参数替换成自己的。

如果需要使用docker，但不想自己构建镜像，只需要使用本仓库的`docker-compose.yml`即可。但请确保notes目录下存在笔记，如果为空，容器启动后会报错。

如果想自己在本地构建镜像，请把`Dockerfile`、`docker-compose-build.yml`与`.dockerignore`放到你的digital-garden目录下，使用命令`docker-compose up --build`来启动，不过这种方式在windows下可能会出现无法实时构建的问题，我也没找到原因。而在wsl中就不存在这个问题。

不足：依然依赖obsidian-digital-garden插件的转换，因此如果直接把obsidian的笔记放进来，可能会有部分内容无法被正确解析。

路线图：
- 修改digital-garden插件，使之可以把转换后的文件输出到本地


# README

This is an imperfect implementation of a self-hosted library for the obsidian-digital-garden plugin

Compared to the original repository, I have made the following changes:
- Added Docker support
- Added gisus comment system

If you need to enable the gisus comment system, you should modify the `src/site/_includes/components/user/notes/footer/001-comment.njk` file, replacing the parameters with your own.

If you want to use Docker but do not want to build the image yourself, you can simply use the `docker-compose.yml` file in this repository. However, please ensure that the `notes` directory contains your notes; if it is empty, the container will throw an error upon startup.

If you want to build the image locally, place the `Dockerfile`, `docker-compose-build.yml`, and `.dockerignore` files in your digital-garden directory and use the command `docker-compose up --build` to start. However, this method may have issues with real-time building on Windows, and I have not found the reason. This issue does not occur in WSL.

Limitations: It still depends on the conversion by the obsidian-digital-garden plugin, so if you directly place Obsidian notes in the directory, some content may not be parsed correctly.

Roadmap:
- Modify the digital-garden plugin to output the converted files to a local directory