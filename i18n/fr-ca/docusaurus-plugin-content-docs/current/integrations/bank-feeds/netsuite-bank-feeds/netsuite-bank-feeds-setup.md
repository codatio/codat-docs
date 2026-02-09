---
title: "Configurer l'intégration Oracle NetSuite bank feeds"
description: "Configurez notre intégration avec Oracle NetSuite bank feeds"
---

Avant de pouvoir établir un flux bancaire vers Oracle NetSuite, vous devez configurer l'[intégration comptable Oracle NetSuite](/integrations/accounting/netsuite/accounting-netsuite) dans le [portail Codat](https://app.codat.io/settings/integrations/bankfeeds).

Dans cet article, nous expliquons comment :

- Créer une entreprise et une connexion de données vers Oracle NetSuite.
- Fournir à Codat les comptes bancaires source auxquels vos utilisateurs PME peuvent se connecter.
- Rediriger l'utilisateur vers l'[interface utilisateur de mappage](/bank-feeds/mapping/codat-ui) de compte fournie par Codat pour connecter leurs comptes bancaires source aux comptes bancaires cibles dans NetSuite.

### Prérequis

La fonctionnalité bank feeds fait partie de notre intégration comptable Oracle NetSuite existante et utilise le même bundle. Pour activer les bank feeds, vous devez d'abord [activer l'intégration NetSuite](/integrations/accounting/netsuite/accounting-netsuite-setup#configure-the-oracle-netsuite-integration).

Pour en savoir plus sur l'installation du bundle NetSuite, consultez notre aperçu du [parcours de liaison d'entreprise](/integrations/accounting/netsuite/company-linking-journey) NetSuite.

### Créer une entreprise

Utilisez notre endpoint [Create company](/bank-feeds-api#/operations/create-company) pour créer une [entreprise](../../../terms/company) qui représente votre utilisateur PME dans Codat. L'endpoint renvoie une réponse JSON contenant l'ID de l'entreprise `id` et l'URL de redirection `redirect`.

```http title="Créer une entreprise"
  POST https://api.codat.io/companies
```

```json title="Corps de la requête"
{
  "name": "{CompanyName}"
}
```

### Créer une connexion

Utilisez notre endpoint [Create connection](/bank-feeds-api#/operations/create-connection) pour établir une connexion de données vers NetSuite pour l'entreprise que vous avez ajoutée. Spécifiez l'ID de l'entreprise dans le chemin de l'URL et la clé de plateforme NetSuite dans le corps :

```http title="Créer une connexion"
  POST https://api.codat.io/companies/{companyId}/connections
```

```json title="Corps de la requête - NetSuite"
{
  "platformKey": "akxx"
}
```

L'endpoint renvoie un objet `dataConnection` avec le statut `PendingAuth`, contenant un `id` de connexion et un `linkUrl`. Plus tard, vous utiliserez le `linkUrl` pour rediriger l'utilisateur PME vers l'interface utilisateur de mappage de compte.

```json title="Exemple de réponse - Créer une connexion (200)"
{
  "id": "b52ae406-bdef-40df-a586-ed96bef3590f",
  "integrationId": "4fb72939-e59d-4e8b-90f2-59b85b7fc75d",
  "integrationKey": "akxx",
  "sourceId": "76b3c892-c852-4aec-a835-e453497a99d5",
  "platformName": "Oracle NetSuite",
  "linkUrl": "https://link-api.codat.io/companies/...",
  "status": "PendingAuth",
  "lastSync": "2023-11-10T15:07:46.2597036Z",
  "created": "2023-11-10T11:23:48.0000000Z",
  "sourceType": "Accounting"
}
```

### Ajouter des comptes bancaires

Utilisez l'endpoint [Create source account](/bank-feeds-api#/operations/create-source-account) pour ajouter un nouveau compte bancaire source :

```http title="Créer des comptes bancaires de flux bancaire"
  POST /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
```

Pour le paramètre `{connectionId}`, utilisez l'`id` de connexion que vous avez reçu dans la réponse de la requête `Create connection`. Dans le corps de la requête, spécifiez un compte bancaire source que vous souhaitez mettre à disposition de l'utilisateur PME. L'endpoint renvoie un code `200` et les détails du compte bancaire créé.

Par exemple, pour ajouter un compte de carte de crédit, envoyez la requête suivante :

```json title="Corps de la requête (tous les champs sont requis)"
{
  "id": "acc-002", // définir sur l'ID unique souhaité
  "accountName": "Credit Card",
  "accountType": "Credit",
  "accountNumber": "12345670",
  "currency": "GBP",
  "balance": 99.99 // peut être 0
}
```

### Lire ensuite

- Continuez avec les étapes restantes de l'[établissement d'un flux bancaire](/bank-feeds/mapping/overview).
- En savoir plus sur l'utilisation de l'[interface utilisateur de mappage de Codat](/bank-feeds/mapping/codat-ui) et le [mappage via notre API](/bank-feeds/mapping/api-mapping) si vous préférez héberger votre propre interface utilisateur.
