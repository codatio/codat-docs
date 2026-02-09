---
title: "Tester votre intégration SumUp"
slug: "test-sumup-1"
description: "Testez notre intégration SumUp en lisant des données d'exemple vers une entreprise de test"
sidebar_label: Tests
unlisted: true
---

Codat recommande de tester votre intégration avant d'envoyer des URL Link aux clients.

Lorsque vous avez [configuré votre intégration SumUp](/integrations/commerce/sumup/set-up-sumup-in-production-1), vous êtes prêt à tester le processus d'autorisation pour votre intégration. Vous devrez :

- Configurer une entreprise de test dans le <a href="https://app.codat.io/" target="_blank">portail Codat</a>.
- Créer une application de test correspondante dans SumUp.
- Générer une URL Link pour connecter votre entreprise de test à votre application de test dans SumUp.
- Récupérer les données commerce.

## Configurer une entreprise de test

1. Accédez au portail Codat où vous avez activé votre intégration et connectez-vous.
2. Accédez à **Entreprises**.
3. Sur le côté droit de la page, cliquez sur **Ajouter une nouvelle entreprise**.
4. Entrez un nom pour votre entreprise de test et sélectionnez **Ajouter**.
5. Gardez la page **Entreprises** ouverte dans un onglet de navigateur séparé. Vous en aurez besoin pour la prochaine étape du processus.

## Créer une application de test dans SumUp

1. Connectez-vous à votre compte SumUp.
2. Ajoutez des produits, définissez leurs prix et effectuez des paiements.

## Générer une URL Link et connecter votre entreprise de test à votre application SumUp

1. Sur la page **Entreprises** du portail Codat, trouvez l'entreprise de test que vous avez créée précédemment.
2. À côté du nom de l'entreprise, sélectionnez **Demander des données**.
3. La boîte de dialogue **URL Links** s'affiche.
4. Copiez l'URL et collez l'URL Link dans votre navigateur, ce qui vous amène à Codat Link.
5. Trouvez l'intégration **SumUp**, sélectionnez-la et suivez les instructions à l'écran.
6. Il vous sera demandé de vous connecter à votre compte SumUp pour confirmer la connexion.

## Récupérer les données commerce d'exemple

Pour vous assurer que les données commerce ont été lues avec succès dans le portail Codat :

1. Accédez au portail Codat où vous avez activé votre intégration.
2. Dans la barre de navigation, sélectionnez **Entreprises**, puis sélectionnez l'entreprise de test que vous avez créée.
3. Sélectionnez **Données > Commerce** pour voir les données de tous les types de données Commerce.
4. Si aucune donnée n'est affichée, cliquez sur **Actualiser les données**. Vous pouvez également afficher l'**Historique de lecture** pour vérifier l'état des synchronisations de données précédentes.
