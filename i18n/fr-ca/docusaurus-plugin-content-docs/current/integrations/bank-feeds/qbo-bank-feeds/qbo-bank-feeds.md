---
title: "QuickBooks Online Bank Feeds"
displayed_sidebar: integrationsBankFeeds
description: "Apprenez-en plus sur notre intégration QuickBooks Online Bank Feeds"
---

:::info Disponibilité limitée

Si vous êtes intéressé à utiliser notre intégration QuickBooks Online Bank Feeds, veuillez contacter votre gestionnaire de compte ou votre responsable de compte.

La connexion aux flux bancaires QuickBooks Online via l'intégration n'est prise en charge que pour les utilisateurs PME qui sont situés aux **États-Unis** et au **Canada**.

:::

## Aperçu

Avec notre intégration, vos clients PME peuvent connecter les comptes bancaires source de votre application aux comptes cibles QuickBooks Online (QBO) en utilisant des identifiants à usage unique. Vous pouvez ensuite écrire des [Transactions bancaires](/accounting-api#/schemas/BankTransactions) depuis les comptes source vers les comptes cibles via Codat.

Les utilisateurs PME connectent leurs comptes bancaires en utilisant l'interface utilisateur Link QBO Bank Feeds, qui est construite et hébergée par Codat. Ils peuvent ensuite voir les transactions des comptes source comme des flux bancaires dans QBO, leur permettant de rapprocher facilement les transactions avec les écritures comptables.

Notez que les transactions bancaires sont envoyées de Codat vers QBO selon un calendrier quotidien. Vos utilisateurs PME peuvent outrepasser cela dans QBO en mettant à jour leurs transactions à tout moment.

## À propos de ce guide

Dans ce guide, nous vous guiderons à travers les fonctionnalités suivantes :

1. [Configurer l'intégration QuickBooks Online Bank Feeds](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-setup) pour qu'elle fonctionne avec votre application.
2. L'utilisateur PME [connecte un compte bancaire à QBO](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-smb-user) en utilisant un nom d'utilisateur et un mot de passe à usage unique qu'il a générés dans l'interface utilisateur Link QBO Bank Feeds.
3. Une fois connecté, vous pouvez [écrire des transactions bancaires vers QBO](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions) pour qu'elles soient disponibles en tant que flux bancaires.

## Écriture de transactions historiques

Vous pouvez écrire des transactions historiques datant de jusqu'à sept jours en fonction de la _date de début du flux_ choisie par l'utilisateur PME dans l'interface utilisateur QBO. Toutes les transactions bancaires doivent être _compensées_ et avoir une `clearedOnDate` définie sur le jour actuel ou un jour antérieur.

L'écriture de transactions bancaires futures (datées dans le futur) vers QBO n'est pas prise en charge.

## Considérations

### À quelle fréquence les transactions bancaires sont-elles envoyées à QuickBooks ?

Lorsque vous écrivez des transactions bancaires, nous les envoyons automatiquement de Codat vers QBO selon un calendrier quotidien. L'utilisateur PME peut cliquer sur **Update** dans la zone **Transactions** de QBO pour outrepasser le calendrier quotidien et voir leurs dernières transactions immédiatement.

### Déconnexion des flux bancaires

Pour désactiver les flux bancaires de votre application, un utilisateur PME peut déconnecter un ou plusieurs de ses comptes cibles dans QBO de la réception de flux bancaires. Lorsqu'un compte cible est déconnecté, il ne recevra plus de transactions, donc toutes les opérations d'écriture ultérieures que vous effectuez sur le compte source échoueront.

Si un flux bancaire est désactivé par un utilisateur PME, il faut 10 jours pour que le statut du compte bancaire source dans Codat change en `disconnected`.

Une connexion de données peut être liée à plusieurs comptes bancaires source. Le statut d'une connexion de données ne change en `Unlinked` que si tous les comptes bancaires source disponibles ont un statut de connexion de `disconnected` (pour voir cette information, appelez [GET /connectionInfo/bankFeedAccounts](/bank-feeds-api#/operations/get-bank-feeds)). Cela peut prendre jusqu'à un jour.

Il n'est pas possible de supprimer directement un compte bancaire de QBO en utilisant l'intégration QuickBooks Online Bank Feeds.

### Personnaliser l'interface utilisateur Link

Nous vous recommandons de personnaliser l'apparence de l'interface utilisateur Link QBO Bank Feeds pour accroître la confiance de vos utilisateurs PME lorsqu'ils connectent leurs comptes bancaires à QBO.

Vous pouvez :

- Télécharger le logo de votre organisation sur la page [Manage organization](https://app-integration.codat.io/settings/organization) du portail Codat.
- [Ajouter un texte d'appel personnalisé](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-setup#add-a-custom-callout-to-the-link-site), en français ou en anglais, pour fournir à vos utilisateurs PME des conseils supplémentaires sur la connexion de leurs comptes.

### Options de localisation

Les utilisateurs PME peuvent basculer entre le texte en anglais et en français en utilisant le bouton de langue dans l'interface utilisateur Link QBO Bank Feeds. Si vous avez ajouté un [texte d'appel personnalisé](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-setup#add-a-custom-callout-to-the-link-site) en français, celui-ci basculera également en fonction de la langue sélectionnée.

---

## Lire ensuite

Comment [configurer l'intégration](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-setup).
