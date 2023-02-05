---
title: "Valid data type links"
description: "Shows which references in the Codat model may point to other properties in the dataset"
createdAt: "2022-06-17T08:44:16.395Z"
updatedAt: "2022-11-22T16:13:45.182Z"
---

When querying Codat's data model, some data types return `validDatatypeLinks` metadata in the JSON response. This indicates where that object can be used as a reference—a _valid link_—when creating or updating other data.

For example, `validDatatypeLinks` might indicate the following references:

- Which tax rates are valid to use on the line item of a bill.
- Which items can be used when creating an invoice.

You can use `validDatatypeLinks` to present your SMB customers with only valid choices when selecting objects from a list, for example.

## `validDatatypeLinks` example

The following example uses the `Accounting.Accounts` data type. It shows that, on the linked integration, this account is valid as the account on a payment or bill payment; and as the account referenced on the line item of a direct income or direct cost. Because there is no valid link to Invoices or Bills, using this account on those data types will result in an error.

```json validDatatypeLinks for an account
{
            "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
            "nominalCode": "090",
            "name": "Business Bank Account",
            #...
            "validDatatypeLinks": [
                {
                    "property": "Id",
                    "links": [
                        "Payment.AccountRef.Id",
                        "BillPayment.AccountRef.Id",
                        "DirectIncome.LineItems.AccountRef.Id",
                        "DirectCost.LineItems.AccountRef.Id"
                    ]
                }
            ]
        }
```

## Support for `validDatatypeLinks`

Codat currently supports `validDatatypeLinks` for some data types on our Xero, QuickBooks Online, QuickBooks Desktop, Exact (NL), and Sage Business Cloud integrations.

If you'd like us to extend support to more data types or integrations, suggest or vote for this on our <a href="https://portal.productboard.com/codat/5-product-roadmap">Product Roadmap</a>.
