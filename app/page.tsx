'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  FileText,
  GitBranch,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.88c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function WeChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.4 5.2c-4 0-7.2 2.5-7.2 5.8 0 1.8 1 3.4 2.7 4.5l-.7 2.2 2.6-1.3c.8.2 1.7.4 2.6.4h.5a5.4 5.4 0 0 1-.3-1.8c0-3.3 3-6 6.8-6h.5c-1-2.2-3.9-3.8-7.5-3.8Z" fill="currentColor" />
      <path d="M21.8 15c0-2.6-2.6-4.7-5.7-4.7s-5.7 2.1-5.7 4.7 2.6 4.7 5.7 4.7c.7 0 1.4-.1 2.1-.3l2.1 1.1-.5-1.8c1.2-.9 2-2.2 2-3.7Z" fill="currentColor" />
      <circle cx="7" cy="9.9" r=".8" fill="currentColor" />
      <circle cx="11.6" cy="9.9" r=".8" fill="currentColor" />
      <circle cx="14.1" cy="14.2" r=".7" fill="#fff" />
      <circle cx="18.1" cy="14.2" r=".7" fill="#fff" />
    </svg>
  );
}
const activeDays: Record<number, number> = {10:2,28:1,48:1,293:5,294:2,366:2,369:1};
const contributionLevels = Array.from({length:371}, (_, i) => Math.min(activeDays[i] || 0, 4));

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <main
      className={`page-frame ${darkMode ? 'dark-mode' : 'light-mode'}`}
      id="top"
      style={{
        backgroundImage: `${darkMode ? 'linear-gradient(rgba(3,10,22,.28), rgba(3,10,22,.72))' : 'linear-gradient(rgba(225,241,255,.48), rgba(229,243,255,.78))'}, url('${basePath}/night-landscape.png')`,
      }}
    >
      <header className="mobile-bar">
        <a href="#top" className="mini-brand">
          <span>D</span> Dumbo&apos;s Space
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="切换菜单"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className="dashboard">
        <aside
          className={
            menuOpen ? 'profile-panel glass mobile-open' : 'profile-panel glass'
          }
        >
          <div className="profile-head">
            <div className="avatar-wrap">
              <img
                className="avatar"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/avatar.jpg`}
                alt="Dumbo 的头像：站在山峰上的人物"
                width={118}
                height={118}
                style={{ objectFit: 'cover' }}
              />
              <span className="orbit one">✦</span>
              <span className="orbit two">⌁</span>
              <span className="online-dot" />
            </div>
            <h1>Dumbo</h1>
            <p className="role">LOVE & PACE</p>
            <p className="bio">
              探索代码与知识的更多可能。
            </p>
            <div className="social-row">
              <a href="https://github.com/Dumbo05" aria-label="GitHub 主页" title="GitHub 主页">
                <GitHubIcon />
              </a>
              <a href="mailto:dumboz0217@gmail.com" aria-label="发送邮件" title="发送邮件">
                <Mail />
              </a>
              <Dialog>
                <DialogTrigger
                  render={<button type="button" aria-label="添加微信" title="添加微信" />}
                >
                  <WeChatIcon />
                </DialogTrigger>
                <DialogContent className={darkMode ? 'wechat-dialog' : 'wechat-dialog wechat-dialog-light'}>
                  <DialogTitle>添加我的微信</DialogTitle>
                  <DialogDescription>使用微信扫描二维码，添加我为好友。</DialogDescription>
                  <img
                    src={`${basePath}/wechat-qr.jpg`}
                    alt="Dumbo 的微信二维码"
                    width={900}
                    height={1131}
                  />
                </DialogContent>
              </Dialog>
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                aria-label={darkMode ? '切换到明亮模式' : '切换到黑色模式'}
                title={darkMode ? '切换到明亮模式' : '切换到黑色模式'}
              >
                {darkMode ? <Sun /> : <Moon />}
              </button>
            </div>
            <div className="profile-meta">
              <span>
                <MapPin /> China-XingTai
              </span>
            </div>
          </div>

              <div className="side-block">
                <p className="block-label">正在关注</p>
                <div className="tag-cloud">
                  <span>Agent 开发</span>
                  <span>LLM</span>
                  <span>RAG</span>
                  <span>LangChain</span>
                  <span>嵌入式</span>
                </div>
              </div>

          <div className="side-block">
            <p className="block-label">近况</p>
            <div className="timeline">
              <div>
                <i />
                <strong>学习agent开发</strong>
                <span>进行中</span>
              </div>
              <div>
                <i />
                <strong>学习嵌入式</strong>
                <span>2025.5.1</span>
              </div>
              <div>
                <i />
                <strong>建立个人主页</strong>
                <span>2024.09</span>
              </div>
            </div>
          </div>

          <footer>
            <span>© 2026 Dumbo</span>
            <a href="#top">回到顶部 ↑</a>
          </footer>
        </aside>

        <section className="content-area">
          <section className="welcome glass">
            <div>
              <span className="eyebrow">
                <Sparkles /> WELCOME TO MY DIGITAL GARDEN
              </span>
              <h2>
                知识用来探索未知，
                <br />
                作品用来<span>留下痕迹。</span>
              </h2>
              <p>这里收录我的产品、代码与持续更新的技术文档。</p>
            </div>
            <div className="status-card">
              <i />
              <span>当前状态</span>
              <strong>学习ing</strong>
              <small>欢迎浏览我的博客</small>
            </div>
          </section>



          <section className="content-section website-panel glass" id="sites">
            <div className="section-title">
              <div>
                <Globe2 />
                <span>
                  <strong>WebSite</strong>
                </span>
              </div>
            </div>
            <div className="site-grid">
              <a className="site-card glass blue" href="https://github.com/Dumbo05?tab=repositories">
                <span className="site-icon">
                  <Code2 />
                </span>
                <div>
                  <strong>作品集</strong>
                  <p>产品、实验与开源项目</p>
                  <small>公开项目</small>
                </div>
                <ArrowUpRight />
              </a>
              <a className="site-card glass violet" href="https://github.com/Dumbo05/minimind-deep-dive">
                <span className="site-icon">
                  <BookOpen />
                </span>
                <div>
                  <strong>知识库</strong>
                  <p>结构化文档与学习笔记</p>
                  <small>学习资料</small>
                </div>
                <ArrowUpRight />
              </a>
              <a className="site-card glass pink" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/blog/`}>
                <span className="site-icon">
                  <FileText />
                </span>
                <div>
                  <strong>博客</strong>
                  <p>技术实践与生活随笔</p>
                  <small>文档与笔记</small>
                </div>
                <ArrowUpRight />
              </a>
            </div>
          </section>

          <section className="glass skill-card">
            <div className="section-title">
              <div>
                <Sparkles />
                <span>
                  <strong>个人技术栈</strong>
                </span>
              </div>
            </div>
            <div className="skill-list">
              <span>TypeScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Figma</span>
              <span>WebGL</span>
              <span>Python</span>
              <span>Git</span>
            </div>
          </section>
          <section className="glass contribution-card">
            <div className="card-title">
              <div>
                <GitBranch />
                <span>
                  <strong>GitHub 贡献图</strong>
                  <small>GitHub 数据快照 · 2026-09-05</small>
                </span>
              </div>
              <a href="https://github.com/Dumbo05">
                查看主页 <ArrowUpRight />
              </a>
            </div>
            <div className="contribution-wrap">
              <div className="contribution-grid" aria-label="GitHub 贡献热力图">
                {contributionLevels.map((level, index) => (
                  <i key={index} data-level={level} />
                ))}
              </div>
            </div>
            <div className="contribution-foot">
              <span>
                <strong>14</strong> 次贡献
              </span>
              <span>
                <strong>19</strong> 个仓库
              </span>
              <span>
                <strong>2</strong> 天最长连续提交
              </span>
              <span className="legend">
                少 <i data-level="1" />
                <i data-level="2" />
                <i data-level="3" />
                <i data-level="4" /> 多
              </span>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
