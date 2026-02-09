---
title: "Configurer l'intégration Dynamics 365 Business Central"
slug: "accounting-dynamics365businesscentral-setup"
description: "Explorez notre intégration API avec Dynamics 365 Business Central."
sidebar_label: Configuration
metadata:
  description: "Accédez aux données des clients utilisant Dynamics 365 Business Central pour leur comptabilité."
---

Avant de pouvoir accéder aux données des clients qui utilisent Dynamics 365 Business Central, vous devez configurer l'intégration dans le portail Codat. Vous devrez :

- Enregistrer et configurer votre application Business Central, puis générer votre ID client
- Générer votre secret client
- Mettre à jour les autorisations d'accès
- Ajouter vos clés sécurisées au portail Codat
- Activer l'intégration Dynamics 365 Business Central dans le portail Codat

Nous vous recommandons de [tester votre intégration](/integrations/accounting/dynamics365businesscentral/test-your-dynamics-365-business-central-integration) en utilisant un compte Business Central d'essai avant l'utilisation en production.

:::caution L'extension Dynamics 365 Business Central doit être installée

Pendant le processus de liaison PME, le package d'extension Dynamics 365 Business Central _doit_ être installé avec succès sur le compte de l'utilisateur pour que l'intégration fonctionne. L'extension est publiée par Codat.

Pour plus d'informations, consultez [Processus d'installation de l'extension](/integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral-setup#extension-installation-process) ci-dessous.
:::

## Prérequis

Une licence Dynamics 365 Business Central est requise pour utiliser notre intégration. Au minimum, vous aurez besoin d'une licence Dynamics 365 Business Central Essentials. <p>Pour plus d'informations, consultez la <a href="https://dynamics.microsoft.com/en-us/business-central/pricing/" target="_blank">page de tarification</a> Business Central pour votre région.</p>

Nous supposons également que votre organisation a déjà configuré son compte Microsoft et que le nom de domaine dans l'e-mail de votre compte a été [vérifié par DNS](https://learn.microsoft.com/en-us/azure/active-directory/enterprise-users/domains-admin-takeover#internal-admin-takeover). Si vous créez un compte pour la toute première fois, vous devrez peut-être [créer un locataire pour votre organisation](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/create-new-tenant#create-a-new-tenant-for-your-organization) et [vérifier le domaine](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/add-custom-domain).

## Enregistrer votre application

Enregistrez votre application Business Central sur le portail Microsoft Azure.

1. Connectez-vous au <a className="external" href="https://portal.azure.com" target="_blank">portail Microsoft Azure</a>.
   - Si vous avez déjà un compte Dynamics 365 Business Central, utilisez ces informations de compte pour vous connecter. Sinon, vous pouvez <a className="external" href="https://signup.microsoft.com/signup?sku=6a4a1628-9b9a-424d-bed5-4118f0ede3fd&ru=https%3A%2F%2Fbusinesscentral.dynamics.com" target="_blank">créer un compte</a>.

   - Pour accéder à toute configuration Azure que votre entreprise a déjà configurée—par exemple, pour l'authentification des utilisateurs—saisissez votre e-mail d'entreprise lors de l'inscription.

   - Si votre organisation utilise Microsoft Entra ID pour contrôler l'accès à Dynamics 365 Business Central, demandez à votre administrateur Azure d'ajouter votre compte au groupe approprié.
     :::caution Impossible de créer un compte
     > Contactez votre administrateur Business Central si vous ne pouvez pas créer un nouveau compte Business Central. Ils ont peut-être désactivé cette fonctionnalité.

2. Après vous être connecté, sélectionnez **Microsoft Entra ID** sur la page d'accueil ou le menu de gauche.

   Les détails du <a className="external" href="https://docs.microsoft.com/en-us/office365/enterprise/subscriptions-licenses-accounts-and-tenants-for-microsoft-cloud-offerings#tenants" target="_blank">locataire</a> auquel votre compte est connecté s'affichent.

3. Vous pouvez avoir accès à plusieurs locataires, alors vérifiez attentivement les détails. Si vous ne voyez pas les informations attendues, sélectionnez **Switch tenant**, puis sélectionnez le bon locataire.

   ![Image](/img/old/da8746b-d365-Switch_tenants.png)

4. Sélectionnez **App registrations** dans le menu de gauche, puis cliquez sur **New registration**.

   ![Image](/img/old/7484936-d365-App_registrations.png)

