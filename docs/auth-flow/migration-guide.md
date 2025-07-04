---
title: "Migration guide"
description: "Learn how to migrate from a custom link flow to our embedded Link component"
---

import CodeExamples from "./_partial-auth-flow-examples.md";

## Overview

This guide helps you migrate from a custom link flow to our embedded **Link** component. The embedded Link offers a more streamlined, secure, and maintainable way to connect your customers’ financial software.

## Prerequisites

You need a JavaScript application to render the component. Link works with all major JavaScript frameworks—including React—and also with vanilla JavaScript. TypeScript is supported and recommended.

:::warning Do not use Link inside an iframe. It won’t work due to [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) restrictions.
:::

## Your current implementation

There are two common approaches for custom link flows, depending on your use case:

- **Create a company with a platformKey:**  
  You pass the company name and the financial software’s `platformKey` in one API call. Best suited for users connecting to a single financial system.

- **Create company and connection separately:**  
  You create the company first, then create a connection. This supports multiple financial systems.

![Custom Link workflow](/img/auth-flow/migration-guide/custom-link-flow.png)

## The Link approach

The embedded Link component simplifies your flow. Instead of managing connection logic in your frontend:

1. Your backend requests an access token from Codat’s API.
2. You pass the access token and company name to the Link component.
3. The user completes the connection flow in the embedded UI.

This supports both single and multiple software connections.

![Embedded Link workflow](/img/auth-flow/migration-guide/link-flow.png)

## Migration steps

### Step 1: Remove custom link logic and UI

- Remove your existing API calls:
  - If you use the platformKey flow, remove the [Create company](/platform-api#/operations/create-company) calls.
  - If you use the two-step flow, remove both [Create company](/platform-api#/operations/create-company) and [Create connection](/platform-api#/operations/create-connection) calls.
- Remove UI elements that allow users to choose financial software.

### Step 2: Implement access token retrieval

1. Create a backend endpoint to proxy Codat’s API.
2. In that endpoint, call `GET /accessToken` to retrieve an access token for the Link component.
3. Return the `accessToken` in the response.

### Step 3: Embed Link component

:::tip Install the npm package

Take advantage of our [npm package](https://www.npmjs.com/package/@codat/sdk-link-types) so you don't have to manually import and maintain type definitions. You will benefit from it the most if you are using Typescript, so our examples are prepared with that assumption.

`npm install @codat/sdk-link-types`

:::

<CodeExamples />

:::note Dynamic imports

Link SDK is imported at runtime, so you'll always get the latest version of our auth flow UI with no risk of staleness. To achieve this, we use ES6's [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) feature (aka dynamic imports).

:::

### Set up CORS

[Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) (CORS) settings are required for access token to work. To allow your app to fetch access tokens, configure CORS settings on your Codat instance:

- Use [Set CORS](/platform-api#/operations/set-cors-settings) settings to register allowed domains.
- Use [Get CORS](/platform-api#/operations/get-cors-settings) settings to view your current list.

## Read next

- [Customize your auth flow](/auth-flow/customize/sdk-customize-code)


