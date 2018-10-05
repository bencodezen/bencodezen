# Testing Workshop

Taught by: Edd Yerburgh @eddyerburgh

## Topics

- Linting
- Unit tests (Jest)
- Snapshot / Visual regression tests (Jest)
- Integration tests with Cypress
- E2E tests with WebDriver

## Outcome

You can run everything from a simple test script: `npm it` (`npm install && npm run test`)

## Format

1. Learn
2. Question
3. Apply

## Participation Tips

- Raise your hand for questions at any time
- Please no recording

## Disclaimer

- Front-end testing is an unsolved problem
- "I'll teach you what I know today, but it is not the gospel." - E. Yerburgh
- It is difficult compared to the backend and changing rapidly especially with Cypress

## Testing Overview

It is basically verifying that your application does what it is supposed to do

### Manual Testing

If you write an application, you definitely do manual testing. And it works while you're developing a feature, but when you have apps with lots of features, manual testing falls flat and doesn't scale well.

This is terrible for regression testing.

In frontend, however, it plays a critical role because you still can't really test how things might look or UI elements like animations and such.

### Automated Testing

- Static analysis: This is running tests against your code without actually executing it (i.e., linting, etc.)
- Executed tests: These actually run against the code while executing it (i.e., unit tests)

#### Why do we use automated tests?

- Verify new features/bug fixes behave correctly
- Catch regressions: It makes sure that functionality that was working is still working after new code is added
- Documentation: They document how your app works in a systematic way for those who are new to the project
- Enable workflows: TDD is not ideal for a lot of frontend code.

#### Static Analysis

- Linting: Basically it parses your code into an AST and tries to find any errors.
  - Linting: Where you find errors like an unused variable
  - Formatting: Checking for semicolons or tabs, etc.
  - Later we'll get to see Prettier and ESLint together
- Type checking: Advises to use it in the apps, but not going to cover it today
  - Use TypeScript or Flow to add type annotation to your code / functions
  - For Vue, recommends TypeScript going forward
  - Vue 3 is going to be written entirely in TypeScript

### Executed Tests

- E2E Tests
- Integration Tests
- Snapshot / Visual Regression Tests
- Unit Tests

#### E2E Tests

- Automate a browser
- Test the entire system
  - Start your app in production mode
  - And then automate the browser to interact it the way the user would
- They are helpful, but have a lot of problems as well

#### Integration Tests

- Difficult to define! Different people have different definitions, but according to Edd, he believes that integration tests are pieces of the E2E test suite.
- You ultimately mock parts of the system
- They can be useful, and we will look at using Cypress to do so

#### Snapshot Tests / Visual Regression Tests

- People used to take screenshots of before and after of the application, and then the software would run the diff between the screenshots
- It used to fire a lot of false positives which is why it is not as popular these days
- With snapshots, they compared serialized values instead of visual values

#### Unit Tests

- Tests the smallest units of code
- Runs quickly

#### Problems with Automated Testing

- Tests take time to write. That can be very prohibitive though. If the lifecycle is shorter than the time it takes to write the test, you should probably reconsider.
- UI testing is hard. There are a lot of different approaches
- Can lead to a false sense of security (bugs can still slip through)! Even refactors which have passing tests might actually cause some things to slip through!

## Linting

### eslint

- Configurable: There are a tons of plugins for configuring it the way you want.
- It is good at catching "unfixable" error. In other words, errors that are difficult to fix automatically. It also helps to enforce style guides.
- Don't use for formatting though. It is pretty annoying to see red squigglies everywhere since people have different coding styles and minor things should not impede the developer experience. You should only get red squigglies for things that actually break code.

### Prettier

- Formats code
- Stops trivial arguments in PRs: Prior to this, there were a lot of pointless arguments
- Add to a pre-commit hook. Recommends `lint-staged` and `husky`

### Example of the number of configs you need

```
yarn add --dev \
eslint \
eslint-plugin-vue \
eslint-config-prettier \
eslint-config-standard \
...
```

Use `prettier/standard` helps eslint to only catch the errors that prettier doesn't catch

# Unit Tests

- They are fast and can run hundreds of them within seconds
- Easy to debug when they fail
- The problem is that you will not have much confidence in your application since pieces of your app works, but the rest is sinking (funny image of Titanic sinking with some parts still working)

## Topics

- Using Jest to write unit test
- Testing SFCS with Vue Test Utils
- using mocks
- Testing asynchronous code
- Testing Vuex
- Mocking file dependencies.

## Jest

- Testing library from Facebook
- It takes the kitchen sink approach and has pretty much everything you might want (and more)
- Assertions are very important because it tells you what the test is expected. So be descriptive when you can in order to make the developer debugging the issue's life easier! So use the appropriate matcher so that the right assertion messages are returned
- Exercise: Create tests for the capitalize filter in Vue.js

## Mocking

- Unit tests must be deterministic. Non-deterministic functions cause problems in unit tests: `Math.random` and `Date.now` will change each time you run them. So if you use them in the unit tests, they won't be reliable.
- So mocking is the solution for this to make sure that the same value is always used which makes the unit tests deterministic

## Unit Testing Components

Jest cannot use webpack because webpack is asynchronous.
Jest also uses modules, so you need to configure to compile it into 'commonjs'

### Configure

- Compile Vue SFCs with vue-jest
- Compile JavaScript with babel-jest
- You can avoid configuration with vue-cli

#### Basic Workflow

