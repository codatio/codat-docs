---
title: "Configurer l'intégration Zettle"
description: "Découvrez notre intégration API avec Zettle"
createdAt: "2021-01-25T14:14:47.846Z"
updatedAt: "2023-01-06T17:01:17.148Z"
---

Avant de pouvoir accéder aux données commerce de clients utilisant Zettle, vous devez configurer une intégration en direct. Vous devrez :

- Vous connecter au [portail Codat](https://app.codat.io/).
- Créer une application dans le <a className="external" href="https://www.izettle.com/gb/developer" target="_blank">portail développeur Zettle</a> et récupérer vos identifiants sécurisés (clé et secret API).
- Ajouter vos identifiants sécurisés au portail Codat et activer votre intégration Zettle.
- Vérifier vos paramètres de synchronisation.

Pour utiliser l'intégration, vous devez être situé dans un marché pris en charge par Zettle.

## Créer une application et récupérer vos identifiants sécurisés

:::note Détails du compte développeur

- Si vous avez déjà un compte développeur Zettle, ayez vos détails de compte à portée de main.

- Sinon, inscrivez-vous au <a href="https://www.izettle.com/gb/developer" target="_blank"> portail développeur Zettle</a> avant de commencer à créer votre application.

:::

1. Accédez au <a className="external" href="https://www.izettle.com/gb/developer" target="_blank">portail développeur Zettle</a> et connectez-vous à votre compte.
2. Cliquez sur **Créer une nouvelle application** et accédez aux identifiants de l'API publique.
3. Remplissez les détails requis. Dans la boîte URL de redirection OAuth, collez ce qui suit : `https://izettle.codat.io/oauth/callback`
4. Cliquez sur **Obtenir des identifiants** pour sauvegarder vos modifications. Vous serez redirigé vers la page Vos identifiants API avec l'ID client et le secret générés. Gardez cette page ouverte afin de pouvoir récupérer vos clés API à l'étape suivante.

## Ajouter vos identifiants sécurisés au portail Codat et activer votre intégration Zettle

1. Connectez-vous au portail Codat.
2. Dans la barre de navigation, sélectionnez **Paramètres > Intégrations > Commerce**.
3. Trouvez **Zettle**, puis sélectionnez **Configurer** pour afficher la page **Paramètres d'intégration**.
4. Depuis la page **Clés API** sur le portail développeur Zettle, copiez et collez :

- La valeur **ID client** dans **Clé client**
- La valeur **Secret client** dans **Secret client**.

5. Dans le portail Codat, cliquez sur **Enregistrer**.

## Activer l'intégration Zettle

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Intégrations Commerce**</a>.
2. Localisez **Zettle** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Vérifier vos paramètres de synchronisation dans le portail Codat

S'il s'agit de votre première intégration commerce, mettez à jour vos [paramètres de type de données](/integrations/commerce/commerce-sync-settings) pour activer les types de données commerce.

Vous êtes maintenant prêt à [configurer des entreprises](/configure/portal/companies#add-a-new-company) pour vos clients dans le portail Codat.
