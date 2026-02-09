---
title: "Configurer l'intégration Lightspeed Restaurant"
description: "Explorez notre intégration API avec Lightspeed Restaurant - série K"
sidebar_label: Setup
---

Configurez l'intégration [LightSpeed Restaurant](/integrations/commerce/lightspeed-k/commerce-lightspeed-k) pour récupérer les informations sur les ventes et les commandes de vos clients qui utilisent Lightspeed Restaurant - série K pour gérer leur entreprise alimentaire ou hôtelière.

Avant de pouvoir utiliser l'intégration, vous devrez rejoindre le programme partenaire LightSpeed pour accéder à leurs API. Vous pouvez en savoir plus sur le programme sur leur <a className="external" href="https://www.lightspeedhq.co.uk/partners/" target="_blank">site Web</a>.

Pour configurer l'intégration, vous devrez effectuer ces tâches :

- Vous inscrire en tant que partenaire Lightspeed, puis demander des identifiants API
- Récupérer vos identifiants et les saisir dans le portail développeur Codat
- Activer l'intégration
- Créer des entreprises dans Codat et partager l'URL Link avec vos clients PME

## S'inscrire en tant que partenaire de développement Lightspeed

Pour vous inscrire en tant que partenaire, vous devrez d'abord compléter le <a className="external" href="https://www.lightspeedhq.com/partners/partner-application/" target="_blank">formulaire de demande de partenaire</a>. Lorsqu'on vous demande comment vous prévoyez de générer des revenus en tant que partenaire Lightspeed, choisissez **Integrate to Lightspeed POS** ou **Build an App**, puis complétez le reste des champs en conséquence.

:::note Quel produit Lightspeed ?

Si on vous demande avec quel produit vous avez l'intention d'intégrer, assurez-vous de sélectionner **Restaurant**. L'intégration de Codat ne fonctionne pas avec les produits Lightspeed Retail pour le moment.
:::

## Recevoir vos identifiants de développement

Une fois votre demande de partenaire approuvée, vous devriez recevoir des détails sur la façon d'accéder à un formulaire qui vous permet de demander des identifiants API. Vous devrez d'abord demander un client Staging, qui sera utilisé pour les tests et pour démontrer votre application à votre contact Lightspeed, qui vous conseillera ensuite quand demander un client Production.

Lors du remplissage du formulaire, il se peut qu'on vous demande les informations suivantes :

- **URI de redirection** : Cela devrait être `https://lightspeedk.codat.io/oauth/callback`
- **Portées** : Veuillez sélectionner `Financial`, `Items` et `Order & Pay`.
- **Compte POS test** : Sélectionnez cette option si vous souhaitez un compte Lightspeed K test à utiliser pour vos tests. Ce compte ne pourra se connecter qu'à votre application staging.

## Ajouter les identifiants sécurisés de votre application à l'intégration

Une fois votre demande traitée, vos identifiants devraient vous être envoyés à l'adresse e-mail spécifiée. Ensuite, vous devrez les ajouter dans le <a href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Dans la barre de navigation, sélectionnez **Settings > Integrations > Commerce**.

2. Sélectionnez l'intégration correcte selon que vous configurez votre application pour les tests ou l'utilisation par des clients réels
   - Pour les tests, cliquez sur **Set up** à côté de l'intégration **Lightspeed K Trial**.
   - Pour la production, cliquez sur **Set up** à côté de l'intégration **Lightspeed K**.
     La page **Integration settings** s'affiche.

3. Sous **Access to company data**, configurez la fréquence de synchronisation autorisée pour l'intégration. Sélectionnez **Allow one-off data sync…** ou **Allow continuous data sync**.

4. Entrez le Client ID fourni pour votre application Lightspeed K dans la zone **Client ID**.
   - Pour les tests, entrez le **Staging Client ID** de Lightspeed.
   - Pour la production, entrez le **Production Client ID** de Lightspeed.

5. Entrez le secret d'application pour votre application Lightspeed K dans la zone **Client Secret**.
   - Pour les tests, entrez le **Staging Client secret** de Lightspeed.
   - Pour la production, entrez le **Production Client secret** de Lightspeed.

6. Cliquez sur **Save**

## Activer l'intégration Lightspeed Restaurant

1. Dans le portail Codat, allez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a>.
2. Localisez **Lightspeed K** ou **Lightspeed K Trial** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Vérifier les paramètres de synchronisation commerce

La synchronisation de tous les types de données commerce doit être activée avant de pouvoir lire les transactions commerce de Square vers Codat. Suivez les étapes dans [Paramètres de synchronisation Commerce](/integrations/commerce/commerce-sync-settings) ; vous n'avez besoin de le faire qu'une seule fois.