- You take a SFC and compile it
- The template is compiled into a render function which uses the createElement to create virtual DOM notes
- Basically to configure it, you add a transform object to transform files with the appropriate plugins
- Mounting a component
  - You create a construtor that extends the component and then mounts the component (which starts the process of virtually rendering the component).
  - Then you can interact with it with the $el
  - vue-utils library to mount components
  - vm is the common reference to the Vue instance: `wrapper.vm.$el.textContent`
  - The const is typically called wrapper since it contains a lot of other functions with it
- Typically you provide input (i.e., user action, props, store) into a component that then outputs (i.e., rendered output, Vue events, function calls, etc.)

#### JSDOM

- JavaScript implementation of the DOM
- Run tests in DOM environment in node
- Does not support layout
- Does not support navigation
- Generally it works out fine though
- Any impediments that you might run into are usually not worth effort of trying to fake it out in JSDOM

#### shallowMount

- This makes sure that the child components don't render anything and you're just testing what is rendering out underneath
- Some people think that you should render everything as you would on production, but this leads to buggy tests and while it might work for some, Edd recommends you go with the shallowMount route so that it is focused

#### Component Contract

- What do the users need to know in order for the component to do what it is intended to do
- Another way to think about it is the component's API. In other words, what is exposed to the outside world
- What would cause other components to break if it changed

#### Dispatching Events and Selectors

- vue-test-utils lets you use a `trigger` method to fire an event based on finding the element
- You can also use `.find` in order to select an element
  - A lot of people used to use `data-test` attributes to find the elements needed
  - It's common, but Edd doesn't prefer to add more attributes just for coding purpose
  - Instead he recommend things like `aria-labels` because the functionality is unlikely to change. And if it does, then you have probably broken the component and need to update the test
  - When it comes to CSS selectors, this is not that great because these change a lot

## Anatomy of a Unit Test

1. Arrange: Put everythin in order and prepare it for testing
2. Act: This is where you perform the actions needed that trigger that output that you expect
3. Assert: Checks that the actions performed have produced the output that you expect

## Testing components is difficult

- Unanswered question: There isn't always a right way of doing things
- Makes refactoring difficult: This means that when you split up components, you have to split up the tests too. This can increase the barrier to refactoring.
- High maintenance: They will often break when new features are added
- Assertions that test actual values are often more valuable than simply comparing booleans

# Code Coverage

- `jest --coverage`
- He doesn't use code coverage on any of his projects
- If you strive for 100% code coverage, you get a lower diminishing ROI over time
- The majority of benefit is in the first 50-70% of the code
- So rule of thumb, don't try for 100% code coverage for applications. It's not worth it.
- For libraries though, it's a different story.

# Vue Events

- Allows a child component to communicate to a parent component
- You need to test two different parts:
  - Test that a component reacts to event
  - Test that a component emitted the event

## Stubbing Components

- Vue Router is a great library, but the components are hard to test
- RouterLinkStub is something you can import from '@vue/test-utils'
  - Warning: Never install VueRouter on the base constructor
  - https://vue-test-utils.vuejs.org/guides/#using-with-vue-router

## Mocks

- There are mock functions and mock objects
- This makes it a little confusing
- You can use "toHaveBeenCalled" and "toHaveBeenCalledWith"
- They are great, but they can
  - Make tests more brittle
  - Can be buggy
  - Are extra overhead
- When should you use mocks
  - If the mocks are simple
  - When the unit contract is to call function

## Async Code

- Jest has first class support for async functions
- You can also convert your test function into an async function that waits a function
- Even if you try to resolve the Promise immediately, the assertion will get run first
- So the solution is to use the helper called `await flushPromises()`

## Microtasks

- A Promise callback is considered a microtask
- tasks-microtasks-queues-and-schedules from Jake Archibald
- What the Hell is the Event Loop? https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html

## Mocking Modules

- You can mockResolvedValue, but there is a difference with how the modules system works.

## Timer Functions

- The standard timer functions we're used needs to be mocked in unit tests
- Jest has their own mock functions for fake timers

## Testing Vuex Store

There are two main approaches:

1. Test store parts separately

- Benefits is that it's really fine-grained
- Problem is that it is very brittle

2. Test store instance

## Steps

1. Install Vuex
2. Create a store instance
3. Test instance

## Mocking Modules

- You can mockResolvedValue, but there is a difference with how the modules system works.

## Vuex-connected components

Two approaches

- Mock $store
- Install Vuex on localVue

## Snapshot Testing

- Visual regression testing is quite hard to setup
- The alternative is to use snapshot tests
  - They are similar to visual regression in that they compare a before and after
  - The main diffrence is that the value is serialized on a snapshot
- This is great for making sure presentational HTML doesn't change
- Lots of coverage with little code
- All you need to do is mount the component and pass the wrapper.element to matchSnapshot.

## Integration Tests

- Mock part of the system
- Tricky to define
- More coverage with less code
- Can be difficult to debug
- Recommends Cypress

## E2E Tests

- WebDriver
  - Automate the browser to interact with the entire app
  - No mocking at all
  - W3C Recommendation
  - It can be slow, flakey and difficult to debug
  - Recommends running WebDriver tests against a Docker instance

## Questions

1. What percentage of time does it typically take for the process?

It depends on the scope and breadth of the project. Other factors include how many contributors are on it where documentation is a lot more critical. It's hard to put a percentage on it, but usually it's primarily unit tests, some integration, and less e2e tests.

Cypress can be used for e2e, but it's good for integration tests. If you had it properly setup, you can maybe have like 20% unit, 70% integration and the 10% e2e? But even those numbers are very dependent on the application.

## Resources

- Slides: slides.com/eddyerburgh/testing-vue-workshop
- Repo: github.com/eddyerburgh/testing-vue-workshop
