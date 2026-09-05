# Dumbo05 GitHub Pages

线上地址：https://dumbo05.github.io/

main 分支保存源码，gh-pages 分支保存构建后的公开静态文件。Pages 使用 gh-pages 分支根目录发布，无需购买域名。

本地运行：`npm ci`，然后 `npm run dev`。

更新发布：运行 `npm run build`，将 `dist/client` 的内容（包括 `.nojekyll` 和 `_next`）提交到 gh-pages 分支即可。不要提交 node_modules、环境变量或 .wrangler 本地状态。

GitHub Actions 工作流示例保存在 deploy-workflow.example.yml；当前登录凭据没有 workflow 权限，因此本次使用分支发布，不需要扩大账号授权。

贡献图是 2026-09-05 的 GitHub 数据快照，不会自动刷新。项目卡片中已区分个人仓库和 Fork 收藏。编辑 app/page.tsx 可更新作品和文档链接。
