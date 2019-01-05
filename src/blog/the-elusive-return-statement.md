---
title: "The Elusive Return Statement"
date: 2017-08-05 23:23:47
type: post
blog: true
excerpt: Over the past few months, I've been taking a deep dive in ReactJS in ways I would have never anticipated. It's been a whirlwind, but the learning has been incredible yet hair-wrenching in others. This post is about the latter of the two.
---

Over the past few months, I've been taking a deep dive in ReactJS in ways I would have never anticipated. It's been a whirlwind, but the learning has been incredible yet hair-wrenching in others. This post is about the latter of the two.

I am in the midst of trying to write a function that would render multiple components based on the props passed into it. I won't get too much into the details, but let's start with the simplest way that I knew from VueJS:

```html
<div id="root">
	<h1>Number List</h1>
	<p v-for="number in numberList">
		{{ number }}
	</p>
</div>
```

```javascript
const app = new Vue({
	el: '#root',
	data: {
		numberList: [1, 2, 3]
	}
})
```

Pretty simple and semantic right? For every number in numberList, generate a `<p>` element with the number as the content.

ReactJS on the other hand is not so simple. Here was the basic code I was working with:

```javascript
class Numbers from Component {
	state = {
		numberList: [1, 2, 3]
	}

	render() {
		return (
			<h1>Number List</h1>
			{/* Goal: Generate each number */}
		)
	}
}
```

As most are aware, there is very little magic with ReactJS. So the concise and semantic syntax of VueJS is not available to us. Where does that leave us? Improving our JavaScript chops and using the map function!

```javascript
class Numbers from Component {
	state = {
		numberList: [1, 2, 3]
	}

	render() {
		const generateNumbers = this.state.numberList.map(number => {
			return (
				<p>{number}</p>
			)
		})

		return (
			<h1>Number List</h1>
			{generateNumbers}
		)
	}
}
```

As you can see, we've assigned the map function to a `const` variable which we then generate within our JSX. Now the problem I ran into came into my desire to pull the function outside of the render function.

```javascript
class Numbers from Component {
	state = {
		numberList: [1, 2, 3]
	}

	generateNumbers() {
		this.state.numberList.map(number => {
			return (
				<p>{number}</p>
			)
		})
	}

	render() {
		return (
			<h1>Number List</h1>
			{this.generateNumbers()}
		)
	}
}
```

So this was my initial draft of the function and my component was blank. I was bewildered. After all, this was just working momentarily ago no? I try all sorts of console.logs in an attempt to determine if the loop wasn't running or something. The loop is running just fine though. So what is going on?

Some of you immediately recognized my error. And for those who caught on, the title of this post is a pretty blatant hint. That's right. I am missing a return statement.

When I first wrote that function, I read it as "When I call generateNumbers, it will map through numberList and return the appropriate JSX components." And for all intensive purposes, it is doing that, just not at the the `render()` level we want. The reason is simple, we're returning the JSX into the function `generateNumbers` itself and not the not actually emitting the data for something like `render()` to get and properly render.

This is the correct code:

```javascript
class Numbers from Component {
	state = {
		numberList: [1, 2, 3]
	}

	generateNumbers() {
		return this.state.numberList.map(number => {
			return (
				<p>{number}</p>
			)
		})
	}

	render() {
		return (
			<h1>Number List</h1>
			{this.generateNumbers()}
		)
	}
}
```

By adding that one return statement, everything now works! So the next time you are trying to iterate over something and seeing nothing rendering your screen, check for a missing return statement!
