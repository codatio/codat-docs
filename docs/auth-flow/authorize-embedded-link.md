---
title: "Authorize with Embedded Link"
sidebar_label: Overview
description: "Embed our auth flow in your application with our low-code component"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import SocialImages from "@components/global/SocialImages";

<SocialImages imgSrc="img/auth-flow/embedded-link-selection.png"/>

![](/img/auth-flow/embedded-link-selection.png)

<details>
<summary><b>What's new in the latest release?</b></summary>

The June 2023 release of Embedded Link brings the following enhancements:
- **Support for non-React JavaScript apps** - Without a dependency on React, you can use Embedded Link with all JavaScript frameworks or even vanilla JavaScript.
- **Increased display control** - You now need to specify the dimensions of the Embedded Link component, which will expand to fit the given container size. Previously the component used a fixed width and height.
- **Navigation improvements** - Source types (accounting, commerce, banking, and file upload) can now be connected in any order you choose.
- **Performance improvements** - Link loads more quickly and can be loaded only when required.
- **Connection status** - The connection status (success or error) is now shown during the Embedded Link flow. The SMB user can skip errors without interrupting the rest of the Link flow, for example:

![link-sdk_connection-status-error](/img/auth-flow/link-sdk_connection-status-error.png "Embedded Link SDK: Connection error dialog shown for the Codat Banking Sandbox integration.")
</details>

## Embedded Link overview

Embedded Link is a pre-built JavaScript component that neatly sits in your front-end code, and can be deployed in a matter of minutes. Use it to benefit from our extensive experience in building authorization flows melded with best practices, while seamlessly embedding it into your webpage or front-end application.

The component works with all major JavaScript frameworks, including React, and also with vanilla JavaScript. You can choose to implement the component in TypeScript.

We built Embedded Link to be flexible so that you can integrate and initialize it in any way you want, and provide the user with a native feel of your authorization journey.

## Features

* **Intuitive UI** based on our expertise and learned best practices, ensuring a high-converting auth flow
* **Authentication** in line with OAuth 2.0 standards
* **[Customizable](/auth-flow/customize/customize-link) UI** that reflects your [company branding](/auth-flow/customize/branding)
* **React and non-React** JavaScript compatible
* **Fast implementation** with a pre-built code component
* **Dynamic imports** meaning your auth flow will never fall behind our API

:::caution Embedded Link is in beta

Embedded Link is in beta, with more enhancements coming soon. You can report any issues with the component by contacting [Codat Support](mailto:support@codat.io).

If you have general feedback on the component, get in touch at [embedded-link@codat.io](mailto:embedded-link@codat.io) or use our <a href="https://portal.productboard.com/codat/12-public-devex-roadmap/c/485-embed-a-pre-built-auth-flow-in-your-website-or-app" target="_blank">public roadmap</a> to request new features and enhancements.
:::

:::note Dynamic imports

npm is the default package manager for JS development. However, where a package is highly coupled to an API, version control becomes a big risk to the integrity of your application. This is particularly the case for Codat's APIs as they are are non-versioned ([see our change management policy](/introduction/change-policy)).

Link SDK is imported at runtime, meaning you'll always get the latest version of our auth flow UI, and there's no risk of staleness vs. our APIs. To achieve this, we make use of ES6's [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) feature (aka dynamic imports).

As with all Codat products, Link SDK is still subject to [our change management policy](/introduction/change-policy) and appropriate notice will be given for changes to our auth flow UI and any associated APIs. We have rigorous testing and security measures in place to ensure you can import our SDK with confidence.
:::

## Resources

We've provided a [repo with examples on GitHub](https://github.com/codatio/sdk-link/tree/main/examples) that illustrate how to add the Embedded Link component to your project.

## Prerequisites

- **Customized auth flow settings** - If you haven't already done so, customize Link on the <a href="https://app.codat.io/settings/link-settings" target="_blank">**Link settings**</a> page in the Codat Portal. For example, add UI copy, set file upload options, choose to make steps optional, or disable steps. The settings apply to both Embedded Link and Hosted Link.
- **Your application** - You'll need a JavaScript application to render the component in (e.g. React, Angular). It should take care of creating and retrieving the `companyId` of any company you want to authorize.

## Get started

<Tabs>
<TabItem value="react" label="React">

### Get started with React

