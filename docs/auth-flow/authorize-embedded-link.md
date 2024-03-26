---
title: "Get started with Link SDK"
sidebar_label: Get started
description: "Embed our auth flow in your application UI using our low-code component"
image: "/img/auth-flow/embedded-link-selection.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

![](/img/auth-flow/embedded-link-selection.png)

Our Link SDK is a pre-built JavaScript component that neatly sits in your front-end code and can be deployed in a matter of minutes. 

We built it to be flexible so that you can integrate and initialize it in any way you want, and provide the user with a native feel of your authorization journey. As a result, clients using the SDK note that **89%** of their users successfully complete their journeys.

:::note Dynamic imports

Link SDK is imported at runtime, so you'll always get the latest version of our auth flow UI with no risk of staleness. To achieve this, we use ES6's [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) feature (aka dynamic imports).
:::

:::tip Change management

As with all Codat products, Link SDK is subject to [our change management policy](/introduction/change-policy). We will give appropriate notice for changes to our auth flow UI and any associated APIs. We have rigorous testing and security measures in place to ensure you can import our SDK with confidence.

We also provide updates in our [SDK changelog](/auth-flow/authorize-embedded-link#changelog).
:::

## Resources

We've provided you with [rich examples on GitHub](https://github.com/codatio/sdk-link/tree/main/examples) that illustrate how you can add the Link component to your project.

:::info Indicative demo

Curious where Codat's Link flow might fit in your customer's experience? See [our indicative demo](https://sdk-link.vercel.app/).

:::

## Prerequisites

#### Your application

You need a JavaScript application to render the component in. The component works with all major JavaScript frameworks, including React, and with vanilla JavaScript. You can choose to implement it in TypeScript. We don't recommend using Link in an iframe because it will not work for security reasons (CORS).

The application should take care of creating [companies](../terms/company) programmatically and retrieving the `companyId` of any company you want to authorize. Additionally, build out the required redirect configuration within your application.

## Get started

:::tip Install the npm package

Take advantage of our [npm package](https://www.npmjs.com/package/@codat/sdk-link-types) so you don't have to manually import and maintain type definitions. You will benefit from it the most if you are using Typescript, so our examples are prepared with that assumption.

`npm install @codat/sdk-link-types`

:::

<Tabs>
<TabItem value="react" label="React">

#### Get started with React

For an example of the component in action, [see our demo app](https://github.com/codatio/sdk-link/tree/main/examples/languages/react/).

1. **Create a component that mounts the SDK** 

  You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/react/src/components/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your app. We recommend setting the component to `width: 460px; height: 840px`.

2. **Use the component to mount the SDK** 

  We suggest wrapping the `CodatLink` component in a modal to [adjust its positioning](https://github.com/codatio/sdk-link/blob/main/examples/languages/react/src/App.css). Your component can also manage when to [display the Link component](https://github.com/codatio/sdk-link/blob/main/examples/languages/react/src/App.tsx), passing the relevant company ID and callbacks.

  ```js
  // AuthFlow.tsx

  import {
    ConnectionCallbackArgs,
    ErrorCallbackArgs,
  } from "@codat/sdk-link-types"
  import { useState } from "react";
  import { CodatLink } from "./components/CodatLink";

  export const AuthFlow = ({ companyId }: {companyId: Company["id"]}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const onConnection = (connection: ConnectionCallbackArgs) => 
      alert(`On connection callback - ${connection.connectionId}`);
    const onClose = () => setModalOpen(false);
    const onFinish = () => alert("On finish callback");
    const onError = (error: ErrorCallbackArgs) => 
      alert(`On error callback - ${error.message}`);

    return (
      <div>
        <p>Some content</p>

        <button onClick={() => setModalOpen(true)}>
             Start authing
        </button>
      
        {modalOpen && (
        <div className="modal-wrapper">
          <CodatLink
            companyId={companyId}
            onConnection={onConnection}
            onError={onError}
            onClose={onClose}
            onFinish={onFinish}
          />
        </div>
      )};
      </div>
    );
  };
  ```
   
3. **Conditional steps**

    - **If you're using TypeScript**, extend your type declarations with our types by installing the types package using  `npm install --save-dev @codat/sdk-link-types`. Otherwise, delete the type-related code in the snippets.

    - **If you're using content security policy (CSP) headers**, edit these headers:
    
       * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of of `script-src, style-src, font-src, connect-src, img-src`).
       * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

<TabItem value="nextjs" label="NextJS">

#### Get started with NextJS

For an example of the component in action, [see our demo app](https://github.com/codatio/sdk-link/tree/main/examples/languages/next/).

:::note NextJS and urlImports

NextJS is opinionated about the import strategy we're suggesting, and has an experimental feature called [urlImports](https://nextjs.org/docs/app/api-reference/next-config-js/urlImports). If you follow our NextJS example, you'll be warned you need to use the urlImports feature. 

Link SDK and urlImports are not compatible, because NextJS assumes the resources are static and caches the SDK, causing various issues.

In the example below, you'll see that we use webpack's [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) feature to avoid NextJS's caching and use normal [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) behavior.
:::

1. **Create a component that mounts the SDK** 

  You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/next/src/app/components/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your app. We recommend setting the component to `width: 460px; height: 840px`. 
  
  We use [`"use client"`](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive) in the script to define this as client-side code, and the import is ignored in webpack to avoid NextJS caching (as above).

2. **Use the component to mount the SDK** 

  We suggest wrapping the `CodatLink` component in a modal to [adjust its positioning](https://github.com/codatio/sdk-link/blob/main/examples/languages/next/src/app/page.module.css). Your component can also manage when to [display the Link component](https://github.com/codatio/sdk-link/blob/main/examples/languages/next/src/app/page.tsx), passing the relevant company ID and callbacks.

  ```js
  // page.tsx

  "use client";

  import {
    ConnectionCallbackArgs,
    ErrorCallbackArgs,
  } from "@codat/sdk-link-types"
  import { CodatLink } from "./components/CodatLink";
  import Image from "next/image";
  import styles from "./page.module.css";
  import { useState } from "react";
  
  export default function Home() {
    const [companyId, setCompanyId] = useState(""); //provide company ID
    const [modalOpen, setModalOpen] = useState(false);

    const onConnection = (connection: ConnectionCallbackArgs) => 
      alert(`On connection callback - ${connection.connectionId}`);
    const onClose = () => setModalOpen(false);
    const onFinish = () => alert("On finish callback");
    const onError = (error: ErrorCallbackArgs) => 
      alert(`On error callback - ${error.message}`);
  
    return (
      <main className={styles.main}>
        // ... some other components
        {modalOpen && (
          <div className={styles.modalWrapper}>
            <CodatLink
              companyId={companyId}
              onConnection={onConnection}
              onError={onError}
              onClose={onClose}
              onFinish={onFinish}
            />
          </div>
        )}
      </main>
    );
  };
  ```
   
3. **Conditional steps**

    - **If you're using TypeScript**, extend your type declarations with our types by installing the types package using `npm install --save-dev @codat/sdk-link-types`. Otherwise, delete the type related code in the snippets.

    - **If you're using content security policy (CSP) headers**, edit these headers:

       * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of of `script-src, style-src, font-src, connect-src, img-src`).
       * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

<TabItem value="javascript" label="JavaScript">

#### Get started with JavaScript

For an example of the component in action, [see our demo app](https://github.com/codatio/sdk-link/tree/main/examples/languages/javascript).

1. **Create a target `div` for the `CodatLink` component** 

  It should have an `id` of `codat-link-container`.
  
  The `CodatLink` component will be mounted within this div. We recommend setting `width: 460px; height: 840px` for this element and styling it as a modal by nesting it within a modal wrapper (e.g. `position: fixed; inset: 0`).

  The created `CodatLink` component expands to fit 100% of the specified dimensions.
   
2. **Import the Link SDK component** 

  If you're using the component inside a `script` tag, the tag must have `type="module"` set. 

  ```bash
   import { CodatLink } from "https://link-sdk.codat.io";
  ```

3. **Define callbacks** 
  
  ```js
  const closeCallback = () => {
   linkSdkTarget.style.pointerEvents = "none";
   linkSdkTarget.removeChild(linkSdkTarget.children[0]);
  };

  const onClose = () => closeCallback();
  const onConnection = (connection) =>
   alert(`On connection callback  = ${connection.connectionId}`);
  const onFinish = () => alert("On finish callback");
  const onError = (error) => alert(`On error callback : ${error.message}`);
  ```

5. **Initialize the Link SDK component in your app** 

  Supply the `companyId` of the company you want to authorize:

 ```js
  const target = document.querySelector("#codat-link-container");
  
  const openModal = () => {
   linkSdkTarget.style.pointerEvents = "initial";
   new CodatLink({
     target: linkSdkTarget,
     props: {
       companyId,
       onConnection,
       onClose,
       onFinish,
       onError,
     },
   });
  };
 ```
4. **Conditional steps**  

  - **If you're using TypeScript**, extend your type declarations with our types. Download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.

 - **If you're using content security policy (CSP) headers**, edit these headers:
    * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of of `script-src, style-src, font-src, connect-src, img-src`).
    * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.

</TabItem>

<TabItem value="angular" label="Angular">

#### Get started with Angular

For an example of the component in action, [see our demo app](https://github.com/codatio/sdk-link/tree/main/examples/languages/angular).

:::note Angular and urlImports

In the example below, we use webpack's [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) feature to avoid Angular's caching and use normal [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) behavior.
:::

1. **Create a component that mounts the SDK** 

  See the <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/angular/src/app/codat-link/" target="_blank">`codat-link folder`</a> for an example module.

2. **Define company ID and callbacks** 

```js
//app.component.ts

  companyId = '';//provide company ID
  linkOpen = false;

  openLink() {
    if (this.companyId) {
      this.linkOpen = true;
    }
  }

  closeLink() {
    this.linkOpen = false;
  }

  onConnection(connection: ConnectionCallbackArgs) {
    alert(`On connection callback : ${connection.connectionId}`);
  }

  onError(error: ErrorCallbackArgs) {
    alert(`On error callback : ${error.message}`);
  }

  onFinish() {
    alert('On finish callback');
  }

```

3. **Use the component to mount the SDK**

```html
<!-- app.component.html -->

<button (click)="openLink()">Start authing</button>
  <app-codat-link
    [companyId]="companyId"
    (connection)="onConnection($event)"
    (close)="closeLink()"
    (error)="onError($event)"
    (finish)="onFinish()"
    *ngIf="linkOpen"
  ></app-codat-link>
```
4. **Conditional steps**
   - **If you're using TypeScript**, extend your type declarations with our types. Download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
   -  **If you're using content security policy (CSP) headers**, edit these headers:
      * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of of `script-src, style-src, font-src, connect-src, img-src`).
      * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

<TabItem value="vue" label="Vue">

#### Get started with Vue

For an example of the component in action, [see our demo app](https://github.com/codatio/sdk-link/tree/main/examples/languages/vue).

1. **Create a component that mounts the SDK** 

  You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/vue/src/components/CodatLink.vue" target="_blank">`CodatLink.vue`</a> file to an appropriate location in your app. We recommend setting `width: 460px; height: 840px` for this component.

2. **Use this component to mount the SDK** 

  We suggest wrapping the `CodatLink` component in a modal to [adjust its positioning](https://github.com/codatio/sdk-link/blob/main/examples/languages/vue/src/App.vue). The component can also manage when to [display the Link component](https://github.com/codatio/sdk-link/blob/main/examples/languages/vue/src/App.vue), passing the relevant company ID and callbacks.

  ```js
  // App.vue

  <script setup lang="ts">
    import CodatLink from './components/CodatLink.vue'
    import { ref } from 'vue'
    import type { ConnectionCallbackArgs, ErrorCallbackArgs } from 'https://link-sdk.codat.io'  

    const companyId = ref('') //provide company ID
    const modalOpen = ref(false) 

    const onConnection = (connection: ConnectionCallbackArgs) =>
      alert(`On connection callback - ${connection.connectionId}`);
    const onClose = () => (modalOpen = false);
    const onFinish = () => alert("On finish callback");
    const onError = (error: ErrorCallbackArgs) =>
      alert(`On error callback - ${error.message}`);

  </script>

  <div class="app">
    <main>
        {#if modalOpen}
        <div class="modal-wrapper">
          <CodatLink {companyId} {onConnection} {onClose} {onError} {onFinish} />
        </div>
      {/if}
    </main>
  </div>
  ```
   
4. **Conditional steps**
    - **If you're using TypeScript**, extend your type declarations with our types. Download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
    - **If you're using content security policy (CSP) headers**, edit these headers:
       * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of of `script-src, style-src, font-src, connect-src, img-src`).
       * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

<TabItem value="svelte" label="Svelte">

#### Get started with Svelte

For an example of the component in action, [see our demo app](https://github.com/codatio/sdk-link/tree/main/examples/languages/svelte).

1. **Create a component that mounts the SDK** 

  You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/svelte/src/lib/CodatLink.svelte" target="_blank">`CodatLink.svelte`</a> file to an appropriate location in your Svelte app. We recommend setting `width: 460px; height: 840px` for this component.
2. **Use the component to mount the SDK**  

  We suggest wrapping the `CodatLink` component in a modal to [adjust its positioning](https://github.com/codatio/sdk-link/blob/main/examples/languages/svelte/src/App.svelte). The component can also manage when to [display the Link component](https://github.com/codatio/sdk-link/blob/main/examples/languages/svelte/src/App.svelte), passing the relevant company ID and callbacks.

  ```js
  // App.svelte

  <script lang="ts">
    import CodatLink from "./lib/CodatLink.svelte";
    import type {
      ConnectionCallbackArgs,
      ErrorCallbackArgs,
    } from "https://link-sdk.codat.io";

    let modalOpen = false;
    let companyId = "" //provide company ID

    const onConnection = (connection: ConnectionCallbackArgs) =>
      alert(`On connection callback - ${connection.connectionId}`);
    const onClose = () => (modalOpen = false);
    const onFinish = () => alert("On finish callback");
    const onError = (error: ErrorCallbackArgs) =>
      alert(`On error callback - ${error.message}`);

  </script>

  <div class="app">
    <main>
        {#if modalOpen}
        <div class="modal-wrapper">
          <CodatLink {companyId} {onConnection} {onClose} {onError} {onFinish} />
        </div>
      {/if}
    </main>
  </div>

  ```
   
4. **Conditional steps**
    - **If you're using TypeScript**, extend your type declarations with our types. Download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
    - **If you're using content security policy (CSP) headers**, edit these headers:
       * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of of `script-src, style-src, font-src, connect-src, img-src`).
       * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

</Tabs>

## Customize Link

You can configure Link's UI to match your company branding and reflect your company's values, and adjust Link's behavior using the [Codat Portal](https://app.codat.io/) or our SDK's advanced options. 

#### Configure in Portal

In the [Codat Portal](https://app.codat.io/settings), navigate to **Settings > Auth flow** to view the auth flow settings pages. Use these to add UI copy, set file upload options, choose to make steps optional, or disable steps. We provide detailed instructions for each category of settings:

- [Link settings](/auth-flow/customize/customize-link)
- [Branding settings](/auth-flow/customize/branding)

#### Configure in code

If you need more control over the UI based on application-specific logic, want to vary it conditionally, or simply prefer to manage the UI in code, we offer programmatic control via the `options` property that **overrides the Link settings set in the Portal**. We explain these advanced options in detail:

- [Manage UI settings in code](/auth-flow/customize/sdk-customize-code)

To control the redirects that happen upon flow completion, you need to build out the required redirect configuration within your application.

## Changelog

#### March 2024
- **Additional options**: we enhanced the `options` prop with `enableAdditionalConsent` and `allowedIntegrations`, new properties that help you manage additional consent journeys and the selection list of platforms displayed to the user.

#### November 2023
- **Options property**: we introduced a new prop that gives you programmatic control over Link settings.
- **Markdown support**: text fields now accept Markdown, giving you more control over styling and formatting. This is available via the `text` property of the Link SDK only.
- **@codat/sdk-link-types package released**: our new [NPM package](https://www.npmjs.com/package/@codat/sdk-link-types) means you don't have to manually import and maintain the type definitions.

#### October 2023
- **Support for non-modal views**: you can now [embed the component in non-modal views](/auth-flow/authorize-embedded-link#non-modal-styling) with our new `options` prop.
- **Reduced latency after auth**: we now poll every second to check whether the user has authed, meaning connection is confirmed faster.
- **Bugs**:
  + Fixed an issue where 'Landing page' settings were not reflected.

#### June 2023
- **Support for non-React JavaScript apps**: without a dependency on React, you can use Link with all JavaScript frameworks or even vanilla JavaScript.
- **Increased display control**: you now need to specify the dimensions of the Link component, which will expand to fit the given container size. Previously the component used a fixed width and height.
- **Navigation improvements**: source types (accounting, commerce, banking, and file upload) can now be connected in any order you choose.
- **Performance improvements**: Link loads quicker and can be loaded only when required.
- **Connection status**: the connection status (success or error) is now shown during the Link flow. The SMB user can skip errors without interrupting the rest of the Link flow.

---
## Read next

- [Manage Link settings in Portal](/auth-flow/customize/customize-link)
- [Manage branding settings in Portal](/auth-flow/customize/branding)
- [Manage UI settings in code](/auth-flow/customize/sdk-advanced-options)
