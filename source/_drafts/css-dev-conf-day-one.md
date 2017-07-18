---
title: css-dev-conf-day-one
tags:
---

## Keynote by Rachel Andrews

Origin story. Predated CSS
The web gave her a sense of community

Those who went through the browser wars celebrated the survival of IE6

Not every tool technique or best practice is for you

Learn the skill of assessing what is useful to you

Html CSS J's accessibility and HTTP are the fundamentals of a front end developer

De developing behind flags means authors need to get proactive in testing

Flexbox was never designed to be two-dimensional. Using it in a 2-D fashion is technically a hack!

If authors do not just feedback, the web standards developed end up being a reflection of people who do not build websites

Learn how to create"reduced test cases"

## Sunsetting Our Grid Systems & Embracing Grid Module by Michael Cohen (@iammikecohen) [buildasign.com]

* Using someone else's system creates a ton of technical debt.
* You need to make changes now in order to prevent yourself from having a larger project in the future. (This all reminds me of "future-proofing" but not as extreme)
* Take steps now from releasing anti-patterns towards the future implementation of grid layout

Recommends to:

1. **Learn Grid Module from the docs** - Recommends the docs against blog posts because the documentation contains the most up to date information whereas blogs become out of date.

Grids should be considered as the area divided into rectangles and not the rectangles themselves.
This is important cause it can decouple markup from the visual output.

"You must unlearn what you have learned." - Thinking "how do I recreate X in grid module" is the wrong way to think

