# Codebase Ground-Truth Audit Report

**Date**: August 2026  
**Auditor**: Rebuild Agent  
**Context**: Pre-rebuild baseline audit for `adityapatil.work`

---

## 1. Full Route Map of Existing Pages & Endpoints

| Route | File Path | Route Type | Description / Current State |
| :--- | :--- | :--- | :--- |
| `/` | `src/app/page.tsx` & `src/components/home-content.tsx` | Page (Static/Client) | Homepage with hero, tech marquee, case studies, services, 6 capability boxes, blog, and CTA. |
| `/about` | `src/app/about/page.tsx` | Page (Static) | Non-traditional origin story, career timeline, and values. |
| `/hire` | `src/app/hire/page.tsx` | Page (Static/Client) | Freelance landing page with old ₹15K packages, WhatsApp link, portfolio list, FAQs, and email modal. |
| `/work` | `src/app/work/page.tsx` | Page (Static) | Case studies archive index. |
| `/work/[slug]` | `src/app/work/[slug]/page.tsx` | Page (Dynamic MDX) | Individual case study articles loaded from `content/work/*.mdx`. |
| `/projects` | `src/app/projects/page.tsx` | Page (Client) | Projects archive with category filters and GitHub repository card integration. |
| `/blog` | `src/app/blog/page.tsx` | Page (Static) | Blog article index. |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Page (Dynamic MDX) | Individual blog posts loaded from `content/blog/*.mdx`. |
| `/now` | `src/app/now/page.tsx` | Page (Static) | Nownownow-style update page (projects, reading, focus). |
| `/uses` | `src/app/uses/page.tsx` | Page (Static) | Gear, hardware, development tools, and software stack. |
| `/resume` | `src/app/resume/page.tsx` | Page (Static) | Interactive resume view and download link to `/resume.pdf`. |
| `/og` | `src/app/og/route.tsx` | API (Image Generation) | `@vercel/og` dynamic social share card generator. |
| `/api` | `src/app/api/route.ts` | API | Sample / health check route. |
| `/sitemap.xml` | `src/app/sitemap.ts` | Metadata Route | Sitemap generator (currently contains obsolete `/contact` route and misses `/hire`). |
| `/robots.txt` | `src/app/robots.ts` | Metadata Route | Standard robots.txt rules allowing all and disallowing `/api/`. |

---

## 2. Content Storage Locations & Architecture

Content across the application is split between structured config, MDX files, and hardcoded JSX components:

1. **Global Configuration & Structured Data**:
   - `src/data/site-config.ts`: Contains `siteConfig` (bio, social links, status), `caseStudies` metadata, `services` list (3 services), `indieProjects` list, and `stats`.
2. **MDX Collections**:
   - `content/work/`: 7 case studies (`cms-dsm-platform.mdx`, `dgr-automation.mdx`, `gosolarindex.mdx`, `msmevault.mdx`, `realsync-cms.mdx`, `renewalytics.mdx`, `social-copilot.mdx`).
   - `content/blog/`: Developer and indie-focused blog posts (`how-i-built-gosolarindex-in-3-days.mdx`, `lessons-from-production-renewable-energy.mdx`, `why-i-left-fullstack-for-systems.mdx`, `why-typescript-is-eating-data-engineering.mdx`, `zero-to-one-million-rows.mdx`).
3. **Hardcoded Copy in Components**:
   - `src/components/home-content.tsx`: Hero headlines, "6 things I'm good at" grid, tech marquee lists, callout banners.
   - `src/app/hire/page.tsx`: 6 hardcoded service categories, 6 portfolio items, 4 pricing packages (starting at ₹15,000 "Starter site"), and 6 FAQ items.
   - `src/app/about/page.tsx`: Bio copy, origin story, and journey milestones.
   - `src/components/nav.tsx`: Navigation items and header "Hire me" button.
   - `src/components/footer.tsx`: Social links and footer tagline.

---

## 3. Existing Call-to-Actions (CTAs) & Analytics Wiring

| Location | Label / Element | Destination Link | Analytics Tracking |
| :--- | :--- | :--- | :--- |
| **Nav Header** | `Hire me` button | `/hire` | ❌ None |
| **Hero (Homepage)** | `View Work` button | `/projects` | ❌ None |
| **Hero (Homepage)** | `Hire Me` button | `/hire` | ❌ None |
| **Bottom CTA (Homepage)** | `Start a project` button | `/contact` (Broken / redirects or 404) | ❌ None |
| **Bottom CTA (Homepage)** | `Book a call` button | `[MY_CAL_LINK]` (Unfilled placeholder) | ❌ None |
| **Hire Page Top** | `Chat on WhatsApp` | `https://wa.me/919373238164?text=...` | ❌ None |
| **Hire Page Top** | `Send an email` | Opens `<EmailDialog>` modal | ❌ None |
| **Hire Page Packages** | `Start a project` | `https://wa.me/919373238164?text=...` | ❌ None |
| **Hire Page Footer** | `WhatsApp +91 93732 38164` | `https://wa.me/919373238164?text=...` | ❌ None |
| **Contact Form Modal** | `Send Message` | Server Action in `src/components/contact/actions.ts` | ❌ None |
| **Footer** | `Mail` icon | `mailto:adityabiz350@gmail.com` | ❌ None |

