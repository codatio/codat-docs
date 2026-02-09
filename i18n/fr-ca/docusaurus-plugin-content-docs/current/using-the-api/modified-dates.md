---
title: "Utiliser les dates de modification"
description: "Comprendre quand les données ont été modifiées"
---

Codat expose deux dates pour indiquer quand les données ont été mises à jour pour la dernière fois :

- **modifiedDate** - la date à laquelle les données ont changé pour la dernière fois dans le système Codat
- **sourceModifiedDate** - la date à laquelle les données ont changé pour la dernière fois dans le système du fournisseur sous-jacent

## Date de modification

**`modifiedDate` indique la fraîcheur des données dans Codat.**

Elle vous indique quand la version la plus récente de l'enregistrement a été récupérée de la source de données et mise à jour dans le cache de la base de données de Codat. La plupart des enregistrements conservent la même date de modification à travers plusieurs récupérations.

### Utiliser la date de modification

Utilisez la `modifiedDate` pour identifier et récupérer les enregistrements qui ont changé depuis votre dernière récupération.

:::info Exemple : Récupérer les factures d'une entreprise mises à jour depuis la dernière récupération

Suivez votre `lastFetchDate` dans votre système et utilisez-la lors de l'interrogation des données :

```http
GET /companies/{companyId}/data/invoices?page=1&query=modifiedDate%3E%3D{lastFetchDate}
```

Cette requête récupère les enregistrements dont les dates de modification sont supérieures ou égales à (plus récentes que) la date de récupération que vous avez spécifiée.

:::

### Conseils et pièges

- La `modifiedDate` est renseignée pour tous les types de données **sauf** les suivants :
  - pièces jointes
  - bilans
  - informations sur l'entreprise
  - rapports de profits et pertes
- Si la `sourceModifiedDate` change, la `modifiedDate` changera également, même si aucune des valeurs que nous lisons n'a été modifiée. Cela peut se produire car il peut y avoir des types de données supplémentaires dans la plateforme source qui ne sont pas mappés au modèle de données Codat.
- Si le modèle de données Codat change (p. ex. nous ajoutons une nouvelle propriété à un type de données), la `modifiedDate` changera, même si les valeurs des données n'ont pas changé.

## Date de modification source

**`sourceModifiedDate` indique quand un enregistrement a été modifié pour la dernière fois dans le logiciel comptable, bancaire ou commercial du client.**

L'enregistrement peut avoir été mis à jour par l'entreprise ou un processus d'affaires, comme lorsque des paiements sont effectués sur une facture.

### Utiliser la date de modification source

Utilisez la `sourceModifiedDate` lorsque vous souhaitez identifier les enregistrements qui ont été mis à jour par une entreprise ou un processus d'affaires.

:::info Exemple : Trouver les factures émises il y a plus de 12 mois qui ont été mises à jour dans la plateforme source au cours du dernier mois

```http
GET /companies/{companyId}/data/invoices?page=1&query=issueDate%3C{todayMinus12Months}%26%26sourceModifiedDate%3E%3D{todayMinusOneMonth}
```

Cette requête récupère les factures dont les dates d'émission sont antérieures à douze mois et dont la date de modification source est supérieure ou égale à un mois.

:::

### Conseils et pièges

- La `sourceModifiedDate` peut ne pas être renseignée et retournée comme `null` lorsque :
  - Lecture des pièces jointes.
  - La plateforme d'intégration ne fournit pas d'informations de date de modification pour un type de données donné.
  - Un enregistrement a été supprimé de la plateforme source et Codat n'a pas d'enregistrement de la date de suppression.
  - Un enregistrement a été annulé. Pour certaines plateformes qui suppriment de manière réversible les enregistrements, les métadonnées `isDeleted` sont utilisées pour identifier les enregistrements annulés.
    - Pour les types de données comptables, vous pouvez identifier si un enregistrement a été supprimé entre deux synchronisations successives en [interrogeant](/using-the-api/querying) sur le drapeau `metadata.isDeleted!=true`.

:::tip Récapitulatif
Vous avez appris :

- Comment les dates sont utilisées pour maintenir les données de l'entreprise à jour
- La différence entre `modifiedDate` et `sourceModifiedDate`
  :::

---

## À lire ensuite

- [Actualiser les données de l'entreprise](/using-the-api/queueing-data-syncs)
