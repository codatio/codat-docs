---
title: "Ordonner les résultats"
description: "Bases et exemples de tri dans les API de Codat"
---

En plus des [requêtes](/using-the-api/querying), vous pouvez limiter les données de réponse en utilisant le paramètre `orderBy` pour spécifier l'ordre des enregistrements dans la réponse.

L'API peut retourner les résultats en ordre croissant ou décroissant. Vous pouvez également ordonner les résultats retournés par des requêtes personnalisées.

## Tri en ordre croissant

Par défaut, les résultats sont triés en ordre croissant. Par exemple, si vous souhaitez retourner une [liste de factures](/accounting-api#/operations/list-invoices) en ordre croissant, les plus anciennes en premier, utilisez la syntaxe suivante : `{paramètre}={valeur}`. Dans ce cas, `orderBy=issueDate`.

```http
GET /companies/{companyId}/data/invoices?page=1&orderBy=issueDate
```

## Tri en ordre décroissant

Pour retourner les résultats triés en ordre décroissant, vous ajoutez simplement un `-` devant la valeur du paramètre. Par exemple, pour retourner la même [liste de factures](/accounting-api#/operations/list-invoices), cette fois avec la facture la plus récente en premier, utilisez la syntaxe suivante : `orderBy=-issueDate`.

```http
GET /companies/{companyId}/data/invoices?page=1&orderBy=-issueDate
```

## Ordonner les résultats d'une requête personnalisée

Vous pouvez également ordonner les résultats retournés par toute requête personnalisée que vous avez écrite. Par exemple, vous pourriez régulièrement exécuter une requête qui retourne toutes les [factures fournisseurs impayées](/accounting-api#/operations/list-bills) :

```http
GET /companies/{companyId}/data/bills?query=amountDue%3E0
```

Pour voir la même liste triée en ordre croissant, c'est-à-dire les factures fournisseurs impayées les plus anciennes en premier, vous ajoutez la syntaxe suivante : `orderBy=dueDate`. La requête devient :

```http
GET /companies/{companyId}/data/bills?query=amountDue%3E0&orderBy=dueDate
```

Pour voir la même liste triée en ordre décroissant, c'est-à-dire les factures fournisseurs impayées les plus récentes en premier, ajoutez `-` devant la valeur du paramètre `dueDate` :

```http
GET /companies/{companyId}/data/bills?query=amountDue%3E0&orderBy=-dueDate
```

:::tip Récapitulatif
Vous avez appris :

- Comment trier les données avec le paramètre `orderBy`
  :::

---

## À lire ensuite

- [Dates de modification](/using-the-api/modified-dates)
