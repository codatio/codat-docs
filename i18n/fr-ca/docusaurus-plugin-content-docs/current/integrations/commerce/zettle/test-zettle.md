---
title: "Tester votre intégration Zettle"
description: "Testez notre intégration Zettle en lisant des données d'une boutique de test vers une entreprise de test"
createdAt: "2021-01-20T16:12:07.162Z"
updatedAt: "2022-12-16T16:51:21.207Z"
---

Codat recommande de tester votre intégration avant d'envoyer des URL Link aux clients.

Lorsque vous avez [configuré Zettle](/integrations/commerce/zettle/commerce-zettle-setup), vous êtes prêt à tester le processus d'autorisation pour votre intégration. Vous devrez :

- Configurer une entreprise de test dans le [portail Codat](https://app.codat.io).
- Générer une URL Link pour connecter votre entreprise de test à la boutique Zettle.
- Récupérer les données commerce.

## Configurer une entreprise de test

1. Accédez au portail Codat où vous avez activé votre intégration et connectez-vous.
2. Accédez à **Entreprises**.
3. Sur le côté droit de la page, cliquez sur **Ajouter une nouvelle entreprise**.
4. Entrez un nom pour votre entreprise de test et sélectionnez **Ajouter**.
5. Gardez la page **Entreprises** ouverte dans un onglet de navigateur séparé. Vous en aurez besoin pour la prochaine étape du processus.

## Créer une boutique de test dans Zettle

:::note Compte Zettle

- Si vous avez déjà un compte Zettle, ayez vos détails de compte à portée de main.
- Sinon, <a href="https://register.izettle.com//" target="_blank">créez un compte</a> avant de commencer à créer votre boutique de test.

:::

1. Téléchargez l'application Zettle sur votre smartphone ou votre tablette. Vous pouvez trouver l'application sur l'App Store (pour iOS) ou Google Play (pour Android).
2. Connectez-vous à votre compte Zettle. Ajoutez des produits, définissez leurs prix et effectuez quelques commandes.

## Générer une URL Link et connecter votre entreprise de test à votre boutique Zettle

1. Sur la page **Entreprises** du portail Codat, trouvez l'entreprise de test que vous avez créée précédemment.
2. À côté du nom de l'entreprise, sélectionnez **Demander des données**.
3. La boîte de dialogue **URL Links...** s'affiche.
4. En bas de la boîte de dialogue **URL Link...**, copiez l'URL pour **Commerce**.
5. Collez l'URL Link dans votre navigateur, ce qui vous amène à [Link hébergé](/auth-flow/authorize-hosted-link).
6. Choisissez **Zettle** puis **Continuer vers Zettle**.
7. Il vous sera demandé de vous connecter à votre compte Zettle et d'autoriser l'accès aux détails de votre compte.

## Récupérer les données commerce

Pour vous assurer que les données commerce ont été lues avec succès dans le portail Codat :

1. Accédez au portail Codat où vous avez activé votre intégration.
2. Dans la barre de navigation, sélectionnez **Entreprises**, puis sélectionnez l'entreprise de test que vous avez créée.
3. Sélectionnez **Données > Commerce** pour voir les données de tous les types de données Commerce.
4. Si aucune donnée n'est affichée, cliquez sur **Actualiser les données**. Vous pouvez également afficher l'**Historique de lecture** pour vérifier l'état des synchronisations de données précédentes.
