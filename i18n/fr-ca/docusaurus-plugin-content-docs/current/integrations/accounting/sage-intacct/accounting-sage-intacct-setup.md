---
title: "Configurer l'intégration Sage Intacct"
description: "Explorez notre intégration API avec Sage Intacct."
sidebar_label: Configuration
---

Pour s'intégrer avec Sage Intacct, vous devez être un _partenaire développeur Sage Intacct_, ou travailler avec un partenaire autorisé.

Les clients d'entreprise de Codat peuvent utiliser nos identifiants de partenaire pour activer l'intégration si désiré. Alternativement, vous pouvez vous inscrire au Programme de développeurs Sage Intacct et obtenir vos propres identifiants de partenaire.

Si vous souhaitez activer notre intégration avec Sage Intacct, veuillez contacter votre ingénieur Solutions pour obtenir l'accès aux identifiants de partenaire pour votre instance et pour discuter du processus pour [devenir partenaire Sage Intacct](https://marketplace.intacct.com/BecomeAPartner).

:::note Accès au niveau de l'entité requis

L'_accès au niveau de l'entité_ doit être activé dans Sage Intacct avant qu'une entreprise puisse se connecter à l'intégration.
:::

## Entrer les identifiants de partenaire

1. Connectez-vous au [Portail Codat](https://app.codat.io)
2. Dans la barre de navigation, sélectionnez **Paramètres > Intégrations > Comptabilité**.
3. Trouvez l'intégration Sage Intacct, puis cliquez sur **Configurer** pour afficher la page **Paramètres d'intégration**.
4. Entrez vos identifiants dans les cases **Sender ID** et **Sender Password** :
   1. Si vous êtes un partenaire développeur Sage Intacct, entrez votre Developer Sender ID et Sender Password.
   2. Pour utiliser les identifiants de partenaire de Codat, veuillez contacter votre ingénieur Solutions qui les pré-remplira pour vous.
5. Optionnellement, sélectionnez si vous souhaitez que les liens avec Sage Intacct soient continus, ou uniquement des synchronisations ponctuelles.
6. Cliquez sur **Enregistrer**.

## Activer l'intégration Sage Intacct

1. Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **Sage Intacct** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Tester votre intégration

Nous vous recommandons de tester votre intégration avant d'envoyer des URL Link aux clients. Vous aurez besoin de votre propre compte Sage Intacct pour ce faire.

:::caution Entreprises d'essai Sage Intacct

Vous ne pourrez pas lier une entreprise d'essai Sage Intacct. Les entreprises d'essai Sage Intacct ne prennent pas en charge l'API Webservices, qui est nécessaire pour lier et synchroniser les données via Codat.
:::

:::note Privilèges d'administrateur complets

**Prérequis :** Vous devez avoir des privilèges d'administrateur complets dans Sage Intacct, ainsi que les autorisations de rôle utilisateur.
:::

1. Configurez des données de test dans votre compte Sage Intacct.
2. [Créez une entreprise de test](/configure/portal/companies#add-a-new-company) dans le Portail Codat.
3. Cliquez sur **Demander des données** à côté du nom de l'entreprise, et copiez l'URL Link.
4. Entrez l'URL Link dans un nouvel onglet de navigateur.
5. À l'étape **Sélectionnez votre logiciel comptable**, sélectionnez la tuile **Sage Intacct**.
6. Suivez les instructions à l'écran dans Link :
   1. Obtenez votre identifiant d'entreprise de Sage Intacct.
   2. Activez les services Web dans Sage Intacct.
   3. Configurez les services Web dans Sage Intacct.
   4. Créez un utilisateur de services Web dans Sage Intacct.
   5. Entrez votre identifiant d'entreprise Sage Intacct, nom d'utilisateur et mot de passe.
   6. Sélectionnez votre entité Sage Intacct dans le menu déroulant.
   7. Une sonde s'exécute en arrière-plan et identifie les autorisations qui vous manquent dans Sage Intacct. Suivez les étapes à l'écran pour activer les autorisations manquantes.
7. Dans le Portail Codat, assurez-vous que les données de test de votre compte Sage Intacct sont affichées pour votre entreprise de test.
