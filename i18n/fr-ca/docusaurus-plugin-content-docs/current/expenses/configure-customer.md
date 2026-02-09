---
title: "Configurer le client dans Codat"
description: "Créer une entreprise et sa connexion qui forment la structure requise pour exécuter le processus de synchronisation des dépenses"
sidebar_label: Configurer le client
displayed_sidebar: expenses
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Aperçu

Lors de l'implémentation de votre solution Expenses, vous devez créer votre client PME en tant qu'[entreprise](../terms/company) dans Codat avant d'enregistrer son logiciel de comptabilité en tant que connexion. Vous pouvez le faire lorsque le client commence à interagir avec votre application.

Ensuite, vous connecterez l'entreprise à une source de données via l'une de nos intégrations. Avec Expenses, chaque entreprise aura deux connexions de données : une au logiciel de comptabilité de la PME, et une autre - à l'intégration des dépenses partenaire, c'est-à-dire votre application.

![A diagram displaying the relationship of a company and two data connections](/img/sync-for-expenses/sfe-connections.png)

:::tip Autorisez vos appels API
N'oubliez pas de vous [authentifier](/using-the-api/authentication) lors des appels à notre API. Accédez à **Developers > API keys** dans le Portail pour récupérer votre en-tête d'autorisation.
:::

## Créer une entreprise

Dans Expenses, une entreprise représente votre client PME qui gère ses dépenses à l'aide de votre application. Pour la créer, utilisez notre endpoint [Create company](/sync-for-expenses-api#/operations/create-company). Il retourne une réponse JSON contenant l'`id` de l'entreprise. Vous utiliserez cet `id` pour établir une connexion à un logiciel de comptabilité.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Requête

```json
POST /companies

{
    "name": "{companyName}"
}
```

#### Réponse

```json
{
  "id": "77921ff9-2491-4dfe-b23b-ff28f3e31e4f",
  "name": "Sawayn Group",
  "platform": "",
  "redirect": "https://link.codat.io/company/77921ff9-2491-4dfe-b23b-ff28f3e31e4f",
  "dataConnections": [],
  "created": "2023-09-06T09:13:35.8188152Z"
}
```

</TabItem >

</Tabs>

## Créer une connexion comptable

Ensuite, utilisez le endpoint [Create connection](/sync-for-expenses-api#/operations/create-connection) pour connecter l'entreprise à une source de données comptables via l'une de nos intégrations. Cela vous permettra de synchroniser les données avec cette source. Dans le corps de la requête, spécifiez une `platformKey` du logiciel de comptabilité auquel vous souhaitez vous connecter.

| Logiciel de comptabilité      | platformKey |
| ----------------------------- | ----------- |
| Dynamics 365 Business Central | `trji`      |
| FreeAgent                     | `fbrh`      |
| Oracle NetSuite               | `akxx`      |
| QuickBooks Desktop            | `pqsw`      |
| QuickBooks Online             | `qhyg`      |
| Xero                          | `gbol`      |

À titre d'exemple, créons une connexion QuickBooks Online (QBO). En réponse, le endpoint retourne un objet `dataConnection` avec un statut `PendingAuth` et un `linkUrl`. Dirigez votre client vers le `linkUrl` pour lancer notre [flux d'authentification Link](/auth-flow/overview) et lui permettre d'autoriser cette connexion.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Requête

```json

POST /companies/{companyId}/connections
{
    "platformKey": "qhyg"
}

```

#### Réponse

```json
{
  "id": "7baba7cc-4ae0-48fd-a617-98d55a6fc008",
  "integrationId": "6b113e06-e818-45d7-977b-8e6bb3d01269",
  "sourceId": "56e6575a-3f1f-4918-b009-f7535555f0d6",
  "platformName": "QuickBooks Online",
  "linkUrl": "https://link-api.codat.io/companies/{companyId}/connections/{connectionId}/start?otp=742271",
  "status": "PendingAuth",
  "created": "2022-09-01T10:21:57.0807447Z",
  "sourceType": "Accounting"
}
```

</TabItem >

</Tabs>

## Créer une connexion de dépenses partenaire

Une fois que votre client a autorisé l'accès à son logiciel de comptabilité, vous devez créer une autre connexion pour son entreprise pour l'intégration des dépenses partenaire.

Utilisez notre endpoint [Create partner expense connection](/sync-for-expenses-api#/operations/create-partner-expense-connection) pour lier l'entreprise à votre application. Cette connexion est créée avec le statut `Linked`, vous n'avez donc rien d'autre à faire pour l'autoriser.

## Désautoriser une connexion

Si votre client souhaite révoquer son approbation et rompre la connexion à son logiciel de comptabilité, utilisez le endpoint [Unlink connection](/sync-for-expenses-api#/operations/unlink-connection).

Vous pouvez [en savoir plus](/auth-flow/optimize/connection-management) sur les meilleures pratiques de gestion des connexions et voir comment vous pouvez fournir cette fonctionnalité dans l'interface utilisateur de votre application.

```json
PATCH /companies/{companyId}/connections/{connectionId}
 {
 "status": "Unlinked"
 }
```

:::tip Récapitulatif

Vous avez créé la structure des objets clés requis par Expenses de Codat : une entreprise et ses connexions à une source de données comptables et à votre intégration de dépenses partenaire.

Ensuite, apprenez comment configurer l'entreprise pour associer les dépenses aux comptes, fournisseurs et clients corrects et permettre à vos clients d'indiquer leurs options de mappage de dépenses préférées.

:::

---

## À lire ensuite

- [Gérer la configuration des dépenses de votre client](/expenses/config-and-categorize)
