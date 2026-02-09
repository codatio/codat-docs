---
title: "Paramètres de type de données"
sidebar_label: "Types de données"
description: "Aperçu du concept et détails clés"
tags:
  - Core concept
---

Un « type de données » est un type spécifique de données, comme une [facture](/accounting-api#/schemas/Invoice).

Sur la page <a className="external" href="https://app.codat.io/settings/data-types" target="_blank">Paramètres de type de données</a> dans le portail Codat, vous pouvez consulter les paramètres actuels pour chaque type de données réparti par type d'intégration, remplacer les paramètres de synchronisation par défaut et spécifier la fréquence de récupération pour actualiser les ensembles de données. Vous pouvez également voir les clés `dataType` pour chaque type de données.

Vous pouvez également choisir si les données sont automatiquement lues lorsqu'une entreprise est liée pour la première fois, en utilisant le paramètre **Récupérer lors de la première liaison**.

## Remplacer les paramètres de synchronisation par défaut

Pour personnaliser vos paramètres de type de données :

1. Connectez-vous au <a href="https://app.codat.io" target="_blank">portail Codat</a>.
2. Dans la barre de navigation, cliquez sur **Paramètres > Types de données**. La page **Paramètres de type de données** s'affiche.
3. Personnalisez les paramètres pour les types de données qui vous intéressent et enregistrez vos modifications.

Vous pouvez en savoir plus sur chaque paramètre de type de données en lisant les sections ci-dessous.

![Vue des paramètres de type de données dans le portail Codat](/img/old/64728a5-datat_type_settings.png)

## Utiliser « Récupérer lors de la première liaison »

Par défaut, **Récupérer lors de la première liaison** est _activé_ pour la plupart des types de données.

Lorsque **Récupérer lors de la première liaison** est _activé_ pour un type de données :

- Le type de données est automatiquement mis en file d'attente pour synchronisation lorsqu'une entreprise est liée pour la première fois, à condition que le type de données soit disponible dans le logiciel de comptabilité de l'entreprise.
- Le type de données est mis en file d'attente pour synchronisation lorsque vous cliquez sur le bouton **Actualiser les données** pour une entreprise dans le portail Codat.
- Le type de données est mis en file d'attente pour synchronisation lorsque vous effectuez une requête vers [`POST /companies/{companyId}/data/queue/{dataType}`](https://api.codat.io/swagger/index.html#/Data/post_companies__companyId__data_queue__dataType_) avec _all_ comme type de données.

Lorsque **Récupérer lors de la première liaison** est _désactivé_ pour un type de données :

- Le type de données n'est pas automatiquement mis en file d'attente pour synchronisation lorsqu'une entreprise est liée pour la première fois.
- Vous pouvez toujours mettre en file d'attente une lecture pour ce type de données individuel en utilisant le point de terminaison [`POST /companies/{companyId}/data/queue/{dataType}`](https://api.codat.io/swagger/index.html#/Data/post_companies__companyId__data_queue__dataType_). Cela peut être utile pour les tests ou si vous n'avez besoin que d'un accès peu fréquent à un ensemble de données.

Pour plus d'informations sur la façon de synchroniser les ensembles de données à la demande, consultez [Synchronisation de vos données](/core-concepts/status).

## Choisir une fréquence de synchronisation

Par défaut, **Fréquence de synchronisation** est définie sur **Aucune**.

Vous pouvez modifier la fréquence de synchronisation en utilisant la liste déroulante à côté du nom du type de données :

- Aucune (désactive la synchronisation)
- Mensuelle
- Hebdomadaire
- Quotidienne
- Horaire (fonctionnalité premium)

Les synchronisations se déclencheront automatiquement en fonction de la date de dernière synchronisation. Par exemple, si la fréquence est quotidienne (24 heures), la prochaine synchronisation serait automatiquement mise en file d'attente 24 heures après la dernière synchronisation.

Il n'est pas possible de définir une date ou une heure spécifique pour que les synchronisations se produisent. Si vous avez besoin de ce type de fonctionnalité, vous pouvez créer une planification personnalisée en utilisant cron et notre point de terminaison [Actualiser le type de données](https://docs.codat.io/platform-api#/operations/refresh-data-type).

:::note Connecteurs hors ligne
Si un connecteur reste installé sur la machine de l'utilisateur et qu'une fréquence de synchronisation est configurée, le connecteur hors ligne continuera à synchroniser périodiquement les données lorsque le connecteur est disponible.
:::

## Mettre en file d'attente une synchronisation depuis le portail Codat

Pour déclencher manuellement la synchronisation de vos données :

1. Dans la barre de navigation du portail Codat, sélectionnez **Entreprises**.
2. Sélectionnez l'entreprise requise, puis cliquez sur **Actualiser les données**.

Vous pouvez également afficher **Historique de lecture** et **Historique d'écriture** pour vérifier le statut des synchronisations de données de lecture et d'écriture précédentes.

:::note Historique de synchronisation par défaut
Pour la plupart des types de données, nous récupérons tout l'historique disponible. Pour les types de données d'états financiers (`balanceSheet`, `profitAndLoss`, `cashFlowStatement`), nous récupérons 24 mois d'historique. Ces paramètres par défaut peuvent être remplacés via notre API en utilisant [les paramètres de synchronisation avancés](/knowledge-base/advanced-sync-settings).
:::

---

## Lire ensuite

- Concept suivant : [Statut des données](/core-concepts/status)
