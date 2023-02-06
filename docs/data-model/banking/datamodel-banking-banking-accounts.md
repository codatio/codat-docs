---
title: "Banking accounts"
description: "An account where payments are made or received, and bank transactions are recorded"
createdAt: "2022-03-12T12:32:03.784Z"
updatedAt: "2022-11-22T11:52:43.740Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/BankingAccounts" target="_blank">Banking Accounts</a> endpoints in Swagger.

View the coverage for banking accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-accounts" target="_blank">Data coverage explorer</a>.

# Overview

The Banking Accounts data type provides a list of all the SMB's bank accounts, with rich data like balances, account numbers and institutions holding the accounts.

From the Banking Accounts endpoint, you can retrieve a list of all bank account balances:  
`GET /companies/{companyId}/connections/{connectionId}/data/banking-accounts`

Responses are paged, so you should provide `page` and `pageSize` query parameters in your request. See [Pagination](/pagination) for details.

# Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "id",
"0-1": "_string_",
"0-2": "The ID of the account from the provider.",
"1-0": "name",
"1-1": "_string_",
"1-2": "The name of the account according to the provider.",
"2-0": "informalName",
"2-1": "_string_",
"2-2": "The friendly name of the account, chosen by the holder. This may not have been set by the account holder and therefore is not always available.",
"3-0": "holder",
"3-1": "_string_",
"3-2": "The name of the person or company who holds the account.",
"4-0": "type",
"4-1": "_string_",
"4-2": "The type of transactions and balances on the account.  
_ For `Credit` accounts, positive balances are liabilities and positive transactions **reduce** liabilities.  
_ For `Debit` accounts, positive balances are assets and positive transactions **increase** assets.",
"5-0": "balance",
"5-1": "See [Balance](#balance)",
"5-2": "An object containing bank balance data.",
"6-0": "identifiers",
"6-1": "See [Identifiers](#Identifiers)",
"6-2": "An object containing bank account identification information.",
"7-0": "currency",
"7-1": "_string_  
See [Currency](/datamodel-shared-currency)",
"7-2": "The currency code for the account.",
"8-0": "institution",
"8-1": "See [Institution](#institution)",
"8-2": "The bank or other financial institution providing the account.",
"9-0": "modifiedDate",
"9-1": "_string_  
See [Date](/datamodel-shared-date)",
"9-2": "YYYY-MM-DDT00:00:00Z

The date the record was last updated in Codat's cache.",
"10-0": "sourceModifiedDate",
"10-1": "_string_  
See [Date](/datamodel-shared-date)",
"10-2": "YYYY-MM-DDT00:00:00

The date the record was last changed in the originating system."
},
"cols": 3,
"rows": 11,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Balance

| Field     | Type     | Description                                                                                                                                    |
| :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| available | _number_ | The balance available in the account, including any pending transactions. This doesn't include additional funds available from any overdrafts. |
| current   | _number_ | The balance of the account only including cleared transactions.                                                                                |
| limit     | _number_ | The minimum allowed balance for the account. For example, a $100 overdraft would show as a limit of `-100`.                                    |

## Identifiers

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "type",
"0-1": "_string_",
"0-2": "Type of account, either:  
\\\_ `Account`

\\\_ `Card`

\\\_ `Credit`

\\\_ `Depository`

\\\_ `Investment`

\\\_ `Loan`

\\\* `Other`",
"1-0": "subtype",
"1-1": "_string_",
"1-2": "Detailed account category",
"2-0": "number",
"2-1": "_number_",
"2-2": "The account number for the account. When combined with the `bankCode`, this is usually enough to uniquely identify an account within a jurisdiction.",
"3-0": "bankCode",
"3-1": "_string_",
"3-2": "The local (usually national) routing number for the account.

This is known by different names in different countries:  
\_ _BSB code_ (Australia)  
\_ _routing number_ (Canada, USA)  
\\\* _sort code_ (UK)",
"4-0": "iban",
"4-1": "_string_",
"4-2": "The international bank account number (IBAN) for the account, if known.",
"5-0": "bic",
"5-1": "_string_",
"5-2": "The ISO 9362 code (commonly called SWIFT code, SWIFT-BIC or BIC) for the account.",
"6-0": "maskedAccountNumber",
"6-1": "_string_",
"6-2": "A portion of the actual account number to help account identification where `number` is tokenised (Plaid only)"
},
"cols": 3,
"rows": 7,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Institution

| Field | Type     | Description                                                   |
| :---- | :------- | :------------------------------------------------------------ |
| id    | _string_ | The institution's ID, according to the provider.              |
| name  | _string_ | The institution's name, according to the underlying provider. |

# Example data

```json
{
  "results": [
    {
      "id": "1703194f-7805-4da8-bac0-2ba5da4a4216",
      "name": "Business Current Account",
      "informalName": "Codat",
      "holder": "Codat Ltd",
      "type": "Debit",
      "balance": {
        "available": -459987.97,
        "current": -459964.9,
        "limit": 5000
      },
      "identifiers": {
        "type": "Depository",
        "subtype": "checking",
        "number": "46762629",
        "bankCode": "009911",
        "iban": "GB29 LOYD 4773 2346 7626 29",
        "bic": "LOYDGB21006",
        "maskedAccountNumber": "LOYDGB21006"
      },
      "currency": "GBP",
      "institution": {
        "id": "lloyds-bank",
        "name": "Lloyds Bank"
      },
      "modifiedDate": "2022-05-23T16:32:50Z",
      "sourceModifiedDate": "2021-08-14T05:04:12"
    }
  ]
```
