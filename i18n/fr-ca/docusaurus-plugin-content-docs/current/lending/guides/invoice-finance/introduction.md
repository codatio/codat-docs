---
title: "Guide de développement de financement de factures"
displayed_sidebar: "lending"
sidebar_key: "invoice-finance-introduction"
description: "Financement sélectif de factures avec Codat et notre solution Lending"
hide_title: true
hide_description: true
banner_title: Guide de développement de financement de factures
banner_image: "/fr-ca/img/banners/lending-cropped.png"
banner_text: "Financement sélectif de factures avec Codat et notre solution Lending"
---

:::tip À qui s'adresse ce guide?

Ce guide s'adresse aux développeurs backend expérimentés qui savent comment utiliser une API. Aucune expérience frontend n'est requise.

:::

### Résumé

🎯 Avec notre application de démonstration, vous passerez par le flux du processus de financement de factures, de l'établissement d'une connexion avec le logiciel de comptabilité d'un emprunteur jusqu'à l'émission d'une décision sur les factures sélectionnées. Vous verrez comment Codat facilite la levée de capital par l'emprunteur contre les montants dus par les clients, et facilite la prise de décision de financement de factures pour le prêteur.

⏳ Temps estimé pour compléter : 15-25 minutes

🛠️ Le projet de démonstration est implémenté en [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) sous forme d'API backend. Vous pouvez configurer et exécuter l'application de démonstration dans le terminal, ou utiliser votre IDE ou éditeur de code préféré.

### ✔️ Plongez dans l'application de démonstration pour...

- Établir une connexion avec notre logiciel de comptabilité de test
- Lire les données de facturation requises pour l'évaluation de financement
- Vérifier l'éligibilité des factures en fonction d'un ensemble de critères que nous avons définis dans l'application
- Émettre une décision sur les factures éligibles

### ❌ Ce guide ne couvre pas...

- La construction d'interfaces utilisateur de formulaire de demande ou de tableau de bord
- La réalisation de vérifications de diligence raisonnable sur l'emprunteur
- Les instructions sur la façon de créer votre propre produit de financement de factures
- Les détails sur la façon d'effectuer la [réécriture de prêt](/lending/guides/loan-writeback/introduction) pour le financement de factures

### À propos de l'application de démonstration

Le code source de l'application est disponible via notre [dépôt GitHub](https://github.com/codatio/demo-invoice-finance). Clonez-le localement pour essayer l'application.

Le code utilise la solution [Lending](/lending/overview) de Codat pour prendre une décision de financement de factures. Nous vous guiderons à travers la configuration dans le Portail et le code lors de [la configuration de l'application de démonstration](/lending/guides/invoice-finance/setting-up).

### Pourquoi nous utilisons _Lending_

L'application de démonstration s'appuie sur la solution [Lending](/lending/overview) de Codat, qui simplifie les aspects suivants du financement de factures :

- Collecte des factures

  Nous éliminons l'effort manuel de téléversement et d'extraction des données de facturation avec nos intégrations de logiciels de comptabilité, économisant du temps et des efforts à votre équipe et offrant à l'emprunteur une meilleure expérience numérique.

- Évaluation des risques

  Nos intégrations de logiciels de comptabilité vous donnent un aperçu en temps réel de la santé financière d'une entreprise et de ses clients, vous permettant de prendre de meilleures décisions de financement de factures.

---

### À lire ensuite

Maintenant que vous connaissez l'objectif et le but de notre application de démonstration et de son guide, vous pouvez :

- [Configurer Codat et votre environnement local](/lending/guides/invoice-finance/setting-up).
