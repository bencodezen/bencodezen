---
title: The Importance of Fundamentals (No Matter How "Experienced" You Are)
date: 2017-08-18 14:30:31
type: post
blog: true
excerpt: "As a self-taught developer, I've hit a couple of key milestones in my career: (1) managing to get a job in the field without any formal training and (2) proving that I was able to keep up with everyone and push forward regardless of the challenges in front of me. That said, there is always a question of what to do next. New framework? New language? New technology stack?"
---

As a self-taught developer, I've hit a couple of key milestones in my career: (1) managing to get a job in the field without any formal training and (2) proving that I was able to keep up with everyone and push forward regardless of the challenges in front of me. That said, there is always a question of what to do next. New framework? New language? New technology stack?

Contrary to the obvious choice of learning something completely new, I like to spend time going back to see what new resources have come up for new developers. Whether it is new tutorials or seeing what the curriculum  for online programs like Udacity are, Taking a page from my martial arts background, I find that there is one thing I can never spend too much time on: **fundamentals**.

<!-- more -->

When you are building something, especially if it is under a deadline, your goal as a developer is often one thing: *get it to work*. Once it works, if you're lucky, you'll have some time to refactor your code a bit and maybe you'll even document some of your work. More often than not however, you have moved on to the next deadline and the cycle continutes. However, the problem I have seen with this is that it often leads us to bad habits in how we code.

For example, imagine a developer who has spent years coding asynchronous code with the infamous callback hell method:

```js
getData(function (a) {
    getMoreData(a, function (b) {
        getEvenMoreData(b, function (c) {
        	...
        });
    });
});
```

And let's be honest, it works right? So as far as most of the department is concerned, Developer X is doing a great job getting the job done. However, as most are aware, JavaScript has moved on to bigger and better things like Promises:

```js
axios.get(url)
	.then(getMoreData(response))
	.catch(showError(error))
```

Or for those even more cutting edge, async/await!

```js
async function asyncIsAwesome() {
	const data = await axios.get(url)
	const getMoreData = await getMoreData(data)
}
```

Besides the obvious benefit of cleaner syntax, let's not forget that these new features are often more than just syntactic sugar, there are often performance benefits too!

So while some of the most obvious steps towards improvement often include pursuing the newest and shiniest frameworks or languages, do not overlook the value of your fundamentals. By going back to see what people are teaching these days, you get a quick reality check on whether you should brush up on something that wasn't so important back then but worth learning now.
