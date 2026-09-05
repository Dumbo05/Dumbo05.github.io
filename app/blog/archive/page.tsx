import type { Metadata } from 'next';
import {posts,postUrl} from '@/lib/blog';
import BlogSidebar from '../sidebar';
export const metadata: Metadata={title:'文章归档'};
export default function Archive(){return <div className="b-columns"><section className="b-card b-archive"><span className="b-overline">THE ARCHIVE</span><h1>写过的，都在这里。</h1><p>共 {posts.length} 篇文章。按时间，重走探索的路。</p>{[...new Set(posts.map(p=>p.date.slice(0,7)))].map(month=><section id={`month-${month}`} key={month}><h2>{month.replace('-',' 年 ')} 月</h2>{posts.filter(p=>p.date.startsWith(month)).map(p=><a className="b-archive-row" href={postUrl(p.slug)} key={p.slug}><time dateTime={p.date}>{p.date.slice(5)}</time><div><small>{p.category}</small><h3>{p.title}</h3><span>{p.tags.join(' / ')}</span></div><b>↗</b></a>)}</section>)}</section><BlogSidebar/></div>;}
