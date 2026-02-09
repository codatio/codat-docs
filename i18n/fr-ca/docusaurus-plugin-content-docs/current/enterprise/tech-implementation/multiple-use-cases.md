---
title: "Gérer plusieurs cas d'utilisation avec Codat"
description: "Découvrez comment votre organisation peut utiliser les solutions de Codat pour implémenter plusieurs cas d'utilisation"
sidebar_label: "Gérer plusieurs cas d'utilisation"
---

Ce guide s'adresse aux clients d'entreprise qui utilisent les solutions de Codat pour plusieurs cas d'utilisation et couvre les éléments suivants :

- Configuration requise pour répondre à plusieurs cas d'utilisation
- Requêtes API pour les clients qui partagent des données pour plusieurs cas d'utilisation
- Fonctionnalités et spécificités des solutions de Codat

## Termes et fonctionnalités clés

Les **produits** sont des ensembles de fonctionnalités représentant un cas d'utilisation qui peut être activé dans le portail Codat. Codat prend en charge :

    - **Produits standard** qui incluent des types de données définis par Codat comme pertinents et sont disponibles globalement pour tous les clients, tels que Bank Feeds, Expenses ou Lending.
    - **Produits personnalisés** qui incluent des types de données demandés par le client pour une solution sur mesure et ne sont disponibles que pour ce client.

Vous pouvez appliquer les **paramètres de synchronisation** qui correspondent le mieux à votre cas d'utilisation. Codat distingue :

    - Paramètres de synchronisation **au niveau du client** qui sont gérés via **Paramètres > Types de données** dans le portail Codat, ou
    - Paramètres de synchronisation **au niveau du produit** qui sont maintenus par Codat sur demande du client.

Pour éviter le risque de doubles synchronisations, vous ne devez appliquer qu'un seul type de paramètres de synchronisation.

