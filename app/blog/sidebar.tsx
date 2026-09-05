/* oxlint-disable next/no-img-element -- Static GitHub Pages assets use direct paths. */
import { base, posts } from '@/lib/blog';
export default function BlogSidebar(){ return <aside className="b-sidebar">
  <section className="b-author"><div className="b-author-top">HELLO, FRIEND.</div><img src={`${base}/avatar.jpg`} alt="Dumbo05 的山峰头像" width="86" height="86"/><h2>Dumbo05</h2><p>在代码里探索，<br/>在文字里留下足迹。</p><div className="b-counts"><a href={`${base}/blog/`}><strong>{posts.length}</strong>文章</a><a href={`${base}/blog/archive/`}><strong>{new Set(posts.map(p=>p.category)).size}</strong>分类</a><a href={`${base}/blog/archive/`}><strong>{new Set(posts.flatMap(p=>p.tags)).size}</strong>标签</a></div><a className="b-author-link" href="https://github.com/Dumbo05">在 GitHub 找到我 ↗</a></section>
  <section className="b-card b-note"><h3>✦ 关于这里</h3><p>收录建站记录、项目实践和学习笔记。愿每一次探索，都有迹可循。</p><a href={`${base}/`}>逛逛我的个人主页 →</a></section>
  <section className="b-card b-note"><h3>文章归档</h3>{[...new Set(posts.map(p=>p.date.slice(0,7)))].map(month=><a className="b-archive-link" key={month} href={`${base}/blog/archive/#month-${month}`}><span>{month.replace('-', ' 年 ')} 月</span><b>{posts.filter(p=>p.date.startsWith(month)).length}</b></a>)}</section>
  <div className="b-side-sign">保持好奇，慢慢生长。<span>KEEP EXPLORING.</span></div>
 </aside>; }
