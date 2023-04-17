---
title: Payments
description: "Reconcile payments to the SMB's accounting software"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

When the user has completed their mapping and makes a payment from your application, this can then be reconciled back to the users accounting platform. 
A bill payment in Codat usually represents an allocation of money within any customer accounts payable account. This includes, but is not strictly limited to:

- A payment made against a bill — for example, a credit card payment, cheque payment, or cash payment.
- An allocation of a supplier's credit note to a bill or perhaps a refund.
- A bill payment made directly to an accounts payable account. This could be an overpayment or a prepayment, or a refund of a payment made directly to an accounts payable account.

Depending on the bill payments which are allowed by the underlying accounting package, some of these types may be combined.

#### Paying a bill with a billPayment
If the scenario is a company making a payment to pay off a bill in full, then it should have the following properties:
- A `totalAmount` indicating the amount of the bill that was paid. This is **always positive**. 
- A lines array containing one element with the following properties:
  - An amount equal to the `totalAmount` above. 
  - A links array containing one element with the following properties:
    - A `type` indicating the type of link, in this case a Bill. 
    - An `id` containing the ID of the bill that was paid. 
    - An `amount` of **-**totalAmount (negative `totalAmount`), indicating that the entirety of the paid amount is allocated to the bill.

<Tabs>

<Tabitem value="Request URL" label="Request URL">

```http request
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billPayments
```

</Tabitem>

<Tabitem value="Example Bill to pay" label="Example Bill to pay">

Sample json of an outstanding bill from Xero.

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
      "description": "Monthly electricity",
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

</Tabitem>

<Tabitem value="Example Bill Payment Xero" label="Example Bill Payment Xero">

Here is a sample payment for the Xero bill
- the `supplierRef.id` should be the same id as the `supplierRef.id` on the bill
- the `accountRef.id` should be the account the payment is made from as selected in the [mapping](/usecases/billpay/mapping.md)
- the `totalAmount` is the same as the `amountDue` on the bill
- the `date` is the date that the payment is made to the supplier

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

</Tabitem>

</Tabs>


#### Payment of multiple bills
In some cases a company may make a single payment to a supplier that covers multiple invoices.

<Tabs>

<Tabitem value="Request URL" label="Request URL">

```http request
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billPayments
```

</Tabitem>

<Tabitem value="Example Bills to pay" label="Example Bills to pay">

Sample json of an outstanding bills from the same supplier in Xero.
```http request
GET https://api.codat.io/companies/{companyId}/data/bills?page=1&pageSize=100&query=status%3Dopen%26%26supplier.id%3D{supplierId}
```

```json
{
  "results": [
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
          "description": "Monthly electricity",
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
      "modifiedDate": "2023-04-17T15:11:39Z",
      "sourceModifiedDate": "2023-04-17T15:11:04",
      "paymentAllocations": [
        {
          "payment": {
            "id": "92439df9-b822-49a5-926b-fed116145221",
            "accountRef": {
              "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4"
            },
            "currency": "GBP",
            "currencyRate": 1,
            "paidOnDate": "2023-04-17T00:00:00",
            "totalAmount": 135.85
          },
          "allocation": {
            "currency": "GBP",
            "currencyRate": 1,
            "totalAmount": -135.85
          }
        }
      ],
      "metadata": {
        "isDeleted": false
      }
    },
    {
      "id": "2175c381-d323-4e20-8c94-7680ea7f85d3",
      "reference": "RPT445-1",
      "supplierRef": {
        "id": "dec56ceb-65e9-43b3-ac98-7fe09eb37e31",
        "supplierName": "PowerDirect"
      },
      "purchaseOrderRefs": [],
      "issueDate": "2023-04-09T00:00:00",
      "dueDate": "2023-04-19T00:00:00",
      "currency": "GBP",
      "currencyRate": 1,
      "lineItems": [
        {
          "description": "Monthly electricity",
          "unitAmount": 103.43,
          "quantity": 1,
          "discountAmount": 0,
          "subTotal": 103.43,
          "taxAmount": 5.17,
          "totalAmount": 108.6,
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
      "subTotal": 103.43,
      "taxAmount": 5.17,
      "totalAmount": 108.6,
      "amountDue": 108.6,
      "modifiedDate": "2023-04-17T14:51:35Z",
      "sourceModifiedDate": "2011-04-04T00:19:05",
      "paymentAllocations": [],
      "metadata": {
        "isDeleted": false
      }
    }
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 2,
  "_links": {
    "current": {
      "href": "/companies/89668cc6-ad0d-40c6-bfaf-d32d731ed0c7/data/bills?page=1&pageSize=100&query=status%3Dopen%26%26supplier.id%3Ddec56ceb-65e9-43b3-ac98-7fe09eb37e31"
    },
    "self": {
      "href": "/companies/89668cc6-ad0d-40c6-bfaf-d32d731ed0c7/data/bills"
    }
  }
}
```

</Tabitem>

<Tabitem value="Example Bill Payment" label="Example Bill Payment">

Here is a sample payment for the Xero bills

```json
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
      "amount": 244.45,
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

and here is a similar example for paying multiple bills from the same supplier in QuickBooks Online

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

</Tabitem>

</Tabs>

#### Using a bill credit note to pay a bill

#### Refunding a bill payment

#### Making a bill Payment in Foreign Currencies






