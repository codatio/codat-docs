---
title: Aperçu d'Expenses
sidebar_label: Expenses
description: Écrire des dépenses catégorisées et des pièces jointes vers tous les principaux logiciels de comptabilité, en gérant les complexités du rapprochement des dépenses
displayed_sidebar: expenses
image: "/fr-ca/img/sync-for-expenses/sfe-banner.png"
hide_title: true
hide_description: true
hide_table_of_contents: true
tags: [overview, syncforexpense]
banner_title: Expenses
banner_class: expenses
banner_icon: "/fr-ca/img/logos/products/logo_expenses_clear.svg"
banner_image: "/fr-ca/img/banners/bank-feeds.png"
banner_text: "Écrire des dépenses catégorisées et des pièces jointes vers tous les principaux logiciels de comptabilité, en gérant les complexités du rapprochement des dépenses"
// video_url: "https://www.youtube.com/embed/4zLgo0iP6MI"
// video_text: What is Expenses?
---

import { IntegrationsList } from "@components/Integrations";
import { integrationsFilterExpenses } from "@components/Integrations/integrations";
import ClientLibraries from "@components/ClientLibraries";
import Products from "@components/Products";

## Qu'est-ce que c'est ?

**Expenses** est une solution standardisée basée sur une API qui facilite la création et le maintien d'intégrations comptables et d'un processus de gestion des dépenses de bout en bout que les clients adorent.

Avec **58 % des petites entreprises** disant qu'elles choisissent une solution de dépenses plutôt qu'une autre en fonction de la **qualité de leurs intégrations comptables**, Expenses vous permet d'écrire des dépenses catégorisées et des pièces jointes vers les logiciels de comptabilité de vos clients via nos intégrations comptables de haute qualité.

Elle comprend une logique intégrée pour que vous puissiez facilement gérer toutes les complexités du rapprochement des dépenses, telles que les remboursements, la comptabilisation de plusieurs devises et permettre aux utilisateurs de corriger les erreurs.

## Pour qui est-ce ?

Avec Expenses, les fournisseurs de cartes d'entreprise, les fournisseurs de gestion des dépenses et les néobanques peuvent facilement intégrer des fonctionnalités d'automatisation comptable dans leur solution qui prendraient autrement des mois, voire des années, à concevoir, construire et maintenir à partir de zéro.

## Pourquoi l'utiliser ?

<ul className="card-container col-2">
  <li className="card">
    <div className="header">
      <img
        src="/fr-ca/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Augmenter la part de portefeuille</h3>
    </div>
    <p>
      Faites de votre carte la façon préférée de vos clients de dépenser grâce à des intégrations comptables sans tracas qui leur font gagner du temps sur les tâches administratives financières fastidieuses.
    </p>
  </li>

<li className="card">
  <div className="header">
    <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Aller sur le marché rapidement</h3>
  </div>
  <p>
    Déployez des intégrations de gestion des dépenses robustes avec les principaux logiciels de comptabilité
    six fois plus rapidement via notre API unique et rationalisée.
  </p>
</li>

<li className="card">
  <div className="header">
    <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Libérer les ressources de développement</h3>
  </div>
  <p>
    Exécutez vos intégrations comptables sur notre infrastructure éprouvée à grande échelle
    sans les tracas de la maintenance et de l'optimisation continues des API.
  </p>
</li>

<li className="card">
  <div className="header">
    <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Obtenir des données standardisées</h3>
  </div>
  <p>
    Expenses est complètement standardisé avec un modèle de données basé sur
    l'expérience des fournisseurs de cartes de dépenses.
  </p>
</li>

<li className="card">
  <div className="header">
    <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Capturer les reçus</h3>
  </div>
  <p>
    Téléversez facilement des reçus contre une dépense, fournissant à votre client PME
    une piste d'audit complète pour chaque transaction.
  </p>
</li>

<li className="card">
  <div className="header">
    <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Synchronisation bidirectionnelle</h3>
  </div>
  <p>
    Expenses reste en contact avec le grand livre général du client PME pour que vos
    intégrations soient plus robustes et fiables.
  </p>
</li>

</ul>

## Comment ça fonctionne ?

Avec Expenses, vous pouvez créer une solution qui couvre toutes les étapes clés de la gestion des dépenses.

### [Configurer le client](/expenses/configure-customer)

