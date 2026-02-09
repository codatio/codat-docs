---
title: "Actualiser les données de l'entreprise"
sidebar_label: "Actualiser les données"
description: "Aperçu de la mise en file d'attente d'une actualisation de données dans l'API de Codat"
---

:::caution Fréquence minimale de synchronisation des données

Vous devriez actualiser au moins un type de données mensuellement pour vous assurer que votre jeton de connexion n'expire pas lorsque vous ne synchronisez pas activement les données, sauf si seule une synchronisation unique est nécessaire.
:::

## Vérifier la « fraîcheur » des données

Utilisez l'endpoint `GET /companies/{companyId}/dataStatus` pour vérifier la [dernière fois que chaque type de données a été synchronisé](/core-concepts/status).

Dans cette requête, `companyId` est [l'identifiant unique que vous avez reçu en réponse à la création de cette entreprise](/using-the-api/managing-companies#create-a-codat-company).

Lorsque vous lisez des données pour la première fois, utilisez cet endpoint pour vérifier si la synchronisation a réussi.

`GET /companies/{companyId}/dataStatus`

```json title="Réponse pour une première synchronisation réussie"
{
  "suppliers": {
    "dataType": "suppliers",
    "lastSuccessfulSync": "2019-06-11T13:26:54.6884704Z",
    "currentStatus": "Complete",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
    "latestSuccessfulSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85"
  },
  ...
}
```

```json title="Réponse pour une première synchronisation échouée"
{
  "suppliers": {
    "dataType": "suppliers"
    "currentStatus": "FetchError",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
  },
  ...
}
```

## Actualiser les données

Il y a [deux endpoints POST dans l'API](/platform-api#/operations/refresh-company-data) pour mettre en file d'attente une actualisation de données :

1. `/companies/{companyId}/data/all`
   - Met en file d'attente un ensemble de données pour chacun des types de données marqués comme _Récupérer au premier lien_ dans vos [paramètres de types de données](/core-concepts/data-type-settings), lorsque ce type de données est pris en charge par les connexions de données liées de l'entreprise
2. `/companies/{companyId}/data/queue/{dataType}`
   - Met en file d'attente un ensemble de données pour le type de données spécifié
   - _dataType_ est la clé du type de données, p. ex. `invoices`

:::info Exception de jeu de données multiples en file d'attente

Si vous essayez de mettre en file d'attente une synchronisation pour un type de données qui est déjà en cours de traitement, vous recevrez une exception.

```
"error": "DatasetAlreadyInProgressException: Cannot queue {dataType} sync for {companyId} as previous sync {dataSetId} is still in progress"
```

:::

L'actualisation des données peut prendre différents temps selon l'intégration et la quantité de données récupérées. Vous pouvez utiliser les [webhooks](/using-the-api/webhooks/overview) pour être informé lorsque l'opération est terminée.

### Enregistrements supprimés entre les synchronisations

Pour nos types de données sources comptables, Codat stocke les enregistrements supprimés par une entreprise dans le logiciel comptable sous-jacent entre des synchronisations de données successives pour assurer une meilleure cohérence des données. Si ces enregistrements ne sont pas pertinents pour votre cas d'utilisation, vous pouvez les exclure en [interrogeant](/using-the-api/querying) sur le drapeau `metadata.isDeleted!=true`.

Les enregistrements qui ont été créés et supprimés par une entreprise avant la première synchronisation ne seront jamais lus et stockés par Codat.

## Actualisation planifiée

Codat peut également actualiser les données selon un calendrier défini, basé sur la « fréquence de synchronisation » définie pour chaque type de données.

### Fréquence de synchronisation

La fréquence de synchronisation recommandée est hebdomadaire. Elle vous fournit des données suffisamment récentes tout en tenant compte des types de données qui ne changent pas souvent et en diminuant le nombre d'appels API nécessaires.

Certains types de données comme les informations sur l'entreprise, les taux de taxe et les plans comptables changent rarement (mensuellement au plus), mais sont si petits à synchroniser qu'ils n'ont aucun impact sur les performances.

Cependant, vous pouvez définir un calendrier de synchronisation plus fréquent s'il est nécessaire pour votre cas d'utilisation.

- **Mensuel** : Nous recommandons de synchroniser au moins un type de données mensuellement (p. ex. les informations sur l'entreprise) pour s'assurer que le jeton de connexion n'expire pas lorsque vous ne synchronisez pas activement les données (sauf si seule une synchronisation unique est nécessaire).
- **Hebdomadaire (recommandé)** : Maintient les données raisonnablement à jour, particulièrement lorsque les types de données changent moins fréquemment, tout en réduisant le nombre d'appels API nécessaires.
- **Quotidien** : Vous donne une image proche du temps réel de la plupart des types de données tout en restant dans les limites de débit conservatrices de la plupart des logiciels comptables.
- **Horaire** : Recommandé uniquement pour des cas d'utilisation spécifiques et peut nécessiter une attention particulière aux limites de débit, p. ex. les factures et les paiements pour le financement de factures.

## Conseils et pièges

- Assurez-vous d'effectuer une synchronisation mensuelle pour au moins un type de données afin de maintenir votre jeton de connexion opérationnel si vous n'effectuez pas de synchronisation active. Vous pouvez ignorer ceci si vous n'avez besoin que d'une synchronisation unique.

- Si vous créez vos propres rapports ou accédez à des rapports générés par Codat qui reposent sur plusieurs types de données, récupérez tous les types de données nécessaires avant de générer le rapport. Sinon, il peut y avoir des incohérences dans la fraîcheur des données. Vous pouvez vérifier les incohérences possibles en utilisant les propriétés `lastSuccessfulSync` des types de données.

  Par exemple, si vous calculez la position des comptes clients (AR) d'une entreprise en utilisant les factures, les notes de crédit, les paiements, les transactions de compte et les clients avec des dates `lastSuccessfulSync` de `2023-07-10`, et la comparez à la position AR du bilan avec la date `lastSuccessfulSync` de `2023-07-11`, les résultats sont susceptibles de différer.

- Pour la plupart des types de données, nous récupérons tout l'historique disponible. Pour les types de données d'états financiers (`balanceSheet`, `profitAndLoss`, `cashFlowStatement`), nous récupérons 24 mois d'historique. Ces paramètres par défaut peuvent être remplacés via notre API en utilisant les [paramètres de synchronisation avancés](/knowledge-base/advanced-sync-settings).

---

## À lire ensuite

- [Codes de statut et erreurs](/using-the-api/errors)
- [Paramètres de synchronisation avancés](/knowledge-base/advanced-sync-settings)
