---
title: "Types de règles"
description: "Utilisez les webhooks pour créer des applications réactives et résilientes sur les données Codat"
---

:::caution Nouveau service webhook disponible

Cette page décrit la fonctionnalité de notre offre webhook héritée. [En savoir plus](/using-the-api/webhooks/overview) sur notre nouveau service webhook et voir comment vous pouvez [migrer](/using-the-api/webhooks/migration-guide) pour l'utiliser à la place.

:::

Les règles suivantes peuvent être configurées dans le portail Codat pour déclencher des événements webhook. Elles peuvent être utilisées pour vous aider à répondre aux changements dans vos entreprises et leurs données.

| Règle                                                                                                                                         | Type                                | Déclencheur                                                                                                                                                                                                              | Données supplémentaires                                     |
| :-------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| [État de connexion de données d'entreprise modifié](/using-the-api/webhooks/legacy/core-rules-types#company-data-connection-status-changed)  | `DataConnectionStatusChanged`       | L'état d'une connexion de données change.                                                                                                                                                                                | `dataConnectionId`, `platformKey`, `newStatus`, `oldStatus` |
| [Nouvelle entreprise synchronisée](/using-the-api/webhooks/legacy/core-rules-types#new-company-synchronized)                                 | `New company synchronized`          | Tous les ensembles de données créés lors de la synchronisation initiale d'une entreprise sont terminés.                                                                                                                 |                                                             |
| [Synchronisation de données terminée](/using-the-api/webhooks/legacy/core-rules-types#data-sync-completed)                                   | `Data sync completed`               | La synchronisation des données est terminée avec succès au complet pour un type de données spécifique. <br/> Une notification est générée pour chaque `dataType` lorsque la synchronisation se termine.                 | `dataType`, `datasetId`                                     |
| [Données de l'ensemble de données modifiées](/using-the-api/webhooks/legacy/core-rules-types#dataset-data-changed)                           | `Dataset data changed`              | Une synchronisation d'ensemble de données est terminée et a mis à jour le cache de données de Codat par la création de nouveaux enregistrements ou une modification des enregistrements existants. <br/> Une notification est générée pour chaque `dataType` lorsque la synchronisation se termine. | `dataType`, `datasetId`                                     |
| [L'état de l'ensemble de données est passé à un état d'erreur](/using-the-api/webhooks/legacy/core-rules-types#dataset-status-has-changed-to-an-error-state) | `Data Sync Status Changed To Error` | La synchronisation d'un ensemble de données échoue.                                                                                                                                                                      | `dataType`, `datasetStatus`, `datasetId`                    |
| [L'état de l'opération push a changé](/using-the-api/webhooks/legacy/core-rules-types#push-operation-status-has-changed)                     | `Push Operation Status Changed()`   | L'état d'une opération d'écriture change.                                                                                                                                                                                | `dataType`, `status`, `pushOperationKey`                    |
| [L'opération push a expiré](/using-the-api/webhooks/legacy/core-rules-types#push-operation-has-timed-out)                                    | `Push Operation Timed Out`          | Une opération d'écriture expire.                                                                                                                                                                                         | `dataType`, `pushOperationGuid`                             |
| [Catégories de comptes mises à jour](/using-the-api/webhooks/legacy/core-rules-types#account-categories-updated)                             | `Account Categories Updated`        | Chaque fois que Codat met à jour les champs `suggested` ou qu'un utilisateur met à jour les champs `confirmed`.                                                                                                         | `modifiedDate`                                              |
| [Connexion de synchronisation supprimée](/using-the-api/webhooks/legacy/core-rules-types#sync-connection-deleted)                            | `Sync Connection Deleted`           | Une connexion Sync for Commerce est supprimée. <br/> **Remarque:** Sync for Commerce uniquement.                                                                                                                        |                                                             |
| [Synchronisation des dépenses terminée](/using-the-api/webhooks/legacy/core-rules-types#expenses-sync-completed)                             | `Sync Completed`                    | Une synchronisation de dépenses est terminée. <br/> **Remarque:** Dépenses uniquement.                                                                                                                                  | `syncId`, `syncType`                                        |
| [Échec de la synchronisation des dépenses](/using-the-api/webhooks/legacy/core-rules-types#expenses-sync-failed)                             | `Sync Failed`                       | Une défaillance s'est produite lors d'une synchronisation de dépenses. <br/> **Remarque:** Dépenses uniquement.                                                                                                         | `syncId`, `syncType`, `FailureStage`                        |
| [Limite de taux client dépassée](/using-the-api/webhooks/legacy/core-rules-types#client-rate-limit-reached)                                  | `Rate Limit Reached`                | Le nombre de requêtes à l'API depuis un client a dépassé le quota actuel.                                                                                                                                               | `dailyQuota`, `expiresUtc`                                  |
| [Réinitialisation de la limite de taux client](/using-the-api/webhooks/legacy/core-rules-types#client-rate-limit-reset)                      | `Rate Limit Reset`                  | Le quota de limite de taux client a été réinitialisé et davantage de requêtes sont disponibles.                                                                                                                         | `quotaRemaining`, `resetReason`, `dailyQuota`               |

---

## Règles et charges utiles

:::caution Suppression des données non référentielles du corps du webhook

Conformément aux pratiques de sécurité standard de l'industrie, nous avons supprimé les informations personnellement identifiables, telles que `companyName`, du corps de nos webhooks. Cela ne laisse que des informations référentielles, telles que `companyId`, qui peuvent être consultées à l'aide de notre API.

:::

### État de connexion de données d'entreprise modifié

**Type**: `DataConnectionStatusChanged`
**Déclencheur:** L'état d'une connexion de données change.
**Données supplémentaires:** `dataConnectionId`, `platformKey`, `newStatus`, `oldStatus`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "DataConnectionStatusChanged",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Data connection for SandBox status changed from PendingAuth to Linked",
  "Data": {
    "dataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "newStatus": "Linked",
    "oldStatus": "PendingAuth",
    "platformKey": "gbol"
  }
}
```

### Nouvelle entreprise synchronisée

**Type**: `New company synchronized`
**Déclencheur:** Les synchronisations initiales sont terminées pour tous les types de données en file d'attente pour une entreprise nouvellement connectée, et au moins une de ces synchronisations est réussie.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "New company synchronized",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Company 8a210b68-6988-11ed-a1eb-0242ac120002 synced for the first time",
  "Data": {
    "companyName": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "sourceType": "Accounting"
  }
}
```

### Synchronisation de données terminée

**Type**: `Data sync completed`
**Déclencheur:** La synchronisation des données est terminée avec succès au complet pour un type de données spécifique.
La notification est envoyée pour chaque `dataType` séparément lorsque la synchronisation individuelle du type de données est terminée avec succès.
**Données supplémentaires:** `dataType`, `datasetId`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Data sync completed",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Data sync of type creditNotes completed for company 7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "Data": {
    "dataType": "creditNotes",
    "datasetId": "1541a5ee-0d84-4b6e-a7f7-c07c1f216333"
  }
}
```

### Données de l'ensemble de données modifiées

**Type**: `Dataset data changed`
**Déclencheur:** Une synchronisation d'ensemble de données est terminée, ce qui a entraîné des mises à jour dans le cache de données de Codat par la création de nouveaux enregistrements ou une modification des enregistrements existants.
La notification est envoyée pour chaque `dataType` séparément lorsque la synchronisation individuelle du type de données est terminée avec succès.
**Données supplémentaires:** `dataType`, `datasetId`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Dataset data changed",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Data has changed for dataset type invoices, company 8a210b68-6988-11ed-a1eb-0242ac120002",
  "Data": {
    "dataType": "invoices",
    "datasetId": "6586f21b-ad4d-4d06-a309-712af47184a2"
  }
}
```

### L'état de l'ensemble de données est passé à un état d'erreur

**Type**: `Data Sync Status Changed To Error`
**Déclencheur:** La synchronisation d'un ensemble de données échoue.
**Données supplémentaires:** `dataType`, `datasetStatus`, `datasetId`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Data Sync Status Changed To Error",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "ERROR: syncing payments triggered a ProcessingError notification at 2020-04-21T12:12:57.4250446Z.",
  "Data": {
    "dataType": "invoices",
    "datasetStatus": "ProcessingError",
    "datasetId": "6586f21b-ad4d-4d06-a309-712af47184a2"
  }
}
```

### L'état de l'opération push a changé

**Type**: `Push Operation Status Changed()`
**Déclencheur:** L'état d'une opération d'écriture change.
**Données supplémentaires:** `dataType`, `status`, `pushOperationKey`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Push Operation Status Changed()",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "invoices triggered notification for PushOperationStatusChanged at 2019-05-22T18:19:42.742Z",
  "Data": {
    "dataType": "invoices",
    "status": "Success",
    "pushOperationKey": "c2f8847d-3047-4619-a157-6d947d8e4a73"
  }
}
```

### L'opération push a expiré

**Type**: `Push Operation Timed Out`
**Déclencheur:** Une opération d'écriture expire.
**Données supplémentaires:** `dataType`, `pushOperationGuid`.

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

### Catégories de comptes mises à jour

**Type**: `Account Categories Updated`
**Déclencheur:** Chaque fois que Codat met à jour les champs `suggested` ou qu'un utilisateur met à jour les champs `confirmed`.
**Données supplémentaires:** `modifiedDate`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Account Categories Updated",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Account categories updated for company f1c35bdc-1546-41b9-baf4-3f31135af968.",
  "Data": {
    "modifiedDate": "2019-08-24T14:15:22Z"
  }
}
```

### Connexion de synchronisation supprimée

**Type**: `Sync Connection Deleted`
**Déclencheur:** Une connexion Sync for Commerce est supprimée.
**Remarque:** Cette règle est spécifique à Sync for Commerce et ne peut pas être utilisée pour d'autres solutions.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Sync Connection Deleted",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Sync connection for company 8a210b68-6988-11ed-a1eb-0242ac120002 deleted"
}
```

### Synchronisation des dépenses terminée

**Type**: `Sync Completed`
**Déclencheur:** Une synchronisation de dépenses est terminée.
**Données supplémentaires:** `syncId`, `syncType`.
**Remarque:** Cette règle est spécifique aux dépenses et ne peut pas être utilisée pour d'autres solutions.

```json
{
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "AlertId": "33a4f8e9-09ae-4334-9b00-7bbe83024672",
  "RuleId": "5c27631d-3b63-4b50-8228-ee502fd113eb",
  "RuleType": "Sync Completed",
  "Message": "Sync 321363b4-efa9-4fbc-b71c-0b58d62f3248 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense completed successfully.",
  "Data": {
    "syncId": "321363b4-efa9-4fbc-b71c-0b58d62f3248",
    "syncType": "Expense"
  }
}
```

### Échec de la synchronisation des dépenses

**Type**: `Sync Failed`
**Déclencheur:** Une défaillance s'est produite lors d'une synchronisation de dépenses.
**Données supplémentaires:** `syncId`, `syncType`, `FailureStage`.
**Remarque:** Cette règle est spécifique aux dépenses et ne peut pas être utilisée pour d'autres solutions.

```json
{
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "RuleId": "289c80dc-2aee-4b71-afff-9acd8d051080",
  "RuleType": "Sync Failed",
  "AlertId": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "Message": "Sync 3bead2a1-1b3d-4d90-8077-cddc5ca68b01 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense has failed at step Pushing.",
  "Data": {
    "syncId": "3bead2a1-1b3d-4d90-8077-cddc5ca68b01",
    "syncType": "Expense",
    "FailureStage": "Pushing"
  }
}
```

### Limite de taux client dépassée

**Type**: `Rate Limit Reached`
**Déclencheur:** Le nombre de requêtes à l'API depuis ce client a dépassé le quota actuel. Les limites de taux s'appliquent à un client dans son ensemble, donc cette règle ne peut pas être filtrée par entreprise et n'inclut pas de `companyId`.
**Données supplémentaires:** `dailyQuota`, `expiresUtc`

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Rate Limit Reached",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "The current daily rate limit quota of 1000 requests for bae71d36-ff47-420a-b4a6-f8c9ddf41140 has been reached.",
  "Data": {
    "DailyQuota": 1000,
    "ExpiresUtc": "2023-05-03T00:00:00Z"
  }
}
```

### Réinitialisation de la limite de taux client

**Type**: `Rate Limit Reset`
**Déclencheur:** Le quota de limite de taux a été réinitialisé et davantage de requêtes sont disponibles. Les limites de taux s'appliquent à un client dans son ensemble, donc cette règle ne peut pas être filtrée par entreprise et n'inclut pas de `companyId`.
**Données supplémentaires:** `quotaRemaining`, `resetReason`, `dailyQuota`

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Rate Limit Reset",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "The current daily rate limit quota for client 30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e has been reset to 1000 requests.",
  "Data": {
    "QuotaRemaining": 1000,
    "ResetReason": "The quota was reset because it is a new day.",
    "DailyQuota": 1000,
    "ExpiresUtc": "2023-05-03T00:00:00Z"
  }
}
```
