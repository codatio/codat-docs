---
title: "Connexion de compte utilisateur PME"
sidebar_label: Authentification
description: "Apprenez comment vos utilisateurs PME peuvent connecter leurs comptes bancaires à Xero"
---

Après avoir configuré une entreprise, une connexion de données et un ou plusieurs comptes bancaires source, redirigez votre utilisateur PME vers le `linkUrl` (renvoyé par `POST /companies/{companyId}/connections`).

## Interface utilisateur de mappage de compte

Après s'être authentifié avec leur compte Xero, l'utilisateur PME est redirigé vers une interface utilisateur générique de mappage de compte fournie par Codat. Cela leur permet de mapper et de connecter leurs comptes bancaires source à Xero, créant des _connexions de flux bancaires_.

![xero-bank-feeds_mapping-screen-example](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds_annotated-manage-connected-accounts.png "Interface utilisateur Codat pour connecter et mapper les comptes de flux bancaires à Xero.")

L'utilisateur PME peut faire ce qui suit :

1. Ajouter un ou plusieurs comptes bancaires source (les comptes que vous avez fournis via l'endpoint `POST /bankFeedAccounts`).
2. Mapper un compte bancaire source à un compte bancaire cible existant dans Xero.
3. Sélectionner **Create New Account** pour mapper un compte bancaire source à un nouveau compte bancaire cible dans Xero.
4. Sélectionner la **Feed start date** — la date à partir de laquelle une connexion de flux bancaire doit commencer.
5. Connecter les comptes bancaires sélectionnés pour créer des connexions de flux bancaires.

Bien que Codat ne valide pas la Feed start date, l'API de Xero ne prend pas en charge l'écriture de données historiques datant de plus d'un an.

:::info Noms des comptes cibles
Si l'utilisateur choisit l'option **Create New Account**, le compte bancaire cible est créé avec le même nom que le compte bancaire source auquel il est mappé. Les noms de compte bancaire peuvent être modifiés dans Xero à tout moment.
:::

:::caution Les flux bancaires doivent être écrits vers Codat
Les transactions ne sont pas automatiquement téléchargées vers Xero lorsque l'utilisateur connecte avec succès un compte bancaire. Vous devez [Écrire des transactions bancaires](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-push-bank-transactions).
:::

## Gestion de la connexion

Pour permettre à vos utilisateurs PME de voir et de gérer leurs connexions de flux bancaires existantes, vous pouvez les diriger vers un `linkUrl` nouvellement généré. Lorsqu'ils ouvrent cette URL et revisitent l'interface utilisateur de mappage de compte, leurs connexions existantes sont affichées dans le panneau **Manage your connected accounts** :

![xero-bank-feeds_account-mapping-ui-manage-feed-connections](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds_account-mapping-ui-manage-feed-connections.png "Interface utilisateur de mappage de compte fournie par Codat montrant plusieurs comptes connectés dans le panneau inférieur.")

Pour déconnecter un compte bancaire source, l'utilisateur PME survole l'icône de statut **connected** et sélectionne **Disconnect**. Cela désactive immédiatement la connexion de flux bancaire. Le compte déconnecté s'affichera dans le menu déroulant du compte bancaire source lorsque l'utilisateur actualisera la page la prochaine fois.

## Lire ensuite

Maintenant que vos utilisateurs PME ont mappé et connecté leurs comptes bancaires, vous êtes prêt à [Écrire des transactions bancaires vers Xero](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-push-bank-transactions).
