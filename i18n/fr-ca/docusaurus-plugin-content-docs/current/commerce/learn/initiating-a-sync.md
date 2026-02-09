---
title: "Initier une synchronisation"
description: "Apprenez comment déclencher manuellement une synchronisation pour une plage de dates spécifiée"
image: "/img/banners/social/commerce.png"
---

Vous pourriez avoir besoin d'effectuer une synchronisation Commerce manuelle pour une entreprise à partir de la date de sa dernière synchronisation réussie jusqu'à une date spécifiée. Pour ce faire, effectuez un appel au endpoint Latest Sync :

`POST /companies/{companyId}/sync/commerce/latest`

Vous devez spécifier le `companyId`, qui est un paramètre obligatoire.

La limite inférieure de la plage de dates de synchronisation est déterminée comme la date de la dernière synchronisation réussie. S'il n'y a eu aucune synchronisation réussie précédente, la date de début de synchronisation configurée dans le [Calendrier de synchronisation](/commerce/synchronization-schedule) est utilisée.

Pour la limite supérieure de la plage de dates de synchronisation, vous pouvez inclure une date `syncTo` dans le corps de la requête. Si aucune date n'est fournie, l'heure actuelle `UtcNow` est utilisée.

Avant d'effectuer l'appel, vous pouvez également explorer le [endpoint Latest Commerce Sync](/sync-for-commerce-api#/operations/post-sync-latest) dans notre référence API.
