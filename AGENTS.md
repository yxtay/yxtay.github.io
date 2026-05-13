# AI Agent Instructions

Personal blog built with [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template.

## Project Overview

- **Framework**: Next.js 16 with Pages Router, React 19
- **Styling**: Tailwind CSS 3
- **Content**: MDX blog posts in `data/blog/`, author bios in `data/authors/`
- **Deployment**: Static export to GitHub Pages via `output: 'export'`
- **Image optimization**: `next-export-optimize-images` (post-build optimizer for static export)

## Key Directories

| Directory | Purpose |
|-----------|---------|
| `pages/` | Next.js pages (Pages Router) |
| `components/` | React components |
| `layouts/` | MDX page layouts (`AuthorLayout`, `ListLayout`, `PostLayout`, `PostSimple`) |
| `data/` | Blog posts (MDX), site metadata, nav links, projects |
| `lib/` | Utilities: MDX processing, RSS generation, tag handling |
| `scripts/` | Build scripts (sitemap generation) |
| `public/` | Static assets |
| `css/` | Tailwind CSS entry point |

## Commands

```sh
npm run dev       # Start dev server
npm run build     # Build static export (uses webpack via --webpack flag)
npm run export    # Post-build: optimize images + generate sitemap
npm run lint      # ESLint with auto-fix
npm run analyze   # Bundle analysis
```

CI runs `build` then `export` sequentially. The `build` step produces static output in `out/` (via `output: 'export'`), then `export` runs image optimization and sitemap generation.

## Architecture Notes

- **Static export only**: `output: 'export'` in `next.config.js`. No server-side features (API routes, headers(), rewrites, middleware). All pages are statically generated.
- **MDX layouts**: Registered in `components/MDXComponents.js` via a static `layouts` map. Adding a new layout requires updating this map.
- **Image component**: `components/Image.js` wraps `next-export-optimize-images/image` (not `next/image` directly) to provide the custom loader required for static export.
- **Config plugins**: `next.config.js` uses async config to apply `withExportImages` (async) then `withBundleAnalyzer` (sync).
- **Site metadata**: `data/siteMetadata.js` holds all site config including comment system (Giscus), analytics, and newsletter settings. Giscus config uses environment variables.

## Conventions

- Follow existing code patterns. This is a JavaScript (not TypeScript) codebase.
- Components use default exports. Named exports for utilities.
- Blog posts use MDX with YAML frontmatter (`title`, `date`, `tags`, `draft`, `summary`, `layout`).
- `layout` in frontmatter must match a key in the `layouts` map in `MDXComponents.js`.

## Environment Variables

Giscus comment system requires these secrets (set in GitHub repo settings):
- `NEXT_PUBLIC_GISCUS_REPO`
- `NEXT_PUBLIC_GISCUS_REPOSITORY_ID`
- `NEXT_PUBLIC_GISCUS_CATEGORY`
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID`
