---
title: "Configurer l'intégration Sage Bank Feeds"
description: "Configurez notre intégration avec Sage Bank Feeds et connectez vos utilisateurs PME"
sidebar_label: Configuration
---

Avant de pouvoir écrire les transactions bancaires des clients vers les comptes bancaires cibles dans Sage, vous devez configurer l'intégration pour les tests ou l'utilisation en production.

Cette page explique comment :

- Activer l'intégration Sage Bank Feeds.
- Optionnel : Personnaliser le site d'authentification par défaut de Codat en ajoutant un lien d'appel à l'action et en téléchargeant un logo.
- Créer une entreprise et une connexion de données, puis ajouter des comptes bancaires.
- Afficher l'ID de connexion de données à l'utilisateur.

Lorsque vous avez terminé ces tâches, vos clients PME peuvent connecter leurs comptes à Sage en utilisant leur ID de connexion de données.

Vous pouvez ensuite mettre à jour les détails du compte bancaire selon les besoins.

## Prérequis

Complétez les prérequis suivants avant de configurer l'intégration Sage Bank Feeds.

- Vous avez accès à un Client de test pour votre instance Codat. Les Clients de test ne sont disponibles que sur les plans Start-up et Enterprise.
- Les types de données Comptes bancaires et Transactions bancaires sont activés dans vos [paramètres de type de données](/core-concepts/data-type-settings).

Pour obtenir de l'aide avec ces prérequis, contactez votre ingénieur Solutions ou le support Codat.

## Activer l'intégration Sage Bank Feeds

1. Allez à la page <a className="external" href="https://app.codat.io/settings/integrations/bankfeeds" target="_blank">**Bank feed integrations**</a> dans le portail Codat.
2. Cliquez sur **Set up** à côté de **Sage Bank Feeds**.
3. Utilisez le bouton pour définir l'intégration sur **Enabled**.

## Optionnel : Ajouter un lien d'appel à l'action

Vous pouvez ajouter un lien d'appel à l'action vers une page web contenant plus d'informations. Cela pourrait expliquer où vos utilisateurs PME peuvent obtenir leur ID de connexion de données dans votre application.

Le lien d'appel à l'action apparaîtra sous la boîte **Connection ID** dans le site d'authentification par défaut de Codat, par exemple :

![Screenshot](/img/old/55b90cb-sage-bank-feeds-call-to-action-link.png "Exemple d'un lien d'appel à l'action sous la boîte de saisie Connection ID. Le texte du lien indique : Cliquez ici pour obtenir votre Connection ID.")

Pour ajouter un lien d'appel à l'action :

1. Allez à la page <a className="external" href="https://app.codat.io/settings/integrations/bankfeeds" target="_blank">**Bank feed integrations**</a> dans le portail Codat.
2. Cliquez sur **Manage** à côté de **Sage Bank Feeds**.
3. Entrez le texte du lien dans la boîte **Call-to-action text**.
4. Entrez l'URL du lien dans la boîte **Call-to-action URL**.
5. Cliquez sur **Save**.

## Optionnel : Ajouter le logo de votre organisation

Vous pouvez personnaliser l'apparence du site d'authentification par défaut de Codat en ajoutant le logo de votre organisation. Il apparaîtra à gauche du logo Sage.

Pour télécharger un logo, allez à la page <a className="external" href="https://app.codat.io/settings/branding" target="_blank">Branding</a> dans le portail Codat.

## Créer une entreprise et une connexion de données, puis ajouter des comptes bancaires

