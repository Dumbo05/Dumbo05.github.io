/* oxlint-disable next/no-img-element -- Static GitHub Pages assets use direct paths. */
import { notFound } from 'next/navigation';
import { posts, base, headings, postUrl } from '@/lib/blog';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
export function generateStaticParams(){return posts.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=posts.find(p=>p.slug===slug);return {title:p?.title,description:p?.description};}
function inline(text:string):ReactNode[]{return text.split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g).map((part,i)=>{
 const link=part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(link){const safe=/^(https?:\/\/|\/(?!\/)|#)/.test(link[2]);return safe?<a key={i} href={link[2].startsWith('/')?base+link[2]:link[2]}>{link[1]}</a>:link[1];}
 if(part.startsWith('`')&&part.endsWith('`'))return <code key={i}>{part.slice(1,-1)}</code>;
 if(part.startsWith('**')&&part.endsWith('**'))return <strong key={i}>{part.slice(2,-2)}</strong>;return part;
});}
function Markdown({body}:{body:string}){
 let heading=0;
 return body.split(/\n\s*\n/).map((block,i)=>{
  if(block.startsWith('```'))return <pre key={i}><code>{block.replace(/^```[^\n]*\n/,'').replace(/\n```$/,'')}</code></pre>;
  if(block.startsWith('## '))return <h2 id={`section-${heading++}`} key={i}>{block.slice(3)}</h2>;
  if(block.startsWith('- '))return <ul key={i}>{block.split('\n').map((line,j)=><li key={j}>{inline(line.replace(/^- /,''))}</li>)}</ul>;
  return <p key={i}>{inline(block)}</p>;
 });
}
export default async function Article({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const post=posts.find(p=>p.slug===slug);if(!post)notFound();
 return <><a className="b-back" href={`${base}/blog/`}>← 返回全部文章</a><header className="b-article-hero"><img src={`${base}${post.cover}`} alt=""/><div/><section><span>{post.category}</span><h1>{post.title}</h1><p>Dumbo · <time dateTime={post.date}>{post.date}</time> · 约 {Math.max(1,Math.ceil(post.body.length/400))} 分钟阅读</p></section></header>
 <div className="b-columns b-reading-columns"><article className="b-card b-article"><div className="b-article-lead">{post.description}</div><Markdown body={post.body}/><div className="b-article-bottom"><p>作者：Dumbo</p><p>本文链接：<a href={postUrl(post.slug)}>dumbo05.github.io/blog/{post.slug}/</a></p><span>{post.tags.map(t=>`#${t}`).join(' · ')}</span></div><a className="b-bottom-back" href={`${base}/blog/`}>← 回到博客，继续探索</a></article>
 <aside className="b-sidebar"><nav className="b-card b-toc" aria-label="文章目录"><small>ON THIS PAGE</small><h2>文章目录</h2>{headings(post.body).map((h,i)=><a key={h.id} href={`#${h.id}`}><span>{String(i+1).padStart(2,'0')}</span>{h.title}</a>)}</nav><div className="b-card b-note"><h3>慢慢读，也慢慢记。</h3><p>每一步积累，都有意义。</p></div></aside></div></>;
}
