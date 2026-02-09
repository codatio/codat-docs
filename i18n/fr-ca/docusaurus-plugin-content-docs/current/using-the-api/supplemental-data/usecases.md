---
title: "Utilisations courantes des données supplémentaires"
sidebar_label: "Exemples"
description: "Consultez les propriétés couramment utilisées par nos clients pour enrichir les données requises pour leurs cas d'utilisation"
---

Lorsqu'une intégration particulière contient une propriété qui n'est pas commune à d'autres plateformes, il peut arriver qu'elle ne fasse pas partie de nos données standard, mais qu'elle puisse être obtenue à l'aide de données supplémentaires pour supporter votre cas d'utilisation.

Par exemple, vous pouvez enrichir notre type de données `invoices` avec une `URL` de facture, un champ spécifique à Xero qui dirige l'utilisateur vers un document source pour une facture hébergée en dehors de Xero. Pour QBO, le type de données `invoices` peut être complété avec `SalesTermRef`, vous fournissant les conditions de vente associées à une facture.

Dans les sections ci-dessous, vous trouverez certaines propriétés spécifiques à une intégration couramment utilisées pour compléter les données standard, ainsi que des exemples de configuration requise pour les prendre en charge. Pour une liste complète des propriétés qui peuvent être utilisées dans les données supplémentaires, référez-vous à la documentation des intégrations elles-mêmes.

## Xero

### Schéma [Accounts](https://developer.xero.com/documentation/api/accounting/accounts)

| Exemple de propriété | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| `TaxType`            | Voir le taux de taxe par défaut associé au compte                     |
| `SystemAccount`      | Voir si le compte est un compte système et, si oui, de quel type     |

```json title = "Exemple de configuration"
{
  "supplementalDataConfig": {
    "client-keyname-for-accounts": {
      "dataSource": "/Accounts",
      "pullData": {
        "ClientNameForTaxType": "TaxType",
        "ClientNameForSystemAccount": "SystemAccount"
      }
    }
  }
}
```

### Schéma [Invoices](https://developer.xero.com/documentation/api/accounting/invoices)

| Exemple de propriété  | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `ExpectedPaymentDate` | Affiché sur la facture si la date de paiement prévue a été définie                        |
| `HasAttachments`      | Valeur booléenne pour indiquer si la facture a une pièce jointe                           |
| `SentToContact`       | Valeur booléenne pour indiquer si la facture approuvée a été envoyée au client           |
| `Reference`           | Afficher une référence externe supplémentaire pour la facture                              |

```json title = "Exemple de configuration"
{
  "supplementalDataConfig": {
    "client-keyname-for-xero-invoices": {
      "dataSource": "/Invoices",
      "pullData": {
        "ClientNameForExpectedPaymentDate": "ExpectedPaymentDate",
        "ClientNameForHasAttachments": "HasAttachments"
      }
    }
  }
}
```

### Schéma [Items](https://developer.xero.com/documentation/api/accounting/items)

| Exemple de propriété | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `QuantityOnHand`     | Affiche la quantité de l'article en stock                                                     |
| `TotalCostPool`      | Affiche la valeur de l'article en stock. Calculé en utilisant la comptabilité au coût moyen. |

```json title = "Exemple de configuration"
{
  "supplementalDataConfig": {
    "client-keyname-for-items": {
      "dataSource": "/Items",
      "pullData": {
        "ClientNameForQuantityOnHand": "QuantityOnHand",
        "ClientNameForTotalCostPool": "TotalCostPool"
      }
    }
  }
}
```

### Schéma [Contacts](https://developer.xero.com/documentation/api/accounting/contacts)

| Exemple de propriété | Description                                     |
| -------------------- | ----------------------------------------------- |
| `BankAccountDetails` | Retourne le numéro de compte bancaire du fournisseur |

```json title = "Exemple de configuration"
{
  "supplementalDataConfig": {
    "client-Keyname-For-Xero-suppliers": {
      "dataSource": "/Contacts",
      "pullData": {
        "ClientNameForBankAccounts": "BankAccountDetails"
      }
    }
  }
}
```

### Schéma [Tax rates](https://developer.xero.com/documentation/api/accounting/taxrates)

| Exemple de propriété    | Description                                                                     |
| ----------------------- | ------------------------------------------------------------------------------- |
| `CanApplyToAssets`      | Booléen pour décrire si le taux de taxe peut être utilisé pour les comptes d'actifs     |
| `CanApplyToEquity`      | Booléen pour décrire si le taux de taxe peut être utilisé pour les comptes de capitaux propres    |
| `CanApplyToExpenses`    | Booléen pour décrire si le taux de taxe peut être utilisé pour les comptes de dépenses   |
| `CanApplyToLiabilities` | Booléen pour décrire si le taux de taxe peut être utilisé pour les comptes de passif |
| `CanApplyToRevenue`     | Booléen pour décrire si le taux de taxe peut être utilisé pour les comptes de revenus   |

```json title = "Exemple de configuration"
{
  "supplementalDataConfig": {
    "client-keyname-for-tax-rates": {
      "dataSource": "/TaxRates",
      "pullData": {
        "ClientNameForCanApplyToLiabilities": "CanApplyToLiabilities",
        "ClientNameForCanApplyToAssets": "CanApplyToAssets",
        "ClientNameForCanApplyToEquity": "CanApplyToEquity",
        "ClientNameForCanApplyToExpenses": "CanApplyToExpenses",
        "ClientNameForCanApplyToRevenue": "CanApplyToRevenue"
      }
    }
  }
}
```

## QuickBooks Online

### Schéma [Customers](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer)

| Exemple de propriété | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `SalesTermRef`       | Référence aux conditions de vente associées à ce client                     |
| `ParentRef`          | Référence à un client qui est le parent immédiat de ce sous-client          |

```json title = "Exemple de configuration"
{
  "supplementalDataConfig": {
    "Client-keyname-for-QBO-customers": {
      "dataSource": "/Customer",
      "pullData": {
        "ClientNameForSalesTermRef": "SalesTermRef.value",
        "ClientNameForParentRef": "ParentRef.value"
      }
    }
  }
}
```

### Schéma [Invoices](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/invoice)

| Exemple de propriété | Description                                                 |
| -------------------- | ----------------------------------------------------------- |
| `SalesTermRef`       | Référence aux conditions de vente associées à cette facture |

```json title = "Exemple de configuration"
{
  "supplementalDataConfig": {
    "client-keyname-for-qbo-invoices": {
      "dataSource": "/Invoice",
      "pullData": {
        "salesTermRef": "SalesTermRef.value"
      }
    }
  }
}
```

---

## Lire la suite

- Expérimentez avec les endpoints de données supplémentaires dans notre [référence API](https://docs.codat.io/platform-api#/operations/configure-supplemental-data).
