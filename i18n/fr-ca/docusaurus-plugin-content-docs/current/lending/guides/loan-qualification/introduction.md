---
title: "Guide de qualification de prêt"
description: "Prêtez avec Codat et notre solution Lending"
displayed_sidebar: "lending"
sidebar_key: "loan-qualification-introduction"
hide_title: true
hide_description: true
banner_title: Qualification de prêt
banner_image: "/img/banners/risk-cropped.png"
banner_text: "Facilitez le prêt grâce à des vérifications en temps réel des finances d'un demandeur et à une prise de décision automatisée"
sidebar_label: "Introduction"
---

:::tip À qui s'adresse ce guide?

Ce guide est destiné aux développeurs backend à l'aise avec la technologie et qui savent utiliser une API. Aucune expérience en frontend n'est requise.

:::

### Résumé

🎯 Codat facilite le prêt en vous fournissant des données fiables pour vérifier les finances d'un demandeur de prêt. Avec notre application de démonstration, vous expérimenterez le processus de prêt de bout en bout avec une prise de décision automatique soutenue par la solution [Lending](/lending/overview) de Codat. Nous nous concentrerons sur la perspective du prêteur.

⏳ Temps estimé pour compléter : 20 à 30 minutes

🛠️ Le projet de démonstration est implémenté en [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) en tant qu'API backend. Vous pouvez configurer et exécuter l'application de démonstration dans le terminal, ou utiliser votre IDE ou éditeur de code préféré.

### ✔️ Explorez l'application de démonstration pour...

- Créer et soumettre un exemple de formulaire de demande de prêt,
- Créer une entreprise de test via l'API de Codat pour représenter l'emprunteur,
- Relier l'entreprise de test à la source de données financières Sandbox de Codat,
- Récupérer ces données en utilisant les endpoints Enhanced Profit and Loss et Enhanced Balance Sheet de Codat,
- Utiliser les webhooks de Codat pour déclencher l'octroi d'un prêt,
- Produire une décision de prêt automatisée basée sur des points de données financières personnalisés.

### ❌ Ce guide ne couvre pas...

- La construction d'interfaces utilisateur pour les formulaires de demande et les tableaux de bord.
- Les détails ou recommandations sur les divers points de données financières utilisés dans différents modèles de prêt.
- Les détails sur la façon d'effectuer la [réécriture de prêt](/lending/guides/loan-writeback/introduction) pour le prêt général [(voir aussi : Enregistrement des paiements de prêt général)](/lending/guides/loan-writeback/record-general-loan).

### À propos de l'application de démonstration

Le code source de l'application est disponible via notre [dépôt GitHub](https://github.com/codatio/demo-loan-qualification). Clonez-le localement pour essayer l'application.

Le code source utilise Codat et sa solution [Lending](/lending/overview) pour prendre une décision de prêt. Nous vous guiderons à travers la configuration dans le Portal et le code dans la [prochaine section](/guides/loan-qualification/setting-up).

### Pourquoi nous utilisons _Lending_

L'application de démonstration utilise la fonctionnalité de catégorisation de [Lending](/lending/overview). Cette fonctionnalité analyse la liste complète des comptes d'une entreprise et attribue une catégorie à chaque compte. Cela résout le problème des comptables qui donnent des noms différents à la même catégorie comptable.

Par exemple, un comptable peut nommer son compte marketing « Facebook Ads », et un autre peut l'appeler « Marketing en ligne ». Lending catégorisera les deux comptes de la même manière - comme _Expense > Operating > Marketing_. Cela permet aux prêteurs d'utiliser une taxonomie standardisée, peu importe comment le comptable gère ses comptes.

Cela standardise les données indépendamment de leur source et vous aide à effectuer une évaluation complète de la santé financière de votre client, à produire des informations supplémentaires (par exemple, calculer des ratios financiers) et à automatiser la prise de décision basée sur ces informations.

---

### Lire la suite

Maintenant que vous connaissez l'objectif et le but de notre application de démonstration et de son guide :

- [Configurez Codat et votre environnement local](/lending/guides/loan-qualification/setting-up).
