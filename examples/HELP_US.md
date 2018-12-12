# Contribute

We need to create new components for other framekworks. This document
describes the stuff to get a full featured repository.

Licence is MIT.

## Context

We provide a library to add a payment form easily on your web-site.
This library is always loaded from our servers. you can't add it directly
in your build system (like webpack).

To make the developer life easier, we provide components for the well known
javascript frameworks like angular, react and vue.js.

The component helps the developer to integrate easily the payment form
in the target framework. We try to stick to the framework philosophy as much
as possible, and hide the complexity about using an external library.

For the developer point of view, everything should work like a standard
integration will all libraries packed in your application.

The component is compiled with the developer packer. but the core library
is loaded dynamically.

## Basic stuff

The repository contains the source code for a component to use the Lyra
embedded payment form.

The repository should allow to:

- Easily develop the component for maintainers
- Allow to run, build and unitary test the plugin/extension
- Tests should run on travis automatically on every commit
- A CHANGELOG.md
- a github integration documentation

You should add widely used badges:

- Build pass (with tests, from travis)
- Licence badge

## Component configuration

There are 3 configuration levels you should provide and test.
See vue.js readme file:

- setup parameters
- template parameters
- runtime parameters

Every calls should work even if the underlayer library is not loaded.

As an example, on the Vue2 component development, a singleton service
takes place in every component instance to accumulate parameters before
the underlayer library is loaded. When loaded, setup, template and runtime
parameters are applied.

## About themes

To apply a theme, you should dynamically load 2 others external components:

- a css file
- a js file

Take care about the potential css flickering !!!!

see vue.js component for more details.

## Examples

Write the following examples:

- minimal: a basic example using cli basic default boilerplate
- pre_loaded: a button that display the form as quick a possible

Each example should be documented and tested.
