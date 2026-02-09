---
title: "Écrire des transactions bancaires de Codat vers QuickBooks Online"
description: "Apprenez à écrire les transactions bancaires de vos utilisateurs PME via notre intégration QuickBooks Online Bank Feeds"
sidebar_label: "Écrire des transactions bancaires"
---

Lorsqu'un utilisateur PME a [connecté ses comptes bancaires](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-smb-user), vous êtes prêt à écrire des transactions bancaires d'un compte bancaire source vers QuickBooks Online (QBO). Vous pouvez écrire des transactions depuis n'importe quel compte ayant un statut `connected` lorsque vous [récupérez le statut et les informations du compte bancaire](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-setup#retrieve-bank-account-status-and-information).

Notez les exigences suivantes avant d'écrire des transactions bancaires vers QBO.

## Ordonnées par date de compensation

Pour être écrites avec succès, les transactions bancaires doivent être compensées (non en attente) et avoir une `clearedOnDate` du jour actuel ou d'un jour antérieur. Dans l'endpoint [Create bank transactions](/accounting-api#/operations/create-bank-transactions), la `clearedOnDate` est définie dans le champ `date`.

Les transactions bancaires doivent être ordonnées chronologiquement (de la plus ancienne à la plus récente) selon la `clearedOnDate`.

:::caution Noms des champs de date de compensation

La `clearedOnDate` est renvoyée par l'endpoint [List bank transactions for a bank account](/accounting-api#/operations/list-bank-account-transactions). Cependant, lors de l'écriture de transactions avec [Create bank transactions](/accounting-api#/operations/create-bank-transactions), vous devez fournir la valeur de la `clearedOnDate` dans le champ `date`.

:::

## Transactions historiques

Vous pouvez écrire des transactions historiques allant jusqu'à sept jours en fonction de la _date de début du flux_, tel que choisi par l'utilisateur PME dans l'interface utilisateur QBO.

Codat envoie les transactions bancaires à QBO pour un maximum des sept derniers jours.

:::caution Flux bancaires futurs non pris en charge

L'écriture de transactions bancaires futures (datées dans le futur) vers QBO n'est pas prise en charge.

:::

## Autres exigences

Notez les exigences suivantes pour l'écriture de transactions bancaires vers QBO.

- Vous ne pouvez écrire des transactions bancaires que depuis un seul compte bancaire source à la fois.
- Les transactions bancaires doivent être écrites dans l'ordre chronologique.
- Une transaction bancaire ne peut pas être plus ancienne que la transaction la plus récente disponible dans le compte bancaire cible.
- Jusqu'à 1000 transactions bancaires peuvent être écrites à la fois.

## À quelle fréquence écrire les transactions

QBO exige que les transactions bancaires soient envoyées depuis Codat dans l'ordre chronologique. Par conséquent, nous recommandons de publier sept jours de transactions historiques lors de la première opération d'écriture. Pour les opérations d'écriture suivantes, nous recommandons de publier les données de transaction quotidiennes, qui seront envoyées à QBO selon un calendrier quotidien.

## Écrire des transactions bancaires vers QuickBooks Online

Effectuez les requêtes suivantes vers l'API Codat. Toutes les requêtes d'écriture sont asynchrones.

1. Écrivez des transactions bancaires depuis un compte bancaire source connecté d'un utilisateur PME en utilisant l'endpoint [Create bank transactions](/accounting-api#/operations/create-bank-transactions).

   ```http
   POST https://api.codat.io/companies/COMPANY_ID/connections/CONNECTION_ID/push/bankAccounts/ACCOUNT_ID/bankTransactions
   ```

   ```json title="Exemple de corps de requête (tous les champs sont obligatoires)"
   {
     "accountId": "482342-acc-001",
     "transactions": [
       {
         "id": "7832323211-GIF",
         "amount": 450,
         "balance": 2000,
         "date": "2022-08-30T17:05:12.191Z", // clearedOnDate, l'heure est optionnelle
         "description": "events-hospitality"
       },
       {
         "id": "7832323211-SDC",
         "amount": 730,
         "balance": 2730,
         "date": "2022-08-31T11:06:49.191Z", // clearedOnDate, l'heure est optionnelle
         "description": "corporate-training"
       }
     ]
   }
   ```

   Le solde de la dernière transaction bancaire dans le tableau est utilisé pour mettre à jour le solde du compte bancaire spécifié.

2. Si les données sont valides, l'endpoint renvoie une opération d'écriture avec un `status` de `Pending` (202). Si l'écriture se termine avec succès, cela change en `Success`.

3. Répétez la requête pour le reste des comptes bancaires source de l'utilisateur PME.

## Référence des transactions

Le tableau suivant détaille comment chaque propriété du tableau `transactions` est traitée lors de l'écriture de transactions bancaires vers QBO. Pour plus de détails, consultez le type de données [Bank account transactions](/accounting-api#/schemas/BankTransactions).

| **Propriété dans le tableau `transactions`** | **Statut**                                    |
| -------------------------------------------- | --------------------------------------------- |
| id                                           | Requis                                        |
| date                                         | Requis                                        |
| description                                  | Requis                                        |
| counterparty                                 | Non pris en charge ; ignoré si écrit          |
| reference                                    | Non pris en charge ; ignoré si écrit          |
| reconciled                                   | Non pris en charge ; ignoré si écrit          |
| amount                                       | Requis                                        |
| balance                                      | Requis                                        |
| transactionType                              | Optionnel, soit `Credit`, `Debit`, ou `Unknown` |
| modifiedDate                                 | Rempli automatiquement lors de l'écriture    |
| sourceModifiedDate                           | Rempli automatiquement lors de l'écriture    |
