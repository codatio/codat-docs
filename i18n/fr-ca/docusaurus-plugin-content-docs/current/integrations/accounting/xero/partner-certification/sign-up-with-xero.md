---
title: "Sign Up with Xero"
description: "Apprenez à activer le flux Sign Up with Xero avec Codat pour soutenir la certification de votre application"
---

Fournir le flux Sign Up with Xero est une exigence pour tous les Partenaires App Store cherchant la certification, tel que prescrit par les [points de contrôle de certification](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/#required-for-all-integrations) de Xero. Il est optionnel pour les Partenaires Services Financiers, selon que vous choisissez d'être répertorié dans l'App Store.

Sign Up with Xero est un parcours utilisateur qui mène les clients potentiels de l'App Store de Xero directement à votre application. Il réduit le nombre d'étapes que les utilisateurs doivent franchir pour s'inscrire à votre application et permet à Xero de suivre les références provenant de l'App Store de Xero.

## Options de mise en œuvre du flux

La documentation de Xero décrit [deux approches pour Sign Up with Xero](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/sign-up) :

- Option A

  Cette option utilise un concept connexe appelé [Sign In with Xero](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/sign-in), qui permet aux utilisateurs d'utiliser Xero comme fournisseur d'identité lors de la connexion à votre application. Cela s'apparente à se connecter avec Google ou Facebook.

  Cette approche nécessite généralement beaucoup plus de ressources développeur et n'est pas possible pour toutes les applications (par exemple, les applications qui n'ont pas de processus d'intégration entièrement en libre-service et nécessitent que les clients parlent d'abord à un représentant commercial).

- Option B

  Cette approche est plus populaire auprès des clients Codat. Elle est plus simple et permet aux applications de réduire le temps et les ressources développeur nécessaires pour réussir la certification Xero.

Si vous souhaitez mettre en œuvre l'Option A du flux Sign Up with Xero, veuillez informer votre équipe de compte Codat pour obtenir de l'aide. Pour l'Option B, suivez les directives ci-dessous et consultez votre équipe de compte Codat si vous avez des questions.

## Mise en œuvre de l'Option B de Sign Up with Xero avec Codat

Cette option du flux Sign Up with Xero est destinée à amener les clients potentiels de l'App Store de Xero vers un formulaire de demande sur votre site web. Le flux vous permet de pré-remplir le formulaire avec des données OpenID de Xero, comme le nom et l'adresse e-mail du client.

Si vous n'avez pas de formulaire d'inscription ou de demande existant, vous devez en créer un, car vous aurez besoin d'une URL vers laquelle rediriger les clients pendant le parcours SUxW. Dans ce guide, nous faisons référence à cette URL comme votre **Sign up success redirect URL**.

### Flux utilisateur

![Sign Up with Xero - Option B - User Flow](/img/integrations/accounting/xero/Sign-Up-with-Xero-Option-B-User-Flow.png)

### Récupérer l'URL Sign Up with Xero

L'**URL Sign Up with Xero** est l'URL partagée avec l'utilisateur final pour qu'il autorise l'accès à Xero. Cette URL est générée par Codat, mais nécessite une personnalisation pour votre instance Codat :

1. Récupérez le `clientId` et le `platformKey`.

   Ces deux valeurs feront partie de l'**URL Sign Up with Xero**.

   Appelez notre endpoint `GET https://api.codat.io/profile/syncSettings` et récupérez le `clientId` retourné dans la réponse. Pour Xero, la valeur `platformKey` est `gbol`, comme indiqué dans notre [liste des clés de logiciels comptables](/integrations/accounting/overview#platform-keys).

2. Générez l'URL.

   Utilisez les valeurs récupérées précédemment pour générer une URL avec la structure suivante : `https://link-api.codat.io/clients/{ClientID}/signUpWith/{PlatformKey}?link.scopes=openid%20profile%20email`

   Le paramètre `link.scopes=openid%20profile%20email` garantit que seuls les détails d'identité de l'utilisateur sont demandés lors de cet appel d'autorisation.

   Vous devrez fournir cette URL à Xero dans le formulaire de révision d'application et la saisir dans votre fiche App Store après la certification.

Lorsque ce lien est lancé par le client, il déclenche la création d'une entreprise et d'une connexion dans Codat, et les redirige vers la connexion Xero pour l'autorisation. Une fois autorisés, ils seront redirigés vers votre **Sign up success redirect URL**.

### Définir l'URL Sign up success redirect

Accédez à **Settings > Auth flow > Redirects** pour accéder à la page [Redirects](https://app.codat.io/settings/redirects) dans le portail Codat. Sous **Sign up success redirect URL**, entrez l'URL de base du formulaire que vous afficherez au client, sans aucun remplacement de paramètre. Vos modifications seront enregistrées automatiquement.

![Sign Up success redirect URL](/img/integrations/accounting/xero/Sign-up-success-redirect.png)

### Pré-remplir le compte du client avec les données Xero

Une fois que le client autorise la connexion Xero, utilisez les données OpenID Xero pour pré-remplir les formulaires ou champs d'intégration. Voici un exemple de redirection avec des paramètres OpenID :

```http
{SignUpSuccessRedirectURL}?companyId=f3069a22-ce9a-499b-b341-a7d6564c65z1&connectionId=4302ebaf-aba6-4763-ba61-47a7992634a3&statusCode=200&openId_email=j.doe%2B1%40codat.io&openId_given_name=John&openId_family_name=Doe
```

Vous pouvez également utiliser l'API Codat et le `companyId` pour lire des informations supplémentaires d'intérêt, telles que les informations sur l'entreprise. Des conseils supplémentaires sur l'utilisation des données OpenID sont [disponibles ici](/auth-flow/customize/use-openid-connect).

### Gérer l'entreprise Codat

Lorsque l'**URL Sign Up with Xero** est déclenchée et qu'une entreprise Codat est créée, elle a un nom qui suit la convention `Xero-YYYY-MM-DD-THHMMSS`. C'est parce que nous n'avons aucune information d'identification pour l'utilisateur à ce moment-là.

Si vous avez des exigences spécifiques pour la dénomination des entreprises, vous pouvez mettre à jour le nom via l'API en utilisant notre endpoint [Update company](/platform-api#/operations/update-company). Utilisez le `companyId` retourné dans le cadre des données OpenID Xero.

### Gérer l'annulation de l'utilisateur

Vous devez créer une logique pour gérer le scénario d'un utilisateur qui annule en cours de route, et afficher une page d'erreur pertinente. Cela est similaire à ce que nous recommandons lors de l'utilisation de notre [flux d'authentification Link](/auth-flow/overview).

Dans le cadre des paramètres de réponse OpenID, vous recevrez le code d'état approprié que vous pourrez gérer en conséquence. Pour une liste complète de nos codes d'état, consultez [Codes d'état et erreurs](/using-the-api/errors).
