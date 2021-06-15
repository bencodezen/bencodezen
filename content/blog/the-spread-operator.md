---
title: The Spread Operator
date: 2019-01-08 22:48:44
type: post
blog: true
excerpt: 'The spread operator is a shorthand technique introduced in ECMAScript 2015 to solve a common problem: Taking the items within an iterable and distributing them within another iterable.'
tags:
  - tutorials
  - javascript
---

## What Is The Spread Opreator?

The spread operator is a shorthand technique introduced in ECMAScript 2015 to solve a common problem:

> Taking the items within an iterable and distributing them within another iterable.

### Quick Review: Iterables

Just to ensure we're all on the same page, an iterable is a data type that where its pieces can be divided into smaller data. Here are some examples:

```js
// Arrays
const list = [1, 2, 3]
const listItem1 = list[0] // 1
const listItem2 = list[1] // 2
const listItem3 = list[2] // 3

// Objects
const pet = {
  name: 'Destinio',
  type: 'dragon'
}
const petName = pet.name // 'Destinio'
const petType = pet.type // 'dragon'

// Strings are usually a surprise because they are
// actually arrays that contain single characters
// which add up to the string
const word = 'complete'
const wordLetters = ['c', 'o', 'm', 'p', 'l', 'e', 't', 'e']
```

And just for additional clarity, here are data types that are not considered to be "iterables."

```js
// Numbers can't be split up a number into smaller data parts
// You can change the value or run calculations on it, but it
// cannot be broken down further
const x = 5

// Booleans are true or false. While there may be partial
// truths in life, luckily things are black and white
// when it comes to programming
const state = true
```

### Identifying the Spread Operator

Luckily, it is easily identifiable in code by an ellipsis (`...`).

Here are a few examples:

```js
const list = [1, 2, 3]
const listSpread = [...list]

const word = 'string'
const wordSpread = [...wordSpread]

const object = { name: 'Destinio', type: 'dragon' }
const objectSpread = { ...object }
```

## Why Should You Use It?

### It's easier to understand the output

Let's start with a simple example:

```js
const word = 'phoenix'

const wordSplit = word.split('')
// ['p', 'h', 'o', 'e', 'n', 'i', 'x']

const wordSpread = [...word]
// ['p', 'h', 'o', 'e', 'n', 'i', 'x']
```

The use of the `split` function requires knowledge that an array will be generated and you have to include the `''` as an argument in order for it to split the letters up. However, when using the spread syntax, it is immediately clear that the variable `wordSpread` is going to result in an array.

### Copying an item is incredibly easy

Take the following snippet:

```js
// These two lines appear to accomplish
// the task of copying the data
const list = [1, 2, 3] // [1, 2, 3]
const list2 = list // [1, 2, 3]

// If we push a new item to the original
// list though...
list.push(4)

// Both items will be modified
console.log(list) // [1, 2, 3, 4]
console.log(list2) // [1, 2, 3, 4]
```

In the example above, this is a problem because this means that you did not copy the array. Instead, you merely created a reference to the original `list`. But if you use the spread syntax...

```js
const list = [1, 2, 3] // [1, 2, 3]
const list2 = [...list] // [1, 2, 3]

// If we push a new item to the original
// list this time...
list.push(4)

// Only the original list is modified
console.log(list) // [1, 2, 3, 4]
console.log(list2) // [1, 2, 3]
```

If you wanted to do this without the spread syntax, you'd have to write a lot more code. Here's a simple example of how one might do it:

```js
const list = [1, 2, 3]
const list2 = []

for (let i = 0; i < list.length; i++) {
  list2.push(list[i])
}
```

🤦‍

## Performance

[@GMano](https://www.twitter.com/GM_twits) had a great question regarding the performance of spread operators. So, like any other performance test, my go to reference for these types of questions is [JSPerf.com](https://jsperf.com).

Here's a series of tests that you can run to see the results! [https://jsperf.com/spread-operator-to-push/2](https://jsperf.com/spread-operator-to-push/2)

<blog-image alt="Table summary of JSPerf results" src="/images/2019/jsperf-spread-test.png"></blog-image>

The basic takeaway is this: You want to use `concat` when working with large arrays that you want to fuse together.

Does that mean you should never use spread? Absolutely not! Similar to the practicality of algorithms, the data is often so small that the performance difference is negligible at best. The key thing to remember is when you're working with large data. Otherwise, keep using it to your heart's content!

## In Summary

The spread syntax is an incredibly powerful technique that you should use as often as you can. I'll try to come out with a worksheet to practice it soon, but feel free to let me know if you have any questions in the meantime.

## Additional Resources

- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
