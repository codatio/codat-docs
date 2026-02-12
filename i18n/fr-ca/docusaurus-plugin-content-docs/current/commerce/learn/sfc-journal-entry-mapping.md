---
title: "Ventes en écritures de journal"
description: "Examiner le mappage des écritures de journal pour les données de ventes et ses exemples"
image: "/fr-ca/img/banners/social/commerce.png"
---

Avec Sync for Commerce, votre commerçant peut choisir de refléter ses données de ventes provenant du logiciel de commerce électronique et de point de vente (PDV) :

- sous forme de **facture de ventes** quotidienne agrégée, ou
- sous forme d'**écriture de journal** quotidienne agrégée.

Codat recommande d'utiliser les **écritures de journal** pour bénéficier de ces avantages :

- **Facilité d'utilisation**

  Les écritures de journal quotidiennes uniques sont plus faciles à gérer, ajuster et réconcilier que, par exemple, les factures, les paiements et les notes de crédit.

- **Impact contrôlé sur le grand livre général**

  Une écriture de journal est la façon la plus granulaire d'impacter le grand livre général d'une entreprise sans être confiné à des types de comptes spécifiques.

- **Données fiscales simplifiées**

  Les écritures de journal simplifient l'enregistrement des données fiscales car les taux de taxe et leurs comptes associés n'ont pas besoin d'être gérés séparément.

## Choisir un type de synchronisation

Votre commerçant peut choisir le type de synchronisation qu'il préfère lors de la configuration de son entreprise pour la première fois dans le flux de synchronisation. Notez que la sélection ne peut pas être modifiée après la configuration initiale.

<img
  src="/fr-ca/img/sync-for-commerce/2023-01-24_16-34-28.png"
  alt="Une image du flux de synchronisation Choisir le type de synchronisation dans le flux de synchronisation"
/>

## Exemples d'écritures de journal

:::note Mappage des écritures de journal

Vous pouvez mapper les écritures de journal de ventes à n'importe quel type de compte, y compris le passif, sauf si cela est explicitement interdit par le logiciel de comptabilité cible.
:::

### Ventes

L'exemple d'écriture de journal couvre les ventes au comptant et les déductions, incluant des commandes payées d'un total de 1 000 £, un total de taxe de 200 £ et des pourboires de 50 £.

| Compte                 | Type de compte      | Débits | Crédits |
| :--------------------- | :------------------ | :----- | :------ |
| Comptant               | Actif               | 1 250 £|         |
| Ventes / Revenus       | Revenus             |        | 1 000 £ |
| Pourboires             | Revenus ou passif   |        | 50 £    |
| TVA / Passif fiscal    | Passif              |        | 200 £   |

L'exemple d'écriture de journal couvre les ventes à recevoir, comme les ventes via des factures ou les ventes "acheter maintenant, payer plus tard". Cela inclut un total de commande de 5 500 £, des rabais de 500 £ du total de la commande et un total de taxe de 1 000 £.

| Compte                 | Type de compte | Débits | Crédits |
| :--------------------- | :------------- | :----- | :------ |
| Comptes clients        | Actif          | 6 000 £|         |
| Ventes / Revenus       | Revenus        |        | 5 000 £ |
| TVA / Passif fiscal    | Passif         |        | 1 000 £ |

### Remboursements

L'exemple d'écriture de journal couvre un remboursement en espèces avec taxe de vente. Cela inclut un total de commande remboursé de 100 £ et un total de taxe de 20 £.

| Compte                 | Type de compte | Débits | Crédits |
| :--------------------- | :------------- | :----- | :------ |
| Comptant               | Actif          |        | 120 £   |
| Ventes / Revenus       | Revenus        | 100 £  |         |
| TVA / Passif fiscal    | Passif         | 20 £   |         |

L'exemple d'écriture de journal couvre un remboursement émis sous forme de note de crédit. Cela inclut un total de commande remboursé de 200 £ et un total de taxe de 40 £.

| Compte                 | Type de compte | Débits | Crédits |
| :--------------------- | :------------- | :----- | :------ |
| Comptes clients        | Actif          |        | 240 £   |
| Ventes / Revenus       | Revenus        | 200 £  |         |
| TVA / Passif fiscal    | Passif         | 40 £   |         |

### Écriture de journal de ventes quotidiennes agrégées

L'exemple d'écriture de journal couvre les frais de traitement des paiements et les remboursements de frais de paiement, incluant un total de commandes de 1 000 £, un total de taxe de 200 £, des pourboires de 50 £, des frais de traitement des paiements de 60 £ et un remboursement de frais de traitement des paiements de 30 £.

| Compte                       | Type de compte      | Débits | Crédits |
| :--------------------------- | :------------------ | :----- | :------ |
| Comptant                     | Actif               | 1 220 £|         |
| Ventes / Revenus             | Revenus             |        | 1 000 £ |
| Pourboires                   | Revenus ou passif   |        | 50 £    |
| TVA / Passif fiscal          | Passif              |        | 200 £   |
| Dépenses de frais de paiement| Dépense             | 60 £   |         |
| Remboursements de frais de paiement | Dépense      |        | 30 £    |

## Catégorisation fiscale dans les journaux quotidiens

La fonctionnalité de catégorisation fiscale est disponible pour chaque commerçant utilisant des journaux quotidiens, tant que leur logiciel de commerce prend en charge les composantes fiscales. Elle vise les commerçants opérant dans des endroits où les produits encourent plusieurs taxes remises à différentes autorités.

Avec cette fonctionnalité, le commerçant peut mapper plusieurs taux de taxe de leur solution de commerce aux comptes fiscaux pertinents dans leur système comptable. Elle ajoute un écran supplémentaire au flux de synchronisation, où le mappage a lieu. Cela crée des lignes de journal séparées pour l'écriture de journal quotidienne.

<img
  src="/fr-ca/img/old/b85cf3a-2023-01-13_08-29-50.png"
  alt="Interface utilisateur du flux de synchronisation affichant l'étape de mappage fiscal avec trois catégories de taxe de vente avec différents mappages"
/>
