---
title: "Oracle NetSuite integration reference"
description: "Things to know when synchronizing data with Oracle NetSuite."
sidebar_label: Reference
---

Note the following information when building your application using Codat's Oracle NetSuite integration.

## Tax and discount handling for applicable data types

### Line-level discounts and taxes

When pulling objects with line-level discounts and/or taxes from Oracle NetSuite—for example, Sales orders—the discount and/or tax components are shown on separate lines. For example, a single line that includes a discount and a tax component in NetSuite is mapped to Codat as three separate lines:

1. The amount exclusive of discount and tax
2. The discount amount
3. The tax amount

This behavior applies to the following data types: Bill credit notes, Bills, Credit notes, Direct costs, Direct incomes, Invoices, Purchase orders, and Sales orders.

#### Example

Say you have a vendor bill in NetSuite with a line item of $39.05, inclusive of discount and taxes. The data is represented in Codat as follows:

```json
#...
"lineItems": [
        {
          "unitAmount": 22.5,
          "quantity": 2,
          "discountAmount": 0,
          "discountPercentage": 0,
          "subTotal": 45,
          "taxAmount": 0,
          "totalAmount": 45    // exclusive of discount and tax
        },
        {
          "unitAmount": 0,
          "quantity": 1,
          "discountAmount": 10,    // the discount amount
          "discountPercentage": 0,
          "subTotal": -10,
          "taxAmount": 0,
          "totalAmount": -10
        },
        {
          "unitAmount": 0,
          "quantity": 0,
          "discountAmount": 0,
          "discountPercentage": 0,
          "subTotal": 0,
          "taxAmount": 4.05,    // the tax amount
          "totalAmount": 4.05
        }
      ]
```

### Posting and non-posting discounts

NetSuite has two different types of discount items:

- _Posting_ discount items: the discount is posted to a general ledger account.
- _Non-posting_ discount items: the discount is not posted to a general ledger account.

Codat maps each type differently. A posting discount item is mapped as a separate line. A non-posting discount item is mapped as a single line that shows the discount-inclusive amount.

### Apply a discount to a record in NetSuite

When pushing data to NetSuite, you can apply a discount to any Codat data type that includes line items, apart from Journal entries.

For example, to apply a discount to a Bill, specify an existing discount item record (`itemType = "Discount"`) from NetSuite in the request body. Codat pushes discounts to NetSuite as separate line items; only the item type and the discount amount are sent.

:::caution

Do not use the Codat properties `lineItems.discountAmount` and `lineItems.discountPercentage` to apply discounts to records in NetSuite.
:::

## Accounts

If the "Use Account Numbers" setting is enabled, Accounts pushed to NetSuite must include a value for `nominalCode`. For more information, see <a className="external" href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N1440268.html" target="_blank">Chart of Account Numbering</a> in the NetSuite documentation.

## Bank accounts

Bank accounts are mapped from _accounts_ in Oracle NetSuite.

When pushing Bank accounts to NetSuite, the `nominalCode` field is required if Chart of Account numbering is enabled in NetSuite (through the "Use Account Numbers" setting).

## Bills

Bills are mapped from _vendor bills_ in Oracle NetSuite.

When pushing Bills to Oracle NetSuite:

- The `status` property must be set to `Open`.
- A bill can't be created from a purchase order.
- NetSuite makes a distinction between `Expense` and `Item` line records in vendor bills. Codat validates whether a line item is an `Expense` or `Item` type based on the value of `lineItems.itemRef.id`. If this isn't populated, Codat treats the line item as an `Expense` type.
- In NetSuite, when pulling Bills line items, the `taxAmount` and `taxRateRef` fields are not available because NetSuite does not provide information about which line item the tax relates to.

## Bill credit notes

Bill credit notes are mapped from _vendor credits_ in Oracle NetSuite.

## Bill payments

Codat treats NetSuite _Vendor Prepayments_ as either Bill payments or Direct costs depending on their state. For example, an allocated vendor prepayment is treated as a Bill payment.

If a transaction is voided in NetSuite, a _reversing journal_ is posted to offset the original transaction and is then linked to the original transaction. Codat treats these reversing journals as refunds.

In NetSuite, portions of a Bill Credit Note can be allocated to a particular Bill. In this case, the Bill payment amount shown in Codat is the _sum total_ of the allocated bill credit note portions. The individual allocations are not shown.

:::note Example of bill credit note payments in NetSuite

Say you have a $10 bill credit note (x) and an outstanding $20 bill (y) in NetSuite.

1. You apply $5 of x to y, which leaves $15 outstanding.
2. Pull the Bill payment to Codat: the `lines.links.amount` of x is equal to $5.
3. You apply a further $3 of x to y, which leaves $12 of y outstanding.
4. Pull the bill payment to Codat: the `lines.links.amount` of x is now equal to $8.

The individual bill credit note allocations are not shown in the bill payment.
:::

When pushing Bill payments to Oracle NetSuite:

- The supported use cases are paying off a bill with cash and applying a bill credit note to a bill.
- Applying NetSuite Vendor Prepayments to open bills from vendors is not supported.