1. En utilisant [POST /companies](/platform-api#/operations/create-company), créez une Entreprise pour représenter votre utilisateur PME :

   ```http
   POST https://api.codat.io/companies
   ```

   Corps de la requête :

   ```json
   {
     "name": "COMPANY_NAME"
   }
   ```

   L'endpoint renvoie une réponse JSON contenant l'`id` de l'entreprise et l'URL de `redirect`.

2. En utilisant [`POST /companies/{companyId}/connections`](/platform-api#/operations/create-connection), créez une connexion de données vers Sage Bank Feeds pour l'Entreprise que vous avez ajoutée. Spécifiez le `companyId` dans le chemin de l'URL :

   ```http
   POST https://api.codat.io/companies/{companyId}/connections
   ```

   Dans le corps de la requête, spécifiez la `platformKey` suivante :

   ```json
   {
     "platformKey": "olpr"
   }
   ```

   L'endpoint renvoie un code `200` et un objet `dataConnection` avec le statut `PendingAuth`.

   ```json
   {
     "id": "4ab3eb02-d787-4ecd-o6e2-62d7fb7c4d32",
     "integrationId": "2ce41026-589a-4330-8bfc-a30672253cd9",
     "integrationKey": "olpr",
     "sourceId": "98432954-a4fa-4640-a685-3af56909002a",
     "platformName": "SageBankFeed",
     "linkUrl": "https://link-api.codat.io/...", // ne pas utiliser
     "status": "PendingAuth",
     "created": "2023-01-09T09:58:09.6678831Z",
     "sourceType": "BankFeed"
   }
   ```

   :::caution Ne pas envoyer l'URL Link

   N'envoyez _pas_ la propriété `linkUrl` à l'utilisateur PME. Contrairement aux autres intégrations Codat, l'authentification de l'entreprise est initiée dans Sage comme décrit dans « Flux utilisateur PME : Connecter un compte bancaire source à Sage », ci-dessous.
   :::

3. En utilisant [POST /bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed), ajoutez un ou plusieurs comptes bancaires source à mettre à disposition de l'utilisateur PME.

   ```http
   POST /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```

   Dans le corps de la requête, spécifiez un compte bancaire. Par exemple, pour ajouter un compte de carte de crédit, envoyez la requête suivante (tous les champs indiqués sont requis) :

   ```json
   {
     "id": "acc-002", // définir sur l'ID unique souhaité
     "accountName": "account-081",
     "sortCode": "123456",
     "accountType": "Credit",
     "accountNumber": "12345670",
     "currency": "GBP",
     "balance": 99.99 // peut être 0
   }
   ```

4. L'endpoint renvoie un code `200` et le compte bancaire créé.

## Afficher l'ID de connexion de données à l'utilisateur

Ensuite, rendez l'ID de connexion de données de l'étape deux (ci-dessus) disponible pour l'utilisateur PME en, par exemple, affichant l'ID dans votre application. Ils devront entrer cet ID lors de la connexion d'un compte bancaire à Sage, comme décrit dans la procédure suivante.

## Flux utilisateur PME : Connecter un compte bancaire source à Sage

Pour connecter un compte bancaire source à un compte bancaire cible dans Sage, votre utilisateur PME utilise la fonctionnalité **Connect Bank** dans un produit Sage pris en charge. Les étapes exactes dépendent du produit Sage qu'ils utilisent.

:::note

Alternativement, vous pouvez [authentifier les utilisateurs via votre propre application web](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app).
:::

1. Sur l'onglet **Banking**, ils localisent le compte bancaire vers lequel ils souhaitent importer des transactions bancaires.

2. Ils cliquent sur **Connect Bank** sur le compte, puis sélectionnent votre institution dans la liste des banques et autres institutions financières.

3. Le site d'authentification par défaut de Codat est chargé dans un nouvel onglet du navigateur :

![Default Codat authentication UI - Connect your bank account to Sage](/img/old/bc09b4a-sage-bank-feeds_default-auth-UI-revised-wording.png)

4. Ils entrent leur ID de connexion de données dans la boîte **Connection ID**, puis cliquent sur **Submit**.

5. Si l'utilisateur PME a été authentifié avec succès avec Codat, une boîte de dialogue répertoriant les comptes bancaires source disponibles (créés à l'aide de l'endpoint `POST / bankFeedAccounts`) est affichée. Par exemple :

![Sage account selection](/img/old/7ef73f0-sbs-select-source-bank-account-multiple.png "Redirection vers la page de sélection de compte. Sélectionnez le compte bancaire que vous souhaitez utiliser")

6. L'utilisateur PME sélectionne le compte bancaire qu'il souhaite connecter, puis clique sur **OK**.

7. L'utilisateur PME est redirigé vers le produit Sage à partir duquel il a commencé le flux de connexion.

Vous pouvez maintenant utiliser l'endpoint [GET /bankFeedAccounts](/bank-feeds-api#/operations/get-bank-feeds) pour récupérer les comptes bancaires source. La propriété `status` d'un compte bancaire source doit avoir changé en `connected` avant de pouvoir commencer à écrire des transactions bancaires depuis le compte.

Le flux utilisateur PME est maintenant terminé.

## Mettre à jour les détails du compte bancaire

Pour mettre à jour les détails d'un ou plusieurs comptes bancaires source dans Sage, utilisez l'endpoint [PATCH /bankFeedAccounts](/bank-feeds-api#/operations/update-bank-feed).

```http
PATCH /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{bankAccountId}
```

Où `{bankAccountId}` est l'`id` du compte bancaire source que vous souhaitez mettre à jour.

Fournissez les détails à mettre à jour comme paramètres de requête. Vous n'avez besoin de fournir que les détails que vous souhaitez mettre à jour. Par exemple, pour mettre à jour le nom du compte, envoyez le corps de requête suivant :

```json
{
  "accountName": "new account name"
}
```

L'endpoint renvoie un code `200` et les détails du compte bancaire mis à jour. Par exemple :

```json
{
  "id": "acc-003",
  "accountName": "new account name", // nom de compte mis à jour
  "accountType": "Credit",
  "accountNumber": "12345671",
  "sortCode": "123456",
  "currency": "GBP",
  "balance": 100.09,
  "modifiedDate": "2023-01-09T14:14:14.1057478Z",
  "status": "pending"
}
```

## Prochaines étapes

Ensuite, vous pouvez [écrire des transactions bancaires depuis un compte bancaire source](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-use).
