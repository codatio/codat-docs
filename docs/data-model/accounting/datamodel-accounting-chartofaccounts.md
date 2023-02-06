---
title: "Accounts"
description: "The categories a business uses to record accounting transactions"
createdAt: "2019-03-15T09:17:00.301Z"
updatedAt: "2022-11-02T17:02:30.680Z"
---

:::info Language tip
Accounts are also referred to as **chart of accounts** and **general ledger**.
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Accounts" target="_blank">Accounts</a> endpoints in Swagger.

View the coverage for accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts" target="_blank">Data coverage explorer</a>.

## Overview

Accounts are the categories a business uses to record accounting transactions. From the Accounts endpoints, you can retrieve [a list of all accounts for a specified company](https://api.codat.io/swagger/index.html#/Accounts/Accounts_List).

The categories for an account include:

- Asset
- Expense
- Income
- Liability
- Equity.

:::info Accounts with no category
If an account is pulled from the chart of accounts and its nominal code does not lie within the category layout for the company's accounts, then the **type** is `Unknown`. The **fullyQualifiedCategory** and **fullyQualifiedName** fields return `null`.

This approach gives a true representation of the company's accounts whilst preventing distorting financials such as a company's profit and loss and balance sheet reports.
:::

## Data model

:::info Filtering bank accounts
Use the **isBankAccount** boolean to filter the company's accounts to show only bank accounts.
:::

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"1-0": "**nominalCode** ",
"2-0": "**name** ",
"3-0": "**description** ",
"4-0": "**fullyQualifiedCategory** ",
"5-0": "**fullyQualifiedName** ",
"6-0": "**currency** ",
"7-0": "**currentBalance** ",
"8-0": "**type** ",
"9-0": "**status** ",
"10-0": "**isBankAccount** ",
"11-0": "**modifiedDate** ",
"12-0": "**sourceModifiedDate** ",
"11-1": "_string_
See [date](/datamodel-shared-date)",
"11-2": "Date the record was last updated in the Codat system.",
"12-1": "_string_
See [date](/datamodel-shared-date)",
"12-2": "Date the record was last changed in the accounting system.",
"0-1": "_string_ ",
"1-1": "_string_",
"2-1": "_string_",
"3-1": "_string_",
"4-1": "_string_",
"5-1": "_string_",
"6-1": "_string_
See [currency](/datamodel-shared-currency)",
"8-1": "_string_",
"9-1": "_string_",
"10-1": "_boolean_",
"7-1": "_decimal_",
"2-2": "Name of the account.",
"9-2": "Status of the account, either:

- `Unknown`
- `Active`
- `Archived`
- `Pending`",
  "8-2": "Type of account, either:
- `Unknown`
- `Asset`
- `Expense`
- `Income`
- `Liability`
- `Equity`",
  "10-2": "Confirms whether the account is a bank account or not.",
  "7-2": "Current balance in the account.",
  "3-2": "Description for the account.",
  "4-2": "Full category of the account. For example:
  Liability.Current or Income.Revenue. See example data.",
  "5-2": "Full name of the account, for example:
  <ul>
    <li>`Liability.Current.VAT`</li>
    <li>`Income.Revenue.Sales`</li>
  </ul>
  ", "6-2": "Currency of the account.", "0-2": "Identifier for the account,
  unique for the
  [company](/datamodel-accounting-company).", "1-2":
  "Reference given to each nominal account for a business. It ensures money is
  allocated to the correct account. This code isn't a unique identifier in the
  Codat system." }, "cols": 3, "rows": 13 } [/block.

### Valid Datatype Links

The `validDatatypeLinks` can be used to determine whether an account can be correctly mapped to another object; for example, accounts with a `type` of `income` might only support being used on an Invoice and Direct Income. For more information, see [Valid Data Type Links](/valid-data-type-links).
[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"1-0": "**property**",
"2-0": "**links**",
"1-1": "_string_",
"2-1": "_string_",
"1-2": "The property from the account that can be linked.",
"2-2": "Supported `dataTypes` that the record can be linked to.",
"0-0": "validDatatypeLinks"
},
"cols": 3,
"rows": 3
}
[/block.

### Account reference

Data types that reference an account, for example bill and invoice line items, use an [accountRef](/datamodel-accounting-referencetypes#accountref) that includes the ID and name of the linked account.
[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"1-0": "**name** ",
"0-2": "Unique identifier for the account in the accounting platform.",
"0-1": "_string_",
"1-1": "_string_",
"1-2": "Name of the account in the accounting platform."
},
"cols": 3,
"rows": 2
}
[/block]

## Example data

```
{
  "accounts": [
      {
      "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
      "nominalCode": "090",
      "name": "Business Bank Account",
      "description": "1st Account for core transactions",
      "fullyQualifiedCategory": "Asset.Bank",
      "fullyQualifiedName": "Asset.Bank.Business Bank Account",
      "currency": "GBP",
      "currentBalance": null,
      "type": "Asset",
      "status": "Active",
      "isBankAccount": true,
      "modifiedDate": null,
      "sourceModifiedDate": null
    },
    {
      "id": "16503499-9215-4a45-9839-b0fed8269304",
      "nominalCode": "610",
      "name": "Accounts Receivable",
      "fullyQualifiedCategory": "Asset.Current",
      "fullyQualifiedName": "Asset.Current.Accounts Receivable",
      "currency": "USD",
      "currentBalance": null,
      "type": "Asset",
      "status": "Active",
      "isBankAccount": false,
      "modifiedDate": null,
      "sourceModifiedDate": null
    },
    {
      "id": "ac3e7278-24f5-40ae-b759-032d8339c373",
      "nominalCode": "800",
      "name": "Accounts Payable",
      "fullyQualifiedCategory": "Liability.Current",
      "fullyQualifiedName": "Liability.Current.Accounts Payable",
      "currency": "USD",
      "currentBalance": null,
      "type": "Liability",
      "status": "Active",
      "isBankAccount": false,
      "modifiedDate": null,
      "sourceModifiedDate": null
    },
    {
      "id": "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
      "nominalCode": "200",
      "name": "Sales",
      "fullyQualifiedCategory": "Income.Revenue",
      "fullyQualifiedName": "Income.Revenue.Sales",
      "currency": "USD",
      "currentBalance": null,
      "type": "Income",
      "status": "Active",
      "isBankAccount": false,
      "modifiedDate": null,
      "sourceModifiedDate": null
    }
  ]
}
```
