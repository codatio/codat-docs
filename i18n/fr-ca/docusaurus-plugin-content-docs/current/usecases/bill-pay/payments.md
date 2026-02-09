---
title: Paiements
description: "Réconcilier les paiements avec le logiciel de comptabilité de la PME"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Lorsque l'utilisateur a terminé sa correspondance et effectue un paiement depuis votre application, celui-ci peut ensuite être réconcilié avec le logiciel de comptabilité de l'utilisateur.
Un paiement de facture fournisseur dans Codat représente généralement une affectation d'argent au sein de tout compte de comptes fournisseurs d'un client. Cela comprend, mais ne se limite pas strictement à :

- Un paiement effectué contre une facture fournisseur — par exemple, un paiement par carte de crédit, un paiement par chèque ou un paiement en espèces.
- Une affectation d'une note de crédit de fournisseur à une facture fournisseur ou peut-être un remboursement.
- Un paiement de facture fournisseur effectué directement sur un compte de comptes fournisseurs. Il peut s'agir d'un trop-perçu ou d'un prépaiement, ou d'un remboursement d'un paiement effectué directement sur un compte de comptes fournisseurs.

Selon les paiements de factures fournisseurs autorisés par le logiciel de comptabilité sous-jacent, certains de ces types peuvent être combinés.

## Payer une facture fournisseur avec un billPayment

Si le scénario est une entreprise effectuant un paiement pour régler une facture fournisseur en totalité, elle devrait avoir les propriétés suivantes :

- Un `totalAmount` indiquant le montant de la facture fournisseur qui a été payé. C'est **toujours positif**.
- Un tableau lines contenant un élément avec les propriétés suivantes :
  - Un amount égal au `totalAmount` ci-dessus.
  - Un tableau links contenant un élément avec les propriétés suivantes :
    - Un `type` indiquant le type de lien, dans ce cas une Bill.
    - Un `id` contenant l'ID de la facture fournisseur qui a été payée.
    - Un `amount` de **-**totalAmount (totalAmount négatif), indiquant que la totalité du montant payé est affectée à la facture fournisseur.

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="Request URL"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billPayments
```

</TabItem>

<TabItem value="Example Bill to pay" label="Example Bill to pay">

Exemple JSON d'une facture fournisseur impayée de Xero.

```json
{
  "id": "59978bef-af2f-4a7e-9728-4997597c0980",
  "reference": "RPT445-1",
  "supplierRef": {
    "id": "dec56ceb-65e9-43b3-ac98-7fe09eb37e31",
    "supplierName": "PowerDirect"
  },
  "purchaseOrderRefs": [],
  "issueDate": "2023-02-09T00:00:00",
  "dueDate": "2023-02-19T00:00:00",
  "currency": "GBP",
  "currencyRate": 1,
  "lineItems": [
    {
      "description": "Électricité mensuelle",
      "unitAmount": 129.38,
      "quantity": 1,
      "discountAmount": 0,
      "subTotal": 129.38,
      "taxAmount": 6.47,
      "totalAmount": 135.85,
      "discountPercentage": 0,
      "accountRef": {
        "id": "d50842c3-af67-4233-b8c9-df3180f5b7bd"
      },
      "taxRateRef": {
        "id": "RRINPUT",
        "name": "5% (VAT on Expenses)",
        "effectiveTaxRate": 5
      },
      "trackingCategoryRefs": [],
      "isDirectCost": false
    }
  ],
  "withholdingTax": [],
  "status": "Open",
  "subTotal": 129.38,
  "taxAmount": 6.47,
  "totalAmount": 135.85,
  "amountDue": 135.85,
  "modifiedDate": "2023-04-17T14:51:35Z",
  "sourceModifiedDate": "2021-01-03T21:56:20",
  "paymentAllocations": [],
  "metadata": {
    "isDeleted": false
  }
}
```

</TabItem>

<TabItem value="Example Bill Payment Xero" label="Example Bill Payment Xero">

Voici un exemple de paiement pour la facture fournisseur Xero. Notez que :

- le `supplierRef.id` doit être le même id que le `supplierRef.id` sur la facture fournisseur
- l'`accountRef.id` doit être le compte à partir duquel le paiement est effectué tel que sélectionné dans la [correspondance](/usecases/bill-pay/mapping.md)
- le `totalAmount` est le même que l'`amountDue` sur la facture fournisseur
- la `date` est la date à laquelle le paiement est effectué au fournisseur

```json
{
  "supplierRef": {
    "id": "dec56ceb-65e9-43b3-ac98-7fe09eb37e31"
  },
  "accountRef": {
    "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4"
  },
  "totalAmount": 135.85,
  "currency": "GBP",
  "currencyRate": 1,
  "date": "2023-04-17T00:00:00",
  "lines": [
    {
      "amount": 135.85,
      "links": [
        {
          "type": "Bill",
          "id": "59978bef-af2f-4a7e-9728-4997597c0980",
          "amount": -135.85,
          "currencyRate": 1
        }
      ]
    }
  ]
}
```

</TabItem>

</Tabs>

## Paiement de plusieurs factures fournisseurs

Dans certains cas, une entreprise peut effectuer un seul paiement à un fournisseur qui couvre plusieurs factures.

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="Request URL"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billPayments
```