For an example of the component in action, [see our examples](https://github.com/codatio/sdk-link/tree/main/examples/react/README.md).

1. **Create a component that mounts the SDK.** You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/snippets/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your React or TypeScript app.
2. **Use this component.** We suggest wrapping the component in a modal (default dimensions are 460px by 840px). The component can also take care of such logic as when to [display the component](https://github.com/codatio/sdk-link/blob/main/examples/react/src/App.tsx), passing in the relevant company ID, etc.

  ```js
  // AuthFlow.tsx

  import {
    ErrorCallbackArgs,
  } from "https://link-sdk.codat.io";

  import CodatLink from './CodatLink';

  const AuthFlow = ({ companyId }: {companyId: Company["id"]}) => {
    return (
      <div>
        <p>Some content</p>
      
        <div className="modal">
          <CodatLink
            companyId={companyId}
            onConnection={(newConnection: { connectionId: Connection["id"] }) => {
              alert(`onConnection - ${newConnection.connectionId}`)
            }}
            onFinish={() => { alert('onFinish')}}
            onClose={() => { alert('onClose')}}
            onError={(error: ErrorCallbackArgs) => {
              alert(`onError - ${error}`);
            }}
          />
        </div>
      </div>
    );
  };
  
  export default AuthFlow
  ```
   
4. **Conditional steps**
    - **Extend your type declarations with our types (if using TS).** Download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
    - **Update browserslist.** If a `browserslist` entry exists in your `package.json` file, you may need to update it with the following entries for production:  

   ```js
    "production": [
      ">0.2% and supports es6-module",
      "not dead",
      "not and_uc >= 0"
    ],
   ```
    - **Update CSP headers.** If you're using content security policy (CSP) headers, you must edit the headers:
       * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
       * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

<TabItem value="nextjs" label="NextJS">

### Get started with NextJS

For an example of the component in action, [see our examples](https://github.com/codatio/sdk-link/tree/main/examples/next/README.md).

:::note NextJS and urlImports

NextJS is opinionated about the import strategy we're suggesting, and has an experimental feature called [urlImports](https://nextjs.org/docs/app/api-reference/next-config-js/urlImports). If you follow our React example, you'll be warned you need to use the urlImports feature. Link SDK and urlImports are not compatible, because NextJS assumes the resources are static and caches the SDK, causing various issues.

In the example below, you'll see that we make use of webpack's [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) feature to avoid NextJS's caching and use normal [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) behaviour.
:::

1. **Create a component that mounts the SDK.** You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/snippets/CodatLink.tsx](https://github.com/codatio/sdk-link/blob/main/examples/next/src/app/components/CodatLink.tsx)" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your app. Note that [`"use client"`](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive) is used to define this as client-side code, and the import is ignored in webpack to avoid NextJS caching (as above). 
2. **Use this component.** We suggest wrapping the component in a modal (default dimensions 460px by 840px). The component can also take care of such logic as when to [display the component](https://github.com/codatio/sdk-link/blob/main/examples/next/src/app/page.tsx), passing in the relevant company ID, etc.

  ```js
  // page.tsx

  "use client";

  import { CodatLinkComponent } from "./components/CodatLink";
  import Image from "next/image";
  import styles from "./page.module.css";
  import { useState } from "react";
  
  export default function Home() {
    const [companyId, setCompanyId] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
  
    return (
      <main className={styles.main}>

        // ... some other components

        <div className={styles.center}>
          {modalOpen && (
            <div className={styles.modalWrapper}>
              <CodatLinkComponent
                companyId={companyId}
                onConnection={(connection) =>
                  alert(`On connection callback - ${connection.connectionId}`)
                }
                onClose={() => setModalOpen(false)}
                onFinish={() => alert("On finish callback")}
                onError={(error) => alert(`On error callback -${error.message}`)}
              />
            </div>
          )}
        </div>
      </main>
    );
  }
  ```
   
4. **Conditional steps**
    - **Extend your type declarations with our types (if using TS).** Download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
    - **Update browserslist.** If a `browserslist` entry exists in your `package.json` file, you may need to update it with the following entries for production:  

   ```js
    "production": [
      ">0.2% and supports es6-module",
      "not dead",
      "not and_uc >= 0"
    ],
   ```
    - **Update CSP headers.** If you're using content security policy (CSP) headers, you must edit the headers:
       * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
       * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

<TabItem value="other" label="Non-React">

### Get started with non-React frameworks

For an example of the component in action, [see our examples](https://github.com/codatio/sdk-link/tree/main/examples).

1. **Create a target `div` for the `CodatLink` component.** The CodatLink component will be mounted within this div.

   * It should have an `id` of `codat-link-container`.
   * We suggest styling it as a modal (e.g. `position: absolute;`, of default dimensions 460px by 840px).
   
   The created `CodatLink` component expands to fit 100% of the specified dimensions.
   
3. **Import the Link SDK component.** If you're using the component inside a `script` tag, the tag must have `type="module"` set. 

   ```bash
    import { CodatLink } from "https://link-sdk.codat.io";
   ```

4. **Initialize the Link SDK component in your app.** You'll need to supply the `companyId` of the company you want to authorize:

  ```js Title="Initialize Codat Link component (non-React)"
  const target = document.querySelector("#codat-link-container");
  
  new CodatLink({
    target,
    props: {
      companyId: "<CODAT_COMPANY_ID>",
      onClose: () => alert("onClose"),
      onConnection: (connection) => alert(`onConnection - ${connection}`),
      onFinish: () => alert("onFinish"),
      onError: (error) => alert(`onError- ${error}`),
    },
  });
  ```
4. **Conditional steps**  
    - **Extend your type declarations with our types (if using TS).** Download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.  
    - **Update browserslist.** If a `browserslist` entry exists in your `package.json` file, you may need to update it with the following entries for production:  

   ```js
    "production": [
      ">0.2% and supports es6-module",
      "not dead",
      "not and_uc >= 0"
    ],
   ```  
   - **Update CSP headers.** If you're using content security policy (CSP) headers, you must edit the headers:
      * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
      * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.

</TabItem>
</Tabs>

## Getting help

To report any issues with this library, you can [get in touch](mailto:support@codat.io) with support.
