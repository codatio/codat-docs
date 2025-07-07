---
title: "Migration guide"
description: "Learn how to migrate from a custom link flow to our embedded Link component"
---

import CodeExamples from "./_partial-auth-flow-examples.md";

## Overview

This guide helps you migrate from a custom link flow to our embedded **Link** component. The embedded Link offers a more streamlined, secure, and maintainable way to connect your customers’ financial software.

## Prerequisites

You need a JavaScript application to render the Link component. Our component works with vanilla JavaScript and all major JavaScript frameworks. TypeScript is supported and recommended.

:::warning Do not use Link inside an iframe. It won’t work due to [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) restrictions.
:::

## Your current implementation

### User experience

Your current implementation likely starts with a consent page, confirming that your customers are happy to share their financial data with you before they interact with Codat.
This often includes information on the purpose, platform data accessed, and your retention policy. 

Codat's Link component optionally supports consent management and more, as part of your migration you may wish to leverage this native functionality to remove maintenance overhead in your application.

### Custom link workflow

There are two common approaches for custom link flows, depending on your use case:

- **Create a company with a platformKey:**  
  You pass the company name and the financial software’s `platformKey` in one API call. Best suited for users connecting to a single financial system.

- **Create company and connection separately:**  
  You create the company first, then create a connection. This approach is typically followed when connecting several platforms for one customer e.g. Accounting Platform and Banking.

![Custom Link workflow](/img/auth-flow/migration-guide/custom-link-flow.png)

## The Link approach

The embedded Link component replaces your custom implementation while preserving the user experience elements you've already built. Instead of managing connection logic, API calls, and UI components in your frontend:

1. Your backend requests an access token from Codat’s API.
2. You pass the access token and company name to the Link component.
3. The user completes the connection flow in the embedded UI.

Link supports both of your current approaches — whether you're using the platform key flow for single connections or the two-step approach for multiple software connections.

![Embedded Link workflow](/img/auth-flow/migration-guide/link-flow.png)

### Retain your current user experience

Your existing consent page, data sharing policies, and user onboarding flow don't need to change. Link is highly customizable, allowing you to:

- **Preserve your consent flow:** Use custom consent pages with your existing messaging about data purpose and retention
- **Maintain your branding:** Control colors, logos, and styling to match your application
- **Choose your layout:** Display Link in modal or non-modal views based on your current UI patterns
- **Control the journey:** Decide when and how users interact with the connection flow

This means you can migrate your implementation to leverage the features of our Link product, whilst maintaining your existing customer experience and consent journey.

Learn how to [customize your auth flow](/auth-flow/customize/sdk-customize-code)

## Migration steps

### Step 1: Set up CORS

[Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) (CORS) settings are required for access tokens to work. Configure CORS settings on your Codat instance:

- Use [Set CORS](/platform-api#/operations/set-cors-settings) settings to register allowed domains
- Use [Get CORS](/platform-api#/operations/get-cors-settings) settings to view your current configuration

### Step 2: Implement access token retrieval

1. Create a backend endpoint to proxy Codat's API
2. In that endpoint, call `GET /accessToken` to retrieve an access token for the Link component
3. Return the `accessToken` in the response

### Step 3: Embed Link component

:::tip Install the npm package

Codat provides a `types` package on [npm](https://www.npmjs.com/package/@codat/sdk-link-types) that contains type definitions for our Link component primitives. We recommend using this package as it simplifies your implementation.

`npm install @codat/sdk-link-types`

:::

<CodeExamples />

Configure Link to match your current implementation:

- **[Choose your layout:](/auth-flow/customize/sdk-customize-code#properties)** Configure Link to display in modal or non-modal views to match your current UI
- **[Preserve your consent flow:](/auth-flow/optimize/privacy)** Use Link's consent options or integrate with your existing consent pages
- **[Match your branding:](/auth-flow/customize/branding)** Apply your color scheme, logos, and styling using Link's customization options

:::note Dynamic imports

Link SDK is imported at runtime, so you'll always get the latest version of our auth flow UI with no risk of staleness. To achieve this, we use ES6's [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) feature (aka dynamic imports).

:::

### Step 4: Remove custom link logic and UI

- Remove your existing API calls:
  - If you use the platform key flow, remove the [Create company](/platform-api#/operations/create-company) calls
  - If you use the two-step flow, remove both [Create company](/platform-api#/operations/create-company) and [Create connection](/platform-api#/operations/create-connection) calls
- Remove UI elements that Link now handles:
  - Custom integration selection interfaces
  - Any consent pages now managed by Link

## Read next

- [Customize your auth flow](/auth-flow/customize/sdk-customize-code)


