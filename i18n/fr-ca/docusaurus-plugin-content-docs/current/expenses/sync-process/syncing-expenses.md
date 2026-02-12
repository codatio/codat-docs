---
title: "Synchroniser les transactions"
sidebar_label: "Synchroniser les transactions"
description: "Enregistrer des transactions dans le logiciel de comptabilité de votre client et surveiller la progression des synchronisations d'ensembles de données"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Synchroniser les transactions

Une fois que vous avez créé les données de transaction de dépenses de votre client, nous lançons automatiquement une synchronisation qui enregistre les dépenses dans le logiciel de comptabilité du client.

Vous pouvez continuer à écrire de nouvelles dépenses dans Codat pendant qu'une synchronisation est en cours.

## Vérifier le statut de synchronisation

Une fois que vous avez lancé la synchronisation, vous pouvez vérifier si la synchronisation s'est terminée avec succès et voir les détails de toute erreur qui aurait pu se produire.

### Événements webhook

Nous vous recommandons d'utiliser des webhooks pour écouter les événements et suivre le statut de synchronisation. Pour configurer un [consommateur de webhook](/using-the-api/webhooks/create-consumer), accédez à **Settings > Webhooks > Configure consumer** dans le [Portail Codat](https://app.codat.io/settings) et cliquez sur **Add endpoint** qui écoute les événements suivants :

- L'événement **Expenses sync failed** de type `SyncFailed` est déclenché si des échecs se sont produits pendant le processus de synchronisation.
- L'événement **Expenses sync completed** de type `SyncCompleted` est déclenché lorsqu'une synchronisation se termine.

Vous pouvez [en savoir plus](/using-the-api/webhooks/overview) sur les webhooks chez Codat et les différents événements que nous offrons pour surveiller.

<details>
  <summary>Codes de statut de synchronisation</summary>

| Code | Raison                                                      |
| :--- | :---------------------------------------------------------- |
| 1000 | En cours                                                    |
| 1010 | En cours (Longue durée - plus de dix minutes)               |
| 2000 | Succès (Données écrites)                                    |
| 2040 | Succès (Aucune donnée écrite)                               |
| 4000 | Erreur de configuration                                     |
| 4040 | Entreprise supprimée/désautorisée                           |
| 4220 | Entreprise supprimée/désautorisée                           |
| 4260 | Expiration de la facturation du logiciel de comptabilité    |
| 5000 | Erreur générique du serveur                                 |
| 5080 | Protection contre les duplications                          |
| 5120 | Erreur de traitement des données                            |
| 5130 | Erreur d'écriture des données                               |

</details>

### Statut de synchronisation via l'API

Alternativement, vous pouvez vérifier le statut de synchronisation via notre API en utilisant l'un des endpoints suivants :

