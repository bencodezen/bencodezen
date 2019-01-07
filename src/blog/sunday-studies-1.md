---
title: "Sunday Studies #1"
date: 2019-01-06 17:55:20
type: post
blog: true
excerpt: Welcome to the first edition of Sunday Studies! Every week I'll be releasing a code challenge for you to solve for the week. The solution will be posted on Saturdays so you can see how I worked through the problem.
tags:
    - javascript
    - puzzles
---

Welcome to the first edition of Sunday Studies! Every week I'll be releasing a code challenge for you to solve for the week. The solution will be posted on Saturdays so you can see how I worked through the problem.

## Code Challenge

You need to merge two arrays into one array for future manipulation. 

### Data

This is what you have to start with:

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

### Final Output

When you log `sweetStuff` in the console, you should get everything within the array as shown below:

```js
[
    { name: "apple", quantity: 5  },
    { name: "grapes", quantity: 8 },
    { name: "pear", quantity: 2 },
    { name: "mango", quantity: 10 },
    { name: "watermelon", quantity: 2 },
    { name: "cookie", quantity: 12 },
    { name: "cake", quantity: 1 },
    { name: "candy", quantity: 25 },
    { name: "cinnamon roll", quantity: 48 }
]
```

### Extra Credit

For those who are knowledgeable of JavaScript already, your challenge is to solve this problem in a single line of code.

## Guidelines

1. You can use any language you want to solve it. Just know that the solution will be devised and written via JavaScript.
1. Try and devise the solution on your own for at least 15 minutes before checking the internet for ideas.
1. If you do use other resources to help you come up with the solution, **no copying and pasting**! Make sure to type it all out so that you get the repetition to reinforce what you're doing.
