---
title: "Consulter l'analyse des dépenses et les perspectives"
sidebar_label: Obtenir les perspectives de dépenses
description: "Apprenez comment consulter les informations sur les dépenses et les fournisseurs de votre client ainsi que les perspectives associées"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Prérequis

Avant de pouvoir consulter les données de dépenses et les perspectives associées, vous devez en demander l'accès. Nous couvrons ce sujet en détail dans notre guide [Intégrer un client](/spend-insights/guides/onboard-customer).

Dans ce guide, nous verrons comment vous pouvez consulter les perspectives générées à partir des données d'affaires de votre client en utilisant le [Portail Codat](https://app.codat.io/).

## Vérifier le statut des données

Une fois le client intégré, vérifiez que ses rapports de perspectives sont prêts. Dans le Portail Codat, accédez à l'onglet **Spend Insights** et localisez l'entreprise du client.

Vous pourriez voir l'un des statuts suivants à côté du nom de l'entreprise :

| **Statut**                    | **Action**                                                                                                     |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Available**                 | Codat a généré avec succès le rapport de dépenses pour ce client, et il est prêt à être téléchargé.           |
| **Generating**                | Codat est en train de générer le rapport de dépenses pour ce client. Revenez plus tard.                        |
| **Unavailable**               | Le rapport n'a pas été généré en raison d'une erreur. Contactez le soutien technique pour résoudre le problème.|
| **Request information**       | Codat n'a pas encore reçu de données de ce client. Intégrez le client d'abord.                                 |

![Une image de l'interface utilisateur du Portail sur l'onglet Spend Insights avec quatre entreprises listées et leurs statuts mis en évidence.](/img/spend-insights/si-spend-report-statuses.png)

## Télécharger les rapports

Pour télécharger les rapports disponibles, cliquez sur le bouton **Download** à côté du nom de l'entreprise. Dans le menu déroulant, choisissez le type de rapport que vous souhaitez télécharger et cliquez sur la ligne correspondante. Cela télécharge les rapports Excel dans votre dossier de téléchargement par défaut.

Codat offre les options de rapport suivantes :

- **Spend summary** fournit un résumé d'une page des principales opportunités de fournisseurs pour le client.
- **Spend analysis** couvre le résumé et les détails des dépenses et des fournisseurs du client dans un format Excel.

![Une image de l'interface utilisateur du Portail avec le menu déroulant de téléchargement affiché et le bouton de téléchargement mis en évidence pour un exemple d'entreprise](/img/spend-insights/si-reports-download.png)

## Rapport d'analyse des dépenses

Ce rapport Excel offre un aperçu détaillé des données de dépenses de votre client, fournissant une vue d'ensemble de leurs dépenses et fournisseurs par méthode de paiement ainsi qu'une analyse détaillée des fournisseurs. Il contient également les factures sources, les paiements de factures et les coûts directs qui alimentent le rapport.

### Onglet Client

L'onglet **Customer** fournit une vue d'ensemble de l'entreprise que vous examinez, incluant ses détails administratifs et les paramètres du rapport généré.

### Onglet Analyse des dépenses

L'onglet **Spend Analysis** analyse la performance des différentes méthodes de paiement utilisées par votre client et examine les quantités et montants des fournisseurs, factures, paiements et coûts directs associés à ces méthodes de paiement.

Cet onglet utilise les mêmes paramètres que l'onglet **Supplier Analysis**, mais ventile les données par méthode de paiement plutôt que par fournisseur. Nous examinerons chaque paramètre en détail lors de la couverture de l'onglet **Supplier Analysis**.

