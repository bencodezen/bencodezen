---
title: 'Tutorial: Vue 3 Apps with DevTools'
date: 2020-10-21 19:24:37
excerpt: Since Vue DevTools is still in beta for Vue 3, rather than wait for the next publishing cycle to get the latest update, being able to setup DevTools locally can be a life saver. In this video, I'll be going over how to setup Vue.js DevTools from scratch.
tags:
  - vuejs
  - vue3
  - devtools
  - chrome
  - extensions
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/mOtyuLj0ExI
" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

## Introduction

What's up everyone? Today I am here to talk with you about something near and dear to almost every Vue developer's hearts. DevTools.

While most people typically install the Vue DevTools, currently the support for Vue 3 is still in development, so this makes it a little bit trickier since sometimes the build won't work.

As a result, it may be faster to build the latest version of DevTools locally rather than wait for the next publishing cycle

There is a [beta version in the marketplace](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en), but in the event you're having issues with it detecting your Vue instance on a Vue 3 CLI scaffolded project, this

## Prerequities

Before we get started, you should have the following prerequisites:

- Node.js LTS (v12) - https://nodejs.org/en/
- yarn Classic - https://classic.yarnpkg.com/en/docs/install/#mac-stable
- Chrome - https://www.google.com/chrome/
- Vue CLI - https://cli.vuejs.org/
- Vue.js DevTools - https://github.com/vuejs/vue-devtools

## Setting Up Vue DevTools

To get setup, run the following commands:

```bash
# Install dependencies
yarn

# Build dependencies
yarn build:watch
```

From this point, we have two choices:

1. Setup a local development environment
2. Setup local Chrome extension

### Setup Local DevTools Development Environment

Once our dependencies have built, all we need to run a local DevTools environment is to run:

```bash
yarn dev:shell-vue3
```

Once you run this command, you will be given a URL (default http://localhost:8090) that will serve the `shell-vue3` application to test the DevTools with.

### Setup Local Chrome Extension

However, the primary purpose of this tutorial is to show you how to setup a local Chrome extension so we can connect it with other Vue 3 apps!

Assuming you still have `yarn build:watch` running, you can do the following steps:

- Start local Chrome extension environment: `yarn dev:chrome`
- Open Chrome
- Go to Extensions
- Turn on "Developer Mode"
- Click "Load unpacked"

Setup Vue 3 app
Show Vue Devtools connected!

## Final Thoughts

And with that, you're now fully equipped to not only run Vue.js DevTools locally with your Vue 3 app; but you can also contribute back to the project if you want as well!
