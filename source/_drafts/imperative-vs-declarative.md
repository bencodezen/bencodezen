---
title: imperative-vs-declarative
tags:
---

Apparently I write a lot of my code in imperative. Whoops.

Up until now, the most common explanation for understanding imperative vs declarative coding is that imperative is telling the computer how to do it while declarative tells the computive what to do it. And while how and what are clearly two different words, at the beginning, there's this slight cognitive dissonance because you think, "Wait... isn't writing code telling the computer what to do it and how to do it at the same time?"

That's the initial thought I had as well. However, while the difference between the two may seem nuanced, the method of thinking is quite different. Let's take this simple example:

Problem: Take an array of n numbers and return the total

The simplest and perhaps most popular method of solving this problem would be the following:

let numbers = [1, 2, 3, 4, 5],
	total = 0

for (let i = 0; i < numbers.length; i++) {
	total += numbers[i]
}

return total

While there is nothing wrong with this solution, this is an example of imperative programming. The reason for this is because you are explicitly telling the computer **how** it should obtain the total. In other words:

1. Create a variable to track the total
2. Use a for loop to iterate through the array
3. Add it to the total variable so you can return it later

Again, there's nothing wrong with the code. It works perfectly fine and everything would run smoothly when you deploy it. However, there are a couple things lacking with the approach:

* It locks you into a single mechanism for summing up total.
* The function for getting the total is isolated and would make refactoring difficult in the future if a more performant method came about.

Let's look at the declarative way of doing this:

let numbers = [1, 2, 3, 4, 5]

numbers.reduce

** Notes: Use an object and not the number method since it relies on previous knowledge of the reduce functionality which new users could get hung up on

