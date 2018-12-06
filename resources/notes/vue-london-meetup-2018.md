---
title: Vue.js London Meetup 2018
date: 2018-09-19 19:20:10
---

# State of the Vuenion (and how to contribute) by [Chris Fritz](https://www.twitter.com/chrisvfritz)

It’s a great time to be a Vue developer! Vue CLI 3 and VuePress have been released. Vast improvements were added to the devtools, ESLint plugin, and newsletter. Between it all, it’s never been easier to quickly build robust apps that automatically follow best practices. In this talk, you’ll learn more about what’s new, how you can use these features, and how you - yes, you - can contribute to making the Vue ecosystem even better.

## Agenda

1. Now released
2. Coming soon

## Now released

- Vue CLI 3: How is it different?
  - Instead of things being based on templates, they based on plugins
    - But it is still configurable
  - Webpack requires a fair amount of knowledge to make changes
  - With new projects created by VUe CLI 3, you don't have to maintain anything!
  - All you have to do is upgrade your plugin and it will make sure everything is working together properly!
  - Never needed to eject in his experience with various enterprise level applications
  - Webpack Chain allows you to make detailed modifications within a webpack file
  - `vue ui`
    - Allows you to do a lot of the same things you wanted to with a command line
    - But it also gives you an overview of how your project is doing
    - Great way to manage your plugins and even explore new ones!
    - It will revolutionize your expectations of what you should expect from a developer environment
- Build your own plugins
  - https://cli.vuejs.org/dev-guide/plugin-dev.html
- eslint-plugin-vue
  - `no-unused-components` as a way to check whether the component is being used anywhere
  - You can submit your own rules at github.com/vuejs/eslint-plugin-vue/issues
- Improvements to news.vuejs.org
  - Searchable stories within the official Vue.js newsletter
  - You can browse by tag
  - Submit a story at news.vuejs.org/submit
- There is also a podcast!
  - A five minute recap of the newsletter
- VuePress
  - docs framework
  - sounds like WordPress, but it's not for blogging (yet!)
  - Quickly build beautiful docs
  - Adopted by communities outside of the Vue.js community
  - All it is is Markdown, JavaScript and Vue

## Coming soon

- Vue Directives in JSX
  - In the past, you'd do something like `<input onKeydown={this.save}} />`
  - You'll be able to do `<input vOn:keydown_enter_prevent={this.save} />`
- DevTools Improvements
  - Routing Tab: History
    - Allows you to see your routing history and see what params and options were passed
    - This helps you see what happened and how you ended up where you are
    - You can also see all of the routes rthat you've defined / dynamically defined
  - Performance Tab: FPS
    - Let's you inspect information about events
    - Component render times
  - Editable data/state
  - The DevTool is also a Vue app! :mind-blown:

## Vue Sprints

- About
  - 1 week
  - 1 place
  - 1 focus
- First one was in August 2018 on tooling in Wroclaw, Poland
- Support more sprints at opencollective.com/vuejs

## Notes

- Competition for animation of 3D Vue London logo
- "How many people enjoy modifying Webpack files? Okay. 3-5 masochists."

# Engaging Native Mobile Apps with Vue and NativeScript by [Jen Looper](https://www.twitter.com/jenlooper)

Do you have a beautiful website built with Vue? Great! Now you need a mobile app to engage your users even further. Alternatively, better yet, you need to offer different, yet complimentary functionality, while retaining shared code between your website and mobile app. Welcome to the beautiful world of Vue and NativeScript, which, paired together on the web and mobile, make for great user experience.

In this talk, you’ll learn about my experience building Elocute, a web app for language teachers with a paired mobile app that students use to perfect their spoken language skills. You’ll discover how to build for the web and mobile platforms using NativeScript and Vue, making the most of the best of both platforms - data entry on the web, and speech-to-text on mobile. Let’s learn about how Vue can be used to build for the web and mobile apps, sharing the love.

## Notes

- NativeScript is a way to build mobile apps with JavaScript
- You can use Vue.js with it now!
- Why Vue?
  - Vue's 2.0 adoption of the virtual DOM enables native mobile rendering
  - Offers a great way for web developers to embrace mobile platforms
  - Vue is lightweight and thus highly appropriate for mobile
  - There is great code-sharing potential between Vue and NativeScript
- How does NativeScript work with Vue?
  - You use `nativescript-vue` instead of the normal `vue` package
  - Bootstrapping the app is a little different
  - The templates are different since NativeScript has modules that let you build what you need since it's not the same web DOM elements that you are familiar with. It's fairly straightforward though.
- Check out the play.nativescript.org to play around with the app
- Used the Elocute app as a case study for the integration of mobile and web apps

# Focusing on Focus by [Chris DeMars](https://www.twitter.com/saltnburnem)

When we think of CSS and Accessibility, what comes to mind? Is it adding alt attributes to image tags? How about colour contrast? Is `:focus` given that much thought since browser's style these by default? Often, focus outlines are turned off in CSS to meet non-inclusive design standards, but this causes problems for keyboard users. How can we make the web a more inclusive place while maintaining design intent?.

As we build more and more things on the web, we must do our part in building excellent, accessible user experiences. Except native default browser styling of the `:focus` pseudo-class is rather blah, don't you think? There has to be a better way to add some pizzazz to elements when users navigate without a mouse. In this talk, demoing numerous ways to provide custom focus styles despite known limitations in the web platform. For users with disabilities, it's imperative that visual design finds a way to meet in the middle.

## Talk

- Phenomenal video by Apple on accessibility and the impact of applications
- "We're building applications for everyone. Not just for me."
- Michael Supa was hired to help IBM build software...
- Why do you care so much about accessibility?
  - Because he wants to make things his mom can use
  - Find out what your own why is
- Tales from the Script Podcast - @taleftscript
  - If you want to be on it
- "It's like security. You don't wait to bake it in at the beginning. It starts at the inception of the product."
- Numeronym is where you take the first letter and the last letter, and you put the number of letters together for #a11y #i18n
- What is accessibility?
  - "Web accessibility means that EVERYONE can use the web"
  - "The web is **not** a barrier to people with dsiabilities, it is the **solution**."
- What happens when we don't think about accessibility?
  - You get sued
  - Great infograph of "Federal Website Accessibility Lawsuits by State in 2017"

## Let's Talk About Focus

- Why do we need focus?
  - Great example of macular degeneration
- Developer vs Designer
  - Could you just remove it? But what are you going to do replace it?
  - Don't ever just remove the outline of focus to zero. You're removing it for everyone.
  - Even Eric Meyer's reset styles tells you to define the focus styles
- :focus-ring is supposed to be the same as :moz-focus-ring
  - It's now :focus-visible
- Importance of Focus
  - There needs to be a way for people to navigate the experience and know what they are doing
  - Login and password inputs are a great example of this
  - It indicates where you are and what your'e doing
  - "Any keyboard operable user interace has a mode of operation where the keyboard focus indicator is visible."
- Demos of Browsers and How They Handle Focus

  - Great demo of the browsers and how they handle mouse and keyboard focus

- Love the typography he uses
- The slides are very simple

- Personal anecdote about his mom is super powerful
- "If you can't raise your hand, nod."
  = "The developer community is the reason I'm here."

- Check out Chris DeMars website
- Tales from the Script Podcast - @taleftscript
  - If you want to be on it
