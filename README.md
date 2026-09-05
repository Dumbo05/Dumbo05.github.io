# 个人作品与文档主页

一个适合部署到 GitHub Pages 的静态个人主页，包含作品展示、文档分类与搜索、个人介绍和深浅色切换。

## 本地运行

```bash
npm install
npm run dev
```

## 替换内容

- 个人信息与页面内容：`app/page.tsx`
- 主题颜色与版式：`app/globals.css`
- 页面标题与描述：`app/layout.tsx`

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库并上传此项目。
2. 在仓库的 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。
3. 推送到 `main` 分支，工作流会自动构建并发布。

配置同时兼容 `username.github.io` 用户主页仓库和普通项目仓库。

## 域名说明

- 不购买域名也能使用 GitHub 免费地址：`你的用户名.github.io` 或 `你的用户名.github.io/仓库名/`。
- 如果希望使用 `home.example.com`、`blog.example.com` 这样的地址，需要先拥有 `example.com`，再在域名服务商添加 CNAME 解析，并在仓库的 Pages 设置中填写自定义域名。
- 自定义域名只改变访问地址，网站仍然可以继续托管在 GitHub Pages。
