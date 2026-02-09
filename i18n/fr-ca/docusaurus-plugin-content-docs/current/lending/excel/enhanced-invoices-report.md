---
title: "Rapport Excel de factures amélioré"
description: "Téléchargez le rapport de factures amélioré vers Excel"
sidebar_label: "Rapport de factures amélioré"
image: "/img/banners/social/lending.png"
draft: true
---

Notre rapport Excel de factures amélioré vous donne les mêmes données que vous obtiendriez de l'endpoint [Factures améliorées](/lending/features/accounts-receivable-overview#reconciled-invoices) mais dans un classeur Excel. Vous pouvez utiliser le rapport pour tester certaines entreprises et vous familiariser avec les données avant de construire vers l'endpoint API équivalent.

Le rapport contient la sortie des fonctionnalités suivantes :

- [Factures améliorées](/lending/features/accounts-receivable-overview#reconciled-invoices)

## Prérequis

Le rapport Excel de factures amélioré nécessite qu'une entreprise ait à la fois une connexion comptable et que les types de données suivants soient synchronisés :

- Invoices
- Payments

Si ces exigences ne sont pas satisfaites, un classeur Excel vide sera retourné.

## Génération du rapport

Vous pouvez générer le rapport Excel de factures amélioré en utilisant l'API ou le portail Codat. L'article [Rapports Lending en Excel](/lending/excel/overview) décrit comment générer et télécharger le rapport en utilisant l'API.

## Utilisation du rapport

Le rapport est ordonné de sorte que les factures les plus récentes soient en haut du document. Excel est limité à un million de lignes de données ; cependant, cette limitation ne s'applique pas à l'[API de factures améliorées](/lending-api#/operations/get-enhanced-invoices-report).

![Rapport de factures amélioré](/img/lending/enhanced-invoices-blur.png "Rapport de factures amélioré")