5. Saisissez les détails suivants :
   - **Name** : Saisissez un nom court pour votre application. Vos clients verront ce nom lorsqu'ils autoriseront votre connexion à leur système comptable.

   - **Supported account types** : Sélectionnez **Accounts in any organizational directory (Any Microsoft Entra ID directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)**. Cela permet à Codat d'accéder aux données dans Dynamics 365 Business Central.

   - **Redirect URI** : Sélectionnez **Web**, puis saisissez l'URL suivante : `https://dynamics365businesscentral.codat.io/oauth/callback`

6. Sélectionnez **Register**.

   Azure enregistre les détails de votre application et génère votre ID client comme indiqué dans la capture d'écran ci-dessous. Vous en aurez besoin plus tard, alors copiez les détails maintenant ou gardez la page ouverte dans un onglet de navigateur séparé.

   > ❗ Copiez votre ID client
   >
   > Votre ID client ne sera plus affiché après la fermeture de la page.

   ![Image](/img/old/93e97bf-d365-Application_id.png)

## Générer et récupérer votre secret client

Dans le portail Azure :

1. Sélectionnez **Certificates & secrets** dans le menu de gauche.

2. Sous **Client secrets**, cliquez sur **New client secret**.

3. Dans la boîte de dialogue **Add a client secret**, mettez à jour les informations suivantes :
   - **Description** : Saisissez une brève description de votre secret client pour faciliter sa recherche.
   - **Expires** : Sélectionnez l'option la plus appropriée qui respecte la politique de sécurité de votre entreprise.

4. Cliquez sur **Add**.

   Votre secret client est généré et affiché en bas de la page. **Important : La _Secret Value_ ne sera plus affichée en entier, vous devez donc copier la valeur maintenant.**

   ![image](/img/old/a5f66c9-D365.png)

## Mettre à jour les autorisations d'accès

Maintenant, mettez à jour les autorisations d'accès pour votre application. Celles-ci contrôlent les données auxquelles votre application peut accéder dans Business Central.

1. Sélectionnez **API permissions** dans le menu de gauche.

2. Sous **Configured permissions**, cliquez sur **Add a permission**.

3. Dans le panneau **Request API permissions**, faites défiler vers le bas et sélectionnez **Dynamics 365 Business Central**.

4. Sélectionnez **Delegated permissions** et sélectionnez également les deux premières autorisations listées :
   - **user_impersonation**
   - **Financials.ReadWrite.All**

   ![image](/img/old/7cdb0c4-d365-delegated_permissions.png)

5. Cliquez sur **Add permissions**.

6. Au-dessus des autorisations listées, sélectionnez **Grant admin consent for Default Directory**, puis sélectionnez **Yes** pour confirmer votre modification. Cette option peut ne pas être disponible pour tous les types d'abonnement.

La configuration de votre application Dynamics 365 Business Central est terminée.

## Ajouter les clés sécurisées de votre application au portail Codat

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.

2. Localisez **Dynamics 365 Business Central** et cliquez sur **Set up**.

3. Sous **Integration settings**, saisissez les valeurs pour le **Client ID** et le **Client secret** du portail Azure.

4. Cliquez sur **Save**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.

5. La boîte de dialogue **Enable Dynamics 365 Business Central** s'affiche. Sélectionnez si vous souhaitez activer l'intégration maintenant ou plus tard.

## Activer l'intégration Dynamics 365 Business Central

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **Dynamics 365 Business Central** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

Votre intégration Dynamics 365 Business Central est maintenant configurée.

## Processus d'installation de l'extension

Avant de lier leurs comptes, nous vous recommandons d'informer vos clients du processus d'installation et de liaison de l'_extension Dynamics 365 Business Central_.

Pendant le processus de liaison, Codat installe une extension Dynamics 365 Business Central dans l'environnement Business Central du client. Cette extension possède les attributs suivants :

- **Description/Publisher** : Codat
- **Name** : App Link

L'installation de l'extension peut prendre 10 à 20 minutes et la page d'installation peut se rafraîchir à plusieurs reprises pendant l'installation. Un message s'affiche lorsque l'extension a été installée avec succès.

Sachez que des erreurs de récupération peuvent survenir pendant l'installation.

Si la dernière version de l'extension est désinstallée ou dépubliée, Codat ne peut pas récupérer toutes les données requises du logiciel comptable.
