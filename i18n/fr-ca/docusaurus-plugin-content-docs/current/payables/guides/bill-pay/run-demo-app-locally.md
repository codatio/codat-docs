---
title: "Exécuter l'application localement"
sidebar_label: "Exécuter l'application localement"
description: "Apprenez comment configurer l'intégration QuickBooks, configurer Codat et exécuter l'application de démonstration de paiement de factures sur votre machine locale"
---

### Dans cette section, vous allez...

- Configurer l'intégration QuickBooks Online de Codat
- Configurer Link pour utiliser l'URL de redirection de l'application de démonstration
- Installer l'application de démonstration et l'exécuter sur votre machine locale
- Examiner l'historique des écritures dans le portail Codat

### Prérequis

Avant d'exécuter l'application de démonstration localement :

- Dans le portail Codat, activez **Récupérer à la première liaison** pour les factures, les paiements de factures et les entreprises sur la <a href="https://app.codat.io/settings/data-types" target="_blank">page des paramètres des types de données</a>. Ces types de données seront automatiquement lus lorsqu'une entreprise est liée pour la première fois.
- Assurez-vous que `npm` version `16.9.0` minimum est installé sur votre machine.
- Configurez l'intégration QuickBooks Online Sandbox dans le portail Codat.

### Configurer l'intégration QBO

Commencez par configurer l'intégration QuickBooks Online Sandbox. Pour un guide détaillé, consultez [Configurer l'intégration QuickBooks Online](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup).

:::info Pourquoi QuickBooks Online?
Nous avons choisi QuickBooks Online pour ce guide de démonstration parce qu'il offre un accès facile aux données sandbox via un compte d'essai gratuit. Vous pouvez utiliser l'application de démonstration avec une autre intégration qui prend en charge l'écriture des paiements de factures, comme le sandbox Codat, si vous préférez.
:::

1. Inscrivez-vous ou connectez-vous au [portail développeur Intuit](https://developer.intuit.com/).
2. Créez une application QuickBooks Online.
3. Accédez aux **paramètres de développement** de l'application.
4. Dans la section **URI de redirection**, configurez votre nouvelle application avec l'URI de redirection pour l'intégration QuickBooks Online Sandbox : `https://quickbooksonlinesandbox.codat.io/oauth2/callback`

   ![bill-pay_intuit-developer-redirect-uri](/img/use-cases/bill-pay/bill-pay_intuit-developer-redirect-uri.png "Portail développeur Intuit : une application configurée avec l'URI de redirection pour l'intégration QuickBooks Online Sandbox de Codat.")

5. Connectez-vous au [portail Codat](https://app.codat.io).
6. Dans la barre de navigation, accédez à **Paramètres > Intégrations > Comptabilité** pour voir la page des [intégrations comptables](https://app.codat.io/settings/integrations/accounting).
7. Cliquez sur **Gérer** à côté de l'intégration **QuickBooks Online Sandbox**.
8. Entrez les clés de développement de votre application dans les champs **ID client** et **Secret client**.
9. Cliquez sur **Enregistrer**.
10. Activez l'intégration.

### Configurer les URL de redirection

Ensuite, définissez l'URL de redirection définie dans l'application de démonstration comme URL de redirection Codat. Cette URL vous redirige vers l'écran **Connexion réussie** après vous être connecté à un logiciel comptable dans le flux [Hosted Link](/auth-flow/authorize-hosted-link).

1. Connectez-vous au [portail Codat](https://app.codat.io).
2. Dans la barre de navigation, accédez à **Paramètres > Redirections** pour voir la page des [redirections](https://app.codat.io/settings/redirects).
3. Entrez l'URL de redirection suivante dans le champ **URL** :

   ```http
   https://localhost:3000/connection-successful
   ```

### Exécuter l'application de démonstration localement

1. Clonez le dépôt de l'application de démonstration sur votre machine locale :

   ```sh
   git clone https://github.com/codatio/demo-bill-pay.git
   ```

2. En ligne de commande, installez les dépendances du projet :

   ```sh
   npm install
   ```

3. Copiez le fichier `.env.example` dans le répertoire racine et renommez-le en `.env`.
4. Modifiez le contenu du fichier `.env` comme suit :

   ```
   CODAT_AUTH_HEADER="<YOUR_AUTH_HEADER>"
   ```

   Remplacez `<YOUR_AUTH_HEADER>` par votre [en-tête d'autorisation](/using-the-api/authentication) du portail Codat. Pour trouver votre en-tête d'autorisation, accédez à **Développeurs > Clés API**, puis copiez votre en-tête d'autorisation depuis la colonne appropriée.

5. Lancez l'application :

   ```sh
   npm run dev
   ```

6. Lorsque l'application est en cours d'exécution, ouvrez [https://localhost:3000](https://localhost:3000) dans votre navigateur. Vous verrez l'écran de démarrage **Bill Pay** :

   ![bill-pay_app-start-screen-get-started](/img/use-cases/bill-pay/bill-pay_app-start-screen-get-started.png)

7. Cliquez sur **Commencer** et suivez les instructions à l'écran.

Comme l'application hébergée, vous pouvez maintenant créer une entreprise, vous connecter à votre entreprise sandbox QuickBooks Online, et afficher et payer des factures.

### Examiner l'historique des écritures

Après avoir payé une facture, vous pouvez vérifier que les paiements de factures que vous avez écrits sont reflétés dans le portail Codat.

1. Dans la barre de navigation, sélectionnez **Entreprises**.
2. Sélectionnez l'entreprise que vous avez connectée via l'application de démonstration.
3. Sélectionnez **Historique des données > Historique des écritures**.
4. Examinez l'historique des écritures. Recherchez l'opération d'écriture `billPayments` récente et vérifiez qu'elle s'est terminée avec succès.

### Récapitulatif

Vous avez configuré l'intégration QuickBooks Online Sandbox et configuré Link avec l'URL de redirection de l'application de démonstration. Vous avez exécuté l'application de démonstration localement et complété le flux d'autorisation.

<hr />

### À lire ensuite

Explorez plus en profondeur les fonctionnalités de l'application :

- [Comment fonctionne l'application de démonstration](/payables/guides/bill-pay/how-the-demo-app-works)
