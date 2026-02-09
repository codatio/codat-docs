---
title: "Aperçu du modèle de crédit"
displayed_sidebar: "lending"
description: "Accédez à une évaluation détaillée et basée sur les données de la santé financière et de la solvabilité d'une entreprise"
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import {
  integrationsAccountingFilterCreditModel,
  bankingIntegrations,
} from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

La fonctionnalité premium **Credit model** de Lending offre un moyen intuitif d'interpréter, de visualiser et d'analyser les données comptables et bancaires d'un emprunteur. Elle offre une vue holistique de la performance financière pour soutenir les décisions de crédit et autres évaluations financières.

:::info Fonctionnalité premium

Le rapport Credit Model est une fonctionnalité premium du produit Lending. Contactez votre gestionnaire de compte si vous souhaitez l'activer.

:::

## Fonctionnalités

Le modèle de crédit contient une variété de fonctionnalités qui améliorent le processus de souscription :

- **Dashboard :** une vue englobante de la santé financière d'un emprunteur

- **Score de crédit :** un score de crédit personnalisable qui aligne le modèle sur les métriques les plus importantes pour votre analyse

- **Score comptable :** une évaluation de la qualité et de la complétude de la comptabilité d'une entreprise

- **Résumé financier :** des états financiers qui sont automatiquement répartis avec des métriques et ratios calculés

- **Résumé bancaire :** des données de transactions bancaires converties en un état des résultats basé sur la trésorerie

- **Résumé de la dette :** une ventilation de la dette existante avec les conditions de remboursement historiques et projetées

- **Résumé des clients :** les conditions, la concentration et la ponctualité des créances d'un emprunteur

- **Résumé des remboursements :** les conditions, la concentration et la ponctualité des dettes d'un emprunteur

## Composants des fonctionnalités

Le rapport Credit Model peut être basé sur des sources de données comptables, des sources de données bancaires, ou les deux.

#### Intégrations prises en charge : comptabilité

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQv5tU64V66C6QkR2L3I-iuCIN02A7ROyyZL1D6gmglwrtAHU9VwJmxwWMHtslJV5aP_oeq2--6tHm1/pubhtml?gid=390125489&single=true&amp;widget=true&amp;headers=false"
  className="googleSheets"
  style={{ height: "450px", border: "0" }}
/>

#### Intégrations prises en charge : bancaire

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=1760315404&amp;single=true&amp;widget=true&amp;headers=false"
  className="googleSheets"
  style={{ height: "250px", border: "0" }}
/>

## Enrichissements des fonctionnalités

Le rapport Credit Model fournit les informations suivantes sur la santé financière d'une entreprise :

- **Points saillants clés :** un aperçu détaillé des métriques financières les plus performantes et les plus significatives de l'entreprise

- **Risques clés :** un aperçu détaillé des métriques financières les moins performantes et les plus significatives de l'entreprise

- **Piste de trésorerie proforma :** une prévision de la piste de trésorerie qui tient compte de la consommation historique, des injections de capital à venir et des paiements de dette futurs

- **Règles d'exclusion :** des alertes personnalisées pour quand certaines métriques financières atteignent des seuils donnés

- **Problèmes comptables :** une explication de toute mauvaise pratique comptable

- **Indicateur de clôture des livres :** une estimation de la période comptable la plus récente officiellement clôturée par une entreprise

- **Calendrier de remboursement de la dette :** les conditions implicites des cartes de crédit et des facilités de crédit d'une entreprise, y compris le paiement, la fréquence, l'échéance et le solde

- **Vieillissement des comptes clients :** un calendrier de vieillissement automatisé à partir des factures clients impayées

- **Vieillissement des comptes fournisseurs :** un calendrier de vieillissement automatisé à partir des factures fournisseurs impayées

- **Résumé des clients :** un aperçu complet du comportement de paiement des clients, incluant le pourcentage de paiements à temps, la ventilation des conditions de paiement et la concentration des clients

- **Résumé des remboursements :** un aperçu complet du comportement de paiement des fournisseurs, incluant le pourcentage de paiements à temps, la ventilation des conditions de paiement et la concentration des fournisseurs

