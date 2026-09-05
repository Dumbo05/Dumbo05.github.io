# 写博客

文章位于 content/posts/，每篇是一个 Markdown 文件。文件名使用英文或数字与短横线，例如 my-first-project.md；它将对应 /blog/my-first-project/。

复制 hello-blog.md 的头部作为模板：title 标题、date 日期（YYYY-MM-DD）、category 分类、tags 英文逗号分隔的标签、description 摘要、cover 本地封面图片路径。封面放入 public/。

正文支持段落、二级标题（##）、无序列表、独立的围栏代码块、链接、行内代码及加粗。不执行原始 HTML。每个标题、段落和代码块之间留一个空行；文章目录从二级标题生成。

添加文章后运行 npm run build。首页列表、搜索、标签、归档与文章独立页面都会在构建时更新，构建脚本也会自动准备 `/blog/` 形式的 GitHub Pages 路径。将 dist/client 同步到 gh-pages 分支后上线；仅提交 main 不会自动发布。具体部署方法见 DEPLOYMENT.md。

博客首页 /blog/；归档 /blog/archive/。个人主页已接入博客入口。首篇文章为本站建站记录，其他文章可按实际内容持续添加。
