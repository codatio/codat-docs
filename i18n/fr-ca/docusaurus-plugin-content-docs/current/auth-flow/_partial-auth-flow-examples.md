import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs>
<TabItem value="react" label="React">

#### Commencer avec React

Pour un exemple du composant en action, [voir notre application de démonstration](https://github.com/codatio/sdk-link/tree/main/examples/languages/react/).

1. **Créer un composant qui monte le SDK**

   Vous pouvez copier et coller l'exemple de fichier <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/react/src/components/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> à un emplacement approprié dans votre application. Nous recommandons de définir le composant à `width: 460px; height: 840px` car il est optimisé pour avoir la meilleure apparence avec ces paramètres.

2. **Utiliser le composant pour monter le SDK**

   Nous suggérons d'envelopper le composant `CodatLink` dans un modal pour [ajuster son positionnement](https://github.com/codatio/sdk-link/blob/main/examples/languages/react/src/App.css). Votre composant peut également gérer quand [afficher le composant Link](https://github.com/codatio/sdk-link/blob/main/examples/languages/react/src/App.tsx), en passant l'ID de l'entreprise pertinent et les callbacks.

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
    // Effectuez toute logique ici qui devrait se produire lorsqu'une connexion est liée
    console.log(`Nouvelle connexion liée avec ID : ${connection.connectionId}`);
  }
  const onClose = () => setModalOpen(false);
  const onFinish = () => {
    onClose();
    setIsFinished(true);
  }
  const onError = (error: ErrorCallbackArgs) => {
    // cette erreur devrait être enregistrée dans votre service de suivi des erreurs
    console.error(`Erreur Codat Link SDK`, error);
    if (!error.userRecoverable) {
      onClose();
    }
  }

  return (
    <div>
      <p>Du contenu</p>

      <button onClick={() => setModalOpen(true)}>
           Commencer l'autorisation
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

3. **Étapes conditionnelles**
   - **Si vous utilisez TypeScript**, étendez vos déclarations de type avec nos types en installant le package de types en utilisant `npm install --save-dev @codat/sdk-link-types`. Sinon, supprimez le code lié au type dans les extraits.

   - **Si vous utilisez des en-têtes de politique de sécurité du contenu (CSP)**, modifiez ces en-têtes :
     - Ajoutez Codat à la liste autorisée en ajoutant `*.codat.io` à `default-src` (ou chacun de `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Ajoutez `unsafe-inline` à `style-src`. N'utilisez _pas_ un hachage car cela peut changer à tout moment sans avertissement.

</TabItem>

<TabItem value="nextjs" label="NextJS">

#### Commencer avec NextJS

Pour un exemple du composant en action, [voir notre application de démonstration](https://github.com/codatio/sdk-link/tree/main/examples/languages/next/).

:::note NextJS et urlImports

NextJS a une opinion sur la stratégie d'importation que nous suggérons et dispose d'une fonctionnalité expérimentale appelée [urlImports](https://nextjs.org/docs/app/api-reference/next-config-js/urlImports). Si vous suivez notre exemple NextJS, vous serez averti que vous devez utiliser la fonctionnalité urlImports.

Link SDK et urlImports ne sont pas compatibles, car NextJS suppose que les ressources sont statiques et met en cache le SDK, causant divers problèmes.

Dans l'exemple ci-dessous, vous verrez que nous utilisons la fonctionnalité [commentaires magiques](https://webpack.js.org/api/module-methods/#magic-comments) de webpack pour éviter la mise en cache de NextJS et utiliser le comportement normal [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import).
:::

1. **Créer un composant qui monte le SDK**

   Vous pouvez copier et coller l'exemple de fichier <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/next/src/app/components/CodatLink.tsx" target="_blank">`CodatLink.tsx`</a> à un emplacement approprié dans votre application. Nous recommandons de définir le composant à `width: 460px; height: 840px` car il est optimisé pour avoir la meilleure apparence avec ces paramètres.

   Nous utilisons [`"use client"`](https://react.dev/reference/rsc/use-client) dans le script pour définir ceci comme du code côté client, et l'importation est ignorée dans webpack pour éviter la mise en cache de NextJS (comme ci-dessus).

2. **Utiliser le composant pour monter le SDK**

   Nous suggérons d'envelopper le composant `CodatLink` dans un modal pour [ajuster son positionnement](https://github.com/codatio/sdk-link/blob/main/examples/languages/next/src/app/page.module.css). Votre composant peut également gérer quand [afficher le composant Link](https://github.com/codatio/sdk-link/blob/main/examples/languages/next/src/app/page.tsx), en passant l'ID de l'entreprise pertinent et les callbacks.

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
    // Effectuez toute logique ici qui devrait se produire lorsqu'une connexion est liée
    console.log(`Nouvelle connexion liée avec ID : ${connection.connectionId}`);
  }
  const onClose = () => setModalOpen(false);
  const onFinish = () => {
    onClose();
    setIsFinished(true);
  }
  const onError = (error: ErrorCallbackArgs) => {
    // cette erreur devrait être enregistrée dans votre service de suivi des erreurs
    console.error(`Erreur Codat Link SDK`, error);
    if (!error.userRecoverable) {
      onClose();
    }
  }

    return (
      <main className={styles.main}>
        // ... d'autres composants
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

3. **Étapes conditionnelles**
   - **Si vous utilisez TypeScript**, étendez vos déclarations de type avec nos types en installant le package de types en utilisant `npm install --save-dev @codat/sdk-link-types`. Sinon, supprimez le code lié au type dans les extraits.

   - **Si vous utilisez des en-têtes de politique de sécurité du contenu (CSP)**, modifiez ces en-têtes :
     - Ajoutez Codat à la liste autorisée en ajoutant `*.codat.io` à `default-src` (ou chacun de `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Ajoutez `unsafe-inline` à `style-src`. N'utilisez _pas_ un hachage car cela peut changer à tout moment sans avertissement.

</TabItem>

<TabItem value="javascript" label="JavaScript">

#### Commencer avec JavaScript

Pour un exemple du composant en action, [voir notre application de démonstration](https://github.com/codatio/sdk-link/tree/main/examples/languages/javascript).

1. **Créer un `div` cible pour le composant `CodatLink`**

   Il devrait avoir un `id` de `codat-link-container`.

   Le composant `CodatLink` sera monté dans ce div. Nous recommandons de définir `width: 460px; height: 840px` pour cet élément et de le styliser comme un modal en l'imbriquant dans un wrapper modal (par exemple `position: fixed; inset: 0`). Le composant est optimisé pour avoir la meilleure apparence avec ces paramètres.

   Le composant `CodatLink` créé s'étend pour s'adapter à 100% des dimensions spécifiées.

2. **Importer le composant Link SDK**

   Si vous utilisez le composant à l'intérieur d'une balise `script`, la balise doit avoir `type="module"` défini.

```bash
 import { CodatLink } from "https://link-sdk.codat.io";
```

3. **Définir les callbacks**

```js
const closeCallback = () => {
  linkSdkTarget.style.pointerEvents = "none";
  linkSdkTarget.removeChild(linkSdkTarget.children[0]);
};

const onClose = () => closeCallback();

const onConnection = (connection) => {
  // Effectuez toute logique ici qui devrait se produire lorsqu'une connexion est liée
  console.log(`Nouvelle connexion liée avec ID : ${connection.connectionId}`);
};

const onFinish = () => {
  onClose();
  toggleLinkCompletedDiv(true);
};

const onError = (error) => (error) => {
  // cette erreur devrait être enregistrée dans votre service de suivi des erreurs
  console.error(`Erreur Codat Link SDK`, error);
  if (!error.userRecoverable) {
    onClose();
  }
};
```

4. **Initialiser le composant Link SDK dans votre application**

   Fournissez le `companyId` de l'entreprise que vous souhaitez autoriser :

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

5. **Étapes conditionnelles**
   - **Si vous utilisez TypeScript**, étendez vos déclarations de type avec nos types. Téléchargez le fichier <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a>, puis copiez et collez son contenu dans un fichier `.d.ts` nouveau ou existant.
   - **Si vous utilisez des en-têtes de politique de sécurité du contenu (CSP)**, modifiez ces en-têtes :
     - Ajoutez Codat à la liste autorisée en ajoutant `*.codat.io` à `default-src` (ou chacun de `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Ajoutez `unsafe-inline` à `style-src`. N'utilisez _pas_ un hachage car cela peut changer à tout moment sans avertissement.

</TabItem>

<TabItem value="angular" label="Angular">

#### Commencer avec Angular

Pour un exemple du composant en action, [voir notre application de démonstration](https://github.com/codatio/sdk-link/tree/main/examples/languages/angular).

:::note Angular et urlImports

Dans l'extrait ci-dessous, nous utilisons la fonctionnalité [commentaires magiques](https://webpack.js.org/api/module-methods/#magic-comments) de webpack pour éviter la mise en cache d'Angular et utiliser le comportement normal [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import).
:::

1. **Créer un composant qui monte le SDK**

   Voir le dossier <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/angular/src/app/codat-link/" target="_blank">`codat-link`</a> pour un exemple de module.

2. **Définir l'ID de l'entreprise et les callbacks**

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
    // Effectuez toute logique ici qui devrait se produire lorsqu'une connexion est liée
    console.log(`Nouvelle connexion liée avec ID : ${connection.connectionId}`);
  }

  onError(error: ErrorCallbackArgs) {
    // cette erreur devrait être enregistrée dans votre service de suivi des erreurs
    console.error(`Erreur Codat Link SDK`, error);
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

3. **Utiliser le composant pour monter le SDK**

```html
<!-- app.component.html -->

<button (click)="openLink()">Commencer l'autorisation</button>
<app-codat-link
  [companyId]="companyId"
  (connection)="onConnection($event)"
  (close)="closeLink()"
  (error)="onError($event)"
  (finish)="onFinish()"
  *ngIf="linkOpen"
></app-codat-link>
```

4. **Étapes conditionnelles**
   - **Si vous utilisez TypeScript**, étendez vos déclarations de type avec nos types. Téléchargez le fichier <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a>, puis copiez et collez son contenu dans un fichier `.d.ts` nouveau ou existant.
   - **Si vous utilisez des en-têtes de politique de sécurité du contenu (CSP)**, modifiez ces en-têtes :
     - Ajoutez Codat à la liste autorisée en ajoutant `*.codat.io` à `default-src` (ou chacun de `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Ajoutez `unsafe-inline` à `style-src`. N'utilisez _pas_ un hachage car cela peut changer à tout moment sans avertissement.

</TabItem>

<TabItem value="vue" label="Vue">

#### Commencer avec Vue

Pour un exemple du composant en action, [voir notre application de démonstration](https://github.com/codatio/sdk-link/tree/main/examples/languages/vue).

1. **Créer un composant qui monte le SDK**

   Vous pouvez copier et coller l'exemple de fichier <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/vue/src/components/CodatLink.vue" target="_blank">`CodatLink.vue`</a> à un emplacement approprié dans votre application. Nous recommandons de définir `width: 460px; height: 840px` pour ce composant car il est optimisé pour avoir la meilleure apparence avec ces paramètres.

2. **Utiliser ce composant pour monter le SDK**

   Nous suggérons d'envelopper le composant `CodatLink` dans un modal pour [ajuster son positionnement](https://github.com/codatio/sdk-link/blob/main/examples/languages/vue/src/App.vue). Il peut également gérer quand [afficher le composant Link](https://github.com/codatio/sdk-link/blob/main/examples/languages/vue/src/App.vue), en passant l'ID de l'entreprise pertinent et les callbacks.

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
    // Effectuez toute logique ici qui devrait se produire lorsqu'une connexion est liée
    console.log(`Nouvelle connexion liée avec ID : ${connection.connectionId}`);}

  const handleOnClose = () => {
    modalOpen.value = false
  }

  const handleOnFinish = () => {
    handleOnClose();
    isFinished.value = true;
  }

  const handleOnError = (error: ErrorCallbackArgs) => {
    // cette erreur devrait être enregistrée dans votre service de suivi des erreurs
    console.error(`Erreur Codat Link SDK`, error);
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

4. **Étapes conditionnelles**
   - **Si vous utilisez TypeScript**, étendez vos déclarations de type avec nos types. Téléchargez le fichier <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a>, puis copiez et collez son contenu dans un fichier `.d.ts` nouveau ou existant.
   - **Si vous utilisez des en-têtes de politique de sécurité du contenu (CSP)**, modifiez ces en-têtes :
     - Ajoutez Codat à la liste autorisée en ajoutant `*.codat.io` à `default-src` (ou chacun de `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Ajoutez `unsafe-inline` à `style-src`. N'utilisez _pas_ un hachage car cela peut changer à tout moment sans avertissement.

</TabItem>

<TabItem value="svelte" label="Svelte">

#### Commencer avec Svelte

Pour un exemple du composant en action, [voir notre application de démonstration](https://github.com/codatio/sdk-link/tree/main/examples/languages/svelte).

1. **Créer un composant qui monte le SDK**

   Vous pouvez copier et coller l'exemple de fichier <a href="https://github.com/codatio/sdk-link/blob/main/examples/languages/svelte/src/lib/CodatLink.svelte" target="_blank">`CodatLink.svelte`</a> à un emplacement approprié dans votre application Svelte. Nous recommandons de définir `width: 460px; height: 840px` pour ce composant car il est optimisé pour avoir la meilleure apparence avec ces paramètres.

2. **Utiliser le composant pour monter le SDK**

   Nous suggérons d'envelopper le composant `CodatLink` dans un modal pour [ajuster son positionnement](https://github.com/codatio/sdk-link/blob/main/examples/languages/svelte/src/App.svelte). Le composant peut également gérer quand [afficher le composant Link](https://github.com/codatio/sdk-link/blob/main/examples/languages/svelte/src/App.svelte), en passant l'ID de l'entreprise pertinent et les callbacks.

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
    // Effectuez toute logique ici qui devrait se produire lorsqu'une connexion est liée
    console.log(`Nouvelle connexion liée avec ID : ${connection.connectionId}`);
  }
  const onClose = () => (modalOpen = false);
  const onFinish = () => {
    onClose();
    isFinished = true;
  }
  const onError = (error: ErrorCallbackArgs) => {
    // cette erreur devrait être enregistrée dans votre service de suivi des erreurs
    console.error(`Erreur Codat Link SDK`, error);
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

4. **Étapes conditionnelles**
   - **Si vous utilisez TypeScript**, étendez vos déclarations de type avec nos types. Téléchargez le fichier <a href="https://github.com/codatio/sdk-link/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a>, puis copiez et collez son contenu dans un fichier `.d.ts` nouveau ou existant.
   - **Si vous utilisez des en-têtes de politique de sécurité du contenu (CSP)**, modifiez ces en-têtes :
     - Ajoutez Codat à la liste autorisée en ajoutant `*.codat.io` à `default-src` (ou chacun de `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
     - Ajoutez `unsafe-inline` à `style-src`. N'utilisez _pas_ un hachage car cela peut changer à tout moment sans avertissement.

</TabItem>

</Tabs>