Commencez par créer une [entreprise](../terms/company) pour représenter votre client PME dans Codat. Ensuite, établissez sa [connexion](/core-concepts/connections) au logiciel de comptabilité du client. Nous gérerons l'autorisation et la liaison à cette plateforme - tout ce dont nous avons besoin est que votre PME approuve cet accès via notre [flux d'authentification](/auth-flow/overview).

### [Mapper les transactions des clients](/expenses/config-and-categorize)

Créez une configuration de dépenses pour l'entreprise de votre client afin qu'Expenses puisse attribuer leurs dépenses aux comptes, fournisseurs et clients corrects.

Les dépenses peuvent également être catégorisées selon la comptabilité de votre PME. Offrez à votre client l'opportunité de choisir les comptes, les catégories de suivi et les taux de taxe auxquels leurs dépenses seront mappées.

### [Créer et mettre à jour des transactions](/expenses/sync-process/expense-transactions)

Une fois que le client a catégorisé ses dépenses à l'aide des options de mappage, utilisez Expenses pour écrire leurs achats quotidiens dans le logiciel de comptabilité de la PME. Expenses permet également aux clients PME d'écrire des pièces jointes pour une piste d'audit complète.

Vous pouvez également créer des [transferts](/expenses/sync-process/transfer-transactions) et des [remboursements](/expenses/sync-process/reimbursable-expense-transactions).

### [Synchroniser les transactions de dépenses](/expenses/sync-process/syncing-expenses)

Une fois que vous créez une transaction de dépense catégorisée, nous lançons automatiquement une synchronisation de ces transactions. La synchronisation traite les dépenses que vous avez créées, les mappe au format requis par le logiciel de comptabilité et les enregistre dans cette plateforme.

### [Téléverser des pièces jointes](/expenses/sync-process/uploading-receipts)

Lors de la création d'une transaction de dépense, permettez à votre client PME de sauvegarder une copie du reçu associé dans son logiciel de comptabilité.

## Intégrations prises en charge

<IntegrationsList filter={integrationsFilterExpenses}/>
<br/>
<details>
<summary> Intégrations prises en charge par endpoint</summary>

| Intégration        | expense-transactions | reimbursable-expense-transactions | transfer-transactions | adjustment-transactions |
| ------------------ | -------------------- | --------------------------------- | --------------------- | ----------------------- |
| Dynamics 365       | ✔️                   |                                   |                       | ✔️                      |
| FreeAgent          | ✔️                   | ✔️                                | ✔️                    |                         |
| Oracle NetSuite    | ✔️                   | ✔️                                |                       |                         |
| QuickBooks Desktop | ✔️                   | ✔️                                | ✔️                    | ✔️                      |
| QuickBooks Online  | ✔️                   | ✔️                                | ✔️                    | ✔️                      |
| Sage Intacct       | ✔️                   | ✔️                                |                       |                         |
| Xero               | ✔️                   |                                   | ✔️                    | ✔️                      |
| Zoho Books         | ✔️                   | ✔️                                |                       |                         |

</details>

<details>
<summary> Intégrations prises en charge par type de transaction</summary>

| Intégration        | Payment               | Refund                | Reward                | Chargeback            |
| ------------------ | --------------------- | --------------------- | --------------------- | --------------------- |
| Dynamics 365       | ✔️                    | ✔️                    | ✔️                    | ✔️                    |
| FreeAgent          | ✔️                    |                       |                       |                       |
| Oracle NetSuite    | ✔️                    | ✔️                    | ✔️                    | ✔️                    |
| QuickBooks Desktop | ✔️                    | ✔️ (credit card only) | ✔️ (credit card only) | ✔️ (credit card only) |
| QuickBooks Online  | ✔️                    | ✔️                    | ✔️                    | ✔️                    |
| Sage Intacct       | ✔️ (credit card only) | ✔️ (credit card only) |                       |                       |
| Xero               | ✔️                    | ✔️                    | ✔️                    | ✔️                    |
| Zoho Books         | ✔️                    |                       |                       |                       |

</details>

## Construire avec les bibliothèques clientes

Utilisez nos [SDK complets](/get-started/libraries) pour lancer et simplifier votre parcours de développeur en automatisant le processus de gestion des dépenses pour vos clients. Les SDK sont disponibles en plusieurs langages et fournissent des exemples de requêtes et de réponses pour toute la gamme de scénarios de gestion des dépenses.

<ClientLibraries productName={"sync-for-expenses"} />

---

## À lire ensuite

- [Commencer à construire](/expenses/getting-started) avec la solution Expenses
