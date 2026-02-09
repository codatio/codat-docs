---
title: "Spécification de mappage Xero"
sidebar_label: Xero
description: "Directives pour la configuration du mappage de données d'un logiciel de commerce vers Xero."
image: "/img/banners/social/commerce.png"
---

## Aperçu

Ce document fournit des directives pour la configuration du mappage de données d'un logiciel de commerce vers Xero.

Dans le flux Sync de Codat, les types de données sont regroupés sous trois fonctionnalités :

- [Ventes](/sfc/mapping-specifications/xero-mapping-specification#sales)
- [Frais](/sfc/mapping-specifications/xero-mapping-specification#fees)
- [Paiements](/sfc/mapping-specifications/xero-mapping-specification#payments)

## Ventes

La fonctionnalité **Ventes** représente toutes les ventes effectuées dans le cadre des activités commerciales normales d'une entreprise pendant une période donnée.

Pour configurer les **Ventes** en utilisant le flux d'interface utilisateur Codat Sync for Commerce, un commerçant doit suivre les étapes suivantes :

1. Sélectionner les comptes pour **[Ventes](/sfc/mapping-specifications/xero-mapping-specification#sales)**, **[Remboursements](/sfc/mapping-specifications/xero-mapping-specification#refunds)**, **[Pourboires](/sfc/mapping-specifications/xero-mapping-specification#gratuity)** et **[Prépayé](/sfc/mapping-specifications/xero-mapping-specification#prepaid)** à partir des listes déroulantes respectives. Les listes affichent tous les comptes applicables disponibles sur le logiciel de comptabilité Xero du commerçant.
2. Sélectionner les taux de taxe qu'ils souhaitent appliquer aux données qu'ils envoient.
3. Sélectionner le statut préféré pour les factures représentant les données de **Ventes** dans leur logiciel de comptabilité.

La période de regroupement est définie sur **quotidien** par défaut.

### Mappage des comptes de ventes

#### Ventes

Les ventes sont comptabilisées sur un compte nominal du type Xero **Revenus**. C'est le compte que le commerçant utiliserait généralement pour comptabiliser ses ventes. Le commerçant peut sélectionner un compte existant dans Xero. Si un compte n'est pas disponible, il doit être créé dans Xero à cette fin.

Pour représenter les ventes effectuées au cours de la journée, Codat écrit une seule facture de ventes quotidienne dans Xero.

La facture est émise au fournisseur de services de commerce.

Elle contient une ligne pour chaque taux de taxe. Chaque ligne représente le total de toutes les ventes au taux de taxe donné.

Si aucune vente n'a été effectuée à un taux de taxe donné ce jour-là, la ligne correspondante sera omise.

:::caution Arrondissement

Les remises sont appliquées au total de l'achat une fois que tous les articles ont été additionnés plutôt qu'au niveau de l'article. Comme nous séparons les articles en pourcentages de TVA pour toutes les ventes de la journée, les remises doivent être appliquées au niveau de l'article, ce qui peut entraîner de légères différences d'arrondissement par rapport à l'application de la remise au niveau total. Selon les conseils de la plupart des logiciels de comptabilité, nous ajoutons une ligne de facture de ± 0,01 pour aligner le total avec le total correct.
:::

Lorsque le commerçant reçoit le paiement pour les ventes déclarées, la facture est marquée comme payée et est équilibrée par le compte de conservation du commerçant (également connu sous le nom de compte de compensation ou compte liquide) pour le type de paiement respectif.

Pour en savoir plus sur la configuration des **Paiements**, naviguez vers la section [Paiements](/sfc/mapping-specifications/xero-mapping-specification#payments).

#### Remboursements

Les remboursements représentent une catégorie fourre-tout pour tous les remboursements, en espèces ou non.

Semblable à **[Ventes](/sfc/mapping-specifications/xero-mapping-specification#sales)**, les **Remboursements** sont généralement comptabilisés sur un compte nominal que le commerçant utilise pour comptabiliser ses revenus, du type Xero **Revenus**.

Généralement, les commerçants écriraient les **[Ventes](/sfc/mapping-specifications/xero-mapping-specification#sales)** et les **Remboursements** dans le même compte. Cependant, ils peuvent utiliser un compte différent s'ils souhaitent les déclarer séparément.

Lorsque les remboursements d'achat sont enregistrés dans Xero, le revenu négatif sera comptabilisé sur le compte sélectionné.

Codat écrit une seule note de crédit de ventes quotidienne dans Xero pour représenter tous les remboursements effectués au cours de cette journée. La note de crédit contient une ligne pour chaque taux de taxe, cette ligne représentant le total de tous les remboursements à ce taux de taxe.

Si aucun remboursement n'a été effectué pour un taux de taxe donné ce jour-là, la ligne correspondante sera omise.

Codat écrit les données de paiement de remboursement comme des remboursements en espèces.

Pour chaque type de paiement remboursé, une transaction est enregistrée contre la note de crédit. Ce remboursement est prélevé du compte sélectionné pour recevoir les **Paiements** pour chaque type de paiement (carte, comptant, etc.).

#### Pourboires

**Pourboires** représente les pourboires collectés par le commerçant de leurs clients lors du paiement.

Selon la préférence du commerçant, **Pourboires** peut être comptabilisé dans un compte **Revenus** ou un compte **Passif**.

Les pourboires sont écrits dans Xero dans le cadre de la facture de ventes quotidienne en tant que ligne séparée.

#### Prépayé

La fonctionnalité **Prépayé** inclut les transactions relatives à la vente et au rachat d'articles prépayés, tels que les cartes-cadeaux.

Les transactions de type **Prépayé** doivent être comptabilisées dans un compte **Passif**.

L'achat d'articles prépayés apparaîtra comme une ligne sur la facture de **[Ventes](/sfc/mapping-specifications/xero-mapping-specification#sales)** quotidienne dans Xero.

Notez que lorsqu'un client utilise l'article prépayé (par exemple, achète un article avec une carte-cadeau), cela est traité comme une vente normale (voir **[Ventes](/sfc/mapping-specifications/xero-mapping-specification#sales)**).

## Frais

La fonctionnalité Frais englobe les transactions qui impliquent le fournisseur de services de commerce, y compris les **[Frais de paiement](/sfc/mapping-specifications/xero-mapping-specification#payment-fees)** qu'un logiciel de commerce facture au commerçant pour le traitement de leurs transactions par carte et les **[Remboursements de frais de paiement](/sfc/mapping-specifications/xero-mapping-specification#payment-fee-refunds)**.

### Mappage des comptes de frais

#### Frais de paiement

**Frais de paiement** sont les commissions qu'un logiciel de commerce facture au commerçant pour le traitement de leurs transactions par carte.

**Frais de paiement** doivent être comptabilisés dans un compte nominal que le commerçant utilise pour enregistrer ses dépenses, généralement du type Xero **Dépense**.

Codat écrit une seule facture d'achat (facture fournisseur) dans Xero chaque jour. Cette facture représente tous les frais prélevés par le logiciel de commerce au cours de cette journée. La facture contient une seule ligne.

La facture est enregistrée contre le fournisseur de services de commerce, et le compte de dépenses pour la ligne est défini sur le compte de frais de commerce sélectionné.

:::caution Compte de frais de paiement

Si le compte cible sélectionné est un compte bancaire, les factures sont représentées comme une transaction bancaire (dépenser de l'argent) et ne seront pas représentées comme une facture/paiement de facture.
:::

Pour représenter le paiement des frais, un seul paiement est écrit pour le paiement complet de la facture, représentant le transfert d'argent hors du compte de conservation du commerçant (également connu sous le nom de compte de compensation ou compte liquide).

#### Remboursement de frais de paiement

Lorsqu'un commerçant rembourse un paiement accepté à l'aide d'un logiciel de commerce, la commission pour le traitement du paiement est simultanément remboursée sur leur compte commercial. Dans l'interface utilisateur du flux Codat Sync, ces remboursements sont appelés **Remboursements de frais de paiement**.

Les remboursements de frais de paiement sont généralement comptabilisés dans les mêmes comptes configurés pour les **Frais de paiement**. L'utilisation du même compte simplifie le traitement des remboursements de frais, mais le commerçant devrait pouvoir sélectionner un compte différent s'il le souhaite.

Une seule note de crédit de facture est écrite chaque jour représentant tous les remboursements de frais traités ce jour-là.

:::caution Compte de remboursements de frais de paiement

Si le compte cible sélectionné est un compte bancaire, les factures sont représentées comme une transaction bancaire (recevoir de l'argent) et ne seront pas représentées comme une note de crédit.
:::

Un paiement de remboursement en espèces pour la valeur totale de la note de crédit est simultanément écrit, de sorte que la note de crédit de facture est entièrement payée (car aucun autre argent n'est dû au commerçant par le logiciel de commerce).

## Paiements

Les comptes de paiement contiennent de l'argent. Cela contraste avec tous les comptes discutés dans les sections **[Ventes](/sfc/mapping-specifications/xero-mapping-specification#sales)** et **[Frais](/sfc/mapping-specifications/xero-mapping-specification#fees)**, qui sont des comptes nominaux et représentent des concepts comptables plutôt que de l'argent réel.

Codat prend en charge soit les comptes bancaires soit les comptes courants pour les **Paiements**. Ils doivent être d'un type nominal **Actif** ou **Passif** et avoir un paramètre **Activer les paiements vers ce compte** activé :

<img
  src="/img/old/5695d53-payments-setting.png"
  alt="Écran de paramètres de compte dans Xero"
/>

:::caution Comptes de dépôt

Un compte de dépôt ne peut pas être utilisé pour les paiements.
:::

Nous recommandons d'activer les types de paiement de base suivants :

- Carte
- Comptant
- Versement

Sync for Commerce prend en charge des types de paiement supplémentaires qui peuvent être activés selon les besoins, y compris les factures, les types de paiement spécifiques ou les types personnalisés.

### Mappage des comptes de paiement

Codat a fourni des fonctionnalités pour permettre aux utilisateurs de sélectionner différents comptes pour chaque type de paiement différent.

:::caution Comptes pour les paiements par carte

Pour les paiements par carte, il est recommandé que le commerçant crée un compte de compensation pour représenter son compte avec le fournisseur de services de commerce. Le compte de compensation peut être un compte bancaire ou un compte nominal dans Xero qui a un paramètre **Activer les paiements vers ce compte** activé.
:::

:::caution Nouveaux types de paiement après configuration

Si l'utilisateur commence à utiliser d'autres types de paiements après la configuration initiale, la synchronisation s'arrêtera jusqu'à ce que les comptes aient été remappés en retournant à la page de configuration.
:::

Codat écrit un seul paiement dans Xero par jour par type de paiement qui a été utilisé ce jour-là.

Par exemple, si le commerçant traite dix paiements par carte et vingt paiements en espèces en une journée, deux paiements sont écrits. Ces paiements sont enregistrés contre la facture de ventes quotidienne (voir **[Ventes](/sfc/mapping-specifications/xero-mapping-specification#sales)**).

Si vous écrivez les **Ventes** et les **Paiements** simultanément, les factures de ventes seront écrites dans Xero entièrement payées (car aucun autre argent n'est attendu des clients).
