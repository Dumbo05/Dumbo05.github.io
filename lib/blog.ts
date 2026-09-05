/// <reference types="vite/client" />
export type Post = { slug: string; title: string; date: string; category: string; tags: string[]; description: string; cover: string; body: string };
const files = import.meta.glob('../content/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
export const posts: Post[] = Object.entries(files).map(([file, text]) => {
  const match = text.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Invalid post header: ${file}`);
  const fields = Object.fromEntries(match[1].split('\n').map(line => { const i = line.indexOf(':'); return [line.slice(0, i).trim(), line.slice(i + 1).trim()]; }));
  for (const key of ['title', 'date', 'category', 'description', 'cover']) if (!fields[key]) throw new Error(`Missing ${key}: ${file}`);
  return { slug: file.split('/').pop()!.replace(/\.md$/, ''), title: fields.title, date: fields.date, category: fields.category, tags: (fields.tags || '').split(',').map(t => t.trim()).filter(Boolean), description: fields.description, cover: fields.cover, body: match[2].trim() };
}).sort((a,b) => b.date.localeCompare(a.date));
export const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const postUrl = (slug: string) => `${base}/blog/${slug}/`;
export const headings = (body: string) => body.split('\n').filter(line => line.startsWith('## ')).map((line, i) => ({ id: `section-${i}`, title: line.slice(3) }));
