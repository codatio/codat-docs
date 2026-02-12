---
title: "Aperçu de Sync for Commerce"
description: "Intégrations comptables embarquées pour les logiciels de point de vente et de commerce électronique"
image: "/fr-ca/img/banners/social/commerce.png"
sidebar_label: Sync for Commerce
displayed_sidebar: commerce
hide_title: true
hide_description: true
hide_table_of_contents: true
banner_title: Sync for Commerce
banner_class: commerce
banner_icon: "/fr-ca/img/logos/products/logo_sfc_clear.svg"
banner_image: "/fr-ca/img/banners/sfc-charts.png"
banner_text: "Intégrations comptables embarquées pour les logiciels de point de vente, de paiement et de commerce électronique"
// video_url: "https://www.youtube.com/embed/4zLgo0iP6MI"
// video_text: Qu'est-ce que Sync for Commerce ?
---

import { IntegrationsList } from "@components/Integrations";
import {
  integrationsFilterCommerceAcc,
  integrationsFilterCommerceComm,
} from "@components/Integrations/integrations";
import Clients from "@components/Clients";

La comptabilité des ventes est un point de douleur majeur pour les commerçants. Elle implique généralement de répliquer manuellement les données des logiciels de point de vente (PDV), de paiement et de commerce électronique dans leur logiciel de comptabilité. Cela se fait souvent via plusieurs téléchargements manuels de données en masse et la manipulation de données dans des feuilles de calcul et dans le logiciel.

La nature laborieuse de ce travail signifie qu'il est généralement effectué rarement, laissant de nombreux commerçants incapables de tirer parti de leur logiciel de comptabilité pour comprendre la performance de leur entreprise.

**Sync for Commerce réplique et réconcilie automatiquement les données de ventes des systèmes sources de PDV, paiements et commerce électronique d'un commerçant dans leur logiciel de comptabilité. Cela élimine le traitement manuel par les commerçants et transforme leur capacité à gérer et développer leur entreprise.**

Nous faisons tout le travail difficile, en nous intégrant aux systèmes des commerçants et en mappant leurs données selon les meilleures pratiques comptables. En conséquence, elles apparaissent dans leur logiciel de comptabilité d'une manière qui leur est utile ainsi qu'à leur comptable ou expert-comptable.

<Clients
  clients={[
    {
      name: "Zettle",
      path: "/fr-ca/img/clients/zettle.png",
    },
    {
      name: "Phorest",
      path: "/fr-ca/img/clients/phorest.png",
    },
    {
      name: "Lightspeed",
      path: "/fr-ca/img/clients/lightspeed.png",
    },
    {
      name: "Clover",
      path: "/fr-ca/img/clients/clover.png",
    },
  ]}
/>

## Pourquoi utiliser Sync for Commerce ?

<ul className="card-container col-2">
<li className="card">
    <div className="header">
        <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg"
            className="mini-icon"/>
        <h3>Expertise en commerce et comptabilité</h3>
    </div>
    <p>
       Nous traduisons les données de ventes et de paiement en l'ensemble approprié d'écritures comptables. Ventes, paiements, cartes-cadeaux et plus - Sync for Commerce gère tout cela pour que vous n'ayez pas à le faire.
    </p>
</li>

<li className="card">
  <div className="header">
    <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Intégration rapide et simple</h3>
  </div>
  <p>
    Nous nous intégrons aux systèmes de données de ventes sources (PDV, paiements et
    commerce électronique) et aux logiciels de comptabilité.
  </p>
</li>

<li className="card">
  <div className="header">
    <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Configurabilité</h3>
  </div>
  <p>
    Toutes les entreprises fonctionnent différemment. Nous permettons à vos commerçants et à leurs
    comptables de configurer facilement comment leurs données de ventes doivent se refléter dans leur
    logiciel de comptabilité pour répondre à leurs besoins.
  </p>
</li>

