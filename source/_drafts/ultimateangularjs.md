---
title: ultimateangularjs
tags:
---

AngularJS apps typically consists of:

* Modules - chunks of codes that contain routes, views, components, services. A block of code that you can pull out of your application and drop into another one.

* Routing + Views - controls navigation for the user; creates the Controllers and Views

* Controllers - responsible for View logica nd exposing properties for View binding

* Components - declares new templates, bind and display Controller properties

* Directives - bind to existing templates/HTML and add new behavior

* Services - contains business logic, non-view specific, such as API requests

Angular 1.5 introduced components as opposed to only having directives.

So the basic trees would be:

1. Root module - top level module, pulls in comon and component sub-modules
2. Component - standalone features built with component architecture
3. Common module - application specifi module or global common functionality

One-way data flow introduced in Angular 1.5.

Property binding
	- bind to custom HTML props
	- pass data down via one-way data-binding
	- stateful and stateless components

Event binding
	- delegate parent methods through custom HTML props
	- clone parent data, treating it as immutable
	- pass mutated clone back up through events
