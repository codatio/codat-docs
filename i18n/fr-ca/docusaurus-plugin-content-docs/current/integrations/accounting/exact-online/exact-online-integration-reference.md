---
title: "Référence de l'intégration Exact Online"
description: "Éléments à connaître lors de la synchronisation des données avec Exact Online (NL et UK)."
sidebar_label: Référence
---

Soyez conscient des informations suivantes lors de la création de votre application en utilisant l'intégration Exact Online (NL et UK) de Codat.

## Pièces jointes

Les extensions de fichier ne sont pas indiquées lors de la synchronisation des pièces jointes de factures fournisseurs avec Exact.

## Articles

Lors de la lecture des articles depuis Exact Online, le champ `type` indique si l'objet métier source est un article contrôlé par stock.

- Les articles contrôlés par stock ont un `type` de `Inventory`.
- Les articles non contrôlés par stock ont un `type` de `Unknown`.

## Journaux

Vous pouvez lire les types de journaux suivants depuis Exact Online :

- General
- Cash
- Bank
- Payment service
- Sales
- Purchase

## Écritures de journal

Le champ `postedOn` n'est pas rempli lors de la lecture des écritures de journal depuis Exact Online. Cette information n'est pas disponible depuis l'API Exact.

## Transferts (Exact UK)

L'écriture de transferts n'est prise en charge que pour les transferts entre un compte bancaire et un compte nominal de type Balance Sheet.
