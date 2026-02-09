---
title: "Prérequis"
description: "Prérequis pour commencer avec Sync for Commerce."
createdAt: "2022-08-03T12:22:19.576Z"
updatedAt: "2022-11-28T11:26:51.853Z"
---

:::caution Tests bêta

Sync for Commerce est en version bêta. Si vous êtes intéressé à développer avec Sync for Commerce, veuillez [nous contacter](mailto:sync-for-commerce@codat.io).
:::

Sync for Commerce doit être activé pour votre compte. Vous pouvez activer les produits dans le portail via [**Paramètres > Produits**](https://app.codat.io/settings/products) en tant qu'utilisateur Admin ou Développeur.

### Authentification

[Authentifiez-vous](/using-the-api/authentication) avec l'API Codat en utilisant votre clé API.

### Activer une plateforme prise en charge

Vous devez configurer un ou plusieurs des logiciels de comptabilité pris en charge :

- [Xero](/integrations/accounting/xero/accounting-xero)
- [QuickBooks Online](/integrations/accounting/quickbooksonline/accounting-quickbooksonline)
- [FreeAgent](/integrations/accounting/freeagent/accounting-freeagent)

### Types de données requis

Les types de données suivants sont requis (et sont activés par défaut) :

#### Comptabilité

- [Informations sur l'entreprise](/accounting-api#/schemas/CompanyDataset)
- [Comptes](/accounting-api#/schemas/Account)
- [Taux de taxe](/accounting-api#/schemas/TaxRates)
- [Clients](/accounting-api#/schemas/Customers)
- [Fournisseurs](/accounting-api#/schemas/Suppliers)

#### Commerce

- [Commandes](/commerce-api#/schemas/orders)
- [Transactions](/commerce-api#/schemas/transactions)
- [Paiements](/commerce-api#/schemas/payments)
