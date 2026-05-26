# Aditya's Portfolio

Personal portfolio website for Aditya — Lead Software Engineer, indie hacker, and climate tech engineer based in Pune, India.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript + React 19
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Content**: MDX with next-mdx-remote + rehype-pretty-code (Shiki syntax highlighting)
- **Animations**: Framer Motion (subtle fade-in on scroll, hover interactions)
- **Icons**: Lucide React
- **Theme**: next-themes (light/dark mode)
- **Fonts**: Inter (body) + JetBrains Mono (code/stats)
- **Search**: Fuse.js (client-side fuzzy search on /projects)
- **SEO**: Next.js Metadata API, JSON-LD, dynamic sitemap, robots.txt, RSS feed

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, theme, nav, footer)
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   ├── rss.xml/route.ts    # RSS feed
│   ├── about/page.tsx      # About page
│   ├── now/page.tsx        # Now page (nownownow style)
│   ├── uses/page.tsx       # Uses/stack page
│   ├── contact/
│   │   ├── page.tsx        # Contact form
│   │   ├── contact-form.tsx # Form client component
│   │   └── actions.ts      # Server action (form handler)
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/page.tsx # Blog post (MDX)
│   ├── work/
│   │   ├── page.tsx        # Work/case studies index
│   │   └── [slug]/page.tsx # Case study (MDX)
│   └── projects/
│       └── page.tsx        # Projects archive (GitHub API)
├── components/
│   ├── nav.tsx             # Navigation
│   ├── footer.tsx          # Footer
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   ├── theme-provider.tsx  # next-themes provider
│   ├── fade-in.tsx         # Scroll animation wrapper
│   ├── prose.tsx           # MDX prose wrapper
│   ├── case-study-card.tsx # Featured work card
│   ├── blog-post-card.tsx  # Blog post card
│   ├── project-card.tsx    # GitHub repo card
│   ├── project-archive.tsx # Filterable project list
│   ├── filter-chip.tsx     # Filter toggle chip
│   ├── status-badge.tsx    # Status indicator badge
│   ├── tech-badge.tsx      # Technology badge
│   ├── stat.tsx            # Stat display (number + label)
│   ├── copy-button.tsx     # Code copy button
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── mdx.ts              # MDX parsing utilities
│   ├── mdx-options.ts      # MDX rendering config
│   ├── github.ts           # GitHub API integration
│   └── utils.ts            # Utility functions
└── data/
    └── site-config.ts      # Site configuration & data

content/
├── blog/                   # Blog posts (MDX)
│   ├── how-i-built-gosolarindex-in-3-days.mdx
│   └── lessons-from-production-renewable-energy.mdx
└── work/                   # Case studies (MDX)
    ├── gosolarindex.mdx
    ├── renewalytics.mdx
    ├── social-copilot.mdx
    └── msmevault.mdx
```

## Adding a Blog Post

1. Create a new `.mdx` file in `content/blog/` with a filename like `my-post-slug.mdx`
2. Add frontmatter at the top:

```yaml
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
publishedAt: "2026-05-26"
updatedAt: "2026-05-26"  # optional
tags: ["Tag1", "Tag2"]
cover: "/images/my-cover.jpg"  # optional
draft: false  # set to true to exclude from build
---

Your content here...
```

3. Write your content in MDX (standard Markdown + JSX components)
4. The post will automatically appear on `/blog` and generate its own page at `/blog/my-post-slug`

## Adding a Case Study

1. Create a new `.mdx` file in `content/work/` with a filename like `project-name.mdx`
2. Add frontmatter:

```yaml
---
title: "Project Name"
description: "One-line description"
publishedAt: "2026-05-26"
tags: ["Tag1", "Tag2"]
tech: ["Next.js", "TypeScript", "PostgreSQL"]
status: "Live"  # Live | Production | In Development | Archived
---

## Context
...

## Problem
...

## What I Built
...

## Stack
...

## Outcomes
...

## Lessons
...
```

3. Also add the project to `src/data/site-config.ts` in the `caseStudies` array to appear on the home page

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GITHUB_USERNAME` | No | GitHub username for /projects page (defaults to "aditya") |
| `GITHUB_TOKEN` | No | GitHub personal access token for higher API rate limits |
| `RESEND_API_KEY` | No | Resend API key for contact form email delivery |
| `CONTACT_EMAIL` | No | Email address to receive contact form submissions |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy — Vercel handles the rest

### Manual

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## Features

- **Light/Dark Mode**: System-aware with manual toggle
- **SEO Optimized**: Metadata API, JSON-LD structured data, dynamic sitemap, robots.txt
- **RSS Feed**: Available at `/rss.xml`
- **GitHub Integration**: Auto-pulls repos on `/projects` with ISR caching (1 hour)
- **MDX Content**: Blog posts and case studies with syntax-highlighted code blocks
- **Contact Form**: Server action with honeypot spam protection and rate limiting
- **Responsive**: Mobile-first design, tested at 375px
- **Accessible**: Semantic HTML, keyboard navigation, focus rings, ARIA labels
- **Fast**: Server Components, ISR, minimal client JavaScript

## Design Decisions

- Clean light theme by default (Linear/Vercel aesthetic)
- No gradient soup, no glassmorphism, no blurred orbs
- Electric blue (#2563EB) + muted teal (#0D9488) accent colors
- Monospaced numbers and code throughout
- Max content width 1200px, prose width 680px
- Subtle 1px borders for section separation
