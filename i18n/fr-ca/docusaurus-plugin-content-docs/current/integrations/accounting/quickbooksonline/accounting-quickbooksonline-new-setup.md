---
title: "Configurer l'intégration QuickBooks Online"
description: "Explorez notre intégration API avec QuickBooks Online."
sidebar_label: Configuration
---

Vidéo explicative :

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/szC072mS1ks"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>

<hr />

Avant de pouvoir accéder aux données des clients qui utilisent QuickBooks Online pour leur comptabilité, vous devez configurer l'intégration QuickBooks Online.

Vous devrez :

1. Créer une application dans le [Portail des développeurs Intuit](https://developer.intuit.com/).
2. Avant une utilisation en production, vous devez fournir certains détails sur votre application et compléter le _Questionnaire d'évaluation d'application_ fourni par Intuit. Pour obtenir de l'aide, consultez notre [guide du questionnaire d'évaluation QBO](/integrations/accounting/quickbooksonline/qbo-app-assessment-questionnaire).
3. Intuit examine votre questionnaire pour s'assurer que votre application répond aux exigences de leur plateforme.
4. Si votre application est approuvée, vous pouvez accéder à ses clés de production pour une utilisation avec l'intégration de production.
5. Ajouter les clés sécurisées de votre application au Portail Codat.

:::caution Clés d'application

Les clés de développement et les clés de production de votre application ne sont pas interchangeables. Les clés de développement ne fonctionnent _pas_ avec les comptes QuickBooks Online réels.
:::

