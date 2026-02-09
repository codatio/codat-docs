---
title: "Écrire des transactions bancaires vers Xero"
sidebar_label: Écrire des transactions bancaires
description: "Apprenez à écrire les transactions bancaires de vos utilisateurs PME via notre intégration Xero Bank Feeds"
---

Lorsqu'un utilisateur PME a configuré une connexion de flux bancaire, vous pouvez écrire des transactions bancaires pour les comptes bancaires source vers Xero. Le compte source doit avoir le statut `connected`, où l'utilisateur PME a complété l'étape de mappage et de connexion du compte.

:::caution Téléchargement automatique non pris en charge
Les transactions ne sont pas automatiquement téléchargées vers Xero lorsque l'utilisateur connecte avec succès un compte bancaire. Elles doivent être écrites comme décrit plus loin dans cet article.
:::

Cet article explique comment :

- Afficher les détails des comptes bancaires source, y compris leurs statuts de connexion.
- Écrire des transactions bancaires vers un compte bancaire cible dans Xero.

## Prérequis

- Vous avez [configuré l'intégration Xero Bank Feeds](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-setup).

## Afficher les détails du compte bancaire

Appelez l'endpoint [`GET connectionInfo/bankFeedAccounts`](/bank-feeds-api#/operations/get-bank-feeds) pour afficher les détails des comptes bancaires source pour une entreprise et une connexion de données spécifiées.

```http title="Lister les comptes bancaires de flux bancaire"
GET /companies/{connectionId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
```

La réponse liste tous les comptes bancaires source et leurs statuts — soit `pending`, `connected`, ou `disconnected`. La propriété `feedStartDate` n'est renvoyée que pour les comptes bancaires `connected`.

```json title="Exemple de réponse - Lister les comptes bancaires de flux bancaire (200)"
[
  {
    "id": "acc-002", // l'ID du compte bancaire source
    "accountName": "account-081",
    "accountType": "Credit",
    "accountNumber": "1234",
    "sortCode": "123456",
    "currency": "GBP",
    "balance": 99.99,
    "modifiedDate": "2023-01-09T13:46:59.4019628Z",
    "status": "pending" // statut de connexion du compte bancaire
  },
  {
    "id": "acc-003",
    "accountName": "account-095",
    "accountType": "Debit",
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

## Exigences pour l'écriture de transactions bancaires vers Xero

Lors de l'écriture de transactions bancaires vers Xero :

- Vous ne pouvez écrire des transactions bancaires que vers un seul compte cible à la fois.
- Au sein d'une seule requête, le tableau de transactions _doit_ être dans l'ordre chronologique.
- Les transactions doivent avoir une `date` définie sur le jour actuel ou antérieur, mais soyez conscient de la limitation décrite dans « Écriture de transactions historiques », ci-dessous.
- Un maximum de 1000 transactions peut être écrit à la fois.

:::note Écriture de transactions historiques
La `feedStartDate` sur le compte bancaire source est déterminée par la **Feed start date** sélectionnée par l'utilisateur PME dans l'interface utilisateur de mappage de compte, mais elle n'est pas appliquée et doit être utilisée comme guide.

Vous pouvez écrire des transactions bancaires vers Xero datées jusqu'à un an avant la date actuelle. Les opérations d'écriture contenant des transactions bancaires datées de plus d'un an échoueront.
:::

## Écrire des transactions bancaires vers Xero

Pour écrire des transactions bancaires pour un compte bancaire source `connected`, effectuez les requêtes suivantes vers l'API Codat. Toutes les requêtes d'écriture sont asynchrones. Les transactions de flux bancaires sont envoyées à Xero immédiatement, pas selon un calendrier.

1. Publiez les transactions bancaires en utilisant l'endpoint [`POST /push/bankAccounts/{accountId}/bankTransactions`](/bank-feeds-api#/operations/create-bank-transactions) :

   ```http title="Créer des transactions bancaires"
   POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions
   ```

   Pour l'`accountId`, fournissez l'ID d'un compte bancaire source `connected` (renvoyé par la requête `GET /connectionInfo/BankFeedAccounts`).

   ```json title="Exemple de corps de requête (tous les champs sont requis)"
   {
     "accountId": "482342-acc-001", // ID du compte bancaire source
     "transactions": [
       {
         "id": "7832323211-GIF",
         "amount": -450,
         "balance": 2000,
         "date": "2022-08-30T17:05:12.191Z", // max. 1 an
         "description": "events-hospitality",
         "transactionType": "Debit"
       },
       {
         "id": "7832323211-SDC",
         "amount": -730,
         "balance": 2730,
         "date": "2022-08-31T11:06:49.191Z",
         "description": "corporate-training",
         "transactionType": "Debit"
       }
     ]
   }
   ```

   Le solde de la dernière transaction bancaire dans le tableau est utilisé pour mettre à jour le solde du compte bancaire spécifié.

   :::note Transactions positives et négatives
   Les transactions de crédit sont positives et les transactions de débit sont négatives, il est donc important que le signe du `amount` de la transaction soit cohérent avec le `transactionType`. Un avertissement est renvoyé par Codat si, par exemple, une transaction de 100 $ est envoyée à Xero en tant que `Debit`. Soyez conscient que Xero n'inverse pas une transaction par carte de crédit qui a été envoyée avec un montant négatif, et vice versa pour une transaction par carte de débit.
   :::

2. Si les données sont valides, l'endpoint renvoie une opération d'écriture avec un `status` de `Pending` (202). Le statut change en `Success` si l'opération d'écriture se termine avec succès.

   :::info Statut en attente
   Le statut de l'opération d'écriture peut rester en `Pending` pendant un certain temps pendant que Xero traite les transactions bancaires.
   :::

3. Répétez la requête `POST /push/bankAccounts/{accountId}/bankTransactions` pour le reste des comptes bancaires source de l'utilisateur.

Dans le package Xero de l'utilisateur PME, les nouvelles transactions bancaires pour le compte cible apparaîtront dans l'interface utilisateur **Incoming Bank Transactions**.
