---
title: "Shopify"
description: "Découvrez notre intégration Shopify"
---

[Shopify](https://www.shopify.com/) est un logiciel eCommerce qui aide les PME à vendre leurs produits en ligne.

Avec l'intégration Shopify de Codat, vous pouvez récupérer de manière sécurisée les transactions commerce de vos clients PME, standardisées selon notre modèle de données commerce.

## Approches pour le partage de données marchandes

Lors de la configuration de l'intégration, vous pouvez adopter l'une des deux approches suivantes pour permettre à vos marchands de connecter et partager leurs données commerce :

- [Applications personnalisées](/integrations/commerce/shopify/commerce-shopify-custom-apps)

  Créées par les marchands exclusivement pour leurs boutiques Shopify.

- [Applications publiques](/integrations/commerce/shopify/commerce-shopify-public-apps)

  Construites par vous et doivent être approuvées par Shopify avant utilisation. Une seule application publique peut être installée sur plusieurs boutiques Shopify.

En général, les applications personnalisées nécessitent moins de configuration initiale, avec des tâches effectuées par le marchand. Les applications publiques nécessitent plus de configuration initiale, avec des tâches effectuées par vous, le client Codat. Choisissez l'option qui convient le mieux à vos circonstances.

## À propos des applications personnalisées

Une [application personnalisée](https://help.shopify.com/en/manual/apps/custom-apps) est exclusivement liée à la boutique Shopify individuelle d'un marchand et ne peut pas être liée à plusieurs boutiques. Les applications personnalisées ne sont pas répertoriées sur le Shopify app store ni soumises au processus d'approbation des applications de Shopify. Avec cette approche, chaque marchand crée une application personnalisée dans sa boutique Shopify.

Les applications personnalisées utilisent des jetons d'accès API (clés API) pour l'authentification.

Il n'y a pas d'exigences supplémentaires du fournisseur lors de l'utilisation de cette approche.

Pour connecter leurs données commerce à l'aide d'une application personnalisée, le marchand effectue les actions suivantes :

1. Crée une application personnalisée et lui attribue les portées API requises.
2. Obtient le jeton d'accès API pour l'application.
3. Entre le jeton d'accès dans Link.

Pour commencer, consultez [Configurer Shopify avec les applications personnalisées](/integrations/commerce/shopify/commerce-shopify-custom-apps).

## À propos des applications publiques

Les [applications publiques](https://help.shopify.com/en/manual/apps/app-types#public-apps) sont conçues pour se connecter à plusieurs boutiques Shopify appartenant à plusieurs marchands. Cela signifie que vous pouvez utiliser une seule application publique pour accéder aux données de plusieurs boutiques marchandes différentes.

Les applications publiques offrent un moyen peu contraignant pour les marchands de lier leurs données commerce à Codat. Avec cette approche, vous créez une seule application publique et utilisez ses identifiants sécurisés pour autoriser votre accès aux données commerce Shopify.

Les _applications répertoriées_ sont publiées sur le Shopify app store et les _applications non répertoriées_ ne le sont pas. Seules les applications répertoriées peuvent être découvertes directement depuis l'app store par les marchands.

Les applications publiques utilisent un flux d'authentification OAuth 2.0.

Si vous choisissez cette méthode de connexion, vous devez effectuer les actions suivantes :

1. Créer une application publique configurée avec une URL de redirection Codat, des webhooks et les permissions requises.

2. Soumettre votre application à Shopify pour approbation avant utilisation en production.

3. Si votre application est approuvée, entrer ses identifiants sécurisés dans le portail Codat.

Vous devez être conscient des exigences de Shopify pour les applications publiques ainsi que de la fonctionnalité spécifique que votre application devra fournir. Pour commencer, consultez [Configurer Shopify avec les applications publiques](/integrations/commerce/shopify/commerce-shopify-public-apps).

## Exigences OAuth pour les applications

Nous gérons cette exigence pour vous. Tout ce dont nous avons besoin est une redirection qui peut être utilisée pour [identifier le marchand](/integrations/commerce/shopify/commerce-shopify-public-apps#build-an-app-for-merchant-authorization).

---

## Lire ensuite

- [Configurer Shopify avec les applications personnalisées](/integrations/commerce/shopify/commerce-shopify-custom-apps)
- [Configurer Shopify avec les applications publiques](/integrations/commerce/shopify/commerce-shopify-public-apps)
