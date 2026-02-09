---
title: "Codes de statut et erreurs"
description: "En savoir plus sur les codes de statut et les erreurs des API de Codat"
createdAt: "2019-03-14T11:06:10.705Z"
updatedAt: "2022-11-07T19:55:15.033Z"
---

La page suivante décrit les codes de statut et les réponses d'erreur standard utilisés dans l'API Codat.

## Codes de statut

| Code de statut | Explication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200            | **Succès**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 202            | **Accepté** (en attente)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 400            | **Mauvaise requête :** Le serveur ne peut pas traiter la requête en raison d'une erreur côté client apparente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 401            | **Non autorisé :** La clé API Codat fournie est incorrecte.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 402            | **Paiement requis :** Une limite de compte a été atteinte. Le type de limite de compte est décrit dans la propriété `error` : <br/>- `Company limit exceeded` : Vous avez dépassé la limite de 50 entreprises qui s'applique à un essai gratuit. Nous recommandons de supprimer toutes les entreprises dont vous n'avez plus besoin et de réessayer la requête. <br/>- `SyncSettingsValidationException: Sync schedule not allowed` : Vous avez demandé une planification de synchronisation _horaire_ ; cette fonctionnalité n'est pas incluse dans l'essai gratuit. <br/>- `Payment Required` : Votre compte gratuit a plus de 365 jours et a expiré. Veuillez contacter notre [équipe solutions](mailto:solutions@codat.io) pour mettre à niveau votre plan. <br/>Pour des exemples de réponses, voir [Exemples d'erreurs de limite de compte](doc:status-codes#example-account-limit-errors). |
| 403            | **Interdit :** Cette erreur est renvoyée dans les scénarios suivants : <br/>Vous utilisez une clé API obsolète ou une clé non associée à cette ressource. <br/>- Un point de terminaison en aval n'est pas accessible. <br/>- Vous tentez d'accéder à un point de terminaison pour lequel vous n'êtes pas autorisé.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 404            | **Non trouvé :** Cette erreur est renvoyée dans les scénarios suivants : <br/>- La ressource demandée n'a pas pu être trouvée. <br/>- Le type de données n'est pas pris en charge par la plateforme sous-jacente. <br/> Dans ce cas, le message d'erreur est : "Datatype [name] not supported by platform(s) [name]".                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 405            | **Méthode non autorisée :** Vous tentez d'utiliser une méthode non autorisée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 409            | **Conflit :** La ressource n'est pas prête. <br/>Si vous synchronisez un ensemble de données, cela pourrait signifier que : <br/>- L'ensemble de données n'a pas été demandé. <br/>- La synchronisation de l'ensemble de données n'est pas terminée. <br/>- La requête dépasse le nombre de valeurs autorisé (par exemple, crée plus de 10 clés API).                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 429            | **Trop de requêtes :** Vous avez effectué trop de requêtes dans une période donnée ; veuillez réessayer plus tard. <br/> Consultez nos [limites de taux](/using-the-api/rate-limits) pour tous les détails sur les requêtes dépassées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 500            | **Erreur interne du serveur :** Il y a un problème avec notre serveur. Veuillez réessayer plus tard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 503            | **Service indisponible :** L'API Codat est temporairement hors ligne pour maintenance. Veuillez réessayer plus tard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Exemples d'erreurs de limite de compte

Lorsqu'une requête API entraîne le dépassement d'une limite de compte, vous recevrez un code de réponse 402. Le corps de la réponse indique quelle limite de compte a été dépassée.

### Limite de 50 entreprises

Réponse d'erreur de [POST /companies](/platform-api#/operations/create-company) lorsque vous avez dépassé la limite de 50 entreprises qui s'applique à l'essai gratuit.

Par exemple :

```json
{
  "statusCode": 402,
  "service": "PublicApi",
  "error": "CompanyValidationException: Company limit exceeded",
  "correlationId": "00000000-0000-0000-0000-000000000000",
  "validation": {
    "errors": [
      {
        "itemId": "Company",
        "message": "Company limit exceeded. Learn more at https://docs.codat.io/using-the-api/errors",
        "validatorName": "CreateCompany"
      }
    ],
    "warnings": []
  }
}
```

### Limite de 365 jours de compte gratuit

Réponse d'erreur lorsque votre compte a expiré et que vous effectuez une requête vers n'importe quel point de terminaison. Cette erreur est renvoyée si votre compte gratuit a plus de 365 jours et a expiré.

```json
{
  "statusCode": 402,
  "service": "PublicApi",
  "error": "Payment Required",
  "correlationId": "00000000-0000-0000-0000-000000000000",
  "validation": {
    "errors": [
      {
        "message": "Account expired. Learn more at https://docs.codat.io/using-the-api/errors"
      }
    ],
    "warnings": []
  }
}
```

## ID de corrélation dans les réponses d'erreur

Le contenu d'une réponse d'erreur inclut un message d'erreur plus détaillé et un `correlationId`, qui peut être utilisé pour identifier une réponse particulière. Veuillez inclure le `correlationId` au format texte si vous contactez le support Codat concernant une erreur.

```json
{
  "statusCode": 404,
  "service": "QuickBooksOnline",
  "error": "InvoicePdfNotFoundException: Invoice not found for company 360cb9b3-d9cf-4f66-b8db-8a3523fe3dc5 and invoice ID 12345",
  "correlationId": "131f0225-5467-421a-b179-4531d6b4a942"
}
```

## Codes de statut dans les réponses d'écriture asynchrones

Les codes de statut pour les opérations d'écriture créées dans l'API Codat peuvent être différents des codes de statut renvoyés dans les réponses des fournisseurs de services.

Lorsqu'une opération d'écriture est créée dans l'API, certains fournisseurs de services peuvent utiliser un code `202 Accepted`, ce qui implique que la requête a été acceptée pour traitement, mais que le traitement n'est pas terminé. Cependant, l'API d'écriture peut renvoyer un code `200 Success` pour l'opération d'écriture créée avec succès dans l'API Codat.

:::tip Récapitulatif
Vous avez appris les codes d'erreur que vous pourriez rencontrer lors de l'utilisation de l'API.
:::

---

## Lire ensuite

- [Création et mise à jour de données](/using-the-api/push)
