---
title: "Tester votre intégration Shopify"
description: "Testez votre intégration Shopify en lisant des données d'exemple vers une entreprise de test"
sidebar_label: Tests
---

Testez votre intégration Shopify en lisant des données commerce depuis une boutique de développement vers une entreprise de test dans Codat. Cela vous permet de tester le flux Link que vos clients PME verront lorsqu'ils partageront leurs données commerce depuis Shopify.

## Prérequis

- Configurez votre intégration Shopify en utilisant soit la méthode de connexion par applications personnalisées soit par applications publiques.
- Mettez à jour vos [paramètres de type de données Commerce](/integrations/commerce/commerce-sync-settings) pour activer les types de données commerce.

## Ajouter une entreprise de test

Dans le portail Codat :

1. Cliquez sur **Entreprises > Nouvelle entreprise**.
1. Dans la boîte de dialogue **Ajouter une nouvelle entreprise**, entrez un nom pour votre entreprise de test, comme `shopify-test`, puis cliquez sur **Ajouter**. L'URL Link pour votre entreprise de test s'affiche.

Gardez la page **Entreprises** ouverte dans votre navigateur.

## Créer une boutique de développement et des données d'exemple

1. Connectez-vous au site <a href="https://developers.shopify.com/" target="_blank">Shopify Partners</a> avec vos identifiants de compte partenaire.
2. Sélectionnez **Boutiques > Ajouter une boutique**.
3. Sur la page **Ajouter une boutique**, sélectionnez **Boutique de développement**.
4. Entrez tous les détails demandés et notez l'**URL de la boutique**.

   Assurez-vous que la case **Créer une boutique avec transfert désactivé pour utiliser un aperçu développeur** est cochée, puis choisissez **Shopify Markets** dans la liste déroulante :

   <img src="/fr-ca/img/old/e6d56b7-Screenshot_2022-09-21_170904.png" />

5. Cliquez sur **Enregistrer**.

Ensuite, vous devez ajouter manuellement des données d'exemple à votre boutique de développement. Par exemple, ajoutez des produits et des commandes.

## Connecter votre entreprise de test à votre boutique de développement

Testez le processus d'autorisation que vos clients verront lorsqu'ils connecteront leur compte Shopify en utilisant Link.

Dans le portail Codat :

1. Cliquez sur **Entreprises** puis localisez l'entreprise de test que vous avez créée dans la tâche précédente.

2. À côté du nom de l'entreprise, cliquez sur **Demander des données**.

3. Dans la boîte de dialogue **Intégration**, copiez l'**URL Link**.

4. Collez l'URL Link dans un nouvel onglet de navigateur pour charger Link.

   Les étapes suivantes s'appliquent si vous utilisez des applications publiques. Si vous utilisez des applications personnalisées, passez à l'étape six.

5. Complétez les étapes dans Link ; les étapes exactes affichées dépendent de vos paramètres Link. Vous devrez :
   1. Lorsqu'on vous demande de sélectionner votre logiciel commerce, sélectionnez la tuile **Shopify**.
   2. Autoriser l'accès aux types de données commerce listés.
   3. Sur l'écran Shopify, entrez le nom de votre boutique de développement puis cliquez sur **Continuer**.
   4. Connectez-vous à votre boutique de développement, si demandé.

Lorsque le flux Link est terminé, votre boutique de développement s'ouvre et votre application est automatiquement installée dans la boutique.

<img src="/fr-ca/img/old/d2bf06b-shopify-development-store-app-installed.png" />

6. (Si vous utilisez des applications personnalisées.) Complétez les étapes dans Link ; les étapes exactes affichées dépendent de vos paramètres Link. Vous devrez :
   1. Sur l'écran **Connectez votre boutique Shopify**, entrez le nom de votre boutique de développement et votre jeton d'accès API, puis cliquez sur **Continuer**.

Lorsque le flux Link est terminé, votre boutique de développement s'ouvre et votre application personnalisée est automatiquement installée dans la boutique.

## Récupérer les données commerce

Dans le portail Codat, lisez des données commerce d'exemple depuis Shopify vers votre entreprise de test :

1. Cliquez sur **Entreprises** puis sélectionnez l'entreprise de test que vous avez créée dans la tâche précédente.
1. Cliquez sur **Données > Commerce** dans le menu de navigation latéral.
1. Affichez les données commerce d'exemple depuis votre boutique de développement Shopify.

   Si aucune donnée n'est affichée, cliquez sur **Mettre en file d'attente la synchronisation**.
