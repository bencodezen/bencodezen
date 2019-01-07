---
title: "Saturday Solutions #1"
date: 2019-01-12 07:00:00
type: post
blog: true
excerpt: 
tags:
    - code challenges
    - solutions
    - javascript
---

Today I will be breaking down different approaches for solving the code challenge in [Sunday Studies #1]. I will start with using fundamental JavaScript skills and then build up to more modern techniques like ES6.

## Recap: The Problem

The challenge for this problem is to take two different arrays (i.e., `fruits` and `desserts`) and merge the items into a new array called `sweetStuff`.

```js
var fruits = [
    { name: "apple", quantity: 5 },
    { name: "grapes", quantity: 8 },
    { name: "pear", quantity: 2 },
    { name: "mango", quantity: 10 },
    { name: "watermelon", quantity: 2 }
]

var desserts = [
    { name: "cookie", quantity: 12 },
    { name: "cake", quantity: 1 },
    { name: "candy", quantity: 25 },
    { name: "cinnamon roll", quantity: 48 }
]

var sweetStuff = []

console.log(sweetStuff)
```

## Solution

### Fundamentals

The first thing that pops into my head when confronted with a problem with iterating over items and manipulating them for some kind of action is **looping**. So as far as pseudo coding goes, the solution goes something like this:

1. Loop through the `fruits` array 
1. For every fruit item, add it into `sweetStuff`
1. Loop through the `desserts` array
1. For every dessert item, add it into `sweetStuff`

And while some 

```js
// Loop through the fruits array
for (var i = 0; i < fruits.length; i++) {
    var fruit = fruits[i]

    // Push the fruit item to sweetStuff
    sweetStuff.push(fruit)
}

// Loop through the desserts array
for (var i = 0; i < desserts.length; i++) {
    var fruit = desserts[i]

    // Push the fruit item to sweetStuff
    sweetStuff.push(fruit)
}
```

### The Concat Method

As with any programming language, the next step past the fundamental method is to learn what built-in functions help to with common scenarios such as this. So for those who haven't encountered it before, you'll definiteely want to check out the [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) array method.

TLDR; Concat allows you to create a new array by taking one array and adding the items of another array into it.

So the solution would look like this:

```js
sweetStuff = fruits.concat(desserts)
```

### ES6+ Method

If the goal is to practice using ES6+ features, the one that should come to mind for this one the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

TLDR; Take the items from an array / object and copies them into the new array / object

```js
sweetStuff  = [...fruits, ...desserts]
```

### Extra Credit

When I first wrote this code challenge, I thought that the ES6 method would be the answer to the extra credit. Upon closer inspection though, it turns out the `concat` method is shorter by two characters! 
