---
title: "Rapport Excel de flux de trésorerie amélioré"
description: "Téléchargez le rapport de flux de trésorerie amélioré vers Excel"
sidebar_label: "Rapport de flux de trésorerie amélioré"
image: "/fr-ca/img/banners/social/lending.png"
draft: true
---

Notre rapport Excel de flux de trésorerie amélioré vous donne les mêmes données que vous obtiendriez de l'endpoint [Flux de trésorerie amélioré](/lending/enhanced-cash-flow/overview) mais dans un classeur Excel. Vous pouvez utiliser le rapport pour tester certaines entreprises et vous familiariser avec les données avant de construire vers l'endpoint API équivalent.

Le rapport contient la sortie de la fonctionnalité [Flux de trésorerie amélioré](/lending/enhanced-cash-flow/overview).

## Prérequis

Le rapport Excel de flux de trésorerie amélioré nécessite qu'une entreprise ait les types de données suivants synchronisés :

- Banking-accounts
- Banking-transactions

Si ces exigences ne sont pas satisfaites, un classeur Excel vide sera retourné.

## Génération du rapport

Vous pouvez générer le rapport Excel de flux de trésorerie amélioré en utilisant l'API ou le portail Codat. L'article [Rapports Lending en Excel](/lending/excel/overview) décrit comment générer et télécharger le rapport en utilisant l'API.

## Utilisation du rapport

Le rapport fournit des informations sur les comptes bancaires et les transactions bancaires de l'entreprise. Les transactions sont ordonnées par date et contiennent les métriques de confiance et de catégorie financière.

![Rapport de flux de trésorerie amélioré](/img/lending/enhanced-cash-flow-blur.png "Rapport de flux de trésorerie amélioré")