Avant de commencer, assurez-vous de comprendre les différents [environnements QuickBooks Online](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#quickbooks-online-environments).

## Environnements QuickBooks Online

QuickBooks Online offre deux environnements distincts :

- Une **entreprise sandbox** contenant des données d'exemple à des fins de développement et de test. Vous en obtenez automatiquement une lorsque vous créez un compte développeur QBO. Consultez <a className="external" href="https://developer.intuit.com/app/developer/qbo/docs/develop/sandboxes/manage-your-sandboxes" target="_blank">Créer et tester avec une entreprise sandbox</a> dans la documentation développeur Intuit, ou accédez à votre profil, puis **Sandbox**, dans le [Portail des développeurs Intuit](https://developer.intuit.com/).
- Un **compte QuickBooks réel** (y compris les essais gratuits).

Les entreprises sandbox ne peuvent se connecter qu'à une application QuickBooks Online utilisant les clés de développement de l'application. Les comptes réels ne peuvent se connecter qu'à une application QuickBooks Online utilisant les clés de production de l'application.

Pour prendre en charge ces environnements, vous trouverez deux intégrations distinctes dans le Portail Codat :

- **QuickBooks Online Sandbox** : pour le développement et les tests.
- **QuickBooks Online** : pour une utilisation en production.

Cette page explique comment configurer les deux intégrations.

## Créer une application QuickBooks Online configurée pour le sandbox

Dans le Portail des développeurs Intuit, créez et enregistrez une application QuickBooks Online, puis configurez-la pour une utilisation avec l'intégration QuickBooks Online Sandbox.

1. Connectez-vous au <a href="https://developer.intuit.com/" target="_blank">Portail des développeurs Intuit</a>.

   Vous pouvez utiliser vos identifiants QuickBooks Online existants pour créer un nouveau compte développeur Intuit.

2. Sélectionnez **Dashboard** dans le menu supérieur pour afficher la page **My Apps Dashboard**.

3. Cliquez sur **Create an app**.

4. Sélectionnez l'option **QuickBooks Online and Payments**.

5. Fournissez les informations suivantes sur la page **Give your app a name** :
   1. Entrez un nom pour votre application.
   2. Sélectionnez la portée **com.intuit.quickbooks.accounting**.
   3. Cliquez sur **Create app**.

   Votre application est créée et la page **Develop your app** s'affiche.

6. Dans le menu de gauche, sélectionnez **Keys & credentials** sous **Development Settings** pour afficher la page **Keys & OAuth**.

7. Sous **Redirect URIs**, cliquez sur **Add URI** pour ajouter une nouvelle ligne au tableau. Ensuite, entrez l'URI de redirection pour l'intégration QuickBooks Online Sandbox :

   ```http
   https://quickbooksonlinesandbox.codat.io/oauth2/callback
   ```

   ![Entrez l'URI de redirection pour l'intégration Codat QuickBooks Online Sandbox.](/img/old/2fbd2a6-intuit-developer_enter-sandbox-redirect-uri.png)

8. Cliquez sur **Save**.

Vous pouvez trouver les clés de développement de votre application — le **Client ID** et le **Client Secret** — dans la section **Keys** en haut de la page **Keys & OAuth**.

### Étapes suivantes

Ensuite, ajoutez les clés de développement de votre application à l'intégration **QuickBooks Online Sandbox**, comme décrit dans [Ajouter les clés sécurisées de votre application au Portail Codat](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#add-your-apps-secure-keys-to-the-codat-portal).

Alternativement, vous pouvez obtenir les clés de production de votre application comme expliqué dans la procédure suivante.

## Obtenir les clés de production et configurer l'application pour la production

Avant de pouvoir accéder aux clés de production de votre application, vous devez compléter les exigences décrites dans cette procédure. Vous pouvez réutiliser l'application que vous avez créée précédemment.

Lorsque les clés de production sont disponibles, configurez l'application pour une utilisation avec l'intégration de production.

Assurez-vous d'avoir d'abord [créé une application QuickBooks Online configurée pour le sandbox](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#create-a-quickbooks-online-app-configured-for-sandbox).

Dans le <a className="external" href="https://developer.intuit.com/" target="_blank">Portail des développeurs Intuit</a> :

1. Dans le menu de gauche, sélectionnez **Keys & credentials** sous **Production Settings**.

   La page **Get your app's production keys** s'affiche.

2. Ensuite, vous devez fournir toutes les informations demandées dans la liste de contrôle **Add details about your app** :

<img src="/fr-ca/img/old/904ecc7-qbo-production-keys-app-assessment-questionnaire-link.png" />

:::note Aide avec la liste de contrôle des détails de l'application

Vous devrez fournir les informations suivantes :

- **Host domain :** URL du domaine hébergeant votre site web ou application.
- **Launch URL :** URL initiale pour le flux d'autorisation de votre application. Si vous utilisez Link sans code, fournissez l'URL Link générique, accessible dans le Portail Codat.
- **Disconnect URL :** Lien vers le processus de désautorisation de l'accès de votre application à QuickBooks Online. Vous pouvez fournir l'URL du point de terminaison [Déconnecter une source de données d'une entreprise](/platform-api#/operations/unlink-connection). Si vous n'avez pas d'URL de déconnexion, fournissez plutôt un lien vers votre site web ou application.

Pour les détails d'hébergement de l'application, consultez <a className="external" href="https://docs.codat.io/integrations/accounting/quickbooksonline/quickbooks-online-integration-reference#qbo-app-hosting" target="_blank">Hébergement d'application QBO</a>.
:::

3. Cliquez sur **Go to the app assessment questionnaire** pour ouvrir le questionnaire. Consultez [Compléter le questionnaire d'évaluation d'application](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#completing-the-app-assessment-questionnaire) ci-dessous pour des conseils sur la façon de répondre au questionnaire.

4. Lorsque vous avez complété toutes les exigences et que vos réponses au questionnaire ont été approuvées par Intuit, la page se met à jour pour afficher les clés de production de votre application (le Client ID et le Client Secret) sur la page **Keys & OAuth**.

5. Fournissez les informations suivantes sur la page **Keys & OAuth** (accessible en sélectionnant **Production Settings > Keys & credentials**) :
   1. Sous **Redirect URIs**, cliquez sur **Add URI** pour ajouter une nouvelle ligne au tableau.
   2. Dans la nouvelle ligne, entrez l'URI de redirection pour l'intégration QuickBooks Online (production) :

   ```http
   https://quickbooksonline.codat.io/oauth2/callback
   ```

6. Cliquez sur **Save**.

Lorsque vous avez fourni toutes les informations demandées, les clés de production de votre application — le Client ID et le Client Secret — sont rendues disponibles sur la page **Keys & OAuth**. Pour trouver les clés, sélectionnez **Keys & credentials** sous **Production Settings** :

![](/img/old/853c0d4-intuit-developer-portal_select-production-keys-left-nav.png)

### Étapes suivantes

Ensuite, ajoutez vos clés de production à l'**intégration QuickBooks Online**, comme décrit dans [Ajouter vos clés sécurisées à Codat](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#add-your-secure-keys-to-codat), ci-dessous.

## Compléter le questionnaire d'évaluation d'application

Avant de pouvoir accéder aux clés de production de votre application, vous devez compléter un _Questionnaire d'évaluation d'application_. Intuit examinera vos réponses pour s'assurer que votre application répond à leurs <a className="external" href="https://developer.intuit.com/app/developer/qbo/docs/go-live/publish-app/platform-requirements" target="_blank">exigences et directives de publication</a>.

En tant que client Codat, vous serez redirigé vers une version abrégée du questionnaire d'évaluation d'application. Cela se produit automatiquement à condition que vous ayez défini l'URI de redirection de l'environnement sandbox sur `https://quickbooksonlinesandbox.codat.io/oauth2/callback` conformément à [nos instructions](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#create-a-quickbooks-online-app-configured-for-sandbox).

Les utilisateurs existants devraient avoir reçu un courriel d'Intuit avec un lien vers le questionnaire. Pour les réponses recommandées aux questions concernant Codat, consultez <a className="external" href="https://docs.codat.io/integrations/accounting/quickbooksonline/qbo-app-assessment-questionnaire" target="_blank">Questionnaire d'évaluation d'application QBO</a>.

Pour accéder au questionnaire depuis le Portail des développeurs Intuit :

1. Sélectionnez **Dashboard** dans la barre de navigation supérieure.
2. Sélectionnez **Production Settings**.
3. Cliquez sur **Go to the app assessment questionnaire** en bas de la page.
4. Entrez vos réponses puis soumettez le questionnaire à Intuit.

## Ajouter les clés sécurisées de votre application au Portail Codat

Après avoir créé et configuré une application QuickBooks Online, ajoutez les clés de développement ou de production de l'application à l'intégration correspondante (sandbox ou production) dans le Portail Codat. Lorsque vous êtes prêt, activez l'intégration.

1.  Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.
2.  Localisez **QuickBooks Online Sandbox** ou **QuickBooks Online**, puis cliquez sur **Set up**.
3.  Sous **Integration settings**, entrez le **Client ID** et le **Client secret** de votre application QuickBooks Online.
    - Si vous avez configuré votre application pour l'intégration sandbox, entrez les clés de développement de votre application.
    - Si vous avez configuré votre application pour l'intégration de production, entrez les clés de production de votre application.
4.  Cliquez sur **Save**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.
5.  La boîte de dialogue **Enable QuickBooks Online Sandbox** ou **Enable QuickBooks Online** s'affiche. Choisissez d'activer l'intégration maintenant ou plus tard.

:::note
Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

## Activer l'intégration QuickBooks Online

1. Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **QuickBooks Online** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.