**Finding**: No CTA currently fires any Google Analytics event.

---

## 4. Phone Number, WhatsApp Link, and Email Occurrences

- **WhatsApp Link (`https://wa.me/919373238164?text=...`)**:
  - `src/app/hire/page.tsx` (Lines 29, 467)
  - `src/components/contact/contact-form.tsx` (Line 158)
- **Phone Number (`+91 93732 38164` / `9373238164`)**:
  - `src/app/hire/page.tsx` (Line 467)
  - `src/components/contact/contact-form.tsx` (Line 163)
  - *Missing from Nav header and layout.*
- **Email (`adityabiz350@gmail.com`)**:
  - `src/data/site-config.ts` (Line 16)
  - `src/components/footer.tsx` (Line 33)
  - `src/components/contact/contact-form.tsx` (Lines 132, 135)
  - `src/components/contact/actions.ts` (Line 92)

---

## 5. Scroll-Reveal & Fade-In Animation Implementation (Ghost Bug Analysis)

- **Components**:
  - `src/components/fade-in.tsx`: Uses `framer-motion` `<motion.div>` with `initial={{ opacity: 0, y: 12 }}` and `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, margin: "-40px" }}`.
  - `src/components/animations.tsx`: Defines `FadeIn`, `BlurIn`, `StaggerContainer`, and `StaggerItem` using `initial={{ opacity: 0 }}` and `whileInView={{ opacity: 1 }}`.
- **Root Cause of Ghost Elements**:
  - Elements render with inline CSS or framer styles having `opacity: 0` before JS hydrates or when `IntersectionObserver` fails / is slow to trigger.
  - If JavaScript is disabled, throttled, or if the user quickly scrolls, the content remains invisible (`opacity: 0`).
  - Does not use progressive enhancement (CSS-first visibility).
- **Reduced Motion Support**:
  - Handled in inline CSS for `.hire-cta` shine animation, but NOT respected across the core `framer-motion` wrapper components (`FadeIn`, `BlurIn`, `StaggerContainer`).

---

## 6. Existing SEO Setup

- **Metadata**:
  - Configured globally in `src/app/layout.tsx` using Next.js Metadata API.
  - Individual metadata blocks on subpages (`/`, `/about`, `/hire`, `/work`, `/blog`, `/projects`, `/now`, `/uses`, `/resume`).
- **Sitemap (`src/app/sitemap.ts`)**:
  - Dynamically fetches blog and work slugs.
  - Includes obsolete static route `/contact` (non-existent).
  - Missing `/hire` page.
  - Does not implement differentiated priorities for service vs industry vs blog pages.
- **Robots.txt (`src/app/robots.ts`)**:
  - Allows all user agents, disallows `/api/`, links to sitemap.
- **JSON-LD Schema**:
  - `Person` schema is hardcoded inside `<script type="application/ld+json">` in `src/app/layout.tsx`.
  - No `ProfessionalService`, `Service`, `FAQPage`, or `BreadcrumbList` schemas exist.

---

## 7. Analytics Setup

- **Provider**: `@next/third-parties/google` is installed and imported in `src/app/layout.tsx` (`<GoogleAnalytics gaId={gaId} />`).
- **Environment Variables**: Reads `process.env.NEXT_PUBLIC_GA_ID`.
- **Event Tracking**:
  - 0 custom events implemented.
  - No centralized tracking module (`lib/analytics.ts` does not exist).
  - No event listeners on WhatsApp, phone dialer, forms, or scroll depths.

---

## Audit Summary & Action Items for Phase 1 & 2

1. Install `lib/analytics.ts` with type-safe `trackEvent()` for GA4.
2. Build reusable `<WhatsAppCTA>` and `<StickyMobileCTA>` components.
3. Add clickable `tel:+919373238164` to the header navigation.
4. Rewrite `FadeIn` / `BlurIn` animations with progressive enhancement (CSS-visible by default, `prefers-reduced-motion` check).
5. Remove broken links (`/contact`, `[MY_CAL_LINK]`) and update `sitemap.ts`.
6. Establish typed content system for Service and Industry pages.
