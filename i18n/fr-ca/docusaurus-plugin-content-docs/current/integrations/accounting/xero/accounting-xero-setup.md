---
title: "Configurer l'intégration Xero"
sidebar_label: Configuration
description: "Apprenez à configurer notre intégration API avec Xero"
---

Dans ce guide, nous vous montrerons comment configurer rapidement notre intégration API Xero afin que vous puissiez accéder aux données comptables de vos clients PME qui utilisent Xero.

Après avoir complété ce guide, vous pourrez utiliser l'intégration Xero pour connecter jusqu'à 25 entreprises. Si vous souhaitez connecter plus de 25 entreprises, vous devrez [vous inscrire en tant que partenaire d'application Xero](/integrations/accounting/xero/xero-app-partner-program).

🚀 **Étapes pour configurer l'intégration Xero :**

- Créer une application Xero et configurer l'URI de redirection
- Récupérer les clés sécurisées de votre application
- Ajouter les clés sécurisées de votre application au Portail Codat
- Activer l'intégration Xero

## Créer une application Xero et configurer l'URI de redirection

1. Connectez-vous au [portail développeur Xero](https://developer.xero.com/) en utilisant vos identifiants Xero.
   Si vous n'avez pas de compte développeur Xero, vous pouvez en [créer un](https://www.xero.com/uk/signup/developers/) gratuitement.
2. Sélectionnez l'onglet **Mes applications**.
3. Cliquez sur le bouton **Nouvelle application** en haut à droite.
4. Entrez les informations suivantes dans la fenêtre **Ajouter une nouvelle application** :
   - **Nom de l'application** : Entrez un nom pour votre application. Il sera affiché à vos utilisateurs lorsqu'ils partageront leurs données comptables dans votre flux d'authentification, alors choisissez un nom qui identifie clairement votre organisation.
   - **Type d'intégration** : Sélectionnez **Application web**.
   - **URL de l'entreprise ou de l'application** : Entrez l'URL du site web de votre entreprise préfixée par `https://`
   - **URI de redirection** : Entrez `https://xero.codat.io/oauth2/callback`
5. Cochez la case pour accepter les conditions générales de la plateforme développeur Xero.
6. Cliquez sur **Créer l'application**.

Votre nouvelle application est affichée sur la page **Détails de l'application**.

:::tip Gagnez du temps en ajoutant des liens de documents maintenant
Il vaut la peine d'ajouter des liens vers votre politique de confidentialité et vos conditions générales à ce stade. C'est une exigence si vous souhaitez [devenir partenaire d'application Xero](/integrations/accounting/xero/xero-app-partner-program) et vous fera gagner du temps plus tard.

1. Sélectionnez votre application dans l'onglet **Mes applications**.
2. Sur la page **Détails de l'application**, entrez les liens vers les documents pertinents dans les champs **URL de la politique de confidentialité** et **URL des conditions générales**. Les liens doivent commencer par `https://`.
3. Cliquez sur le bouton **Enregistrer**.
   :::

## Récupérer les clés sécurisées de votre application

Vous devrez récupérer les clés sécurisées de votre application — le client ID et le client secret — depuis le portail développeur Xero.

1. Sélectionnez l'onglet **Mes applications** puis sélectionnez votre application.
2. Sélectionnez **Configuration** dans le volet de gauche.
3. Cliquez sur l'icône en forme d'œil pour révéler l'**ID client** de votre application.
4. Cliquez sur **Générer un secret** pour générer un secret client pour votre application. Le secret apparaît dans la case **Secret client 1** :

   ![Secret client de l'application Xero](/img/integrations/accounting/xero/xero_app-client-secret-1-field-obscured.png "La section de la page de configuration de l'application dans le portail développeur Xero montrant un ID client et un secret client générés, avec les valeurs masquées et le champ secret client indiqué par un cadre violet.")

5. Copiez le secret client de votre application et stockez-le dans un endroit sécurisé.
   :::caution Gardez le secret client en sécurité !
   Si vous quittez la page **Configuration** de votre application, vous ne pourrez plus afficher le secret client et devrez en générer un nouveau.
   :::
6. Gardez la page **Configuration** ouverte dans votre navigateur. Vous devrez entrer vos clés sécurisées dans la procédure suivante.

## Ajouter les clés sécurisées de votre application Xero au Portail Codat

Ensuite, ajoutez les clés sécurisées de votre application Xero au Portail Codat.

1. Dans le Portail Codat, accédez à **Paramètres > Intégrations > Comptabilité** pour afficher la page [**Intégrations comptables**](https://app.codat.io/settings/integrations/accounting).
2. Localisez **Xero** et cliquez sur **Configurer**.
3. Sous **Paramètres d'intégration**, entrez les valeurs pour l'**ID client** et le **Secret client** de votre application dans le portail développeur Xero. Les clés sécurisées ne doivent pas contenir d'espaces.
4. Cliquez sur **Enregistrer**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.
5. La boîte de dialogue **Activer Xero** s'affiche. Choisissez d'activer l'intégration maintenant ou plus tard.

## Activer l'intégration Xero

1. Dans le Portail Codat, accédez à la page [**Intégrations comptables**](https://app.codat.io/settings/integrations/accounting).
2. Localisez **Xero** et sélectionnez le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là. Après cela, vous pouvez commencer à lier des entreprises à Xero.

:::caution Liaison de plusieurs entreprises Xero
L'accès à Xero est contrôlé via des jetons d'accès avec une relation 1:1 entre une entreprise Codat et une entreprise Xero.

Si vous gérez plusieurs entreprises Xero au sein d'une instance Xero, vous devez utiliser une connexion unique par entreprise. Sinon, vos connexions peuvent être désautorisées sans préavis.
:::

## Récapitulatif

Dans ce guide de configuration, vous avez appris à :

- Créer une application Xero configurée avec l'URI de redirection Codat requise.
- Récupérer les clés sécurisées de votre application et les ajouter à l'intégration Xero dans le Portail Codat.
- Activer l'intégration.

## Prochaine étape : Partenariat d'application Xero

Si vous prévoyez d'utiliser votre intégration pour connecter plus de 25 entreprises, vous devez [vous inscrire auprès de Xero en tant que partenaire d'application Xero officiel](/integrations/accounting/xero/xero-app-partner-program). Vous devriez commencer ce processus dès que possible car il peut prendre beaucoup de temps à compléter.
