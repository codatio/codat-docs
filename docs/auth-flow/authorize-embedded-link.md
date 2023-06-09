---
title: "Authorize with Embedded Link"
sidebar_label: Overview
description: "Embed Link in your application with our authorization flow component"
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

## What's New, June 2023

The June 2023 release of Embedded Link brings the following enhancements:

* **Support for non-React JavaScript apps.** Without a dependency on React, you can use Embedded Link with all JavaScript frameworks, or even with vanilla JavaScript.
* **Increased display control.** Now, you specify dimensions for the Embedded Link component, which will expand to 100% of the given container size. Previously, the component used a fixed width and height.
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

* An authorization flow UI built with our expertise and best practices in mind
* Tailored to be flexible and support your custom onboarding and connection journey flows
* Compatible with both React and non-React JavaScript frameworks
* Fast and easy implementation with a pre-built code component
* Authentication in line with OAuth 2.0 standards
* UI that can be [customized](/auth-flow/customize/customize-link) and reflects your [company branding](/auth-flow/customize/branding)

## Resources

Our [sample project](https://github.com/codatio/sample-project-link-sdk) shows you how to add Link to a default React project.

## Prerequisites

If you're using React, you'll need to use React version 18 when embedding the Link component into your webpage or application. The component is also backwards compatible with React version 17.

If you haven't already done so,  customize Link on the <a href="https://app.codat.io/settings/link-settings" target="_blank">**Link settings**</a> page in the Codat Portal. For example, add UI copy, set file upload options, and choose whether steps in the Link flow are optional. These settings are applied to Embedded Link as well as Hosted Link.

## Get started with non-React frameworks

Embedded Link is published to `https://link-sdk.codat.io` as an ES6 module. To use the Embedded Link component in your app with a non-React JavaScript framework, perform the following steps:

1. Using the [Create company](/codat-api#/operations/create-company) endpoint, create a company, and retain its `companyID`. The component needs the `companyId` parameter to open Link for a specified company. For testing purposes, you can create a company in the Codat Portal instead.

   :::note
   We recommend you create a company at the same time as your SMB customer signs up within your app.
   :::
   
1. Create a target `div` for the `CodatLink` component that has the following attributes:
   * An ID of `codat-link-container`.
   * A width and height&mdash;we recommend 460 by 840px.
   The created `CodatLink` component will expand to 100% of the specified dimensions of the `div` container. 
1. Import the component. If you're using the component inside a `script` tag, the tag must have `type="module" import { CodatLink } from "https://link-sdk.codat.io";` set.
1. Initialize the Codat Link component in your app and supply the `companyId` you created in step one:

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
   
1. If you're using content security policy (CSP) headers, you *must* edit the headers as follows.
   * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
   * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
1. If you're using TypeScript,  you can use the `types.d.ts` type declaration file. The contents of this file can be added to a new or an existing `.d.ts` file.

## Get started with React or TypeScript

To use the Embedded Link component in your app with either React or TypeScript, perform the following steps:

1. Create a company and retain its company ID (for instructions, see step one of the preceding task).

   :::note
   We recommend you create a company at the same time as your SMB customer signs up within your app.
   :::
   
1. Copy and paste the contents of the <a href="https://dev.azure.com/codat/ea17b8fb-0083-4bb3-bcac-8a817722f00a/_apis/wit/attachments/d4cde71f-a328-44b7-a573-ed5ad9adc6bb?fileName=types.d.ts&download=true" target="_blank"> `types.d.ts`</a> file into new or existing `.d.ts` file.
1. Copy and paste the <a href="https://dev.azure.com/codat/ea17b8fb-0083-4bb3-bcac-8a817722f00a/_apis/wit/attachments/11520cd5-799f-4fc2-9497-48d5b509a471?fileName=CodatLink.tsx&download=true" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your React or TypeScript app. Initialize this component where required.
1. If you have a `browserslist` entry in your `package.json` file, make sure it's updated for production as shown in step five of the preceding task.
1. If you're using content security policy (CSP) headers, update them with the information shown in step six of the preceding task.

## Embedding the Link application

(Q - do we need to keep / move the code snippets below?)
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
- **Webpack issue** -  To be confirmed.

## Getting help

To report any issues with this library, you can [get in touch](mailto:embedded-link@codat.io) with us.
