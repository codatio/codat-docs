---
title: "Journal entries"
description: "A record of a business transaction in a company's business books"
createdAt: "2019-02-20T13:11:05.915Z"
updatedAt: "2023-01-11T15:49:43.082Z"
---

:::note Language tip
For the top-level record of a company's financial transactions, refer to the [Journals](/journals) data type
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/JournalEntries" target="_blank">Journal Entries</a> endpoints in Swagger.

View the coverage for journal entries in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries" target="_blank">Data coverage explorer</a>.

## Overview

A journal entry report shows the entries made in a company's general ledger, or [chart of accounts](https://api.codat.io/swagger/index.html#/Accounts/get_companies__companyId__data_accounts), when transactions are approved. The journal line items for each journal entry should balance.

A journal entry line item is a single transaction line on the journal entry. For example:

- When a journal entry is recording a receipt of cash, the credit to accounts receivable and the debit to cash are separate line items.
- When a company needs to recognise revenue from an annual contract on a monthly basis, on receipt of cash for month one, they make a debit to deferred income and a credit to revenue.

In Codat a journal entry contains details of:

- The date on which the entry was created and posted.
- Itemised lines, including amounts and currency.
- A reference to the associated accounts.
- A reference to the underlying record. For example, the invoice, bill, or other data type that triggered the posting of the journal entry to the general ledger.

:::note Pushing journal entries

Codat only supports journal entries in the base currency of the company that are pushed into accounts denominated in the same base currency.
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
"0-2": "Unique identifier of the journal entry for the [company](/datamodel-accounting-company) in the accounting platform.",
"1-0": "**description**",
"1-1": "_string_",
"1-2": "Optional description of the journal entry.",
"2-0": "**postedOn** ",
"2-1": "_string_  
See [date](/datamodel-shared-date)",
"2-2": "Date on which the journal entry was posted to the accounting platform, and had an impact on the general ledger. This may be different from the creation date.

For example, a user creates a journal entry on Monday and saves it as draft, which has no impact on the general ledger. On Thursday, they return to the entry and post it.

<ul>
  <li>The **createdOn** date shows as Monday.</li>
  <li>The **postedOn** date shows as Thursday.</li>
</ul>{" "}

Journal entries can also be backdated, so the **postedOn** date may be earlier than the **createdOn** date.",
"3-0": "**createdOn** ",
"3-1": "_string_  
See [date](/datamodel-shared-date)",
"3-2": "Date on which the journal was created in the accounting platform.",
"4-0": "**updatedOn** ",
"4-1": "_string_  
See [date](/datamodel-shared-date)",
"4-2": "Date on which the journal was last updated in the accounting platform.",
"5-0": "**journalLines** ",
"5-1": "",
"5-2": "An array of [JournalLines](#journal-lines).",
"6-0": "**modifiedDate** ",
"6-1": "_string_  
See [date](/datamodel-shared-date)",
"6-2": "Date on which the record was last updated in the Codat system.",
"7-0": "**sourceModifiedDate** ",
"7-1": "_string_  
See [date](/datamodel-shared-date)",
"7-2": "Date on which the record was last changed in the accounting platform.",
"8-0": "**recordRef** ",
"8-1": "[_reference types_](/datamodel-accounting-referencetypes#recordref)",
"8-2": "See [Record reference](#record-reference).",
"9-0": "**journalRef**",
"9-1": "[_reference types_](/datamodel-accounting-referencetypes)",
"9-2": "Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals)."
},
"cols": 3,
"rows": 10,
"align": [
"left",
"left",
"left"
]
}
[/block]

### Journal lines

| Field           | Type                                                                                                   | Description                                                                                                             |
| :-------------- | :----------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **description** | _string_                                                                                               | Description of the journal line item.                                                                                   |
| **netAmount**   | _decimal_                                                                                              | Amount for the journal line. Debit entries are considered positive, and credit entries are considered negative.         |
| **currency**    | _string_                                                                                               | Currency for the journal line item.                                                                                     |
| **accountRef**  | [_reference types_](/datamodel-accounting-referencetypes#section-accountref) | See [Account reference](#account-reference).                                                                            |
| **tracking**    | Array of [_record refs_](/datamodel-accounting-referencetypes#recordref)     | List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.) |

### Account reference

Links a journal entry to any associated accounts.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_",
"0-2": "The ID of the [Account](/datamodel-accounting-chartofaccounts) the line is linked to.",
"1-0": "**name** ",
"1-1": "_string_",
"1-2": "The name of the [Account](/datamodel-accounting-chartofaccounts) the line is linked to.  
_Note: this will only be populated if you've synchronised Accounts for the company._"
},
"cols": 3,
"rows": 2,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Example data

```json
{
  "id": "string",
  "postedOn": "2021-06-21T14:37:31.810Z",
  "description": "string",
  "createdOn": "2021-06-21T14:37:31.810Z",
  "updatedOn": "2021-06-21T14:37:31.810Z",
  "journalRef": {
        "id": "string",
        "name": "string"
  },

  "journalLines": [
    {
      "description": "string",
      "netAmount": 0,
      "currency": "string",
      "accountRef": {
        "id": "string",
        "name": "string"
      }
      "tracking" : [
        "recordRefs" : [{
          "id" : 0,
          "dataType" : "customers"
        }]
      ]
    }
  ],

  "modifiedDate": "2021-06-21T14:37:31.810Z",
  "sourceModifiedDate": "2021-06-21T14:37:31.810Z",
  "recordRef": {
    "id": "string",
    "dataType": "string"
  }
}
```
