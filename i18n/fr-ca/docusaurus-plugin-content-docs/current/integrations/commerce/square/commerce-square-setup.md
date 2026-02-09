---
title: "Configurer l'intégration Square"
description: "Découvrez notre intégration API avec Square"
sidebar_label: Configuration
---

Configurez l'intégration Square pour accéder aux données commerce de clients qui utilisent Square pour accepter des paiements.

La page suivante explique comment configurer à la fois les intégrations Sandbox et de production. [Tester votre intégration Square](/integrations/commerce/square/test-square) explique comment utiliser l'intégration Square Sandbox pour lire des données d'exemple dans Codat.

## Environnements pris en charge

Deux intégrations Square sont disponibles dans le portail Codat :

- **Square Sandbox** pour se connecter aux applications dans le Sandbox Square.
- **Square** pour se connecter aux applications dans l'environnement de production Square.

Vous définissez l'environnement pour chaque application à l'aide des boutons **Sandbox** et **Production** dans les paramètres de configuration d'une application. Ces boutons sont situés en haut de chaque page dans les paramètres d'une application :

<img src="/img/old/77b4e8a-square-sandbox-test-app.png" />

Les identifiants d'une application sont différents selon que le Square Sandbox ou la production est activé pour l'application. Pour activer l'accès complet à la production pour une application, vous devez d'abord activer votre compte Square.

Votre compte Square Developer inclut un _compte de test Sandbox_ par défaut contenant des données d'exemple, telles que des clients, des transactions et des articles. Vous pouvez créer jusqu'à quatre comptes de test Sandbox en plus du compte de test par défaut. Pour obtenir des conseils sur la création de données d'exemple dans le Square Sandbox à l'aide d'un compte de test Sandbox, consultez la section <a href="https://developer.squareup.com/docs/devtools/sandbox/overview" target="_blank">Aperçu du Sandbox</a> de la documentation Square.

Nous recommandons de commencer avec le Square Sandbox, afin de pouvoir récupérer et vérifier des données d'exemple. Vous pouvez également vous assurer que vous êtes satisfait du parcours du flux Link avant d'envoyer l'URL Link à vos clients.

## Créer une application Square et obtenir vos identifiants

Créez une application dans Square, activez le sandbox ou la production, puis récupérez les identifiants sécurisés de l'application à utiliser dans Codat. Si vous prévoyez de [tester l'intégration](/integrations/commerce/square/test-square), assurez-vous d'activer le sandbox plutôt que la production.

1. Visitez <a className="external" href="https://developer.squareup.com/" target="_blank">Square Developer</a> et connectez-vous à votre compte Square.

2. Cliquez sur **Compte > Tableau de bord développeur** pour afficher la page **Applications**.

3. Cliquez sur **Créer votre première application** ou le symbole plus.

4. Dans la boîte de dialogue **Créer une application**, entrez un nom pour votre application, puis cliquez sur **Enregistrer**.

5. Sur la page **Applications**, cliquez sur **Ouvrir** sur l'application que vous avez créée.

6. Utilisez les boutons **Sandbox** et **Production** pour sélectionner l'environnement dans lequel configurer l'application.

7. Dans le volet de gauche, cliquez sur **OAuth**.

8. Sur la page **OAuth**, entrez l'URL suivante dans la boîte **URL de redirection Sandbox** ou la boîte **URL de redirection Production** :
   `https://square.codat.io/oauth/callback`

9. Cliquez sur **Afficher** dans la boîte **Secret d'application Sandbox** ou la boîte **Secret d'application Production**.

10. Cliquez sur **Enregistrer**.

Gardez la page **OAuth** ouverte dans votre navigateur pour vous aider avec la procédure suivante.

## Ajouter les identifiants sécurisés de votre application à l'intégration

Ensuite, ajoutez les identifiants sécurisés de votre application Square à l'intégration Square correspondante dans le portail Codat.

Dans le <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Dans la barre de navigation, sélectionnez **Paramètres > Intégrations > Commerce**.

2. Sélectionnez l'intégration correcte selon que vous configurez votre application dans le Square Sandbox ou en production.
   - Pour le sandbox, cliquez sur **Configurer** à côté de l'intégration **Square Sandbox**.
   - Pour la production, cliquez sur **Configurer** à côté de l'intégration **Square**.
     La page **Paramètres d'intégration** s'affiche.

3. Sous **Accès aux données d'entreprise**, configurez la fréquence de synchronisation autorisée pour l'intégration. Sélectionnez **Autoriser la synchronisation de données ponctuelle…** ou **Autoriser la synchronisation continue des données**.

4. Entrez l'ID d'application pour votre application Square dans la boîte **ID d'application**.
   - Pour le sandbox, entrez l'**ID d'application Sandbox** de Square.
   - Pour la production, entrez l'**ID d'application Production** de Square.

5. Entrez le secret d'application pour votre application Square dans la boîte **Secret d'application**.
   - Pour le sandbox, entrez le **Secret d'application Sandbox** de Square.
   - Pour la production, entrez le **Secret d'application Production** de Square.

6. Cliquez sur **Enregistrer**.

## Activer l'intégration Square

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Intégrations Commerce**</a>.
2. Localisez **Square** ou **Square Sandbox** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Vérifier les paramètres de synchronisation commerce

La synchronisation de tous les types de données commerce doit être activée avant de pouvoir lire les transactions commerce de Square vers Codat. Suivez les étapes dans [Paramètres de synchronisation commerce](/integrations/commerce/commerce-sync-settings) ; vous n'avez besoin de le faire qu'une seule fois.