## Sorties prises en charge

Vous pouvez générer et récupérer les données lues et enrichies par cette fonctionnalité au format Excel en utilisant un appel API ou dans le [Portal Codat](https://app.codat.io).

#### Obtenir le rapport via l'API

Utilisez l'endpoint [Generate report](/lending-api#/operations/generate-report) pour générer le rapport de manière asynchrone. Définissez le paramètre `reportType` à `creditModel`. Le lancement du rapport déclenchera une nouvelle synchronisation des données.

Ensuite, appelez l'endpoint [Download credit model Excel](/lending-api#/operations/download-credit-model-excel) pour récupérer le rapport résultant.

Vous pouvez également visualiser les métriques individuelles du Credit Model en utilisant l'endpoint [Get financial summary insights](/lending-api#/operations/get-financial-summary).

La fonctionnalité Credit Model doit être activée avant de pouvoir générer le rapport _Credit Model_ et ses métriques via l'API. Parlez à votre gestionnaire de compte pour l'activer.

#### Obtenir le rapport via le Portal

Dans le [Portal Codat](https://app.codat.io), naviguez vers **Companies** et sélectionnez l'entreprise que vous souhaitez analyser. Dans le menu latéral, cliquez sur **Lending > Reports**.

Dans la liste des rapports, trouvez _Credit Model_ et cliquez sur **Generate report**. Une fois le rapport prêt à être téléchargé, il apparaîtra sous le nom du rapport. Cliquez sur **Download** pour enregistrer le rapport sur votre machine.

La fonctionnalité Credit Model doit être activée avant de pouvoir accéder au rapport _Credit Model_ dans le Portal. Parlez à votre gestionnaire de compte pour l'activer.

![Un extrait de l'écran de détail d'entreprise du Portal Codat avec le chemin Lending > Reports visible et le rapport Credit Model affiché](/img/lending/lending-credit-model-portal.png)

## Démarrer

Une fois que vous avez la solution Lending activée, contactez votre gestionnaire de compte ou notre équipe de support pour activer le rapport Credit Model. En tant que fonctionnalité premium, elle sera facturée en plus de votre utilisation de la solution Lending.

Ensuite, configurez votre instance pour fonctionner avec la fonctionnalité Credit Model.

#### Configurer les sources de données

Suivez les guides respectifs pour configurer et activer les intégrations comptables qui serviront de source de données pour la fonctionnalité :

##### Sources de données comptables

<IntegrationsList filter={integrationsAccountingFilterCreditModel} />

##### Sources de données bancaires

<IntegrationsList integrations={bankingIntegrations} />

#### Activer les types de données

Consultez comment [activer les types de données](/core-concepts/data-type-settings#override-the-default-sync-settings) et assurez-vous que les types de données suivants ont été activés :

| **Comptabilité**                | **Bancaire**                                |
| ------------------------------- | ------------------------------------------- |
| Company `company`               | Banking transactions `banking-transactions` |
| Profit and loss `profitAndLoss` | Banking accounts `banking-accounts`         |
| Balance sheet `balanceSheet`    |                                             |
| Bills `bills`                   |                                             |
| Bill payments `billPayments`    |                                             |
| Suppliers `suppliers`           |                                             |
| Customers `customers`           |                                             |
| Invoices `invoices`             |                                             |
| Payments `payments`             |                                             |
| Credit notes `creditNotes`      |                                             |

#### Configurer les webhooks

Nous vous recommandons de [vous abonner aux webhooks suivants](/using-the-api/webhooks/create-consumer) si vous utilisez une solution API :

- [`reports.creditModel.generate.successful`](/lending-api#/webhooks/reports.creditModel.generate.successful/post)

  Ce webhook vous notifiera une fois le rapport généré avec succès.

- [`reports.creditModel.generate.unsuccessful`](/lending-api#/webhooks/reports.creditModel.generate.unsuccessful/post)

  Ce webhook vous notifiera si la génération du rapport échoue.
