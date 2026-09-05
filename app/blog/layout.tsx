import type { Metadata } from 'next';
import BlogShell from './shell';
import './blog.css';
export const metadata: Metadata = { title: { default: 'Dumbo 的博客 · 记录探索的每一步', template: '%s · Dumbo 的博客' }, description: 'Dumbo 的建站记录、项目实践与学习笔记。' };
export default function Layout({children}: {children: React.ReactNode}) { return <BlogShell>{children}</BlogShell>; }