</TabItem>

<TabItem value="Example request bodies">

<Tabs>

<TabItem value="Xero" label="Xero">

Voici un exemple de paiement pour plusieurs factures fournisseurs Xero du même fournisseur.

```json title="Bill Payment for same Supplier"
{
  "supplierRef": {
    "id": "dec56ceb-65e9-43b3-ac98-7fe09eb37e31"
  },
  "accountRef": {
    "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4"
  },
  "totalAmount": 244.45,
  "currency": "GBP",
  "currencyRate": 1,
  "date": "2023-04-17T00:00:00",
  "lines": [
    {
      "amount": 135.85,
      "links": [
        {
          "type": "Bill",
          "id": "59978bef-af2f-4a7e-9728-4997597c0980",
          "amount": -135.85,
          "currencyRate": 1
        }
      ]
    },
    {
      "amount": 108.6,
      "links": [
        {
          "type": "Bill",
          "id": "2175c381-d323-4e20-8c94-7680ea7f85d3",
          "amount": -108.6,
          "currencyRate": 1
        }
      ]
    }
  ]
}
```

:::tip Paiements groupés

Dans Xero, vous pouvez effectuer un paiement groupé qui vous permet de payer plusieurs factures de plusieurs fournisseurs avec un seul paiement.

Pour ce faire avec Codat, vous devez laisser le paramètre `supplierRef` vide lors de la création du billPayment.

:::