<li className="card">
  <div className="header">
    <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Synchronisation continue des données de ventes</h3>
  </div>
  <p>
    La synchronisation quotidienne automatique des données signifie que le logiciel de comptabilité de vos commerçants
    est toujours à jour avec les dernières données de ventes.
  </p>
</li>

<li className="card">
  <div className="header">
    <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Résilience dans le monde réel</h3>
  </div>
  <p>
    Nous avons géré les données de ventes de dizaines de milliers de commerçants pendant de nombreuses années.
    En conséquence, nous avons fait évoluer Sync for Commerce pour gérer des milliers de
    scénarios différents qui se produisent lors de l'exploitation d'une petite entreprise.
  </p>
</li>

<li className="card">
    <div className="header">
        <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg"
            className="mini-icon"/>
        <h3>Observabilité</h3>
    </div>
    <p>
       Personne n'aime les surprises lorsqu'il s'agit de clôturer ses livres. Le tableau de bord de Sync for Commerce fournit au commerçant et à votre équipe de support des alertes en temps réel lorsque des problèmes surviennent dans le processus de synchronisation des données.
    </p>
</li>
</ul>

## Intégrations prises en charge

### Systèmes comptables

<IntegrationsList filter={integrationsFilterCommerceAcc} />

### Logiciels de commerce

<IntegrationsList filter={integrationsFilterCommerceComm} />

## Comment fonctionne Sync for Commerce ?

### 1. [Configuration du produit](/commerce/setup)

Pour commencer, Codat déploiera un petit connecteur vers votre API qui nous permet de nous connecter aux données de vos clients. Notre ingénieur Solutions travaillera avec vous pour que cela se réalise, généralement en quelques semaines.

Si vous n'avez pas encore d'API, notre équipe de services professionnels peut vous aider à identifier un mécanisme alternatif pour se connecter aux données de vos clients, ou même vous créer une API.

Vous devrez implémenter une fonctionnalité simple qui permet à un commerçant de configurer sa synchronisation de données de ventes, de sélectionner les systèmes qu'il souhaite connecter et de rediriger les utilisateurs vers l'interface utilisateur de configuration Sync de Codat.

Vous pouvez personnaliser l'image de marque, l'apparence et le contenu de l'interface utilisateur de configuration Sync afin qu'elle s'intègre parfaitement dans votre logiciel.

### 2. [Configuration du commerçant](/commerce/merchant-configuration)

Une fois l'accès autorisé, vos clients peuvent déterminer comment leur synchronisation de données de ventes devrait fonctionner en utilisant le flux de configuration Sync.

Une fois que votre client arrive sur l'interface utilisateur du flux de configuration Sync, nous les guiderons à travers un parcours d'intégration, leur permettant de :

- Autoriser l'accès aux systèmes auxquels nous devons nous connecter pour synchroniser les données de ventes.
- Nous dire comment ils aimeraient que leurs données de ventes soient représentées dans leur logiciel de comptabilité.

En arrière-plan, nous récupérerons des informations de base de leurs systèmes connectés pour nous permettre de personnaliser Sync for Commerce selon leurs caractéristiques spécifiques de PDV, paiements, commerce électronique ou logiciel de comptabilité.

### 3. [Synchronisation des données](/commerce/data-synchronization)

Une fois la configuration Sync terminée, nous synchronisons automatiquement les données de ventes après la fin de chaque jour calendaire. Vous pouvez également déclencher une synchronisation à tout moment en utilisant notre API.

### 4. Support continu

Un utilisateur peut mettre à jour sa configuration, arrêter ou redémarrer sa synchronisation automatique de données de ventes ou révoquer l'accès à ses systèmes à tout moment en revisitant l'interface utilisateur de configuration Sync. Il peut également l'utiliser pour voir les synchronisations terminées et toutes les erreurs qui auraient pu se produire.

Votre équipe de support peut également voir les synchronisations de chaque commerçant et dépanner toutes les erreurs en utilisant le site Santé de Sync for Commerce, accessible via le [portail Codat](https://app.codat.io).

---

## Lire ensuite

- [Configurer Sync for Commerce](/commerce/setup)
