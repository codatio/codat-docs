---
title: "Référence d'intégration BigCommerce"
description: "Choses à savoir lors de la lecture de données depuis BigCommerce"
sidebar_label: Reference
---

Notez les informations suivantes lors de la création de votre application en utilisant l'intégration BigCommerce de Codat.

## Commandes Commerce

Le statut de la commande n'est pas disponible dans les commandes lues depuis BigCommerce. Vous pouvez consulter le statut du paiement associé en utilisant le champ `Payments.status`.

:::note Limite de transactions sur les commandes

Les commandes avec plus de 250 transactions (paiements) ne peuvent pas être récupérées correctement pour nos types de données `commerce-payments` ou `commerce-orders` en raison des limitations de l'API de BigCommerce.
:::

## Méthodes de paiement

Le `sourceModifiedDate` n'est pas disponible pour les méthodes de paiement lues depuis BigCommerce.
