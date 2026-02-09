---
title: "Exemples de requêtes pour les données bancaires supplémentaires"
description: "Exemples de requêtes proxy vers les API Plaid et TrueLayer"
createdAt: "2021-12-03T10:18:50.094Z"
updatedAt: "2022-10-20T10:48:46.937Z"
---

Utilisez les exemples suivants pour vous aider à effectuer des requêtes vers les endpoints Plaid ou TrueLayer via le proxy.

## Exemple de requête vers Plaid

Toutes les requêtes vers l'API Plaid utilisent POST ; la méthode réelle est définie comme paramètre de chemin. Cet exemple montre une requête proxy vers l'endpoint `/item/get` dans l'API Plaid.

```
POST /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=item/get
```

- `companyId` : L'identifiant d'une entreprise pour laquelle vous êtes autorisé à accéder aux données bancaires via l'intégration Plaid.

- `connectionId` : Identifiant de connexion d'une connexion de données liée pour l'entreprise spécifiée.

En cas de succès, une liste d'[éléments Plaid](https://plaid.com/docs/quickstart/glossary/#item) associés à la connexion est retournée.

## Exemple de requête vers TrueLayer

Cet exemple montre une requête proxy vers l'endpoint `/direct-debits` dans l'API Data de TrueLayer.

1. Obtenez un identifiant de compte à partir de l'endpoint [Bank accounts](/accounting-api#/operations/list-bank-accounts) dans l'API Codat :

```
GET /companies/{companyId}/connections/{connectionId}/data/bankAccounts
```

- `companyId` : L'identifiant d'une entreprise pour laquelle vous êtes autorisé à accéder aux données bancaires via l'intégration TrueLayer.

- `connectionId` : Identifiant de connexion d'une connexion de données liée pour l'entreprise spécifiée.

2. Effectuez une requête GET vers l'endpoint `/direct_debits` dans l'API TrueLayer :

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=accounts/{account_id}/direct_debits
```

- `account_id` : L'identifiant du compte dans TrueLayer pour récupérer les prélèvements automatiques.

En cas de succès, une liste de prélèvements automatiques associés au compte est retournée.

:::info Erreurs

Les erreurs retournées via le proxy depuis l'API Plaid ou TrueLayer contiennent toujours un paramètre `canBeRetried: "Unknown"` dans la réponse. Ce paramètre peut être ignoré.
:::
