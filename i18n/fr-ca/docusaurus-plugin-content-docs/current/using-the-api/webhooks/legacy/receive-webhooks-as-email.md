---
title: "Recevoir des événements webhook par courriel"
description: "Découvrez comment configurer les notifications par courriel lors de la gestion des règles"
---

:::caution Nouveau service webhook disponible

Cette page décrit la fonctionnalité de notre offre webhook héritée. [En savoir plus](/using-the-api/webhooks/overview) sur notre nouveau service webhook et voir comment vous pouvez [migrer](/using-the-api/webhooks/migration-guide) pour l'utiliser à la place.

:::

Vous pouvez choisir de spécifier une adresse courriel comme méthode de notification pour une règle. Ensuite, si les conditions de la règle sont remplies et qu'un événement est déclenché, l'adresse courriel recevra une notification.

La notification est également visible sur la <a href="https://app.codat.io/monitor/alerts" target="_blank">page Événements du portail</a>.

Vous pouvez ajouter des adresses courriel lors de la création d'une nouvelle règle, ou mettre à jour les détails de courriel et de notification pour une règle existante à tout moment. En savoir plus sur la création et la gestion des règles [en utilisant notre portail](/using-the-api/webhooks/legacy/core-rules-create#manage-rules-from-the-codat-portal), et plus d'informations sur les [types de règles](/using-the-api/webhooks/legacy/core-rules-types).

## Configurer les notifications par courriel à l'aide du portail

1. Dans le <a href="https://app.codat.io/" target="_blank">portail Codat</a>, naviguez vers **Paramètres > Webhooks > Règles > Créer une nouvelle règle**.
2. Dans la fenêtre modale **Créer une nouvelle règle**, spécifiez ce qui suit :
   - **Type de règle** pour déterminer quel événement déclenchera une notification,
   - **Entreprise** pour spécifier l'entreprise que vous souhaitez surveiller, ou sélectionnez **Toutes les entreprises** pour que toutes les entreprises déclenchent cette règle,
   - **Adresses courriel à notifier** avec une liste d'adresses courriel séparées par des virgules qui doivent recevoir la notification.
3. Enregistrez vos modifications.

<img
  src="/img/old/e311872-2022-11-16_14-49-03.png"
  alt="Fenêtre modale de création de nouvelle règle dans le portail Codat"
/>

## Configurer les notifications par courriel à l'aide de l'API

1. Utilisez l'endpoint [Create rule](/platform-api#/operations/post-rules) de Codat et complétez les paramètres suivants :
   - `companyId` pour spécifier l'entreprise que vous souhaitez surveiller ou omettez ceci pour appliquer la règle à toutes les entreprises,
   - `type` de règle que vous souhaitez configurer en utilisant son [nom exact](/using-the-api/webhooks/legacy/core-rules-create#manage-rules-from-the-codat-api),
   - Complétez le notificateur `emails` avec un tableau d'adresses courriel qui recevront les notifications.
2. Envoyez la requête pour créer la règle.

```json title="Exemple de création de règle"
{
  "companyId": "4444b724-91b6-4e63-8f8e-9f01888162b",
  "type": "DataConnectionStatusChanged",
  "notifiers": {
    "emails": ["a.user@codat.io, b.user@codat.io"]
  }
}
```
