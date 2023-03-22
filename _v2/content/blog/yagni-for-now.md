---
title: YAGNI For Now
date: 2022-01-14 17:54:02
type: post
blog: true
excerpt:
---

One of the common acronyms taught to developers early in their career is `YAGNI` (i.e., you ain't gonna need it). And while it's a nice tongue and cheek to try and combat scope creep, when it comes to putting it into practice, it's a little more complex then that.

## 🖼️ Background

For many years, I've been playing around with an idea that's been plaguing me for most of my life. And while I've always wanted to bring it into reality, I always found myself spinning my wheels as I tried to figure out everything I "needed" to do. And to be honest, this held me back for a **really** long time.

## 📋 What I "Needed"

When it comes to building apps, it's easy to get caught up in the standards of where apps are today. Here is a laundry list of things that I wanted for my app and some of the rants that ran through my brain over the years:

1. **Design**

- Should I use a design library like Material Design? Bulma? PicoCSS?
- Which font do I pick?
- I hear gradients are the new trending thing
- What will the landing page look like?
- Should I keep this minimal? Or do I need something more complex?

2. **UX Patterns**

- My app should be able to do X, Y, and Z
- And oh wait let's not forget about the fact the ABC app can also do J, K and L
- And hotkeys are great. I love that. The app should do that too

3. **Database**

- Which one do I pick?
- Is this schema a better one than another one?
- Which one is more performant?
- Will I accidentally dig myself into a hole if I go with the wrong one?

4. **Authentication**

- Which platform do I support?
- Should I support passwords?
- Are magic links the thing to do now?

5. **Real Time**

- Users are going to need real-time collaboration
- But I don't know much about this... where do I start?
- I heard Web Sockets are good, but maybe I should research this more...

And the list goes on and on... and on... and on...

But here was the problem: YAGNI as a principle wasn't helpful in this regard, because I was definitely going to need it at some point. The things I wanted to achieve wouldn't be possible without it. So I found myself constantly debating with myself whether things were "necessary" or not.

## 🛑 Being Stuck in a Perpetual Loop

How did I try to deal with this? Well, obviously the answer is to buy a bunch of courses and resources to try and learn everything my app "needed." As a result, I spent so much of my time trying to:

- Pick the perfect architecture
- Analyze design patterns
- Theorize on what might work in which context

In the meantime, how many lines of code did I commit?

Zero.

## 🛣️ Breaking Free of Decision Paralysis

When I look back at the state I was in during that time, I was basically in a state of decision paralysis. And one of the things that made it so hard to break out is that there was no one to keep me accountable for building anything except me. But that's no excuse, I needed a way out.

What I realized is that YAGNI was misleading me because while I needed a lot of the things I mentioned above, what I realized is that there's two key words that YAGNI misses which helped alleviate my anxiety:

> You Ain't Gonna Need It **For Now**

It doesn't flow when you try to say it, but this nuance was the key for me. And because of that, I managed to clear my head of all the things I'd need in the future.

1. **Design**

- Do just enough that it doesn't make me want cry every time I see it, but it's okay that it's not pretty enough to really show off to anyone

2. **UX Patterns**

- Follow HTML semantics and just make things work. This is a prototype. You'll have a chance to iterate on it once the idea is solidified.

3. **Database**

- My idea revolves primarily around a frontend prototype, so you know what? All I need is a local JSON file. That's all I need to make this work and show what's possible. The database stuff will come in time.

4. **Authentication**

- Since users are only using a local JSON file, this became easy to table

5. **Real Time**

- If everything is local, this also became easy to table

## 🤔 Final Thoughts

It seems like a simple shift in perspective, but `YAGNI For Now` really did give me the clarity I needed to focus on what was important: which is the prototype. And with each iteration, having something tangible to play around with has done so much for me.

So the next time you're thinking of building an app, don't be afraid to put something down as something you need. Just remember, the important thing is that you might not need it now. 🙂
