---
title: "Tester votre intégration WooCommerce"
description: "Testez notre intégration WooCommerce en lisant des données d'exemple vers une entreprise de test"
sidebar_label: Tests
---

Codat recommande de tester votre intégration avant d'envoyer des URL Link aux clients.

Lorsque vous avez [configuré et activé WooCommerce](/integrations/commerce/woocommerce/commerce-woocommerce-setup), vous êtes prêt à tester le processus d'autorisation pour votre intégration et à récupérer des données commerce d'exemple. Vous devrez :

- Configurer une entreprise de test dans le <a href="https://app.codat.io" target="_blank"> portail Codat</a>.
- Générer une URL Link pour connecter votre entreprise de test à votre boutique en ligne.
- Récupérer les données commerce.

## Prérequis

Avant de commencer à tester WooCommerce, assurez-vous d'avoir :

- Configuré l'intégration WooCommerce.
- Créé une boutique en ligne pour tester l'intégration ou avoir accès à une boutique en ligne que vous pouvez connecter au portail. Notez que vous n'êtes pas obligé d'utiliser une boutique WooCommerce pour les tests, mais si vous le faites, des frais supplémentaires peuvent s'appliquer. Veuillez visiter le [site web de WooCommerce](https://woocommerce.com/hosting-solutions/) pour plus de détails.
- Mis à jour vos [paramètres de synchronisation](/integrations/commerce/commerce-sync-settings) pour activer les types de données commerce.

## Configurer une entreprise de test

1. Connectez-vous au <a href="https://app.codat.io" target="_blank">portail Codat</a>.
2. Accédez à **Entreprises**.
3. Sur le côté droit de la page, sélectionnez **Nouvelle entreprise**.
4. Entrez un nom pour votre entreprise de test et sélectionnez **Ajouter**.
5. Gardez la page **Entreprises** ouverte dans un onglet de navigateur séparé. Vous en aurez besoin pour la prochaine étape du processus.

## Générer une URL Link et connecter votre entreprise de test à une boutique

1. Sur la page **Entreprises** du portail Codat, trouvez l'entreprise de test que vous avez créée précédemment.
2. À côté du nom de l'entreprise, sélectionnez **Demander des données**.
3. La boîte de dialogue **URL Link** s'affiche.
4. Collez l'URL Link dans votre navigateur, ce qui vous amène à [Link hébergé](/auth-flow/authorize-hosted-link).
5. Choisissez **WooCommerce**, entrez l'URL de la boutique de test et suivez les instructions à l'écran.

## Récupérer les données commerce d'exemple

Pour vous assurer que les données commerce ont été lues avec succès dans le portail Codat :

1. Accédez au portail Codat où vous avez activé votre intégration.
2. Dans la barre de navigation, sélectionnez **Entreprises**, puis sélectionnez l'entreprise de test que vous avez créée.
3. Sélectionnez **Données > Commerce** pour voir les données de tous les types de données Commerce.
4. Si aucune donnée n'est affichée, cliquez sur **Actualiser les données**. Vous pouvez également afficher l'**Historique de lecture** pour vérifier l'état des synchronisations de données précédentes.
