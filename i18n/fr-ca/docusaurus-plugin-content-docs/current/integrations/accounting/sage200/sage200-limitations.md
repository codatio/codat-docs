---
title: "Limitations de Sage 200 Standard"
slug: "sage200-limitations"
sidebar_label: Limitations
---

Détails des limitations de Sage 200 Standard et comment Codat les gère.

## Regroupement des taux de taxe pour les lignes

En raison d'une limitation de Sage 200 Standard, les lignes des factures, notes de crédit, comptes et notes de crédit de compte sont regroupées en lignes distinctes pour les taux de taxe :

- Une ligne `Goods Summary`
- Une ligne `Tax Summary - Standard rate` pour chaque code de taxe.

Les montants totaux et les montants de taxe totaux sont affichés pour chaque ligne.

### Exemple de facture

```
{
    "id": "93454",
    "invoiceNumber": "0000000126",
    "customerRef": {
      "id": "0001"
    },
    "issueDate": "2020-08-03T00:00:00",
    "dueDate": "2020-09-03T00:00:00",
    "sourceModifiedDate": "2020-08-03T14:34:24.117",
    "currency": "USD",
    "currencyRate": 0.6577216521967903183372796632,
    "lineItems": [
      {
        "description": "Tax Summary - Standard rate",
        "unitAmount": 0,
        "quantity": 0,
        "discountAmount": 0.00,
        "subTotal": 0,
        "taxAmount": 27.97536000,
        "totalAmount": 27.97536000,
        "taxRateRef": {
          "id": "1729"
        }
      },
      {
        "description": "Goods Summary",
        "unitAmount": 0,
        "quantity": 0,
        "discountAmount": 0.00,
        "subTotal": 139.88,
        "taxAmount": 0,
        "totalAmount": 139.88,
        "tracking": {
          "categoryRefs": [
            {
              "id": "__COST_CENTRES/01"
            },
            {
              "id": "__DEPARTMENTS/1"
            },
            {
              "id": "__COST_CENTRES/022"
            }
          ],
          "isBilledTo": "Unknown"
        }
      }
    ],
    "totalDiscount": 0.00,
    "subTotal": 139.88,
    "totalTaxAmount": 27.98,
    "totalAmount": 167.86,
    "amountDue": 167.86,
    "discountPercentage": 0.00,
    "status": "Submitted",
    "note": "0000000126"
  }
```

## Factures

Lorsque vous travaillez avec Sage 200 Standard, la remise en ligne est appliquée directement au montant final de la transaction. Cela signifie que le montant de la remise n'est pas stocké ou disponible en tant que valeur distincte dans Codat. Au lieu de cela, le système intègre la remise dans le calcul total sans la conserver en tant que champ distinct. Par conséquent, `lineItems.discountAmount` et `totalDiscount` seront retournés comme null.
