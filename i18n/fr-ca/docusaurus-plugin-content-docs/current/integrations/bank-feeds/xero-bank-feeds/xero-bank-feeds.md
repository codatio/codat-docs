---
title: "Xero Bank Feeds"
displayed_sidebar: integrationsBankFeeds
description: "Apprenez-en plus sur notre intégration Xero Bank Feeds"
---

Notre intégration Xero Bank Feeds vous permet de configurer un flux bancaire depuis un compte bancaire de votre application (le compte bancaire source) vers un compte dans Xero (le compte bancaire cible). Après l'établissement d'une connexion de flux, vous pouvez écrire des transactions bancaires depuis le compte source vers le compte cible.

![xero-bank-feeds-flowchart](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds-flow-amended.png "Organigramme montrant les transactions bancaires écrites depuis votre application vers Xero")

Avec l'accès aux flux bancaires, vos clients peuvent plus facilement rapprocher les transactions bancaires avec les écritures comptables, comme les factures et les paiements de factures.

La fonctionnalité de flux bancaires fait partie de notre [intégration comptable Xero](/integrations/accounting/xero/accounting-xero) existante.

## Types de données et opérations pris en charge

Les flux bancaires sont représentés comme des flux de [Transactions de compte bancaire](/bank-feeds-api#/schemas/BankTransactions) écrits vers Codat dans l'ordre chronologique. Les comptes bancaires cibles sont représentés comme des [Comptes de flux bancaire](/bank-feeds-api#/schemas/BankFeedAccount).

Les flux bancaires sont écrits vers Xero immédiatement, pas selon un calendrier.

## Comment ça fonctionne

1. Pour commencer, créez une application Xero dans le <a href="https://developer.xero.com/" target="_blank">portail développeur Xero</a>.

   :::caution Approbation requise
   Vous devrez obtenir l'approbation de Xero pour les Bank Feeds.
   :::

2. [Configurez l'intégration](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-setup).

3. Vos utilisateurs PME configurent leurs flux bancaires. Ils peuvent démarrer ce processus directement depuis l'interface utilisateur de votre application, ou utiliser la fonctionnalité « Add bank account » dans Xero pour rechercher le nom de votre institution, puis lancer votre interface utilisateur. Consultez [Connexion de compte utilisateur PME](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-smb-user).

4. Après s'être authentifiés avec Xero, les utilisateurs PME créent des mappages de compte et des connexions de flux en utilisant l'_interface utilisateur de mappage de compte_ fournie par Codat ou via votre propre interface utilisateur de mappage.

5. En utilisant l'endpoint [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions), vous écrivez des transactions bancaires vers Codat pour les utilisateurs authentifiés. Consultez [Pousser des transactions bancaires vers Xero](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-push-bank-transactions).

6. Les utilisateurs peuvent gérer et supprimer les connexions de flux existantes en utilisant l'interface utilisateur de mappage de compte.

## Lire ensuite

[Configurer l'intégration Xero Bank Feeds](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-setup)
