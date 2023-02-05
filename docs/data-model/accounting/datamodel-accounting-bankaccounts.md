---
title: "Bank accounts"
description: "An account where payments are made or received, and bank transactions are recorded"
createdAt: "2019-03-26T15:18:04.199Z"
updatedAt: "2022-11-22T14:59:21.089Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/BankAccounts/get_companies__companyId__connections__connectionId__data_bankAccounts" target="_blank">Bank Accounts</a> endpoints in Swagger.

View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.

:::caution Accessing Bank Accounts through Banking API
This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.

To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/docs/data-model-banking-banking-accounts)
:::

## Overview

A list of bank accounts associated with a company and a specific [data connection](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_).

Bank accounts data includes:

- The name and ID of the account in the accounting platform.
- The currency and balance of the account.
- The sort code and account number.

## Data model

[block:parameters]
{
"data": {
"0-2": "Identifier for the account, unique for the [company](https://docs.codat.io/docs/datamodel-accounting-company) in the accounting platform.",
"0-0": "**id** ",
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"1-0": "**accountName** ",
"3-0": "**sortCode** ",
"4-0": "**accountNumber** ",
"5-0": "**iBan**",
"8-0": "**currency** ",
"9-0": "**balance** ",
"10-0": "**availableBalance** ",
"12-0": "**modifiedDate** ",
"13-0": "**sourceModifiedDate** ",
"9-1": "_decimal_",
"10-1": "_decimal_",
"0-1": "_string_ ",
"1-1": "_string_",
"3-1": "_string_",
"4-1": "_string_",
"5-1": "_string_",
"8-1": "_string_
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"12-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"13-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"1-2": "Name of the bank account in the accounting platform.",
"3-2": "Sort code for the bank account.

**Xero integrations**
The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.",
"4-2": "Account number for the bank account.

**Xero integrations**
Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.

**FreeAgent integrations**  
For Credit accounts, only the last four digits are required. For other types, the field is optional.",
"5-2": "International bank account number of the account. Often used when making or receiving international payments.",
"8-2": "Base currency of the bank account.",
"9-2": "Balance of the bank account.",
"10-2": "Total available balance of the bank account as reported by the underlying data source. This may take into account overdrafts or pending transactions for example.",
"12-2": "Date the record was last updated in the Codat system.",
"13-2": "Date the record was last changed in the accounting system.",
"11-0": "**overdraftLimit** ",
"11-1": "_decimal_",
"11-2": "Pre-arranged overdraft limit of the account.

The value is always positive. For example, an **overdraftLimit** of `1000` means that the balance of the account can go down to `-1000`.",
"2-2": "Code used to identify each nominal account for a business.",
"2-0": "**nominalCode** ",
"2-1": "_string_",
"6-0": "**institution**",
"6-1": "_string_",
"7-0": "**accountType**",
"7-1": "_string_",
"7-2": "The type of the account:

<ul>
  <li>`Credit` – Bank account is a credit account.</li>
  <li>`Debit` – Bank account is a debit account.</li>
  <li>`Unknown`.</li>
</ul>
", "6-2": "The institution of the bank account." }, "cols": 3, "rows": 14 }
[/block]

## Example data

````
[
{
  "id": "1234",
  "accountName": "ABC Current Account",
  "accountType": "Debit",
  "sortCode": "00-11-22",
  "accountNumber": "12345678",
  "iban": "GB29 NWBK 6016 1331 9268 19",
  "currency": "GBP",
  "balance": 2573.20,
  "availableBalance": 2573.20,
  "overdraftLimit": 1000,
  "institution": "NatWest",
  "modifiedDate": "2019-03-26T16:25:08.384Z",
  "sourceModifiedDate": "2019-03-26T16:25:08.384Z"
},
{
  "id": "1235",
  "accountName": "Business Savings Account",
  "accountType": "Debit",
  "sortCode": "11-23-58",
  "accountNumber": "24681379",
  "iban": "GB89 3704 0044 0532 0130 00",
  "currency": "GBP",
  "balance": 1500.32,
  "availableBalance": 1500.32,
  "institution": "NatWest",
  "modifiedDate": "2019-03-26T16:25:08.384Z",
  "sourceModifiedDate": "2019-03-26T16:25:08.384Z"
}
]```
````
