---
title: Comptes fournisseurs
description: "Récupérer et créer des factures fournisseurs en utilisant l'API Accounting"
---

### Comptes fournisseurs

Dans l'API de Codat, une [facture fournisseur](/accounting-api#/schemas/Bill) représente une facture d'un [fournisseur](/accounting-api#/schemas/Supplier), pour ce cas d'utilisation, les factures fournisseurs peuvent être [récupérées](/accounting-api#/operations/list-bills) à partir de l'API Accounting, ou vous pouvez créer des factures fournisseurs dans votre plateforme et les [publier](https://docs.codat.io/accounting-api#/operations/create-bill) vers le logiciel de comptabilité de vos clients.

### Gestion des fournisseurs

Dans l'API de comptabilité, un [fournisseur](/accounting-api#/schemas/Supplier) représente une entreprise ou un travailleur autonome qui fournit des biens ou des services à une entreprise.

Les fournisseurs sont pertinents pour le cas d'utilisation de paiement de factures car chaque facture fournisseur est associée à un fournisseur - les fournisseurs ont également des informations importantes telles que les adresses et les coordonnées qui pourraient être utilisées pour notifier un fournisseur une fois qu'un paiement est effectué.

#### Récupérer une liste de fournisseurs

Vous pouvez obtenir une [liste de fournisseurs](/accounting-api#/operations/list-suppliers) en utilisant l'API Accounting

```http request
GET https://api.codat.io/companies/{companyId}/data/suppliers?page=1&pageSize=100
```

Les paramètres de requête peuvent également être utilisés pour réduire la liste des fournisseurs, par exemple :

- `status=Active` ne renvoie que les fournisseurs actifs
- `defaultCurrency=USD` renvoie les fournisseurs qui fournissent des biens ou des services en dollars
- `supplierName=Acme` renvoie les fournisseurs dont le nom correspond à la requête

:::tip Soldes des fournisseurs
Actuellement, l'API de comptabilité n'expose pas les soldes des fournisseurs sur l'endpoint fournisseur, cependant vous pouvez y accéder en

- Agrégeant les factures fournisseurs par fournisseur
- Utilisant le rapport [Débiteurs vieillissants](/accounting-api#/operations/get-aged-debtors-report)
  :::

#### Créer un nouveau fournisseur

Dans certains cas, une entreprise peut faire affaire avec un nouveau fournisseur pour la première fois, lorsque cela se produit, vous devez [créer le fournisseur](/accounting-api#/operations/create-supplier) en premier avant de créer une facture fournisseur pour ce fournisseur.

```http request
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/suppliers
```

#### Mettre à jour un fournisseur

Si un fournisseur change d'adresse ou de nom commercial, vous voudrez peut-être refléter ce changement dans le logiciel de comptabilité de l'entreprise en [mettant à jour le fournisseur](/accounting-api#/operations/put-supplier).

```http request
PUT https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/suppliers/{supplierId}
```

### Factures fournisseurs

Les factures fournisseurs peuvent soit être créées dans le logiciel de comptabilité de l'entreprise puis interrogées via l'API Accounting, soit les factures fournisseurs peuvent être créées dans votre application puis publiées vers le logiciel de comptabilité de l'entreprise.

#### Obtenir une liste de factures fournisseurs

Vous pouvez [obtenir une liste de factures fournisseurs](/accounting-api#/operations/list-bills) pour une entreprise à partir de l'API Accounting

```http request
GET https://api.codat.io/companies/{companyId}/data/bills?page=1&pageSize=100
```

Les paramètres de requête peuvent être utilisés pour filtrer et réduire les résultats retournés, par exemple :

- `supplierRef.supplierName=acme inc` ne renvoie que les factures fournisseurs associées au fournisseur spécifié
- `dueDate>2023-06-01&&dueDate<2023-06-30` ne renvoie que les factures fournisseurs dues pour paiement entre le 1er juin et le 30 juin
- `amountDue>0` ne renvoie que les factures fournisseurs impayées avec des montants dus

Vous pouvez également récupérer toutes les [pièces jointes](/accounting-api#/operations/download-bill-attachment) associées pour une facture fournisseur donnée, comme une copie PDF de la facture émise par le fournisseur.

#### Créer une facture fournisseur

Vous pouvez également [créer une nouvelle facture fournisseur](/accounting-api#/operations/create-bill) dans le logiciel de comptabilité de votre entreprise pour représenter les biens ou services achetés auprès d'un fournisseur.

```http request
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bills
```

#### Télécharger une copie de la facture

Dans certains cas où une facture fournisseur est créée dans votre application, l'entreprise peut également vouloir enregistrer une copie de la facture PDF avec la facture fournisseur dans son logiciel de comptabilité. Cela peut être pris en charge via l'[API de pièces jointes de factures fournisseurs](/accounting-api#/operations/upload-bill-attachments)

```http request
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bills/{billId}/attachments
```

---

## Lire ensuite

- [Correspondance des méthodes de paiement](/usecases/bill-pay/mapping) - Permettre aux PME de choisir comment effectuer les paiements
