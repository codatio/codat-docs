---
title: "Amazon Seller Central"
sidebar_label: Overview
description: "En savoir plus sur notre intégration Amazon Seller Central"
---

<a class="external" href="https://sellercentral.amazon.com/" target="_blank">
  Amazon Seller Central
</a>
est une plateforme que les commerçants indépendants utilisent pour vendre leurs produits sur Amazon.

Notre API Commerce prend en charge Amazon Seller Central et permet à vos clients liés de partager leurs données Amazon Seller Central via Codat. Vous pouvez ensuite récupérer ces données dans le même format standardisé que nos autres intégrations commerce.

## Configurer l'intégration

Voir [Configurer l'intégration Amazon Seller Central](/integrations/commerce/amazon-seller-central/set-up-amazon-seller-central) pour apprendre comment configurer et activer l'intégration.

:::caution Exigences du fournisseur sous-jacent

Avant de configurer votre intégration Amazon Seller Central, vous devez compléter toutes les exigences décrites dans [Amazon Web Services, IAM et inscription des développeurs](/integrations/commerce/amazon-seller-central/amazon-registration-steps).

Notez que votre demande doit être examinée avant que vous puissiez commencer à utiliser l'intégration.

:::

## Définitions importantes

**Amazon Seller Central** est la plateforme que les vendeurs Amazon utilisent pour gérer leur entreprise Amazon.

L'**Amazon Selling Partner API** est l'API sur laquelle Amazon Seller Central est construit. Cette API est une mise à niveau des API Amazon Marketplace Web Service (MWS) héritées, qui doivent être dépréciées à une date non spécifiée dans le futur.

En général et dans cette documentation, Codat fait référence à notre intégration Amazon comme une intégration avec **Amazon Seller Central**. Cependant, il est important de noter que l'inscription des développeurs requise auprès d'Amazon concerne les droits de développeur pour l'**Amazon Selling Partner API**.

Pour plus de clarté lors de la discussion de l'inscription des développeurs en particulier, ce guide utilisera le nom exact de l'API.

:::caution Limites de taux et fréquence de synchronisation

L'API Selling Partner applique une limitation de taux sur les requêtes entrantes. Effectivement, ces limites équivalent à permettre [1 requête par minute](https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference#get-ordersv0orders). La synchronisation des données commerce à une fréquence élevée - par exemple, toutes les 15 minutes - dépassera probablement la limite de taux et causera de mauvaises performances en raison des requêtes limitées. Pour des performances optimales, nous recommandons de définir la fréquence de synchronisation de l'intégration Amazon Seller Central à un intervalle long, comme quotidien ou hebdomadaire.

:::

:::caution Plusieurs marchés

Amazon Seller Central est une plateforme mondiale avec des marchés séparés dans des territoires séparés à travers le monde. Bien que les commerçants puissent vendre sur plusieurs marchés, chaque connexion de données est limitée à un seul marché desservi par le commerçant Amazon.

Vos clients qui vendent dans plusieurs territoires peuvent connecter tous leurs marchés Amazon Seller Central à Codat, mais devront passer par le flux Link séparément pour chaque marché régional.

:::
