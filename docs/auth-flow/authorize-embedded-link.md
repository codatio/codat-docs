---
title: "Authorize with Embedded Link"
sidebar_label: Overview
description: "Use Codat's authorization flow component and embed it in your application"
createdAt: "2022-09-27T16:13:02.514Z"
updatedAt: "2022-12-13T11:19:58.588Z"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::caution Early access

Embedded Link is still being developed. If you run into issues with the Embedded Link solution or have any feedback, please [get in touch](mailto:embedded-link@codat.io), or even reach out to us ahead of time for advice!

You can also [request features and suggest improvements](https://portal.productboard.com/codat/12-public-devex-roadmap/c/485-embed-a-pre-built-auth-flow-in-your-website-or-app) in our roadmap - we have further improvements on the way!
:::

Use the Embedded Link solution to benefit from a pre-built code component that melds best practices together with our extensive experience in building authorization flows, while seamlessly embedding it into your webpage or front-end application.

Codat's Embedded Link is a React component that neatly sits in your front-end code, and can be deployed in a matter of minutes.

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
5. UI that can be [customized](/set-up-link) and reflects your [company branding](/set-up-your-company-branding)

## Resources

- Grab our component library on [npm](https://www.npmjs.com/package/@codat/link-sdk)
- View [a sample project](https://github.com/codatio/link-sdk-sample-project) adding Link to a default project

## Prerequisites

You should use React 18 when embedding the Link component into your webpage or application. However, the component is also backwards compatible with React 17.

## Getting started

Codat's Embedded Link component is published to <a className="external" href="https://www.npmjs.com/package/@codat/link-sdk" target="_blank">npm</a> as a React library.

You can install this library using npm:

```
npm i @codat/link-sdk
```

After installing the library, add it to your project:

```
import { CodatLink } from '@codat/link-sdk';
import '../node_modules/@codat/link-sdk/index.css';
```

## Embedding the Link application

The component requires a `companyId` parameter to open Link for a specific company. To obtain the `companyId`, first [create a Codat company](/managing-companies) for your customer. We recommend doing that at the same time as your SMB customer signs up within your app.

From the response to company creation, retain the `companyId` parameter. Then, initialize the Codat Link component in your app:

<Tabs>
<TabItem value="react" label="React">

```js
<CodatLink
  companyId="a00a0a00-0a0a-a0aa-0000a00aa00a"
  onConnection={(id) => alert("Success: Connection " + id + " established")} // Called each time a connection is established
  onFinish={() => alert("Finished")} // Called when the flow is completed
  onClose={() => alert("Closed")} // Called when the user clicks 'X' or completes the whole flow
  onError={(err) => alert("Error: " + err)} // Called when an error is reached
/>
```

</TabItem>

<TabItem value="next" label="Next.js">

```js
import dynamic from "next/dynamic"; // Use dynamic imports instead for NextJS

const CodatLink = dynamic(
  () => import("@codat/link-sdk").then((mod) => mod.CodatLink),
  { ssr: false }
);

const AuthFlow = ({ id }) => {
  return (
    <CodatLink
      companyId="0f19b01c-3d1f-4dbf-80b6-37ab241bea2e"
      onSuccess={() => alert("success")}
      onError={() => alert("error")}
      onClose={() => alert("on close")}
    />
  );
};
```

</TabItem>
</Tabs>

## Pitfalls

- Disable `React.StrictMode` in your project.
- **React versions** - Component is built using React 18, but is backwards compatible with React 17.
- **Mobile compatibility** - The component is not optimized for use on mobile devices.
- **Using NextJS** - Use dynamic imports (as per the NextJS code snippet above). As above, React.StrictMode should still be disabled.

## Getting help

To report issues with this library, please [get in touch](mailto:embedded-link@codat.io) with us.
