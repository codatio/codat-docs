---
title: Créer des paiements de factures
sidebar_label: Payer une facture
displayed_sidebar: payables
description: "Enregistrer et rapprocher les paiements de factures dans le logiciel comptable de la PME"
---

## Aperçu

Finalement, votre client PME effectuera un paiement depuis votre application, que vous devrez ensuite enregistrer et rapprocher dans le logiciel comptable de la PME. Un **paiement de facture** représente une allocation de fonds dans l'un des comptes fournisseurs (CF) de votre client.

:::tip Couverture des types de factures
Notre solution **synchrone Bill Pay** se concentre sur une expérience d'implémentation rapide et un enregistrement simplifié des paiements. En conséquence, elle prend en charge les paiements de **factures individuelles uniquement**.
:::

## Gérer les comptes de paiement

:::tip Paiements en devise étrangère

Si vous facilitez les paiements en devise étrangère, vous devez convertir le paiement dans la devise du compte ou créer un nouveau compte dans cette devise.

:::

Vos clients PME peuvent avoir plusieurs comptes bancaires qu'ils peuvent utiliser pour payer une facture. Dans votre application, permettez-leur de définir le compte bancaire à partir duquel le paiement doit être effectué.

### Récupérer les comptes

Si votre client PME effectue des paiements à partir d'un compte bancaire existant, récupérez la liste de ses comptes et permettez-lui d'associer les méthodes de paiement à chacun d'entre eux. Utilisez le point de terminaison [Obtenir les options de mappage des paiements](/sync-for-payables-v2-api#/operations/get-mapping-options-payments) pour ce faire.

Par défaut, ce point de terminaison retourne une liste de comptes bancaires actifs. Vous pouvez utiliser les [requêtes](/using-the-api/querying) pour modifier cela.

### Créer un compte

Si le client PME prévoit effectuer des paiements à partir d'une nouvelle méthode de paiement ou d'un nouveau compte que vous fournissez, créez le nouveau compte dans son logiciel comptable en utilisant notre point de terminaison simplifié [Créer un compte bancaire](/sync-for-payables-v2-api#/operations/create-bank-account). Le compte contiendra ses transactions, facilitant ainsi les flux de rapprochement des paiements de la PME.

## Enregistrer un paiement

:::tip Paiements partiels

Notre solution synchrone Bill Pay prend en charge les paiements où une seule facture est payée **en totalité**. Pour enregistrer un paiement partiel, utilisez le même point de terminaison et ajustez les valeurs pour refléter le montant du paiement partiel.

:::

Lorsqu'une PME paie sa facture dans votre application, utilisez le point de terminaison [Créer un paiement de facture](/sync-for-payables-v2-api#/operations/create-bill-payment) pour représenter cette allocation de fonds dans le logiciel comptable de votre client. Ce point de terminaison utilise un modèle de paiement de facture simplifié, ne nécessitant que les champs suivants : `amount`, `date`, `reference`, `accountRef` et `currencyRate`.

:::tip Récapitulatif

Ceci conclut le processus de paiement de factures pris en charge par notre solution synchrone Bill Pay. Vous avez fourni à votre client ses fournisseurs, ses factures et ses comptes bancaires, et lui avez permis de choisir les méthodes de paiement appropriées. Vous avez reflété les paiements de factures dans son système comptable.

En conséquence, le client verra ces factures marquées comme payées dans son logiciel et ses soldes de comptes fournisseurs et de fournisseurs réduits.

:::
