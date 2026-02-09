---
title: "Configurer l'intégration QuickBooks Online Bank Feeds"
description: "Configurez notre intégration avec QuickBooks Online Bank Feeds"
sidebar_label: Configuration
---

Configurez l'intégration QuickBooks Online Bank Feeds pour permettre à vos clients PME de connecter les comptes bancaires source de votre application aux comptes cibles dans QuickBooks Online (QBO).

## Prérequis

Avant de configurer l'intégration, assurez-vous que :

- Votre ingénieur Solutions vous a fourni l'accès à l'intégration QuickBooks Online Bank Feeds.
- Les utilisateurs PME qui se connecteront à QBO Bank Feeds sont situés aux États-Unis et au Canada uniquement.
- Dans le portail Codat, vous avez activé les [Comptes bancaires](/accounting-api#/schemas/BankAccount) et les [Transactions bancaires](/accounting-api#/schemas/BankTransactions) dans vos [paramètres de type de données](/core-concepts/data-type-settings).
- Vous avez personnalisé l'interface utilisateur Link QBO Bank Feeds pour votre institution.

## Activer l'intégration QBO Bank Feeds

1. Dans le portail Codat, allez à **Settings > Integrations > Bank feeds** pour voir la page [**Bank feeds integrations**](https://app.codat.io/settings/integrations/bankfeeds).
2. Cliquez sur **Set up** à côté de **QuickBooks Online Bank Feeds**.
3. Utilisez le bouton pour définir l'intégration sur **Enabled**.

:::info L'intégration n'apparaîtra pas dans le flux Link

L'activation de l'intégration ne la rendra pas visible dans le flux Link. Au lieu de cela, les utilisateurs PME se connectent directement via une URL Link.

:::

## Ajouter un texte personnalisé au site Link

Vous pouvez ajouter un texte d'appel à l'action personnalisé, en français et en anglais, à l'interface utilisateur Link QBO Bank Feeds. Ceux-ci peuvent fournir des conseils supplémentaires à vos utilisateurs PME sur la connexion de leurs comptes bancaires à QBO.

1. Dans le portail Codat, allez à **Settings > Integrations > Bank feeds** pour voir la page [**Bank feeds integrations**](https://app.codat.io/settings/integrations/bankfeeds).
2. Cliquez sur **Manage** à côté de **QuickBooks Online Bank Feeds**.
3. Entrez du texte dans les champs **Callout title** et **Callout body** (maximum de 50 et 150 caractères respectivement). Seul le texte brut est pris en charge.

   :::info Options de localisation

   Vous pouvez également entrer des traductions françaises pour le titre et le corps du texte d'appel.

   :::

4. Cliquez sur **Save**.

Le texte d'appel est affiché dans une zone grise au bas de l'interface utilisateur Link QBO Bank Feeds, au-dessus du bouton **Get credentials**. Par exemple :

![QBO Bank Feeds Link site showing custom callout text above the "Get credentials" button.](/img/old/b822e27-qbo-bank-feeds_link-site-callout-text.png)

## Ajouter un bouton « Connecter les flux bancaires » à votre application

Ensuite, ajoutez un bouton ou un lien à votre application qui invite vos utilisateurs PME à connecter leurs comptes bancaires à QBO. Utilisez un appel à l'action approprié, tel que _Connecter le compte à QuickBooks_.

Consultez la procédure suivante pour plus de détails sur la fonctionnalité à fournir.

## Créer une entreprise et une connexion de données, puis ajouter des comptes bancaires

1. Lorsque l'utilisateur PME clique sur le bouton ou le lien que vous avez ajouté, créez une entreprise pour lui en utilisant l'endpoint [Create company](/platform-api#/operations/create-company) :

   ```http
   POST https://api.codat.io/companies
   ```

   ```json title="Corps de la requête"
   {
     "name": "COMPANY_NAME"
   }
   ```

   L'endpoint renvoie une réponse JSON contenant l'`id` de l'entreprise et l'URL de `redirect`.

2. En utilisant l'endpoint [Create a data connection](/platform-api#/operations/create-connection), créez une connexion de données vers QBO Bank Feeds pour l'entreprise.

   ```http
   POST https://api.codat.io/companies/COMPANY_ID/connections
   ```

   Dans le corps de la requête, spécifiez `hcws` comme `platformKey` :

   ```json
   {
     "platformKey": "hcws"
   }
   ```

   L'endpoint renvoie une réponse `200`. Le corps contient un objet `dataConnection` avec le statut `PendingAuth` et un `linkUrl` contenant un mot de passe à usage unique (`otp`) qui expire après une heure.

   ```json
   {
     "id": "7baba7cc-4ae0-48fd-a617-98d55a6fc008",
     "integrationId": "6b113e06-e818-45d7-977b-8e6bb3d01269",
     "sourceId": "56e6575a-3f1f-4918-b009-f7535555f0d6",
     "platformName": "QuickBooks Online Bank Feeds",
     "linkUrl": "https://link-api.codat.io/companies/COMPANY_ID/connections/CONNECTION_ID/start?otp=742271", //  expire après 1h
     "status": "PendingAuth",
     "created": "2022-09-01T10:21:57.0807447Z",
     "sourceType": "BankFeed"
   }
   ```

3. En utilisant l'endpoint [POST /bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed), ajoutez un ou plusieurs comptes bancaires source. Ce sont les comptes que l'utilisateur PME pourra connecter à QBO.

   ```http
   POST /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```

   Dans le corps de la requête, spécifiez un compte bancaire (tous les champs indiqués sont requis) :

   ```json title="Exemple de corps de requête : ajouter un compte-chèques"
   {
     "id": "ac-001",
     "accountName": "account-001",
     "accountType": "checking",
     "accountNumber": "12345670",
     "sortCode": "12-34-56",
     "currency": "USD",
     "balance": 4002 // peut être 0
   }
   ```

   L'endpoint renvoie une réponse `200` et le compte bancaire créé.

4. Redirigez l'utilisateur PME vers le `linkUrl` renvoyé dans la réponse de l'endpoint [Create a data connection](/platform-api#/operations/create-connection) (voir l'étape 2).

   :::caution Expiration de l'URL Link

   Pour des raisons de sécurité, le `linkUrl` expirera une heure après sa génération.

   :::

5. L'utilisateur PME ouvre le `linkUrl` dans son navigateur pour charger l'interface utilisateur Link QBO Bank Feeds.

6. Ils peuvent maintenant [connecter leurs comptes bancaires choisis à QuickBooks Online](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-smb-user).

:::caution Ne pas coder en dur l'URL Link

Ne codez _pas_ en dur le `linkUrl` dans le code de votre application. Il est unique au client d'origine et ne doit pas être partagé avec d'autres utilisateurs.
:::

## Récupérer le statut et les informations du compte bancaire

Vous pouvez utiliser l'endpoint [GET /connectionInfo/bankFeedAccounts](/bank-feeds-api#/operations/get-bank-feeds) pour afficher les informations suivantes pour une connexion de données :

- Comptes bancaires source disponibles — les comptes que l'utilisateur PME peut connecter à QBO.
- Le statut de connexion des comptes bancaires source disponibles (soit `pending`, `connected`, ou `disconnected`).
- Le nombre de comptes bancaires connectés pour une connexion de données particulière.

```http
GET /connections/{connectionId}/connectionInfo/bankFeedAccounts
```

## Mettre à jour un compte bancaire source existant pour une entreprise

Vous pouvez utiliser l'endpoint [`PATCH /connectionInfo/bankFeedAccounts/{bankAccountId}`](/bank-feeds-api#/operations/update-source-account) pour mettre à jour un compte bancaire source existant pour une entreprise et une connexion de données. Il n'est possible de mettre à jour que le champ `accountName` avec cet endpoint.

Fournissez les détails du compte bancaire source que vous souhaitez mettre à jour comme paramètres de requête.

```http
PATCH /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{bankAccountId}
```

```json title="Exemple de corps de requête : mettre à jour le nom du compte"
{
  "id": "acc-002", // id requis du compte bancaire à mettre à jour
  "accountName": "updated-account-name",
  "sortCode": "123456",
  "accountType": "Credit",
  "accountNumber": "12345670",
  "currency": "USD",
  "balance": 99.99
}
```

## Ajouter de nouveaux comptes bancaires source pour une entreprise

Vous pouvez ajouter de nouveaux comptes bancaires source à une entreprise et une connexion de données existantes. Cela rend ces comptes bancaires disponibles pour que l'utilisateur PME puisse s'y connecter.

1. Envoyez une requête à l'endpoint [PUT /connectionInfo/bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed) et spécifiez les comptes bancaires que vous souhaitez ajouter dans le corps de la requête.

   ```http
   PUT /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```

   Corps de la requête :

```json
[
  {
    "id": "acc-003",
    "accountName": "account-0003",
    "sortCode": "123456",
    "accountType": "Debit",
    "accountNumber": "987654",
    "currency": "GBP",
    "balance": 219.23
  }
]
```

2. Le `linkURL` original pour l'entreprise et la connexion de données contenait un `otp` avec une fenêtre d'expiration d'une heure. Si celle-ci est passée, vous devrez générer un nouveau `linkUrl`. Pour ce faire, appelez l'endpoint [List connections](/platform-api#/operations/list-connections) pour obtenir un nouveau `linkUrl` pour l'entreprise et la connexion de données spécifiées.

3. Redirigez l'utilisateur PME vers le nouveau `linkUrl` pour lui permettre de connecter le nouveau compte bancaire à QBO.

---

## Lire ensuite

Comprendre comment [l'utilisateur PME connecte ses comptes](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-smb-user) à QBO.
