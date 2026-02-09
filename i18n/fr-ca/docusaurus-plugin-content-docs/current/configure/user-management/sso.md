---
title: "SSO"
description: "Apprenez à activer l'authentification unique dans le portail Codat"
createdAt: "2021-12-14T14:49:16.827Z"
updatedAt: "2022-12-19T06:15:27.799Z"
---

:::note SSO SAML

Nous offrirons bientôt le SSO SAML sur nos plans Entreprise. Si vous êtes intéressé par cette fonctionnalité, veuillez en parler à votre gestionnaire de compte.

:::

## Aperçu

Le SSO tiers permet aux utilisateurs d'accéder à plusieurs applications en utilisant un ensemble d'identifiants d'un fournisseur d'identité (IdP) tiers, tel que Microsoft ou Google.

Dans le cadre de notre engagement envers des niveaux élevés de sécurité des données, nous prenons en charge le SSO tiers pour offrir à vos utilisateurs la possibilité d'accéder au portail Codat en utilisant leurs identifiants de compte Microsoft ou Google.

Si les paramètres pertinents sont activés, les options **Se connecter avec Google** et **Se connecter avec Microsoft** sont disponibles sur la page de connexion du portail Codat :

![](/img/other-guides/portal_sign-in-to-codat.png "test")

Tant que les adresses courriel sont les mêmes, tenter de se connecter avec un compte Google ou Microsoft liera automatiquement le compte au compte Codat existant. Les utilisateurs doivent d'abord avoir été invités à utiliser Codat avec la même adresse courriel qu'ils utilisent pour accéder au compte tiers (Google ou Microsoft).

## Avantages du SSO tiers

Outre les avantages immédiats de gagner du temps à chaque connexion et d'avoir un mot de passe de moins à retenir, le SSO tiers introduit :

- Une sécurité accrue. En tant qu'IdP, Microsoft et Google fournissent des fonctionnalités de sécurité supplémentaires, y compris l'authentification multifacteur.
- Une administration simplifiée. Les administrateurs peuvent maintenir des politiques de sécurité fortes et cohérentes, et gérer et fermer les comptes d'utilisateurs facilement.

:::note Support SSO d'entreprise

Le portail Codat ne prend actuellement pas en charge le SSO d'entreprise utilisant SAML.

:::

## Gérer le SSO tiers

Les deux méthodes de connexion Google et Microsoft sont activées par défaut dans le portail Codat. Nous recommandons de les garder activées pour profiter au maximum des avantages qu'elles offrent. En tant qu'administrateur, vous pouvez choisir de désactiver complètement la connexion par mot de passe Codat et forcer tous vos utilisateurs à se connecter avec leur compte Google ou Microsoft.

Pour gérer les services SSO tiers, effectuez les étapes suivantes dans le portail Codat :

1. Allez à **Paramètres > Paramètres de l'organisation > Utilisateurs**.
2. Cliquez sur **Gérer la connexion** (disponible uniquement pour les administrateurs).
3. Dans la boîte de dialogue **Gérer la connexion**, utilisez les bascules pour activer et désactiver les services.

:::note Message de connexion personnalisé

Vous pouvez également maintenir un message de connexion personnalisé, qui sera affiché chaque fois qu'un utilisateur se connecte. Le message s'applique à toutes les méthodes de connexion.

:::

![](/img/other-guides/portal_manage-sign-in-inc-custom-login-message.png "test")

:::note Désactivation du SSO

Si vous décidez de désactiver le SSO tiers, vos utilisateurs pourront toujours se connecter avec leurs identifiants de courriel et de mot de passe, si la méthode de connexion **Mot de passe** est activée.

:::
