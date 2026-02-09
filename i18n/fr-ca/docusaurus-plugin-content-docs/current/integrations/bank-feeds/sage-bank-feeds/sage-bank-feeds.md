---
title: "Sage Bank Feeds"
displayed_sidebar: integrationsBankFeeds
description: "Apprenez-en plus sur notre intégration Sage Bank Feeds"
---

## Aperçu

Avec notre intégration Sage Bank Feeds, vous pouvez permettre à un utilisateur Sage de configurer un flux bancaire depuis un compte bancaire de votre application (le compte source) vers un compte dans un produit Sage pris en charge (le compte cible). Vous pouvez ensuite écrire des [Transactions bancaires](/bank-feeds-api#/operations/create-bank-transactions) depuis le compte source vers le compte cible.

![screenshot](/img/old/4185821-sage-bank-feeds-flowchart-test-white-border-wider.png "Écriture de Transactions bancaires depuis un compte bancaire source vers un compte bancaire cible.")

Avec l'accès aux flux bancaires, vos clients peuvent plus facilement rapprocher les transactions bancaires avec les écritures comptables, comme les factures et les factures fournisseurs.

:::note Produits Sage pris en charge

Vous pouvez écrire des transactions bancaires vers plusieurs [produits Sage pris en charge](/integrations/bank-feeds/sage-bank-feeds/#supported-sage-products).
:::

## Types de données et opérations pris en charge

Les flux bancaires sont représentés comme des flux de [Transactions bancaires](/bank-feeds-api#/operations/create-bank-transactions) écrits vers Codat dans l'ordre chronologique.

## Comment ça fonctionne

1. [Configurez l'intégration](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup).
2. Votre utilisateur final peut configurer un flux bancaire en utilisant la fonctionnalité _Connect Bank_ dans un produit Sage pris en charge. Ils trouvent votre institution, puis sélectionnent un compte bancaire source depuis lequel envoyer des transactions bancaires.

Ils sont redirigés vers une interface utilisateur Codat pour entrer leur ID de connexion de données pour s'authentifier avec l'intégration - consultez le [flux utilisateur PME](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup#smb-user-flow-connect-a-source-bank-account-to-sage) pour plus de détails. Alternativement, vous pouvez [authentifier les utilisateurs via votre propre application web](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app). 3. Vous écrivez des transactions pour les utilisateurs authentifiés vers Codat en utilisant l'endpoint [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) - consultez [Utiliser votre intégration Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-use) pour plus de détails.

## Produits Sage pris en charge

Notre intégration prend en charge l'écriture de flux bancaires vers plusieurs produits Sage, notamment Sage Accounting, Sage Intacct et Sage 50. Pour une liste complète, consultez les [régions et produits pris en charge](https://developer.sage.com/banking-service/provider-api/banking-service/supported-regions-products/).

---

## Lire ensuite

Consultez [Configurer l'intégration Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup) pour apprendre comment configurer et activer l'intégration.
