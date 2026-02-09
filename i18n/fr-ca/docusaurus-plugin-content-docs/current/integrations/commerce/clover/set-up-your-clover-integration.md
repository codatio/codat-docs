---
title: "Configurer l'intégration Clover"
description: "Explorez notre intégration API avec Clover"
sidebar_label: Setup
---

Avant de pouvoir accéder aux données commerce des clients utilisant Clover, vous devez configurer l'intégration. Vous devrez :

- Créer une application dans le portail développeur Clover et récupérer vos identifiants sécurisés (clé API et secret).
- Vous connecter au [portail Codat](https://app.codat.io/).
- Ajouter vos identifiants sécurisés au portail Codat et activer votre intégration Clover.

## Créer une application et récupérer vos identifiants sécurisés

:::note Détails du compte développeur

- Si vous avez déjà un compte développeur Clover, ayez vos détails de compte à portée de main.

- Si ce n'est pas le cas, inscrivez-vous au portail développeur Clover avant de commencer à créer votre application. Notez que le marché de Clover couvre actuellement de nombreuses régions géographiques et chacune se voit attribuer un domaine différent. Créez votre portail développeur en choisissant d'abord votre zone géographique :
  - [États-Unis et Canada](https://www.clover.com)
  - [Royaume-Uni et République d'Irlande/Europe](https://www.eu.clover.com)

- Si vous avez besoin d'un sandbox Clover à des fins de test, inscrivez-vous au [portail développeur Clover Sandbox](https://sandbox.dev.clover.com/developer-home/create-account) avant de commencer à créer votre application

:::

1. Accédez au portail développeur Clover et connectez-vous à votre compte.
2. Sélectionnez **Create App** pour créer une application et obtenir des identifiants API.
3. Remplissez les détails requis pour votre application :
   - Sous **Requested Permissions**, cochez « Read » pour Customers, Inventory, Merchant, Orders et Payments.
   - Définissez le **App type** sur Web.
   - Sous **REST Configuration** entrez `https://clover.codat.io/oauth/callback`

Vous serez dirigé vers votre page d'identifiants API avec l'ID d'application et le secret générés. Gardez cette page ouverte afin de pouvoir récupérer vos clés API à l'étape suivante.

## Ajouter vos identifiants sécurisés au portail Codat et activer votre intégration Clover

1. Connectez-vous au [portail Codat](https://app.codat.io/).
2. Dans la barre de navigation, sélectionnez **Settings > Integrations > Commerce**.
3. Trouvez **Clover**, puis sélectionnez **Set up** pour afficher la page **Integration settings**.
4. Choisissez quel [type d'accès aux données de l'entreprise](/core-concepts/data-type-settings) vous souhaitez avoir pour cette intégration : ponctuel ou continu.
5. Depuis la page **API keys** sur le portail développeur Clover, copiez et collez :
   - La valeur **App ID** dans **Client Id**
   - La valeur **App secret** dans **Client Secret**.

6. Dans le portail Codat, cliquez sur **Save**.

## Activer l'intégration Clover

1. Dans le portail Codat, allez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a>.
2. Localisez **Clover** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Vérifiez vos paramètres de synchronisation dans le portail Codat

S'il s'agit de votre première intégration commerce, mettez à jour vos [paramètres de type de données](/integrations/commerce/commerce-sync-settings) pour activer les types de données commerce.

Vous êtes maintenant prêt à tester votre intégration Clover, ou passez directement à [la configuration d'entreprises](/configure/portal/companies#add-a-new-company) pour vos clients dans le portail Codat.
