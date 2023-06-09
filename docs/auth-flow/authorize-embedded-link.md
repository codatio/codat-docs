---
title: "Authorize with Embedded Link"
sidebar_label: Overview
description: "Use Codat's authorization flow component and embed it in your application"
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

## What's New June 2023

The June 2023 release brings the following enhancements to Embedded Link:

* **Support for non-React JavaScript apps.** Without a dependency on React, you can use Embedded Link with all JavaScript frameworks, or even with vanilla JavaScript.
* **Increased display control.** You can specify dimensions for the Embedded Link component, which will expand to fit 100% of the given container. Previously, the component used a fixed width and height.
* **Navigation improvements.** Source types (accounting, commerce, and banking) can now be connected in any order you choose.
* **Performance improvements.** Link now loads quicker and can be loaded only when required.

## Embedded Link overview

Use the Embedded Link solution to benefit from a pre-built code component that melds best practices together with our extensive experience in building authorization flows, while seamlessly embedding it into your webpage or front-end application.

Embedded Link is a JavaScript component that neatly sits in your front-end code, and can be deployed in a matter of minutes. It supports multiple JavaScript frameworks, including React and TypeScript.

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

1. An authorization flow UI built with our expertise and best practices in mind
2. Tailored to be flexible and support your custom onboarding and connection journey flows
3. Fast and easy implementation with a pre-built code component
4. Authentication in line with OAuth 2.0 standards
5. UI that can be [customized](/auth-flow/customize/customize-link) and reflects your [company branding](/auth-flow/customize/branding)

## Resources

Our [sample project](https://github.com/codatio/sample-project-link-sdk) shows you how to add Link to a default React project

## Prerequisites

If you're using React, you'll need to use React version 18 when embedding the Link component into your webpage or application. The component is also backwards compatible with React version 17.

## Getting started with non-React frameworks

Embedded Link is published to `https://link-sdk.codat.io` as an ES6 module. To use the Embedded Link component in your app, perform the following steps:

1. Using the [Create company](/codat-api#/operations/create-company) endpoint, create a company, and obtain its `companyID`. The component needs this parameter to open Link for a specified company. For testing purposes, you can create a company in the Codat Portal instead.   
1. Create a target `div` for the `CodatLink` component that has the following attributes:
   * An ID of `codat-link-container`.
   * A width and height&mdash;we recommend 460 by 840px.
   The created `CodatLink` component will expand to fill 100% of the specified dimensions of the `div` container. 
1. Import the component. If you're using the component inside a `script` tag, the tag must have `type="module" import { CodatLink } from "https://link-sdk.codat.io";` set.
1. Initialize the component using the `companyId` you created in step one:

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
   
1. If you have a `browserslist` entry in your `package.json` file, make sure your production `browserslist` contains the following entries:

   ```js
    "production": [
      ">0.2% and supports es6-module",
      "not dead",
      "not and_uc >= 0"
    ],
   ```
   
1. If you're using content security policy (CSP) headers, you *must* add the following to the header:
   * `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
   * `unsafe-inline` to `style-src`. Do *not* use a hash because this might change at any time without warning.
1. If you're using TypeScript,  you can use the `types.d.ts` type declaration file. The contents of this file can be added to a new or an existing `.d.ts` file.

## Getting started with React and TypeScript -language

1. Obtain a Codat company ID. See step one in the previous section.
2. Copy and paste the contents of this file [types.d.ts](https://dev.azure.com/codat/ea17b8fb-0083-4bb3-bcac-8a817722f00a/_apis/wit/attachments/d4cde71f-a328-44b7-a573-ed5ad9adc6bb?fileName=types.d.ts&download=true) into a new or existing .d.ts file.
3. Copy and paste the component from this file CodatLink.tsx. Initialise this component where required.
4. If you have a browserslist entry in package.json, make sure it is updated as in step 5 in non-react framework options.
5. If you are using content security policy (CSP) headers, make sure they are updated as in step 6 in non-react framework options.

## Embedding the Link application - keep or remove?

// L: I think it is ok to keep this as javascript but with a note that if someone is using typescript they can add in our types declaration file

//L: The code to implement in JavaScript and Typescript should be the same

The component requires a `companyId` parameter to open Link for a specific company. To obtain the `companyId`, first [create a Codat company](/using-the-api/managing-companies) for your customer. We recommend doing that at the same time as your SMB customer signs up within your app.

From the response to company creation, retain the `companyId` parameter. Then, initialize the Codat Link component in your app:

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

## Pitfalls - to update

- **Mobile compatibility** - The component is not optimized for use on mobile devices.
- Webpack issue??? To be confirmed.

## Getting help

To report issues with this library, please [get in touch](mailto:embedded-link@codat.io) with us.
