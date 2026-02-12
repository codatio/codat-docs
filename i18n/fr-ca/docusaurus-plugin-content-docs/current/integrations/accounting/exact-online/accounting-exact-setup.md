---
title: "Configurer l'intégration Exact Online"
description: "Explorez notre intégration API avec Exact Online (NL et UK)."
sidebar_label: Configuration
---

## Identifiants pour Exact Online NL et Exact Online UK

Exact Pays-Bas et Exact UK nécessitent des identifiants différents. Cet article est destiné aux deux versions et indique où les instructions sont spécifiques à une version ou peuvent être utilisées pour les deux.

:::caution Limites de taux API

L'API Exact Online a des limites de taux pour restreindre le nombre de requêtes qu'une application est autorisée à envoyer à l'API pendant une fenêtre de temps, ainsi que d'autres limites de taux. Chaque limite de taux a un comportement spécifique lorsqu'elle est dépassée – pour plus de détails, consultez [API limits](https://support.exactonline.com/community/s/knowledge-base#All-All-DNO-Simulation-gen-apilimits) dans la base de connaissances Exact.

Voici un résumé des limites de taux basées sur le temps :

- Limite par minute : une application peut effectuer 60 appels API, par entreprise, par minute.
- Limite quotidienne : une application peut effectuer 5 000 appels API, par entreprise, par jour.

:::

:::caution Demander l'autorisation pour que vos clients se connectent

