---
title: "Idempotence dans les appels API de Codat"
sidebar_label: "Idempotence"
description: "Comprenez comment effectuer des requêtes idempotentes vers les endpoints POST et PATCH de Codat"
---

## Qu'est-ce que l'idempotence?

Dans le contexte des requêtes API, l'idempotence garantit que le résultat de l'exécution de plusieurs requêtes identiques est le même que celui de l'exécution d'une seule requête. Cela empêche la création d'enregistrements en double si une requête API doit être relancée en raison de problèmes réseau ou de délais d'expiration.

Par exemple, si vous soumettez la même requête `POST` pour créer une facture plusieurs fois, l'inclusion d'une clé d'idempotence dans la requête garantit qu'une seule facture est créée.

## Idempotence dans les requêtes Codat

Vous pouvez inclure un en-tête `Idempotency-Key` avec une valeur GUID unique lors de requêtes `POST` ou `PATCH` vers tous les endpoints de Codat qui prennent en charge ces méthodes. Codat mettra en cache la réponse initiale et l'utilisera pour toutes les requêtes suivantes avec le même en-tête `Idempotency-Key`. Ce cache dure 90 minutes.

### Conseils et pièges

- L'en-tête `Idempotency-Key` doit être un GUID unique.
- Vous ne pouvez inclure qu'un seul en-tête `Idempotency-Key` dans votre requête.
- Vous ne pouvez inclure l'en-tête `Idempotency-Key` que dans les requêtes `POST` ou `PATCH`.
- Il n'est pas possible de réutiliser le même en-tête `Idempotency-Key` pour différentes requêtes.

#### Codes d'erreur possibles

- Une requête qui réutilise le même en-tête `Idempotency-Key` avec un corps différent entraînera un code de statut `422 Unprocessable Content`.
- Une requête qui utilise un `Idempotency-Key` correspondant à une requête en cours existante entraînera un code de statut `409 Conflict`.
