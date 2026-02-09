---
title: "Utiliser votre intégration Sage Bank Feeds"
sidebar_label: "Utiliser"
description: "Apprenez à écrire les transactions bancaires de vos utilisateurs PME vers Codat via notre intégration Sage Bank Feeds"
---

Lorsque vous avez configuré l'intégration Sage Bank Feeds et que votre client PME a connecté un compte bancaire source à un produit Sage, vous pouvez commencer à écrire des transactions bancaires vers un compte bancaire cible.

## Afficher les détails du compte bancaire

Pour afficher les détails des comptes bancaires source pour une connexion de données spécifiée, utilisez l'endpoint <a href="https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId__connectionInfo_bankFeedAccounts" target="_blank">GET /bankFeedAccounts</a>.

```http
GET /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
```

La réponse contient une liste de comptes bancaires avec un statut soit `pending` soit `connected`. Pour les comptes bancaires `connected`, la propriété `feedStartDate` est définie sur l'heure actuelle en UTC.

### Exemple de réponse

```json
[
  {
    "id": "acc-002",
    "accountName": "account-081",
    "accountType": "Credit",
    "accountNumber": "12345670",
    "sortCode": "123456",
    "currency": "GBP",
    "balance": 99.99,
    "modifiedDate": "2023-01-09T13:46:59.4019628Z",
    "status": "pending"
  },
  {
    "id": "acc-003",
    "accountName": "account-095",
    "accountType": "Credit",
    "accountNumber": "12345671",
    "sortCode": "123456",
    "currency": "GBP",
    "balance": 100.09,
    "modifiedDate": "2023-01-09T13:46:59.4019628Z",
    "status": "connected",
    "feedStartDate": "2023-01-09T14:56:43.773Z" // uniquement pour les comptes connectés
  }
]
```

## Écrire des transactions bancaires depuis un compte bancaire source

Vous pouvez écrire des [Transactions bancaires](/accounting-api#/schemas/BankTransactions) depuis les comptes bancaires source `connected` vers les comptes cibles dans les produits Sage pris en charge. L'intégration achemine ces transactions via l'API Sage Banking Service Provider.

Dans le package Sage de l'utilisateur, les nouvelles transactions bancaires pour le compte cible apparaîtront dans l'interface utilisateur **Incoming Bank Transactions**.

:::note Les flux bancaires doivent être écrits vers Codat

Les transactions ne sont pas automatiquement téléchargées vers Sage lorsque l'utilisateur connecte avec succès un compte bancaire.
:::

Effectuez les requêtes suivantes vers l'API Codat. Toutes les requêtes d'écriture sont asynchrones.

1. Écrivez des transactions bancaires vers un compte bancaire cible en utilisant l'endpoint <a href="/accounting-api#/operations/create-bank-transactions">Create bank transactions</a>. Notez que :
   - Vous ne pouvez écrire des transactions bancaires que vers un seul compte cible à la fois.
   - Les transactions bancaires doivent être écrites dans l'ordre chronologique.
   - Les transactions bancaires ne peuvent pas être plus anciennes que la transaction la plus récente disponible sur le compte bancaire de destination.
   - Les transactions bancaires doivent avoir une `date` définie sur le jour actuel ou antérieur.
   - Jusqu'à 1000 transactions bancaires peuvent être écrites à la fois.

   ```http
   POST https://api.codat.io/companies/COMPANY_ID/connections/CONNECTION_ID/push/bankAccounts/ACCOUNT_ID/bankTransactions
   ```

   Où `ACCOUNT_ID` est l'`id` d'un compte bancaire source connecté (renvoyé par
   `GET /connectionInfo/BankFeedAccounts`).

   Exemple de corps de requête (tous les champs sont obligatoires) :

   ```json
   {
     "accountId": "482342-acc-001",
     "transactions": [
       {
         "id": "7832323211-GIF",
         "amount": 450,
         "balance": 2000,
         "date": "2022-08-30T17:05:12.191Z",
         "description": "events-hospitality",
         "transactionType": "Debit"
       },
       {
         "id": "7832323211-SDC",
         "amount": 730,
         "balance": 2730,
         "date": "2022-08-31T11:06:49.191Z",
         "description": "corporate-training",
         "transactionType": "Debit"
       }
     ]
   }
   ```

   Le solde de la dernière transaction bancaire dans le tableau est utilisé pour mettre à jour le solde du compte bancaire spécifié.

2. Si les données sont valides, l'endpoint renvoie une opération d'écriture avec un `status` de `Pending` (202). Le statut change en `Success` si l'opération d'écriture se termine avec succès.

:::note

Le statut peut rester en `Pending` pendant un certain temps pendant que Sage traite les transactions bancaires.
:::

3. Répétez la requête pour le reste des comptes bancaires connectés du client PME.
