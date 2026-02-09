---
title: "Configurer l'intégration Sage Accounting"
description: "Explorez notre intégration API avec Sage Accounting."
sidebar_label: Configuration
---

Avant de pouvoir accéder aux données des clients qui utilisent Sage Accounting, vous devez configurer l'intégration Sage Accounting dans le Portail Codat. Vous devrez :

- Enregistrer une nouvelle application sur le site développeur Sage et récupérer vos clés sécurisées.
- Ajouter les clés sécurisées de votre application au Portail Codat.
- Activer votre intégration Sage Accounting dans le portail Codat.

:::note Versions et zones géographiques prises en charge

Codat prend actuellement en charge les versions suivantes de Sage Accounting :

- Version 3.1
- Version 3.0

Notre intégration avec l'API Sage Accounting vous permet de lire les données d'utilisateurs ayant des comptes basés au Royaume-Uni, en Irlande, en Allemagne, en Espagne, au Portugal, en France, aux États-Unis, au Canada et aux Émirats arabes unis.

Codat ne prend actuellement pas en charge les versions de Sage Accounting couvrant l'Australie, la Nouvelle-Zélande, l'Afrique du Sud et l'édition du marché asiatique (Hong Kong, Singapour et Malaisie).
:::

:::caution Changement dans la configuration de Sage Accounting

Si vous avez configuré votre [intégration Codat avec Sage Accounting](/integrations/accounting/sagebusinesscloud/accounting-sagebusinesscloud) **avant** le 19 octobre 2020, vous remarquerez un changement sur la page des identifiants dans le portail Codat. L'option **Client ID, client secret, signing secret and subscription key (API v3 - UKI)** est sélectionnée pour votre intégration.

**Pour continuer à utiliser la version 3.0**, vous n'avez pas besoin d'apporter de modifications. L'intégration continuera de fonctionner normalement. Cependant, lorsque vous liez de nouvelles entreprises, vous devez uniquement sélectionner les drapeaux du Royaume-Uni ou de l'Irlande.

**Pour commencer à utiliser la version 3.1** avec une couverture étendue pour le Royaume-Uni, l'Irlande, les États-Unis, le Canada, la France, l'Allemagne et l'Espagne - vous devrez ajouter de nouveaux identifiants comme décrit ci-dessous. Vous n'avez pas besoin de supprimer vos identifiants de version 3.0 existants ni de relier vos entreprises existantes. Lorsque de nouvelles entreprises se lient, elles auront accès à toutes les nationalités prises en charge par la version 3.1.

La version 3.1 permet également à un client de choisir quel fichier de données d'entreprise il souhaite lier et synchroniser s'il gère différents comptes depuis la même machine.
:::

## Enregistrer votre application et récupérer vos clés sécurisées

Pour enregistrer votre application Sage Accounting, vous devez utiliser le portail de développement de Sage.

1. Accédez au <a className="external"  href="https://developerselfservice.sageone.com/session/new" target="_blank">portail de développement Sage</a> et connectez-vous. Si vous n'avez pas encore de compte, vous pouvez en créer un maintenant. Utilisez soit votre adresse courriel soit un compte GitHub.
2. Une fois connecté, sur la page d'accueil, sélectionnez **Créer une application** pour enregistrer votre nouvelle application.
3. Complétez les détails de l'application.

- Dans la case **Nom de l'application**, entrez un nom court pour votre application. Ce nom est affiché à vos clients pendant le processus de liaison.
- Dans la case **Adresse courriel**, entrez une adresse de contact pour les utilisateurs de l'application.
- Dans la case **URL de la page d'accueil**, entrez l'adresse du site web de votre entreprise.
- Dans la case **URL de rappel**, entrez l'URL suivante pour Codat : `https://sageone.codat.io/oauth/callback`

4. Sélectionnez **Enregistrer**.
   Les détails de votre application nouvellement enregistrée sont affichés.

![](/img/old/f7ebfa6-215d3b2-Sage_Business_Cloud_App_Details_edited.png "215d3b2-Sage_Business_Cloud_App_Details_edited.png")

5. Soit gardez cette page ouverte dans un onglet de navigateur séparé, soit copiez le **Client ID** et le **Client Secret** dans un document Word ou similaire.

## Ajouter les clés sécurisées de votre application à Codat

Si vous utilisez actuellement la version 3.0 de Sage Accounting, vous n'avez pas besoin de supprimer vos identifiants existants.

1. Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.

2. Localisez **Sage Accounting** et cliquez sur **Configurer**. La page **Paramètres d'intégration** s'affiche.

3. Sous **Quels identifiants avez-vous ?**, sélectionnez **Client ID and client secret only (API v3.1 - UKI, US, CA, DE, ES, FR)**.

4. Entrez les valeurs pour le **Client ID** et le **Client secret** de votre application dans le portail de développement Sage.

5. Cliquez sur **Enregistrer**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.

6. La boîte de dialogue **Activer Sage Accounting** s'affiche. Choisissez d'activer l'intégration maintenant ou plus tard.

:::note

Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

## Activer l'intégration Sage Accounting

1. Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **Sage Accounting** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

Votre intégration Sage Accounting est maintenant configurée.
