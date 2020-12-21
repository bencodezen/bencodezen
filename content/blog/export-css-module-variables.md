---
title: 'Export Variables from CSS Modules into SFCs'
date: 2020-12-20 23:13:35
type: post
blog: true
excerpt: 'Did you know you could export variables from CSS modules into the rest of your component?!'
---

One of the things that's always been tricky about striking the right balance between leveraging JavaScript and CSS together is the fact that often JavaScript can dictate how CSS works, but it's rarely the other way around.

Well I'm here to drop some knowledge because with CSS Modules you can totally do this!

```vue
<template>
  <p>Grid Padding: {{ $style.gridPadding }}</p>
</template>

<style module>
:export {
  gridPadding: 1.5rem;
}
</style>
```

And just like that, you now have access to any property you defined within the `:export` selector. Imagine the possibilities!
