---
title: Why I Still Use Sass
date: 2018-01-24 09:40:57
type: post
blog: true
excerpt: Recently I've been going back and forth on whether or not it was time for me to return to pure CSS land. With my recent foray in CSS Grid, CSS Variables, and Scoped CSS, there was a serious moment where I considered just going to CSS + PostCSS for all my styling going forward.
---

## Background

Recently I've been going back and forth on whether or not it was time for me to return to pure CSS land. With my recent foray in CSS Grid, CSS Variables, and Scoped CSS, there was a serious moment where I considered just going to CSS + PostCSS for all my styling going forward.

There was even a tweet around this time by [@danabramov](https://www.twitter.com/dan_abramov) which seemed so timely to my internal dilemma on what to do:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Why do people love Sass so much? What I see when considering integrating it: segfaults that drag for months with no solution (<a href="https://t.co/JazCmdDakE">https://t.co/JazCmdDakE</a>), native crashes (<a href="https://t.co/FI5RzmZhdH">https://t.co/FI5RzmZhdH</a>), wrong binaries (<a href="https://t.co/xsc6QgbkuK">https://t.co/xsc6QgbkuK</a>), path issues (<a href="https://t.co/4flMs9b9wJ">https://t.co/4flMs9b9wJ</a>).</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/952639729777954816?ref_src=twsrc%5Etfw">January 14, 2018</a></blockquote>

And while I've used Sass for most of my career, I couldn't help but see his point with the amount of issues I've seen with integrations. Coincidentally, I had also ran into an issue with a Vue app I've been working on where a nested component with Sass partials was causing the entire Webpack to freeze and stop working. What made it even worse was that there was no error indicating this and diagnosing this was an absolute pain.

In other words, I saw his point.

## Why I Still Use Sass

After experimenting with leaving Sass behind though, I realized that while CSS has made some phenomenal strides in the past couple years, there are still things about Sass that are worth all the hassle.

### Nesting

This is one of the more controversial topics of Sass because it is often used and abused some of the most awful ways. However, that doesn't automatically discredit the entire value of a feature just because it's easy to use and people are using it incorrectly.

With that said, let's get into the crux of why this feature is my #1 reason for using Sass.

#### Code Organization

Especially with the advent of naming techniques like BEM and ITCSS, it's incredibly useful for managing entire components and their respective states without retyping the same thing over and over again.

```scss
.my-class {
    ...

    // .my-class__date { ... }
    &__date { ... }

    // .my-class__list { ... }
    &__list { ... }

    // .my-class__title { ... }
    &__title {
        ...

        // .my-class__title:hover
        &:hover { ... }
    }
}
```

Just to illustrate my point, here's the CSS version:

```css
.my-class {
  ...;
}
.my-class__date {
  ...;
}
.my-class__list {
  ...;
}
.my-class__title {
  ...;
}
.my-class__title:hover {
  ...;
}
```

Now if I need to rename the root name, all I need to do is change one line of code. So you see? This is a DRY way of keeping an almost flat CSS Specificity Graph while respecting CSS Architecture practices. Why would you want to do it any other way?

In addition, the ability to keep my media queries within the proper selector is huge for me when it comes to keeping track of things.

```scss
.my-class {
    &__date {
        ...

        @media (min-width: 480px) { ... }

        @media (min-width: 676px) { ... }

        @media (min-width: 1024px) { ... }
     }
}
```

If I had to do this the normal CSS way, it'd look like this:

```css
.my-class__date {
  ...;
}

@media (min-width: 480px) {
  .my-class__date {
    ...;
  }
}

@media (min-width: 676px) {
  .my-class__date {
    ...;
  }
}

@media (min-width: 1024px) {
  .my-class__date {
    ...;
  }
}
```

In fact, my point here is no different than the argument being made for CSS-in-JS when you have your `style` block in your JS component in order to allow easy debugging so you don't have to track down 41 different partials that compile into the style for one component.

### Variables

> Wait a second... didn't you just say you use CSS Variables now?

Yep. I absolutely ❤️ CSS Variables and will be using it on all my projects going forward. However, there is one thorn in my side that I'm not able to get rid of just yet: **Internet Explorer 11**.

If you don't believe me, check out [Can I Use: CSS Variables](https://caniuse.com/#feat=css-variables) and you'll see there is zero support for it. So, to ensure that my projects can gracefully degrade, I still need to manage my color palettes in a sane way and Sass allows me to do that.

### Mixins & Extends\*

While these aren't critical to my workflow, they are a nice to have and have proven to be useful for helping to maintain DRY code within CSS. The most common example I tend to use is creating mixins for media queries which helps to reduce the amount of typing I have to do.

\* for the `@extend` haters, I am very well aware of the many ways this could be used poorly; but I am conscious of how it actually works and only use it in very specific conditions.

## Final Thoughts

I will say that my general sentiment on this topic is contingent on the fact that your code base is relatively large to maintain and if you have to support older browsers that don't some of the bells and whistles that CSS now provides. Otherwise, for smaller projects who don't need IE11 support, I think that there's little reason to use Sass since the level of effort to use it is a bit more work than needed.

And regardless of which one you choose, I can tell you this much, PostCSS is definitely here to stay for me. There's no amount of money that you can pay me so that I can go back to the days where I had to manually configure my prefixes on styles depending on the browser I'm supporting.