- [Latest sync status](/sync-for-expenses-api#/operations/get-latest-sync) pour vérifier le statut de la dernière synchronisation lancée.
- [Last successful sync](/sync-for-expenses-api#/operations/get-last-successful-sync) pour voir la synchronisation la plus récente qui s'est terminée avec succès.
- [List sync statuses](/sync-for-expenses-api#/operations/list-syncs) pour afficher les détails du statut de toutes les synchronisations pour une entreprise spécifiée.
- [Get sync status](/sync-for-expenses-api#/operations/get-sync-by-id) pour vérifier les détails du statut d'une synchronisation spécifiée.

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http
GET https://api.codat.io/companies/{companyId}/sync/expenses/syncs/syncId/status
```

</TabItem>

<TabItem value="Success" label="Sync Successful">

```json
{
  "companyId": "71c1fdae-e104-4668-8a4c-7f795aafc2a4",
  "syncId": "ea86bb15-7a89-4b2d-a18d-626cc0e28137",
  "syncStatusCode": 2000,
  "syncStatus": "Complete",
  "errorMessage": "",
  "syncExceptionMessage": "",
  "syncUtc": "2022-08-03T01:30:09.0797213Z",
  "dataPushed": true
}
```

</TabItem>

<TabItem value="Failed" label="Sync Failed">

```json
{
  "companyId": "8cba59e5-ae8a-418b-918a-09f90850e8d8",
  "syncId": "2b5d5fd1-f4b2-49de-98c3-ca37a0dcd8cd",
  "syncStatusCode": 5130,
  "syncStatus": "PushError",
  "errorMessage": "An error occurred in a downstream service. Correlation ID: 1f6ab1bc-58c8-4c1a-a654-86464b065f69. Message:  Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organization.",
  "syncExceptionMessage": "An error occurred in a downstream service. Correlation ID: 62f0f708-ae37-4b3a-81b1-41f1361f0b40. Message:  Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organization.",
  "syncUtc": "2022-08-03T01:11:33.6279333Z",
  "dataPushed": false
}
```

</TabItem>

</Tabs>

### Statut de transaction

Si vous souhaitez vérifier le statut de transactions individuelles, utilisez le endpoint [Get sync transaction](/sync-for-expenses-api#/operations/get-sync-transaction). Il retourne également les erreurs associées à la transaction si elle n'a pas réussi.

Alternativement, utilisez le endpoint [List sync transactions](/sync-for-expenses-api#/operations/list-sync-transactions) pour voir les statuts de toutes les transactions dans une synchronisation spécifiée.

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http
GET https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions
```

</TabItem>

<TabItem value="Success" label="Successful Transactions">

```json
{
  "results": [
    {
      "transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
      "status": "Completed",
      "integrationType": "bankfeeds"
    },
    {
      "transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
      "status": "Completed",
      "integrationType": "expense"
    }
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 134,
  "_links": {
    "current": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions?page=1&pageSize=100"
    },
    "self": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions"
    },
    "next": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions?page=2&pageSize=100"
    }
  }
}
```

</TabItem>

<TabItem value="Failed" label="Failed Transactions">

```json
{
  "results": [
    {
      "transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
      "status": "PushError",
      "message": "An error occurred in a downstream service. Correlation ID: 0e7ee4bc-50d2-4e07-8f9e-25fdda6bc004. Message:  Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organization.",
      "integrationType": "bankfeeds"
    },
    {
      "transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
      "status": "PushError",
      "message": "An error occurred in a downstream service. Correlation ID: 0e7ee4bc-50d2-4e07-8f9e-25fdda6bc004. Message:  Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organization.",
      "integrationType": "bankfeeds"
    }
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 134,
  "_links": {
    "current": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions?page=1&pageSize=100"
    },
    "self": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions"
    },
    "next": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions?page=2&pageSize=100"
    }
  }
}
```

</TabItem>

</Tabs>

## Surveiller le statut de synchronisation

Sélectionnez l'élément de menu [Sync For Expenses](https://app.codat.io/products/sync-for-expenses) du [Portail Codat](https://app.codat.io/) pour surveiller le statut de vos synchronisations, ainsi que pour examiner les journaux détaillés et les messages d'erreur. Cela aide votre équipe de support à résoudre les problèmes courants liés aux paramètres ou aux actions du client.

<img
  src="/fr-ca/img/sync-for-commerce/0006-sync-health-ui.png"
  alt="Sync Health page view with numbered annotations on the key page elements: the dashboard, filters, status filter, and the main data table"
/>

- Consultez le **tableau de bord** (1) pour un résumé visuel des totaux de synchronisation.
- Utilisez la **barre de recherche** (2) pour affiner les enregistrements par ID de synchronisation ou ID d'entreprise.
- Affichez l'historique de synchronisation pour une période spécifique en indiquant une **plage de dates** (3).
- Examinez les statuts possibles des synchronisations et filtrez les enregistrements par leur **code de statut** (4).
- Utilisez le **menu** (6) pour trier et modifier le tableau de **l'historique de synchronisation** (5) au besoin.

#### 💡 Conseils et pièges

- Les synchronisations sont affichées comme ayant échoué si l'un des éléments inclus ne parvient pas à s'écrire. Par conséquent, si une synchronisation contient un mélange d'enregistrements ayant échoué et ayant réussi à s'écrire, elle sera toujours marquée comme ayant échoué.
- L'historique de synchronisation n'affiche pas la plage de dates pour les données lues depuis la plateforme qui sont utilisées dans la synchronisation.

---

## À lire ensuite

- Joindre des reçus à la transaction de dépense en utilisant le [téléversement de pièces jointes](/expenses/sync-process/uploading-receipts)
- Consultez notre [FAQ](/expenses/faq) pour en savoir plus sur Expenses
- Essayez Expenses dans notre [référence API](/sync-for-expenses-api#/) interactive
