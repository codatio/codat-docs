---
title: "Authorize with Embedded Link"
sidebar_label: Overview
description: "Embed our auth flow in your application with our low-code component"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Head>
  <meta property="og:image" content="/img/link/0014-embedded-link-demo.png"/>
</Head>

![](/img/link/0014-embedded-link-demo.png)

:::caution Embedded Link is in beta

Embedded Link is in beta, with more enhancements coming soon. You can report any issues with the component by contacting [Codat Support](mailto:support@codat.io).

If you have general feedback on the component, get in touch at [embedded-link@codat.io](mailto:embedded-link@codat.io) or use our <a href="https://portal.productboard.com/codat/12-public-devex-roadmap/c/485-embed-a-pre-built-auth-flow-in-your-website-or-app" target="_blank">public roadmap</a> to request new features and enhancements.

:::

## What's New

The June 2023 release of Embedded Link brings the following enhancements:

### Support for non-React JavaScript apps
Without a dependency on React, you can use Embedded Link with all JavaScript frameworks or even vanilla JavaScript.

### Increased display control
Now, you need to specify the dimensions of the Embedded Link component, which will expand to fit the given container size. Previously, the component used a fixed width and height.

### Navigation improvements
Source types (accounting, commerce, banking, and file upload) can now be connected in any order you choose.

### Performance improvements
Link now loads more quickly and can be loaded only when required.

### Connection status
The connection status - either success or error - is now shown during the Embedded Link flow. The SMB user can skip errors without interrupting the rest of the Link flow, for example:

![link-sdk_connection-status-error](/img/auth-flow/link-sdk_connection-status-error.png "Embedded Link SDK: Connection error dialog shown for the Codat Banking Sandbox integration.")

## Embedded Link overview

Use the Embedded Link solution to benefit from a pre-built code component that melds best practices together with our extensive experience in building authorization flows, while seamlessly embedding it into your webpage or front-end application.

Embedded Link is a JavaScript component that neatly sits in your front-end code, and can be deployed in a matter of minutes. The component works with all major JavaScript frameworks, including React, and also with vanilla JavaScript. You can choose to implement the component in TypeScript.

We built Embedded Link to be flexible so that you can integrate and initialize it in any way you want, and provide the user with a native feel of your authorization journey.

<div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
  <iframe
    src="https://www.loom.com/embed/431f05d4542545c58a3b389d822646a7"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  ></iframe>
</div>

## Features

* An authorization flow UI built with our expertise and best practices in mind
* Tailored to be flexible and support your custom onboarding and connection journey flows
* Compatible with both React and non-React JavaScript frameworks
* Fast and easy implementation with a pre-built code component
* Authentication in line with OAuth 2.0 standards
* UI that can be [customized](/auth-flow/customize/customize-link) and reflects your [company branding](/auth-flow/customize/branding)

## Resources

We've provided a [sample GitHub project](https://github.com/codatio/sample-project-link-sdk) that illustrates how to add the Embedded Link component to a React project.

## Prerequisites

If you haven't already done so, customize Link on the <a href="https://app.codat.io/settings/link-settings" target="_blank">**Link settings**</a> page in the Codat Portal. For example, add UI copy, set file upload options, choose to make steps optional, or disable steps. The settings apply to both Embedded Link and Hosted Link.

## Get started with non-React frameworks

Embedded Link is published to https://link-sdk.codat.io as an ES6 module. To use the Embedded Link component in your webpage or app with a non-React JavaScript framework, perform the following steps:

1. Using the [Create company](/codat-api#/operations/create-company) endpoint, create a company, and retain its `companyID`. The component needs the `companyId` parameter to open Link for a specified company. You can also create a company in the Codat Portal.

   :::note Company creation timeline
   We recommend you create a company when  your SMB customer signs up within your app.
   :::

1. Create a target `div` for the `CodatLink` component that has the following attributes:
   * An ID of `codat-link-container`.
   * A width and a height&mdash;we recommend 460px by 840px.
   
   The created `CodatLink` component expands to fit 100% of the specified dimensions. 
1. Import the Link SDK component. If you're using the component inside a `script` tag, the tag must have `type="module"` set. 

   ```bash
   import { CodatLink } from "https://link-sdk.codat.io";
   ```

1. Initialize the Link SDK component in your app, supplying the `companyId`of the company  you created in step one:

   ```js Title="Initialize Codat Link component (non-React)"
   const target = document.querySelector("#codat-link-container");
   new CodatLink({
    target,
    props: {
    companyId: "<CODAT_COMPANY_ID>",
    onClose: () => alert("onClose"),
    onConnection: () => alert("onConnection"),
    onFinish: () => alert("onFinish"),
    onError: () => alert("onError"),
    },
   });
   ```

1. If a `browserslist` entry exists in your `package.json` file, update it with the following entries for production:

   ```js
    "production": [
      ">0.2% and supports es6-module",
      "not dead",
      "not and_uc >= 0"
    ],
   ```

1. If you're using content security policy (CSP) headers, you *must* edit the headers as follows.
   * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
   * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
1. If you're using TypeScript,  you can use the `types.d.ts` type declaration file. The contents of this file can be added to a new or existing `.d.ts` file.

## Get started with React

To use the Embedded Link component in your webpage or app with React, perform the following steps:

1. Using the [Create company](/codat-api#/operations/create-company) endpoint, create a company, and retain its `companyID`. The component needs the `companyId` parameter to open Link for a specified company. You can also create a company in the Codat Portal.

   :::note Company creation timeline
   We recommend you create a company when your SMB customer signs up within your app.
   :::
   
1. **Extend your type declarations with our types** - download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
2. **Create a component that mounts the SDK** - you can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/snippets/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your React or TypeScript app
1. If a `browserslist` entry exists in your `package.json` file, update it with the following entries for production:

   ```js
    "production": [
      ">0.2% and supports es6-module",
      "not dead",
      "not and_uc >= 0"
    ],
   ```
   
1. If you're using content security policy (CSP) headers, you *must* edit the headers as follows:
   * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
   * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.

## Embedding the Link application

Initialize the Codat Link component in your app:

<Tabs>
<TabItem value="react" label="React">

```js
<CodatLink
  companyId="0f19b01c-3d1f-4dbf-80b6-37ab241bea2e"
  onConnection={(id) => alert("Success: Connection " + id + " established")} // Called each time a connection is established
  onFinish={() => alert("Finished")} // Called when the flow is completed
  onClose={() => alert("Closed")} // Called when the user clicks 'X' or completes the whole flow
  onError={(err) => alert("Error: " + err)} // Called when an error is reached
/>
```

</TabItem>

<TabItem value="next" label="Next.js">

```js
import dynamic from 'next/dynamic'; // Use dynamic imports instead for NextJS
import '@codat/link-sdk/index.css';
  
const CodatLink = dynamic(
  () => import('@codat/link-sdk').then((mod) => mod.CodatLink),
  { ssr: false }
);

const AuthFlow = ({ id }) => {
  return (
    <CodatLink
      companyId="0f19b01c-3d1f-4dbf-80b6-37ab241bea2e"
      onConnection={(id) => alert("Success: Connection " + id + " established")} // Called each time a connection is established
      onFinish={() => alert("Finished")} // Called when the flow is completed
      onError={() => alert("error")}
      onClose={() => alert("on close")}
    />
  );
};
```

</TabItem>
</Tabs>

## Pitfalls

- **Mobile compatibility** - The component is not optimized for use on mobile devices.

## Complete button

At the end of the Embedded Link flow, the **Complete** button is only displayed if:
- All connections flagged as required were made successfully.
- At least one connection was successful. 

## Getting help

To report any issues with this library, you can [get in touch](mailto:embedded-link@codat.io) with us.
