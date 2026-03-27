---
title: "Deprecation of `@codat/sdk-bank-feeds-types` and `@codat/sdk-connections` packages"
date: "2026-03-27"
tags: ["Deprecation"]
authors: tom-binnington-codat
---

Codat is consolidating the `@codat/sdk-bank-feeds-types` and `@codat/sdk-connections` npm packages. These packages will no longer be published separately.

<!--truncate-->

As part of our effort to simplify our technical estate, we are merging the type definitions from `@codat/sdk-bank-feeds-types` and `@codat/sdk-connections` into `@codat/sdk-link-types` using subpath exports. This reduces the number of packages you need to manage and aligns all SDK type definitions under a single package.

The existing versions of the deprecated packages will continue to work as thin re-exports, but no new versions will be published.

### New import paths

To use the new `@codat/sdk-link-types` package, replace your existing imports with the new subpath exports:

```typescript
// Before
import { CodatConnectionsProps } from "@codat/sdk-connections";
import { CodatBankFeedsProps } from "@codat/sdk-bank-feeds-types";

// After
import { CodatConnectionsProps } from "@codat/sdk-link-types/connections";
import { CodatBankFeedsProps } from "@codat/sdk-link-types/bank-feeds";
```

Additionally, the `initializeCodatBankFeeds` function has been renamed to `initCodatBankFeeds`. The old function name is available as a deprecated alias.

## Action required

If you need to bump the package version or want to move to using `@codat/sdk-link-types` to take advantage of future feature releases, follow these steps:

1. Update your project to use `@codat/sdk-link-types@1.11.0` or later.
2. Replace imports from `@codat/sdk-connections` with `@codat/sdk-link-types/connections`.
3. Replace imports from `@codat/sdk-bank-feeds-types` with `@codat/sdk-link-types/bank-feeds`.
4. If you use `initializeCodatBankFeeds`, rename it to `initCodatBankFeeds`.

## Expected impact if no action is taken

Your existing code will continue to work as the deprecated packages now re-export from `@codat/sdk-link-types`. However, the old packages won't receive updates and will eventually be removed. You may also miss feature enhancements that will be published under `@codat/sdk-link-types`. You will see deprecation warnings in your IDE for the old init functions.
