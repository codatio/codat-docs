---
title: "Get started with Link SDK"
sidebar_label: Get started
description: "Embed our auth flow in your application UI using our low-code component"
banner_image: "/img/banners/link.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReadNext from "@components/ReadNext";

![](/img/auth-flow/embedded-link-selection.png)

Our Link SDK is a pre-built JavaScript component that neatly sits in your front-end code and can be deployed in a matter of minutes. 

We built it to be flexible so that you can integrate and initialize it in any way you want, and provide the user with a native feel of your authorization journey. As a result, clients using the SDK note that **89%** of their users successfully complete their journeys.

```jsx live
function AuthFlow() {
  const onConnection = (connection) => alert(`Connection: ${connection.connectionId}`);
  const onFinish = () => alert("On finish callback");

  const config = {
    companyId: "e0e0462f-d7f3-456f-b3e9-0b40afe0245e",
    options: {
      showLandingPage: true,
    }
  }

  return <div>
    <p>Click the button below to start authing.</p>

    <CodatLink {...config}/>
  </div>
}
```

## Resources

We've provided you with [rich examples on GitHub](https://github.com/codatio/sdk-link/tree/main/examples) that illustrate how you can add the Link component to your project.

:::note Need help with designing your auth flow experience?

Our user experience team is ready to help you design a high converting and trusted auth flow, and ensure your user journey complies with integration partnerships' requirements. Speak to your account manager to set up time with our experts.

:::

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

    You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/react/src/components/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your app. We recommend setting the component to `width: 460px; height: 840px` because it's optimized to look best with these parameters.

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

