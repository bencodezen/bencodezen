---
title: TL;DR What I'm Excited for in Vue 3
date: 2020-10-07 13:52:10
excerpt: For the second episode of my TL;DR series, I'll be talking what I'm excited for in Vue 3!
tags:
  - vuejs
  - static-site-generator
  - documentation
  - vuepress
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/w_wGpI9DM-E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

## Introduction

What's up everyone? For those who might not have heard the news, Vue 3 is now production ready! So for this episode of TL;DR, let's talk about some of the things I'm excited about in Vue 3!

## Fragments

For those of us who have used frameworks for a little while now, there is an error that's pretty consistent across frameworks: The template requires exactly one root element.

As a result, many of our components ended up being wrapped in a div, which a lot of web apps ended up with random div elements polluting the web page for no reason other than to satisfy this one restriction.

Thankfully, Vue 3 introduces the concept of fragments, which means we will be able to have multiple root nodes in our components now!

Using our last example, this means we can now eliminate the wrapping div and this will be perfectly valid code. Huzzah!

## Teleport

The next feature I'm stoked about is the new teleport component.
What is the teleport component exactly?

Well, there are times when a component is responsible for controlling certain logic or state, but it may not necessarily make sense for it to render and thus be coupled with the template of the SFC. Examples of this include modals and notifications.

In the past, this was difficult to manage and though people found ways to hack around it, it was less than optimal to say the least.

With the teleport component, you will be able to organize your code while still allowing it to render in the appropriate location on the site.

## Composition API

For those who have been following Vue 3's development, it should be no surprise that of course Composition API must be mentioned.

In case you haven't heard, the Composition API is a new technique that allows developers to manage code in the applications by providing developers another way to share code and/or state amongst components by compose features together.

It is an enhancement to the current Options API and should not be considered a replacement. With this new ability ability and freedom, it's important to remember that the Composition API will not magically make your code better. In other words, because it gives you the freedom to compose features together, this means that the responsibility of good software architecture is on you when using it.

## Emits Component Option

One of the best things I loved about Vue was the ability to easily define props and document them so it was easier for other developers to understand how to use it.

However, this was always a bit lacking when it came to emitting events since it lacked a single source of truth and you had to jump around the code to figure out how emitted events worked.

With this in mind, it's not surprising that this led to some proponents of passing callbacks as props rather than emitting events even though this could blur the lines of clear separation of concerns.

Thankfully, in Vue 3, rather than trying to figure out how the emitted events work, they can now be defined inside the component definition to provide better documentation!

## State Driven CSS Variables

One of the challenges of working in applications is that there are times when you need styles to be managed via JavaScript as far as things like color variables and such.

One of the things that we love most about Vue is managing our code through SFCs, but this created a challenge when we wanted to manage the state of styles through JavaScript, such as what color a user prefers, there was no easy way to communicate what was tracked in JavaScript to CSS.

Though it is still in an experimental phase at the time of this recording, a new feature that is most likely coming to Vue 3 is the ability to inject state from JavaScript into your CSS blocks!

## Conclusion

If you want to learn more about what new features and changes in Vue 3, be sure to check out the official Vue 3 migration guide. Thanks for watching!
