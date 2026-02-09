---
title: "Authentifier les utilisateurs via votre propre application web"
description: "Vous pouvez utiliser votre propre application web pour le parcours de connexion de l'utilisateur PME pour Sage Bank Feeds"
sidebar_label: Authentification
---

Notre intégration [Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/) utilise une interface utilisateur d'autorisation pour authentifier un utilisateur PME en fonction de son ID de connexion de données soumis. Vos utilisateurs PME sont représentés dans Codat en tant qu'Entreprises. Pour comprendre comment cette méthode fonctionne, consultez [Flux utilisateur PME : Connecter un compte bancaire source à Sage](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup#smb-user-flow-connect-a-source-bank-account-to-sage).

Au lieu de cette interface utilisateur, votre propre application web peut authentifier les utilisateurs PME en fonction de l'Entreprise et de la connexion de données auxquelles ils sont liés. Avec cette méthode, lorsqu'un utilisateur sélectionne votre organisation comme fournisseur de flux bancaires dans un produit Sage, il est redirigé vers votre application web au lieu de l'interface utilisateur d'autorisation Codat.

### Prérequis

Vous devez avoir complété les tâches de configuration suivantes :

- Activer l'intégration Sage Bank Feeds
- Créer une entreprise pour représenter l'utilisateur PME
- Créer une connexion de données pour l'entreprise vers l'intégration Sage Bank Feeds
- Ajouter un ou plusieurs comptes bancaires source à mettre à disposition de l'utilisateur PME

Pour obtenir de l'aide pour accomplir ces tâches, consultez [Activer l'intégration Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup#enable-the-sage-bank-feeds-integration) et [Créer une Entreprise et une connexion de données, puis ajouter des comptes bancaires](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup#create-a-company-and-data-connection-then-add-bank-accounts).

## Configurer votre application web personnalisée comme URL de redirection

Tout d'abord, configurez l'intégration Sage Bank Feeds pour utiliser l'URL de votre application web comme URL de redirection d'autorisation.

1. Dans le portail Codat, allez à la page <a className="external" href="https://app-integration.codat.io/settings/integrations/bankfeeds" target="_blank">**Bank feed integrations**</a>.

2. Cliquez sur **Manage** à côté de **Sage Bank Feeds**.

3. Entrez l'URL de votre application web personnalisée comme **Authorization redirect URL**. Par exemple :

   ![Auth URL](/img/old/ef4ab16-sage-bank-feeds_integration-settings-page-auth-url.png "URL de redirection d'autorisation personnalisée entrée sur la page de paramètres d'intégration pour Sage Bank Feeds.")

4. Cliquez sur **Save**.

## Comprendre les flux d'authentification

Il existe deux flux d'authentification entre Sage, l'intégration Sage Bank Feeds de Codat et votre application web.

### Sage redirige l'utilisateur vers votre application web

1. Dans Sage, l'utilisateur PME sélectionne l'onglet **Banking**.

2. Ils cliquent sur le bouton **Connect Bank**.

3. Ils recherchent et sélectionnent votre organisation parmi la liste des fournisseurs de flux bancaires.

4. Ils sélectionnent un compte bancaire cible — le compte qui recevra les flux bancaires de votre application.

5. L'utilisateur est redirigé de Sage vers une URL qui est construite comme suit :

   ```http
   https://{authorizationRedirectUrl}?authorizationId={authId}&redirectUri={redirectUri}&bankId={bankId}
   ```

   1. L'`authorizationRedirectUrl` est l'URL de l'application web que vous avez configurée dans le portail Codat.
   2. L'`authId` est l'identifiant d'autorisation unique pour l'entreprise.
   3. Le `redirectUri` est l'URI vers lequel l'utilisateur PME sera redirigé après l'authentification via votre application web (voir l'étape deux dans la procédure suivante).
   4. Le `bankId` est un ID unique qui représente la banque que la PME a tenté de lier dans Sage (ce sera une banque représentant votre organisation).

6. Tel que configuré dans votre application web, l'utilisateur est redirigé vers une page de connexion ou d'autorisation utilisateur.

7. L'utilisateur PME se connecte à votre application web.

8. Votre application web authentifie l'utilisateur par rapport à l'entreprise Codat et à la connexion de données auxquelles il est lié.

:::caution Iframe
Sage affichera vos pages dans un iframe intégré dans le produit Sage. Assurez-vous que votre interface utilisateur peut être utilisée dans ce format.
:::

Vous devez inclure l'en-tête "Content-Security-Policy" avec une valeur de `frame-ancestors 'self' https://*.sagebankdrive.com https://*.sage.com https://*.intacct.com https://*.sageone.com` pour garantir qu'il fonctionne dans l'iframe.

### Votre application web redirige l'utilisateur vers l'écran de sélection de compte bancaire

1. Après une invite, votre application web envoie une requête à l'endpoint <a href="https://docs.codat.io/platform-api#/operations/update-connection-authorization"
   target="blank">PUT /authorization</a>. L'`authId` et le 'bankId' (tous deux de l'URL à l'étape cinq de la procédure précédente) doivent être fournis dans le corps de la requête en tant que propriétés supplémentaires :

   ```http
   PUT company/{companyId}/connections/{connectionId}/authorization
   ```

   Corps de la requête :

   ```json
   {
      "authorizationId": {authId},
      "bankId": {bankId}
   }
   ```

2. Si la requête `PUT /authorization` renvoie une réponse 200, votre application web doit rediriger l'utilisateur PME vers le `redirectUri` pour l'Entreprise, avec l'`authId` ajouté comme paramètre de requête :

   ```http
   {redirectUri}?state={authId}

   // exemple:

   redirect_uri=https://snd01eu.sagebankdrive.com/api/v1/indirectredirect/11111-22222-33333-88888-9999?state=1122-3344-5566-7788
   ```

3. Si l'utilisateur PME a été authentifié avec succès avec Codat, Sage affiche une boîte de dialogue répertoriant les comptes bancaires source disponibles — le compte bancaire dans votre application qui enverra les flux bancaires. Par exemple :

   ![Sage account selection screen](/img/integrations/accounting/sage-mapping-redirect-screen.png "Boîte de dialogue Sage répertoriant les comptes bancaires source disponibles")

4. L'utilisateur PME sélectionne le compte bancaire qu'il souhaite utiliser, puis clique sur **OK**.

5. Sage redirige l'utilisateur PME vers le produit Sage à partir duquel il a commencé le flux d'authentification.

Vous pouvez maintenant utiliser l'endpoint <a href="https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId__connectionInfo_bankFeedAccounts" target="_blank">GET /bankFeedAccounts</a> pour récupérer les comptes bancaires source et écrire des transactions bancaires. Pour plus de détails, consultez [Utiliser votre intégration Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-use).
