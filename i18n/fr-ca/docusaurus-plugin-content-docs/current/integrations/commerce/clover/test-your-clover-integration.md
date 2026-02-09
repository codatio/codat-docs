---
title: "Tester votre intégration Clover"
description: "Testez notre intégration Clover en lisant des données sandbox vers une entreprise test"
sidebar_label: Testing
---

Codat recommande de tester votre intégration avant d'envoyer des URL link aux clients.

Lorsque vous avez [configuré votre intégration Clover](/integrations/commerce/clover/set-up-your-clover-integration), vous êtes prêt à tester le processus d'autorisation pour votre intégration. Vous devrez :

- Configurer une entreprise test dans le [portail Codat](https://app.codat.io).
- Générer une URL Link pour connecter votre entreprise test à votre application Clover.
- Récupérer des données commerce.

## Configurer une entreprise test

1. Accédez au portail Codat où vous avez activé votre intégration et connectez-vous.
2. Allez à **Companies**.
3. Sur le côté droit de la page, cliquez sur **Add new company**.
4. Entrez un nom pour votre entreprise test et sélectionnez **Add**.
5. Gardez la page **Companies** ouverte dans un onglet de navigateur séparé. Vous en aurez besoin pour l'étape suivante du processus.

## Générer une URL link et connecter votre entreprise test à votre application Clover

1. Sur la page **Companies** du portail Codat, trouvez l'entreprise test que vous avez créée précédemment.
2. À côté du nom de l'entreprise, sélectionnez **Request data**.
3. La boîte de dialogue **Links URL** s'affiche.
4. En bas de la boîte de dialogue **Links URL**, copiez l'URL.
5. Collez l'URL link dans votre navigateur, ce qui vous amène à Codat Link.
6. Choisissez **Clover** puis **Next**.
7. Vous serez invité à autoriser l'accès aux données commerce et à vous connecter à votre compte Clover dans Sandbox.

## Récupérer des données commerce

Pour vous assurer que les données commerce ont été lues avec succès dans le portail Codat :

1. Accédez au portail Codat où vous avez activé votre intégration.
2. Dans la barre de navigation, sélectionnez **Companies**, puis sélectionnez l'entreprise test que vous avez créée.
3. Sélectionnez **Commerce API** pour voir les données pour tous les types de données Commerce.
4. Si aucune donnée n'est affichée, cliquez sur **Refresh data**. Vous pouvez également afficher **Read history** pour vérifier le statut des synchronisations de données précédentes.
