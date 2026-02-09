---
title: "Descriptions des produits et services"
description: "Une ventilation des fonctionnalités et de l'accès aux types de données par produit."
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Plateforme

Accès à la plateforme Codat pour les produits indiqués requis.

Cela comprend :

- **Portail :** Interface utilisateur pour la configuration, la personnalisation d'une solution Codat et la visualisation des données de l'entreprise.
- **Link :** Interface utilisateur et API associées permettant aux utilisateurs de l'entreprise d'accorder à Codat l'accès à leurs systèmes comptables.
- **API commune :** Ensemble de base d'API permettant au client de créer des entreprises par programmation et d'autres fonctionnalités essentielles.

---

## Implémentation

Période d'implémentation, couvrant les spécialistes de l'implémentation et les ressources associées pour assurer une implémentation et une activation réussies avec Codat.

---

## Produits

<Tabs>

<TabItem value="commerce" label="Sync for Commerce">

#### Fonctionnalités

- Synchronisation du commerce vers la comptabilité
- Connecteur client
- Interface utilisateur de configuration (Sync Flow)
- API de configuration

<hr />

#### Intégrations prises en charge

[Voir les intégrations prises en charge dans notre documentation](https://docs.codat.io/commerce/setup#available-integrations).

**Remarque :** Un module complémentaire distinct est requis pour accéder aux intégrations ERP et aux plateformes de bureau.

<hr />

#### Définitions des fonctionnalités

**Synchronisation du commerce vers la comptabilité**
Synchronisation des données de la ou des sources de données commerciales vers le ou les logiciels de comptabilité.

**Connecteur client**
Connecteur construit et détenu par Codat, qui lit les données de l'entreprise depuis et/ou écrit les données de l'entreprise vers le système du client, pour permettre le fonctionnement de la synchronisation du commerce vers la comptabilité.

**Interface utilisateur de configuration (Sync Flow)**
Interface utilisateur en marque blanche permettant à une entreprise de configurer la synchronisation du commerce vers la comptabilité.

**API de configuration**
Points de terminaison API permettant aux clients Codat de configurer la synchronisation du commerce (généralement via une interface d'entreprise construite par le client).

<hr />

Ce produit apparaîtra comme **Sync for Commerce (v2)** sur votre formulaire de commande.

</TabItem>

<TabItem value="expenses" label="Sync for Expenses">

#### Fonctionnalités

- Synchronisation des dépenses vers la comptabilité
- API de configuration

<hr />

#### Intégrations prises en charge

[Voir les intégrations prises en charge dans notre documentation](https://docs.codat.io/expenses/overview#supported-integrations).

**Remarque :** Un module complémentaire distinct est requis pour accéder aux intégrations ERP et aux plateformes de bureau.

<hr />

#### Définitions des fonctionnalités

**Synchronisation des dépenses vers la comptabilité**
Synchronisation des données de dépenses fournies par un client Codat vers le ou les logiciels de comptabilité.

**API de configuration**
Points de terminaison API permettant aux clients Codat de configurer la synchronisation des dépenses (généralement via une interface utilisateur d'entreprise construite par le client).

<hr />

Ce produit apparaîtra comme **Sync for Expenses (v2)** sur votre formulaire de commande.

</TabItem>

<TabItem value="payroll" label="Sync for Payroll">

#### Fonctionnalités

- Lecture de données comptables
- Écriture de données comptables

<hr />

#### Intégrations prises en charge

[Voir les intégrations prises en charge dans notre documentation](https://docs.codat.io/payroll/overview#compatible-integrations).

**Remarque :** Un module complémentaire distinct est requis pour accéder aux intégrations ERP et aux plateformes de bureau.

<hr />

#### Définitions des fonctionnalités

**Lecture de données comptables**
Lire les données du logiciel de comptabilité connecté.

**Écriture de données comptables**
Lire les données du logiciel de comptabilité connecté.

[Voir la documentation pour une liste des types de données pris en charge](/payroll/data-types)

<hr />

Ce produit apparaîtra comme **Sync for Payroll** sur votre formulaire de commande.

</TabItem>

<TabItem value="payables" label="Sync for Payables">

#### Fonctionnalités

- Lecture de données comptables
- Écriture de données comptables
- Mise à jour de données comptables
- Suppression de données comptables

<hr />

#### Intégrations prises en charge

[Voir les intégrations prises en charge dans notre documentation](https://docs.codat.io/payables/overview#compatible-integrations).

**Remarque :** Un module complémentaire distinct est requis pour accéder aux intégrations ERP et aux plateformes de bureau.

<hr />

#### Définitions des fonctionnalités

**Lecture de données comptables**
Obtenir des données du logiciel de comptabilité connecté.

**Écriture de données comptables**
Créer des données dans le logiciel de comptabilité connecté.

**Mise à jour de données comptables**
Mettre à jour les données dans le logiciel de comptabilité connecté.

**Suppression de données comptables**
Supprimer des données dans le logiciel de comptabilité connecté.

[Voir la documentation pour une liste des types de données pris en charge](/payables/data-types)

<hr />

Ce produit apparaîtra comme **Sync for Payables** sur votre formulaire de commande.

</TabItem>

<TabItem value="bankfeeds" label="Bank Feeds API">

#### Fonctionnalités

- Écriture de transactions bancaires
- Interface utilisateur de configuration
- API de configuration

<hr />

#### Intégrations prises en charge

[Voir les intégrations prises en charge dans notre documentation](https://docs.codat.io/bank-feeds/overview#supported-integrations).

**Remarque :** Un module complémentaire distinct est requis pour accéder aux intégrations ERP et aux plateformes de bureau.

<hr />

#### Définitions des fonctionnalités

**Écriture de transactions bancaires**
Écrire des transactions bancaires dans le logiciel de comptabilité connecté sous forme de relevé bancaire

**Interface utilisateur de configuration**
Interface utilisateur en marque blanche permettant à une entreprise de configurer les flux bancaires (sélectionner les comptes du logiciel de comptabilité auxquels les flux bancaires doivent être écrits)

**API de configuration**
Points de terminaison API permettant aux clients de configurer les flux bancaires (généralement via une interface utilisateur d'entreprise construite par le client)

<hr />

Ce produit apparaîtra comme **Bank feeds** sur votre formulaire de commande.

</TabItem>

<TabItem value="lending" label="Lending API">

#### Fonctionnalités

- Lecture de données comptables
- Lecture de données commerciales
- Lecture de données bancaires
- Relevés bancaires
- Ventes
- États financiers
- Passifs
- Comptes clients
- Comptes fournisseurs
- Écriture inversée vers le logiciel de comptabilité

<hr />

#### Intégrations prises en charge

Consultez notre [documentation de l'API Lending](https://docs.codat.io/lending/overview) pour nos intégrations prises en charge.

**Remarque :** Un module complémentaire distinct est requis pour accéder aux intégrations ERP et aux plateformes de bureau.

L'accès au fournisseur de services bancaires ouverts est soumis à des exigences d'accès distinctes.

<hr />

#### Définitions des fonctionnalités

**Lecture de données comptables**
Lire les données suivantes du logiciel de comptabilité connecté : [Types de données pris en charge](https://docs.codat.io/lending/data-types#supported-data-types)

**Lecture de données commerciales**
Lire les données suivantes du logiciel de commerce connecté : [Types de données pris en charge](https://docs.codat.io/lending/data-types#supported-data-types)

**Lecture de données bancaires**
Lire les données suivantes du fournisseur de services bancaires ouverts connecté : [Types de données pris en charge](https://docs.codat.io/lending/data-types#supported-data-types)

**Relevés bancaires**
Consulter les données des connexions bancaires d'une entreprise liée. Les transactions sont enrichies d'informations sur la catégorie financière et le fournisseur de paiement. Voir [tous les détails de cette fonctionnalité](https://docs.codat.io/lending/features/bank-statements-overview).

**Ventes**
Offre des données provenant des connexions commerciales d'une entreprise liée. Accédez à des informations précieuses grâce à des indicateurs agrégés et une répartition complète des transactions de vente des principales plateformes de commerce électronique, de point de vente et de paiement. Voir [tous les détails de cette fonctionnalité](https://docs.codat.io/lending/features/sales-overview).

**États financiers**
Fournit une vue complète des données financières d'un emprunteur, y compris les états des profits et pertes, le bilan et les flux de trésorerie opérationnels. Comprend les fonctionnalités précédemment connues sous le nom de « Rapport financier amélioré » et « Rapport de flux de trésorerie amélioré ». Voir [tous les détails de cette fonctionnalité](https://docs.codat.io/lending/features/financial-statements-overview).

**Passifs**
Nos modèles d'apprentissage automatique identifient automatiquement les prêts des sources connectées et vous fournissent un aperçu clair des prêts en cours d'un emprunteur et de son historique de remboursement. Comprend les fonctionnalités précédemment connues sous le nom de « Rapport de passifs amélioré ». Voir [tous les détails de cette fonctionnalité](https://docs.codat.io/lending/features/liabilities-overview).

**Comptes clients**
Fournit une ventilation du grand livre des débiteurs d'un emprunteur provenant de son logiciel de comptabilité. Comprend les fonctionnalités précédemment connues sous le nom de « Rapport de factures amélioré ». Voir [tous les détails de cette fonctionnalité](https://docs.codat.io/lending/features/accounts-receivable-overview).

**Comptes fournisseurs**
Fournit une ventilation du grand livre des créanciers d'un emprunteur provenant de son logiciel de comptabilité. Voir [tous les détails de cette fonctionnalité](https://docs.codat.io/lending/features/accounts-payable-overview).

**Écriture inversée vers le logiciel de comptabilité**
Lorsque requis par le logiciel de comptabilité, la capacité d'écrire des données relatives à un prêt ou à une autre facilité de crédit qui a été émise.

<hr />

Ce produit apparaîtra comme **Lending API** sur votre formulaire de commande.

</TabItem>

</Tabs>

<br />

[Description de produit référencée dans votre formulaire de commande non répertoriée ci-dessus ?](/configure/plans/additional-product-descriptions)

---

## Modules complémentaires

<ul className="card-container">
  <li className="card">
    <h3>Intégrations ERP</h3>
    <p>Requis pour l'accès à NetSuite, Sage Intacct ou Microsoft Dynamics 365</p>
  </li>

<li className="card">
  <h3>Plateformes de bureau</h3>
  <p>Requis pour l'accès à QuickBooks Desktop et Sage 50 (UK & Ireland)</p>
</li>

   <li className="card">
    <h3>Sécurité d'entreprise</h3>
    <p>Fonctionnalités de sécurité pertinentes pour les grandes entreprises :</p>
    <ul>
    	<li>SSO d'entreprise</li>
		<li>TLS mutuel</li>
		<li>Filtrage IP</li>
	</ul>
  </li>
</ul>

---

## Services supplémentaires

<ul className="card-container">
  <li className="card">
    <h3>Support</h3>
    <p>De base, Standard, Avancé ou Premium</p>
  </li>

   <li className="card">
    <h3>Services professionnels</h3>
    <p>Ressources basées sur un énoncé de travaux pour réaliser des projets définis. Comprend des ressources d'ingénierie et d'implémentation dédiées de Codat.</p>
  </li>
</ul>
