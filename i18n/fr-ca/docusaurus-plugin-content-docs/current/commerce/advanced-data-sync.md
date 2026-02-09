---
title: "Fonctionnalités avancées de synchronisation des données"
sidebar_label: "Synchronisation des données"
description: "Découvrez les options de synchronisation de données supplémentaires disponibles avec Sync for Commerce"
displayed_sidebar: commerce
image: "/img/banners/social/commerce.png"
---

La synchronisation des données est un processus quotidien automatisé. Un commerçant peut voir le statut des récentes opérations de synchronisation dans l'interface utilisateur de configuration Sync, et votre équipe de support peut le vérifier sur la page Santé de la synchronisation de notre [Portail](https://app.codat.io/).

Cependant, il est possible d'obtenir des informations sur le statut de synchronisation et même d'initier des synchronisations en dehors du calendrier quotidien en utilisant l'API Codat.

## Obtenir le statut de synchronisation

Vous souhaiterez peut-être que votre système soit au courant du dernier statut de synchronisation pour un commerçant. Vous pouvez obtenir une liste de synchronisations et leur statut en effectuant un appel API au endpoint [Get sync status](/sync-for-commerce-api#/operations/get-sync-status) :

```http
GET /meta/companies/{companyId}/sync/commerce/status
```

La réponse fournit une liste de synchronisations et leurs informations de statut :

```json
{
  "companyId": "0498e921-9b53-4396-a412-5g3g6094c1b3",
  "commerceSyncId": "af888de-4d1b-44e8-8b4q-717463af00c5",
  "syncId": "afe076de-4d2c-44d9-7e3a-717463af11c5",
  "syncStatusCode": 2000,
  "syncStatus": "Success",
  "syncUtc": "2023-04-12T10:52:54.5359678Z",
  "dataPushed": true
  "dataConnections":
      [...]
    ...
}
```

## Initier une synchronisation

Vous pourriez avoir besoin d'effectuer une synchronisation manuelle pour un commerçant à partir de la date de sa dernière synchronisation réussie jusqu'à une date spécifiée. Vous pouvez le faire en appelant le endpoint [Initiate new sync](/sync-for-commerce-api#/operations/request-sync) :

```http
POST /companies/{companyId}/sync/commerce/latest
```

Le début de la plage de dates de synchronisation est déterminé comme la date de la dernière synchronisation réussie. S'il n'y a eu aucune synchronisation réussie précédente, la date configurée dans le [calendrier de synchronisation](/commerce/synchronization-schedule) est utilisée.

Vous pouvez définir la fin de la plage de dates de synchronisation en incluant une date `syncTo` dans le corps de la requête. Si aucune date n'est fournie, l'heure actuelle `UtcNow` est utilisée. Par exemple :

```
{
  "syncTo": "2022-01-01T12:00:00.000Z"
}
```

Vous pouvez également initier une synchronisation pour une plage de dates spécifiée en effectuant un appel API au endpoint [Initiate sync for specific range](/sync-for-commerce-api#/operations/request-sync-for-date-range) :

```http
POST /meta/companies/{companyId}/sync/commerce/historic
```

Vous devrez spécifier les dates de début et de fin de la plage de synchronisation dans le corps de la requête, par exemple :

```json
{
  "start": "2022-01-01T12:00:00.000Z",
  "end": "2022-01-02T12:00:00.000Z"
}
```

---

## Lire ensuite

- [Calendrier de synchronisation](/commerce/synchronization-schedule)
