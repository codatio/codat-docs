---
title: "Écoute des événements"
description: "Bases des événements webhook lors de l'utilisation des API de Codat"
---

:::caution Nouveau service webhook disponible

Cette page décrit la fonctionnalité de notre offre webhook héritée. [En savoir plus](/using-the-api/webhooks/overview) sur notre nouveau service webhook et voir comment vous pouvez [migrer](/using-the-api/webhooks/migration-guide) pour l'utiliser à la place.

:::

Si vous avez ajouté une URL de webhook à votre règle, Codat enverra un `POST` à cette URL chaque fois qu'un événement webhook est déclenché.

Le corps de la requête inclura le contexte tel que le `RuleId`, le `RuleType` et le `CompanyId` qui a déclenché l'événement, ainsi que les données pertinentes au type de webhook particulier. Des exemples de corps sont détaillés pour chaque règle dans notre page [Types de règles](/using-the-api/webhooks/legacy/core-rules-types).

## Codes de réponse attendus

| Code de réponse                                                                         | Description                                                                          |
| :-------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **200** ou code d'état de la plage **2xx**                                              | L'événement webhook a été reçu avec succès.                                          |
| **300** ou code d'état de la plage **3xx**                                              | Redirige l'événement vers une autre URL. Codat ne met pas en cache la redirection de façon permanente. |
| **408**, **420**, **429**, **460**, **502**, **503**, **504**, **522**, et **524**      | Erreur transitoire ou expiration. Codat réessaie l'événement webhook.               |
| Tout autre code d'état, y compris **400**                                               | Irrécupérable, aucune nouvelle tentative n'est effectuée.                            |

## Nouvelles tentatives

Les événements webhook déclenchés sont automatiquement réessayés un maximum de trois fois sur une période de 2 minutes avant d'échouer de façon permanente. L'intervalle de nouvelle tentative augmente à chaque fois jusqu'à un maximum de 60 secondes.

Pour remplacer l'intervalle de nouvelle tentative, incluez un [en-tête Retry-After](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) dans votre réponse.

Par exemple :
`Retry-After: Wed, 21 Oct 2015 07:28:00 GMT`
`Retry-After: 120`

## Filtrage des événements par client

Si vous êtes un partenaire Codat avec un seul endpoint webhook pour plusieurs clients, vous pouvez filtrer les appels webhook par client.

L'en-tête HTTP de l'appel webhook standard contient un `X-Codat-ClientId` qui identifie de manière unique chaque compte client.

## Sécurité des webhooks

Si vous souhaitez sécuriser vos endpoints webhook, vous pouvez ajouter un en-tête `Authorization` aux notifications que Codat envoie en utilisant les paramètres sur la page Paramètres du portail, ou en savoir plus sur la [sécurité des webhooks](/using-the-api/webhooks/legacy/core-rules-webhooksecurity).

| Méthode ou schéma d'autorisation | Description                                                                                                          |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Basic                            | Un nom d'utilisateur et un mot de passe encodés en base-64 sont ajoutés à l'en-tête d'autorisation de la requête HTTP. |
| Bearer                           | Une valeur personnalisée ou un jeton est ajouté à l'en-tête d'autorisation.                                         |
