---
title: "Tester votre intégration PayPal"
description: "Testez votre intégration PayPal en lisant des données sandbox vers une entreprise test"
sidebar_label: Testing
unlisted: true
---

Lorsque vous avez configuré votre intégration PayPal, vous êtes prêt à tester le processus d'autorisation pour votre intégration. Vous devrez :

- Créer un compte développeur PayPal et configurer un sandbox PayPal
- Configurer une entreprise test
- Générer une URL Link pour connecter votre entreprise test à votre sandbox PayPal
- Récupérer des données commerce

## Prérequis

Avant de commencer à tester PayPal, assurez-vous d'avoir :

- [Configuré votre intégration PayPal](/integrations/commerce/paypal/set-up-paypal-in-production).
- Mis à jour vos [paramètres de synchronisation](/integrations/commerce/commerce-sync-settings) pour activer les types de données commerce.

## Créer un compte développeur PayPal et configurer un sandbox PayPal

Pour créer des comptes PayPal sandbox à utiliser pour les tests, vous devrez :

1. Vous inscrire à PayPal sur https://paypal.com si vous n'avez pas encore de compte PayPal.

   Remarque : Le type de compte que vous sélectionnez et les détails saisis ne sont pas particulièrement pertinents ; ce compte est nécessaire uniquement pour accéder au tableau de bord développeur de PayPal (voir étape suivante), et ne sera pas pertinent pour votre intégration avec PayPal

2. Naviguer vers le [tableau de bord développeur de PayPal](https://developer.paypal.com/home) et vous connecter en utilisant votre compte PayPal (créé à l'étape précédente)
3. Une fois connecté, vous pourrez créer des comptes PayPal « factices » dans le sandbox de PayPal. Dans le menu de navigation de la page, cliquez sur Sandbox Accounts sous l'en-tête Testing Tools
4. Vous verrez que PayPal fournit deux comptes sandbox par défaut (un 'Business', un 'Personal') ; vous pouvez également créer le vôtre en cliquant sur Create Account.

   a) L'intégration de Codat ne prend en charge que les comptes Business. Pour tester votre intégration API via Codat, vous devrez créer des comptes Sandbox de type 'Business'

   b) Chaque compte Sandbox a son propre nom d'utilisateur (ID e-mail) et mot de passe, accessibles en cliquant sur l'icône '…' dans la colonne 'Manage Accounts' de la liste Sandbox, et en sélectionnant View/Edit account

5. Une fois que vous avez créé/récupéré les détails d'un compte Sandbox, vous pouvez utiliser l'interface utilisateur de PayPal pour interagir avec les comptes Sandbox. Pour ce faire, naviguez vers https://sandbox.paypal.com/ et connectez-vous en utilisant le nom d'utilisateur et le mot de passe de votre Sandbox PayPal (comme à l'étape 4b ci-dessus)

## Configurer une entreprise test dans le portail Codat

1. Accédez au <a href="https://app.codat.io/#/login" target="_blank">portail Codat</a> et connectez-vous.
2. Allez à **Companies**.
3. Sur le côté droit de la page, sélectionnez **Add new company**.
4. Entrez un nom pour votre entreprise test et sélectionnez **Add**.
5. Gardez la page **Companies** ouverte dans un onglet de navigateur séparé. Vous en aurez besoin pour l'étape suivante du processus.

## Générer une URL link et connecter votre entreprise test à votre application PayPal

Testez le processus d'autorisation que vos clients utiliseront lorsqu'ils connecteront leur compte PayPal.

1. Sur la page Companies du portail Codat, trouvez l'entreprise test que vous avez créée précédemment.
2. À côté du nom de l'entreprise, cliquez sur le bouton « Request Data », et copiez l'URL.
3. Collez l'URL link dans votre navigateur, ce qui vous amène à l'interface utilisateur Codat Link.
4. Choisissez PayPal puis Continue to PayPal.
5. Sur la page Connect de PayPal, choisissez le compte PayPal Sandbox que vous avez créé pour les tests

## Récupérer des exemples de données commerce

Pour vous assurer que les données commerce ont été lues avec succès dans le portail Codat :

1. Accédez au portail Codat où vous avez activé votre intégration.
2. Dans la barre de navigation, sélectionnez **Companies**, puis sélectionnez l'entreprise test que vous avez créée.
3. Sélectionnez **Commerce API** pour voir les données pour tous les types de données Commerce.
4. Si aucune donnée n'est affichée, cliquez sur **Refresh data**. Vous pouvez également afficher **Read history** pour vérifier le statut des synchronisations de données précédentes.
