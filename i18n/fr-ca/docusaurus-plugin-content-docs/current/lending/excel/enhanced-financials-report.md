---
title: "Rapport Excel financier amélioré"
description: "Téléchargez le rapport financier amélioré vers Excel"
sidebar_label: "Rapport financier amélioré"
image: "/img/banners/social/lending.png"
draft: true
---

Notre rapport Excel financier amélioré vous donne les mêmes données que vous obtiendriez des endpoints [Financiers améliorés](/lending/enhanced-financials/overview) mais dans un classeur Excel. Vous pouvez utiliser le rapport pour tester certaines entreprises et vous familiariser avec les données avant de construire vers les endpoints API équivalents.

Le rapport contient la sortie des fonctionnalités suivantes :

- [Comptes de compte de résultat amélioré](/lending-api#/operations/get-accounts-for-enhanced-profit-and-loss)
- [Comptes de bilan amélioré](/lending-api#/operations/get-accounts-for-enhanced-balance-sheet)

## Génération du rapport

Vous pouvez générer le rapport Excel financier amélioré en utilisant l'API ou le portail Codat. L'article [Rapports Lending en Excel](/lending/excel/overview) décrit comment générer et télécharger le rapport en utilisant l'API.

## Utilisation du rapport

Pour tirer le meilleur parti du rapport, essayez de créer un tableau croisé dynamique et de regrouper les données par niveaux de catégorie 1-5 pour reproduire une vue d'état financier. Vous pouvez également créer des formules pour calculer des ratios financiers à partir de ces données.

![Rapport financier amélioré](/img/lending/enhanced-financials.png "Rapport financier amélioré")

### Modèle de métriques

Nous avons également créé un [fichier Excel de modèle de métriques](/documents/assess-metrics.xlsx). Vous pouvez coller des données dans ce fichier à partir du rapport Excel financier amélioré pour calculer des métriques et ratios financiers clés.

[![Modèle de métriques](/img/lending/metrics-template.png "Modèle de métriques")](/documents/assess-metrics.xlsx)

## Dépannage

Tous les types de données pertinents pour la génération du rapport financier amélioré sont activés automatiquement lorsque la solution Lending est activée pour votre client Codat.

Cependant, si vous ne parvenez pas à générer le rapport Lending ou si le rapport est incomplet, vérifiez que les types de données suivants sont activés :

- Accounts
- Profit and Loss
- Balance Sheet

Si ces exigences ne sont pas satisfaites, un classeur Excel vide sera retourné.
