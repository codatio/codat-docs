---
title: "Référence d'intégration Mollie"
description: "Choses à savoir lors de la lecture de données depuis Mollie"
createdAt: "2022-05-27T14:07:23.367Z"
updatedAt: "2022-10-20T08:48:19.088Z"
unlisted: true
---

## Litiges

Les litiges sont mappés depuis l'API des rétrofacturations Mollie. Le `status` du litige n'est pas disponible pour les rétrofacturations récupérées depuis Mollie.

:::info Rétrofacturations dans Mollie

Dans Mollie, une rétrofacturation est une annulation de paiement émise à un client qui a soulevé un litige concernant un paiement ou une commande. Pour plus d'informations, voir <a href="https://help.mollie.com/hc/en-us/articles/115001470869-What-are-chargebacks-" target="_blank">What are chargebacks?</a> dans la base de connaissances Mollie.
:::

## Commandes

Lors de la lecture des commandes depuis Mollie, les éléments de ligne de type `shipping_fee` et `surcharge` sont affichés comme des frais de service dans Codat (indiqué dans le champ `Orders.serviceCharges`).

## Transactions

Les transactions incluent les règlements Mollie, qui sont indiqués dans Codat avec le type de transaction `Payout`. Ils sont récupérés depuis l'API des règlements Mollie.

:::info Règlements dans Mollie

Dans Mollie, les règlements sont des sommes payées du solde Mollie d'une entreprise vers leur propre compte bancaire. Ils montrent les paiements inclus et toutes les déductions pour les remboursements, les rétrofacturations, etc.
:::

## Couverture des champs pour les types de données pris en charge

Le modèle de données de Codat prend en charge une large gamme de champs dans chaque type de données.

Parfois, l'API d'un fournisseur n'accorde pas l'accès à un champ qui existe dans un type de données Codat. Inversement, notre modèle de données ne prend parfois pas en charge tous les champs pertinents d'un objet dans l'API d'un fournisseur.

Le tableau suivant met en évidence les champs sélectionnés qui ne sont pas disponibles dans les données lues depuis Mollie.

### Champs Codat non disponibles

| Enregistrement et champ Mollie | Type de données Codat                                             | Statut                                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Settlements.status`           | [Transactions](/commerce-api#/schemas/transactions)               | Le statut de transaction dans Codat ne reflète pas les règlements `open` ou `pending` dans Mollie.                                                              |
| `Payments.method`              | [Payments](/commerce-api#/schemas/payments) `Payments.method.type`| Seules les méthodes de paiement `creditcard` et `paypal` sont reflétées dans Codat. Toutes les autres méthodes de paiement sont affichées comme `Custom`. |
