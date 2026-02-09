---
title: "PrestaShop"
sidebar_label: Overview
description: "En savoir plus sur notre intégration PrestaShop"
createdAt: "2021-09-16T23:31:01.039Z"
updatedAt: "2022-11-17T10:56:52.590Z"
unlisted: true
---

<p>
  <a className="external" href="https://www.prestashop.com/en" target="_blank">
    PrestaShop
  </a>
  est un logiciel de commerce électronique open source écrit en PHP. PrestaShop permet
  aux commerçants de créer, configurer et héberger une boutique de commerce électronique en ligne.
</p>

Utilisez l'API Commerce de Codat avec PrestaShop pour vous connecter de manière sécurisée, récupérer et visualiser les transactions commerce de vos clients.

## Configurer l'intégration

Voir [Configurer l'intégration PrestaShop](/integrations/commerce/prestashop/set-up-prestashop-in-production) pour apprendre comment configurer et activer l'intégration.

## Exigences de configuration

PrestaShop n'est pas une solution SaaS. Il s'agit d'un package logiciel hébergé par le commerçant (ou un fournisseur d'hébergement en son nom), ainsi qu'un serveur HTTP pour gérer le trafic Web vers la vitrine et l'API.

Pour partager leurs données, un commerçant doit :

1. Partager sa **clé Webservice** (c'est-à-dire **clé API**) et son **URL de boutique**.
   Si le commerçant entre une redirection, il doit confirmer qu'il souhaite utiliser l'URL de destination de redirection comme URL de boutique.

2. S'assurer que le serveur HTTP est correctement configuré pour permettre l'accès à l'API.

:::danger Erreurs possibles dans la connexion du commerçant

Les conseils pour les commerçants sur la façon de configurer le Webservice PrestaShop sont inclus dans Link, ainsi qu'accessibles depuis PrestaShop directement. Cependant, en raison de la large gamme d'installations PrestaShop et de combinaisons d'hébergement possibles, les commerçants peuvent rencontrer des problèmes imprévus selon la façon dont ils ont choisi d'héberger et de configurer PrestaShop. Par exemple, certains serveurs HTTP et installations PrestaShop suppriment par défaut les en-têtes d'autorisation lors de l'accès à l'API.

:::

Codat Link testera si une connexion a réussi en effectuant un appel test à l'API. Si cela échoue, le message suivant s'affiche :

« Unable to verify Store URL and Webservice Key. Please ensure you have entered the correct details and that the store's Webservice is enabled. »

:::info Lecture des données

Les ressources disponibles pour l'instance du logiciel PrestaShop à partir de laquelle les données sont lues peuvent varier énormément entre les petits commerçants (potentiellement en exécutant le logiciel sur leur ordinateur portable) et les grandes entreprises (probablement hébergées sur une infrastructure beaucoup plus évolutive). Au moment de la lecture des données, il n'est pas possible pour Codat de savoir quelles ressources sont disponibles ; en conséquence, Codat limite la quantité de données qu'il récupère à tout moment pour minimiser l'impact sur les instances avec le moins de ressources. Le compromis est des temps de lecture plus longs pour toutes les instances PrestaShop, même lorsque les ressources pourraient être disponibles pour lire les données à une vitesse plus élevée.

:::

:::caution Modules complémentaires et plugins

PrestaShop est une plateforme open source conçue pour la configurabilité. Une grande partie de son succès est sa vaste bibliothèque de modules complémentaires comprenant des contributions de développeurs tiers. Codat s'efforce d'ajouter la prise en charge des principaux modules complémentaires lorsque cela est possible, mais les clients doivent être conscients que dans certains cas, il ne sera pas possible de récupérer avec succès les données des clients avec des modules complémentaires non pris en charge.

:::
