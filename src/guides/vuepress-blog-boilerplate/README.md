---
sidebar: auto
---

# VuePress Blog Boilerplate

## Introduction

Welcome to my guide on how to use the [VuePress Blog Boilerplate](https://gitlab.com/bencodezen/vuepress-blog-boilerplate/)! The purpose of this project is simple: 

> Allow a developer to started a blog with VuePress and deployed within 15 minutes.

Piece of cake right? Well time's a wasting, let's get to it!

## Getting Started

### Requirements

- [NodeJS >= 8](https://nodejs.org/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/) (Optional)

### Installation

Navigate in your terminal to the desired directory where you want this project to live.

```bash
# Clone the repo
git clone https://gitlab.com/bencodezen/vuepress-blog-boilerplate.git

# Change directory into project
cd vuepress-blog-boilerplate

# Install dependencies
yarn # OR npm install

# Run local server
yarn dev # OR npm run dev
```

## Tutorials

### Writing Posts

1. Create a Markdown file (`.md`) in the `./src/blog` directory
2. Use the following frontmatter template to provide meta data about your blog post
```yaml
---
title: Title of Your Post
date: 2018-12-23 21:04:07
type: post
excerpt: This is the snippet that will show up on the home page as preview text
tags:
    - HTML
    - CSS
    - JavaScript
---
```
3. Write your blog post using regular Markdown, [extensions](https://vuepress.vuejs.org/guide/markdown.html), and [Vue.js](https://vuepress.vuejs.org/guide/using-vue.html)!

Once you're done, you can expect the home page to automatically generate a `<BlogPostPreview>` component with the meta data you provided along with a link to the blog post itself.

#### Scheduling Posts for Future "Publishing"

This blog theme currently allows you to set future "publish"* dates via [ISO-8601 format](https://en.wikipedia.org/wiki/ISO_8601) (i.e., YYYY-MM-DD hh:mm:ss).

* Note: Your blog posts will technically be available, but the posts preview will not be surfaced on the home page and users will only be able to see your posts if they know the exact URL.

### Deploying Your Site

I recommend using [Netlify](https://www.netlify.com/) to deploy your VuePress site.

A more thorough guide to come, but as far as a high level overview of the steps you need to take:

1. Create an account with Netlify if you don't already have one
1. Create a "New site from Git"
1. Connect your blog repo through the create a new site wizard
1. Setup "Build & deploy" settings with the following settings:
    - **Build command**: `npm run build`
    - **Publish directory**: `public/`

## Site Configurations

### Configuring Your Site

You'll want to checkout `./src/.vuepress/config.js` if you want to update the following information:

- Site Title
- Google Analytics ID
- Repo Location
- Repo Label in Navigation
- Edit Page Link Text
- Top Navigation
- Favicon: Use [favicon-generator.org](https://www.favicon-generator.org/) to generate icons and simply replace all the files in `./src/.vuepress/public` and your favicon should just show up!

## FAQs

### Why VuePress?

Many are probably wondering why use VuePress? After all, there are a ton of tools out there already built and optimized for blogging aren't there? And you would be absolutely correct! But in my work with VuePress so far, I found the engine quite powerful and intuitive to how I wanted to be able to write:

- Static site generator
- Minimal setup with markdown-centered project to help you focus on writing
- YAML Frontmatter for managing page specific meta data
- Use Vue components in your markdown content
- Develop custom themes with Vue
- Integrated markdown extensions that make the writing experience even easier. Examples include:
    - [Custom containers](https://vuepress.vuejs.org/guide/markdown.html#custom-containers)
    - [Code syntax highlighting](https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks)

And since it seemed like this was something other people wanted to do, I figured I would go ahead and see how far I could take this. 

### Why is this separate from the VuePress repo?

As many of you might have experienced in the past, getting PRs reviewed and integrated into an existing open-source project is fairly difficult to do. And this is by no means the fault of the maintainers, there's just a lot going on and people clamoring for attention. So rather than have my work hidden from the world while it sits in a PR, my goal is to:

1. Keep updating this repo and guide so that people can make use of it and create content
2. Integrate the latest changes from the core VuePress repo in order to ensure the work is not duplicated 
3. Submit PRs until this page will become an artifact of the past and everything will live in the core VuePress docs itself.

## Hat Tip

For those familiar with the [Vue.js](https://www.vuejs.org) ecosystem, you might be reminded of [Chris Fritz's](https://www.twitter.com/chrisvfritz) [Vue Enterprise Boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate) and you would be absolutely right. I thought the concept was brilliant and wanted to do something similar for the [VuePress](https://vuepress.vuejs.org) ecosystem since blogging is something that still requires a fair amount of configuration and knowledge in order to get started.

And in case you didn't know, Chris Fritz is one of the core contributors to the incredible [Vue.js docs](https://vuejs.org/v2/guide/) that we are love so much. So if you would like to help support him so he can spend more time on creating awesome content for the Vue.js community, please support him by [becoming a sponsor on Patreon](https://www.patreon.com/chrisvuefritz). 
