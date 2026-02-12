---
title: "Synchronisation des données"
description: "Comprendre les principes des synchronisations de données quotidiennes et de la gestion des erreurs dans Sync for Commerce"
displayed_sidebar: commerce
image: "/fr-ca/img/banners/social/commerce.png"
---

## Mécanisme de synchronisation des données

Une fois que votre client a configuré sa synchronisation de données de ventes dans l'interface utilisateur de configuration Sync, ses données de ventes se synchroniseront automatiquement à la fin de chaque journée.

Nous synchronisons toujours les enregistrements du dernier jour calendaire publié jusqu'à minuit. Le processus de synchronisation peut prendre un certain temps pour s'exécuter et se terminer après minuit, mais cela ne change pas l'ensemble de données sélectionné pour la synchronisation. C'est parce que les normes comptables s'attendent généralement à ce que vous opériez sur la base de jours calendaires.

## Configuration de synchronisation du commerçant

La synchronisation quotidienne des données nécessite que le commerçant ait une configuration de synchronisation valide, qui est configurée à l'aide de l'interface utilisateur de configuration Sync.

Si la configuration est manquante, une erreur de synchronisation se produira. Par exemple, si un commerçant n'a pas mappé un compte pour la vente de cartes-cadeaux et vend ensuite une carte-cadeau, la synchronisation des données pour cet enregistrement entraînera une erreur.

Dans certains cas, lorsqu'un compte manquant est identifié dans la configuration, Codat créera automatiquement ce compte pour permettre à la synchronisation des données de se poursuivre.

## Gestion des erreurs

S'il n'est pas possible de synchroniser les données pour un jour donné, l'utilisateur verra une erreur dans l'interface utilisateur de configuration Sync. Les erreurs sont rares, mais peuvent se produire en raison de :

- Un problème inattendu lors de la récupération des données d'un logiciel de commerce ou de la création et de la mise à jour des données dans le logiciel de comptabilité

- Un problème avec la configuration Sync d'un commerçant (par exemple, des comptes manquants pour les types de ventes qui se sont produits ce jour-là)

Lorsqu'une erreur se produit, la prochaine synchronisation quotidienne des données inclura les enregistrements du dernier jour calendaire et du jour calendaire précédent. De cette façon, toutes les données manquantes sont automatiquement synchronisées dès que la cause profonde est résolue.

:::caution Synchronisation des données désactivée

Nous désactivons la synchronisation des données d'un commerçant si elle se termine avec des erreurs pendant 31 jours consécutifs.

Cela garantit que nous ne synchronisons pas les données que le commerçant a déjà téléchargées et réconciliées manuellement lorsque le problème est finalement résolu. Sinon, cela entraînerait une duplication des données dans le logiciel de comptabilité du commerçant.

Le commerçant peut réactiver sa synchronisation des données dans l'interface utilisateur de configuration Sync et même modifier la date de début de synchronisation à la date à laquelle il souhaite que la synchronisation des données reprenne.
:::

---

## Lire ensuite

- [Fonctionnalités avancées de synchronisation des données](/commerce/advanced-setup)
