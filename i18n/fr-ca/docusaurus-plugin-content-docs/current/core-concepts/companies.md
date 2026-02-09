---
title: "Entreprises"
description: "Votre client au sein de Codat"
tags:
  - Core concept
---

Dans Codat, une entreprise représente une entreprise partageant l'accès à ses données. Chaque entreprise peut avoir plusieurs [connexions de données](/core-concepts/connections) à différentes sources de données telles qu'une connexion à [Xero](/integrations/accounting/xero/accounting-xero) pour les données comptables, deux connexions à [Plaid](/integrations/banking/plaid/banking-plaid) pour deux comptes bancaires et une connexion à [Zettle](/integrations/commerce/zettle/commerce-zettle) pour les données de point de vente.

Généralement, chaque entreprise est l'un de vos clients.

Lorsque vous créez une entreprise, vous pouvez spécifier un `name` et nous générerons automatiquement un `id` unique pour l'entreprise. Vous pouvez également ajouter une `description` pour stocker toute information supplémentaire sur l'entreprise.

## Si vous débutez...

Vous pouvez utiliser le portail Codat pour créer et gérer des entreprises,

- [Ajouter une nouvelle entreprise](/configure/portal/companies#add-a-new-company)
- [Gérer les entreprises via le portail](/configure/portal/companies)

## Si vous évoluez...

Vous voulez probablement utiliser notre API. Chacune de nos références API (et les SDK associés) inclut les points de terminaison nécessaires pour créer et mettre à jour des entreprises.

Si vous cherchez simplement à exploiter notre fonctionnalité de gestion d'entreprise, vous pouvez également utiliser notre [API de plateforme](/platform-api#).

- [Créer une nouvelle entreprise](/platform-api#/operations/create-company) - `POST /companies`
- [Lister vos entreprises existantes](/platform-api#/operations/list-companies) - `GET /companies`
- [Mettre à jour une entreprise existante](/platform-api#/operations/update-company) - `PUT /companies/{companyId}`

:::caution Caractères interdits dans les noms d'entreprise

Les noms d'entreprise ne peuvent contenir que des lettres, des chiffres, des espaces et les symboles suivants : `-`, `'`, `&`, `@`, `.`, `,`, `?`, `!`.

Tous les caractères interdits seront retirés de votre nom d'entreprise. Par exemple : `Example Company (Codat[1])` sera créé comme `Example Company Codat1`.
:::

---

## Lire ensuite

- Concept suivant : [Connexions](/core-concepts/connections)
- `POST /companies` - [Référence API](/platform-api#/operations/create-company)
- `GET /companies` - [Référence API](/platform-api#/operations/list-companies)
- `PUT /companies/{companyId}` - [Référence API](/platform-api#/operations/update-company)
- [API de plateforme](/platform-api#)
