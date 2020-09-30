---
title: TL;DR What is VuePress?
date: 2020-09-30 16:22:02
excerpt: In the inaugural post for the TL;DR series, I'll be writing about one of my favorite tools, VuePress!
tags:
  - vuejs
  - static-site-generator
  - documentation
  - vuepress
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/iRhRdY7SQJg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

Hey everyone! Welcome to the inaugural episode of the TL;DR series, where I'll be writing about one of my favorite tools: VuePress!

## What is VuePress?

VuePress is a static site generator with a Vue powered theming system optimized for technical documentation. That is quite a mouthful, so let's break that down.

### VuePress is a static site generator

Without getting into too much detail, if we're using a pure JavaScript framework approach, users typically receive a single div on the page that relies on JavaScript to populate the content. While this is incredible from a technological perspective, it is primarily useful for content that is dynamic and changes frequently.

However, when it comes to websites where content is consistently available (e.g., documentation), it would be better if users were delivered the content directly rather than waiting for JavaScript to populate it. Static site generators allow us to deliver a website that already has most (if not all) of its contents already rendered on the page.

Some of you are probably thinking, aren't there a ton of those already? And you'd be right. As a result, in order to understand what makes VuePress unique, we have to focus on another part of the definition. And that is the fact that VuePress is **optimized for technical documentation.**

### VuePress is optimized for technical documentation

What does this mean exactly? Well VuePress comes with a default theme that is full of features that are important to the success to any good docs site. Let's take a look at some of these features:

- Responsive theme so users can view your docs on any device
- Headers are automatically linked so users navigate to a specific section
- Automatic maintenance of when the page was last updated so your users always know how recent the information on the page is
- Easy one click pull request links to makes it incredibly easy for readers to provide feedback or contribute back to the docs to make them even better
- And as if that wasn't enough, VuePress even comes with a built-in search engine that requires no backend at all.
- You get all of this, with little to no configuration needed.

And while this is great for users visiting site, we all know that at the end of the day, the docs will ultimately be judged by whether the content is up to date or not. This is why VuePress is also designed to ensure that maintainers have a first class experience.

### VuePress is also optimized for a maintainer-first experience

One of the great things also about VuePress is that it can live side by side with your code. This means that when developers are issuing pull requests, it becomes that much easier to make sure documentation stays up to date.

- Because they live in a repo, all your docs are version controlled
- All of your docs are managed with Markdown
- Built-in extensions for enhanced markdown writing experience such as frontmatter support, custom containers and code syntax highlighting
- Extensible theme API so you can make your docs look the way you want
- Plugin API to extend functionality according to your project's needs

And as if that wasn't enough, this bring us to the last piece of our VuePress definition: and that is that VuePress is powered by a Vue theming engine.

### VuePress is powered by a Vue theming engine

While this comes with the benefit of managing layouts and such with Vue, this also means that you get to supercharge your Markdown files with:

- Interpolation of variables inside of your markdown files
- Adding Vue components to your Markdown files to give your docs an extra boost of interactivity

## Final Thoughts

Even though the project is called VuePress, this does not mean it's only suited for projects that use Vue. Projects such as Netlify, XState, and CraftCMS all have used VuePress to power their docs.

To get started, check out the official docs at [vuepress.vuejs.org](http://vuepress.vuejs.org/).
