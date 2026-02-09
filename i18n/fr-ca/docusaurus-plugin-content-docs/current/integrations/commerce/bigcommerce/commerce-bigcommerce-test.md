---
title: "Tester votre intégration BigCommerce"
description: "Testez notre intégration BigCommerce en lisant des données sandbox vers une entreprise test"
sidebar_label: Testing
---

Vous pouvez tester votre intégration BigCommerce en récupérant des exemples de données d'une boutique sandbox vers une entreprise test dans Codat. Cela vous permet de tester le site Link que vos clients PME utiliseront lorsqu'ils connecteront leurs boutiques BigCommerce à Codat via l'intégration.

Vous pouvez visualiser les exemples de données commerce dans le portail Codat.

## Prérequis

- Mettez à jour vos [paramètres de type de données](/integrations/commerce/commerce-sync-settings) pour activer les types de données commerce.

## Ajouter une entreprise test

Dans le <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Cliquez sur **Companies > New company**.
1. Dans la boîte de dialogue **Add new company**, entrez un nom pour votre entreprise test, comme `bigcommerce-test`, puis cliquez sur **Add**. L'URL Link s'affiche dans la boîte de dialogue.

## Créer une boutique sandbox et ajouter des exemples de données

Vous devez être un partenaire technologique BigCommerce pour créer une boutique sandbox.

1. Suivez les étapes dans <a className="external" href="https://developer.bigcommerce.com/docs/ZG9jOjM4MzMyNTE-create-a-sandbox-store" target="_blank">Create a Sandbox Store</a> dans le centre de développement BigCommerce.
1. Connectez-vous à votre tableau de bord BigCommerce.
1. Depuis votre tableau de bord, ajoutez quelques commandes et clients d'exemple à votre boutique (des produits d'exemple sont créés pour vous).

## Connecter votre entreprise test à votre boutique sandbox

Testez le flux d'authentification que vos clients utiliseront lorsqu'ils connecteront leur boutique BigCommerce en utilisant Link.

Dans le <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Cliquez sur **Companies** puis localisez l'entreprise test que vous avez créée.
2. Cliquez sur l'icône **Link** à côté de l'entreprise test.
3. Entrez l'URL Link dans un nouvel onglet du navigateur.
4. Suivez les étapes dans [Client PME : Authentifier et connecter vos données commerce](/integrations/commerce/bigcommerce/commerce-bigcommerce-setup#smb-customer-authenticate-and-connect-your-commerce-data).

## Récupérer des exemples de données commerce

Visualisez des exemples de données commerce de votre boutique sandbox BigCommerce dans votre entreprise test.

Dans le <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Cliquez sur **Companies** puis sélectionnez l'entreprise test que vous avez créée.
2. Sélectionnez **Commerce API** dans la liste des produits.
3. Visualisez les exemples de données commerce de votre boutique sandbox.

   Si aucune donnée n'est affichée, cliquez sur **Refresh data**.
