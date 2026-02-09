---
title: "Accès aux données bancaires supplémentaires"
description: "Accès aux types de données bancaires supplémentaires pour Plaid et TrueLayer"
createdAt: "2021-12-03T10:16:28.225Z"
updatedAt: "2022-01-11T15:11:06.060Z"
---

Vous pouvez activer l'accès proxy aux types de données bancaires de [Plaid](/integrations/banking/plaid/banking-plaid) et [TrueLayer](/integrations/banking/truelayer/banking-truelayer), en plus des types de données mappés à l'API Codat. Cela vous donne accès à une gamme plus large de types de données dans les données bancaires de vos clients depuis Plaid ou TrueLayer.

Si l'accès proxy est activé, les requêtes pour les types de données bancaires supplémentaires sont acheminées directement vers les endpoints pertinents dans l'API Plaid ou TrueLayer. Les types de données bancaires supplémentaires ne sont pas mappés au modèle de données de Codat.

Vous ne devriez activer l'accès proxy que si vous avez besoin d'accéder aux données bancaires des clients qui s'ajoutent aux types de données bancaires nativement pris en charge.

L'accès proxy est fourni en parallèle avec l'accès aux types de données bancaires nativement pris en charge. Il ne peut pas être utilisé pour accéder aux endpoints déjà pris en charge via l'API Codat (par exemple, `Transactions`). Les types de données bancaires supplémentaires sont accessibles par chaque entreprise que vous créez.

Vous pouvez activer l'accès proxy pour l'intégration Plaid ou TrueLayer dans le portail Codat. Les intégrations Plaid et TrueLayer ne peuvent pas être activées toutes les deux en même temps.

:::info API partenaires

La disponibilité et le temps de disponibilité d'une API partenaire relèvent de la responsabilité de la société partenaire, et non de Codat. L'activation de l'accès proxy ne garantit pas l'accès aux types de données sélectionnés ; la disponibilité des types de données Plaid ou TrueLayer dépend des produits activés pour votre compte dans l'API partenaire.

:::

## Types de données supplémentaires pris en charge via l'accès proxy

Pour l'intégration Plaid, vous pouvez activer certains ou tous les types de données supplémentaires suivants via le proxy. Ceux-ci sont appelés « produits ».

### Produits supplémentaires Plaid

```
deposit_switch
identity
income_verification
investments
liabilities
payment_initiation
transfer
assets
```

Pour l'intégration TrueLayer, vous pouvez activer certains ou tous les types de données supplémentaires suivants via le proxy. Ceux-ci sont appelés « portées ».

### Portées supplémentaires TrueLayer

```
direct_debits
standing_orders
```

Pour en savoir plus sur ces types de données, veuillez vous référer à notre documentation partenaire :

- [API Reference](https://plaid.com/docs/api/) dans la documentation Plaid.
- [Data API basics](https://docs.truelayer.com/docs/data-api-basics) dans la documentation TrueLayer.
