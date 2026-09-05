import{r as e}from"./rolldown-runtime-C60lm6uB.js";import{i as t,r as n}from"./framework-D_rUT4EX.js";import{n as r,t as i}from"./arrow-up-right-DfUTWv9e.js";import{a,i as o,n as s,r as c,t as l}from"./tabs-w8GAaSXO.js";var u=r(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),d=r(`audio-lines`,[[`path`,{d:`M2 10v3`,key:`1fnikh`}],[`path`,{d:`M6 6v11`,key:`11sgs0`}],[`path`,{d:`M10 3v18`,key:`yhl04a`}],[`path`,{d:`M14 8v7`,key:`3a1oy3`}],[`path`,{d:`M18 5v13`,key:`123xd1`}],[`path`,{d:`M22 10v3`,key:`154ddg`}]]),f=e(t(),1),p=Object.entries(Object.assign({"../content/posts/hello-blog.md":`---
title: 从个人主页出发，给记录一个地方
date: 2026-09-05
category: 建站笔记
tags: GitHub Pages, 个人网站, 记录
description: 作品有了展示的地方，文字也该有自己的空间。这是 Dumbo05 博客的第一篇建站记录。
cover: /night-landscape.png
---

这里是 Dumbo05 的博客。个人主页负责展示项目与资料，博客则用来留下可以慢慢阅读的文字。这篇文章记录本站的起点，也介绍如何找到这里的内容。

## 先把网站搭起来

主页和博客都放在同一个 GitHub Pages 站点里。主页使用深色夜景与毛玻璃卡片；博客换成更适合长时间阅读的浅色界面，同时保留相同的头像和蓝色调。

不必等到所有内容都准备好才开始。先让网站能访问，让文章有自己的链接，再一点点整理项目说明与学习笔记。

## 从哪里开始阅读

- 个人主页：浏览公开项目、Fork 收藏和文档入口。
- 博客首页：查看新文章，也可以搜索标题、摘要和正文。
- 归档：按时间回看已经发布的文章。
- 文章目录：直接跳到想读的小节。

目前的项目入口来自 [Dumbo05 的 GitHub 仓库](https://github.com/Dumbo05)。Fork 收藏会注明性质，方便区分个人项目与收集的开源资料。

## 网站是怎样发布的

本站使用 GitHub 提供的默认域名。主页位于根路径，博客位于 \`/blog/\`，不需要另行购买域名。

源码保存在 \`main\` 分支，构建生成的 HTML、CSS、JavaScript 和图片放在 \`gh-pages\` 分支。GitHub Pages 负责把这些静态文件发布到线上。

\`\`\`bash
npm ci
npm run build
\`\`\`

写好的 Markdown 文章会在构建时生成独立页面，因此文章链接可以直接打开和分享。网站当前没有评论后台；搜索在浏览器内完成。

## 接下来慢慢填满

把一次解决问题的过程写下来，把一份有帮助的资料整理好，把一个项目的来龙去脉说清楚。这里不追求一下子收录很多内容，而是留一个可以持续更新的地方。

欢迎从 [个人主页](/) 或 [文章归档](/blog/archive/) 继续浏览。
`})).map(([e,t])=>{let n=t.replace(/\r\n/g,`
`).match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!n)throw Error(`Invalid post header: ${e}`);let r=Object.fromEntries(n[1].split(`
`).map(e=>{let t=e.indexOf(`:`);return[e.slice(0,t).trim(),e.slice(t+1).trim()]}));for(let t of[`title`,`date`,`category`,`description`,`cover`])if(!r[t])throw Error(`Missing ${t}: ${e}`);return{slug:e.split(`/`).pop().replace(/\.md$/,``),title:r.title,date:r.date,category:r.category,tags:(r.tags||``).split(`,`).map(e=>e.trim()).filter(Boolean),description:r.description,cover:r.cover,body:n[2].trim()}}).sort((e,t)=>t.date.localeCompare(e.date)),m={}.NEXT_PUBLIC_BASE_PATH||``,h=n();function g(){return(0,h.jsxs)(`aside`,{className:`b-sidebar`,children:[(0,h.jsxs)(`section`,{className:`b-author`,children:[(0,h.jsx)(`div`,{className:`b-author-top`,children:`HELLO, FRIEND.`}),(0,h.jsx)(`img`,{src:`${m}/avatar.jpg`,alt:`Dumbo05 的山峰头像`,width:`86`,height:`86`}),(0,h.jsx)(`h2`,{children:`Dumbo05`}),(0,h.jsxs)(`p`,{children:[`在代码里探索，`,(0,h.jsx)(`br`,{}),`在文字里留下足迹。`]}),(0,h.jsxs)(`div`,{className:`b-counts`,children:[(0,h.jsxs)(`a`,{href:`${m}/blog/`,children:[(0,h.jsx)(`strong`,{children:p.length}),`文章`]}),(0,h.jsxs)(`a`,{href:`${m}/blog/archive/`,children:[(0,h.jsx)(`strong`,{children:new Set(p.map(e=>e.category)).size}),`分类`]}),(0,h.jsxs)(`a`,{href:`${m}/blog/archive/`,children:[(0,h.jsx)(`strong`,{children:new Set(p.flatMap(e=>e.tags)).size}),`标签`]})]}),(0,h.jsx)(`a`,{className:`b-author-link`,href:`https://github.com/Dumbo05`,children:`在 GitHub 找到我 ↗`})]}),(0,h.jsxs)(`section`,{className:`b-card b-note`,children:[(0,h.jsx)(`h3`,{children:`✦ 关于这里`}),(0,h.jsx)(`p`,{children:`收录建站记录、项目实践和学习笔记。愿每一次探索，都有迹可循。`}),(0,h.jsx)(`a`,{href:`${m}/`,children:`逛逛我的个人主页 →`})]}),(0,h.jsxs)(`section`,{className:`b-card b-note`,children:[(0,h.jsx)(`h3`,{children:`文章归档`}),[...new Set(p.map(e=>e.date.slice(0,7)))].map(e=>(0,h.jsxs)(`a`,{className:`b-archive-link`,href:`${m}/blog/archive/#month-${e}`,children:[(0,h.jsxs)(`span`,{children:[e.replace(`-`,` 年 `),` 月`]}),(0,h.jsx)(`b`,{children:p.filter(t=>t.date.startsWith(e)).length})]},e))]}),(0,h.jsxs)(`div`,{className:`b-side-sign`,children:[`保持好奇，慢慢生长。`,(0,h.jsx)(`span`,{children:`KEEP EXPLORING.`})]})]})}var _={}.NEXT_PUBLIC_BASE_PATH||``;function v({posts:e}){let[t,n]=(0,f.useState)(``),[r,p]=(0,f.useState)(`全部`),[m,v]=(0,f.useState)(``),y=e.filter(e=>(r===`全部`||e.category===r)&&(!m||e.tags.includes(m))&&`${e.title} ${e.description} ${e.body}`.toLowerCase().includes(t.trim().toLowerCase())),b=e[0];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`section`,{className:`b-feature-grid`,children:[(0,h.jsxs)(`div`,{className:`b-welcome b-card`,children:[(0,h.jsx)(`span`,{className:`b-overline`,children:`DUMBO05 / JOURNAL`}),(0,h.jsxs)(`h1`,{children:[`记录，是为了`,(0,h.jsx)(`br`,{}),(0,h.jsx)(`span`,{children:`更好地出发。`})]}),(0,h.jsx)(`p`,{children:`关于代码、学习，和那些值得记住的小事。`}),(0,h.jsxs)(`a`,{href:`#articles`,children:[`从最新文章开始 `,(0,h.jsx)(u,{size:18})]}),(0,h.jsxs)(`div`,{className:`b-topic-strips`,children:[(0,h.jsx)(`span`,{children:`CODE`}),(0,h.jsx)(`span`,{children:`LEARN`}),(0,h.jsx)(`span`,{children:`LIFE`})]})]}),b&&(0,h.jsxs)(`a`,{className:`b-feature-cover`,href:`${_}/blog/${b.slug}/`,children:[(0,h.jsx)(`img`,{src:`${_}${b.cover}`,alt:`深蓝夜空下的湖泊与山峦`}),(0,h.jsx)(`div`,{className:`b-cover-shade`}),(0,h.jsx)(`span`,{className:`b-feature-badge`,children:`第一篇 · 从这里开始`}),(0,h.jsxs)(`div`,{className:`b-feature-caption`,children:[(0,h.jsxs)(`small`,{children:[b.category,` / `,b.date]}),(0,h.jsx)(`h2`,{children:b.title}),(0,h.jsxs)(`span`,{children:[`阅读全文 `,(0,h.jsx)(i,{size:20})]})]})]})]}),(0,h.jsxs)(`div`,{className:`b-announcement b-card`,children:[(0,h.jsx)(d,{size:19}),(0,h.jsx)(`span`,{children:`博客开张了。新的故事，就从这一页开始。`}),(0,h.jsx)(`a`,{href:`${_}/blog/archive/`,"aria-label":`查看文章归档`,children:(0,h.jsx)(u,{size:18})})]}),(0,h.jsxs)(`div`,{className:`b-columns`,children:[(0,h.jsxs)(`section`,{id:`articles`,className:`b-feed`,children:[(0,h.jsxs)(`div`,{className:`b-filter b-card`,children:[(0,h.jsx)(l,{value:r,onValueChange:p,children:(0,h.jsx)(s,{children:[`全部`,...new Set(e.map(e=>e.category))].map(e=>(0,h.jsx)(c,{value:e,children:e===`全部`?`首页`:e},e))})}),(0,h.jsxs)(`span`,{className:`b-total`,children:[e.length,` 篇记录`]})]}),(0,h.jsxs)(`div`,{className:`b-search-row`,children:[(0,h.jsxs)(`label`,{htmlFor:`blog-search`,children:[(0,h.jsx)(a,{size:18}),(0,h.jsx)(o,{id:`blog-search`,placeholder:`搜索文章、关键词…`,value:t,onChange:e=>n(e.target.value)})]}),(0,h.jsx)(`a`,{href:`${_}/blog/archive/`,children:`全部归档 ↗`})]}),(0,h.jsxs)(`div`,{className:`b-tags`,"aria-label":`按标签筛选`,children:[[...new Set(e.flatMap(e=>e.tags))].map(e=>(0,h.jsxs)(`button`,{type:`button`,"aria-pressed":m===e,onClick:()=>v(m===e?``:e),children:[`# `,e]},e)),m&&(0,h.jsx)(`button`,{type:`button`,onClick:()=>v(``),children:`清除筛选 ×`})]}),(0,h.jsxs)(`div`,{"aria-live":`polite`,children:[y.map(e=>(0,h.jsxs)(`article`,{className:`b-post-card b-card`,children:[(0,h.jsx)(`a`,{className:`b-post-image`,href:`${_}/blog/${e.slug}/`,tabIndex:-1,"aria-hidden":`true`,children:(0,h.jsx)(`img`,{src:`${_}${e.cover}`,alt:``,loading:`lazy`})}),(0,h.jsxs)(`div`,{className:`b-post-summary`,children:[(0,h.jsx)(`span`,{className:`b-post-category`,children:e.category}),(0,h.jsx)(`h2`,{children:(0,h.jsx)(`a`,{href:`${_}/blog/${e.slug}/`,children:e.title})}),(0,h.jsx)(`p`,{children:e.description}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`time`,{dateTime:e.date,children:e.date}),(0,h.jsxs)(`a`,{href:`${_}/blog/${e.slug}/`,children:[`阅读全文 `,(0,h.jsx)(u,{size:16})]})]})]})]},e.slug)),!y.length&&(0,h.jsxs)(`div`,{className:`b-empty b-card`,children:[(0,h.jsx)(`h2`,{children:`还没有匹配的文章`}),(0,h.jsx)(`p`,{children:`试试其他关键词，或清除筛选。`}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>{n(``),v(``),p(`全部`)},children:`显示全部文章`})]})]}),(0,h.jsxs)(`div`,{className:`b-end`,children:[(0,h.jsx)(`span`,{}),`暂时写到这里，下一篇见`,(0,h.jsx)(`span`,{})]})]}),(0,h.jsx)(g,{})]})]})}export{v as default};