---
title: "Tester votre intégration Stripe"
description: "Testez notre intégration Stripe en lisant des données d'exemple vers une entreprise de test"
sidebar_label: Tests
---

Vous pouvez utiliser l'intégration Stripe Test pour lire des données de test de Stripe vers Codat.

:::info Tests dans Stripe
Stripe vous permet de tester des comptes en utilisant des [clés API de test et des données de test](https://stripe.com/docs/connect/testing), telles que des numéros de compte bancaire, des numéros de carte, etc.
:::

## Prérequis

Configurez l'intégration Stripe Test en suivant les tâches dans [Configurer votre intégration Stripe](/integrations/commerce/stripe/commerce-stripe-setup).

## Ajouter une entreprise de test

Dans le <a className="external" href="https://app.codat.io/" target="_blank">portail Codat</a> :

1. Sélectionnez **Entreprises > Nouvelle entreprise**.
2. Dans la boîte de dialogue **Ajouter une nouvelle entreprise**, entrez un nom pour votre entreprise de test, comme `stripe-test`, puis cliquez sur **Ajouter**. L'**URL Link** s'affiche dans la boîte de dialogue.

## Créer un compte de test Stripe, ajouter des données de test et accéder aux identifiants

1. Connectez-vous au <a className="external" href="https://dashboard.stripe.com/" target="_blank">tableau de bord des développeurs Stripe</a>.
2. Dans votre profil Stripe, créez un nouveau compte pour les tests. Le compte sera créé en mode test et ne peut pas être basculé en mode direct sans activation.
   1. Sélectionnez le menu du compte en haut à gauche.
   2. Sélectionnez **Nouveau compte**.
   3. Entrez un nom pour votre compte de test, puis cliquez sur **Créer un compte**.

3. Ajoutez des données de test compatibles à votre compte ; par exemple Clients, Produits, Litiges et Paiements.
4. Complétez les étapes 1 à 6 dans [S'inscrire en tant que plateforme Stripe Connect](/integrations/commerce/stripe/commerce-stripe-setup#register-as-a-stripe-connect-platform) pour accéder à vos identifiants de test pour le nouveau compte.

## Connecter votre entreprise de test à votre compte de test Stripe

Testez le processus d'autorisation que vos clients verront lorsqu'ils connecteront leur compte Stripe dans Link.

Dans le <a className="external" href="https://app.codat.io/" target="_blank">portail Codat</a> :

1. Sélectionnez **Entreprises**.
1. Survolez votre entreprise de test, puis cliquez sur **Demander des données**. La boîte de dialogue **Intégration** s'affiche.
1. Copiez l'**URL Link** puis collez-la dans un nouvel onglet de navigateur pour charger le site Link.
1. Complétez les étapes dans Link ; les étapes exactes affichées dépendent de vos paramètres Link. Vous devrez :
   1. Sélectionner **Stripe Test** comme logiciel commerce auquel se connecter.
   2. Vous connecter à votre compte Stripe si demandé.
   3. Sur la page **Sélectionnez le compte que vous souhaitez connecter**, sélectionnez votre compte Stripe de test. Vous ne pouvez pas utiliser votre compte Stripe principal à des fins de test.
   4. Cliquez sur **Ignorer ce formulaire**. La page **Connexion réussie** dans Link s'affiche.
   5. Complétez le flux Link.

Un nouveau compte Standard connecté est créé et est visible sur la page **Connect** dans Stripe.

## Récupérer les données commerce de test

Testez l'intégration en lisant des données commerce de test depuis Stripe vers Codat.

Dans le <a className="external" href="https://app.codat.io/" target="_blank">portail Codat</a> :

1. Sélectionnez **Entreprises**, puis sélectionnez votre entreprise de test.
1. Cliquez sur **Actualiser les données**.
1. Sélectionnez **Données > Commerce**.
1. Utilisez le menu déroulant **Type de données** pour afficher les données de test de votre compte de test Stripe. Par exemple, sélectionnez **Produits** ou **Transactions**.

:::info
Les données ne sont disponibles que pour les types de données commerce pris en charge pour lesquels des données de test existent.
