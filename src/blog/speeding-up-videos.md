---
title: Speeding Up Videos
date: 2019-02-12 09:11:17
type: post
blog: true
excerpt: A handy trick to know in the event you ever need to want to watch a video faster than 1x on your machine with no plugins required.
tags:
  - JavaScript
  - Productivity Hacks
---

## Introduction

When it comes to watching videos or listening to audio, I'm one of those people who prefers to listen to them at a faster speed. On a good day when I have a clear head, I can watch or listen to things from two to three times as fast depending on how fast the speaker is. This is a huge boost productivity wise since I am basically cutting the estimated time of a task roughly in half.

While most platforms that I use these days include a way for you to change the playback speed, it is not always available to you to fiddle with. Sometimes you need to watch something that's on your computer with QuickTime or the video player on a web page doesn't have playback speed controls. So all is hope is lost... or is it?

## The Path to Faster Videos

One of the things that I am most grateful for as a developer is the nagging voice in my head that insists that there must be some hack to get what I want to happen. It might not be elegant, but there must be a way to achieve my goals. And as a child of the web, I knew the that the HTML video player was the key to making this all work.

### Requirements

The only requirement you need for this trick is to have your video playing with the "new" HTML5 `video` element. So whether creating a simple `index.html` page on your machine to load the player:

```html
<html>
	<body>
		<video src="./your-video.mp4" controls />
	</body>
</html>
```

Or verifying that the video player on the website you're on is using the `video` element, that's all the setup you need for the next step.

### The Trick

In case you weren't aware, the `video` element has an inherent property on it that determine the playback speed called `playbackRate`. So by using a little bit of JavaScript, we can alter the speed of the video with a simple line of code.

1. Open up the `JavaScript Console` in your browser of choice
1. Run the following line of code with the necessary modifications:

```js
document.querySelector('video').playbackRate = 2.0
```

That's it! Now you can watch videos as fast as you want!
