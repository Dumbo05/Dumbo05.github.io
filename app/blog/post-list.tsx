'use client';
/* oxlint-disable next/no-img-element -- Static GitHub Pages assets use direct paths. */
import {useState} from 'react';
import { Search, ArrowUpRight, ArrowRight, AudioLines } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Post } from '@/lib/blog';
import BlogSidebar from './sidebar';
const base=process.env.NEXT_PUBLIC_BASE_PATH || '';
export default function BlogIndex({posts}:{posts:Post[]}){
 const [query,setQuery]=useState(''); const [category,setCategory]=useState('全部'); const [tag,setTag]=useState('');
 const result=posts.filter(p=>(category==='全部'||p.category===category)&&(!tag||p.tags.includes(tag))&&`${p.title} ${p.description} ${p.body}`.toLowerCase().includes(query.trim().toLowerCase()));
 const featured=posts[0];
 return <>
  <section className="b-feature-grid"><div className="b-welcome b-card"><span className="b-overline">DUMBO05 / JOURNAL</span><h1>记录，是为了<br/><span>更好地出发。</span></h1><p>关于代码、学习，和那些值得记住的小事。</p><a href="#articles">从最新文章开始 <ArrowRight size={18}/></a><div className="b-topic-strips"><span>CODE</span><span>LEARN</span><span>LIFE</span></div></div>
  {featured&&<a className="b-feature-cover" href={`${base}/blog/${featured.slug}/`}><img src={`${base}${featured.cover}`} alt="深蓝夜空下的湖泊与山峦"/><div className="b-cover-shade"/><span className="b-feature-badge">第一篇 · 从这里开始</span><div className="b-feature-caption"><small>{featured.category} / {featured.date}</small><h2>{featured.title}</h2><span>阅读全文 <ArrowUpRight size={20}/></span></div></a>}</section>
  <div className="b-announcement b-card"><AudioLines size={19}/><span>博客开张了。新的故事，就从这一页开始。</span><a href={`${base}/blog/archive/`} aria-label="查看文章归档"><ArrowRight size={18}/></a></div>
  <div className="b-columns"><section id="articles" className="b-feed"><div className="b-filter b-card"><Tabs value={category} onValueChange={setCategory}><TabsList>{['全部',...new Set(posts.map(p=>p.category))].map(c=><TabsTrigger key={c} value={c}>{c==='全部'?'首页':c}</TabsTrigger>)}</TabsList></Tabs><span className="b-total">{posts.length} 篇记录</span></div>
  <div className="b-search-row"><label htmlFor="blog-search"><Search size={18}/><Input id="blog-search" placeholder="搜索文章、关键词…" value={query} onChange={e=>setQuery(e.target.value)}/></label><a href={`${base}/blog/archive/`}>全部归档 ↗</a></div>
  <div className="b-tags" aria-label="按标签筛选">{[...new Set(posts.flatMap(p=>p.tags))].map(t=><button type="button" key={t} aria-pressed={tag===t} onClick={()=>setTag(tag===t?'':t)}># {t}</button>)}{tag&&<button type="button" onClick={()=>setTag('')}>清除筛选 ×</button>}</div>
  <div aria-live="polite">{result.map(p=><article className="b-post-card b-card" key={p.slug}><a className="b-post-image" href={`${base}/blog/${p.slug}/`} tabIndex={-1} aria-hidden="true"><img src={`${base}${p.cover}`} alt="" loading="lazy"/></a><div className="b-post-summary"><span className="b-post-category">{p.category}</span><h2><a href={`${base}/blog/${p.slug}/`}>{p.title}</a></h2><p>{p.description}</p><div><time dateTime={p.date}>{p.date}</time><a href={`${base}/blog/${p.slug}/`}>阅读全文 <ArrowRight size={16}/></a></div></div></article>)}{!result.length&&<div className="b-empty b-card"><h2>还没有匹配的文章</h2><p>试试其他关键词，或清除筛选。</p><button type="button" onClick={()=>{setQuery('');setTag('');setCategory('全部');}}>显示全部文章</button></div>}</div>
  <div className="b-end"><span/>暂时写到这里，下一篇见<span/></div></section><BlogSidebar/></div>
 </>;
}
