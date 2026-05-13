---
title: Setting Jekyll Themes on GitHub Pages
date: '2020-06-09'
tags:
  - jekyll
  - github-pages
summary: Understanding how to set up Jekyll Themes on GitHub Pages
---

Another confusion I faced while setting up this blog
is regarding setting Jekyll themes for GitHub Pages.
If you are setting up a blog with Jekyll, it is likely
that you will want to set a theme to customise the
look and feel, and also to use features implemented
by authors of Jekyll themes.

There are 3 main methods for setting Jekyll themes on GitHub Pages.

- Gem-based themes
- Remote themes
- Regular themes

I will go through each of the 3 methods, how to set them up,
and what the pros and cons are of each method.
For GitHub Pages, the [documentation][gh-pages-docs]
will be the relevant reference for this topic.

## Gem-based Themes

This is the default method used for new Jekyll projects.
When you initialise a new Jekyll project with `jekyll new`,
you will notice that the `_config.yml` is set up with `theme: minima`.
[Minima][minima] is a minimalistic Jekyll theme
that is installed together with Jekyll.

This method requires that you make configuration changes at 2 locations:
`Gemfile` and `_config.yml`.

The following specifies and installs the gem for the theme.

```ruby
# Gemfile
gem "minimal-mistakes-jekyll"
```

This activates the theme in Jekyll.

```yaml
# _config.yml
theme: minimal-mistakes-jekyll
```

Pros

- Simple to set up
- Sufficient for simple needs, such as project documentation
- Theme development and maintenance managed by theme author

Cons

- Only themes with published gems can be configured with this method
- Limited theme customisation
- For GitHub Pages, only limited themes are available with this method

The final point is the severe limitation of using gem-based theme configuration.
According to the [documentation][gh-pages-themes],
there are only 15 themes available for GitHub Pages.
If you are using GitHub Pages, you will not be able to use any other
gem-based theme by adding it into the `Gemfile`.
The included themes are as follows.

- minima
- jekyll-swiss
- jekyll-theme-primer
- jekyll-theme-architect
- jekyll-theme-cayman
- jekyll-theme-dinky
- jekyll-theme-hacker
- jekyll-theme-leap-day
- jekyll-theme-merlot
- jekyll-theme-midnight
- jekyll-theme-minimal
- jekyll-theme-modernist
- jekyll-theme-slate
- jekyll-theme-tactile
- jekyll-theme-time-machine

These themes are available in the "Theme Chooser" under
"GitHub Pages" in the repo settings. When you select a theme
using this method, GitHub automatically creates a `_config.yml` file
and set the `theme` field.

Most of these themes are not developed to be used for blogging purposes.
They lack functionality to generate posts and handle posts pagination.
Out of the themes in this list, Minima is probably the most feature complete
as it is the default theme, with development supported by Jekyll directly.
However, your GitHub Pages website will look like many out there.

## Remote Themes

This method requires the [Jekyll remote theme plugin][jekyll-remote-theme].
This plugin is included with GitHub Pages and installed together
with `github-pages` [gem][gh-pages-gem].
(Please read my [previous post][jekyll-gh-pages]
to understand how this gem works.)

With the Jekyll remote theme plugin installed
(either individually or with `github-pages` gem),
set up the remote theme configuration in the `_config.yml` file.

```yaml
# _config.yml
remote_theme: minimal-mistakes
```

Pros

- Simple to set up
- Many themes are available on GitHub
- Theme development and maintenance managed by theme author

Cons

- Long build time due to downloading of theme files on build
- Customisability depends on theme
- Only work for themes published on GitHub

In my opinion, the remote theme method offers the best balance
of selection, customisability and complexity.
I am using this method to use the [Minimal Mistakes theme][minimal-mistakes].
The remote theme method is applicable to any theme
that is hosted on GitHub, this means a large number of themes are available,
even it is not a gem. However, do take note that pay attention to
whether themes are still being maintained or meant to be used this way.

## Regular Themes

The regular theme method is the most raw and complex method.
When you fork the repo of a Jekyll theme to start your GitHub Pages,
you are inadvertently using this method.

To better understand how this method works, it is a good idea to
go through the [Jekyll documentation][jekyll-docs].
In essence, you are required to set up the following
4 folders and their associated content.
These set the theme page layouts, appearance and functionality.

- `/_includes`: HTML components used in page layouts
- `/_layouts`: HTML page layouts
- `/_sass`: SASS files for page styling with CSS
- `/assets`: other static assets for the theme

Pros

- Allows for any customisation you want
- Can be easily started by cloing a GitHub repo of a Jekyll theme
- No external dependency

Cons

- Requires understanding of theme authoring
- Customisation requires knowledge of static website development
  with HTML, CSS, JS, Liquid and Jekyll

I do not recommend using the regular theme method to set up
theme for your Jekyll website, unless you know what you are doing.
Unfortunately, many theme authors lazily suggest to start using the theme
by cloning the GitHub repo.
The primary problem with this method is that any updates to the theme
need to be merged into the user repo manually by the user.
This gets complicated really quickly,
especially if you have made customisation to the theme files.
Another issue is that the user Jekyll project may be polluted by
many theme files that is not required and clean up is needed.
However, this can only be done only when
the user is somewhat familiar with Jekyll theme authoring.

While exploring theme configuration, I was initially attracted to
author my own theme to get my unique look and feel.
However, as I went deeper into the rabbit hole, I discovered
that it gets very complicated really quickly.
Hence, this is really not a good idea unless you are a proficient
website developer familiar with HTML, CSS and JS.

## Conclusion

There are 3 methods to set up Jekyll themes.

- Gem-based theme
  - Sufficient for simple needs such as project documentation
- Remote theme
  - Recommended for blogging with Jekyll
  - Best balance between selection, customisation and complexity
- Regular theme
  - Not recommended, unless familiar with Jekyll site development

I hope I have helped the reader better understand the underlying
workings of setting up Jekyll themes.
This shall conclude the sharing of my journey into setting up
my blog with Jekyll on GitHub Pages.

Thank you for reading!

My other post on Jekyll and GitHub Pages.

- [Understanding Jekyll and GitHub Pages][jekyll-gh-pages]

## References

- [https://help.github.com/en/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll][gh-pages-docs]
- [https://pages.github.com/themes/][gh-pages-themes]
- [https://jekyllrb.com/docs/themes/][jekyll-docs]

[gh-pages-docs]: https://help.github.com/en/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll
[minima]: https://github.com/jekyll/minima
[gh-pages-themes]: https://pages.github.com/themes
[jekyll-remote-theme]: https://github.com/benbalter/jekyll-remote-theme
[gh-pages-gem]: https://github.com/github/pages-gem
[jekyll-docs]: https://jekyllrb.com/docs/themes
[jekyll-gh-pages]: /blog/understanding-jekyll-and-github-pages
[minimal-mistakes]: https://mmistakes.github.io/minimal-mistakes
