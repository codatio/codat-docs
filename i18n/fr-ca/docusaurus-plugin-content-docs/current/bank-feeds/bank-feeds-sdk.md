---
title: "SDK Bank Feeds"
description: "Découvrez comment vous pouvez simplifier le déploiement du produit Bank Feeds avec notre SDK Bank Feeds"
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { IntegrationsList } from "@components/Integrations";
import {
  bankfeedsExternalMappingIntegrations,
  bankfeedsIntegrations,
} from "@components/Integrations/integrations";

La création et le lancement d'une solution de flux bancaires de premier ordre n'ont jamais été aussi faciles qu'avec notre nouveau SDK Bank Feeds.

![Fonctionnalités du SDK Bank Feeds](/img/updates/bank-feeds-bento.png)

## Aperçu

Notre nouveau [SDK Bank Feeds](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types) rassemble toutes les pièces complexes nécessaires pour créer une expérience de configuration Bank Feeds simple.

Il exploite notre [SDK Link](/auth-flow/authorize-embedded-link) pour permettre à vos utilisateurs de partager rapidement et en toute sécurité l'accès à leur logiciel de comptabilité. Il leur permet également de configurer le mappage entre vos comptes et les comptes dans leur logiciel en un seul flux fluide.

Tout cela est inclus dans un seul composant JavaScript à faible code (disponible sur [NPM](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types)). Ses riches propriétés de configuration permettent à votre application d'interagir avec le SDK et de personnaliser le texte et l'image de marque d'une manière qui crée une expérience utilisateur fiable et convaincante.

Codat prend en charge cela en facilitant la création de nombreux comptes sources à la fois via notre nouveau point de terminaison par lot [Create source accounts](/bank-feeds-api#/operations/create-batch-source-account).

## Flux du processus

Une fois que votre utilisateur lance le processus de configuration des flux bancaires, engagez notre SDK dans votre application pour établir le flux en quelques étapes simples :

1. Appelez le point de terminaison [Create a company](/bank-feeds-api#/operations/create-company) pour créer une représentation de votre client dans Codat.
2. Obtenez un jeton d'accès pour cette entreprise en appelant le point de terminaison [Get company access token](/platform-api#/operations/get-company-access-token).
3. Initialisez le SDK Bank Feeds dans votre application, en passant le jeton d'accès au composant pour l'autorisation.

   Le SDK dirigera votre client pour qu'il sélectionne son logiciel de comptabilité et créera automatiquement une [connexion de données](/core-concepts/connections) pour ce logiciel en réponse. La sélection du logiciel par le client déclenchera la fonction de rappel `onConnectionStarted` du SDK.

4. Utilisez la fonction de rappel `onConnectionStarted` du SDK pour appeler le point de terminaison [Create source accounts](/bank-feeds-api#/operations/create-batch-source-account) et créer une représentation des comptes bancaires de votre client dans Codat.

   Le SDK dirigera votre client pour qu'il autorise la connexion à son logiciel et mappe ces comptes sources aux comptes pertinents dans ce logiciel. L'achèvement réussi des étapes d'autorisation et de mappage déclenchera la fonction de rappel `onFinish` du SDK.

5. Utilisez la fonction de rappel `onFinish` du SDK pour gérer l'achèvement du flux de configuration des flux bancaires une fois les comptes mappés.

Si votre utilisateur autorise votre accès à ses données mais ne termine pas la configuration des comptes, nous le ramènerons à l'étape de mappage du flux lorsqu'il reviendra. Une fois qu'ils sont entièrement configurés, vous pouvez utiliser ce composant pour leur permettre de reconfigurer leurs comptes ou de configurer des comptes supplémentaires.

Nous recommandons également d'utiliser notre [SDK Connections](/auth-flow/optimize/connection-management) pour permettre aux utilisateurs de réautoriser ou de révoquer votre accès à leur logiciel de comptabilité. Fournir à vos clients ce contrôle est mandaté par les partenaires d'intégration.

## Commencer

Vous pouvez accéder au SDK sur [NPM](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types). Nous recommandons à tous les clients utilisant déjà notre produit [Bank Feeds](/bank-feeds/overview) de migrer vers le SDK Bank Feeds.

##### NPM

```sh
npm add @codat/sdk-bank-feeds-types
```

##### Yarn

```sh
yarn add @codat/sdk-bank-feeds-types
```

Créez un composant qui initialise le SDK :

```react
  import React, { useEffect, useState } from "react";
  import ReactDOM from "react-dom/client";
  import { CodatBankFeedsProps, initializeCodatBankFeeds } from "@codat/sdk-bank-feeds-types";

  const CodatBankFeeds: React.FC<CodatBankFeedsProps> = (props: CodatBankFeedsProps) => {
    const [componentMount, setComponentMount] = useState<HTMLDivElement | null>(
      null
    );

    useEffect(() => {
      const target = componentMount;
      if (target && target.children.length === 0) {
        initializeCodatBankFeeds(target, props);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [componentMount]);

    return (
      <div ref={setComponentMount}/>
    );
  };
```

Utilisez le composant dans votre solution selon vos besoins :

```react
   <CodatBankFeeds
    accessToken="ACCESS_TOKEN"
    companyId="COMPANY_ID"
    onClose={() => alert("onClose")}
    onError={() => alert("onError")}
    onConnection={() => alert("onConnection")}
    onConnectionStarted={() => alert("onConnectionStarted")}
    onFinish={() => alert("onFinish")}
    options={{}}
  />
```

**Étapes conditionnelles**

- **Si vous utilisez TypeScript**, étendez vos déclarations de types avec nos types en installant le package de types à l'aide de `npm install --save-dev @codat/sdk-bank-feeds-types`. Sinon, supprimez le code lié aux types dans les extraits.
- **Si vous utilisez des en-têtes de politique de sécurité du contenu (CSP)**, modifiez ces en-têtes :
  - Mettez Codat sur liste blanche en ajoutant `*.codat.io` à `default-src` (ou chacun de `script-src`, `style-src`, `font-src`, `connect-src`, `img-src`).
  - Ajoutez `unsafe-inline` à `style-src`. N'utilisez _pas_ de hachage car cela peut changer à tout moment sans avertissement.

---

## Lire ensuite

- [Créer les éléments clés](/bank-feeds/create-account) de l'infrastructure Codat requise pour établir un flux bancaire.
