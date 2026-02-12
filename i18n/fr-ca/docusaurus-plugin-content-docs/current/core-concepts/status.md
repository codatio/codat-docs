---
title: "Statut des données"
description: "Aperçu du concept et détails clés"
tags:
  - Core concept
---

La synchronisation d'un type de données garantit que notre cache de données est à jour avec la source de données et signifie que vous pourrez récupérer les données de l'entreprise synchronisée en utilisant notre API ou visualiser les données dans [le portail](https://app.codat.io).

Il existe trois façons d'initier la synchronisation des données :

- Mettre en file d'attente une synchronisation pour actualiser les données depuis le portail de Codat
- Utiliser l'API pour mettre en file d'attente une synchronisation de données (connue sous le nom de _dataset_)
- Utiliser la fonctionnalité Paramètres de synchronisation dans le portail Codat

Par défaut, la synchronisation complète de chaque type de données marqué comme _Récupérer lors de la première liaison_ dans vos [paramètres de type de données](/core-concepts/data-type-settings) sera automatiquement mise en file d'attente lorsqu'une entreprise s'autorise pour la première fois avec Codat.

## Statuts des ensembles de données

Tous les ensembles de données sont créés dans l'état _Queued_ (En file d'attente). Pour les packages en ligne, la transition vers _Fetching_ (Récupération) sera presque instantanée. Pour les packages sur site, la synchronisation restera _Queued_ jusqu'à ce que le connecteur sur site sur la machine de l'utilisateur final soit en ligne et prêt à traiter l'ensemble de données.

Un ensemble de données passant à l'état _AuthError_ indique que la connexion à la source de données n'est plus autorisée et nécessitera que l'entreprise réautorise votre connexion avant que vous ne puissiez effectuer des synchronisations de données ultérieures pour cette connexion.

D'autres états d'erreur peuvent être résolus en mettant en file d'attente une nouvelle synchronisation après avoir attendu un certain temps. Par exemple, vous pouvez voir des ensembles de données passer à _FetchError_ si vous tentez une synchronisation pendant une période de maintenance programmée pour la source de données sous-jacente.

Les ensembles de données peuvent également passer à l'état _NotSupported_ si l'ensemble de données que vous essayez de synchroniser n'est pas pris en charge par la plateforme liée.

<img
  src="/fr-ca/img/old/47eaf22-DatasetStatuses.png"
  alt="Un diagramme des statuts possibles des ensembles de données de Queued à Complete"
/>

| État                                                                                    | Description                                                                                                                                                                                                          |
| :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fetching                                                                                | Les données sont actuellement en cours de lecture depuis l'intégration.                                                                                                                                             |
| Mapping                                                                                 | Les données sont en cours de conversion dans le modèle standard de Codat.                                                                                                                                           |
| Validating                                                                              | Les données sont en cours de vérification pour la cohérence et l'exactitude.                                                                                                                                        |
| Processing                                                                              | Les données sont en cours de stockage dans le cache de Codat.                                                                                                                                                       |
| Complete                                                                                | L'ensemble de données est terminé et les données sont disponibles pour être interrogées via l'API de Codat.                                                                                                         |
| NotSupported                                                                            | L'intégration ne prend pas en charge le type de données demandé. Par exemple, Clearbooks ne prend pas en charge la lecture du rapport Profits et Pertes.                                                           |
| FetchError, MapError, ValidationError, ProcessingError, InternalError, PermissionsError | L'ensemble de données a échoué dans l'un des états ci-dessus. Ceux-ci sont surveillés par nos équipes d'ingénierie, mais vous pouvez contacter l'équipe de support pour obtenir de l'aide si nécessaire.          |
| AuthError                                                                               | L'authentification à la source de données a expiré. Cela signifie généralement que vous devrez relier, en demandant à l'utilisateur final de suivre le `linkUrl` de la connexion de données pour ressaisir ses identifiants. |
| Queued                                                                                  | L'ensemble de données vient d'être demandé et passera à `fetching` sous peu.                                                                                                                                        |

## Exemples

### Type de données qui n'a jamais été synchronisé

```json
{
  "suppliers": {
    "dataType": "suppliers"
  },
  ...
}
```

### La première synchronisation pour le type de données a échoué

```json
{
  "suppliers": {
    "dataType": "suppliers",
    "currentStatus": "FetchError",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
  },
  ...
}
```

### La dernière synchronisation a échoué bien qu'une synchronisation précédente ait réussi

```json
{
  "suppliers": {
    "dataType": "suppliers",
    "lastSuccessfulSync": "2019-10-10T00:31:04.497225Z",
    "currentStatus": "FetchError",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
    "latestSuccessfulSyncId": "9d6d3754-deeb-42b7-ad37-e10942f9e258"
  },
  ...
}
```

### La synchronisation a réussi

```json
{
  "suppliers": {
    "dataType": "suppliers",
    "lastSuccessfulSync": "2019-10-10T00:31:04.497225Z",
    "currentStatus": "Complete",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
    "latestSuccessfulSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85"
  },
  ...
}
```