```json title="Batch Payment for multiple suppliers"
{
  "accountRef": {
    "id": "d96ffd74-2394-4666-81c4-eebb76e51e21"
  },
  "totalAmount": 6,
  "date": "2022-09-06T00:00:00",
  "lines": [
    {
      "amount": 1,
      "links": [
        {
          "type": "Bill",
          "id": "0394819c-b784-454d-991c-c4711b9aca12",
          "amount": -1
        }
      ]
    },
    {
      "amount": 2,
      "links": [
        {
          "type": "Bill",
          "id": "428e3e38-e8fb-4c56-91b5-dd09dc2e6505",
          "amount": -2
        }
      ]
    },
    {
      "amount": 3,
      "links": [
        {
          "type": "Bill",
          "id": "76129542-2b2f-482f-b2b3-e612d9c1ba08",
          "amount": -3
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="QuickBooks Online" label="QuickBooks Online">

```json
{
  "supplierRef": {
    "id": "77",
    "supplierName": "AtoB"
  },
  "accountRef": {
    "id": "122"
  },
  "totalAmount": 2500,
  "currency": "USD",
  "currencyRate": 1,
  "date": "2023-04-17T00:00:00",
  "lines": [
    {
      "amount": 2500,
      "links": [
        {
          "type": "Bill",
          "id": "302",
          "amount": -1200,
          "currencyRate": 1
        },
        {
          "type": "Bill",
          "id": "303",
          "amount": -1300,
          "currencyRate": 1
        }
      ]
    }
  ],
  "reference": "1"
}
```

</TabItem>

<TabItem value="NetSuite" label="NetSuite">

:::note

Notez que si les emplacements sont définis comme obligatoires dans le compte NetSuite de l'entreprise, la `reference` est requise et doit être un `id` des [trackingCategories](/accounting-api#/operations/list-tracking-categories) préfixé par location.

:::

```json
{
  "supplierRef": {
    "id": "727",
    "supplierName": "Vendor -.B"
  },
  "totalAmount": 2,
  "accountRef": {
    "id": "854"
  },
  "currency": "GBP",
  "currencyRate": 1,
  "date": "2023-04-18T00:00:00",
  "lines": [
    {
      "amount": 2,
      "links": [
        {
          "type": "Bill",
          "id": "288274",
          "amount": -1,
          "currencyRate": 1
        },
        {
          "type": "Bill",
          "id": "287594",
          "amount": -1,
          "currencyRate": 1
        }
      ]
    }
  ],
  "reference": "location-5"
}
```

</TabItem>

<TabItem value="Sage Intacct" label="Sage Intacct">

:::note

Sage Intacct utilise un `paymentMethodRef`, les méthodes de paiement d'une entreprise peuvent être récupérées à partir de l'[API options](/accounting-api#/operations/get-create-update-bills-model)

:::

```json
{
  "id": "26491",
  "supplierRef": {
    "id": "15",
    "supplierName": "HC Equipment Repair"
  },
  "accountRef": {
    "id": "84"
  },
  "totalAmount": 30000,
  "currency": "USD",
  "date": "2023-04-19T00:00:00",
  "note": "",
  "paymentMethodRef": {
    "id": "6"
  },
  "lines": [
    {
      "amount": 15000,
      "links": [
        {
          "type": "Bill",
          "id": "26492",
          "amount": -15000
        }
      ]
    },
    {
      "amount": 15000,
      "links": [
        {
          "type": "Bill",
          "id": "26493",
          "amount": -15000
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="MYOB" label="MYOB">

```json
{
  "supplierRef": {
    "id": "0749b9a9-4fd1-4d5e-ae5f-7de3887c933a"
  },
  "accountRef": {
    "id": "161904cc-c2be-4cd7-afbd-ccd304473216"
  },
  "totalAmount": 105,
  "currency": "AUD",
  "date": "2023-04-19T00:00:00",
  "note": "Payment; Sydney Coaches & Buses (YAHOO MAIL)",
  "lines": [
    {
      "amount": 5,
      "links": [
        {
          "type": "Bill",
          "id": "cd5029ae-5548-4bd0-ae9e-bb572d40349d",
          "amount": -5,
          "currencyRate": 1
        }
      ]
    },
    {
      "amount": 100,
      "links": [
        {
          "type": "Bill",
          "id": "edaff6be-43c2-4f1d-9511-11605ae310f0",
          "amount": -100,
          "currencyRate": 1
        }
      ]
    }
  ]
}
```

</TabItem>

</Tabs>

</TabItem>

</Tabs>

## Utiliser une note de crédit de facture fournisseur pour payer une facture fournisseur

Si une entreprise reçoit une note de crédit de son fournisseur, l'entreprise pourrait l'utiliser pour compenser le solde de toutes les factures impayées du même fournisseur.

Avec l'API billPayment, vous pouvez partiellement ou entièrement compenser le solde d'une facture en ajoutant la note de crédit dans le tableau `lines`.

1. La première étape consiste à créer un [`billCreditNote`](/accounting-api#/operations/create-bill-credit-note)
2. Une fois que cela est créé avec succès, vous pouvez créer un `billPayment` et inclure le `billCreditNote` et la `bill` à créditer dans le tableau links

### Création d'une note de crédit

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="Request URL"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billCreditNotes
```

</TabItem>

<TabItem value="Example request bodies">

<Tabs>

<TabItem value="Xero" label="Xero">

```json title="Credit Note Example"
{
  "billCreditNoteNumber": "JMY-1987",
  "supplierRef": {
    "id": "3a0d40a2-2698-4cf5-b7b2-30133c632ab6",
    "supplierName": "Swanston Security"
  },
  "withholdingTax": [],
  "totalAmount": 25.44,
  "totalDiscount": 0,
  "subTotal": 25.44,
  "totalTaxAmount": 4.24,
  "discountPercentage": 0,
  "remainingCredit": 0,
  "status": "Submitted",
  "issueDate": "2023-02-09T00:00:00",
  "currency": "GBP",
  "currencyRate": 1,
  "lineItems": [
    {
      "description": "Remboursement convenu suite à une bris de fenêtre en l'absence du garde",
      "unitAmount": 21.2,
      "quantity": 1,
      "discountAmount": 0,
      "subTotal": 21.2,
      "taxAmount": 4.24,
      "totalAmount": 25.44,
      "accountRef": {
        "id": "f96c9458-d724-47bf-8f74-a9d5726465ce"
      },
      "discountPercentage": 0,
      "taxRateRef": {
        "id": "INPUT2",
        "name": "20% (VAT on Expenses)",
        "effectiveTaxRate": 20
      },
      "trackingCategoryRefs": []
    }
  ]
}
```

</TabItem>

<TabItem value="QuickBooks Online" label="QuickBooks Online">

```json
{
  "billCreditNoteNumber": "309",
  "supplierRef": {
    "id": "87",
    "supplierName": "Ankunding Inc"
  },
  "withholdingTax": [],
  "totalAmount": 100,
  "totalDiscount": 0,
  "subTotal": 100,
  "totalTaxAmount": 0,
  "discountPercentage": 0,
  "remainingCredit": 100,
  "status": "Submitted",
  "issueDate": "2023-04-20T00:00:00",
  "currency": "GBP",
  "currencyRate": 1.242097,
  "lineItems": [
    {
      "description": "",
      "unitAmount": 100,
      "quantity": 1,
      "subTotal": 100,
      "taxAmount": 0,
      "totalAmount": 100,
      "accountRef": {
        "id": "7"
      },
      "taxRateRef": {
        "id": "NON",
        "name": "NON",
        "effectiveTaxRate": 0
      },
      "trackingCategoryRefs": [],
      "tracking": {
        "categoryRefs": [],
        "isBilledTo": "Unknown",
        "isRebilledTo": "NotApplicable"
      }
    }
  ]
}
```

</TabItem>

<TabItem value="NetSuite" label="NetSuite">

```json
{
  "billCreditNoteNumber": "VENDCRED1987",
  "supplierRef": {
    "id": "727",
    "supplierName": "Vendor -.B"
  },
  "withholdingTax": [],
  "totalAmount": 10,
  "totalDiscount": 0,
  "subTotal": 10,
  "totalTaxAmount": 0,
  "discountPercentage": 0,
  "status": "Submitted",
  "issueDate": "2023-04-20T00:00:00",
  "currency": "GBP",
  "currencyRate": 1,
  "lineItems": [
    {
      "description": "",
      "unitAmount": 10,
      "quantity": 1,
      "subTotal": 10,
      "totalAmount": 10,
      "accountRef": {
        "id": "714"
      },
      "trackingCategoryRefs": [
        {
          "id": "department-4",
          "name": "DP Department - incl children"
        }
      ],
      "tracking": {
        "categoryRefs": [
          {
            "id": "department-4",
            "name": "DP Department - incl children"
          }
        ],
        "isBilledTo": "Unknown",
        "isRebilledTo": "Unknown"
      }
    }
  ]
}
```

</TabItem>

<TabItem value="Sage Intacct" label="Sage Intacct">

```json title="Sage Intacct"
{
  "supplierRef": {
    "id": "3"
  },
  "withholdingTax": [],
  "totalAmount": 360,
  "totalDiscount": 0,
  "subTotal": 300,
  "totalTaxAmount": 60,
  "discountPercentage": 0,
  "status": "Submitted",
  "issueDate": "2021-09-24T00:00:00",
  "currency": "GBP",
  "currencyRate": 1,
  "lineItems": [
    {
      "description": "No Description Provided",
      "unitAmount": 300,
      "quantity": 1,
      "subTotal": 300,
      "taxAmount": 60,
      "totalAmount": 360,
      "accountRef": {
        "id": "197",
        "name": "Software and Licenses"
      },
      "taxRateRef": {
        "id": "81",
        "name": "UK Purchase Goods Standard Rate",
        "effectiveTaxRate": 20
      },
      "trackingCategoryRefs": [
        {
          "id": "LOCATION-15",
          "name": "United Kingdom"
        },
        {
          "id": "SUPPLIER-3",
          "name": "ADP"
        }
      ],
      "tracking": {
        "categoryRefs": [
          {
            "id": "LOCATION-15"
          },
          {
            "id": "SUPPLIER-3",
            "name": "ADP"
          }
        ],
        "isBilledTo": "Unknown",
        "isRebilledTo": "Unknown"
      }
    }
  ]
}
```

</TabItem>

<TabItem value="MYOB" label="MYOB">

```json
{
  "billCreditNoteNumber": "JMY0002",
  "supplierRef": {
    "id": "5c0664ca-6eb1-4085-9da4-37ef748bc65e",
    "supplierName": "Metropolitan Electricity"
  },
  "withholdingTax": [],
  "totalAmount": 900,
  "totalDiscount": 0,
  "subTotal": 1000,
  "totalTaxAmount": 100,
  "discountPercentage": 0,
  "status": "Submitted",
  "issueDate": "2023-04-20T00:00:00",
  "currency": "AUD",
  "lineItems": [
    {
      "description": "Note de crédit pour facture incorrecte",
      "unitAmount": 900,
      "quantity": 1,
      "subTotal": 900,
      "taxAmount": 100,
      "totalAmount": 900,
      "accountRef": {
        "id": "f04d046b-0137-4d95-8af7-ed9fef1a4ba3"
      },
      "taxRateRef": {
        "id": "ff083e95-de4e-4c56-87dd-32ad9cdac172",
        "name": "Capital Acquisitions",
        "effectiveTaxRate": 10
      },
      "trackingCategoryRefs": []
    }
  ]
}
```

</TabItem>

</Tabs>

</TabItem>

</Tabs>

Une fois la note de crédit créée, vous pouvez compenser le solde de la note de crédit contre toutes les factures impayées en créant un billPayment.

Pour certains logiciels de comptabilité, vous pouvez également utiliser une combinaison d'un `billCreditNote` et d'un paiement partiel pour régler le solde complet d'une `bill`.

##### Affectation d'une note de crédit contre une facture fournisseur

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="Request URL"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billPayments
```

</TabItem>

<TabItem value="Example request bodies">

<Tabs>

<TabItem value="Xero" label="Xero">

:::info
Avec l'intégration Xero, il n'est possible d'affecter entièrement qu'un `billCreditNote` à une `bill` en utilisant un `billPayment`, cela signifie que si vous souhaitez également utiliser un paiement partiel pour la facture fournisseur, deux transactions distinctes doivent être créées.

:::

```json
{
  "supplierRef": {
    "id": "3a0d40a2-2698-4cf5-b7b2-30133c632ab6"
  },
  "accountRef": {
    "id": "94b02f61-f95f-4873-b5b7-651ff9707325"
  },
  "totalAmount": 0,
  "currency": "GBP",
  "date": "2023-05-09T00:00:00",
  "lines": [
    {
      "amount": 45,
      "links": [
        {
          "type": "Bill",
          "id": "8e65df54-4bbd-41f3-b241-8da2588be341",
          "amount": -25.44
        },
        {
          "type": "CreditNote",
          "id": "ee8bec08-2be8-40ba-acd0-d53d5df11235",
          "amount": 25.44
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="QuickBooks Online" label="QuickBooks Online">

:::info
Avec l'intégration QuickBooks Online, il n'est possible d'affecter entièrement qu'un `billCreditNote` à une `bill` en utilisant un `billPayment`, cela signifie que si vous souhaitez également utiliser un paiement partiel pour la facture fournisseur, deux transactions distinctes doivent être créées.

:::

```json
{
  "supplierRef": {
    "id": "87"
  },
  "accountRef": {
    "id": "35"
  },
  "totalAmount": 0,
  "currency": "GBP",
  "currencyRate": 1,
  "date": "2023-05-09T00:00:00",
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Bill",
          "id": "328",
          "amount": -100
        },
        {
          "type": "CreditNote",
          "id": "308",
          "amount": 100
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="NetSuite" label="NetSuite">

L'exemple ci-dessous montre un paiement partiel de facture fournisseur et une note de crédit de facture fournisseur pour payer le solde complet d'une facture fournisseur.

```json
{
  "supplierRef": {
    "id": "727"
  },
  "accountRef": {
    "id": "854"
  },
  "totalAmount": 110,
  "currency": "GBP",
  "date": "2023-05-09T00:00:00",
  "lines": [
    {
      "amount": 110,
      "links": [
        {
          "type": "Bill",
          "id": "8",
          "amount": -120
        },
        {
          "type": "CreditNote",
          "id": "462792",
          "amount": 10
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="Sage Intacct" label="Sage Intacct">

:::note

Sage Intacct utilise un `paymentMethodRef`, les méthodes de paiement d'une entreprise peuvent être récupérées à partir de l'[API options](/accounting-api#/operations/get-create-update-bills-model)

:::

```json title="Payment of a bill with credit and partial payment"
{
  "supplierRef": {
    "id": "3"
  },
  "paymentMethodRef": {
    "id": "6",
    "name": "Cash"
  },
  "accountRef": {
    "id": "360"
  },
  "totalAmount": 45,
  "currency": "USD",
  "date": "2023-04-25T00:00:00",
  "lines": [
    {
      "amount": 45,
      "links": [
        {
          "type": "Bill",
          "id": "26572",
          "amount": -405
        },
        {
          "type": "CreditNote",
          "id": "26573",
          "amount": 360
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="MYOB" label="MYOB">

:::note

L'affectation d'un `billCreditNote` avec un `billPayment` est **à venir** pour myob.

:::

</TabItem>

</Tabs>

</TabItem>

</Tabs>
