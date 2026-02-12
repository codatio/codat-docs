---
title: "Comment fonctionne la suppression des paiements de factures fournisseurs"
sidebar_label: "Supprimer les paiements de factures fournisseurs"
description: "Découvrez comment fonctionne la suppression des paiements de factures fournisseurs dans NetSuite."
---

Selon les données d'origine qui ont été écrites, un paiement de facture fournisseur Codat est créé dans NetSuite comme l'un des objets suivants :

- Bill Payment
- Vendor Prepayment Application (lorsqu'il est appliqué à une ou plusieurs factures fournisseurs)
- Bill Credit (lorsqu'il est appliqué à une ou plusieurs factures fournisseurs)
- Deposit (seules les lignes de dépôt affectant les comptes fournisseurs proviennent des paiements de factures fournisseurs)

NetSuite gère la suppression de chacun de ces éléments différemment.

Les Bill Payments et Vendor Prepayment Applications (lorsqu'ils sont appliqués aux factures fournisseurs) sont supprimés de NetSuite.

Si vous spécifiez un `billPaymentId` qui correspond à un Bill Credit dans NetSuite, l'objet Bill Credit lui-même n'est pas supprimé. Le Bill Credit est mis à jour de sorte qu'il ne s'applique plus à aucune facture fournisseur et est affiché comme _Unapplied_. Par exemple :

<img src="/fr-ca/img/old/5bc9146-netsuite-bill-credit-unapplied.jpg" />

Si vous spécifiez un `billPaymentId` qui correspond à un Deposit dans NetSuite, seules les lignes de dépôt qui affectent les comptes fournisseurs sont supprimées. Ces lignes sont affichées dans les onglets **Other Deposits** et **Cash Back** sur le Deposit :

![Image](/img/integrations/accounting/netsuite/netsuite_deposite-other-deposits.png "Un dépôt NetSuite avec les onglets Other Deposits et Cash Back mis en évidence.")

:::info Prise en charge de la suppression d'objets

Pour vérifier quels types de données et plateformes prennent en charge la suppression d'objets, appelez le point de terminaison [List integrations](/platform-api#/operations/list-integrations). Nous augmentons la prise en charge de la suppression d'objets sur divers logiciels comptables et types de données.

:::
