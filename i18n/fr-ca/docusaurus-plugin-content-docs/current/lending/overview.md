---
title: "Aperçu de Lending"
sidebar_label: Lending
description: "Découvrez les fonctionnalités qui composent la solution Lending"
displayed_sidebar: lending
image: "/img/banners/social/lending.png"
hide_title: true
hide_description: true
hide_table_of_contents: true
banner_title: Lending
banner_class: lending
banner_icon: "/img/logos/products/logo_assess_clear.svg"
banner_image: "/img/banners/assess.png"
banner_text: "Notre solution Lending vous aide à prendre des décisions de crédit plus judicieuses pour les petites entreprises en vous permettant de lire les dernières données de vos clients provenant des logiciels de comptabilité, de services bancaires et de commerce qu'ils utilisent déjà. Elle comprend également des fonctionnalités pour aider les fournisseurs à vérifier l'exactitude des données et à les traiter plus efficacement."
video_url: "https://www.youtube.com/embed/UgtbRe-j0Jo?si=KMRaVzgKCnW7E7tr"
video_text: Lending avec Codat
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import {
  integrationsAccountingFilterLending,
  bankingIntegrations,
  commerceIntegrations,
} from "@components/Integrations/integrations";
import ClientLibraries from "@components/ClientLibraries";

## Qu'est-ce que c'est?

Notre solution Lending est construite sur les dernières données comptables, commerciales et bancaires, vous fournissant les points de données les plus importants dont vous avez besoin pour obtenir une image complète de la solvabilité des PME et effectuer une évaluation approfondie de vos clients.

## À qui s'adresse-t-elle?

Notre solution Lending convient le mieux aux prêteurs numériques, aux néobanques, aux fournisseurs de cartes d'entreprise et aux logiciels de commerce qui souhaitent effectuer une évaluation de la santé financière et de la performance d'une petite entreprise.

## Pourquoi l'utiliser?

Nous avons fait le gros du travail pour vous en construisant des intégrations aux plateformes que vos clients utilisent déjà et en gérant la complexité de la standardisation. Notre solution Lending est livrée avec une gamme de fonctionnalités qui rendent les données des clients plus faciles à collecter et à traiter, et vous donne des informations que vous n'aviez pas auparavant sur l'exactitude des données partagées.

#### Avec Lending, vous pouvez :

1. Automatiser les évaluations d'accessibilité en utilisant des données bancaires catégorisées.
2. Évaluer la solidité financière d'une entreprise avec notre rapport sur la dette.
3. Rationaliser le calcul des ratios avec des états financiers catégorisés.
4. Actualiser les données de l'emprunteur à tout moment sans avoir besoin d'une collecte de données manuelle coûteuse.

## Fonctionnalités

Notre solution Lending vous offre un ensemble de fonctionnalités pour vous aider à rationaliser votre processus de souscription :

<ul className="card-container col-3">
  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Relevés bancaires</h3>
    </div>
    <p>
      Souscrivez avec des flux de trésorerie précis et en temps réel enrichis de catégories de dépenses et de revenus.
    </p>
  </li>

  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Ventes</h3>
    </div>
    <p>
      Souscrivez avec des données en temps réel provenant des plateformes de paiement et de commerce des PME.
    </p>
  </li>

<li className="card">
  <div className="header">
    <img src="/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>États financiers</h3>
  </div>
  <p>
    Automatisez l'analyse des états financiers et des ratios avec un état des
    résultats et un bilan entièrement standardisés.
  </p>
</li>

<li className="card">
  <div className="header">
    <img src="/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Passifs</h3>
  </div>
  <p>Informations complètes sur les prêts et analyse de l'historique de crédit.</p>
</li>

<li className="card">
  <div className="header">
    <img src="/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Comptes clients</h3>
  </div>
  <p>Évaluez le risque débiteur en temps réel avec les informations sur les comptes clients.</p>
</li>

<li className="card">
  <div className="header">
    <img src="/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Comptes fournisseurs</h3>
  </div>
  <p>
    Améliorez la précision de la souscription avec des informations rationalisées sur les comptes fournisseurs.
  </p>
</li>

</ul>

## Intégrations prises en charge

#### Comptabilité

<IntegrationsList filter={integrationsAccountingFilterLending} />

#### Bancaire

<IntegrationsList integrations={bankingIntegrations} />

#### Commerce

<IntegrationsList integrations={commerceIntegrations} />

## Développer avec les bibliothèques clientes

Utilisez nos [SDK complets](/get-started/libraries) pour démarrer et simplifier votre parcours de développeur en automatisant la collecte des données financières de vos clients et en effectuant une évaluation de la santé financière et de la performance d'une petite entreprise.

Notre SDK Lending est disponible dans plusieurs langages et fournit toutes les méthodes nécessaires pour construire votre solution, vous permettant de développer tout, d'un produit de capital marchand à la réécriture de prêt, avec un seul SDK.

<ClientLibraries productName={"lending"} />

---

## Lire la suite

- [Démarrer](/lending/get-started) avec notre solution Lending
