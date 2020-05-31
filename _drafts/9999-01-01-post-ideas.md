---
title: Post Ideas
date: 9999-01-01T00:00:00+08:00
last_modified_at: 9999-01-01T00:00:00+08:00
categories: 
  - blog
tags:
  - idea
---

Understanding Jekyll on GitHub Pages
- static site
- static site generator
  - what jekyll does
- dependencies
  - https://jekyllrb.com/docs/ruby-101/
  - ruby
  - gem
  - bundler
  - jekyll
- github-pages gem
- plugins
  - enabled
    - jekyll-coffeescript
    - jekyll-commonmark-ghpages
    - jekyll-default-layout
    - jekyll-gist
    - jekyll-github-metadata
    - jekyll-optional-front-matter
    - jekyll-paginate
    - jekyll-readme-index
    - jekyll-relative-links
    - jekyll-titles-from-headings
  - included
    - jekyll-avatar
    - jekyll-feed
    - jekyll-mentions
    - jekyll-redirect-from
    - jekyll-remote-theme
    - jekyll-seo-tag
    - jekyll-sitemap
    - jemoji
  - whitelisted
    - jekyll-include-cache
    - jekyll-octicons
- themes
  - "minima"
  - "jekyll-swiss"
  - "jekyll-theme-primer"
  - "jekyll-theme-architect"
  - "jekyll-theme-cayman"
  - "jekyll-theme-dinky"
  - "jekyll-theme-hacker"
  - "jekyll-theme-leap-day"
  - "jekyll-theme-merlot"
  - "jekyll-theme-midnight"
  - "jekyll-theme-minimal"
  - "jekyll-theme-modernist"
  - "jekyll-theme-slate"
  - "jekyll-theme-tactile"
  - "jekyll-theme-time-machine"
- references:
  - https://jekyllrb.com
  - https://help.github.com/en/github/working-with-github-pages
  - https://pages.github.com/versions
  - https://github.com/github/pages-gem

Setting Jekyll themes on GitHub Pages
- 3 methods:
  - gem-based theme
    - how: specify `theme` in `_config.yml`
    - pros: no external dependencies, sufficient for simple needs
    - cons: limited themes to choose from, not straightforward to customise
  - remote theme
    - how: specify `remote_theme` in `_config.yml`, enabled by the `jekyll-remote-theme` plugin
    - pros: many themes available on github, some themes are quite well featured, which can be enabled through `_config.yml`
    - cons: long local build time due to downloading theme files, customisability dependent on theme
  - regular theme
    - how: create associated files for _includes, _layouts, _sass
    - pros: allows for any customisation, can start by clone github repo of jekyll themes
    - cons: requires understanding on creating includes and layouts for jekyll theme, difficult to start from scratch, customisation requires knowledge of html, css, javascript and liquid
- how, pros & cons
- references:
  - https://pages.github.com/themes/
  - https://help.github.com/en/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll

Secure Docker Containers for Python Applications

Machine Learning Model Serving with Task Queues

Rendevous Architecture for Machine Learning Model Serving
