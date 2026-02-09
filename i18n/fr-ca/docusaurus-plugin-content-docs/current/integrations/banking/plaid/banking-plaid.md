---
title: "Plaid"
description: "Apprenez-en plus sur notre intégration Plaid"
sidebar_label: Aperçu
---

<p>
  <a class="external" href="https://plaid.com/" target="_blank">
    Plaid
  </a>
  est un fournisseur tiers de services bancaires avec des connexions à des comptes bancaires dans plus de 11 000 institutions financières aux États-Unis, au Canada, au Royaume-Uni et en Europe. Les services de Plaid sont réglementés au Royaume-Uni par la Financial Conduct Authority (FCA).
</p>

Notre intégration bancaire avec Plaid vous permet de vous connecter en toute sécurité et de récupérer les données bancaires de vos clients PME dans un format standardisé.

:::info Institutions financières prises en charge

Vous aurez automatiquement accès à toutes les nouvelles institutions financières que Plaid ajoute à leur plateforme.
:::

Les données bancaires suivantes sont disponibles via l'intégration :

- [Comptes bancaires](/banking-api#/schemas/Account)
- [Soldes de compte bancaire](/banking-api#/schemas/AccountBalance)
- [Transactions bancaires](/banking-api#/schemas/Transactions)
- [Catégories de transactions bancaires](/banking-api#/schemas/TransactionCategory)

:::tip Instant Auth et Instant Match

Au sein de notre intégration Plaid, nous prenons en charge [Instant Auth](https://plaid.com/docs/auth/coverage/instant/#instant-auth), et activons le repli vers [Instant Match](https://plaid.com/docs/auth/coverage/instant/#instant-match) par défaut lorsque Instant Auth n'est pas disponible. Ces fonctionnalités offrent une connexion basée sur les identifiants pour près de 7 000 institutions financières.
:::

## Mappages de données entre Plaid et Codat

Les niveaux de tarification de Plaid vous donnent accès à des _produits_ spécifiques de vos sources de données bancaires configurées. Vous devez avoir **tous** les produits Plaid du tableau suivant activés et disponibles pour une utilisation dans votre compte Plaid :

| Type de données Codat                                                    | Produit Plaid associé                                                                                         |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| [Comptes bancaires](/banking-api#/schemas/Account)                      | Auth, Identity, Institution                                                                                   |
| [Transactions bancaires](/banking-api#/schemas/Transactions)            | Transactions                                                                                                  |
| [Soldes de compte bancaire](/banking-api#/schemas/AccountBalance)       | Asset Reports                                                                                                 |
| [Catégories de transactions bancaires](/banking-api#/schemas/TransactionCategory) | N/A. Ces catégories sont fournies par le modèle de catégorisation de Codat et n'utilisent pas les catégories de Plaid. |

## Paramètres de synchronisation pour Plaid

Parce que Plaid facture par appel API pour certains endpoints, nous recommandons de synchroniser les données pour les [Soldes de compte](/banking-api#/schemas/AccountBalance) pas plus fréquemment qu'une fois par jour. Vous pouvez également souhaiter ne synchroniser d'autres types de données qu'à la demande, plutôt que selon un calendrier pour réduire les coûts associés.

:::info Accès proxy

Si vous devez accéder à des produits Plaid supplémentaires, vous pouvez [activer l'accès proxy à des données bancaires supplémentaires](/integrations/banking/proxy-access-banking-data).

:::
