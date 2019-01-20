---
title: "Saturday Solutions #2"
date: 2019-01-19 20:11:37
type: post
blog: true
excerpt: "Today I will be breaking down different approaches for solving the code challenge in Sunday Studies 21. "
tags:
    - code challenges
    - solutions
    - javascript
---

Today I will be breaking down different approaches for solving the code challenge in [Sunday Studies #2](/blog/sunday-studies-2.html). I will start with using fundamental JavaScript skills and then build up to more modern techniques with ES6+.

## Recap: The Problem

For each problem below, write out as many versions of the solution as possible for practice:

1. Double the value of every item in list
1. Transform each item in list to be a string " o'clock" appended to the current item (i.e., 1 becomes "1 o'clock")
1. Replace every item that is divisble by 3 with the string "triforce"
Only loop through items that have an even index. In other words, the loop should only run 5 times.

## Solution

### Double the value of every item in list

```js
// for loop
var doubledList = []

for (var i = 0; i < list.length; i++) {
    var currentItem = list[i]

    doubledList.push(currentItem * 2)
}
```

```js
// forEach loop
var doubledList = []

list.forEach(function(item) { 
    doubledList.push(item * 2)
})
```

```js
// map
var doubledList = list.map(function(item) {
    return item * 2
})
```

### Transform each item in list to be a string " o'clock" appended to the current item (i.e., 1 becomes "1 o'clock")

```js
// for loop
var timeList = []

for (var i = 0; i < list.length; i++) {
    var currentItem = list[i]

    timeList.push(currentItem + " o'clock")
}
```

```js
// forEach loop
var timeList = []

list.forEach(function(item) {
    timeList.push(item + " o'clock")
})
```

```js
// map
var timeList = list.map(function(item) {
    return item + " o'clock"
})
```

#### Replace every item that is divisble by 3 with the string "triforce." Only loop through items that have an even index. In other words, the loop should only run 5 times.

```js
var triList = []

for (var i = 0; i < list.length; i += 2)  {
    var currentItem  = list[i]

    if (currentItem % 3 === 0) {
        triList.push("triforce")
    } else {
        triList.push(currentItem)
    }
}
```

### Extra Credit

#### What is the advantage of using a for loop over the other two methods?

The `for` loop allows you to choose how you iterate through a loop. In other words, you don't have to go through every item if you don't want to. You can increment the counter by however much you need it to! Every other loop will go through every item.

#### What is the difference between forEach and map?

`forEach` mutates the actual array whereas `map` returns a new array.

### Final Thoughts

As I continue to iterate on this series, please feel free to reach out with requests and/or feedback. You can either reach out to me directly on [Twitter](https://www.twitter.com/bencodezen) or [open a new issue](https://github.com/bencodezen/bencodezen/issues/new). Thanks for reading!
