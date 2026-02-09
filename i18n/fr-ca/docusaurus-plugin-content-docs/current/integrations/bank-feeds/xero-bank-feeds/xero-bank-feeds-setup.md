---
title: "Configurer l'intégration Xero Bank Feeds"
sidebar_label: Configuration
description: "Configurez notre intégration avec Xero Bank Feeds"
---

Avant de pouvoir écrire des flux bancaires vers Xero, vous devez configurer l'[intégration comptable Xero](/integrations/accounting/xero/accounting-xero) dans le portail Codat.

Cet article explique comment :

- Créer une entreprise et une connexion de données vers Xero.
- Fournir à Codat les comptes bancaires source que vous souhaitez rendre disponibles pour que vos utilisateurs PME puissent s'y connecter.
- Rediriger l'utilisateur vers l'interface utilisateur de mappage de compte fournie par Codat, où ils peuvent connecter leurs comptes bancaires source aux comptes bancaires cibles dans Xero.

## Prérequis

Avant de configurer l'intégration, assurez-vous que :

- Vous avez [rejoint le programme Xero App Partner](/integrations/accounting/xero/xero-app-partner-program).
- Vous avez [configuré l'intégration Xero](/integrations/accounting/xero/accounting-xero-setup#create-a-xero-app-and-configure-the-redirect-uri). Les principales tâches sont les suivantes :
  - Dans le portail développeur Xero, [créez et configurez une application Xero](/integrations/accounting/xero/accounting-xero-setup#create-a-xero-app-and-configure-the-redirect-uri).
  - [Récupérez les clés sécurisées de votre application](/integrations/accounting/xero/accounting-xero-setup#retrieve-your-apps-secure-keys) puis ajoutez-les à l'intégration.
    La fonctionnalité de flux bancaires fait partie de notre intégration comptable Xero existante et utilise le même URI de redirection.
  - [Activez l'intégration Xero](/integrations/accounting/xero/accounting-xero-setup#enable-the-xero-integration).
- Xero a activé l'_API Xero Bank Feeds_ pour votre application enregistrée.

### Créer une entreprise et une connexion de données, puis ajouter des comptes bancaires

1. En utilisant l'endpoint [`POST /companies`](/platform-api#/operations/create-company), créez une entreprise pour représenter votre utilisateur PME :

   ```http title="Créer une entreprise"
   POST https://api.codat.io/companies
   ```

   ```json title="Corps de la requête"
   {
     "name": "<COMPANY_NAME>"
   }
   ```

   L'endpoint renvoie une réponse JSON contenant l'ID de l'entreprise (`id`) et l'URL de redirection (`redirect`).

2. En utilisant l'endpoint [`POST /companies/{companyId}/connections`](/platform-api#/operations/create-connection), créez une connexion de données vers Xero pour l'entreprise que vous avez ajoutée. Spécifiez l'ID de l'entreprise dans le chemin de l'URL et la clé de plateforme Xero dans le corps :

   ```http title="Créer une connexion"
   POST https://api.codat.io/companies/{companyId}/connections
   ```

   ```json title="Corps de la requête - Xero"
   {
     "platformKey": "gbol"
   }
   ```

   L'endpoint renvoie un objet `dataConnection` avec le statut `PendingAuth`, contenant un `id` de connexion et un `linkUrl`. Plus tard, vous utiliserez le `linkUrl` pour rediriger l'utilisateur PME vers l'interface utilisateur de mappage de compte.

   ```json title="Exemple de réponse - Créer une connexion (200)"
   {
     "id": "9d0703c1-fc71-43b7-b4e0-37cd7a863644",
     "integrationId": "0f20c943-12d0-4800-9f6c-d218f62d494c",
     "integrationKey": "gbol",
     "sourceId": "8a156a5a-39cb-4f9d-856e-76ef9b9a9607",
     "platformName": "Xero",
     "linkUrl": "https://link-api.codat.io/companies/...",
     "status": "PendingAuth",
     "created": "2023-05-10T08:40:26.0000000Z",
     "sourceType": "Accounting"
   }
   ```

3. En utilisant l'endpoint [`POST /bankFeedAccounts`](/bank-feeds-api#/operations/create-bank-feed), ajoutez un ou plusieurs comptes bancaires source :

   ```http title="Créer des comptes bancaires de flux bancaire"
   POST /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```

   Pour le `{connectionId}`, utilisez l'`id` de connexion que vous avez reçu dans la réponse de la requête `POST /connection`.

   Dans le corps de la requête, spécifiez un compte bancaire source à mettre à disposition de l'utilisateur PME. Par exemple, pour ajouter un compte de carte de crédit, envoyez la requête suivante :

   ```json title="Corps de la requête (tous les champs sont requis)"
   {
     "id": "acc-002", // définir sur l'ID unique souhaité
     "accountName": "account-081",
     "sortCode": "123456",
     "accountType": "Debit",
     "accountNumber": "12345670",
     "currency": "GBP",
     "balance": 99.99 // peut être 0
   }
   ```

   :::caution Types de compte spécifiques
   Xero approuve les applications Bank Feeds uniquement pour les types de compte "BANK" ou "CREDITCARD" (dans la terminologie de Xero). Par conséquent, il est important d'utiliser la valeur `accountType` correcte lors de la configuration des comptes bancaires source, à savoir "Debit" pour le type "BANK" et "Credit" pour le type "CREDITCARD".
   :::

4. L'endpoint renvoie un code `200` et le compte bancaire créé.

## Lire ensuite

Apprenez comment vos utilisateurs PME peuvent [connecter leurs comptes bancaires à Xero](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-smb-user) en utilisant l'interface utilisateur de connexion de compte.
