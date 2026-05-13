# AI Agent Instructions

Personal blog built with [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template.

## Project Overview

- **Framework**: Next.js with App Router, React, TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX blog posts via contentlayer2 in `data/blog/`, author bios in `data/authors/`
- **Deployment**: Static export to GitHub Pages via `output: 'export'`
- **Images**: Unoptimized for static export compatibility
- **Comments**: Giscus (GitHub Discussions)
- **Search**: kbar (local search)

## Key Directories

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js App Router pages and layouts |
| `components/` | React components |
| `layouts/` | MDX page layouts (`AuthorLayout`, `ListLayout`, `PostLayout`, `PostSimple`) |
| `data/` | Blog posts (MDX), site metadata, nav links, projects, author info |
| `css/` | Tailwind CSS entry point |
| `public/` | Static assets |
| `scripts/` | Build scripts |

## Commands

```sh
yarn dev      # Start dev server
yarn build    # Build (set EXPORT=1 for static export)
yarn lint     # ESLint
yarn analyze  # Bundle analysis (set ANALYZE=true)
```

## Architecture Notes

- **App Router**: Pages in `app/`, layouts in `layouts/`.
- **contentlayer2**: Processes MDX files from `data/` directory. Config in `contentlayer.config.ts`.
- **Static export**: Set `EXPORT=1` and `UNOPTIMIZED=1` env vars for GitHub Pages deployment.
- **Site metadata**: `data/siteMetadata.js` holds all site config.
- **Author info**: `data/authors/default.mdx` for about page content.

## Conventions

- TypeScript codebase with `.tsx`/`.ts` files.
- Blog posts use `.mdx` extension with YAML frontmatter.
- Components use default exports. Named exports for utilities.
- Follow existing code patterns.

## Environment Variables

Giscus comment system requires these secrets (set in GitHub repo settings):
- `NEXT_PUBLIC_GISCUS_REPO`
- `NEXT_PUBLIC_GISCUS_REPOSITORY_ID`
- `NEXT_PUBLIC_GISCUS_CATEGORY`
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID`