![Une section de l'onglet Spend Analysis du rapport Excel qui affiche la ventilation par méthode de paiement des données.](/img/spend-insights/si-spend-analysis-report-payment-tab.png)

### Onglet Analyse des fournisseurs

Concentrons-nous maintenant sur l'onglet **Supplier Analysis**, où vous trouverez des sections couvrant les détails des fournisseurs, les méthodes de paiement, les montants et les conditions. Vous pouvez distinguer les sections grâce à leurs couleurs. Nous parcourrons les colonnes de cet onglet et expliquerons comment lire leurs détails et données.

#### Fournisseurs

Cette section couvre le nom du fournisseur, la méthode la plus courante utilisée pour le payer et sa date d'importation.

<Tabs>

<TabItem value="columns" label="Définitions">

- **Supplier Name** - le nom du fournisseur tel qu'enregistré dans le logiciel comptable de votre client.
- **Most Common Payment Method** - une valeur agrégée reflétant la méthode la plus courante que votre client a utilisée pour payer le fournisseur.
- **Imported Date** - la date à laquelle ce fournisseur est apparu pour la première fois dans le fichier d'analyse des dépenses. Cela devient significatif lors de l'examen des fichiers sur une base continue.

</TabItem>

<TabItem value="details" label="Détails et données">

![Une section de l'onglet Supplier Analysis du rapport Excel qui affiche les colonnes du nom du fournisseur, de la méthode de paiement la plus courante et de la date d'importation.](/img/spend-insights/si-spend-analysis-report-suppliers.png)

Dans l'exemple ci-dessus, le fournisseur _Fahey and Sons_ est le plus souvent payé par chèque et est apparu pour la première fois dans le fichier le 13 mai 2025.

Si vous téléchargez un fichier d'analyse des dépenses un mois plus tard, vous pourrez identifier les nouveaux fournisseurs en utilisant la date d'importation.

</TabItem>

</Tabs>

#### Factures

Cette section entre dans les détails des factures engagées par votre client, mettant en évidence les montants et quantités que le fournisseur a soumis à l'entreprise.

<Tabs>

<TabItem value="columns" label="Définitions">

- **# of Bills** - le nombre total de factures soumises par le fournisseur.
- **# of Bills Outstanding** - le nombre total de factures qui n'ont pas encore été payées.
- **Bills Amount** - le montant total pour lequel le fournisseur a émis des factures.
- **Bills Outstanding Amount** - le montant total des factures qui n'ont pas encore été payées.
- **% of Bills Outstanding (by amount)** - le montant des factures impayées exprimé en pourcentage du montant total facturé.
- **Most Recent Bill** - la date à laquelle la facture la plus récente du fournisseur a été émise.

</TabItem>

<TabItem value="details" label="Détails et données">

![Une section de l'onglet Supplier Analysis du rapport Excel qui affiche les colonnes liées aux factures.](/img/spend-insights/si-spend-analysis-report-bills.png)

Examinons la quatrième ligne de l'exemple ci-dessus qui concerne le fournisseur _Fahey and Sons_. Ce fournisseur a émis un total de 4 factures, dont 1 n'est pas encore payée. Le montant total de ces 4 factures s'élève à 133 195,10 £, dont 1 097,06 £ restent à payer. En termes de pourcentage, 0,8 % du montant total reste à payer au fournisseur. _Fahey and Sons_ a émis sa facture la plus récente le 27 décembre 2024.

</TabItem>

</Tabs>

#### Paiements

Cette section entre dans les détails des paiements que votre client a effectués à ses fournisseurs.

<Tabs>

<TabItem value="columns" label="Définitions">

- **# of Payments** - le nombre total de paiements que l'entreprise a effectués au fournisseur.
- **# of Late Payments** - le nombre total de paiements effectués au fournisseur qui étaient en retard par rapport à leur date d'échéance.
- **Payments Amount** - le montant total des paiements que l'entreprise a effectués au fournisseur.
- **Late Payments Amount** - le montant total des paiements qui étaient en retard par rapport à leur date d'échéance.
- **% Late Payments (by amount)** - le montant des paiements en retard exprimé en pourcentage du montant total des paiements.
- **Average Payment Amount** - le montant moyen des paiements pour ce fournisseur basé sur le nombre de paiements effectués.

</TabItem>

<TabItem value="details" label="Détails et données">

![Une section de l'onglet Supplier Analysis du rapport Excel qui affiche les colonnes liées aux paiements.](/img/spend-insights/si-spend-analysis-report-payments.png)

En revenant à _Fahey and Sons_ à la ligne 4, nous pouvons voir que notre client les a payés à temps 4 fois et n'a pas encore manqué un paiement. Par rapport aux données de factures de la section précédente, nous pouvons conclure que la facture impayée de 1 097,06 £ n'est pas encore en retard de paiement. Sur la base de 4 paiements totalisant 130 975,97 £, le montant moyen des paiements à _Fahey and Sons_ est de 32 743,99 £.

</TabItem>

</Tabs>

#### Conditions et règlements de paiement

Cette section couvre les conditions et règlements de paiement moyens du client.

<Tabs>

<TabItem value="columns" label="Définitions">

- **Average Payment Terms** indique le nombre moyen de jours nécessaires à l'entreprise cliente pour payer ce fournisseur. Cette valeur est pondérée par le montant du paiement.
- **Common Payment Terms Days** représente le nombre de jours que vous êtes susceptible de voir de la part de ce fournisseur comme conditions de paiement.
- **Average Settlement Period** indique le nombre de jours que le paiement prend réellement pour être réglé et traité du côté du fournisseur.

</TabItem>

<TabItem value="details" label="Détails et données">

![Une section de l'onglet Supplier Analysis du rapport Excel qui affiche les colonnes liées aux conditions de paiement et aux règlements.](/img/spend-insights/si-spend-analysis-report-averages.png)

Nous pouvons voir que _Fahey and Sons_ à la ligne 4 fixe habituellement ses conditions de paiement à 60 jours. Il faut un peu moins de temps que cela pour que le client les paie et que le paiement soit réglé. L'utilisation de ces chiffres aide à identifier quels fournisseurs pourraient bénéficier de l'acceptation de cartes virtuelles.

</TabItem>

</Tabs>

#### Coûts directs

Cette section couvre les coûts directs du client associés aux fournisseurs. Les coûts directs sont des sommes qui quittent l'entreprise sans impacter les comptes fournisseurs, ainsi que les remboursements associés à ces transactions.

<Tabs>

<TabItem value="columns" label="Définitions">

- **# Of Direct Costs** - le nombre total de coûts directs associés à ce fournisseur.
- **Direct Costs Amt** - le montant total des coûts directs associés à ce fournisseur.
- **Most Recent Direct Cost** - la date à laquelle le coût direct le plus récent du fournisseur a été engagé.

</TabItem>

<TabItem value="details" label="Détails et données">

![Une section de l'onglet Supplier Analysis du rapport Excel qui affiche les colonnes liées aux coûts directs.](/img/spend-insights/si-spend-analysis-report-costs.png)

Dans notre exemple, le client a eu 3 occurrences de coûts directs associés à _Fahey and Sons_ à la ligne 4. Le montant total de ces coûts directs s'élève à 19 459,05 £, et le coût le plus récent a été enregistré le 19 janvier 2025.

</TabItem>

</Tabs>

#### Détails des fournisseurs

La dernière section de cet onglet fournit les détails administratifs de chaque fournisseur, tels que leur identifiant dans le logiciel du client, leurs coordonnées et leurs informations fiscales.

### Autres onglets

Les onglets **Bills**, **Bill Payments** et **Direct Costs** contiennent les données sources de dépenses que Codat a utilisées pour générer le rapport.

## Clavardage Spend Insights

Codat a amélioré les capacités de la solution Spend Insights avec un agent d'IA qui utilisera les données de dépenses fournies par votre client pour répondre aux requêtes posées en langage naturel. Il peut vous aider à créer des résumés de dépenses, préparer des documents d'accompagnement et rédiger des communications pour vos clients.

Si votre organisation a choisi d'utiliser cette fonctionnalité, vous verrez une icône **Ampoule** à côté du nom de votre client dans l'onglet **Spend Insights** du Portail Codat. Cliquez simplement sur le bouton pour être dirigé vers le Clavardage Spend Insights de Codat.

![Une image de trois entreprises dans l'onglet Spend Insights. Une icône d'ampoule est visible et mise en évidence à côté de chaque entrée d'entreprise.](/img/spend-insights/si-si-chat-lightbulb.png)

Le Clavardage Spend Insights offre trois zones d'interaction principales :

- Utilisez la section _Spend Analysis report_ pour télécharger le fichier Excel généré par Spend Insights ou accéder à l'aperçu des données de l'entreprise.
- Naviguez dans les conversations précédentes avec l'agent Spend Insights ou démarrez-en de nouvelles via la section _Conversations_.
- Poursuivez la conversation en cours avec l'agent dans la section _Main_ de l'écran, en utilisant des suggestions ou en rédigeant vos questions.

![Une image de trois entreprises dans l'onglet Spend Insights. Une icône d'ampoule est visible et mise en évidence à côté de chaque entrée d'entreprise.](/img/spend-insights/si-si-chat-interface.png)
