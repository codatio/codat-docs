---
title: "Rapports Lending en Excel"
description: "Décrit le processus requis pour générer et télécharger les rapports Lending au format Excel"
sidebar_label: "Aperçu"
image: "/fr-ca/img/banners/social/lending.png"
---

Les endpoints de rapports Excel sont utilisés pour produire et télécharger des rapports Excel. Pour plus d'informations sur les rapports disponibles, consultez la section [types de rapports](#available-report-types).
Ces rapports peuvent être générés via le portail ou l'API.

Le processus pour télécharger un rapport Excel via l'API est :

1. [Demander](/lending-api#/operations/generate-excel-report) un rapport Excel pour téléchargement.
2. [Vérifier le statut de progression](/lending-api#/operations/get-excel-report-generation-status) du dernier rapport demandé (optionnel).
3. [Télécharger](/lending-api#/operations/download-excel-report) le dernier rapport Excel.

Une seule demande sera traitée à la fois par entreprise PME et par type de rapport.
Le rapport généré est conservé dans le stockage blob et est remplacé lorsqu'un nouveau est généré.
Ces rapports vous montreront quelles données sont disponibles à partir de notre API sans écrire de code au préalable et comment ces données peuvent être utilisées pour générer automatiquement vos métriques financières clés.

## Types de rapports disponibles

- [Rapport d'audit](/lending/excel/audit-report) (`reportType=audit`) identifie les indicateurs de comptes inexacts ou obsolètes, vous aidant à prendre des décisions en toute confiance.
- [Rapport de flux de trésorerie amélioré](/lending/excel/enhanced-cash-flow-report) (`reportType=enhancedCashFlow`) contient des données de flux de trésorerie améliorées.
- [Rapport financier amélioré](/lending/excel/enhanced-financials-report) (`reportType=enhancedFinancials`) contient des données de compte de résultat et de bilan améliorées, vous permettant de calculer des métriques clés.
- [Rapport de factures amélioré](/lending/excel/enhanced-invoices-report) (`reportType=enhancedInvoices`) contient des factures améliorées qui sont liées aux paiements.

:::tip Utilisez-vous le rapport financier amélioré?
Référez-vous au [Modèle de métriques](/lending/excel/enhanced-financials-report#metrics-template) qui démontre comment nous pouvons utiliser les données du [Rapport financier amélioré](/lending/excel/enhanced-financials-report) pour calculer des métriques financières.
:::
