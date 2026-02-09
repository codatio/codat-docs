---
title: "Limites de débit"
description: "Découvrez les limites de débit de l'API Codat et leur utilisation"
---

## Limites de débit des tiers

Bon nombre des plateformes financières avec lesquelles Codat s'intègre imposent des limites de débit sur l'utilisation de leurs API. Ces limites sont appliquées et signalées séparément par chaque API.

La gestion des limites de débit est un aspect difficile de la création d'intégrations financières. Avec Codat, vous bénéficiez de notre gestion sur mesure des limites de débit pour tous les fournisseurs pris en charge. Cela vous donne l'accès maximal possible aux données contribuées par vos utilisateurs PME.

## Limites de débit Codat

Les limites de débit listées sur cette page sont appliquées par `api.codat.io`, et il n'est pas possible d'effectuer des appels API qui dépassent le quota.

Codat retournera un code de statut `429` pour toutes les requêtes à l'API reçues pendant que la limitation de débit est active. Le corps de la réponse ressemblera à toute autre [erreur retournée par Codat](/using-the-api/errors).

La réponse inclura également un en-tête `Retry-After` qui informera votre système appelant du moment où la limitation de débit actuelle sera désactivée.

### Comment les limites de débit sont calculées

Codat calcule ses limites de débit en fonction du nombre d'entreprises connectées actives (ACCs).
Les limites de débit sont les suivantes :

- `1 000 x (1 + nombre d'ACCs)` requêtes par jour
- 10 requêtes simultanées par ACC

Par exemple, si vous avez 100 ACCs, vous pouvez effectuer jusqu'à 101 000 requêtes par jour.

:::note Qu'est-ce qu'une ACC?

ACC, ou Active Connected Company (entreprise connectée active), est une entreprise qui a une connexion active, liée et en cours de synchronisation vers une plateforme sous-jacente.

:::

### Pourquoi est-ce que je dépasse mon quota?

Si vous dépassez régulièrement nos limites, cela signifie généralement qu'il y a un problème négligé dans votre application ou votre produit.
Nous vous contacterons pour discuter des améliorations possibles afin de réduire le nombre d'appels.
Cela améliorera l'expérience Codat pour vous et vos clients.

:::tip Réinitialisation de la limite de débit du client

Nos limites de débit sont calculées quotidiennement et se réinitialisent à 00:00 UTC chaque jour. Vous pouvez utiliser nos [types d'événements webhook](/using-the-api/webhooks/event-types) dédiés `client.rateLimit.{reset|reached}` pour être notifié des changements de limites de débit.

:::

### En-têtes de limite de débit

Chaque réponse de notre API inclut un ensemble d'en-têtes qui montrent comment votre utilisation se compare à vos limites de débit :

- `X-Rate-Limit-Limit` vous indique le nombre maximal de requêtes pour la période de quota en cours.
- `X-Rate-Limit-Remaining` vous indique le nombre de requêtes restantes dans la période de quota.
- `X-Rate-Limit-Reset` vous indique la date à laquelle le quota sera réinitialisé.

Une fois la limite dépassée, toutes les requêtes supplémentaires contiendront également l'en-tête standard `Retry-After` qui informe votre système du moment où la requête pourra être effectuée à nouveau.

## Limites strictes contre les DoS

Les limites strictes contre les DoS sont établies pour protéger contre les acteurs malveillants et n'empêchent pas une utilisation raisonnable. Codat définit ces limites à :

- 1 000 requêtes par minute depuis n'importe quelle adresse IP.

Nous pouvons bloquer le trafic d'une adresse IP sans avertissement si, à notre avis, il interfère significativement avec le fonctionnement de notre API.

---

## À lire ensuite

- [Optimiser les appels à notre API](/using-the-api/optimizing-api-calls)
