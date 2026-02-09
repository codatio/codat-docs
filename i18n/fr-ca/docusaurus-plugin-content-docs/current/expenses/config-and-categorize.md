---
title: "Mapper les transactions des clients"
description: Mapper les comptes, fournisseurs et clients pour créer des transactions à l'aide de la solution Expenses
sidebar_label: Mapper les transactions
tags: [syncforexpense, mappingOptions, Config]
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Une fois que votre utilisateur PME a autorisé une connexion à son logiciel de comptabilité et que vous avez créé une connexion de données, il est prêt à commencer à créer ses transactions de dépenses. Chaque transaction doit être associée à un compte bancaire, un client et un fournisseur. Pour ajouter ces valeurs à la transaction, vous pouvez :

- Permettre à votre client d'indiquer les valeurs requises du compte bancaire, du client et du fournisseur sur chaque transaction de dépense.
- Utiliser des valeurs par défaut de secours pour le compte bancaire, le client et le fournisseur préconfigurées pour l'entreprise du client.

Vous devez également offrir à votre client une opportunité (via l'interface utilisateur de votre application) de choisir les comptes par défaut, les catégories de suivi et les taux de taxe auxquels leurs dépenses seront mappées.

## Permettre au client de définir des valeurs

Vos clients devraient pouvoir définir un compte bancaire, un client et un fournisseur pour chaque [transaction de dépense](/sync-for-expenses-api#/operations/create-expense-transaction#request-body) pour permettre une représentation plus précise de qui ou où la dépense devrait être associée dans le logiciel de comptabilité.

```http title="Bank account override on the expense transaction"
"bankAccountRef":{
  "id":"08ca1f02-0374-11ed-b939-0242ac120002",
}
```

```http title="Supplier / customer override on the expense transaction"
"contactRef":{
  "id":"08ca1f02-0374-11ed-b939-0242ac120002",
  "type": "Supplier"
}
```

Si votre client ne fournit pas ces valeurs sur la transaction elle-même, Expenses utilisera les valeurs par défaut que vous configurez pour l'entreprise comme secours.

:::caution Valeurs par défaut et obligatoires

Si vous choisissez de ne pas définir de configuration par défaut et qu'aucune valeur n'est saisie sur la transaction, la dépense ne pourra pas être créée dans le logiciel de comptabilité. Pour éviter cela, rendez les champs de compte bancaire, de client et de fournisseur obligatoires dans l'interface utilisateur de votre application pour que votre utilisateur les fournisse.
:::

## Configurer des valeurs par défaut

Lorsqu'aucune valeur n'est définie au niveau de la transaction, l'élément de dépense sera associé aux valeurs par défaut du compte bancaire, du fournisseur et du client configurées pour l'entreprise.

Pour définir ces valeurs et déterminer comment les transactions de vos clients seront enregistrées, utilisez notre endpoint [Set company configuration](/sync-for-expenses-api#/operations/set-company-configuration). Vous pouvez utiliser le endpoint [Get company configuration](/sync-for-expenses-api#/operations/get-company-configuration) à tout moment pour vérifier la configuration existante ou l'afficher à l'utilisateur.

```http title="Company Config"
POST https://api.codat.io/companies/{companyId}/sync/expenses/config
{
    "bankAccount": {
        "id": "{selectedBankAccountId}"
    },
    "supplier": {
        "id": "{selectedSupplierId}"
    },
    "customer": {
        "id": "{selectedCustomerId}"
    }
}
```

Si une configuration est définie pour une entreprise, mais que le client définit une valeur de compte bancaire, de fournisseur et de client au niveau de la transaction de dépense, Expenses utilisera les valeurs de la transaction lors de la création de la dépense dans le logiciel de comptabilité.

:::caution Fournisseurs dans Microsoft Dynamics

En raison d'une limitation du logiciel de comptabilité, Microsoft Dynamics nécessite un fournisseur par défaut lors de la création de dépenses. Nous ne prenons actuellement pas en charge l'attribution d'un fournisseur au niveau de la transaction.
:::

### Compte bancaire

Un compte bancaire (`bankAccount.id`) est requis pour montrer d'où les achats ont été effectués. Il peut s'agir d'un compte de crédit ou de débit. Vous pouvez choisir de créer un nouveau compte ou de récupérer une liste de comptes existants du logiciel de comptabilité de votre client.

- Pour créer un nouveau compte bancaire, utilisez le endpoint [Create bank account](/sync-for-expenses-api#/operations/create-account). Vous devez déclencher une actualisation des données si un nouveau compte bancaire a été créé avant de synchroniser les transactions.

- Utilisez le endpoint [List accounts](/accounting-api#/operations/get-account) pour récupérer une liste des comptes existants de votre client depuis leur logiciel de comptabilité et les afficher.
  Vous pouvez également utiliser des [paramètres de requête](/using-the-api/querying) pour affiner la liste des résultats, par exemple :
  - `query=metadata.isDeleted=false&&isBankAccount=true` retourne les comptes bancaires existants.
  - `query=metadata.isDeleted=false&&isBankAccount=true&&type=liability` retourne les comptes bancaires de passif existants, qui sont utilisés pour les cartes de crédit.

### Fournisseur

Un fournisseur (`supplier.id`) est requis pour que les dépenses pertinentes puissent être associées à cet enregistrement de fournisseur. Vous pouvez choisir de créer un nouveau fournisseur ou de récupérer une liste de fournisseurs existants du logiciel de comptabilité de votre client.

- Pour créer un nouveau fournisseur, utilisez le endpoint [Create supplier](/sync-for-expenses-api#/operations/create-supplier).

- Utilisez le endpoint [List suppliers](/sync-for-expenses-api#/operations/list-suppliers) pour récupérer une liste des fournisseurs existants de votre client depuis leur logiciel de comptabilité et les afficher.
  Vous pouvez également utiliser des [paramètres de requête](/using-the-api/querying) pour affiner la liste des résultats. Par exemple, `query=metadata.isDeleted=false&&supplierName=supplierName` retourne les fournisseurs existants qui correspondent au nom spécifié.

:::info Considérations relatives à la devise du fournisseur

La devise associée au fournisseur doit correspondre à la devise associée à la dépense pertinente. Codat valide la correspondance pour les fournisseurs avec une devise unique définie, mais pas pour les fournisseurs qui travaillent avec plusieurs devises.

:::

### Client

Choisissez le client (`customer.id`) auquel toute activité génératrice de revenus, comme les remises en argent, devrait être associée. Vous pouvez créer un nouveau fournisseur ou récupérer une liste de fournisseurs existants du logiciel de comptabilité de votre client.

- Pour créer un nouveau client, utilisez le endpoint [Create customer](/sync-for-expenses-api#/operations/create-customer).

- Utilisez le endpoint [List customers](/sync-for-expenses-api#/operations/list-customers) pour récupérer une liste des clients existants de votre PME depuis leur logiciel de comptabilité et les afficher.
  Vous pouvez également utiliser des [paramètres de requête](/using-the-api/querying) pour affiner la liste des résultats. Par exemple, `query=metadata.isDeleted=false&&customerName=name` retourne les clients existants qui correspondent au nom spécifié.

### Gestion des fournisseurs et des clients

Dans certains scénarios, différents logiciels de comptabilité attribuent des clients et des fournisseurs à une transaction en fonction des [types de transactions](/expenses/sync-process/expense-transactions#transaction-types) de la dépense :

<table>
  <thead></thead>
  <tbody>
    <tr>
      <td style={{ textAlign: "center" }} colspan="8">
        <b>Plateformes prises en charge</b>
      </td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>
        <b>Xero</b>
      </td>
      <td>
        <b>QBO</b>
      </td>
      <td>
        <b>Netsuite</b>
      </td>
      <td>
        <b>Microsoft Dynamics</b>
      </td>
      <td>
        <b>QuickBooks Desktop</b>
      </td>
      <td>
        <b>FreeAgent</b>
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        <i>Types de transactions</i>
      </td>
      <td>Payments</td>
      <td>Supplier</td>
      <td>Supplier</td>
      <td>Supplier</td>
      <td rowspan="4">
        Supplier is not associated with expense-transactions due to a Dynamics
        platform limitation.
      </td>
      <td>Supplier</td>
      <td rowspan="4">
        Supplier is not associated with expense-transactions due to a FreeAgent
        platform limitation.
      </td>
    </tr>
    <tr>
      <td>Refund</td>
      <td>Customer</td>
      <td>Supplier</td>
      <td>Supplier</td>
      <td>Supplier</td>
    </tr>
    <tr>
      <td>Rewards</td>
      <td>Customer</td>
      <td>Supplier</td>
      <td>Supplier</td>
      <td>Supplier</td>
    </tr>
    <tr>
      <td>Chargeback</td>
      <td>Customer</td>
      <td>Supplier</td>
      <td>Supplier</td>
      <td>Supplier</td>
    </tr>
  </tbody>
</table>

## Options de mappage

Chaque client PME a sa propre préférence sur la façon dont une dépense individuelle doit être représentée dans son logiciel de comptabilité. Vous pouvez récupérer ces options en utilisant le endpoint [Mapping options](/sync-for-expenses-api#/operations/get-mapping-options).

La réponse peut ensuite être mise en cache et affichée au client lorsqu'il finalise ses dépenses. Vous verrez normalement le nom du fournisseur de dépenses connecté dans la propriété `expenseProvider`.

```json title="Sample mappingOptions response"
{
    "expenseProvider": "Partner Expense",
    "accounts": [
        {
            "id": "127f3b99-8dc2-4b7e-854c-91ef9bd2757b",
            "nominalCode": "300",
            "name": "Purchases",
            "currency": "GBP",
            "accountType": "Expense",
            "fullyQualifiedCategory": "Expense.DirectCosts",
            "isBankAccount": false,
            "validTransactionTypes": [
                "Payment",
                "Refund",
                "Reward",
                "Chargeback"
            ]
        }
        ...
    ],
    "trackingCategories": [
        {
            "id": "dba3d4da-f9ed-4eee-8e0b-452d11fdb1fa",
            "modifiedDate": "2022-08-03T12:04:40.067Z",
            "name": "Sales and Marketing",
            "hasChildren": false,
            "parentId": "DEPARTMENT"
        }
        ...
    ],
    "taxRates": [
        {
            "id": "INPUT2",
            "name": "20% (VAT on Expenses)",
            "code": "INPUT2",
            "effectiveTaxRate": 20,
            "totalTaxRate": 20
        }
        ...
    ]
}
```

### Comptes

Le tableau `accounts` inclut les [comptes du grand livre général](/sync-for-expenses-api#/schemas/Account) qui ont été lus depuis le logiciel de comptabilité du client PME.

- Le `name` est ce qu'ils ont étiqueté le compte dans le logiciel, vous pouvez donc l'afficher à votre utilisateur final.
- `validTransactionTypes` vous indique quels types de transactions sont acceptés par le compte. Cela évite les problèmes de validation, comme un client essayant accidentellement de rapprocher une dépense à un compte de revenus.

Vous pouvez également créer des comptes supplémentaires avec notre endpoint [Create account](/sync-for-expenses-api#/operations/create-account), par exemple si une entreprise a une nouvelle catégorie pour représenter les dépenses.

### Catégories de suivi

Les [catégories de suivi](/sync-for-expenses-api#/schemas/TrackingCategoryMappingInfo) sont utilisées pour surveiller des centres de coûts spécifiques et contrôler les budgets qui se situent en dehors du plan comptable standard. Vos clients peuvent utiliser des catégories de suivi pour regrouper et suivre les revenus et les coûts de départements spécifiques (par exemple, Ventes et marketing), de projets, d'emplacements ou de clients.

Lors de l'écriture d'un rapprochement de dépenses, vous pouvez inclure une catégorie de suivi pour catégoriser davantage cette dépense.

### Taux de taxe

Les [taux de taxe](/sync-for-expenses-api#/schemas/TaxRateMappingInfo) permettent à vos clients PME de suivre avec précision les taxes sur les achats et, selon la localité, leur permettent de récupérer la taxe.

Les systèmes comptables stockent généralement un ensemble de taxes et de taux associés dans le logiciel de comptabilité. Cela signifie que les utilisateurs n'ont pas à rechercher ou à se souvenir du taux pour chaque type de taxe. Par exemple, l'application de la taxe « UK sales VAT » aux postes d'une facture dans un logiciel de comptabilité ajoutera le taux de taxe correct de 20 %.

Dans certains cas, vos clients peuvent ne pas avoir besoin de suivre la taxe sur les dépenses. Nous recommandons d'attribuer un code de taxe par défaut pour 0 % du logiciel de comptabilité pour ces transactions.

### Actualiser les options de mappage

Les [paramètres de synchronisation](/expenses/getting-started#data-types) par défaut définis pour les types de données de la solution actualiseront les options de mappage quotidiennement, cependant, vous pouvez également actualiser les options manuellement en effectuant une requête au endpoint [Mapping options](/sync-for-expenses-api#/operations/get-mapping-options).

```http
POST https://api.codat.io/companies/{companyId}/data/all
```

---

## À lire ensuite

- [Apprenez comment créer des ensembles de données contenant des transactions de dépenses](/expenses/sync-process/expense-transactions)
