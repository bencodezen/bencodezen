---
title: css-dev-conf-day-two
tags:
	- cssdevconf
	- conferences
---

## Revolutionize Your Page: Real Art Direction on the Web by Jen Simmons (@jensimmons)

Att direction is about being in conversation with the audience

brand & art direction = conversation

"The vast majority of editorail design has at its heart **the idea of communicating an idea of a story** through the organization of and presentation of words and visuals"- Caldwell and Cappaterra (Editorial Design)

"We're stuck in the idea that every layout needs to be one of three shapes. You have a brand new product that's unique but your website looks like everyone elses."

"Which one of these two web pages are you designing right now?"

Challenges 960 grid.

"Layout shouldn't be a multiple choice question. It should be an essay question."

"Separate tooling needs from the design process"

"Don't make a 12 column layout out of CSS grid"

_Books to look into:_ "Grids and Page Layouts"

labs.jensimmons.com

`initial letter: 4 (rows of text)` WHAT?!?!

**Feature Queries**: WHAT?!?!?!?!?!?!?!?!?!??!??!

@support (property: value) { // bunch of css }

**Viewport Units**

Need to start using this more for framing cnotent on different screens

**Object Fit**

Fill the space that's available and crop it. WHAT IS THIS MADNESS?!??!?!

**Clip Path and Shape Object**

**Sizing Based on Edges**

**Flexbox and CSS Grid**

Flexbox thinks of the world in one line. Great image of wrapping content still being connected via a "line"

**CSS Box Alignment**

flexboxdefense.com and flexboxfroggy.com

**Grid Module**

Jen Simmons' demo of Jazz at Lincoln Center is AMAZING. MUST SHOW AND look for other stuff to do the same

Great point about Pocket and people downloading these simple text version of your web pages.

Create a fallback layout for non-grid layout.

Place each item into a specific cell/area. Let the browser place everything using autoplacement algorithm.

"It's not buggy. It's not shipped yet!"

_Interesting_ CSS Grid Inspector - Plugin that shows you the gridline

"Code is not a 2x2 grid of do or don't. It's works and doesn't work at the same time."

Estimates Spring 2017 for evergreen browsers will have implemented Grid System.

jensimmons.com/presentation/progressing-our-layouts
jensimmons.com/presentation/modern-layouts-getting-out-of-our-ruts

www.layout.land

## Responsive Web Applications with Responsive Queries by Jonathan Snook (@snookca)

A talk more about process than code

Xero - Beautiful Accounting Software

Goal #1: Evolve the design

Goal #2: Support Multiple Devices

"Designers see a feature through all platforms"

"Monolithic app with accessible templates"

"Web applications have components in multiple contexts needing to respond differently."

Browsers do not have a way for **container queries**. The remedy for now is:
	- CSS, HTML or JavaScript
	- They chose JavaScript

"Going Responsive meant a consistent feature set across all devices."
This also means that "new features automatically have cross-device support"

"Product design is a team sport."

"Make the right things easy and the wrong things hard." Recommends a linting tool.

Shopify is getting of Container Queries due to performance. Relies more on flexbox instead.

"Designers should think Responsive before they need to"

_Interesting Group_: Responsive Issues Community Group

\#RWDQueries [1 - 5] to (504) 229-6828

## Start Using ES6 Today by Wes Bos (@wesbos)

### Life makers - features that make life so much better

#### let and const

	- block scoped

Thinks of curly braces as "fences" that keep the variables within it. Nice analogy.

Never use var for "for loops"

"const does not mean it is immutable!"

"Using const makes sure we can't wipe - or rebind - wes out"

If you want to make sure nothing changes, use Object.freeze

#### template strings

Proposes the idea of never using regular quotes again. All backticks!

Allows you to write markup very easily

"JavaScript is a templating language!"

Use the ternerary operator for if conditions

Build your own render functions when you want to nest complicated functions in your template strings

#### default function arguments

you can set default arguments in your function

#### Arrow functions

parantheses around single arguments are optional. I kind of like it better since it's cleaner
there is an implicit return statement iwth arrow functions
	if you need a curly bracket for object, you need the parantheses around the implicit return value

**this**

**With arrow functions, the value of THIS does not change.** THIS is equal to whatever it is bound to and can go directly up to the window.

Arrow functions - the value of this does not change. It looks for the relative parent until it finds a funciton that already has at this value bound to it.

#### Enhanced Object Literals

You can use a single property declaration if the variable is the same as the property name. In other words, if you have:

{
	first: first
}

can now be

{
	first
}

##### Method Definition

You can eliminate function keyword if you can't use arrow functions and want to shortcut it in objects.

### Deep End

#### Destructuring

Put it simply, it allows us to create and assign multiple variables in a single line of code. It works with both objects and arrays.

example: `const { first, twitter, city } = person;`

You can rename while you destructure: `const { twitter: tweet, facebook, fb } = wes.links.social;`

You can even set default fallback values! `cont { first, middle = 'killer', last } = person`

And you can combine all those together!

You can swap values with destructuring

`[current, benched] = [benched, current]`

You can return multiple values in a function it if returns an object:

`const {USD, GBP, AUD, MEX } = convertCurrency(100);`

#### Sets

Kind of like the arrays you have always wanted

"A set isn ES^ is like a unique array with a nice api for adding/removing/checking its items."

`const students = new Set();`

push, pop, snap, crackle and pop - nice array joke

Sets only contains unique data

\#ES6Tips [1 - 5] to (504) 229-6828

## Speakers Panel

Discussion of the UX Engineer. A lot of companies try to cobble together UI developers who know JavaScript but don't really know design (CSS).

"Jam / Jab Session" - Collaboration of every team before work gets started on a project

Getting designers to achieve what they're getting at or trying to achieve and not simply trying to make it "look right."

Priority of interest for job candidates:
	1. Boss
	2. Co-workers
	3. Environment
	4. Tech Stack
	5...

## Pattern Libraries by Adam McCombs (@adammccombs)

"Recurring solutions that solve common design problems." - Paul Boag | Nov 12, 2013

Pattern libraries are NOT
	- your framework
	- static mockups
	- limited to designers

"Technically a pattern library is a simple collection of UI componenents, but in order for design system users to do their best work, a pattern library should also present other improtant info." - Brad Frost, 2016

Why are pattern libraries a necessity?
	1. **Consistency** in all things
		- Keep the brand of the product with your styleguide
	2. **Reusability** of elements and front-end markup
	3. **Maintainability** of codebase before and after lunch
	4. **Speed and Cost** because time is money
	5. **Allows your to develop systems** not pages

	- 'The Dreaded' waterfall process and just 'throw it over the wall'
	- "Content (RWD) is like water."

Examples to check out:
	- Mailchimp: Typography
	- Github: Buttons - even talks about accessibility as well!

The Structure
	- Style: Color, typography, images
	- Layouts
	- Components
	- Patterns

Interacting with projects:
	- External: patterns are externalized but pushes into your project as library.css
	- internal: Patterns are sepcific to an individual project
	- Isolated: Patterns can be updated but have no automatic effect on the projects

"Pattern libraries (and really CSS in general) is one of those things that everyone has an opinion on how to implement because of its low barrier to entry. This can (and likely will) cause strong opinions to form among various members of your team."

### What should you build into your pattern library?

	1. **Documentation** - Document everything!
		- Pattern name
		- Pattern usage description
		- Why does this pattern exist? Link to a live page if possible!
		- What is the wrong way to use a pattern?
	2. **Pattern Preview** - How should this be displayed?
	3. **Markup** - Bonus points for copy & paste

### How should you maintain your project after it launches?

	- Automate, automate, automate
	- "Unless it's part of your build, your style guide is just more documentation to maintain." - Phil Hawksworth

### Design System Maturiy Model

	- Governed: the pattern library process is built into your organization
	- AUtomatic: The pattern library is a part of your app build process
	- Manual: This pattern library has code snippets
	- Static: A static PDF of your brand guidelines
	- Inconsistent: The absence of a design system

### Working in a team?

	- Standards: code standards, naming convention, file organization
	- Tools: other systems/libraries, gulp, grunt, Github pages
	- Goals: what are your objectives, pattern library timelines, post launch maintenance

Recommended Resources:
	- styleguides.io
	- Fight the Zombie Pattern Library
	- 3 Years of Pattern Libraries: Lessons Learned

## Data Visualization with Responsive D3.js by Julia Konivestska

taurusj.slides.com/taurusj/deck-1-5-6

D3 - Data Driven Documents
	- It is...
		- not a chart library
		- not for rendering things
		- not for IE8 and older
	- It is...
		- a combination of building blocks (modules)
		- a great tool for mapping dta for the DOM
		- transform the data
		- smooth transition between UI states

You can use a default bundle or use modules to pick and choose what you want

You need SVG, npm, html, css, js

Sections
	- Data
		- Data can be represented in many ways
	- Selections
		- selects elements and attaches data
		- it's similar to jQuery
	- Data join
		- Terminology: Entered, Updated, Removed
		- States: `.data()` `.enter()` `.exit()`
	- svg
	- scales
	- axis
	- responsive
	- animation

## The Seasonal Web Designer by Trent Walton (@TrentWalton)

__Fun app__: Reigns - It shows how complicated balance can be in real life

Four roles inspired from talks grouped categorically based on his analysis:

	1. Philosophical (The Philosopher)
		- What should the web be like?
		- Why should it be like that?
		- We want to find purpose in what we're doing
		- "The sites we build should not be cut de sacs for the inquisitve visitors" - Jeremy Rains
	2. Adventurous (The Crusader)
		- How can I translate my beliefs into action?
		- How old is this remote? Quote by Tim Urban
	3. Constructive (The Builder)
		- How can I do my job effectively and efficiently?
		- Find ways to make hard work more efficient and sharing it with the community
	4. Restorative (The Restorer)
		- Can I be okay giving myself time to rest, rethink and reevaluate?
		- The web oesn't anturally encourage rest & restoration...
		- "Write when inspired, rest when tired." - Zeldman

Let's talk about balance

	- Know thyself

Seasonal

	Philosophical => Adventurous => Constructive => Restorative

First Wave

	Chapter 1 - The web should be an expressive medium!
	Chapter 2 - If I can do it in Photoshop, I will do it with HTML & CSS!
	Chapter 3 - Let's build these these exciting things for clients too
	Chapter 4 - Today I found three browser bugs and three new gray hairs

Second Wave

	Web Fonts...

## Conference Thoughts

Revolutionize my portfolio layout

I like the labs prefix to domain to show off fun stuff

Lots of exciting things to try. This was super invigorating and inspiring.

Definitely get the blog running as soon as I can.

Love the use of GIFs to show progression and not make people confused

Prepare for Grid Frameworks because the advantage is not incremental, it's game-changing.

Resumes: Ramsey Principle: A restaurant should have no more than 5 specialties on their menu.

_CodePen Meetup Idea_: Panel to talk about bridging conversation between design and dev.

I like how Adam uses a right rail to track what section / bullet he's going into detail about

Check out Gregor's art in CSS - http://slides.com/gregoradams/impressive-art-in-css#/

It seems like a lot of conference topics take contrarian views that sometimes serve a bit like click bait for people to go to.

You don't choose a specialization. you just keep building things and it'll find you.

Remake this with Sass animation http://bl.ocks.org/mbostock/1123639

Inspired for Gregor's talk:  Creating optimcal illusions with CSS
