---
title: learning-functional-programming-with-professor-risby
tags:
---

## General Impressions

I'm familiar with principles such as DRY, YAGNI, and single responsibility; but what's interesting is that Professor Risby states that "they're merely tangential to our ultiamte goal." Talk about hooking me in. Interested to see where it goes from here!

> A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

Great analogy of the difference between slice and splice.

> An effect is "anything that occurs in our computation other than the calculation of a result."

Such an elegant and simple definition...

> A side effect is a change of system state or _observable interaction_ with the outside world that occurs during the calculation of a result.

The thing to remember that it's not like side effects are forbidden. Instead, "we want to contain them and run them in a controlled way."

## Thoughts to Marinate

> A function is a special relationship between values: Each of its input values gives back exactly one output value.

This is interesting. I'm so used to have functions do a variety of things that this is somewhat counter-intuitive for me.

"Pure functions _are_ mathematical functions and they're what functional programming is all about."

Food for thought...



## Favorite Quotes

"It's like donning your heaviest parka in the dead of July to blast the air and demand an ice lolly."

"By using specific naming, we've seemingly tied ourselves to specific data. This happens quite a bit and is a source of much reinvention."

"... we're striving for reliable functions that return the same result every time, not functions that leave a mess in their wake..."

"Reliance on state is one of the largest conributors to system complexity."

## Things I Learned Indirectly

"Memoization is an optimization technique used to primarily speed up programs by storing results of expensive function calls and returning the cached result when the same inputs occur again."
