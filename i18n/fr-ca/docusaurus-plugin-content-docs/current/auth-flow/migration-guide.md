---
title: "Guide de migration"
description: "Apprenez à migrer d'un flux de liaison personnalisé vers notre composant Link intégré"
---

import CodeExamples from "./_partial-auth-flow-examples.md";

## Aperçu

Ce guide vous aide à migrer d'un flux de liaison personnalisé vers notre composant **Link** intégré.
Link offre une expérience native, sécurisée et de premier ordre pour connecter les logiciels financiers de vos clients.

## Prérequis

Vous avez besoin d'une application JavaScript pour afficher le composant Link. Notre composant fonctionne avec JavaScript vanille et tous les principaux frameworks JavaScript. TypeScript est pris en charge et recommandé.

:::warning N'utilisez pas Link à l'intérieur d'un iframe. Cela ne fonctionnera pas en raison des restrictions [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).
:::

## Votre implémentation actuelle

### Expérience utilisateur

Votre implémentation actuelle commence probablement par une page de consentement, confirmant que vos clients sont satisfaits de partager leurs données financières avec vous avant d'interagir avec Codat.
Cela inclut souvent des informations sur l'objectif, les données de plateforme consultées et votre politique de conservation.

Le composant Link de Codat prend optionnellement en charge la gestion du consentement et plus encore. Dans le cadre de votre migration, vous pouvez souhaiter tirer parti de cette fonctionnalité native pour supprimer la surcharge de maintenance dans votre application.

### Flux de liaison personnalisé

Il existe deux approches courantes pour les flux de liaison personnalisés, selon votre cas d'utilisation :

- **Créer une entreprise avec un platformKey :**
  Vous transmettez le nom de l'entreprise et le `platformKey` du logiciel financier en un seul appel API. Mieux adapté aux utilisateurs se connectant à un seul système financier.

- **Créer l'entreprise et la connexion séparément :**
  Vous créez d'abord l'entreprise, puis créez une connexion. Cette approche est généralement suivie lors de la connexion de plusieurs plateformes pour un client, par exemple une plateforme comptable et une plateforme bancaire.

![Flux de liaison personnalisé](/img/auth-flow/migration-guide/custom-link-flow.png)

## L'approche Link

Le composant Link intégré remplace votre implémentation personnalisée tout en préservant les éléments d'expérience utilisateur que vous avez déjà construits. Au lieu de gérer la logique de connexion, les appels API et les composants d'interface utilisateur dans votre frontend :

1. Votre backend demande un jeton d'accès à l'API de Codat.
2. Vous transmettez le jeton d'accès et le nom de l'entreprise au composant Link.
3. L'utilisateur complète le flux de connexion dans l'interface utilisateur intégrée.

Link prend en charge vos deux approches actuelles — que vous utilisiez le flux de clé de plateforme pour les connexions uniques ou l'approche en deux étapes pour les connexions de logiciels multiples.

![Flux Link intégré](/img/auth-flow/migration-guide/link-flow.png)

### Conservez votre expérience utilisateur actuelle

Votre page de consentement existante, vos politiques de partage de données et votre flux d'intégration des utilisateurs n'ont pas besoin de changer. Link est hautement personnalisable, vous permettant de :

- **Préserver votre flux de consentement :** Utilisez des pages de consentement personnalisées avec votre messagerie existante sur l'objectif et la conservation des données.
- **Maintenir votre marque :** Contrôlez les couleurs, les logos et le style pour correspondre à votre application.
- **Choisir votre disposition :** Affichez Link dans des vues modales ou non modales en fonction de vos modèles d'interface utilisateur actuels.
- **Contrôler le parcours :** Décidez quand et comment les utilisateurs interagissent avec le flux de connexion.

Cela signifie que vous pouvez migrer votre implémentation pour tirer parti des fonctionnalités de notre produit Link, tout en maintenant votre expérience client et votre parcours de consentement existants.

Apprenez à [personnaliser votre flux d'autorisation](/auth-flow/customize/sdk-customize-code)

## Étapes de migration

### Étape 1 : Configurer CORS

Les paramètres [CORS (Cross-origin resource sharing)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) sont requis pour que les jetons d'accès fonctionnent. Configurez les paramètres CORS sur votre instance Codat :

- Utilisez [Définir CORS](/platform-api#/operations/set-cors-settings) pour enregistrer les domaines autorisés
- Utilisez [Obtenir CORS](/platform-api#/operations/get-cors-settings) pour afficher votre configuration actuelle

### Étape 2 : Implémenter la récupération du jeton d'accès

1. Créez un endpoint backend pour faire proxy à l'API de Codat.
2. Dans cet endpoint, appelez `GET /accessToken` pour récupérer un jeton d'accès pour le composant Link.
3. Renvoyez le `accessToken` dans la réponse.

### Étape 3 : Intégrer le composant Link

:::tip Installer le package npm

Codat fournit un package `types` sur [npm](https://www.npmjs.com/package/@codat/sdk-link-types) qui contient des définitions de type pour les primitives de notre composant Link. Nous recommandons d'utiliser ce package car il simplifie votre implémentation.

`npm install @codat/sdk-link-types`

:::

<CodeExamples />

Configurez Link pour correspondre à votre implémentation actuelle :

- **[Choisir votre disposition :](/auth-flow/customize/sdk-customize-code#properties)** Configurez Link pour afficher dans des vues modales ou non modales pour correspondre à votre interface utilisateur actuelle.
- **[Préserver votre flux de consentement :](/auth-flow/optimize/privacy)** Utilisez les options de consentement de Link ou intégrez-vous à vos pages de consentement existantes.
- **[Correspondre à votre marque :](/auth-flow/customize/branding)** Appliquez votre palette de couleurs, vos logos et votre style en utilisant les options de personnalisation de Link.

:::note Importations dynamiques

Link SDK est importé à l'exécution, donc vous obtiendrez toujours la dernière version de notre interface utilisateur de flux d'autorisation sans risque d'obsolescence. Pour y parvenir, nous utilisons la fonctionnalité [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) d'ES6 (alias importations dynamiques).

:::

### Étape 4 : Supprimer la logique et l'interface utilisateur de liaison personnalisées

- Supprimez vos appels API existants :
  - Si vous utilisez le flux de clé de plateforme, supprimez les appels [Créer une entreprise](/platform-api#/operations/create-company).
  - Si vous utilisez le flux en deux étapes, supprimez à la fois les appels [Créer une entreprise](/platform-api#/operations/create-company) et [Créer une connexion](/platform-api#/operations/create-connection).
- Supprimez les éléments d'interface utilisateur que Link gère maintenant :
  - Interfaces de sélection d'intégration personnalisées.
  - Toutes les pages de consentement maintenant gérées par Link.

## Lire ensuite

- [Personnaliser votre flux d'autorisation](/auth-flow/customize/sdk-customize-code)