## Customers
When pulling Customers from NetSuite we map CustomerName from CustomerID.

## Direct costs and direct incomes

:::note Type not supported

Specifying the type of direct cost or direct income is not supported in our accounting data model.
:::

You can push Direct costs to NetSuite as either [Checks](https://www.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2021_2/script/record/check.html) or [Credit Card Refunds](https://www.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2021_2/script/record/creditcardrefund.html). Pushing Vendor Prepayments is not supported.

You can push direct incomes to NetSuite as either [Cash Sales](https://www.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2021_2/script/record/cashsale.html) or [Cash Refunds](https://www.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2021_2/script/record/cashrefund.html). Pushing Customer Deposits is not supported.

When pulling Direct incomes, the default `-Not Taxable-` tax group and tax code are ignored. You can access this information by pulling the [Tax Rates](/accounting-api#/schemas/TaxRates) data type.

## Invoices

When pulling Invoices line items, the `taxAmount` and `taxRateRef` fields are not available because NetSuite does not provide information about which line item the tax relates to.

## Journal entries

When pulling _advanced intercompany journal entries_ from Oracle NetSuite, only journal lines associated with the connected subsidiary are pulled. Lines associated with other subsidiaries are ignored. Codat doesn't support pushing this type of journal entry to Oracle NetSuite.

When pushing Journal entries, Codat first creates a default location in NetSuite named `Do not use. Auto-generated by an external system`. This location is then associated with all subsequent pushed journal entries. Do not disable the default location or journal entry pushes will fail.

:::note

For accounts with _Multi-Book Accounting_ enabled, Codat does not support pushing journal entries to a specific NetSuite journal.
:::

## Payments

When pushing Payments to Oracle NetSuite, Codat does not support the ability to [refund a credit note](/accounting-api#/schemas/Payment).

## Purchase orders

When pushing Purchase orders to Oracle NetSuite:

- The `shipto` field can't be pushed.

- The `accountRef` or `itemRef` fields can only be pushed for a single line item. Pushing the `itemRef` will override the `accountRef`. If the `accountRef` is pushed, you can view the reference in the Expense sub-list in the NetSuite user interface.

## Sales orders

In Sales orders pulled from Oracle NetSuite, the `expectedDeliveryDate` indicates the expected _shipping_ date in the source business object.

## Suppliers

Suppliers are mapped from _vendors_ in Oracle NetSuite.

When pushing Suppliers to Oracle NetSuite:

- A supplier can only be pushed to the company from which the data was pulled. Pushing data to subsidiary companies is not supported.

## Transfers

### Pulling Transfers

Transfers are mapped from the <a  class="external" href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_N1547981.html" target="_blank">transfers</a> and <a  class="external" href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_N1542225.html" target="_blank">deposits</a> objects in NetSuite.

Only NetSuite deposits made between two bank accounts - including credit card accounts and Undeposited Funds - are pulled to Codat as transfers.

The Transfers data type doesn't support multiple lines.

When pulling NetSuite deposits as Transfers, only top-level tracking categories are pulled (the tracking categories associated with the _to_ account in NetSuite). Codat's accounting data model does not support Tracking categories at the line item level.

### Pushing Transfers

Pushing Transfers is only supported for NetSuite deposits, not NetSuite transfers.

When making a deposit in NetSuite, users can enter payments on the **Deposits** subtab. When pushing Transfers of this type:

- The `depositedRecordRefs` array in the Transfer must specify either `payments`, `directIncomes`, or `journalEntries`.
- All transactions in the `depositedRecordRefs` array must share the same currency.

## Field coverage for supported data types

Codat's data model supports a wide range of fields within each data type.

Sometimes a provider's API does not grant access to a field that exists in a Codat data type. Conversely, our data model sometimes does not support all the relevant fields on an object in a provider's API.

The following tables highlight selected fields that are not available in data pulled and pushed from Oracle NetSuite.

### Unavailable provider fields

| Codat data type and field       | Status                               |
| :------------------------------ | :----------------------------------- |
| `billPayments.accountRef`       | Not available in the provider's API. |
| `billPayments.paymentMethodRef` | Not available in the provider's API. |
| `customers.taxNumber`           | Not available in the provider's API. |
| `customers.registrationNumber`  | Not available in the provider's API. |

### Unavailable Codat fields

|Oracle NetSuite record and field|Codat data type|Status|
|----|----|----|
|`VendorCredit.customForm`,  `VendorCredit.postingPeriod`|[Bill credit notes](/accounting-api#/schemas/billcreditnotes)|Not represented in Codat's accounting data model.|
|`Invoice.customForm`, `Invoice.postingPeriod`|[Invoices](/accounting-api#/schemas/invoices)|Not represented in Codat's accounting data model.|
|`Vendor.subsidiary`|[Suppliers](/accounting-api#/schemas/Suppliers)|The Suppliers data type does not show whether or not a supplier company is a subsidiary.|
|`Vendor.workCalendar`|[Suppliers](/accounting-api#/schemas/Suppliers)|Not represented in Codat's accounting data model.|
