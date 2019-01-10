---
title: The Hyper Key
date: 2019-01-09 23:52:04
type: post
blog: true
excerpt: For someone like me who is obsessed with being incredibly fast with accomplishing simple tasks, I have come to learn that the quickest way to get anything done is to reduce the number of steps required it takes to accomplish the task.
tags:
    - Productivity
    - Workflow
    - Efficiency Hacks
---

For someone like me who is obsessed with being incredibly fast with accomplishing simple tasks, I have come to learn that the quickest way to get anything done is to reduce the number of steps required it takes to accomplish the task. So for developers, the simplest measure for this would be the number of keys / clicks / actions required to complete the task. And there is no better technique than macros for maximizing this efficiency.

## Quick Review: Macros

Macros are basically keyboard shortcuts for some function on your computer. For example, when you hit `Cmd/Ctrl + C` after highlighting text, that is a keyboard shortcut to execute the copy function. What a lot of people don't know is that you can create custom shortcuts for your own workflow and do some pretty nifty things. More on that in another post though!

## A Common Issue with Macros

When you are creating your own macros, the hardest part comes with figuring out how things map mentally so you actually can create the muscle memory to execute whatever common task it is. So for example, the macro for printing in most applications is `Cmd/Ctrl + P`. Most people find this pretty easy to remember because:

1. Print starts with P 
2. Command is a common macro key to pair with
3. Only requires you to remember two keys

However, when you start down the road of creating custom macros, you will realize that the keyboard shortcuts you want to create are usually taken by other applications. For example, if you wanted a keyboard shortcut to open Chrome in two keypresses, `Cmd/Ctrl + C` seems to make sense, but we all know that's the copy macro. As a result, you run the risk of either having your macros both fire or things not working at all (depending on the severity of the collision).

So in order to prevent that from happening, then you have to explore using combinations of keys like `Alt`, `Shift`, or `Windows / Ctrl` (depending on your OS) to create unique macro commands. Unfortunately, as you increase the number of keystrokes required for a macro, the less likely it is that you'll use it because it can be hard to hit quickly and reliably. 

## Enter the Hyper Key

So when it comes to key combinations for macros, there is nothing more unique than:

- `Cmd + Alt + Ctrl + Shift + ${desiredKey}`

After all, can you imagine a UX designer proposing that a software requires a user hit five keys simultaneously in order to execute something? 🤣 However, because it is something that no application would ever do, this gives us the opportunity to create an entire set of keyboard shortcuts without any fear of collision.

> Wait... so you want me to hit all five keys at once?

Don't be silly. Remember that I'm obsessed with speed and having to hit more than two keys for a shortcut that I use frequently would drive me insane. I'd never do it. 😆 That said, what I'm proposing is that you hit **one** key which simultaneously hits `Cmd + Alt + Ctrl + Shift` all at once. 🤯

That's right. We are going to "create" a hyper key! 

## How I Created My Hyper Key

Since you can't just add a new key to your keyboard, this means that you have to choose a sacrificial key that is also easily accessible. For example, making my `Esc` key be the hyper key would be rather awkward because my left pinky finger would have to stretch awkwardly to access it every time and there's a decent risk of hitting the wrong key.

While there might be some who disagree with me, the `Caps Lock` key is pretty useless to me since I rarely type in all caps (and if I need to it's not that inconvenient to hold down the `Shift` key). So it was an easy choice for me to sacrifice it for my new hyper key.

Once you've chosen your sacrificial key, the key thing is to reprogram it using [Karabiner-Elements]([https://pqrs.org/osx/karabiner/](https://pqrs.org/osx/karabiner/)). This allows you to program any key to do different key combinations in a pretty straightforward manner.

::: warning SORRY 😞
Unfortunately I don't have a good guide for this on PC yet, but will be sure to release another post when I do.
:::

I'll come out with a more detailed tutorial in the future, but at a high level:

1. Download and install `Karabiner-Elements`
2. Open `Preferences`
3. Select the `Complex Modifications` tab
4. Click `(+) Add rule` in the lower left corner
5. Click the `(+) Enable` button next to "Change caps_lock to command+control+option+shift"
6. All done!

::: tip
If you are having issues with the hyper key, assign "No Action" to the `Caps Lock` key via your macOS Keyboard preferences under Modifier Keys.
:::

## How I Use My Hyper Key

Currently my hyper key primarily serves as my launch point for common applications I use:

- `Hyper + C`: Chrome
- `Hyper + V`: VS Code
- `Hyper + I`: iTerm 2
- `Hyper + N`: Notion
- etc.

It also helps me to position windows on my desktop through the [Magnet](http://magnet.crowdcafe.com/) app. 

- `Hyper + Right Arrow`: Right 50% of the screen
- `Hyper + Left Arrow`: Left 50% of the screen
- `Hyper + Up Arrow`: Top 50% of the screen
- `Hyper + Down Arrow`: Bottom 50% of the screen

So with two key strokes, I can position my window anywhere I need it to be with minimal effort. Or switch to an application that I use very frequently.

## Next Steps

Of course, the next thing you'll want to do is to create macros with your new hyper key. I'll write more on this in the future, but in case you want to do some research on your own, be sure to check out [Keyboard Maestro]([https://www.keyboardmaestro.com/main/](https://www.keyboardmaestro.com/main/)). Till next week's edition of Wednesday Workflow!
