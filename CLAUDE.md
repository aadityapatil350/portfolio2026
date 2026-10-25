# adityapatil.work — Single Source of Truth & Instructions for AI Agents

This document is the single source of truth for every AI agent working on this codebase.
Read this entire file before touching any code.

---

## Who this site is for

Buyers are non-technical or semi-technical decision makers: founders, ops heads, plant managers, agency owners, finance leads.
They are NOT developers. They do not know or care what Prisma is.
Every word on public-facing pages must pass the test:
> **"Would a 45-year-old operations manager understand this sentence?"**

---

## Visual direction (2026 redesign)

The whole site runs one warm, light visual system now, after two rejected detours: a dark
WebGL "HUD" concept (illegible, choppy) and a hand-illustrated cartoon avatar (rejected outright —
"the character is shit"). Do not reintroduce either.

- **Warm palette, site-wide, via CSS tokens** — `src/app/globals.css` `:root`/`.dark` now define a
  cream/coral/teal warm palette (was cool gray/blue). Because inner pages already consumed
  semantic Tailwind tokens (`bg-background`, `text-accent-blue`, etc.) rather than hardcoded
  colors, this one file change cascades the new look across every route. **Keep using semantic
  tokens, not hardcoded hex/stone/orange Tailwind classes**, so future palette tweaks stay
  one-file changes. A few literal `blue-*`/status-badge colors remain intentionally (semantic
  status indicators, e.g. `Production` badges) — leave those as-is, they're not brand accent.
- **No character, no mascot, no illustrated avatar anywhere.** Replaced with small animated
  "mockup" widgets built in code: `src/components/mockups/dashboard-mockup.tsx` (animated bar
  chart + count-up stats) and `alert-stack-mockup.tsx` (sliding notification cards). Extend this
  set in the same style if a section needs more visual weight — don't add a character.
- **Homepage has a scroll-driven 2D "parallax world" background** (`src/components/game/
  parallax-world.tsx`): a renewable-energy-themed illustrated journey (solar farm →
  rooftop-at-night → wind turbines/grid → open road) tied to the 4 homepage sections via
  `IntersectionObserver` on each section's `id` (`hero-section`, `lab`, `work`, `packages` — don't
  rename these ids without updating `ZONE_IDS` in that file). Pure SVG/CSS, no Three.js/WebGL —
  that was tried and explicitly rejected for being heavy and illegible. Because the background can
  be dark in places, any loose heading/paragraph text (not already inside an opaque `bg-card`) must
  be wrapped in a `bg-background/85 backdrop-blur-md` panel — see `hero-act.tsx`/`lab-act.tsx` for
  the pattern. Don't remove those panels without another contrast solution.
- Fonts: `Syne` for display headings (applied globally via `@layer base` in `globals.css`),
  `Plus Jakarta Sans` for body (`--font-sans`), `JetBrains Mono` for technical/stat labels —
  loaded in `src/app/layout.tsx`.
- The homepage uses the **same global `Nav`/`Footer`/`StickyMobileCTA`** as every other page —
  don't reintroduce a homepage-only nav or suppress these again; site-wide consistency was an
  explicit requirement.
- `@aditya.ships.it` (Instagram, build-in-public) is a co-primary CTA alongside WhatsApp,
  currently wired on the homepage; inner pages keep the original WhatsApp-only CTA rules below.

---

## Positioning

Aditya Patil builds operational software that has to survive real use — reporting that runs itself, dashboards ops teams actually open, realtime systems that page someone at 3 AM, AI workflows that replace manual processes.

- **The offer is HORIZONTAL (any sector).**
- **The proof is VERTICAL (renewable energy).**

Never narrow the offer to energy. Always use energy work as evidence of severity:
> *"If it survives 3,400 MW of live plant data, it will survive your workflow."*

