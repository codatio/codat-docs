---
title: "Configurer l'intégration FreeAgent"
description: "Explorez notre intégration API avec FreeAgent."
sidebar_label: Configuration
---

:::caution Sandbox FreeAgent non pris en charge

L'intégration de Codat ne prend pas en charge la liaison au sandbox FreeAgent.
:::

Avant de pouvoir accéder aux données des clients utilisant FreeAgent pour leur comptabilité, vous devez configurer l'intégration FreeAgent dans le portail Codat. Vous devrez :

- Enregistrer une nouvelle application sur le site développeur de FreeAgent.
- Récupérer les clés sécurisées de votre application.
- Ajouter vos clés sécurisées dans le portail Codat.

## Créer une application FreeAgent et obtenir vos identifiants

Créez une application dans FreeAgent, puis récupérez les identifiants d'application sécurisés à utiliser dans Codat.

1. Visitez le <a className="external" href="https://dev.freeagent.com" target="_blank">site développeur FreeAgent</a> et connectez-vous à votre compte développeur FreeAgent.

2. Dans la barre de navigation, cliquez sur **My Apps**, puis cliquez sur **Create New App**.

3. Saisissez un nom et une description d'application.

4. Saisissez l'URL suivante dans la case **OAuth Redirect URIs** : `https://freeagent.codat.io/oauth/callback`

   Vous n'avez pas besoin de cocher la case **Enable Accountancy Practice API**.

<img src="/img/old/948044e-FreeAgent_-_app_creation.PNG" />

5. Sélectionnez **Create App**.

   L'**OAuth identifier** et l'**OAuth secret** pour cette application s'affichent. Copiez ces identifiants pour les utiliser dans la procédure suivante.

<img src="/img/old/d71284b-FreeAgent_-_app_credentials.PNG" />

## Ajouter les clés sécurisées de votre application au portail Codat

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.

2. Localisez **FreeAgent** et cliquez sur **Set up**.

3. Sous **Integration settings**, saisissez les valeurs pour le **Client ID** et le **Client secret** du site développeur FreeAgent.
   - Dans la case **Client ID**, saisissez l'**OAuth identifier** de votre application FreeAgent.
   - Dans la case **Client Secret**, saisissez l'**OAuth secret** de votre application FreeAgent.

4. Cliquez sur **Save**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.

5. Dans la boîte de dialogue **Enable FreeAgent**, sélectionnez si vous souhaitez activer l'intégration maintenant ou plus tard.

:::note

Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

## Activer l'intégration FreeAgent

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **FreeAgent** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Liaison à FreeAgent

Lors de la liaison de votre application FreeAgent à Codat, il vous sera demandé d'approuver la demande d'accès de l'application aux données de votre compte FreeAgent. Assurez-vous d'approuver cette demande pour lier l'application avec succès.

Pour obtenir de l'aide sur les applications FreeAgent, consultez <a className="external" href="https://dev.freeagent.com/docs/quick_start" target="_blank">FreeAgent Quick Start</a> dans la documentation FreeAgent.
