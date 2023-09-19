---
title: "2023-10-05: Deprecation of legacy @codat/link-sdk"
date: "2023-09-19"
tags: ["Deprecation", "Link"]
authors: dcoplowe
---

On the **10th January, 2023**, we will be deprecating [@codat/link-sdk](https://www.npmjs.com/package/@codat/link-sdk).

<!--truncate-->

## Action required

The @codat/link-sdk has been replaced by a new version of [Embedded Link](https://docs.codat.io/auth-flow/authorize-embedded-link) - a pre-built JavaScript component that works with *all* major JavaScript frameworks, including vanilla JavaScript, Angular, and Vue as well as React.

We've made switching over to Embedded Link simple thanks to our example applications written in

- [React](https://github.com/codatio/sdk-link/tree/main/examples/react)
- [Next](https://github.com/codatio/sdk-link/tree/main/examples/next)
- [JavaScript](https://github.com/codatio/sdk-link/tree/main/examples/javascript)
- [Angular](https://github.com/codatio/sdk-link/tree/main/examples/angular)
- [Vue](https://github.com/codatio/sdk-link/tree/main/examples/vue)
- [Svelte](https://github.com/codatio/sdk-link/tree/main/examples/svelte)

that show you how to implement Embedded Link in your application.

## Expected impact if no action is taken

We will stop supporting this package meaning that bugs will not be resolved and security updates will not be provided.

:::note Get ahead

You can get ahead of this change by replacing @codat/link-sdk with [Embedded Link](https://docs.codat.io/auth-flow/authorize-embedded-link) in your application.

:::