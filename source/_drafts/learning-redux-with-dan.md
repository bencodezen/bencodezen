---
title: learning-redux-with-dan
tags:
---

Three core principles of Redux:

1. There is a single source of truth.

In other words, the state of the entire application is stored within a single tree.

2. State is read-only

In other words, the state can never be overwritten. Instead, actions are the only way to emit a new state which appears "changed" but is actually separate from the previous state.

3. Changes are only made with pure functions

Similar to core principle #2, you never ever mutate the previous state. Instead, you take a state and an action in order to return a new state.

Redux variables have the following main methods
	- getState
	- displach
	- subscribe = register a callback when a dispatch occurs