Pour permettre à vos clients de se connecter à votre application de production, vous _devez_ d'abord [demander l'autorisation à Exact](/integrations/accounting/exact-online/accounting-exact-setup#section-request-permission-to-allow-your-customers-to-connect-to-your-app), sinon les utilisateurs obtiendront une erreur pendant le flux d'autorisation.
:::

Avant de pouvoir accéder aux données des clients utilisant Exact pour leur comptabilité, vous devez configurer une intégration Exact dans le portail Codat. Vous devrez :

- Enregistrer une nouvelle application sur le site développeur d'Exact.
- Ajouter vos clés sécurisées au portail Codat.
- Demander des autorisations pour que d'autres utilisateurs puissent accéder à votre application.

## Enregistrer une nouvelle application sur le site développeur d'Exact

1. Assurez-vous d'avoir un compte Exact App Center en devenant partenaire App Center. Si vous ne l'avez pas encore fait, visitez l'un des sites suivants :
   - <a
       href="https://start.exactonline.co.uk/docs/HRMSubTrialNew.aspx?bcaction=0&type=10&language=EN&UseSimpleWizard=1&PackageSetCode=APPCENTER"
       target="_blank"
     >
       Exact Online UK App Center
     </a>
     pour l'intégration Exact UK, ou
   - <a
       href="https://start.exactonline.nl/docs/HRMSubTrialNew.aspx?bcaction=0&type=10&language=EN&UseSimpleWizard=1&PackageSetCode=APPCENTER"
       target="_blank"
     >
       Exact Online NL App Center
     </a>
     pour l'intégration Exact NL
2. Connectez-vous au site développeur Exact à :
   - <a href="https://apps.exactonline.com/gb/" target="_blank">
       https://apps.exactonline.com/gb/
     </a>
     pour l'intégration Exact UK
   - <a href="https://apps.exactonline.com/nl/" target="_blank">
       https://apps.exactonline.com/nl/
     </a>
     pour l'intégration Exact NL
3. Sélectionnez **Manage my apps** dans la barre de navigation supérieure.
4. Selon le but de votre application, sélectionnez soit **Register a product app** ou **Register a testing app** dans la section correspondante.
5. Ajoutez les détails dans la boîte de dialogue **Register a testing app**.
   - Le **App name** sera affiché aux utilisateurs pendant qu'ils lient leurs comptes ; assurez-vous qu'il identifie clairement votre organisation.
   - L'**Redirect URL** doit être comme suit, pour les applications de production et de test : `https://exact.codat.io/oauth/callback`
6. Acceptez les termes et conditions, puis cliquez sur **Register**.

<img src="/fr-ca/img/old/0e788f0-exact-app-details-dialog.png" />

La page **Manage my apps** s'affiche. Dans l'onglet **Develop your app**, vous verrez le **Client ID** et le **Client secret** de votre application. Pour retrouver cette page, allez dans **Manage my apps**, puis sélectionnez l'application que vous avez créée.

![](/img/old/bb55b4c-ExactRegisterAPIKey.png "ExactRegisterAPIKey.png")

## Ajouter les clés sécurisées de votre application au portail Codat

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.

2. Localisez **Exact (Netherlands)** ou **Exact (UK)** et cliquez sur **Set up**.

3. Sous **Integration settings**, saisissez les valeurs pour le **Client ID** et le **Client secret** du centre d'applications Exact.

4. Cliquez sur **Save**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.

5. Dans la boîte de dialogue **Enable Exact**, sélectionnez si vous souhaitez activer l'intégration maintenant ou plus tard.

:::note

Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

## Activer l'intégration Exact Online

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **Exact (UK)** ou **Exact (Netherlands)** et cliquez sur le bouton à bascule pour activer l'intégration pertinente.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Demander l'autorisation pour permettre à vos clients de se connecter à votre application

Pour votre application de production, vous devez demander l'autorisation à Exact pour permettre à vos utilisateurs de se connecter à votre application. Pour plus d'informations, consultez <a href="https://support.exactonline.com/community/s/knowledge-base#All-All-DNO-ReleaseNote-1811-rn-appcenter-reqperm" target="_blank">App publication procedure</a> dans la base de connaissances Exact.

Suivez ces étapes :

1. Dans le centre d'applications Exact, sélectionnez **Manage my apps**, puis cliquez sur l'onglet **Submit for review**.
2. Dans la section **Data & Security Review**, cliquez sur **Edit**.
3. Dans la case **Purpose of your app**, décrivez brièvement à quoi sert votre application.
4. Dans la section **Scopes**, sélectionnez les scopes indiqués dans le tableau dans [Liste de scopes recommandée](/integrations/accounting/exact-online/accounting-exact-setup#recommended-list-of-scopes). Ensuite, passez à l'étape 5.
5. Saisissez le reste des informations du point de vue de votre entreprise, et non de Codat, mais avec quelques exceptions pour les questions suivantes :

- **Q:** **Is the data that you receive, process, or store in your app or linked systems protected against unauthorized access or disclosure, such as through encryption?** A: Dans la réponse, vous pouvez inclure que pour l'intégration tierce (Codat), les données sont chiffrées en transit à l'aide de SSL et au repos à l'aide d'AES-256 géré par Microsoft Azure.
- **Q:** **Do you have a change management process in place which ensures that all changes to the app or service are authorized and tested before being released?** A: Dans la réponse, vous pouvez inclure que l'intégration tierce (Codat) a également son propre processus de gestion des changements comprenant des tests d'intégration automatisés, des tests de développeur, une fonction QA dans le cadre de sa pratique de livraison continue utilisant Microsoft Dev Ops - permettant également un retour en arrière immédiat de toute fonctionnalité défectueuse.
- **Q:** **Do you have a version control system in place to manage the change history, branching, merging, and traceability of changes to the app or service?** A: Dans la réponse, vous pouvez inclure que l'intégration tierce (Codat) gère son contrôle de version via Azure DevOps et diverses plateformes de contrôle de source.

6. Une fois enregistré, sélectionnez **Submit** en haut de la page.
7. Une fois votre **Data & Security Review** réussie, dans la page **Submit for Review**, sélectionnez **Request** dans la section **Request permission** et attendez que les autorisations soient accordées par Exact. Pendant cette étape, votre application aura une étiquette **In Review**.

![](/img/old/9fa3fdd-AppInReview.png "AppInReview.PNG")

## Liste de scopes recommandée

Sur la page **Data & Security Review** dans le centre d'applications Exact, vous devez sélectionner les _scopes_ pour votre application. Les scopes définissent le niveau d'accès – soit **None**, **Read**, ou **Manage** – que votre application nécessite pour chaque ressource Exact.

Pour prendre en charge un large éventail de cas d'utilisation, nous recommandons de sélectionner les scopes indiqués dans le tableau suivant.

:::note

Si vous rencontrez des problèmes avec votre application après avoir activé les scopes recommandés, veuillez contacter le support Codat.
:::

| Resource         | Access level                 |
| :--------------- | :--------------------------- |
| **Crm**          |                              |
| accounts         | Manage                       |
| **Sales**        |                              |
| orders           | Manage                       |
| invoices         | Manage                       |
| **Purchase**     |                              |
| orders           | Manage                       |
| invoices         | Manage                       |
| **Logistics**    |                              |
| items            | Manage                       |
| **Financial**    |                              |
| generalledgers   | Read (Manage pour Bank Feeds) |
| accounting       | Read (Manage pour Bank Feeds) |
| receivables      | Read                         |
| payables         | Read                         |
| costcenters      | Read                         |
| **Organization** |                              |
| administration   | Read                         |
| documents        | Manage                       |

Laissez les ressources qui ne sont pas dans le tableau précédent définies sur **None**.
