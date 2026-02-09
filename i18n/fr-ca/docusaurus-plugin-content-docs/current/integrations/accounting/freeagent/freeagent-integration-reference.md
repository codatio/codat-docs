---
title: "Référence de l'intégration FreeAgent"
description: "Éléments à connaître lors de la synchronisation des données avec FreeAgent."
sidebar_label: Référence
---

Notez les informations suivantes lors de la création de votre application en utilisant l'intégration FreeAgent de Codat.

## Coûts directs

Les coûts directs sont mappés depuis [Bank Transaction Explanations](https://dev.freeagent.com/docs/bank_transaction_explanations) dans FreeAgent. Cet objet ne prend pas en charge plusieurs lignes et par conséquent, les coûts directs lus depuis FreeAgent ne contiennent qu'une seule ligne dans le tableau `lineItems`. Vous ne pouvez également écrire que des coûts directs contenant une seule ligne, sinon une erreur est renvoyée.

Lors de la lecture de coûts directs en devises étrangères, le champ `currencyRate` n'est pas rempli en raison des limitations de l'API du fournisseur.

Lors de l'écriture de coûts directs, la devise de l'objet créé sera la même que celle du compte bancaire associé. C'est parce que FreeAgent ne permet pas aux utilisateurs de publier des devises étrangères sur des comptes bancaires.

### Gestion de la taxe lors de l'écriture de coûts directs

Vous devez être conscient du comportement suivant lors de l'écriture de coûts directs avec taxe :

- Si `lineItems.taxAmount` est spécifié, et que le compte est taxable, le taux de taxe par défaut pour le compte est ignoré et remplacé par ce montant.
- Si `lineItems.taxAmount` n'est pas spécifié, le taux de taxe par défaut pour le compte dans FreeAgent est appliqué (ceci est défini lors de la création du compte)
- Pour écrire un montant de taxe nul, définissez `lineItems.taxAmount` à `0`.

## Revenus directs

Les revenus directs lus depuis FreeAgent ne contiennent qu'une seule ligne dans le tableau `lineItems`.

Le champ `currencyRate` n'est pas rempli lors de la lecture de revenus directs en devises étrangères en raison des limitations de l'API du fournisseur.

## Transferts

Les transferts sont mappés depuis [Bank transactions](https://dev.freeagent.com/docs/bank_transactions) dans FreeAgent.

FreeAgent fournit un ID de transfert unique pour chaque côté du transfert. Le modèle de données de Codat nécessite un seul ID unique pour identifier le transfert. Dans Codat, l'`id` du transfert identifie le côté _Transfer to Another Account_ des objets Bank Transaction Explanation to/from dans FreeAgent. L'`id` du transfert est dérivé de la propriété `url` de l'objet _Transfer to_.

FreeAgent ne prend pas en charge le transfert de fonds entre un compte bancaire et un compte nominal.

:::caution Montants négatifs dans les transferts FreeAgent

Lors de l'écriture d'une transaction de transfert via l'API FreeAgent, vous pouvez saisir `gross_value` comme valeur négative, changeant effectivement la direction du transfert. Le modèle de données de Codat ne prend pas en charge l'écriture de montants de transfert to/from négatifs.

Vous pouvez obtenir le même résultat en échangeant les comptes bancaires `to` et `from` lors de l'écriture des données depuis Codat.

:::

Lors de la lecture et de l'écriture de transferts depuis FreeAgent, les champs suivants ne sont pas disponibles :

- `contactRef.id`
- `contactRef.name`
- `contactRef.datatype`
- `from.currency`
- `to.currency`

Par conséquent, lors de l'écriture de champs de devise de transfert dans FreeAgent, Codat vérifie que la devise spécifiée est la même que la devise du compte bancaire associé.

De plus, toutes les valeurs écrites dans `description` et `trackingCategoryRefs` sont ignorées et remplies automatiquement par FreeAgent.
