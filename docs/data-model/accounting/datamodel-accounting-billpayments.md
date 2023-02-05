---
title: "Bill payments"
description: "All accounts payable transaction data, and it includes bills and credit notes against bills"
createdAt: "2019-02-20T13:11:59.646Z"
updatedAt: "2022-11-29T09:16:08.737Z"
---

:::note Bill payments or payments?

In Codat, bill payments represent accounts payable only. For accounts receivable, see [payments](https://docs.codat.io/docs/datamodel-accounting-payments), which includes [invoices](https://docs.codat.io/docs/datamodel-accounting-invoices) and [credit notes](https://docs.codat.io/docs/datamodel-accounting-creditnotes).
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/BillPayments" target="_blank">Bill Payments</a> endpoints in Swagger.

View the coverage for bill payments in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments" target="_blank">Data coverage explorer</a>.

## Overview

Bill payments include all accounts payable transaction data. This includes [bills](https://docs.codat.io/docs/datamodel-accounting-bills) and [credit notes against bills](https://docs.codat.io/docs/datamodel-accounting-billcreditnotes).

A bill payment in Codat usually represents an allocation of money within any customer accounts payable account. This includes but is not strictly limited to:

- A payment made against a bill—for example, a credit card payment, cheque payment, or cash payment.
- An allocation of a supplier's credit note, to a bill or perhaps a refund.
- A bill payment made directly to an accounts payable account. This could be an overpayment or a prepayment, or a refund of a payment made directly to an accounts payable account.

Depending on the bill payments which are allowed by the underlying accounting package, some of these types may be combined. Please see the [Example data](#example-data) section for samples of what these cases look like.

In Codat, a bill payment contains details of:

- When the bill payment was recorded in the accounting system.
- How much it is for and in the currency.
- Who the payment has been paid to, the _supplier_.
- The types of bill payments, the _line items_.

Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's _expenses_. You can find these types of transactions in our [Direct costs](https://docs.codat.io/docs/datamodel-accounting-directcosts) data model.

Bill payments is a child data type of [account transactions](https://docs.codat.io/docs/datamodel-accounting-account-transactions).

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Identifier for the bill payment, unique for the [company](https://docs.codat.io/docs/datamodel-accounting-company) in the accounting platform.",
"1-0": "**supplierRef** ",
"1-1": "See [reference types](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-supplierref)",
"1-2": "[Supplier](#supplier-reference) against which the payment is recorded in the accounting platform.",
"2-0": "**accountRef** ",
"2-1": "See [reference types](https://docs.codat.io/docs/datamodel-accounting-referencetypes)",
"2-2": "[Account](https://docs.codat.io/docs/datamodel-accounting-chartofaccounts) the payment is linked to in the accounting platform.",
"3-0": "**totalAmount** ",
"3-1": "_decimal_",
"3-2": "Amount of the payment in the payment currency. This value never changes and represents the amount of money that is paid into the supplier's account.",
"4-0": "**currency** ",
"4-1": "_string_  
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"4-2": "ISO currency code in which the bill payment is recorded in the accounting platform.",
"5-0": "**currencyRate** ",
"5-1": "_decimal_  
see [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"5-2": "Rate to convert the total amount of the bill payment into the base currency for the [company](https://docs.codat.io/docs/datamodel-accounting-company), at the time of the payment.",
"6-0": "**date** ",
"6-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"6-2": "Date the bill payment was recorded in the accounting software.",
"7-0": "**note** ",
"7-1": "_string_",
"7-2": "Additional information associated with the payment.",
"8-0": "**paymentMethodRef**",
"8-1": "See [reference types](https://docs.codat.io/docs/datamodel-accounting-referencetypes)",
"8-2": "The [Payment Method](https://docs.codat.io/docs/datamodel-accounting-paymentmethods) to which the payment is linked in the accounting platform.",
"9-0": "**lines** ",
"9-1": "",
"9-2": "An array of [BillPaymentLines](#section-lines).",
"10-0": "**modifiedDate** ",
"10-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"10-2": "Date the record was last updated in the Codat system.",
"11-0": "**sourceModifiedDate** ",
"11-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"11-2": "Date the record was last changed in the accounting system.",
"12-0": "**reference**",
"12-1": "_string_",
"12-2": "Additional information associated with the payment."
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

### Supplier reference

| Field            | Type     | Description                                                                                    |
| :--------------- | :------- | :--------------------------------------------------------------------------------------------- |
| **id**           | _string_ | Unique identifier for the supplier the payment is recorded against in the accounting platform. |
| **supplierName** | _string_ | Name of the supplier the payment is recorded against in the accounting platform.               |

### Lines

A bill payment line is an allocation of the portion of the bill payment. The sum of the line amounts should be equal to the total amount.

| Field               | Type      | Description                                                                      |
| :------------------ | :-------- | :------------------------------------------------------------------------------- |
| **amount**          | _decimal_ | Amount in the bill payment currency.                                             |
| **links**           |           | See [BillPaymentLineLink](#section-links).                                       |
| **allocatedOnDate** | _date_    | "AllocatedOnDate must be specified and be later than the issue date of the bill" |

### Links

The allocations of the bill payment. The sum of the amount in links plus the line amount must be equal to zero.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type** ",
"0-1": "_string_",
"0-2": "Types of links to bill payment lines, either:

- `Unlinked` - Not used

- `Bill` - ID refers to the bill that was paid

- `CreditNote` - ID refers to the bill credit note used for payment

- `Refund` - ID refers to the sibling payment

- `BillPayment` - ID refers to the sibling payment

- `PaymentOnAccount` - ID refers to the supplier

- `Other` - Not currently supported by Codat

- `Discount` - ID refers to the bill payment",
  "1-0": "**id** ",
  "1-1": "_string_",
  "1-2": "Unique identifier of the transaction represented by the link.",
  "2-0": "**amount** ",
  "2-1": "_decimal_",
  "2-2": "Amount by which the balance of the linked entity is altered, in the currency of the linked entity.
- A negative link amount _reduces_ the outstanding amount on the accounts payable account.

- A positive link amount _increases_ the outstanding amount on the accounts payable account.",
  "3-0": "**currencyRate** ",
  "3-1": "_decimal_",
  "3-2": "Calculated as the amount of the bill payment allocated in the currency of the bill payment divided by the amount of the linked entity in the currency of the entity. When bill payment currencies and linked entity currencies are always the same, the **currencyRate** is `1`."
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

The [supplier reference](#supplier-reference) fields are only populated if the corresponding data type has been synchronised. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the suppliers data type for [**supplierRef**](#supplier-reference).
:::

## Bill payment types

## Payment of a bill

A payment paying a single bill should have the following properties:

- A `totalAmount` indicating the amount of the bill that was paid. This is always positive.
- A `lines` array containing one element with the following properties:
  - An `amount` equal to the `totalAmount` above.
  - A `links` array containing one element with the following properties:
    - A `type` indicating the type of link, in this case a `Bill`.
    - An `id` containing the ID of the bill that was paid.
    - An amount of `-totalAmount` (negative `totalAmount`), indicating that the entirety of the paid amount is allocated to the bill.

## Payment of multiple bills

It is possible for one payment to pay multiple bills. This can be represented using two possible formats, depending on how the supplier keeps their books:

1. The payment has multiple entries in its **lines** array, one for each bill that is paid. Each line will follow the above example for paying a bill, and the rules detailed in the data model.
2. The payment has a line with multiple links to each bill. This occurs when the proportion of the original payment allocated to each bill is not available.

Each line is the same as those described above, with the **amount** indicating how much of the payment is allocated to the bill. The **amount** on the lines sum to the **totalAmount** on the payment.

:::caution Pushing batch payments to Xero

When pushing a single bill payment to Xero to pay multiple bills, only the first format is supported—multiple entries in the payment **lines** array.
:::

## Payments and refunds on account

A payment on account, that is a payment that doesn’t pay a specific bill, has one entry in its lines array.

The line has the following properties:

- A **totalAmount** indicating the amount paid by a supplier or refunded to them by a company. A payment to the supplier is always negative. A refund is always positive.
- A **links** array containing one element with the following properties:
  - A **type** indicating the type of link. For a payment this is `PaymentOnAccount`. For a refund this is `Refund`.
  - The **id** containing the ID of the supplier.
  - An amount for the link is `0` **totalAmount** or the amount of the payment or refund.

It is possible to have a payment that is part on account and part allocated to a bill. Each line should follow the examples above.

## Using a credit note to pay a bill

The payment of a bill using a credit note has one entry in its `lines` array. This **line** has the following properties:

- An **amount** indicating the amount of money moved, which in this case is `0`, as the credit note and bill allocation must balance each other.
- A **links** array containing two elements:
  - The first link has:
    - A **type** indicating the type of link, in this case a `Bill`.
    - An **id** containing the ID of the bill that was paid.
  - The second link has:
    - A **type** indicating the type of link, in this case a `CreditNote`.
    - An **id** containing the ID of the credit note used by this payment.

The **amount** field on the **line** equals the **totalAmount** on the payment.

## Refunding a credit note

A bill payment refunding a credit note has one entry in its **lines** array. This line has the following properties:

- An **amount** indicating the amount of the credit note that was refunded. This is always negative, indicating that it is a refund.
- A **links** array containing one element with the following properties:
  - A **type** indicating the type of `link`, in this case a `CreditNote`.
  - An **id** containing the ID of the credit note that was refunded.

The **totalAmount** field on the payment equals the line's **amount** field. These are both negative, as this is money leaving accounts payable.

## Refunding a payment

If a payment is refunded, for example, when a company overpaid a bill and the overpayment is returned, there are two payment records:

- One for the incoming overpayment.
- Another for the outgoing refund.

The payment issuing the refund is identified by the fact that the **totalAmount** is negative. This payment has one entry in its lines array that have the following properties:

- An **amount** indicating the amount that was refunded. This is always negative.
- A **links** array containing one element with the following properties:
  - A **type** indicating the type of a the link, in this case a `BillPayment`.
  - An **id** containing the ID of the payment that was refunded.

The **amount** field on the line equals the **totalAmount** on the payment and is negative as this is money leaving accounts payable.

The payment that was refunded can be identified as it has a line where the `amount` on its `line` is positive and the type of the link is `Refund`. This payment may have several entries in its **lines** array if it was partly used to pay an bill. For example, a £1,050 payment paying a £1,000 bill with a refund of £50 has two lines:

- One for £1,000 linked to the bill that was paid
- Another for £50 linked to the payment that refunded the over payment. This link is of type `Refund` but the ID corresponds to a bill payment.

The line linked to the bill payment has the following properties:

- An **amount** indicating the amount that was refunded. This is positive as its money that was added to accounts payable, but is balanced out by the negative amount of the refund.
- A **links** array containing one element with the following properties:
  - A **type** indicating the type of the link, in this case a `Refund`.
  - An **id** containing the ID of the payment that refunded this line.

:::note Linked payments

Not all accounting packages support linked payments in this way. In these platforms you may see a payment on account and a refund on account.
:::

## Foreign currencies

There are two types of currency rate that are detailed in the bill payments data type:

Payment currency rate:

- Base currency of the accounts payable account.
- Foreign currency of the bill payment.

Payment line link currency rate:

- Base currency of the item that the link represents.
- Foreign currency of the payment.

These two rates allow the calculation of currency loss or gain for any of the transactions affected by the payment lines. The second rate is used when a bill payment is applied to an item in a currency that does not match either:

- The base currency for the accounts payable account.
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

For the sake of brevity, the examples here may omit properties from objects. For the full object definition, see [BillPayments](https://api.codat.io/swagger/index.html#/BillPayments).
:::

### Simple examples

```json Payment for bill
{
  "totalAmount": 1000,
  "lines": [
    {
      "amount": 1000,
      "links": [
        {
          "type": "Bill",
          "id": "x",
          "amount": -1000
        }
      ]
    }
  ]
}
```

```json Allocation of credit note against a bill
{
  "totalAmount": 0,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Bill",
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

```json Payment of bill and payment on account
{
  "totalAmount": 2000,
  "lines": [
    {
      "amount": 1000,
      "links": [
        {
          "type": "Bill",
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

```json Refund on AP account
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

```json Linked refund on AP account
{
    "id" : "billpayment-001",
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
                    "type" : "BillPayment",
                    "id" : "billpayment-001",
                    "amount" : 1000
                }
            ]
        }
    ]
}
```

```json Using a credit note and cash to pay a bill
{
  "totalAmount": 250,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Bill",
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
          "type": "Bill",
          "id": "x",
          "amount": -250
        }
      ]
    }
  ]
}
```

### Complex examples

```json Pay bill with two credit notes and money into bank account (cash, cheque, bank transfer etc)
{
  "totalAmount": 1000,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Bill",
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
          "type": "Bill",
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
          "type": "Bill",
          "id": "x",
          "amount": -1000
        }
      ]
    }
  ]
}
```

```json Pay a bill with two credit notes and cash, with remainder
{
  "totalAmount": 2000,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Bill",
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
          "type": "Bill",
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
          "type": "Bill",
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

```json Two credit notes pay two bills with no allocation amount specified
{
  "totalAmount": 0,
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Bill",
          "id": "w",
          "amount": -1000
        },
        {
          "type": "Bill",
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

```json Two credit notes and cash pay three bills with no allocation amount specified, and refund cash
{
    "totalAmount": 2000,
    "lines": [
        {
            "amount" : 1000,
            "links" : [
                {
                    "type" : "Bill",
                    "id" : "w",
                    "amount" : -1000
                },
                {
                    "type" : "Bill",
                    "id" : "x",
                    "amount" : -1000
                },
                {
                    "type" : "Bill",
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
                    "type" : "BillPayment",
                    "id" : "payment-001",
                    "amount" : 1000
                }
            ]
        }
    ]
}
```

Bill Payment on account is used to pay invoice in January and February:

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
          "type": "Bill",
          "id": "x",
          "amount": -1000
        }
      ]
    },
    {
      "amount": 4000,
      "links": [
        {
          "type": "PaymentOnAccount",
          "id": "y",
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
  "date": "1901-01-01",
  "lines": [
    {
      "amount": 1000,
      "links": [
        {
          "type": "Bill",
          "id": "x",
          "amount": -1000
        }
      ]
    },
    {
      "amount": 1000,
      "links": [
        {
          "type": "Bill",
          "id": "y",
          "amount": -1000
        }
      ]
    },
    {
      "amount": 3000,
      "links": [
        {
          "type": "PaymentOnAccount",
          "id": "y",
          "amount": -3000
        }
      ]
    }
  ]
}
```

```json Two credit notes and some cash pay two bill with no allocations specified
{
  "totalAmount": 500,
  "lines": [
    {
      "amount": 500,
      "links": [
        {
          "type": "Bill",
          "id": "a",
          "amount": -1000
        },
        {
          "type": "Bill",
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
