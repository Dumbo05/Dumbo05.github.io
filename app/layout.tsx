import type { Metadata } from 'next';
import { Noto_Sans_SC, Space_Grotesk } from 'next/font/google';
import './globals.css';

const sans = Noto_Sans_SC({ variable: '--font-sans-cn', subsets: ['latin'], weight: ['400', '500', '700', '900'] });
const display = Space_Grotesk({ variable: '--font-display', subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata: Metadata = { title: 'Dumbo — 作品与文档', description: 'Dumbo 的公开项目、技术文档与学习资料。' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