Target sectors, equally weighted:
1. **Manufacturing** (shift reports, SCADA telemetry, production reconciliation)
2. **Logistics & Distribution** (order tracking across WhatsApp groups/spreadsheets, POD collection)
3. **Professional Services** (CA firms, clinics, legal, agencies — client reporting, intake, compliance)
4. **Energy & Infrastructure** (DGR, portal submissions, forecasting, telemetry)
5. **Early-stage Startups** (MVP build speed, zero in-house engineering, investor/ops dashboards)

---

## Positioning as a delivery partner, not a freelancer

- **Never use the words**: `"freelance"`, `"freelancer"`, `"gigs"`, or `"hire me for cheap"`.
- **Use**: `independent engineer`, `delivery partner`, `senior engineering`.
- Sell **fixed-scope outcomes**, never hourly rates.

---

## Hard facts (never invent numbers beyond these)

- **Role & Company**: Lead Software Engineer at Renewalytics, Pune. Joined June 2024, promoted from SWE.
- **Production Systems**:
  - **Reflux**: Forecasting + scheduling platform, 40+ plants.
  - **Excel Flow**: DGR automation & ops dashboard, 33+ plants.
  - **COPS**: DSM & CSM portal, Juniper Green Energy.
  - **RealSync CMS**: Realtime monitoring & telemetry (in development).
- **Scale**: 3,400+ MW of renewable capacity flows through systems he built.
- **Automated Workflows**: 30+ automated reports run daily.
- **Prior Experience**: 2.5 years at Climate Connect Digital, built ARS reporting system. Promoted twice.
- **Indie Products**:
  - `GoSolarIndex.in` (live) — Solar installer directory.
  - `MSMEVault.in` (live) — Indian MSME government scheme directory.
  - `Social Copilot` (in progress) — Social scheduler with AI video generation.
  - `Discover AI Tools` (live) — AI tools directory.
  - `Imaginate.pro` & `AI Brand Voice` — Archived.
- **Education / Background**: Self-taught. Mechanical Engineering diploma (2020). PGDM IT Management, MIT School of Management (final semester).
- **Tech Stack**: Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Prisma, Docker, WebSockets, MQTT, OPC-UA, Tailwind CSS. Ships with Claude Code.
- **Contact & Location**: WhatsApp `+91 93732 38164` / Phone `+91 93732 38164`. Based in Pune, serves clients anywhere.

---

## Voice rules

- **Second person**: Talk to the buyer about their problem, not about yourself.
- **Short declarative sentences**: No em-dash-heavy consultant prose.
- **Concrete over clever**: `"33 plants, every morning, no human"` beats `"streamlined operational excellence"`.
- **Forbidden buzzwords**: NEVER write `"cutting-edge"`, `"seamless"`, `"robust"`, `"leverage"`, `"solutions"`, `"passionate"`, `"journey"`, `"elevate"`, `"unlock"`, `"empower"`.
- **Admit trade-offs**: Naming what a service is NOT builds more trust than superlatives.

---

## Conversion rules — apply to every page without exception

1. **Primary CTA on every page is WhatsApp**:
   `https://wa.me/919373238164?text=<url-encoded, page-specific pre-filled message>`
   The pre-filled message must **always end mid-sentence** so the user continues typing their actual situation (e.g. `"Hi Aditya, I'm looking at your reporting automation page. Here's what I need: "`).
2. **Header Phone Link**: Header contains `tel:+919373238164` link, visible on mobile and desktop.
3. **CTA Cadence**: CTA appears at top, mid-scroll, and bottom of every page. No page ends without one.
4. **No Bare Contact Form Alone**: Contact form is strictly secondary to WhatsApp.
5. **Analytics Tracking**: Every CTA fires a GA4 event through `@/lib/analytics` (`whatsapp_click`, `phone_click`, `quote_form_submit`, `scroll_75`).

---

## Tech constraints

- **Framework**: Next.js App Router with TypeScript and Tailwind CSS.
- **Content Architecture**: All service, industry, and case study content lives in typed content/data files, not hardcoded JSX, allowing programmatic generation and strict schema verification.
- **Animation & Accessibility**: Content is visible by **default in CSS**. Animation is progressive enhancement only. Respect `prefers-reduced-motion: reduce`.
