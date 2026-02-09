---
title: "Configurer l'intégration SumUp"
slug: "set-up-sumup-in-production-1"
description: "Découvrez notre intégration API avec SumUp"
sidebar_label: Configuration
unlisted: true
---

Avant de pouvoir lire les données commerce des entreprises utilisant SumUp, vous devrez configurer l'intégration dans le portail de Codat. Vous devrez :

- Vous connecter au <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a>.
- Créer une application SumUp en direct dans le <a className="external" href="https://me.sumup.com/en-gb/login/" target="_blank">portail SumUp</a> et récupérer vos identifiants sécurisés (clé et secret API).
- Ajouter votre compte SumUp au portail Codat en production et activer l'intégration SumUp.
- Vérifier vos paramètres de synchronisation.

## Créer une application SumUp et récupérer vos identifiants sécurisés

:::note Détails du compte SumUp

Si vous avez déjà un compte SumUp, ayez vos détails de compte à portée de main. Sinon, visitez <a href="https://sumup.co.uk/">SumUp</a> pour vous inscrire à un compte.
:::

1. Visitez <a className="external" href="https://sumup.co.uk/" target="_blank">SumUp</a> et connectez-vous au portail SumUp.
2. Sélectionnez **Profil** > **Pour les développeurs** et accédez à la section **Clé d'affilié**.
3. Dans la fenêtre **Créer des identifiants client**, collez l'URL suivante : `https://sumup.codat.io/oauth/callback`, et remplissez les informations requises.
4. Cliquez sur **Enregistrer** pour sauvegarder vos modifications.

## Ajouter vos identifiants sécurisés au portail Codat et activer l'intégration SumUp

1. Connectez-vous au <a href="https://app.codat.io" target="_blank">portail Codat</a>.
2. Dans la barre de navigation, sélectionnez **Paramètres > Intégrations > Commerce**.
3. Trouvez l'intégration **SumUp**, puis sélectionnez **Configurer** pour afficher la page **Paramètres d'intégration**.
4. Choisissez quel [type d'accès aux données d'entreprise](/core-concepts/data-type-settings) vous souhaitez avoir pour cette intégration : ponctuel ou continu.
5. Depuis la section **OAuth - Créer des identifiants client**, copiez et collez.

- La valeur **ID client** dans **ID client**.

6. Depuis la section **OAuth - Créer des identifiants client**, téléchargez puis copiez et collez

- La valeur **client_secret** dans **Secret client**.

5. Dans le portail Codat, sélectionnez **Enregistrer**.

## Activer l'intégration SumUp

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Intégrations Commerce**</a>.
2. Localisez **SumUp** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Vérifier vos paramètres de synchronisation dans le portail Codat

S'il s'agit de votre première intégration commerce, mettez à jour vos [paramètres de type de données](/integrations/commerce/commerce-sync-settings) pour activer les types de données commerce.

Vous êtes maintenant prêt à [configurer des entreprises](/configure/portal/companies#add-a-new-company) pour vos clients dans le portail Codat.
