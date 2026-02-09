---
title: "Configurer l'intégration Stripe"
description: "Découvrez notre intégration API avec Stripe"
sidebar_label: Configuration
---

Configurez l'intégration Stripe pour accéder aux données commerce de clients qui utilisent <a className="external" href="https://stripe.com/" target="_blank">Stripe</a> pour accepter des paiements.

Notre intégration utilise <a className="external" href="https://stripe.com/docs/connect" target="_blank">Stripe Connect</a> pour établir des connexions OAuth à Stripe, vous devrez donc vous inscrire en tant que plateforme Stripe Connect comme décrit ci-dessous. Les comptes Standard connectés, qui représentent vos clients PME dans l'API de Stripe, sont créés automatiquement dans le cadre du flux d'autorisation Link.

:::note Intégrations de test et en direct
Cette page explique comment configurer à la fois les intégrations Stripe Test et Stripe (voir [Intégrations disponibles](/integrations/commerce/stripe/commerce-stripe#available-integrations) pour plus de détails).
:::

Pour configurer l'intégration Stripe, vous devrez :

1. Vous inscrire en tant que plateforme Stripe Connect
2. Demander des permissions en lecture seule
3. Configurer Stripe Connect et obtenir vos identifiants
4. Ajouter vos identifiants Stripe Connect à l'intégration
5. Activer l'intégration
6. Vérifier les paramètres de synchronisation commerce

## S'inscrire en tant que plateforme Stripe Connect

Complétez votre profil de plateforme Connect pour vous inscrire à Stripe Connect. Lorsque votre profil est complet et que vos détails d'entreprise sont approuvés, vous pouvez accéder à vos identifiants de plateforme en direct. Pour accéder à vos identifiants de test, vous devez uniquement compléter les étapes 1 à 5.

1. Visitez <a className="external" href="https://stripe.com/" target="_blank">Stripe</a> et connectez-vous à votre compte développeur.

2. Dans le menu supérieur du tableau de bord, cliquez sur **Connect**.

3. Cliquez sur **Commencer avec Connect**.

4. Sélectionnez **Complétez votre profil de plateforme**, puis cliquez sur **Démarrer**.

5. Répondez aux questions à choix multiples sur votre entreprise puis soumettez vos réponses.

   :::caution Ne pas créer de compte connecté
   Après avoir soumis vos détails, ne créez **pas** de compte connecté manuellement ou via l'API Stripe. Les comptes Standard connectés sont créés automatiquement dans le cadre du flux Link.
   :::

6. Retournez à la page **Commencer avec Connect**.

7. Sous **Ajouter des détails d'entreprise pour activer votre compte**, cliquez sur **Commencer maintenant**.

8. Complétez les informations demandées pour activer votre compte. Toutes les réponses sont examinées par Stripe.

:::note
Notre intégration fonctionne uniquement avec les comptes Standard connectés.
:::

## Demander des permissions en lecture seule

Avant d'activer l'intégration en direct, nous vous recommandons de contacter le <a className="external" href="https://support.stripe.com/" target="_blank">support Stripe</a> pour demander la portée `read_only` (permission) pour votre plateforme Stripe Connect. L'intégration nécessite uniquement un accès en lecture seule et est configurée pour demander la portée `read_only` par défaut.

Si votre demande est refusée, vous pouvez configurer l'intégration pour demander la portée `read_write`—voir « Ajouter vos identifiants sécurisés à l'intégration » pour les détails. Cependant, sachez qu'une seule plateforme tierce avec accès `read_write` est autorisée à se connecter à votre compte Stripe.

## Configurer Stripe Connect et obtenir vos identifiants

Configurez Stripe Connect pour vous connecter à notre intégration Stripe, et accédez à vos identifiants de plateforme Stripe Connect (ce sont votre ID client et votre clé secrète pour le mode test ou en direct).

### Prérequis

Pour accéder à vos identifiants en direct dans Stripe, vous devez avoir [ajouté vos détails d'entreprise](/integrations/commerce/stripe/commerce-stripe-setup#register-as-a-stripe-connect-platform) comme décrit dans la tâche précédente.

1. Accédez à la page <a href="https://dashboard.stripe.com/settings/connect" target="_blank">Paramètres Connect</a>.

2. Utilisez l'interrupteur **Mode test** en haut à droite pour basculer entre le mode direct ou le mode test.
   - Activez le _mode test_ si vous configurez l'intégration Stripe Test.
   - Activez le _mode direct_ si vous configurez l'intégration Stripe.

3. Entrez votre **Nom d'entreprise** dans la section **Détails de l'entreprise**.

4. À côté d'**Apparence**, téléchargez l'icône de votre entreprise et personnalisez les couleurs. Ces paramètres sont utilisés pour personnaliser les pages d'authentification que vos clients PME verront dans le flux Link.

5. À côté de **Paramètres OAuth**, sélectionnez **OAuth pour les comptes Standard**.

6. À côté de **Redirections**, cliquez sur **Ajouter une URI** puis entrez l'URL de redirection Codat suivante :

   ```http
   https://stripe.codat.io/oauth/callback
   ```

7. Copiez votre ID client de la section **Intégration** et collez-le dans un fichier texte ou similaire.
   - En mode test, copiez l'**ID client en mode test**.
   - En mode direct, copiez l'**ID client en mode direct**.

8. Cliquez sur **Développeurs > Clés API** pour accéder à votre clé secrète de test (en mode test) ou clé secrète en direct (en mode direct).

   Laissez cet onglet ouvert dans votre navigateur afin de pouvoir utiliser la clé dans la tâche suivante.

Si vous devez ajouter ou modifier une clé à l'avenir, recherchez _Clés API_ depuis le tableau de bord des développeurs Stripe.

## Ajouter vos identifiants Stripe Connect à l'intégration

Ajoutez vos identifiants de plateforme Stripe Connect, pour le mode test ou en direct, à l'intégration correspondante.

Dans le <a className="external" href="https://app.codat.io/" target="_blank">portail Codat</a> :

1. Sélectionnez **Paramètres > Intégrations > Commerce**.

2. Cliquez sur **Configurer** à côté de l'intégration **Stripe** ou **Stripe Test**.

   La page **Paramètres d'intégration** s'affiche.

3. Dans la boîte **ID client**, entrez votre ID client pour votre plateforme Stripe Connect.
   - Pour l'intégration **Stripe Test**, entrez l'**ID client en mode test**.
   - Pour l'intégration **Stripe**, entrez l'**ID client en mode direct**.

4. Dans la boîte **Clé secrète**, entrez la valeur de votre **clé de test** ou **clé en direct**.

5. En supposant que vous avez demandé la portée `read_only` pour Stripe Connect, laissez le bouton bascule **Utiliser la portée lecture-écriture** désélectionné.

   ![Read Write Scope toggle](/img/old/18021fe-use-read-write-scope-toggle.png "Le bouton bascule Utiliser la portée lecture-écriture, désélectionné par défaut.")

   Si vous utilisez la portée `read_write` (la valeur par défaut de Stripe), alors sélectionnez le bouton bascule **Utiliser la portée lecture-écriture**.

6. Sous **Accès aux données d'entreprise**, configurez la fréquence de synchronisation pour l'intégration. Sélectionnez **Autoriser la synchronisation de données ponctuelle lorsque l'entreprise autorise la connexion** ou **Autoriser la synchronisation continue des données**.

7. Cliquez sur **Enregistrer**.

## Activer l'intégration Stripe

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Intégrations Commerce**</a>.
2. Localisez **Stripe** ou **Stripe Test** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Vérifier les paramètres de synchronisation commerce

La synchronisation de tous les types de données commerce doit être activée avant de pouvoir lire les transactions commerce de Stripe vers Codat. Suivez les étapes dans [Paramètres de synchronisation commerce](/integrations/commerce/commerce-sync-settings) ; vous n'avez besoin de le faire qu'une seule fois.

## Tester l'intégration

[Testez votre intégration Stripe](/integrations/commerce/stripe/test-stripe) explique comment utiliser l'intégration Stripe Test pour lire des données de test dans Codat.
