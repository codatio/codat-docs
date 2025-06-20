---
title: "2024-01-10: Deprecation of legacy @codat/link-sdk"
date: "2023-09-20"
tags: ["Deprecation", "Link"]
authors: dcoplowe
---

On **January 10, 2024**, we will deprecate the [@codat/link-sdk](https://www.npmjs.com/package/@codat/link-sdk) in favor of our new alternative.

<!--truncate-->

## Action required

The @codat/link-sdk has been replaced by a new version of [Embedded Link](https://docs.codat.io/auth-flow/authorize-embedded-link) - a pre-built JavaScript component that works with _all_ major JavaScript frameworks, including vanilla JavaScript, Angular, and Vue, as well as React.

We've provided sample projects to make switching to Embedded Link simple, no matter your technology choice:

- [React](https://github.com/codatio/sdk-link/tree/main/examples/languages/react)
- [Next](https://github.com/codatio/sdk-link/tree/main/examples/languages/next)
- [JavaScript](https://github.com/codatio/sdk-link/tree/main/examples/languages/javascript)
- [Angular](https://github.com/codatio/sdk-link/tree/main/examples/languages/angular)
- [Vue](https://github.com/codatio/sdk-link/tree/main/examples/languages/vue)
- [Svelte](https://github.com/codatio/sdk-link/tree/main/examples/languages/svelte)

## Expected impact if no action is taken

We will stop supporting this package. This means we will not actively address security updates and bugs, and support will not be provided. The package itself will continue to work despite being deprecated.

:::note Get ahead

You can get ahead of this change by replacing @codat/link-sdk with [Embedded Link](https://docs.codat.io/auth-flow/authorize-embedded-link) in your application.

:::