With the way we currently write markup, often the most improtant thing gets hidden beneath cruft. Our markup is dictated by design rather than by what is actually important: the content. (Inspired from the Dr. Bronner's Magic Soaps label)

You can nest grids inside of grids. Rinse and repeat. Start at the highest level and keep sub-diving as far down as you need to go.

### CSS Architecture with Grid Module - A Difference in Composability

Key difference is how you document how something is created

A lot of people just document the classes in the grid system and how they are used.

Grid systems create a lot of undocumented UI patterns that will cause a huge headache in the future.

Proposes that you have design modules as opposed to functional column grids. In other words, start documenting the layout patterns.
	* This is an interesting counter proposal to the functional paradigm since it actually proposes that the use of functional classes result in greater pollution whenever things need to change in the future. By using semantic naming instead, this actually scopes the design much more.
	* It's important to note that his example utilizes a prefix of "L" to indicate layout for the type of class. This seems to be an artifact from a naming architecture.
	* Team found that reserving first-letter prefixes indicate specific types of clases. +1 on this.
	* Came up with documenting only the pattern and not the complete functional nature. Proposes using single letters instead of semantic names in order to focus on grid as opposed to what content is in it.

Recommends Susy & Singularity

"Isolation Method" - Clever way of using margins and negative margins instead of using absolute positioning.

Pitfalls to look out for:
	- Preprocessor may not support some of the new syntax
	- You can name one more line that you provide a measurement for
	- Browser may not support the latest draft (use Chrome Canary)
	- Don't define one style of Grid and think you can override it with another style
		- Recommends a min and max for media queries if you're switching between float and isolation layouts

The argument for breaking away from grid systems is about long term mainatainbility and more importantly to me, the semantic markup and the importance of _content first development_.

\#sunsetting [1 - 5] to (504) 229-6828

## Perceived Performance - The Only Kind That Matters

"Predictive design" - using past or current user behavior to predict their next behavior before they take it in order to preload the action

"Web Performance is a matter of time"

"Objective vs Subjective" perception of time

Optimizing for objective time is easy to measure, but this is not as efficient since this is not how users perceive their experience.

"Time differences of 20% of less are imperceptible" in other words, "shoot for 30% speedup"

"Active phase vs passive phase" - Humans tend to overestimate passive waits by 36%. Great example of comparing side roads commuting vs waiting in traffic.

Ideas he proposes:
	- Make passive phases less painful
	- Make active phases a greater proportion of the total waiting time

What we can do:
	- Respond to users immediately
	- Give users a sense of certainty
	- Occupy users' attention
	- Render minimum viable layout

"It takes about one second for flow to be disrupted."
	- Mousedown event vs click event (ontouch vs touch) - This starts the reaction chain sooner rather than later. There is a gap between the action of clicking since it waits for the upclick. Brilliant. It seems to give about a 100-150ms head start.
	- Stay :active. Use active states. Animation duration sweet spot is 150-200ms. This can coax them into holding down their mouse even longer. Incrediible!

"Give users certainty!"
	- Uncertain waits feel longer

Great animation of progress bars text
	- Animation makes a huge difference when it comes to users perception of progress bars.
	- Counter-animations tend to make the progress bar feel like it's feeling faster.
	- Speeding up the counter-animation as it via ease-in helps it feel 12% faster.
	- Don't use anything if it is less than 1 second because they won't even realize it. This puts them into a passive state intentionally which is horrible.
	- If 1-3 seconds, use the basic progress bar without extraneous information.
	- 3 to 10 seconds? Time to get fancy.
	- As long as the bar is in a visible area where the user is focused, it is okay.
	- Fake progress bars can damage user perceptions because if they pick up on the pattern, they'll lose faith.

What about spinners? Meh. (Another great use of animation here)
	- Optimal time is around 1-2 seconds, but progress bars is probably still better
	- But they are much easier to brand

Slack does a great job of offloading the waiting with an intricate loading screen with multiple loading states.
Games do this a lot as well.
Making things interactive is a great way to help hold users' focus.

"If this feels like cheating, that's because it is."

> "Our goal is to get users to persist through a longer waiting time that we have little control over."

"Rather than hasten passive phase, increase active phase's time"

"Identify what your users interact with first." - Remember this first, and then lazyload anything else.
	- It is not as simple as "above the fold"
	- It's about what your users want

### Predictive Design

Houston airport example - +1

"Users are not snowflakes" - Their behavior follows observable patterns, but "your users are" so don't make sweeping changes.

If we can predict what users will do, why not preload the action before they take it?
Use the area around the button as the trigger event and not the button itself.

Use it wisely because you're doing things that users are not asking for. Recommends it to mitigate risk with data.

TLDR; At the end of the day, what matters is how it feels; but always remember to test the hell out of your predictions.

\#perceivedperf [1 - 5] to (504) 229-6828

## Creativity in Programming by Sarah Drasner (@sarah_edo)

Programming vs. Creative
	- "Any time you are expressing anything to the compiler, you are doing a creative act."

Concept of flow
	- Complete immersion in tasks
	- Share traits with hyperfocus (reminds me of dying will flame from Reborn)
	- Loss of self-reflective consciousness
	- "Happiest points of life"

1. Questioning the Base Premises
	- It's important to challenge what your work with.
2 Impose artifical bounds
3 Repupose
4 Open source
5 Freedom

_Recommended article:_ "Hack Physics and JavaScript" by Rachel Smith

_Grab asset:_ "It Depends" by Rachel Smith - Gif

_Look into:_ Lonely planet?

"The worst code isn't code that breaks, but code that silently corrodes the system over time."

Michael Feather quote comparing OO Proramming and FP

Look into AFrame open source VR framework - Made by Mozilla

When you're burnt out, she recommends just tweaking and refactoring something just to tinker with things instead of trying to go fresh at it. It's hard to get out of the rut, but start small and decrease what you're expecting of yourself.

\#creativecode [1 - 5] to (504) 229-6828

## Reactive Animations with CSS Variables by David Khourshid (@davidkpiano)

Demo: Arcade.london

Continuous and discrete - the similarities between animation and music

Declarative vs. Imperative

Immutable vs Mutable

Functional Programming & onstraints is a symbiotic relationship

W3C - The Rule of Least Power: Powerful languages inhibit information reuse
	- Use the least powerful language suitable for rexpressing information, constraints or programs on the web.

Reactive Animations are things you can play around with. Events that lead to discrete changes

Events in JS are combined into stream that emits values which then go to custom properties that result in reactive styles.

This is important because mobile apps have been doing this forever and the web is a bit behind in regards to this.

### CSS Variables

Check out: CSS variables from Lea Verou

CSS Variables allow them to change at run-time

JS Observables are like arrays that are async, immutable and subscribable

_Look Into:_ RxJS - Most popular library for writing Observables.

HammerJS - Observes finger gestures

Combine CSS Variables and JS Observables to get Reactive Animations

"A 'reactive animation' is one involving **discrete changes**, due to **events**

By allowing programmers to **express the 'what' of an interactive animation**. one can hope to then **automate the 'how'**"

- Elliot and Hudak, 1997

Linear interpolation = LIRP?

Why animate with CSS Variables
	- Easily debuggable
	- No excessive DOM manipulation
	- DOm node indpeendent
	- UFll ower of CSS
	- Theming and media queries
	- calc() is your new best friend
	- They work in SVG

\#ReactAnim [1 - 5] to (504) 229-6828

## Automated UI Testing and You by (@klamping)

_Interesting Technique_: 5 Why's - A root cause analysis tool to get at what's really going on

UI Testing (aka functional / end to end testing). Testing what they would actually be doing and making sure they can do what they want to do

Selenium Automation
	- Uses real browsers
	- Programmatic control of them
	- Free and open-source

WebDriverIO
	- NodeJS based
	- Streamlined commands
	- Lots of integrations and support

### How to Keep UI Tests Useful and Not Horrendous to Maintain

The Black Triangle - A game dev team and they get excited about this thing that appears on the screen. It's just a black triangle. It represented: the rendering engine, modeling programs, converter programs, etc. All the integrations is what they were celebrating.

> "Better to have one highly polished and visible test than a whole bunch of invisible ones."

WebdriverIO is just one piece of the puzzle.
Need a way to create test users
Data variations also impact test cases
Code pipelines to ensure it's being used
Visible test results to show that it passes or fails

What tests really need:
	- test framework
	- code repo for tests
	- selenium box
	- server to run test scripts on
	- api hooks to trigger test scripts to run
	- api hooks to listen to result of tests
	- server to host report test history
	- interface to programmatically modify data for a server

\#UITesting [1 - 5] to (504) 229-6828

## Fighting Burnout by Alicia (@aliciability)

Burnout vs. Technical Growth - Two concepts that are constantly fundamentally at odds with each other

Expectations of technical growth
	- Personal projects, side things, coding all the time
	- Assuems the person has low number of outside priorities
	- Assumes people will speak up when they are starting to weath thin

Realities of technical growth
	- There's not infinite time - we've got lives
	- It's unpaid labor
	- We want technical experts who are young because "tech ageism"

Stages of Burnout
	- The compulsion to prove one's self
	- Working harder
	- Focuses only on their work
	- Becomes obsessed with only that and the idea that they will become irreplaceable by doing so
	- Ends up neglecting their own needs
	- Revision of values: things like changing what success means to them. In other words, your work is the only thing that is valuable
	- Denial of emerging problems
	- Withdrawal
	- Obvious behavioral changes
	- Depersonalization
	- Inner emptiness

Burnout vs Brownout
	- Encapsulates the early stages of burnout, but has more to with disinterest as opposed to a physical or mental collapse

How is this affecting our industry?
	"The pipeline is leaky and full of acid. The pipeline leads to a sewage treatment plant. The pipeline ends in a meat grinder." - Julie Pagano

We treat burnout as a badge

So what do we do about it?
	- Burnout is about the organization as much as the individual
	- As individuals though...
		- Say no
		- Check in on yourself
		- Learn in moderation
		- Learn to focus on extensible knowledge
		- What do you want people to know you for?
		- Passive learning
	- As leaders...
		- Take no as an answer
		- Make sure your employees are set up for success
		- One-on-one meetings
		- Give them time to learn

"We all have intellectual FOMO." Let's be honest about it.

How to Recover from Burnout?
	- Take time off
	- Knowing who your support network is
	- Doesn't think you can really recover from burnout

\#FightBurnout [1 - 5] to (504) 229-6828

## Conference Thoughts

There's an interesting notion of trying to ensure backwards compatability while future proofing against upcoming specs.

I really like how Grid gets us to focus on markup and not on design.

Officiallly going to convert to HSL

It's time to get familiar with the HTML 5 slideshow creator.

Expectations set too high result in no progress.

I've gone through much of my journey pursuing things and jumping around. It's exciting and easy to ramp up to learn new things. I never truly specialized.
