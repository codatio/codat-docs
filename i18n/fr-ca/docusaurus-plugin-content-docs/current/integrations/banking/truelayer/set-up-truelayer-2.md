---
title: "Configurer votre intégration TrueLayer"
slug: "set-up-truelayer-2"
description: "Explorez notre intégration API avec TrueLayer"
sidebar_label: Setup
---

Avant de pouvoir accéder aux données bancaires de vos clients PME depuis TrueLayer, vous devez configurer l'intégration.

Vous devrez :

- Récupérer vos clés sécurisées depuis TrueLayer
- Mettre à jour vos paramètres TrueLayer
- Ajouter vos clés sécurisées à Codat et activer TrueLayer
- Gérer les sources bancaires TrueLayer
- Vérifier les paramètres des types de données bancaires

:::note Tester l'intégration TrueLayer

Si vous utilisez l'environnement en direct de TrueLayer, vous pouvez tester TrueLayer en utilisant soit la source de données Demo Bank, soit des comptes bancaires réels. Pour plus d'informations, consultez [Tester votre intégration TrueLayer](/integrations/banking/truelayer/test-truelayer).
:::

## Récupérer vos clés sécurisées depuis TrueLayer

1. Connectez-vous à votre [compte TrueLayer](https://console.truelayer.com), ou créez un nouveau compte, et accédez à la console en direct.

   > Si vous configurez un compte pour la première fois, vous êtes invité à ajouter une valeur unique à votre **client_id** et à télécharger votre secret client. Vous en aurez besoin lorsque vous ajouterez vos clés sécurisées à Codat.

2. Dans la console TrueLayer, sélectionnez **DATA API** dans le panneau de gauche.
3. Si vous utilisez un nouveau compte, cliquez sur **GO TO LIVE ENV**. Si vous utilisez un compte existant, sélectionnez **LIVE** dans le menu supérieur.

![](/img/old/6281165-TL_Live_Environment.png "TL_Live_Environment.png")

4. Dans le panneau de gauche, sélectionnez l'icône des paramètres.

![](/img/old/d0a240b-TL_Apps.png "TL_Apps.png")

La page **APP SETTINGS** s'affiche.

5. Dans le panneau **Identifiers**, trouvez votre **client_id** et copiez-le dans un fichier texte ou similaire. Si vous aviez déjà un compte TrueLayer et que vous avez oublié votre **client_secret**, sélectionnez l'icône d'actualisation à côté pour en télécharger un nouveau.

Restez sur cette page et continuez avec la tâche suivante.

## Mettre à jour vos paramètres TrueLayer

Ensuite, vous devez ajouter votre URI de redirection à TrueLayer. C'est l'emplacement vers lequel vos clients sont envoyés après avoir autorisé votre connexion à leurs données bancaires.

1. Sur la page **APP SETTINGS**, dans le panneau **Allowed redirect URIs**, supprimez tous les URI existants.
2. Cliquez sur l'icône plus.
3. Entrez `https://truelayer.codat.io/oauth/callback`, puis cliquez sur la coche.

Votre configuration TrueLayer est terminée.

## Ajouter vos clés sécurisées à Codat et activer TrueLayer

Vous devez configurer l'intégration TrueLayer dans le [portail Codat](https://app.codat.io).

1. Dans la barre de navigation, sélectionnez **Settings > Integrations > Banking**.
2. Cliquez sur **Set up** sur la tuile **TrueLayer**.
   La page **Integration settings** pour TrueLayer s'affiche.
3. Trouvez les [clés sécurisées que vous avez récupérées de TrueLayer](/integrations/banking/truelayer/set-up-truelayer-2#retrieve-your-secure-keys-from-truelayer).
4. Sur la page **Integration settings**, entrez vos clés sécurisées de TrueLayer :
   - Entrez le **client_id** dans la zone **Client ID**.
   - Entrez le **client_secret** dans la zone **Client Secret**.
5. Sous **Access to company data**, sélectionnez si vous souhaitez synchroniser en continu les données de l'entreprise, ou synchroniser une seule fois lorsque l'entreprise autorise.
6. Cliquez sur **Save**.
7. Retournez à **Settings > Integrations > Banking**.
   **TrueLayer** devrait maintenant être activé. Vous pouvez cliquer sur le bouton bascule à côté de **TrueLayer** pour basculer l'intégration entre **Enabled** et **Disabled**.

## Gérer les sources bancaires TrueLayer

Gérez les sources bancaires auxquelles vous pouvez vous connecter via l'intégration.

1. Dans la barre de navigation, sélectionnez **Settings > Integration > Banking**.
2. Cliquez sur **Set up** sur la tuile **TrueLayer**.
   La page **Integration settings** pour TrueLayer s'affiche.
3. Cliquez sur **Manage banking sources**.
4. Toutes les sources bancaires sont activées par défaut, si l'intégration TrueLayer est activée. Utilisez les boutons bascule pour désactiver les sources bancaires auxquelles vous ne souhaitez pas vous connecter.
5. Facultatif : Désactivez **Demo Bank** si vous ne souhaitez pas utiliser un compte bancaire de démonstration contenant des données de test.
   Les modifications sont enregistrées automatiquement.

## Vérifier les paramètres des types de données bancaires

Pour afficher les données de test des comptes bancaires liés, configurez les paramètres de type de données dans le portail Codat.

1. Dans la barre de navigation, sélectionnez **Settings > Data types**.
2. Réglez **Fetch on first link** sur **On** pour les types de données bancaires suivants :
   - Banking - Account Balances
   - Banking - Accounts
   - Banking - Transaction Categories
   - Banking - Transactions
3. Sélectionnez **Save Changes** pour mettre à jour vos paramètres de type de données.