function App() {
  const [companyId, setCompanyId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const onConnection = (connection: ConnectionCallbackArgs) => {
    // Perform any logic here that should happen when a connection is linked
    console.log(`New connection linked with ID: ${connection.connectionId}`);
  }
  const onClose = () => setModalOpen(false);
  const onFinish = () => {
    onClose();
    setIsFinished(true);
  }
  const onError = (error: ErrorCallbackArgs) => {
    // this error should be logged in your error tracking service
    console.error(`Codat Link SDK error`, error);
    if (!error.userRecoverable) {
      onClose();
    }
  }

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
    
       * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
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

    You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/next/src/app/components/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> file to an appropriate location in your app. We recommend setting the component to `width: 460px; height: 840px` because it's optimized to look best with these parameters. 
  
    We use [`"use client"`](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive) in the script to define this as client-side code, and the import is ignored in webpack to avoid NextJS caching (as above).

2. **Use the component to mount the SDK** 

    We suggest wrapping the `CodatLink` component in a modal to [adjust its positioning](https://github.com/codatio/sdk-link/blob/main/examples/languages/next/src/app/page.module.css). Your component can also manage when to [display the Link component](https://github.com/codatio/sdk-link/blob/main/examples/languages/next/src/app/page.tsx), passing the relevant company ID and callbacks.

```js
  // page.tsx

 "use client";

import {CodatLink} from "./components/CodatLink";
import Image from "next/image";
import styles from "./page.module.css";
import {useState} from "react";
import {
  ConnectionCallbackArgs,
  ErrorCallbackArgs,
} from "@codat/sdk-link-types";

export default function Home() {
  const [companyId, setCompanyId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const onConnection = (connection: ConnectionCallbackArgs) => {
    // Perform any logic here that should happen when a connection is linked
    console.log(`New connection linked with ID: ${connection.connectionId}`);
  }
  const onClose = () => setModalOpen(false);
  const onFinish = () => {
    onClose();
    setIsFinished(true);
  }
  const onError = (error: ErrorCallbackArgs) => {
    // this error should be logged in your error tracking service
    console.error(`Codat Link SDK error`, error);
    if (!error.userRecoverable) {
      onClose();
    }
  }
  
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

       * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
       * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

<TabItem value="javascript" label="JavaScript">

#### Get started with JavaScript

For an example of the component in action, [see our demo app](https://github.com/codatio/sdk-link/tree/main/examples/languages/javascript).

1. **Create a target `div` for the `CodatLink` component** 

    It should have an `id` of `codat-link-container`.
  
    The `CodatLink` component will be mounted within this div. We recommend setting `width: 460px; height: 840px` for this element and styling it as a modal by nesting it within a modal wrapper (e.g. `position: fixed; inset: 0`). The component is optimized to look best with these parameters.

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
  
  const onConnection = (connection) => {
    // Perform any logic here that should happen when a connection is linked
    console.log(`New connection linked with ID: ${connection.connectionId}`);
  };
  
  const onFinish = () => {
    onClose();
    toggleLinkCompletedDiv(true);
  };
  
  const onError = (error) => (error) => {
    // this error should be logged in your error tracking service
    console.error(`Codat Link SDK error`, error);
    if (!error.userRecoverable) {
      onClose();
    }
  };
```

4. **Initialize the Link SDK component in your app** 

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

5. **Conditional steps**  

    - **If you're using TypeScript**, extend your type declarations with our types. Download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
    - **If you're using content security policy (CSP) headers**, edit these headers:
      * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
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

  openLink() {
    if (this.companyId) {
      this.linkOpen = true;
    }
  }

  closeLink() {
    this.linkOpen = false;
  }

  onConnection(connection: ConnectionCallbackArgs) {
    // Perform any logic here that should happen when a connection is linked
    console.log(`New connection linked with ID: ${connection.connectionId}`);
  }

  onError(error: ErrorCallbackArgs) {
    // this error should be logged in your error tracking service
    console.error(`Codat Link SDK error`, error);
    if (!error.userRecoverable) {
      this.closeLink();
    }
  }

  onFinish() {
    this.closeLink();
    this.linkFinished = true;
  }

  reset() {
    this.linkFinished = false;
    }
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
        * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
        * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

<TabItem value="vue" label="Vue">

#### Get started with Vue

For an example of the component in action, [see our demo app](https://github.com/codatio/sdk-link/tree/main/examples/languages/vue).

1. **Create a component that mounts the SDK** 

    You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/vue/src/components/CodatLink.vue" target="_blank">`CodatLink.vue`</a> file to an appropriate location in your app. We recommend setting `width: 460px; height: 840px` for this component because it's optimized to look best with these parameters.

2. **Use this component to mount the SDK** 

    We suggest wrapping the `CodatLink` component in a modal to [adjust its positioning](https://github.com/codatio/sdk-link/blob/main/examples/languages/vue/src/App.vue). The component can also manage when to [display the Link component](https://github.com/codatio/sdk-link/blob/main/examples/languages/vue/src/App.vue), passing the relevant company ID and callbacks.

  ```js
  // App.vue

  <script setup lang="ts">
    import CodatLink from './components/CodatLink.vue'
    import { ref } from 'vue'
    import type { ConnectionCallbackArgs, ErrorCallbackArgs } from 'https://link-sdk.codat.io'
    
    const companyId = ref('')
    const modalOpen = ref(false)
    const isFinished = ref(false);
    
    const handleOnConnection = (connection: ConnectionCallbackArgs) => {
      // Perform any logic here that should happen when a connection is linked
      console.log(`New connection linked with ID: ${connection.connectionId}`);}
    
    const handleOnClose = () => {
      modalOpen.value = false
    }
    
    const handleOnFinish = () => {
      handleOnClose();
      isFinished.value = true;
    }
    
    const handleOnError = (error: ErrorCallbackArgs) => {
      // this error should be logged in your error tracking service
      console.error(`Codat Link SDK error`, error);
      if (!error.userRecoverable) {
        handleOnClose();
      }
    }
  </script>

  <div class="app">
    <main>
      <div v-if="modalOpen" class="modalWrapper">
        <CodatLink :company-id="companyId" :on-connection="handleOnConnection" :on-close="handleOnClose"
          :on-finish="handleOnFinish" :on-error="handleOnError" />
      </div>
    </main>
  </div>
  ```
   
4. **Conditional steps**

    - **If you're using TypeScript**, extend your type declarations with our types. Download the <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.
    - **If you're using content security policy (CSP) headers**, edit these headers:
       * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
       * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

<TabItem value="svelte" label="Svelte">

#### Get started with Svelte

For an example of the component in action, [see our demo app](https://github.com/codatio/sdk-link/tree/main/examples/languages/svelte).

1. **Create a component that mounts the SDK** 

    You can copy and paste the example <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/svelte/src/lib/CodatLink.svelte" target="_blank">`CodatLink.svelte`</a> file to an appropriate location in your Svelte app. We recommend setting `width: 460px; height: 840px` for this component because it's optimized to look best with these parameters.

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
    let isFinished = false;
    let companyId = "";
  
    const onConnection = (connection: ConnectionCallbackArgs) => {
      // Perform any logic here that should happen when a connection is linked
      console.log(`New connection linked with ID: ${connection.connectionId}`);
    }
    const onClose = () => (modalOpen = false);
    const onFinish = () => {
      onClose();
      isFinished = true;
    }
    const onError = (error: ErrorCallbackArgs) => {
      // this error should be logged in your error tracking service
      console.error(`Codat Link SDK error`, error);
      if (!error.userRecoverable) {
        onClose();
      }
    }
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
        * Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
        * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
 
</TabItem>

</Tabs>

:::note Dynamic imports

Link SDK is imported at runtime, so you'll always get the latest version of our auth flow UI with no risk of staleness. To achieve this, we use ES6's [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) feature (aka dynamic imports).

:::

## Use callback functions

You can add custom logic into our SDK by using callback functions to complete an action. Use the properties below to pass the callback functions into the SDK component:

| Property       | Description                                                                                                                                                                                                                                          | Arguments                                                                                                                                                                                                                                                                 |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onConnection` | Called when a connection   is successfully authorized and moved out of a `pending` state or files are   uploaded.                                                                                                                                    | A `connection` object containing the following properties: <br/>`connectionId` - unique identifier of the connection.                                                                                                                                                                                                                      |
| `onFinish`     | Called when the user completes all required steps of the connection flow and clicks the   "Complete" button.<br/> We recommend unmounting the `CodatLink` component   in this callback. In the React example above, we call `setModalOpen(false)` to do this.                                                                   |                                                                                                                                                                                                                                                                            |
| `onClose`      | Called when the user   clicks the "X" ("Close") button of the connection flow. <br/>  We recommend removing the `CodatLink` component in this callback. In the React example above, we call `setModalOpen(false)` to do this.                                                                                                  |                                                                                                                                                                                                                                                                            |
| `onError`      | Called when an error   occurs in the connection flow, returning the error information. <br/><br/>  **Log these errors.** We also recommend   unmounting the `CodatLink` component in production if the `userRecoverable` parameter   is `false`. |  An `error` object containing the following properties: <ul><li>`correlationId` - internal identifier used to track errors within   Codat</li><li>`message` - descriptive error   response</li><li>`errorCode` - numerical code of the   error</li><li>`userRecoverable` - boolean value   indicating whether the error can be resolved by the user.</li></ul> `correlationId`, `message`, and `errorCode` are optional and may not be available in all errors. |

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

<ReadNext
  links={[
    [ "Manage Link settings in Portal", "/auth-flow/customize/customize-link" ],
    [ "Manage branding settings in Portal", "/auth-flow/customize/branding" ],
    [ "Manage UI settings in code", "/auth-flow/customize/sdk-customize-code" ],
    [ "Use the Connections SDK in your app", "/auth-flow/optimize/connection-management" ], 
  ]}
/>
