---
title: "Spécification de mappage QuickBooks Online"
sidebar_label: QuickBooks Online
description: "Directives pour la configuration du mappage de données d'un logiciel de commerce vers QuickBooks Online (QBO)"
image: "/fr-ca/img/banners/social/commerce.png"
---

:::note Prise en charge de la taxe de vente automatique

Sync for Commerce prend en charge la taxe de vente automatique (AST) sur les factures pour les commerçants américains dans QuickBooks Online.
:::

## Aperçu

Ce document fournit des directives pour la configuration du mappage de données d'un logiciel de commerce vers QuickBooks Online (QBO).

Dans l'interface utilisateur du flux Sync de Codat, les types de données sont regroupés sous trois fonctionnalités :

- [Ventes](/sfc/mapping-specifications/qbo-mapping-specification#sales)
- [Frais](/sfc/mapping-specifications/qbo-mapping-specification#fees)
- [Paiements](/sfc/mapping-specifications/qbo-mapping-specification#payments)

## Ventes

La fonctionnalité **Ventes** représente toutes les ventes effectuées dans le cadre des activités commerciales normales d'une entreprise pendant une période donnée.

### Mappage des comptes de ventes

#### Ventes

Les ventes sont comptabilisées sur un compte nominal du type QBO **Revenus**. C'est le compte que le commerçant utiliserait généralement pour comptabiliser ses ventes.

Le commerçant peut sélectionner un compte existant dans QBO. Si un compte n'est pas disponible, il doit être créé dans QBO à cette fin.

Codat écrit une seule facture de ventes quotidienne dans QBO. Cette facture représente toutes les ventes effectuées au cours de cette journée.

La facture est émise au fournisseur de services de commerce.

La facture contient une ligne pour chaque taux de taxe avec lequel le commerçant négocie, cette ligne représentant le total de toutes les ventes à ce taux de taxe.

Si aucune vente n'a été effectuée pour un taux de taxe donné ce jour-là, la ligne correspondante sera omise.

:::caution Arrondissement

Les remises sont appliquées au total de l'achat une fois que tous les articles ont été additionnés plutôt qu'au niveau de l'article. Comme nous séparons les articles en pourcentages de TVA pour toutes les ventes de la journée, les remises doivent être appliquées au niveau de l'article, ce qui peut entraîner de légères différences d'arrondissement par rapport à l'application de la remise au niveau total. Selon les conseils de la plupart des logiciels de comptabilité, nous ajoutons une ligne de facture de ± 0,01 pour aligner le total avec le total correct.
:::

Lorsque le commerçant reçoit le paiement pour les ventes déclarées, la facture est marquée comme payée et équilibrée contre un paiement de facture (voir [Paiements](/sfc/mapping-specifications/qbo-mapping-specification#payments)).

#### Remboursements

Les remboursements représentent une catégorie fourre-tout pour tous les remboursements, en espèces ou non.

Semblable à **[Ventes](/sfc/mapping-specifications/qbo-mapping-specification#sales)**, les **Remboursements** sont généralement comptabilisés sur un compte nominal que le commerçant utilise pour comptabiliser ses revenus, du type QBO **Revenus**.

Généralement, les commerçants écriraient les **[Ventes](/sfc/mapping-specifications/qbo-mapping-specification#sales)** et les **Remboursements** dans le même compte. Cependant, ils peuvent utiliser un compte différent s'ils souhaitent les déclarer séparément.

Codat écrit une note de crédit quotidienne dans QBO. La note de crédit représente tous les remboursements effectués au cours de cette journée.

La note de crédit contient une ligne pour chaque taux de taxe avec lequel le commerçant négocie, cette ligne représentant le total de tous les remboursements à ce taux de taxe. Si aucun remboursement n'a été effectué pour un taux de taxe donné ce jour-là, la ligne correspondante sera omise.

Lorsque les remboursements d'achat sont enregistrés dans QBO, le revenu négatif est comptabilisé sur le compte sélectionné.

:::caution Paiements

Les informations suivantes sont liées à la fonctionnalité **Paiements**. Pour en savoir plus sur la configuration des **Paiements**, naviguez vers la section [Paiements](/sfc/mapping-specifications/qbo-mapping-specification#payments).
:::

Pour représenter l'argent retourné au client, une écriture de journal est écrite créditant le compte de caisse et débitant le compte du débiteur.

Ceci est ensuite lié à la note de crédit par un 'recevoir paiement' de valeur zéro, ce qui change effectivement le statut de la note de crédit à payé et crée un lien de paiement sur l'écriture de journal.

#### Pourboires

**Pourboires** représente les pourboires collectés par le commerçant de leurs clients lors du paiement.

Selon la préférence du commerçant, **Pourboires** peut être comptabilisé dans un compte **Revenus** ou un compte **Passif**.

Les pourboires sont écrits dans QBO dans le cadre de la facture de [Ventes](/sfc/mapping-specifications/qbo-mapping-specification#sales) quotidienne en tant que ligne séparée.

#### Prépayé

La fonctionnalité **Prépayé** couvre les transactions relatives à la vente et au rachat d'articles prépayés, tels que les cartes-cadeaux.

Les transactions de type **Prépayé** doivent être comptabilisées dans un compte **Passif**.

L'achat d'articles prépayés apparaîtra comme une ligne sur la facture de [Ventes](/sfc/mapping-specifications/qbo-mapping-specification#sales) quotidienne dans QBO.

Notez que lorsqu'un client utilise l'article prépayé (par exemple, achète un article avec une carte-cadeau), cela est traité comme une vente normale (voir **[Ventes](/sfc/mapping-specifications/qbo-mapping-specification#sales)**).

## Frais

La fonctionnalité Frais englobe les transactions qui impliquent le fournisseur de services de commerce, y compris les **[Frais de paiement](/sfc/mapping-specifications/qbo-mapping-specification#payment-fees)** qu'un logiciel de commerce facture au commerçant pour le traitement de leurs transactions par carte et les **[Remboursements de frais de paiement](/sfc/mapping-specifications/qbo-mapping-specification#payment-fee-refunds)**.

### Mappage des comptes de frais

#### Frais de paiement

Les frais sont comptabilisés sur un compte nominal de type **Dépense**.

S'il n'y a pas de compte de ce type, les utilisateurs doivent créer un compte dans QuickBooks à cette fin.

Codat écrit une seule facture quotidienne dans QBO. Cette facture représente tous les frais prélevés par le logiciel de commerce au cours de cette journée. La facture peut avoir plus d'une ligne s'il y a différents types de transactions qui se produisent tout au long de la journée.

#### Remboursement de frais de paiement

Lorsqu'un commerçant rembourse un paiement accepté à l'aide d'un logiciel de commerce, la commission prélevée lors de l'acceptation du paiement est simultanément remboursée sur leur compte commercial. Dans l'interface utilisateur du flux Codat Sync, ces remboursements sont appelés **Remboursements de frais de paiement**.

Les remboursements de frais de paiement doivent être comptabilisés dans les mêmes comptes configurés pour les **Frais de paiement** :

Un seul dépôt bancaire est écrit chaque jour représentant tous les remboursements de frais traités ce jour-là.

## Paiements

Les comptes de paiement contiennent de l'argent. Cela contraste avec tous les comptes discutés ci-dessus dans les sections **Ventes**, **Remboursements** et **Frais**, qui sont des comptes nominaux et représentent des concepts comptables plutôt que de l'argent réel.

Codat prend en charge soit les comptes bancaires soit les comptes courants pour les comptes de paiement. Ils doivent être d'un type nominal QBO **Caisse en banque et en main** (**Actif**).

<img
  src="/fr-ca/img/old/d91d4ee-cash_at_bank.png"
  alt="Écran de paramètres de compte pour les comptes de paiement dans QBO"
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

:::caution Nouveaux types de paiement après configuration

Si l'utilisateur commence à utiliser d'autres types de paiements après la configuration initiale, la synchronisation s'arrêtera jusqu'à ce que les comptes aient été remappés en retournant à la page de configuration.
:::

Codat écrit un seul paiement dans QBO par jour, par type de paiement utilisé ce jour-là.

Si un commerçant a traité dix paiements par carte et vingt paiements en espèces en une journée, deux paiements sont écrits. Ces paiements sont enregistrés contre la facture de ventes quotidienne (voir [Ventes](/sfc/mapping-specifications/qbo-mapping-specification#sales)).
