'use client';
/* oxlint-disable next/no-img-element -- Static GitHub Pages assets use direct paths. */
import { useState } from 'react';
import { ArrowUpRight, Moon, Sun, BookOpen } from 'lucide-react';
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
export default function BlogShell({children}: {children: React.ReactNode}) {
  const [dark, setDark] = useState(false);
  return <div className={`blog-site${dark ? ' blog-night' : ''}`}>
    <a className="b-skip" href="#blog-main">跳到内容</a>
    <header className="b-header"><a className="b-brand" href={`${base}/blog/`}><img src={`${base}/avatar.jpg`} width="34" height="34" alt=""/>Dumbo<span>的博客</span></a><nav aria-label="博客导航"><a href={`${base}/blog/`}>文章</a><a href={`${base}/blog/archive/`}>归档</a><a href={`${base}/`}>个人主页 <ArrowUpRight size={14}/></a></nav><button type="button" aria-label={dark ? '切换浅色模式' : '切换深色模式'} onClick={()=>setDark(!dark)}>{dark ? <Sun size={20}/> : <Moon size={20}/>}</button></header>
    <main id="blog-main" className="b-container">{children}</main>
    <footer className="b-footer"><span>© 2026 Dumbo · 把探索写成记录</span><a href={`${base}/blog/`}><BookOpen size={15}/> 博客</a><a href="https://github.com/Dumbo05/Dumbo05.github.io">GitHub ↗</a></footer>
  </div>;
}
