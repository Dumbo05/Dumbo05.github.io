'use client';

import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  FileText,
  GitBranch,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projects = [
  {
    "title": "chat_emotion",
    "description": "emotion · Python 项目",
    "stack": [
      "Python",
      "个人仓库"
    ],
    "icon": "CE",
    "url": "https://github.com/Dumbo05/chat_emotion"
  },
  {
    "title": "Word × Qwen",
    "description": "Word VBA 与通义千问 API 集成。",
    "stack": [
      "VBA",
      "个人仓库"
    ],
    "icon": "WQ",
    "url": "https://github.com/Dumbo05/Word-VBA-Macro-for-Tongyi-Qwen-API-Integration"
  },
  {
    "title": "MiniMind Deep Dive",
    "description": "MiniMind 源码与大模型学习笔记，Fork 收藏。",
    "stack": [
      "学习资料",
      "Fork"
    ],
    "icon": "MD",
    "url": "https://github.com/Dumbo05/minimind-deep-dive"
  },
  {
    "title": "Nature Skills",
    "description": "学术表达与科研绘图技能库，Fork 收藏。",
    "stack": [
      "科研工具",
      "Fork"
    ],
    "icon": "NS",
    "url": "https://github.com/Dumbo05/nature-skills"
  }
];

const docs = [
  {
    "title": "MiniMind Deep Dive",
    "category": "笔记",
    "date": "",
    "excerpt": "MiniMind 源码与大模型学习笔记，Fork 收藏。",
    "url": "https://github.com/Dumbo05/minimind-deep-dive"
  },
  {
    "title": "Nature Skills",
    "category": "笔记",
    "date": "",
    "excerpt": "学术表达与科研绘图技能库，Fork 收藏。",
    "url": "https://github.com/Dumbo05/nature-skills"
  }
];

const categories = ['全部', '工程', '设计', '笔记'];
const activeDays: Record<number, number> = {10:2,28:1,48:1,293:5,294:2,366:2,369:1};
const contributionLevels = Array.from({length:371}, (_, i) => Math.min(activeDays[i] || 0, 4));

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState('全部');
  const [query, setQuery] = useState('');
  const filteredDocs = useMemo(
    () =>
      docs.filter(
        (doc) =>
          (category === '全部' || doc.category === category) &&
          `${doc.title}${doc.excerpt}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, query],
  );

  return (
    <main
      className="page-frame"
      id="top"
      style={{
        backgroundImage: `linear-gradient(rgba(3,10,22,.28), rgba(3,10,22,.72)), url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/night-landscape.png')`,
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
            <h1>你好，我是 Dumbo</h1>
            <p className="role">个人作品与学习记录</p>
            <p className="bio">
              记录项目实践，整理学习文档，探索代码与知识的更多可能。
            </p>
            <div className="social-row">
              <a href="https://github.com/Dumbo05" aria-label="GitHub">
                <GitBranch />
              </a>
              <a href="https://github.com/Dumbo05?tab=repositories" aria-label="仓库">
                <Mail />
              </a>
              <a href="#docs" aria-label="文档">
                <BookOpen />
              </a>
              <a href="#projects" aria-label="项目">
                <Code2 />
              </a>
            </div>
            <div className="profile-meta">
              <span>
                <MapPin /> GitHub / Dumbo05
              </span>
              <span>
                <BriefcaseBusiness /> 作品与文档持续整理中
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
                <strong>构建个人知识库</strong>
                <span>进行中</span>
              </div>
              <div>
                <i />
                <strong>整理公开项目</strong>
                <span>进行中</span>
              </div>
              <div>
                <i />
                <strong>建立个人主页</strong>
                <span>2026.09</span>
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
              <strong>持续整理</strong>
              <small>欢迎浏览公开项目</small>
            </div>
          </section>



          <section className="content-section" id="sites">
            <div className="section-title">
              <div>
                <Globe2 />
                <span>
                  <strong>WebSite</strong>
                  <small>我的站点与内容入口</small>
                </span>
              </div>
            </div>
            <div className="site-grid">
              <a className="site-card glass blue" href="#projects">
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
              <a className="site-card glass violet" href="#docs">
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

          <section className="content-section" id="projects">
            <div className="section-title">
              <div>
                <Code2 />
                <span>
                  <strong>项目集</strong>
                  <small>个人仓库与 Fork 收藏</small>
                </span>
              </div>
              <a href="https://github.com/Dumbo05">
                全部项目 <ArrowUpRight />
              </a>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <a
                  className="project-card glass"
                  href={project.url}
                  key={project.title}
                >
                  <span className="project-icon">{project.icon}</span>
                  <div>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>
                    <span className="stack">
                      {project.stack.map((item) => (
                        <small key={item}>{item}</small>
                      ))}
                    </span>
                  </div>
                  <ArrowUpRight className="project-arrow" />
                </a>
              ))}
            </div>
          </section>

          <section className="content-section docs-section" id="docs">
            <div className="section-title">
              <div>
                <BookOpen />
                <span>
                  <strong>文档与思考</strong>
                  <small>项目说明与学习资料入口</small>
                </span>
              </div>
            </div>
            <div className="docs-tools glass">
              <Tabs value={category} onValueChange={setCategory}>
                <TabsList>
                  {categories.map((item) => (
                    <TabsTrigger key={item} value={item}>
                      {item}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <label htmlFor="doc-search">
                <Search />
                <Input
                  id="doc-search"
                  placeholder="搜索文档"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
            </div>
            <div className="docs-list glass">
              {filteredDocs.map((doc) => (
                <a href={doc.url} className="doc-row" key={doc.title}>
                  <span className="doc-category">{doc.category}</span>
                  <div>
                    <strong>{doc.title}</strong>
                    <p>{doc.excerpt}</p>
                  </div>
                  <time>{doc.date}</time>
                  <ArrowUpRight />
                </a>
              ))}
              {filteredDocs.length === 0 && (
                <p className="empty">没有找到匹配的文档。</p>
              )}
            </div>
          </section>

          <section className="glass skill-card">
            <div className="section-title">
              <div>
                <Sparkles />
                <span>
                  <strong>技术与工具</strong>
                  <small>本站技术与公开仓库涉及的工具</small>
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
