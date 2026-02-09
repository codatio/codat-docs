---
title: "Configurer l'intégration Mollie"
description: "Comment configurer les intégrations Mollie et Mollie Test."
sidebar_label: Setup
unlisted: true
---

Configurez l'intégration Mollie pour accéder aux données commerce des clients qui utilisent Mollie pour accepter les paiements.

Voir [Tester votre intégration Mollie](/integrations/commerce/mollie/commerce-mollie-test) pour savoir comment utiliser l'intégration Test pour lire des exemples de données dans Codat.

## Environnements pris en charge

Nous fournissons deux intégrations Mollie :

- **Mollie Test** - lire les données commerce de test de votre compte Mollie.
- **Mollie** - lire les données commerce en direct de votre compte Mollie.

Commencez avec l'intégration Test, afin de pouvoir récupérer et vérifier des exemples de données. Vous pouvez également vous assurer que vous êtes satisfait du parcours du flux d'autorisation avant d'intégrer vos clients.

Mollie ne fournit aucune donnée de test/sandbox facilement disponible, vous devez donc [d'abord ajouter des exemples de données à Mollie](/integrations/commerce/mollie/commerce-mollie-test#create-some-data-in-mollie).

## Configurer les intégrations

### Créer une application Mollie et obtenir vos identifiants

1. Visitez <a className="external" href="https://www.mollie.com/en" target="_blank">Mollie</a> et connectez-vous à votre compte marchand Mollie.
2. Dans votre tableau de bord Mollie, accédez à **Developers > Your apps** pour afficher les applications.
3. Cliquez sur **Create application**.
4. Entrez un nom et une description d'application.
5. Entrez `https://mollie.codat.io/oauth/callback` dans la zone **Redirect URL**
6. Cliquez sur **Save**.
7. Retournez à la page **Your apps** et trouvez l'application que vous venez de créer.
8. Copiez le **Client ID** et le **Client Secret** pour vos dossiers.

<img src="/img/old/051e9fd-36001_Mollie_-_client_id.PNG" />

### Activer les intégrations

Maintenant que vous avez créé une application Mollie, vous pouvez ajouter les identifiants sécurisés à l'intégration Mollie correspondante dans le portail Codat.

Dans le <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Dans la barre de navigation, sélectionnez **Settings > Integrations > Commerce**.
2. Sélectionnez l'intégration correcte selon que vous testez l'intégration ou construisez pour la production.
   - Si vous souhaitez tester l'intégration et lire des exemples de données, cliquez sur **Set up** à côté de l'intégration **Mollie Test**.
   - Si vous souhaitez construire pour la production et lire des données en direct, cliquez sur **Set up** à côté de l'intégration **Mollie**.

   La page **Integration settings** s'affiche.

3. Sous **Access to company data**, configurez la fréquence de synchronisation autorisée pour l'intégration. Sélectionnez **Allow one-off data sync…** ou **Allow continuous data sync**.
4. Entrez le **Client Id** pour votre application Mollie dans la zone **Client Id**.
5. Entrez le **Client Secret** pour votre application Mollie dans la zone **Client Secret**.
6. Cliquez sur **Save**.

L'intégration devrait maintenant être configurée et activée.

### Configurer vos paramètres de type de données commerce

Tous les types de données commerce doivent être activés avant de pouvoir lire les transactions commerce de Mollie dans Codat.

Suivez les étapes dans [Mettre à jour les paramètres de synchronisation commerce dans le portail Codat](/integrations/commerce/commerce-sync-settings#update-commerce-sync-settings-in-the-codat-portal). Vous n'avez besoin de le faire qu'une seule fois.

---

## Lire ensuite

[Tester votre intégration Mollie](/integrations/commerce/mollie/commerce-mollie-test)
