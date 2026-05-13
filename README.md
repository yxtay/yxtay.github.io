# YuXuan Tay's Blog

Personal blog built with [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) v2.4.0.

- **Framework**: Next.js (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX via [Contentlayer](https://www.contentlayer.dev/)
- **Deployment**: Static export to GitHub Pages

## Installation

```bash
yarn
```

## Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). Pages auto-update as you edit them.

## Customisation

| File / Directory | Purpose |
| --- | --- |
| `data/siteMetadata.js` | Site info, analytics, comments, search config |
| `data/authors/default.mdx` | Default author info (about page) |
| `data/projectsData.ts` | Projects page data |
| `data/headerNavLinks.ts` | Navigation links |
| `data/logo.svg` | Site logo |
| `data/blog/` | Blog posts (MDX) |
| `public/static/` | Images and favicons |
| `css/tailwind.css` | Tailwind stylesheet |
| `css/prism.css` | Code block styles ([prism themes](https://github.com/PrismJS/prism-themes)) |
| `contentlayer.config.ts` | Content sources and MDX plugins |
| `components/MDXComponents.tsx` | Custom JSX components for MDX files |
| `layouts/` | Page templates: `PostLayout`, `PostSimple`, `PostBanner`, `ListLayout`, `ListLayoutWithTags` |
| `app/` | Next.js App Router pages |
| `next.config.js` | Next.js config incl. Content Security Policy |

## Post

Content is modelled using [Contentlayer](https://www.contentlayer.dev/). See `contentlayer.config.ts` for the content schema.

### Frontmatter

```yaml
---
title: 'Post Title' # required
date: '2021-01-12' # required
tags: ['next-js', 'tailwind', 'guide'] # optional
lastmod: '2021-01-18' # optional
draft: false # optional
summary: 'A short description of the post.' # optional
images: ['/static/images/photo.jpg'] # optional
authors: ['default'] # optional, corresponds to files in data/authors
layout: PostLayout # optional, corresponds to files in layouts
canonicalUrl: https://example.com/post # optional, for SEO
---
```

## Deploy

### GitHub Pages

A [`pages.yml`](.github/workflows/pages.yml) workflow is provided. Select "GitHub Actions" in: `Settings > Pages > Build and deployment > Source`.

### Static hosting (S3 / Firebase / etc.)

```bash
EXPORT=1 UNOPTIMIZED=1 yarn build
```

Deploy the generated `out` folder or preview locally with `npx serve out`.

If deploying with a URL base path (e.g. `https://example.org/myblog`):

```bash
EXPORT=1 UNOPTIMIZED=1 BASE_PATH=/myblog yarn build
```

> **Note**: Static builds cannot use `headers()`, API routes, or server-side newsletter components.

## Licence

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timlrx.com)
