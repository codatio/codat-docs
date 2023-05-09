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

```http request title="Request URL"
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

```http request title="Request URL"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billPayments
```

</Tabitem>

<Tabitem value="Example Request Bodies">

<Tabs>

<Tabitem value="Xero" label="Xero">

Here is a sample payment for multiple Xero bills from the same supplier.

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

:::tip Batch Payments

In Xero you can make a batch payment which allows you to pay multiple invoices from multiple suppliers with a single payment.

To do this with Codat, you should leave the `supplierRef` parameter blank when creating the billPayment.

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

</Tabitem>

<Tabitem value="QuickBooks Online" label="QuickBooks Online">


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

<Tabitem value="NetSuite" label="NetSuite">

:::note

Note that if locations is set to mandatory in the companies Netsuite Account, the `reference` is required and should be an `id` from the [trackingCategories](/accounting-api#/operations/list-tracking-categories) prefixed with location.

:::

```json
{
  "supplierRef":{
    "id":"727",
    "supplierName":"Vendor -.B"
  },
  "totalAmount":2,
  "accountRef": {
    "id": "854"
  },
  "currency":"GBP",
  "currencyRate":1,
  "date":"2023-04-18T00:00:00",
  "lines":[
    {
      "amount":2,
      "links":[
        {
          "type":"Bill",
          "id":"288274",
          "amount":-1,
          "currencyRate":1
        },
        {
          "type":"Bill",
          "id":"287594",
          "amount":-1,
          "currencyRate":1
        }
      ]
    }
  ],
  "reference":"location-5"
}
```

</Tabitem>

<Tabitem value="Sage Intacct" label="Sage Intacct">

:::note

Sage Intacct uses a `paymentMethodRef`, the payment method's for a company can be retrieved from the [options api](accounting-api#/operations/get-create-update-bills-model)

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

</Tabitem>

<Tabitem value="MYOB" label="MYOB">

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

</Tabitem>

</Tabs>

</Tabitem>



</Tabs>


#### Using a bill credit note to pay a bill

If your company receives a credit note from their supplier, the Company could use this to offset the balance of any outstanding invoices from the same supplier. 

With the billPayment API, you can partially or fully offset the balance of an invoice by adding the credit note in the `lines` array.

1. The first step is to create a [`billCreditNote`](/accounting-api#/operations/create-bill-credit-note)
2. Once this is successfully created you can create a `billPayment` and include the `billCreditNote` and the `bill` to credit in the links array

##### Creating a Credit Note
<Tabs>

<Tabitem value="Request Url" label="Request Url">

```http request title="Request URL"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billCreditNotes
```

</Tabitem>

<Tabitem value="Example Request Bodies">

<Tabs>

<Tabitem value="Xero" label="Xero">


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
			"description": "Refund as agreed due to window break when guard absent",
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


</Tabitem>

<Tabitem value="QuickBooks Online" label="QuickBooks Online">

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

</Tabitem>

<Tabitem value="NetSuite" label="NetSuite">

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

</Tabitem>

<Tabitem value="Sage Intacct" label="Sage Intacct">

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

</Tabitem>

<Tabitem value="MYOB" label="MYOB">

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
      "description": "Credit note for incorrect bill",
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

</Tabitem>

</Tabs>

</Tabitem>

</Tabs>

Once the credit note has been created, you can offset the balance of the credit note against any outstanding invoices by creating a billPayment.

For some accounting platforms, you can also use a combination of a `billCreditNote` and partial payment to pay off the full balance of a `bill`.

##### Allocating a Credit note against a bill
<Tabs>

<Tabitem value="Request Url" label="Request Url">

```http request title="Request URL"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billPayments
```

</Tabitem>

<Tabitem value="Example Request Bodies">

<Tabs>

<Tabitem value="Xero" label="Xero">

:::info
With the Xero integration its only possible to fully allocate a `billCreditNote` to a `bill` using a `billPayment`, this means that if you wish to also use a partial payment for the bill, two separate transactions should be created.

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

</Tabitem>

<Tabitem value="QuickBooks Online" label="QuickBooks Online">

:::info
With the QuickBooks Online integration its only possible to fully allocate a `billCreditNote` to a `bill` using a `billPayment`, this means that if you wish to also use a partial payment for the bill, two separate transactions should be created.

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

</Tabitem>

<Tabitem value="NetSuite" label="NetSuite">

The example below shows a partial billPayment and billCredit note to pay the full balance of a bill.

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

</Tabitem>

<Tabitem value="Sage Intacct" label="Sage Intacct">

:::note

Sage Intacct uses a `paymentMethodRef`, the payment method's for a company can be retrieved from the [options api](accounting-api#/operations/get-create-update-bills-model)

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

</Tabitem>

<Tabitem value="MYOB" label="MYOB">

:::note

Allocating a `billCreditNote` with a `billPayment` is **coming soon** for myob.

:::


</Tabitem>

</Tabs>

</Tabitem>

</Tabs>

#### Refunding a bill payment

#### Making a bill Payment in Foreign Currencies






