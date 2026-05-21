---
title: Astro 博客搭建指南
date: 2026-05-20
description: 用 Astro 和 Tailwind CSS 快速搭建一个轻量博客的完整流程。
---

## 为什么选择 Astro

Astro 是一个现代化的静态网站生成器，特别适合博客这类内容型网站。

### 核心优势

1. **零 JavaScript 输出** — 默认情况下页面不包含 JS，加载极快
2. **组件化** — 支持 Astro、React、Vue 等多种组件格式
3. **内容集合** — 内置 Markdown 和 MDX 支持，类型安全
4. **简单部署** — 输出纯静态文件，可部署到任何平台

## 项目结构

```
my-blog/
├── src/
│   ├── content/
│   │   └── blog/       # 博客文章 (Markdown)
│   ├── layouts/
│   │   └── Base.astro   # 基础布局
│   ├── pages/
│   │   ├── index.astro  # 首页 — 文章列表
│   │   └── blog/
│   │       └── [...slug].astro  # 文章详情页
│   └── styles/
│       └── global.css   # 全局样式
├── astro.config.mjs
└── tailwind.config.mjs
```

## 开始写作

在 `src/content/blog/` 下创建 `.md` 文件，添加 frontmatter：

```yaml
---
title: 文章标题
date: 2026-05-20
description: 文章摘要
---
```

然后写 Markdown 内容即可。`npm run dev` 启动本地预览。
