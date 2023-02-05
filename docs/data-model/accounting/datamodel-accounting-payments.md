---
title: "Payments"
description: "Includes all accounts receivable transaction data"
createdAt: "2019-02-20T13:11:25.349Z"
updatedAt: "2022-12-02T12:27:59.097Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Payments" target="_blank">Payments</a> endpoints in Swagger.

View the coverage for payments in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments" target="_blank">Data coverage explorer</a>.

## Overview

Payments include all accounts receivable transaction data. This includes [invoices](https://docs.codat.io/docs/datamodel-accounting-invoices) and [credit notes](https://docs.codat.io/docs/datamodel-accounting-creditnotes).

A payment in Codat usually represents an allocation of money within any customer accounts receivable account. This includes, but is not strictly limited to:

- A payment made against an invoice, like a credit card, cheque, or cash payment.
- An allocation of a customer's credit note, either to an invoice or maybe a refund.
- A payment made directly to that accounts receivable account. This might be an overpayment or a prepayment. It might also be the refund of a payment made directly to an accounts receivable account.

Depending on the payments allowed by the underlying accounting package, some payment types may be combined. Please see the [Example data](#section-example-data) below for more details.

In Codat, a payment contains details of:

- When the payment was recorded in the accounting system.
- How much it is for and in what currency that amount is in.
- Who the payment was _paid by_ – the _customer_.
- The payment method used.
- The breakdown of the types of payments – the _line items_.

Payments is a child data type of [account transactions](https://docs.codat.io/docs/datamodel-accounting-account-transactions).

:::note Payments or bill payments?
In Codat, payments represent accounts receivable only. For accounts payable, see [bill payments](https://docs.codat.io/docs/datamodel-accounting-billpayments). These include [bills](https://docs.codat.io/docs/datamodel-accounting-bills) and credit notes against bills.
:::

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Identifier for the payment, unique to the [company](https://docs.codat.io/docs/datamodel-accounting-company) in the accounting platform.",
"1-0": "**customerRef** ",
"1-1": "[_customerRef_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-accountRef)",
"1-2": "Customer the payment is recorded against in the accounting platform.",
"2-0": "**accountRef**",
"2-1": "[_accountRef_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#accountref)",
"2-2": "Account the payment is recorded against in the accounting platform.",
"3-0": "**paymentMethodRef**",
"3-1": "See [reference types](https://docs.codat.io/docs/datamodel-accounting-referencetypes)",
"3-2": "The [Payment Method](https://docs.codat.io/docs/datamodel-accounting-paymentmethods) to which the payment is linked in the accounting platform.",
"4-0": "**totalAmount** ",
"4-1": "_decimal_",
"4-2": "Amount of the payment in the payment currency. This value should never change and represents the amount of money paid into the customer's account.",
"5-0": "**currency** ",
"5-1": "_string_  
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"5-2": "ISO currency code recorded for the payment in the accounting platform.",
"6-0": "**currencyRate** ",
"6-1": "_decimal_  
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"6-2": "Rate to convert the total amount of the payment into the base currency for the [company](https://docs.codat.io/docs/datamodel-accounting-company) at the time of the payment.",
"7-0": "**date** ",
"7-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"7-2": "Date the payment was recorded in the accounting software.",
"8-0": "**note** ",
"8-1": "_string_",
"8-2": "Any additional information associated with the payment.",
"9-0": "**lines** ",
"9-1": "",
"9-2": "An array of [PaymentLines](#section-payment-lines).",
"10-0": "**modifiedDate**",
"10-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"10-2": "Date the record was last updated in the Codat system.",
"11-0": "**sourceModifiedDate** ",
"11-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"11-2": "Date the record was last changed in the accounting system.",
"12-0": "**reference** ",
"12-1": "_string_",
"12-2": "Friendly reference for the payment."
},
"cols": 3,
"rows": 13,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Customer reference

| Field           | Type     | Description                                                                                         |
| :-------------- | :------- | :-------------------------------------------------------------------------------------------------- |
| **id**          | _string_ | Unique identifier for the customer that the payment is recorded against in the accounting platform. |
| **companyName** | _string_ | Name of the customer that the payment is recorded against in the accounting platform.               |

## Payment lines

A payment line is an allocation of the portion of the payment. The sum of the amount on the lines should be equal to the total Amount.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**amount**",
"0-1": "_decimal_",
"0-2": "Amount in the payment currency.",
"1-0": "**links**",
"1-1": "",
"1-2": "See [Payment line links](#section-payment-links).",
"2-0": "**allocatedOnDate**",
"2-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"2-2": "The date the payment was allocated"
},
"cols": 3,
"rows": 3,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Payment line links

The allocations of the payment. The sum of amount in links plus the line amount must be equal to zero.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type** ",
"0-1": "_string_",
"0-2": "Types of payment line links, either:  
_ `Unknown`  
_ `Unlinked` - Not used  
_ `Invoice` - ID refers to the invoice  
_ `CreditNote` - ID refers to the credit note  
_ `Refund` - ID refers to the sibling payment  
_ `Payment` - ID refers to the sibling payment  
_ `PaymentOnAccount` - ID refers to the customer  
_ `Other` - ID refers to the customer  
_ `Manual Journal`  
_ `Discount` - ID refers to the payment",
"1-0": "**id** ",
"1-1": "_string_",
"1-2": "Unique identifier of the transaction represented by the link.",
"2-0": "**amount** ",
"2-1": "_decimal_",
"2-2": "Amount by which the balance of the linked entity is altered, in the currency of the linked entity.  
_ A negative link amount \\\_reduces_ the outstanding amount on the accounts receivable account.  
_ A positive link amount \\\_increases_ the outstanding amount on the accounts receivable account.",
"3-0": "**currencyRate** ",
"3-1": "_decimal_",
"3-2": "Calculated as the amount of the payment allocated in the currency of the payment divided by the amount of the linked entity in the currency of the entity. When payment currencies and linked entity currencies are the same, the **currencyRate** is `1`."
},
"cols": 3,
"rows": 4,
"align": [
"left",
"left",
"left"
]
}
[/block]

:::caution Requirements for reference fields
The [customer reference](#customer-reference) fields are only populated if the corresponding data type has been synchronised. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the customers data type for [**customerRef**](#customer-reference).
:::

## Payment types

## Payment of an invoice

A payment paying a single invoice has one entry in its `lines` array. This **line** has the following properties:

- An _amount_ that indicates the amount of the invoice that was paid. This is always positive.
- A **links** array containing one element with the following properties:
  - A **type** that indicates the type of **link**, in this case an `Invoice`.
  - An **id** that contains the ID of the invoice that was paid.
  - An **amount** for the link. The sum of the **line.amount** and the **links.amount** must equal `0`.

The **amount** field on the **line** equals the **totalAmount** on the payment.

## Payment of multiple invoices

A single payment can pay multiple invoices. This can be represented in one of two formats depending on how the customer keeps their books:

- The payment has multiple entries in its **lines** array, one for each invoice that is paid. Each line follows the example and rules described in [Payment of an invoice](#payment-of-an-invoice).
- The payment has a line with multiple links to each invoice. This occurs when the proportion of the original payment allocated to each invoice is not available.

Each **line** has the same properties as those described in [Payment of an invoice](#payment-of-an-invoice), with the **amount** indicating how much of the payment was allocated to the invoice. The sum of line amounts equals the **totalAmount** on the payment.

## Payments and refunds on account

A payment on account, that is a payment that doesn’t pay a specific invoice, has one entry in its lines array. The **line** has the following properties:

- A **totalAmount** that indicates the amount paid by a customer or refunded to them by a company. A payment to the customer is always negative. A refund is always positive.
- A **links** array containing one element with the following properties:
- A **type** that indicates the type of link. For a payment this is `PaymentOnAccount`. For a refund this is `Refund`.
- The **id** containing the ID of the customer.
- The **amount** for the link is `0` – the **totalAmount** _or_ the amount of the payment or refund.

It is possible to have a payment that is part _on account_ and part _allocated_ to an invoice. Each line should follow the examples above.

## Using a credit note to pay an invoice

The payment of an invoice using a credit note has one entry in its **lines** array. This **line** has the following properties:

- An **amount** that indicates the amount of money moved, which in this case is `0`, as the credit note and invoice allocation must balance each other.
- A **links** array containing two elements:
  - The first **link** has:
    - A **type** that indicates the type of **link**, in this case an `Invoice`.
    - An **id** that contains the ID of the invoice that was paid.
  - The second **link** has:
    - A **type** that indicates the type of **link**, in this case a `CreditNote`.
    - An **id** that contains the ID of the credit note used by this payment.

The **amount** field on the **line** equals the **totalAmount** on the payment.

## Refunding a credit note

A payment refunding a credit note has one entry in its **lines** array. This **line** has the following properties:

- An **amount** that indicates the amount of the credit note that was refunded. This is always negative for a refund.
- A **links** array that contains one element with the following properties:
  - A **type** that indicates the type of **link**, in this case a `CreditNote`.
  - An **id** that contains the ID of the credit note that was refunded.

The **totalAmount** field on the payment equals the **amount** field of the **line**. These are both negative, as this is money leaving accounts receivable.

## Refunding a payment

If a payment is refunded, for example, if a customer overpaid an invoice and the overpayment is returned to the customer, there are two payment records:

- One for the incoming over payment.
- Another for the outgoing refund.

The payment issuing the refund has a negative **totalAmount**. This payment also has one entry in its lines array with the following properties:

- An **amount** that indicates the amount that was refunded. This is always negative.
- A **links** array that contains one element with the following properties:
  - A **type** that indicates the type of **link**, in this case a `Payment`.
  - An **id** that contains the ID of the payment that was refunded.

The **amount** field on the **line** equals the **totalAmount** on the payment and is negative, as this is money leaving accounts receivable.

The payment that was refunded has a line where the **amount** is positive and the type of the link is `Refund`. This payment may have several entries in its **lines** array if it was used to partly pay an invoice.

For example: A £1,050 payment on a £1,000 invoice with a refund of £50 has two lines:

- One for £1,000 linked to the invoice that was paid.
- Another for £50 linked to the payment that refunded the overpayment with a** type** of `Refund` and an ID that corresponds to the payment.

The **line** linked to the payment has the following properties:

- An **amount** that indicates the amount that was refunded. This is positive as its money that was added to accounts receivable. It's balanced out by the negative amount of the refund.
- A **links** array containing one element with the following properties:
  - A **type** that indicates the type of **link**, in this case a `Refund`.
  - An **id** that contains the ID of the payment that refunded this line.

:::note Support for linked payments
Not all accounting packages support linking payments in this way. In some platforms, you may see a payment on account and a refund on account.
:::

## Foreign currencies

There are two types of currency rate that are included in the payments data type:

Payment currency rate:

- Base currency of the accounts receivable account.
- Foreign currency of the payment.

Payment line link currency rate:

- Base currency of the item the link represents.
- Foreign currency of the payment.

These two rates allow the calculation of currency loss or gain for any of the transactions affected by the payment lines. The second rate is used when a payment is applied to an item in a currency that doesn't match either:

- The base currency for the accounts receivable account.
- The currency of the item.

```json Currency rate example
{
    "id": "123",
    "note": ""
    "totalAmount": 99.99,
    "currency": "GBP",
    "lines": [
        {
            "amount": 99.99,
            "links": [
                {
                    "type": "Invoice",
                    "id": "178",
                    "amount": -50,
                    "currencyRate":  1.9998,
                }
            ]
        }
    ]
}
```

## Example data

:::note Object properties
For the sake of brevity, the examples here may omit properties from objects. For the full object definition, see [Payments](https://api.codat.io/swagger/index.html#/Payments).
:::

## Simple examples

```json Payment for invoice
{
  "totalAmount": 1000,
  "lines": [
    {
      "amount": 1000,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        }
      ]
    }
  ]
}
```

```json Allocation of credit note
{
  "totalAmount": 0,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        },
        {
          "type": "CreditNote",
          "id": "y",
          "amount": 1000
        }
      ]
    }
  ]
}
```

```json Payment of invoice and payment on account
{
  "totalAmount": 2000,
  "lines": [
    {
      "amount": 1000,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        }
      ]
    },
    {
      "amount": 1000,
      "links": [
        {
          "type": "PaymentOnAccount",
          "id": "y",
          "amount": -1000
        }
      ]
    }
  ]
}
```

```json Refund of credit note
{
  "totalAmount": -1000,
  "lines": [
    {
      "amount": -1000,
      "links": [
        {
          "type": "CreditNote",
          "id": "y",
          "amount": 1000
        }
      ]
    }
  ]
}
```

```json Refund on accounts receivable account
{
  "totalAmount": -1000,
  "lines": [
    {
      "amount": -1000,
      "links": [
        {
          "type": "PaymentOnAccount",
          "id": "y",
          "amount": 1000
        }
      ]
    }
  ]
}
```

```json Linked refund on accounts receivable account
{
    "id" : "payment-001",
    "totalAmount": 1000,
    "lines": [
        {
            "amount" : 1000,
            "links" : [
                {
                    "type" : "Refund",
                    "id" : "refund-001",
                    "amount" : -1000
                }
            ]
        }
    ]
}
{
    "id" : "refund-001",
    "totalAmount": -1000,
    "lines": [
        {
            "amount" : -1000,
            "links" : [
                {
                    "type" : "Payment",
                    "id" : "payment-001",
                    "amount" : 1000
                }
            ]
        }
    ]
}
```

```json Using a credit note and cash to pay an invoice
{
  "totalAmount": 250,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -750
        },
        {
          "type": "CreditNote",
          "id": "y",
          "amount": 750
        }
      ]
    },
    {
      "amount": 250,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -250
        }
      ]
    }
  ]
}
```

## Complex examples

```json Use two credit notes and 1000 in to "bank" (cash, cheque etc.) to pay invoice
{
  "totalAmount": 1000,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        },
        {
          "type": "CreditNote",
          "id": "y",
          "amount": 1000
        }
      ]
    },
    {
      "amount": 0,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        },
        {
          "type": "CreditNote",
          "id": "z",
          "amount": 1000
        }
      ]
    },
    {
      "amount": 1000,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        }
      ]
    }
  ]
}
```

```json Pay an invoice with two credit notes and cash, with 1000 left "on account"
{
  "totalAmount": 2000,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        },
        {
          "type": "CreditNote",
          "id": "y",
          "amount": 1000
        }
      ]
    },
    {
      "amount": 0,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        },
        {
          "type": "CreditNote",
          "id": "z",
          "amount": 1000
        }
      ]
    },
    {
      "amount": 1000,
      "links": [
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        }
      ]
    },
    {
      "amount": 1000,
      "links": [
        {
          "type": "PaymentOnAccount",
          "id": "customer-001",
          "amount": -1000
        }
      ]
    }
  ]
}
```

```json Two credit notes pay two invoices with no allocation amount specified
{
  "totalAmount": 0,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Invoice",
          "id": "w",
          "amount": -1000
        },
        {
          "type": "Invoice",
          "id": "x",
          "amount": -1000
        },
        {
          "type": "CreditNote",
          "id": "y",
          "amount": 1000
        },
        {
          "type": "CreditNote",
          "id": "z",
          "amount": 1000
        }
      ]
    }
  ]
}
```

```json Two credit notes and cash pay three invoices with no allocation amount specified, and refund cash
{
    "totalAmount": 2000,
    "lines": [
        {
            "amount" : 1000,
            "links" : [
                {
                    "type" : "Invoice",
                    "id" : "w",
                    "amount" : -1000
                },
                {
                    "type" : "Invoice",
                    "id" : "x",
                    "amount" : -1000
                },
                {
                    "type" : "Invoice",
                    "id" : "u",
                    "amount" : -1000
                },
                {
                    "type" : "CreditNote",
                    "id" : "y",
                    "amount" : 1000
                },
                {
                    "type" : "CreditNote",
                    "id" : "z",
                    "amount" : 1000
                }
            ]
        },
        {
            "amount" : 1000,
            "links" : [
                {
                    "type" : "Refund",
                    "id" : "refund-001",
                    "amount" : -1000
                }
            ]
        }
    ]
}
{
    "id" : "refund-001",
    "totalAmount": -1000,
    "lines": [
        {
            "amount" : -1000,
            "links" : [
                {
                    "type" : "Payment",
                    "id" : "payment-001",
                    "amount" : 1000
                }
            ]
        }
    ]
}
```

In this example, a payment on account is used to pay the same invoice in January and again in February.

```json January
{
  "id": "001",
  "totalAmount": 5000,
  "date": "1901-01-01",
  "lines": [
    {
      "amount": 1000,
      "links": [
        {
          "type": "Invoice",
          "id": "Invoice-x",
          "amount": -1000
        }
      ]
    },
    {
      "amount": 4000,
      "links": [
        {
          "type": "PaymentOnAccount",
          "id": "PaymentOnAccount-y",
          "amount": -4000
        }
      ]
    }
  ]
}
```

```json February
{
  "id": "001",
  "totalAmount": 5000,
  "date": "1901-02-01",
  "lines": [
    {
      "amount": 1000,
      "links": [
        {
          "type": "Invoice",
          "id": "Invoice-x",
          "amount": -1000
        }
      ]
    },
    {
      "amount": 1000,
      "links": [
        {
          "type": "Invoice",
          "id": "Invoice-y",
          "amount": -1000
        }
      ]
    },
    {
      "amount": 3000,
      "links": [
        {
          "type": "PaymentOnAccount",
          "id": "PaymentOnAccount-y",
          "amount": -3000
        }
      ]
    }
  ]
}
```

```json Two credit notes and some cash pay two invoices with no allocations specified
{
  "totalAmount": 500,
  "lines": [
    {
      "amount": 500,
      "links": [
        {
          "type": "Invoice",
          "id": "a",
          "amount": -1000
        },
        {
          "type": "Invoice",
          "id": "b",
          "amount": -1000
        },
        {
          "type": "CreditNote",
          "id": "y",
          "amount": 750
        },
        {
          "type": "CreditNote",
          "id": "z",
          "amount": 750
        }
      ]
    }
  ]
}
```
