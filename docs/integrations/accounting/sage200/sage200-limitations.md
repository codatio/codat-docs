---
title: "Sage 200 Standard limitations"
slug: "sage200-limitations"
sidebar_label: Limitations
---

Details of Sage 200 Standard limitations and how Codat handles these.

## Grouping of tax rates for line items

Due to a Sage 200 Standard limitation, line items on invoices, credit notes, bills, and bill credit notes are grouped into separate lines for tax rates:

- A `Goods Summary` line
- A `Tax Summary - Standard rate` for each tax code.

Total amounts and total tax amounts are shown for each line.

### Example invoice

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

## Invoices

When working with Sage 200 Standard, the inline discount is applied directly to the final transaction amount. This means that the discount amount is not stored or available as a separate value in Codat. Instead, the system incorporates the discount into the total calculation without retaining it as a distinct field. As a result, both `lineItems.discountAmount` and `totalDiscount` will be returned as null.
