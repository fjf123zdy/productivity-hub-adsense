# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ETF Bridge (etfbridge.click) — a Next.js 14 static site comparing US and China ETFs. Content-driven SEO site monetized via Google AdSense. Deployed on Vercel with auto-deploy on push to GitHub.

## Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Static export build (outputs to out/)
npm run start        # Serve production build
npm run lint         # ESLint
npm run type-check   # TypeScript check (tsc --noEmit)
```

## Architecture

### Build: Static Export

`next.config.js` sets `output: 'export'` with `trailingSlash: true`. No server-side rendering — all pages are pre-rendered at build time. The `out/` directory is the deployable artifact.

### Content: Markdown Blog

Blog posts live as `.md` files in `content/blog/`. Each has YAML frontmatter (`title`, `description`/`meta_description`, `date`, `category`, `read_time`, `author`, `keywords`/`meta_keywords`). The `src/lib/posts.ts` module reads them via `gray-matter` at build time — no CMS, no database.

- `getAllSlugs()` → all blog slugs for `generateStaticParams()`
- `getPostBySlug(slug)` → single post with frontmatter + markdown content
- `getAllPosts()` → sorted list (newest first)

Blog pages render markdown with `react-markdown` + `remarkGfm` + `rehypeRaw`. The `[slug]/page.tsx` template includes JSON-LD article structured data.

### ETF Data: Static DB with Auto-Update

`src/lib/etf-data.ts` is the single source of truth for ETF data. It exports:
- `etfDatabase: ETFData[]` — 12 ETFs across US, China, HK markets
- `majorIndices` — S&P 500, Nasdaq-100, CSI 300, Hang Seng Index metadata
- `crossBorderConfig` — withholding tax, estate tax, brokerage fee by market
- Helper functions: `getETFByTicker()`, `getETFsByMarket()`, `formatER()`, `formatPct()`

The file is auto-updated daily by a GitHub Actions workflow (`.github/workflows/update-etf-data.yml`) that:
1. Runs `scripts/update-etf-data.js` (fetches live prices/returns from Yahoo Finance)
2. Regex-replaces only performance fields (ytdReturn, oneYearReturn, fiveYearAnnualized, dividendYield, PE, AUM) in `etf-data.ts`
3. Commits and pushes if changed

**Static fields** (topHoldings, sectorWeights, expenseRatio, inception) must be updated manually every quarter.

### Route Structure (App Router)

```
/                           Home page (server component)
/blog/                      Blog listing (server component)
/blog/[slug]/               Individual blog post (server component, SSG)
/tools/                     Tools directory page (server component)
/tools/etf-comparison/      ETF comparison tool (client component)
/tools/expense-ratio-calculator/  (client component)
/tools/index-explorer/      (client component)
/tools/dca-calculator/      (client component)
/tools/cross-border-fee-analyzer/  (client component)
/about/                     Static info page
/privacy/, /terms/, /disclaimer/  Legal pages (AdSense requirement)
/contact/                   Contact page
```

**Critical pattern**: Tool pages are `'use client'` because they use React state (`useState`, `useMemo`). Blog and listing pages are server components.

### Component Organization

- `src/components/ads/` — AdSense integration
  - `AdUnit.tsx`: Client component wrapping `<ins class="adsbygoogle">` with publisher ID from env
  - `AdSenseScript.tsx`: Loads the AdSense JS SDK via `next/script`
  - `AdPlaceholder.tsx`: Visual placeholders shown before real ad slots are configured
- `src/components/layout/` — `Header.tsx` (sticky nav, client), `Footer.tsx` (server)
- `src/components/seo/` — `StructuredData.tsx`: JSON-LD generators for Website, Article, WebPage types

### SEO Infrastructure

- `src/lib/seo.ts` — `generateMetadata()` and `generateStructuredData()` with full Open Graph + Twitter card support
- `src/app/sitemap.ts` — manually maintained sitemap (static + tools + blog posts + categories)
- `src/app/robots.ts` — `MetadataRoute.Robots` with separate rules for Googlebot

### Utility CSS Classes (from `globals.css`)

Tailwind component classes used across the site: `.content-container` (max-w-4xl centered), `.btn-primary`, `.btn-secondary`, `.card`, `.nav-link`, `.ad-container`.

## Key Constraints

- **AdSense compliance**: `/privacy`, `/terms`, `/disclaimer` pages must always be accessible. Every article needs a financial disclaimer. No investment advice language.
- **static export**: Cannot use Next.js API routes, middleware, or server-side features (ISR, SSR). All data must be available at build time or fetched client-side.
- **ETF data freshness**: Performance numbers auto-update daily; static metadata (holdings, sectors, fees) needs quarterly manual review.
- **Content creation workflow**: Use `investment-team` skill to produce articles → save to `content/blog/[slug].md` → commit + push → Vercel auto-deploys.

## Operations (from ETF-Bridge-运营路线图.md)

Daily routine: Check AdSense/Search Console/Vercel/GitHub Actions status → Write one article → Push. Goal: 50+ articles for meaningful search traffic. Repository: `github.com/fjf123zdy/productivity-hub-adsense`.

**After writing each article**: Always do all three steps — add the new `.md` file + the updated `sitemap.ts`, commit, and push. Vercel auto-deploys on push. Use:
```bash
cd "/Users/fujiafeng/Library/CloudStorage/OneDrive-个人/杂谈/adsense google/productivity-hub-adsense"
git add content/blog/<slug>.md src/app/sitemap.ts
git commit -m "article: <title>"
git pull --rebase && git push
```

Article count as of 2026-07-13: **38 articles**, **56 static pages** on etfbridge.click.
