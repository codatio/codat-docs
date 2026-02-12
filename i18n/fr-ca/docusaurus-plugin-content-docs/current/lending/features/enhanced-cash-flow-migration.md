---
title: "Guide de migration pour le rapport Enhanced Cashflow"
description: "Découvrez comment vous pouvez faire la transition de votre intégration Codat existante avec les endpoints Enhanced Cashflow vers nos nouveaux endpoints de rapport Categorized Bank Statement"
displayed_sidebar: "lending"
image: "/fr-ca/img/banners/social/lending.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nous avons récemment lancé le rapport **Categorized Bank Statement**, qui remplace le rapport hérité **Enhanced Cashflow**. Le nouveau rapport inclut une orchestration intégrée pour récupérer les données requises des intégrations tierces et fournit des notifications webhook lorsque le rapport est prêt.

Pour assurer une transition en douceur, nous recommandons de migrer vers les nouveaux endpoints avant la [dépréciation à venir](https://docs.codat.io/updates/250703-deprecation-enh-cashflow-endpoints) le **10 juillet 2026**.

Le rapport Categorized Bank Statement est généré par un processus asynchrone. Cela signifie que vous devez explicitement demander le rapport avant de pouvoir récupérer des données, et attendre qu'il soit terminé.

Ce rapport n'est pas généré automatiquement selon un calendrier prédéfini. Si vous avez besoin que les rapports soient déclenchés automatiquement lors de la liaison et/ou selon un calendrier de synchronisation, veuillez contacter votre gestionnaire de compte.

:::info Dans ce guide :

- Étapes recommandées pour migrer votre intégration vers le nouveau rapport Categorized Bank Statement
- Mappage des endpoints hérités Enhanced Cashflow vers les nouveaux
- Mises à jour du flux de travail requises pour le nouveau rapport
  :::

## Ce que vous devez faire

Pour vous préparer à la dépréciation, vous devrez mettre à jour votre application pour utiliser les endpoints Categorized Bank Statement à la place de ceux d'Enhanced Cashflow.

Pour passer au rapport Categorized Bank Statement, nous recommandons une stratégie « expand/contract ».
Avant de commencer votre migration, activez le nouveau rapport dans le [Portal](https://app.codat.io/developers/api-deprecations). Apprenez comment faire [ici](https://docs.codat.io/configure/portal/developers).

Une fois activé, vous pouvez exécuter les endpoints hérités et nouveaux en parallèle, permettant une transition progressive avant la date limite de dépréciation.

Les étapes ci-dessous décrivent comment chaque partie de votre flux de travail existant correspond à la nouvelle implémentation, avec des détails sur ce qui a changé et comment s'adapter.

### 1. Générer un rapport

Pour générer le rapport de manière asynchrone, mettez à jour votre logique d'application pour appeler le nouvel endpoint à la place de l'ancien. Cela déclenche le processus d'orchestration pour récupérer toutes les données requises pour le rapport.

#### Endpoint hérité

`POST /data/companies/{companyId}/assess/excel?reportType=enhancedCashFlow`

#### Nouvel endpoint

`POST /companies/{companyId}/reports/categorizedBankStatement`

#### Changements de réponse

**Le format de réponse a changé**. Le nouvel endpoint Categorized Bank Statement renvoie un objet structuré simplifié qui inclut l'id du rapport, le statut et les horodatages pertinents.

<details>
  <summary><b>Comparer les exemples de réponses</b></summary>
<Tabs>
<TabItem value="legacy" label="Schéma hérité">

```json
{
  "lastGenerated": "2023-01-25T22:36:05.125Z",
  "inProgress": true,
  "queued": "2023-01-25T22:36:05.125Z",
  "success": true,
  "errorMessage": "string",
  "lastInvocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "reportType": "string",
  "fileSize": 0
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "6e9bae88-72c9-45ae-abe8-41fbf2871458",
  "status": "InProgress",
  "type": "categorizedBankStatement",
  "requestedDate": "2024-09-27T04:43:41Z",
  "updatedDate": "2024-10-01T14:41:46Z"
}
```

</TabItem>

</Tabs>

| **Propriété ancien schéma** | **Équivalent nouveau schéma**                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `lastGenerated`         | 🔁 Utilisez plutôt l'endpoint `GET /companies/{companyId}/reports` pour récupérer les rapports précédemment générés   |
| `inProgress`            | ✅ Remplacé par `status` – indique l'état actuel du rapport (`InProgress`, `Complete`, `Error`) |
| `queued`                | ✅ Remplacé par `requestedDate` – horodatage du moment où le rapport a été demandé                            |
| `success`               | ✅ Utilisez `status` à la place                                                                                 |
| `errorMessage`          | ✅ Reste `errorMessage`                                                                               |
| `lastInvocationId`      | ❌ Non disponible                                                                                        |
| `reportType`            | ✅ Renommé en `type`                                                                                    |
| `fileSize`              | ❌ Non disponible                                                                                        |

</details>

Consultez la référence API [Generate report](https://docs.codat.io/lending-api#/operations/generate-report) pour plus de détails.

### 2. Vérifier le statut du rapport

Pour déterminer quand le rapport est terminé, mettez à jour votre implémentation pour utiliser le nouvel endpoint de statut.

#### Endpoint hérité

`GET /data/companies/{companyId}/assess/excel?reportType=enhancedCashFlow`

#### Nouvel endpoint

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/status`

#### Changements de réponse

L'**objet de réponse a changé**. La réponse a été mise à jour pour renvoyer les métadonnées complètes du rapport, y compris l'id du rapport, le statut, les horodatages et le type de rapport.

<details>
  <summary><b>Comparer les exemples de réponses</b></summary>
<Tabs>
<TabItem value="legacy" label="Schéma hérité">

```json
{
  "lastGenerated": "2023-01-25T22:36:05.125Z",
  "inProgress": true,
  "queued": "2023-01-25T22:36:05.125Z",
  "success": true,
  "errorMessage": "string",
  "lastInvocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "reportType": "string",
  "fileSize": 0
}
```

</TabItem>

<TabItem value="new" label="Nouveau schéma">

```json
{
  "id": "6e9bae88-72c9-45ae-abe8-41fbf2871458",
  "status": "Complete",
  "type": "categorizedBankStatement",
  "requestedDate": "2024-09-27T04:43:41Z",
  "updatedDate": "2024-09-27T04:48:31Z"
}
```

</TabItem>

</Tabs>

| **Propriété ancien schéma** | **Équivalent nouveau schéma**                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `lastGenerated`         | 🔁 Utilisez plutôt l'endpoint `GET /companies/{companyId}/reports` pour récupérer les rapports précédemment générés   |
| `inProgress`            | ✅ Remplacé par `status` – indique l'état actuel du rapport (`InProgress`, `Complete`, `Error`) |
| `queued`                | ✅ Remplacé par `requestedDate` – horodatage du moment où le rapport a été demandé                            |
| `success`               | ✅ Utilisez `status` à la place                                                                                 |
| `errorMessage`          | ✅ Reste `errorMessage`                                                                               |
| `lastInvocationId`      | ❌ Non disponible                                                                                        |
| `reportType`            | ✅ Renommé en `type`                                                                                    |
| `fileSize`              | ❌ Non disponible                                                                                        |

</details>

Consultez la référence API [Get report status](https://docs.codat.io/lending-api#/operations/get-report-status) pour plus de détails.

### 3. Télécharger le rapport Excel

Pour télécharger le rapport généré, mettez à jour votre application pour utiliser le nouvel endpoint.

#### Endpoint hérité

`GET /data/companies/{companyId}/assess/excel/download?reportType=enhancedCashFlow`

#### Nouvel endpoint

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/excel`

#### Changements de réponse

Il n'y a **aucun changement** dans la réponse. L'endpoint renverra un fichier Excel contenant les données du rapport comme auparavant.

Consultez la référence API [Download report](https://docs.codat.io/lending-api#/operations/download-categorized-bank-statement-excel) pour plus de détails.

### 4. S'assurer que la génération du rapport est terminée avant d'interroger les données

Les endpoints Categorized Bank Statement pour les comptes et les transactions nécessitent que le rapport soit entièrement généré avant que les données puissent être récupérées.

:::warning Mise à jour importante du flux de travail

Contrairement aux endpoints hérités, les nouveaux endpoints nécessitent qu'un rapport existe déjà et que son statut soit `Complete` avant de pouvoir demander des données sur les comptes ou les transactions.

**Action requise** - Mettez à jour votre flux de travail pour :

1. Appeler `POST /companies/{companyId}/reports/categorizedBankStatement`

2. Confirmer que le statut du rapport est `Complete` avant d'appeler les endpoints de comptes ou de transactions Categorized Bank Statement.
   :::

Vous pouvez déterminer si le rapport a terminé de se générer en utilisant l'une des méthodes suivantes :

1. **Préféré : Souscrire aux événements webhook**

   [`reports.categorizedBankStatement.generate.successful`](/lending-api#/webhooks/reports.categorizedBankStatement.generate.successful/post)

   Cet événement est déclenché lorsque le rapport est généré avec succès.

   Pour plus de détails, consultez [Webhooks Overview](/using-the-api/webhooks/create-consumer)

2. **Alternativement : Interroger l'endpoint de statut**

   `GET /companies/{companyId}/reports/categorizedBankStatement/latest/status`

### 5. Récupérer les données des comptes et des transactions

Au lieu d'un seul endpoint, les données des comptes et des transactions sont maintenant disponibles via deux endpoints dédiés.
Avant de les appeler, assurez-vous qu'un rapport a été généré et est dans l'état `Complete`.
Il y a quelques implications pour votre intégration.

- Vous devrez mettre à jour votre logique d'analyse des données pour extraire les transactions du tableau results au lieu de naviguer dans des structures imbriquées.

- Si vous dépendiez précédemment d'informations de compte intégrées (par exemple, les soldes ou les codes bancaires), vous devrez maintenant utiliser l'endpoint des comptes `GET /companies/{companyId}/reports/categorizedBankStatement/latest/accounts`

- La nouvelle réponse suit les conventions REST standard, ce qui simplifie la pagination et améliore les performances lors du travail avec de grands ensembles de données.

#### Endpoint hérité

`GET /companies/{companyId}/reports/enhancedCashFlow/transactions`

#### Nouveaux endpoints

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/accounts`

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/transactions`

#### Changements de réponse

| Changement              | Enhanced Cashflow hérité                                      | Categorized Bank Statement                                     |
| ------------------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| **Structure de niveau supérieur** | Objet imbriqué avec `reportInfo`, `dataSources`, `reportItems` | Objet plat avec tableau `results`                               |
| **Transactions**    | Imbriquées sous `reportItems.transactions`                       | Aplaties sous le tableau `results`                                |
| **Comptes**        | Intégrés dans `dataSources.accounts` avec les détails complets du compte  | Référencés via `accountRef` ; détails complets récupérés séparément |
| **Métadonnées**        | Incluses dans `reportInfo`                                      | Récupérées séparément via l'endpoint de statut                       |

<details>
  <summary><b>Comparer les exemples de réponses</b></summary>
<Tabs>
<TabItem value="legacy" label="Schéma hérité">

```json
{
  "reportInfo": {
    "pageNumber": 1,
    "pageSize": 100,
    "totalResults": 2401,
    "reportName": "Cash Flow transactions report",
    "companyName": "Example Company",
    "generatedDate": "2023-01-25T22:36:05.125Z"
  },
  "dataSources": [
    {
      "accounts": [
        {
          "id": "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
          "accountName": "Business Current Account",
          "accountType": "Debit",
          "currency": "USD",
          "currentBalance": 1000
          ...
        }
      ]
    }
  ],
  "reportItems": [
    {
      "transactions": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "accountRef": {
            "id": "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
            "name": "Business Current Account"
          },
          "date": "2023-01-25",
          "description": "Payment to supplier",
          "amount": 100,
          "currency": "USD",
          "platformName": "Plaid"
          ...
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="newac" label="Nouveau schéma - Comptes">

```json
{
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 2,
  "_links": {
    "self": {
      "href": "/companies/{companyId}/reports/categorizedBankStatement/latest/accounts"
    }
    ...
  },
  "results": [
    {
      "id": "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
      "accountName": "Business Current Account",
      "accountType": "Debit",
      "currency": "USD",
      "currentBalance": 1000
      ...
    }
    ...
  ]
}
```

</TabItem>

<TabItem value="newtr" label="Nouveau schéma - Transactions">

```json
{
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 1,
  "_links": {
    "self": {
      "href": "/companies/{companyId}/reports/categorizedBankStatement/latest/transactions"
    }
    ...
  },
  "results": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "accountRef": {
        "id": "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
        "name": "Business Current Account"
      },
      "date": "2023-01-25",
      "description": "Payment to supplier",
      "amount": 100,
      "currency": "USD",
      "platformName": "Plaid"
      ...
    }
    ...
  ]
}
```

</TabItem>

</Tabs>

| **Propriété ancien schéma**                     | **Nouveau schéma - Comptes**                              | **Nouveau schéma - Transactions**                          |
| ------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| `reportInfo.pageNumber`                     | ✅ `pageNumber`                                        | ✅ `pageNumber`                                        |
| `reportInfo.pageSize`                       | ✅ `pageSize`                                          | ✅ `pageSize`                                          |
| `reportInfo.totalResults`                   | ✅ `totalResults`                                      | ✅ `totalResults`                                      |
| `reportInfo.generatedDate`                  | ❌ Non disponible (voir statut du rapport pour `updatedDate`) | ❌ Non disponible (voir statut du rapport pour `updatedDate`) |
| `dataSources.accounts[].id`                 | ✅ `results[].id`                                      | 🔁 Référencé via `accountRef.id`                      |
| `dataSources.accounts[].accountName`        | ✅ `accountName`                                       | 🔁 Référencé via `accountRef.name`                    |
| `dataSources.accounts[].accountType`        | ✅ `accountType`                                       | ❌ Non disponible                                       |
| `dataSources.accounts[].currency`           | ✅ `currency`                                          | ✅ `currency`                                          |
| `dataSources.accounts[].currentBalance`     | ✅ `currentBalance`                                    | ❌ Non disponible                                       |
| `reportItems[].transactions[].id`           | ❌ Non disponible                                       | ✅ `results[].id`                                      |
| `reportItems[].transactions[].accountRef`   | ❌ Non disponible                                       | ✅ `accountRef`                                        |
| `reportItems[].transactions[].date`         | ❌ Non disponible                                       | ✅ `date`                                              |
| `reportItems[].transactions[].description`  | ❌ Non disponible                                       | ✅ `description`                                       |
| `reportItems[].transactions[].amount`       | ❌ Non disponible                                       | ✅ `amount`                                            |
| `reportItems[].transactions[].currency`     | ❌ Non disponible                                       | ✅ `currency`                                          |
| `reportItems[].transactions[].platformName` | ❌ Non disponible                                       | ✅ `platformName`                                      |

</details>

Consultez les documentations [List Accounts Endpoint](https://docs.codat.io/lending-api#/operations/list-categorized-bank-statement-accounts) et [List Transactions Endpoint](https://docs.codat.io/lending-api#/operations/get-categorized-bank-statement-transactions) pour plus de détails.
