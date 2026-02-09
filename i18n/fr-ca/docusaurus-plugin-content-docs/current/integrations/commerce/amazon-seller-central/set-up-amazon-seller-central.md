---
title: "Configurer l'intégration Amazon Seller Central"
description: "Explorez notre intégration API avec Amazon Seller Central"
sidebar_label: Setup
---

Avant de pouvoir lire les données commerce des commerçants utilisant Amazon Seller Central, vous devez configurer l'intégration dans les environnements de Codat.

Avant de commencer, vous devrez avoir complété toutes les instructions de configuration préalables [ici](/integrations/commerce/amazon-seller-central/amazon-registration-steps) pour avoir configuré vos identifiants AWS et Seller Central Amazon.

## Récupérer vos identifiants sécurisés

1. Connectez-vous au [portail Codat](https://app.codat.io).
2. Dans la barre de navigation, sélectionnez **Settings > Integrations > Commerce**.
3. Trouvez 'Amazon Seller Central', puis sélectionnez **Set up** pour afficher la page **Integration settings**.
4. Depuis la [page App sur Amazon Seller Central](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole), copiez les valeurs Client Identifier et Client Secret obtenues depuis Amazon Seller Central LWA et collez-les dans les champs **Client ID** et **Client Secret** dans le portail Codat.
   - Ce sont les identifiants obtenus en cliquant sur le bouton **View** affiché sur la capture d'écran ci-dessous\*
5. Copiez l'Application Id et l'IAM ARN de la page de l'application Amazon Seller Central et collez-les respectivement dans les champs **App Id** et **IAM ARN** dans le portail Codat.

- Ce sont les identifiants visibles sur la page de la capture d'écran ci-dessous\*

![](/img/old/43ea65f-ASC.png "ASC.png")

6. Copiez la clé d'accès AWS et la clé d'accès secrète du profil utilisateur IAM pertinent et collez-les dans les champs AWS access key et AWS secret access key dans le portail Codat.
   - Cela inclut la clé que vous avez téléchargée lors de la [création de votre utilisateur IAM](/integrations/commerce/amazon-seller-central/amazon-registration-steps)
7. Dans le portail Codat, cliquez sur **Save**.

## Activer l'intégration Amazon Seller Central

1. Dans le portail Codat, allez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a>.
2. Localisez **Amazon Seller Central** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Vérifiez vos paramètres de synchronisation dans le portail Codat

S'il s'agit de votre première intégration commerce, mettez à jour vos [paramètres de type de données](/core-concepts/data-type-settings) pour activer les types de données commerce.