Les produits sont représentés par une propriété `products` supplémentaire sur les appels à l'endpoint [Create company](/platform-api#/operations/create-company) et peuvent être ajoutés à une entreprise existante en utilisant l'endpoint [Add product](/platform-api#/operations/add-product).

Le [service webhook](/using-the-api/webhooks/overview) de Codat fournit une gamme de types d'événements pour les produits standard. Pour être informé des événements de lecture de données pour les produits personnalisés, utilisez les webhooks `{productIdentifier}.read.completed`.

## Attribuer des produits aux entreprises

Les conseils suivants conviennent aux clients d'entreprise qui ont implémenté Codat avec une couche d'ingestion de données centralisée.

### Créer une nouvelle entreprise

Vous pouvez attribuer un produit à une entreprise au moment de créer cette entreprise. Par conséquent, les paramètres de synchronisation au niveau du produit s'appliqueront à la première récupération de données chaque fois que l'entreprise obtient une nouvelle connexion avec le statut `Linked`.

![Diagramme de flux de synchronisation pour la mise à jour des entreprises existantes avec des produits](/img/enterprise/implementation/consent/syncflowproductsexisting.png)

### Mettre à jour une entreprise existante

Vous pouvez attribuer un produit à une entreprise existante qui a déjà une connexion avec le statut `Linked` en utilisant l'endpoint [Add product](/platform-api#/operations/add-product). Les paramètres de synchronisation au niveau du produit s'appliqueront à la connexion une fois le produit ajouté.

Ce scénario suppose que votre client a consenti aux exigences de types de données du cas d'utilisation supplémentaire.

![Diagramme de flux de synchronisation pour la création de nouvelles entreprises avec des produits](/img/enterprise/implementation/consent/syncflowproductsnew.png)

Pour retirer un produit d'une entreprise existante, utilisez l'endpoint [Remove product](/platform-api#/operations/remove-product).

## Actualiser les données

### Actualiser dans le portail

Le bouton **Actualiser les données** dans le portail Codat utilise les paramètres de synchronisation au niveau du client définis dans **Paramètres > Types de données** lorsqu'une actualisation de données est déclenchée. Il n'utilise pas les paramètres de synchronisation au niveau du produit qui peuvent avoir été maintenus.

### Actualiser via l'API

:::warning Non applicable aux solutions standard

Les méthodes listées ci-dessous ne peuvent pas être utilisées pour actualiser les données pour les **solutions standard** de Codat. Consultez plutôt la documentation des solutions individuelles.

:::

Si vous utilisez des paramètres de synchronisation **au niveau du client**, vous pouvez mettre en file d'attente une actualisation de type de données avec ces paramètres pour une entreprise en utilisant les endpoints [Refresh all data](/platform-api#/operations/refresh-company-data) ou [Refresh data type](/platform-api#/operations/refresh-data-type).

Si vous utilisez des paramètres **au niveau du produit** appliqués aux **produits personnalisés**, vous pouvez actualiser les données en utilisant l'endpoint [Refresh product data](/platform-api#/operations/refresh-product-data).

Lors de l'actualisation des données pour un produit personnalisé, rappelez-vous :

- Si une synchronisation de données est déjà en cours pour un produit personnalisé, la demande d'actualisation renverra une réponse `Bad request (400)`.
- Si une entreprise a plusieurs produits personnalisés attribués, vous devez actualiser les données pour chaque produit individuellement.

### Gérer les types de données dans plusieurs produits

Certains types de données peuvent être requis et utilisés par plusieurs cas d'utilisation et produits. Bien que l'impact de ceci dépende de votre architecture, Codat prend en charge les synchronisations au niveau du produit pour réduire votre besoin de mise en cache ou de stockage de données supplémentaire.

:::info Synchronisations de types de données dans une architecture en streaming ou basée sur les événements

Si votre organisation emploie plusieurs produits qui partagent un type de données, les équipes utilisant ces produits s'attendent à voir un ensemble complet de données qui couvre la période et la fréquence de synchronisation définies par cette équipe. Elles ne veulent pas être impactées par les synchronisations de données déclenchées par une autre équipe.

Il se peut que :

- Le produit A récupère les factures et les paiements une fois par jour vers 23h.
- Le produit B récupère les paiements toutes les heures à l'heure pile.

Codat garantit que, pour le produit A, la date `recordsModifiedFrom` s'alignera avec sa synchronisation programmée précédente et capturera tous les enregistrements modifiés après 23h la veille.

:::

### Webhooks de produits personnalisés

Le service webhook de Codat prend en charge les types d'événements personnalisés `{productIdentifier}.read.completed` qui seront envoyés à l'endpoint configuré lorsque Codat a réussi à récupérer ou épuisé la récupération de données.

Par conséquent, sauf si vous utilisez l'un des sous-types d'événements, tels que `.successful` ou `.unsuccessful`, vous verrez un statut `Complete` ou `Error` pour tous les types de données dans ce produit.

Un type de données peut se retrouver dans un état `Error` dans le scénario suivant :

1. Codat tente d'effectuer une synchronisation quotidienne programmée définie par les paramètres de synchronisation au niveau du produit pour une connexion `Linked`.
2. Le logiciel comptable lié connaît un temps d'arrêt.
3. Codat reçoit une réponse d'erreur du logiciel comptable.
4. Codat réessaie la synchronisation de données jusqu'à 10 fois sur une période de 12 heures et continue de recevoir des réponses d'erreur du logiciel.
5. Codat signale l'ensemble de données avec un statut `FetchError` et envoie un webhook `read.completed`.

### Types d'événements spécifiques

Vous pouvez choisir de recevoir des webhooks pour des types d'événements plus spécifiques, tels que les lectures réussies ou échouées :

- `read.completed.successful` ou `{productIdentifer}.read.completed.successful` sont envoyés si tous les types de données ont été synchronisés avec succès. Les types de données synchronisés peuvent avoir des avertissements de validation, mais pas d'erreurs de validation.
- `read.completed.unsuccessful` ou `{productIdentifer}.read.completed.unsuccessful` sont envoyés si Codat a terminé la récupération de tous les types de données, mais certains se sont terminés avec des erreurs.

Le premier webhook que vous recevez après une connexion d'entreprise initiale réussie (cela pourrait être un événement `read.completed.successful.initial`, `read.completed.successful` ou `read.completed`) présentera `recordsModified` comme `false`. La prochaine fois que vous recevez une notification d'un événement `read.completed`, tel qu'après la prochaine synchronisation programmée, vous verrez un véritable reflet de toute modification d'enregistrement depuis cette première récupération de données.

## Considérations d'implémentation

Le plan ci-dessous reflète les activités requises pour migrer les synchronisations d'entreprise de l'utilisation de paramètres de synchronisation au niveau du client vers des paramètres de synchronisation spécifiques aux produits.

| **#** | Activité                                                                                              | Impact sur les webhooks                                                                                                                                          | Impact sur la synchronisation                                                                  | Actions de retour en arrière                                                                                                                                                                                                            |
| ----- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | Désactiver les paramètres de synchronisation au niveau du client                                                                    |                                                                                                                                                             | Aucune synchronisation supplémentaire programmée sauf celles déjà déclenchées                       | Réactiver les paramètres de synchronisation au niveau du client                                                                                                                                                                                        |
| **2** | Attendre une heure ou la durée de la fréquence de synchronisation précédente la plus fréquente                      |                                                                                                                                                             | Permet à toute synchronisation au niveau du client déjà en cours de se terminer                   | Réactiver les paramètres de synchronisation au niveau du client                                                                                                                                                                                        |
| **3** | Désactiver la configuration webhook précédente                                                                | Les notifications d'événements ne seront plus envoyées                                                                                                                  |                                                                                 | 1. Se réabonner aux événements webhook précédemment désactivés<br/>2. Réactiver les paramètres de synchronisation au niveau du client                                                                                                                            |
| **4** | Configurer les webhooks pour les nouveaux types d'événements                                                                | **Produits standard** : s'abonner aux types d'événements `read.completed`. <br/> **Produits personnalisés** : s'abonner aux types d'événements `{productIdentifier}.read.completed`. |                                                                                 | 1. Se désabonner des nouveaux types d'événements<br/>2. Se réabonner aux types d'événements webhook précédemment désactivés<br/>3. Réactiver les paramètres de synchronisation au niveau du client                                                                                            |
| **5** | Ajouter des produits à toutes les entreprises en utilisant l'endpoint [Add product](/platform-api#/operations/add-product) |                                                                                                                                                             | Cela déclenchera une récupération des types de données du produit pour les entreprises mises à jour | 1. [Retirer le produit](/platform-api#/operations/remove-product) de l'entreprise <br/>2. Se désabonner de la nouvelle série de types d'événements<br/>3. Se réabonner aux types d'événements webhook précédemment désactivés<br/>4. Réactiver les paramètres de synchronisation au niveau du client |

#### Considérations supplémentaires

Lors de la planification de l'implémentation du support multi-cas d'utilisation, évaluez comment ce changement peut impacter les domaines suivants :

- **Gestion de l'environnement :** avez-vous plusieurs environnements de développement, de test et de préproduction ?

- **Applications développeur avec les partenaires :** aurez-vous besoin de plus d'une application développeur pour chaque intégration comptable que vous prenez en charge ?

- **Parcours de consentement :** comment demanderez-vous à vos clients un consentement supplémentaire de manière transparente et conforme ?

Pour plus d'informations sur l'implémentation du support multi-cas d'utilisation, contactez votre contact Codat.
