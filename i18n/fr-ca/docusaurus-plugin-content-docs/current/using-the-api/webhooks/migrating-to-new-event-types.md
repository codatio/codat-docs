---
title: "Migrer vers nos nouveaux types d'événements"
sidebar_label: "Utiliser les nouveaux types d'événements"
description: "Apprenez comment migrer vos webhooks existants vers nos nouveaux types d'événements"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nous avons récemment publié nos [nouveaux types d'événements webhook](/updates/241004-new-webhook-event-types). Pour assurer une transition en douceur vers ces types, nous recommandons d'utiliser une stratégie « expand/contract ». Elle permet à votre système de gérer à la fois les anciens types de règles et les nouveaux types d'événements pendant la migration, minimisant ainsi les perturbations potentielles.

:::info Dans ce guide :

- Consultez les étapes recommandées pour migrer vos webhooks existants vers les nouveaux types d'événements.
- Comprenez comment les types de règles existants et leurs schémas correspondent aux nouveaux types d'événements.
- Découvrez comment gérer les notifications pour les types de règles qui ne seront pas remplacés.
  :::

## Migrer vers les nouveaux types d'événements

Pour passer aux nouveaux types d'événements en utilisant la stratégie « expand/contract » recommandée, suivez ces étapes :

1. **Mettez à jour votre logique applicative**

   Modifiez votre logique applicative pour gérer simultanément les types d'événements existants et nouveaux :
   - Créez un nouveau point de terminaison POST spécifiquement conçu pour consommer le nouveau type d'événement webhook.
   - Créez un commutateur de fonctionnalité pour contrôler l'activation du **nouveau** point de terminaison. **L'activation** du commutateur devrait **activer** le point de terminaison pour commencer à traiter les événements.
   - Créez un autre commutateur de fonctionnalité pour contrôler votre consommateur webhook **existant**. **La désactivation** du commutateur devrait **arrêter** le point de terminaison de traiter les anciens types de règles.

2. **Configurez le nouveau consommateur webhook dans le Portail**

   Dans le [Portail Codat](https://app.codat.io), configurez un nouveau consommateur webhook qui pointe vers votre nouveau point de terminaison. Consultez [Créer des consommateurs webhook pour s'abonner aux événements](/using-the-api/webhooks/create-consumer) pour une procédure détaillée.

3. **Validez le nouveau consommateur webhook**

   Testez le nouveau consommateur webhook pour vous assurer qu'il reçoit et traite correctement le nouveau type d'événement. Vous pouvez envoyer des événements de test et vérifier les journaux dans le [Portail Codat](https://app.codat.io). Naviguez vers **Monitor > Events** et sélectionnez le point de terminaison pertinent pour ce faire. Consultez [Tester un consommateur webhook](/using-the-api/webhooks/create-consumer#test-a-webhook-consumer) pour une procédure détaillée.

4. **Activez le nouveau consommateur webhook**

   Lorsque vous avez confirmé que le nouveau consommateur webhook fonctionne correctement, activez le point de terminaison en activant le commutateur de fonctionnalité que vous avez créé pour le contrôler. Cela dirigera votre application pour traiter les événements via le nouveau consommateur webhook sans perdre d'événements.

   À ce stade, les deux consommateurs webhook seront actifs et pourraient recevoir et traiter les mêmes événements en conséquence. Incluez une logique dans votre application qui empêche le même événement d'être traité par les deux points de terminaison pour éviter la duplication.

5. **Désactivez l'ancien consommateur webhook**

   Une fois que vous êtes satisfait du nouveau consommateur webhook, désactivez votre ancien point de terminaison en désactivant le commutateur de fonctionnalité que vous avez créé pour le contrôler, supprimez l'ancien consommateur du Portail et retirez la logique applicative consommant les anciens types de règles.

## Comprendre les nouveaux types d'événements

Ci-dessous se trouve le résumé des anciens types de règles et des nouveaux types d'événements qui les remplacent. Cliquez sur le type d'événement requis pour vérifier les champs et le schéma du type d'événement de remplacement et comment il correspond aux anciens types de règles.

Vous pouvez également consulter la page dédiée à nos nouveaux [types d'événements webhook](/using-the-api/webhooks/event-types).

| Type de règle existant                                        | Type d'événement de remplacement                                                                                                    |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [ClientRateLimitReached](#clientratelimitreached)             | `client.rateLimit.reached`                                                                                                          |
| [ClientRateLimitReset](#clientratelimitreset)                 | `client.rateLimit.reset`                                                                                                            |
| [DataConnectionStatusChanged](#dataconnectionstatuschanged)   | `connection.created`<br/>`connection.connected`<br/>`connection.disconnected`<br/>`connection.reconnected`<br/>`connection.deleted` |
| [DataSyncCompleted](#datasynccompleted)                       | `read.completed`                                                                                                                    |
| [DataSyncStatusChangedToError](#datasyncstatuschangedtoerror) | `read.completed`                                                                                                                    |
| [DatasetDataChanged](#datasetdatachanged)                     | `read.completed`                                                                                                                    |
| [NewCompanySynchronized](#newcompanysynchronized)             | `read.completed.initial`                                                                                                            |
| [PushOperationStatusChanged](#pushoperationstatuschanged)     | `{dataType}.write.successful`<br/>`{dataType}.write.unsuccessful`                                                                   |
| [PushOperationTimedOut](#pushoperationtimedout)               | `{dataType}.write.unsuccessful`                                                                                                     |
| [SyncCompleted](#synccompleted)                               | `expenses.sync.successful`                                                                                                          |
| [SyncFailed](#syncfailed)                                     | `expenses.sync.unsuccessful`                                                                                                        |
| [SyncConnectionDeleted](#syncconnectiondeleted)               | `connection.deleted`                                                                                                                |

#### ClientRateLimitReached

Appelé lorsque les requêtes du client vers l'API de Codat dépassent le quota actuel. Cet événement suit maintenant nos normes de schéma mises à jour.

| Type de règle        | Correspond au type d'événement                                                      |
| -------------------- | ----------------------------------------------------------------------------------- |
| `Rate Limit Reached` | [`client.rateLimit.reached`](/platform-api#/webhooks/client.rateLimit.reached/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>
<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Rate Limit Reached",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "Message": "The current daily rate limit quota of 1000 requests for bae71d36-ff47-420a-b4a6-f8c9ddf41140 has been reached.",
  "Data": {
    "DailyQuota": 1000,
    "ExpiresUtc": "2023-05-03T00:00:00Z"
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "client.rateLimit.reached",
  "generatedDate": "2024-08-24T14:15:27Z",
  "payload": {
    "dailyQuota": 1000,
    "expiryDate": "2023-05-03T00:00:00Z",
    "quotaRemaining": 1000
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma | Propriété du nouveau schéma                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `Message`           | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.DailyQuota`   | `payload.dailyQuota`                                                                                                                                                             |
| `Data.ExpiresUtc`   | `payload.expiryDate`                                                                                                                                                             |

</details>

#### ClientRateLimitReset

Appelé lorsque le quota de limite de taux du client est réinitialisé, permettant davantage de requêtes vers l'API de Codat. Cet événement suit maintenant nos normes de schéma mises à jour.

| Type de règle      | Correspond au type d'événement                                                  |
| ------------------ | ------------------------------------------------------------------------------- |
| `Rate Limit Reset` | [`client.rateLimit.reset`](/platform-api#/webhooks/client.rateLimit.reset/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>
<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Rate Limit Reset",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "Message": "The current daily rate limit quota for client 30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e has been reset to 1000 requests.",
  "Data": {
    "DailyQuota": 1000,
    "ExpiresUtc": "2023-05-03T00:00:00Z",
    "ResetReason": "The quota was reset because it is a new day.",
    "QuotaRemaining": 1000
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "client.rateLimit.reached",
  "generatedDate": "2024-08-24T14:15:27Z",
  "payload": {
    "dailyQuota": 1000,
    "expiryDate": "2023-05-03T00:00:00Z",
    "quotaRemaining": 1000
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma   | Propriété du nouveau schéma                                                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`             | `id`                                                                                                                                                                             |
| `RuleType`            | `eventType`                                                                                                                                                                      |
| `RuleId`              | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`            | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`          | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `Message`             | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.DailyQuota`     | `payload.dailyQuota`                                                                                                                                                             |
| `Data.ExpiresUtc`     | `payload.expiryDate`                                                                                                                                                             |
| `Data.ResetReason`    | Non remplacé. Cette propriété n'est pas pertinente pour une utilisation dans un webhook.                                                                                                                |
| `Data.QuotaRemaining` | `payload.quotaRemaining`                                                                                                                                                         |

</details>

#### DataConnectionStatusChanged

Appelé chaque fois que le statut d'une connexion de données change, cet événement a été remplacé par des webhooks plus précis qui offrent un contexte plus détaillé sur la transition d'état.

Les nouveaux webhooks incluent maintenant le [schéma de connexion complet](/platform-api#/schemas/Connection), assurant la cohérence entre nos API et webhooks.

| Type de règle                 | Ancien statut                 | Nouveau statut                | Correspond au type d'événement                                                    |
| ----------------------------- | ----------------------------- | ----------------------------- | --------------------------------------------------------------------------------- |
| `DataConnectionStatusChanged` | -                             | `PendingAuth`                 | [`connection.created`](/platform-api#/webhooks/connection.created/post)           |
| `DataConnectionStatusChanged` | `PendingAuth`                 | `Linked`                      | [`connection.connected`](/platform-api#/webhooks/connection.connected/post)       |
| `DataConnectionStatusChanged` | `Linked`                      | `Unlinked`<br/>`Deauthorized` | [`connection.disconnected`](/platform-api#/webhooks/connection.disconnected/post) |
| `DataConnectionStatusChanged` | `Unlinked`<br/>`Deauthorized` | `Linked`                      | [`connection.reconnected`](/platform-api#/webhooks/connection.reconnected/post)   |
| `DataConnectionStatusChanged` | -                             | -                             | [`connection.deleted`](/platform-api#/webhooks/connection.deleted/post)           |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>

<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "DataConnectionStatusChanged",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Data connection for SandBox status changed from PendingAuth to Linked",
  "Data": {
    "dataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "newStatus": "Linked",
    "oldStatus": "PendingAuth",
    "platformKey": "gbol"
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "connection.{created,conneected,disconnected,reconnected,deleted}",
  "generatedDate": "2024-08-24T14:15:27Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "connection": {
      "id": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "gbol",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "platformName": "Xero",
      "linkUrl": "https://link-api.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/start",
      "status": "Linked",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "created": "2022-10-27T09:53:29Z",
      "sourceType": "Banking"
    }
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma     | Propriété du nouveau schéma                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`               | `id`                                                                                                                                                                             |
| `RuleType`              | `eventType`                                                                                                                                                                      |
| `RuleId`                | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`              | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`            | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`             | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`      | `payload.connection.id`                                                                                                                                                          |
| `Message`               | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.dataConnectionId` | `payload.connection.id`                                                                                                                                                          |
| `Data.newStatus`        | `payload.connection.status`                                                                                                                                                      |
| `Data.oldStatus`        | Non remplacé. Les nouveaux types d'événements spécifient la transition d'état, donc le statut précédent n'est pas nécessaire.                                                           |
| `Data.platformKey`      | `payload.connection.integrationKey`                                                                                                                                              |

</details>

#### DataSyncCompleted

Appelé lorsqu'une synchronisation de données se termine, l'événement hérité génère une notification pour chaque `dataType` lorsqu'il termine la synchronisation quel que soit le résultat.

L'événement de remplacement `read.completed` utilise le même déclencheur, mais fournit maintenant des informations détaillées sur le résultat de l'opération de lecture, y compris le statut de la synchronisation et si des enregistrements ont été modifiés. Voir [Récupérer les données de l'entreprise](/using-the-api/get-data).

:::tip Adoption du nouveau schéma
Lors de l'adoption du nouveau schéma, assurez-vous de gérer tous les éléments du tableau `dataTypes` pour maintenir la compatibilité future.
:::

| Type de règle         | Correspond au type d'événement                                  |
| --------------------- | --------------------------------------------------------------- |
| `Data sync completed` | [`read.completed`](/platform-api#/webhooks/read.completed/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>
<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Data sync completed",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Data sync of type creditNotes completed for company 7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "Data": {
    "dataType": "creditNotes",
    "datasetId": "1541a5ee-0d84-4b6e-a7f7-c07c1f216333"
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "read.completed",
  "generatedDate": "2024-08-07T12:02:32.15033Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "modifiedFromDate": "2024-08-06T12:00:00.00Z",
    "dataTypes": [
      {
        "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        "dataType": "creditNotes",
        "recordsModified": true,
        "status": "Complete"
      }
    ]
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma | Propriété du nouveau schéma                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`  | `payload.dataTypes[].connectionId`                                                                                                                                               |
| `Message`           | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.dataType`     | `payload.dataTypes[].dataType`                                                                                                                                                   |
| `Data.datasetId`    | Non remplacé. Si vous rencontrez un problème, fournissez l'ID de l'entreprise au support pour faciliter le dépannage.                                                                       |

</details>

#### DataSyncStatusChangedToError

Appelé lorsque la synchronisation d'un ensemble de données échoue, le webhook de remplacement `read.completed` inclut maintenant des informations indiquant si les données ont été lues avec succès dans le cache de Codat.

Cela fournit un aperçu à la fois de l'achèvement de l'opération de lecture et de son résultat. Voir [Récupérer les données de l'entreprise](/using-the-api/get-data).

:::tip Adoption du nouveau schéma
Lors de l'adoption du nouveau schéma, assurez-vous de gérer tous les éléments du tableau `dataTypes` pour maintenir la compatibilité future.
:::

#### Correspondance des propriétés

| Propriété de l'ancien schéma                 | Propriété du nouveau schéma                                             |
| ----------------------------------- | --------------------------------------------------------------- |
| `Data Sync Status Changed To Error` | [`read.completed`](/platform-api#/webhooks/read.completed/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>
<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Data Sync Status Changed To Error",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "ERROR: syncing payments triggered a ProcessingError notification at 2020-04-21T12:12:57.4250446Z.",
  "Data": {
    "dataType": "invoices",
    "datasetStatus": "ProcessingError",
    "datasetId": "6586f21b-ad4d-4d06-a309-712af47184a2"
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "read.completed",
  "generatedDate": "2024-08-07T12:02:32.15033Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "modifiedFromDate": "2024-08-06T12:00:00.00Z",
    "dataTypes": [
      {
        "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        "dataType": "invoices",
        "recordsModified": true,
        "status": "ProcessingError"
      }
    ]
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma  | Propriété du nouveau schéma                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`            | `id`                                                                                                                                                                             |
| `RuleType`           | `eventType`                                                                                                                                                                      |
| `RuleId`             | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`           | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`         | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`          | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`   | `payload.dataTypes[].connectionId`                                                                                                                                               |
| `Message`            | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.dataType`      | `payload.dataTypes[].dataType`                                                                                                                                                   |
| `Data.datasetStatus` | `payload.dataTypes[].status`                                                                                                                                                     |
| `Data.datasetId`     | Non remplacé. Si vous rencontrez un problème, fournissez l'ID de l'entreprise au support pour faciliter le dépannage.                                                                       |

</details>

#### DatasetDataChanged

Appelé lorsqu'une synchronisation d'ensemble de données se termine et entraîne des mises à jour dans le cache de données de Codat, comme la création de nouveaux enregistrements ou des modifications d'enregistrements existants.

Le webhook de remplacement `read.completed` fournit maintenant des informations sur le moment où les données dans le cache de Codat ont été modifiées pour la dernière fois et si des enregistrements dans un type de données ont été mis à jour depuis l'opération de lecture précédente.

Pour répliquer le comportement du webhook hérité `DatasetDataChanged`, vérifiez si la valeur booléenne `recordsModified` pour le type de données est `true`.

Voir [Récupérer les données de l'entreprise](/using-the-api/get-data).

:::tip Adoption du nouveau schéma
Lors de l'adoption du nouveau schéma, assurez-vous de gérer tous les éléments du tableau `dataTypes` pour maintenir la compatibilité future.
:::

| Type de règle          | Correspond au type d'événement                                  |
| ---------------------- | --------------------------------------------------------------- |
| `Dataset data changed` | [`read.completed`](/platform-api#/webhooks/read.completed/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>
<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Dataset data changed",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Data has changed for dataset type invoices, company 8a210b68-6988-11ed-a1eb-0242ac120002",
  "Data": {
    "dataType": "invoices",
    "datasetId": "6586f21b-ad4d-4d06-a309-712af47184a2"
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "read.completed",
  "generatedDate": "2024-08-07T12:02:32.15033Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "modifiedFromDate": "2024-08-06T12:00:00.00Z",
    "dataTypes": [
      {
        "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        "dataType": "invoices",
        "recordsModified": true,
        "status": "ProcessingError"
      }
    ]
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma | Propriété du nouveau schéma                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`  | `payload.dataTypes[].connectionId`                                                                                                                                               |
| `Message`           | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.dataType`     | `payload.dataTypes[].dataType`                                                                                                                                                   |
| `Data.datasetId`    | Non remplacé. Si vous rencontrez un problème, fournissez l'ID de l'entreprise au support pour faciliter le dépannage.                                                                       |

</details>

#### NewCompanySynchronized

Appelé lorsque les synchronisations initiales sont terminées pour tous les types de données mis en file d'attente pour une entreprise nouvellement connectée, et qu'au moins une de ces synchronisations réussit.

Le webhook de remplacement `read.completed.initial` est appelé lorsque les données sont lues avec succès après chaque fois qu'une connexion est autorisée. Utilise la même charge utile que le webhook `read.completed`.

:::tip Adoption du nouveau schéma
Lors de l'adoption du nouveau schéma, assurez-vous de gérer tous les éléments du tableau `dataTypes` pour maintenir la compatibilité future.
:::

| Type de règle              | Correspond au type d'événement                                                  |
| -------------------------- | ------------------------------------------------------------------------------- |
| `New company synchronized` | [`read.completed.initial`](/platform-api#/webhooks/read.completed.initial/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>
<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "New company synchronized",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Company 8a210b68-6988-11ed-a1eb-0242ac120002 synced for the first time"
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "read.completed.initial",
  "generatedDate": "2024-08-07T12:02:32.15033Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "modifiedFromDate": "2024-08-06T12:00:00.00Z",
    "dataTypes": [
      {
        "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        "dataType": "invoices",
        "recordsModified": true,
        "status": "ProcessingError"
      }
    ]
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma | Propriété du nouveau schéma                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`  | `payload.dataTypes[].connectionId`                                                                                                                                               |
| `Message`           | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.dataType`     | `payload.dataTypes[].dataType`                                                                                                                                                   |
| `Data.datasetId`    | Non remplacé. Si vous rencontrez un problème, fournissez l'ID de l'entreprise au support pour faciliter le dépannage.                                                                       |

</details>

#### PushOperationStatusChanged

Appelé lorsque le statut d'une opération d'écriture change, cet événement a été remplacé par deux webhooks plus précis : `{dataType}.write.successful` et `{dataType}.write.unsuccessful`.

Ces types d'événements fournissent des informations détaillées, incluant si l'opération d'écriture a réussi, l'ID de l'enregistrement et l'ID de la pièce jointe lors de la création, de la mise à jour ou de la suppression d'enregistrements.

| Type de règle                         | Statut des données         | Correspond au type d'événement                                                       |
| --------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------- |
| `Push Operation Status Changed()` | `Successful`           | [`{dataType}.write.successful`](/platform-api#/webhooks/dataType-.write.successful/post)     |
| `Push Operation Status Changed()` | `TimedOut` ou `Failed` | [`{dataType}.write.unsuccessful`](/platform-api#/webhooks/dataType-.write.unsuccessful/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>

<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Push Operation Status Changed()",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "invoices triggered notification for PushOperationStatusChanged at 2019-05-22T18:19:42.742Z",
  "Data": {
    "dataType": "invoices",
    "status": "Success",
    "pushOperationKey": "c2f8847d-3047-4619-a157-6d947d8e4a73"
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "invoices.write.successful",
  "generatedDate": "2022-10-23T00:00:00.000Z",
  "payload": {
    "id": "c2f8847d-3047-4619-a157-6d947d8e4a73",
    "type": "Create",
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "requestedOnDate": "2022-10-23T00:00:00.000Z",
    "completedOnDate": "2022-10-23T00:00:00.000Z",
    "status": "Success",
    "record": {
      // only populated on success for records, and always populated for attachments.
      "id": "inv_sedi984199smdjsua9124"
    },
    "attachmentId": null
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma     | Propriété du nouveau schéma                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`               | `id`                                                                                                                                                                             |
| `RuleType`              | `eventType`                                                                                                                                                                      |
| `RuleId`                | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`              | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`            | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`             | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`      | `payload.connectionId`                                                                                                                                                           |
| `Message`               | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.dataType`         | `eventType`                                                                                                                                                                      |
| `Data.status`           | `payload.status`                                                                                                                                                                 |
| `Data.pushOperationKey` | `payload.id`                                                                                                                                                                     |

</details>

#### PushOperationTimedOut

Appelé lorsqu'une opération d'écriture expire. Ce webhook a été remplacé par le type d'événement `{dataType}.write.unsuccessful`.

| Type de règle              | Statut des données | Correspond au type d'événement                                                           |
| -------------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| `Push Operation Timed Out` | `TimedOut`  | [`{dataType}.write.unsuccessful`](/platform-api#/webhooks/dataType-.write.unsuccessful/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>

<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Push Operation Timed Out",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "ERROR: pushing invoices never finished in time, timing out at 2020-09-07T08:42:13",
  "Data": {
    "dataType": "invoices",
    "pushOperationKey": "c2f8847d-3047-4619-a157-6d947d8e4a73",
    "pushOperationGuid": "c2f8847d-3047-4619-a157-6d947d8e4a73"
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "invoices.write.successful",
  "generatedDate": "2022-10-23T00:00:00.000Z",
  "payload": {
    "id": "c2f8847d-3047-4619-a157-6d947d8e4a73",
    "type": "Create",
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "requestedOnDate": "2022-10-23T00:00:00.000Z",
    "completedOnDate": "2022-10-23T00:00:00.000Z",
    "status": "TimedOut",
    "record": null,
    "attachmentId": null
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma      | Propriété du nouveau schéma                                                                                                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`                | `id`                                                                                                                                                                             |
| `RuleType`               | `eventType`                                                                                                                                                                      |
| `RuleId`                 | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`               | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`             | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`              | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`       | `payload.connectionId`                                                                                                                                                           |
| `Message`                | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.dataType`          | `eventType`                                                                                                                                                                      |
| `Data.pushOperationKey`  | `payload.id`                                                                                                                                                                     |
| `Data.pushOperationGuid` | `payload.id`                                                                                                                                                                     |

</details>

#### SyncCompleted

Le type de règle d'origine est appelé lorsqu'une synchronisation de dépenses [Expenses](/expenses/overview) est terminée. Le type d'événement de remplacement est appelé uniquement lorsque la synchronisation se termine avec succès.

| Type de règle    | Correspond au type d'événement                                                               |
| ---------------- | -------------------------------------------------------------------------------------------- |
| `Sync Completed` | [`expenses.sync.successful`](/sync-for-expenses-api#/webhooks/expenses.sync.successful/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>
<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "33a4f8e9-09ae-4334-9b00-7bbe83024672",
  "RuleType": "Sync Completed",
  "RuleId": "5c27631d-3b63-4b50-8228-ee502fd113eb",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "Message": "Sync 321363b4-efa9-4fbc-b71c-0b58d62f3248 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense completed successfully.",
  "Data": {
    "syncId": "321363b4-efa9-4fbc-b71c-0b58d62f3248",
    "syncType": "Expense"
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "33a4f8e9-09ae-4334-9b00-7bbe83024672",
  "eventType": "expenses.sync.successful",
  "generatedDate": "2022-10-23T00:00:00.000Z",
  "payload": {
    "referenceCompany": {
      "id": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/1f9559e7-8368-48c9-bdf4-f158e16b8b85/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "syncId": "321363b4-efa9-4fbc-b71c-0b58d62f3248"
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma | Propriété du nouveau schéma                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `Message`           | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.syncId`       | `payload.syncId`                                                                                                                                                                 |
| `Data.syncType`     | `eventType`                                                                                                                                                                      |

</details>

#### SyncFailed

Appelé chaque fois qu'une synchronisation de dépenses [Expenses](/expenses/overview) échoue, cet événement suit maintenant nos normes de schéma mises à jour.

| Type de règle | Correspond au type d'événement                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------ |
| `Sync Failed` | [`expenses.sync.unsuccessful`](/sync-for-expenses-api#/webhooks/expenses.sync.unsuccessful/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>
<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "RuleType": "Sync Failed",
  "RuleId": "289c80dc-2aee-4b71-afff-9acd8d051080",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "Message": "Sync 3bead2a1-1b3d-4d90-8077-cddc5ca68b01 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense has failed at step Pushing.",
  "Data": {
    "syncId": "3bead2a1-1b3d-4d90-8077-cddc5ca68b01",
    "syncType": "Expense",
    "FailureStage": "Pushing"
  }
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "eventType": "expenses.sync.unsuccessful",
  "generatedDate": "2022-10-23T00:00:00.000Z",
  "payload": {
    "referenceCompany": {
      "id": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/1f9559e7-8368-48c9-bdf4-f158e16b8b85/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "syncId": "3bead2a1-1b3d-4d90-8077-cddc5ca68b01"
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma | Propriété du nouveau schéma                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `Message`           | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |
| `Data.syncId`       | `payload.syncId`                                                                                                                                                                 |
| `Data.syncType`     | `eventType`                                                                                                                                                                      |
| `Data.FailureStage` | Non remplacé. Cette propriété n'est plus prise en charge.                                                                                                                              |

</details>

#### SyncConnectionDeleted

Cet événement hérité est spécifique à notre solution héritée [Sync for Commerce](/commerce/overview) et indique qu'une connexion de données a été supprimée. Cela a maintenant été remplacé par le type d'événement `connection.deleted` à l'échelle de la plateforme.

| Type de règle             | Correspond au type d'événement                                          |
| ------------------------- | ----------------------------------------------------------------------- |
| `Sync Connection Deleted` | [`connection.deleted`](/platform-api#/webhooks/connection.deleted/post) |

<details>
  <summary><b>Comparer les schémas webhook</b></summary>
<Tabs>
<TabItem value="old" label="Ancien schéma">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Sync Connection Deleted",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "Message": "Sync connection for company 8a210b68-6988-11ed-a1eb-0242ac120002 deleted"
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "connection.deleted",
  "generatedDate": "2024-08-24T14:15:27Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "connection": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "gbol",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "platformName": "Xero",
      "linkUrl": "https://link-api.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/8a210b68-6988-11ed-a1eb-0242ac120002/start",
      "status": "Linked",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "created": "2022-10-27T09:53:29Z",
      "sourceType": "Banking"
    }
  }
}
```

</TabItem>

</Tabs>

#### Correspondance des propriétés

| Propriété de l'ancien schéma | Propriété du nouveau schéma                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Non remplacé. Si vous avez besoin de l'ID client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Non remplacé. Si vous avez besoin du nom client Codat, incluez-le comme en-tête personnalisé dans la requête API. Voir [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `Message`           | Non remplacé. Nos services de messagerie et webhooks ne sont plus combinés en un seul service, rendant cette propriété redondante.                                                      |

</details>

---

## Lire la suite

- Consultez les [types d'événements webhook](/using-the-api/webhooks/event-types)
- [Gérer les consommateurs webhook](/using-the-api/webhooks/create-consumer)
- [Prendre en charge les notifications par courriel avec Zapier](/using-the-api/webhooks/zapier-integration)
- [Dépannage](/using-the-api/webhooks/troubleshooting)
