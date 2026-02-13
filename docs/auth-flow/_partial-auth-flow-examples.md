import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

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
   - **If you're using TypeScript**, extend your type declarations with our types by installing the types package using `npm install --save-dev @codat/sdk-link-types`. Otherwise, delete the type-related code in the snippets.

   - **If you're using content security policy (CSP) headers**, edit these headers:
     - Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.

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

   We use [`"use client"`](https://react.dev/reference/rsc/use-client) in the script to define this as client-side code, and the import is ignored in webpack to avoid NextJS caching (as above).

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
     - Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.

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
     - Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.

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
   - **If you're using content security policy (CSP) headers**, edit these headers:
     - Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.

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
     - Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.

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
     - Allowlist Codat by adding `*.codat.io` to `default-src` (or each of `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.

</TabItem>

</Tabs>
