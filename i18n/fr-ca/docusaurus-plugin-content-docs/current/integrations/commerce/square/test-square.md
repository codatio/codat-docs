---
title: "Tester votre intégration Square"
description: "Testez notre intégration Square en lisant des données d'exemple vers une entreprise de test"
sidebar_label: Tests
---

Vous pouvez utiliser l'intégration Square Sandbox pour lire des données de test de Square dans Codat.

Vous devrez :

- Configurer une entreprise de test dans le portail Codat.
- Générer une URL Link puis connecter votre entreprise de test à votre application Square, en utilisant un compte de test Square Sandbox.
- Récupérer des données de test depuis Square.

## Prérequis

D'abord, [configurez votre intégration Square](/integrations/commerce/square/commerce-square-setup).

- Dans Square Developer, assurez-vous d'avoir activé **Sandbox** dans les paramètres de configuration de votre application.
- Dans Codat, assurez-vous d'avoir configuré l'intégration **Square Sandbox**.

Pour récupérer et afficher les données commerce de votre entreprise de test, vous devez ajouter des transactions d'exemple au compte de test Square Sandbox que vous souhaitez utiliser. Pour obtenir de l'aide pour ajouter des transactions de test, consultez <a href="https://developer.squareup.com/docs/devtools/sandbox/overview" target="_blank">Aperçu du Sandbox</a> dans la documentation Square.

## Configurer une entreprise de test

Dans le <a href="https://app.codat.io/" target="_blank">portail Codat</a> :

1. Dans la barre de navigation, cliquez sur **Entreprises**.
2. Cliquez sur **Nouvelle entreprise**.
3. Dans la boîte de dialogue **Ajouter une nouvelle entreprise**, entrez un nom pour votre entreprise de test, tel que `square-test`, puis cliquez sur **Ajouter**.
   L'URL Link pour votre entreprise de test s'affiche.

Gardez la page **Entreprises** ouverte dans votre navigateur.

## Connecter votre entreprise de test à votre compte de test Square Sandbox

Testez le processus d'autorisation que vos clients verront lorsqu'ils connecteront leur compte Square dans Link.

1. Connectez-vous à <a href="https://developer.squareup.com/" target="_blank">Square Developer</a>.
2. Cliquez sur **Compte > Tableau de bord développeur** pour afficher la page **Applications**.
3. Sous **Comptes de test Sandbox**, ouvrez le **Compte de test par défaut**, ou un autre compte de test, pour ouvrir le tableau de bord du vendeur Sandbox. Gardez cette page ouverte dans votre navigateur ou l'autorisation au compte Sandbox échouera dans Link.
4. Dans le portail Codat, cliquez sur **Entreprises** dans la barre de navigation.
5. Survolez votre entreprise de test, puis cliquez sur **URL Link**. La boîte de dialogue **Intégration** s'affiche.
6. Copiez l'**URL Link** et collez-la dans un nouvel onglet de navigateur. Cela charge [Link hébergé](/auth-flow/authorize-hosted-link).

7. Complétez les étapes dans Link ; les étapes exactes affichées dépendent de vos paramètres Link. Vous devrez :

8. Sélectionner **Square Sandbox** comme logiciel commerce auquel se connecter.

<img src="/img/old/5b21f24-link-site-select-square-sandbox.png" />

9. Autoriser l'accès aux types de données listés.

10. La page **Connexion réussie** dans Link s'affiche avec le message : « Vous avez connecté Square Sandbox. »

11. Complétez le flux Link, puis cliquez sur **Terminer**.

## Récupérer les données commerce de test

Assurez-vous que les données commerce de test depuis Square sont lues avec succès dans Codat.

Dans le <a href="https://app.codat.io/" target="_blank">portail Codat</a> :

1. Dans la barre de navigation, cliquez sur **Entreprises**.

2. Cliquez sur le nom de votre entreprise de test pour afficher les données de l'entreprise.

3. Optionnellement, cliquez sur **Historique de lecture** pour vérifier la progression de la synchronisation initiale (si configurée dans vos paramètres de synchronisation). Vous pouvez également cliquer sur **Actualiser les données**.

4. Cliquez sur l'onglet **Données > Commerce**.

5. Utilisez les onglets pour afficher les données de test qui ont été lues depuis Square. Par exemple, cliquez sur **Produits** ou **Commandes**.

:::info
Les données de test ne sont disponibles que pour les types de données pris en charge pour lesquels des données de test existent dans Square.
:::
