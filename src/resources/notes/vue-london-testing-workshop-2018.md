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

## Resources

- Slides: slides.com/eddyerburgh/testing-vue-workshop
- Repo: github.com/eddyerburgh/testing-vue-workshop
