---
title: Aperçu de Bill Pay
sidebar_label: Aperçu
description: "Facilitez la gestion et le paiement des fournisseurs par les PME à partir d'une seule interface."
---

import { IntegrationsList } from "@components/Integrations";
import { integrationsFilterBillPaySync } from "@components/Integrations/integrations";

![An image from the static](/img/use-cases/billpay/billPay.png)

# Aperçu

L'intégration de paiement de factures facilite la gestion et le paiement de leurs factures fournisseurs par les PME à partir d'une seule interface avec des méthodes et conditions de paiement préférentielles.

De nombreuses PME s'appuient encore sur des fonctions manuelles de comptes fournisseurs pour gérer leur entreprise. Une étude montre que jusqu'à 80 % de toutes les factures de PME et 40 % de tous les paiements B2B sont encore réglés par chèque papier. Cela a conduit à une situation où une grande majorité (80 %) des dirigeants financiers estiment que le processus de comptes fournisseurs obsolète de leur entreprise les freine et coûte du temps et de l'argent à leur entreprise

## Avantages

<ul className="card-container col-3">
  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>API standardisée</h3>
    </div>
    <p>
      Plus rapide, plus simple et moins coûteux que de créer des intégrations en interne.
    </p>
  </li>

<li className="card">
  <div className="header">
    <img src="/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
    <h3>Économise du temps</h3>
  </div>
  <p>
    Répond à un besoin fondamental de vos clients de petites entreprises, leur permettant
    d'économiser du temps et des efforts lors de la réconciliation de leurs données de comptes fournisseurs avec leur
    logiciel de comptabilité.
  </p>
</li>

  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Augmente la rétention</h3>
    </div>
    <p>
      Attirez et fidélisez les clients en leur offrant le type d'expérience numérique et de connectivité qu'ils sont venus attendre en tant que consommateurs
    </p>
  </li>
</ul>

## Fonctionnalités

![An image from the static](/img/use-cases/summary-pages/d0c6b0b7-automating-payables.png)

### [Connexion au logiciel de comptabilité de votre PME](/auth-flow/overview)

Codat gère l'autorisation et la liaison au logiciel de comptabilité de votre PME et prend en compte des détails complexes tels que les limites de débit.

### [Récupérer les factures de comptes fournisseurs](bills)

Une liste de [factures fournisseurs](/accounting-api#/schemas/Bill) impayées (factures de comptes fournisseurs) peut être récupérée à partir du logiciel de comptabilité. Dans l'API Accounting, une facture fournisseur est un enregistrement détaillé des biens achetés ou des services fournis par un fournisseur.
Alternativement, les factures fournisseurs peuvent également être créées dans votre application puis synchronisées avec le logiciel de comptabilité.

### [Correspondance des comptes de paiement](mapping)

Une fois autorisé, vous pouvez utiliser l'endpoint des comptes bancaires pour récupérer une liste de comptes qui peuvent être mappés, permettant à l'utilisateur de dicter à quel compte leurs paiements doivent être réconciliés.

### [Réconciliation des paiements](payments)

Une fois la transaction terminée, un paiement de facture fournisseur peut ensuite être écrit dans le logiciel de comptabilité du client et réconcilié avec la facture fournisseur, la marquant comme payée.

## Intégrations compatibles

<br />

<IntegrationsList filter={integrationsFilterBillPaySync} />

---

## Lire ensuite

- [Comptes fournisseurs](/usecases/bill-pay/bills) - Récupérer et créer des factures fournisseurs en utilisant l'API Accounting
