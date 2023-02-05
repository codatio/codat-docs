---
title: "Journals"
description: "A detailed record of all financial transactions of a company"
createdAt: "2021-12-03T13:45:50.786Z"
updatedAt: "2022-11-21T11:43:36.272Z"
---

:::note Language tip

For line items, or individual transactions, of a company's financial documents, refer to the [Journal entries](https://docs.codat.io/docs/datamodel-accounting-journalentries) data type
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Journals" target="_blank">Journals</a> endpoints in Swagger.

View the coverage for journals in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals" target="_blank">Data coverage explorer</a>.

## Overview

In accounting software, journals are used to record all the financial transactions of a company. Each transaction in a journal is represented by a separate [journal entry](https://docs.codat.io/docs/datamodel-accounting-journalentries). These entries are used to create the general ledger, which is then used to create the financial statements of a business.

When a company records all their transactions in a single journal, it can become large and difficult to maintain and track. This is why large companies often use multiple journals (also known as subjournals) to categorize and manage journal entries.

Such journals can be divided into two categories:

- Special journals: journals used to record specific types of transactions; for example, a purchases journal, a sales journal, or a cash management journal.
- General journals: journals used to record transactions that fall outside the scope of the special journals.

Multiple journals or subjournals are used in the following Codat integrations:

- [Sage Intacct](https://docs.codat.io/docs/accounting-sage-intacct) (mandatory)
- [Exact Online](https://docs.codat.io/docs/accounting-exact) (mandatory)
- [Oracle NetSuite](https://docs.codat.io/docs/accounting-netsuite) (optional)

:::caution

When pushing journal entries to an accounting platform that doesn’t support multiple journals (multi-book accounting), the entries will be linked to the platform-generic journal. The Journals data type will only include one object.
:::

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id**",
"0-1": "_string_",
"0-2": "Journal ID.",
"1-0": "**journalCode**",
"1-1": "_string_",
"1-2": "Native journal number or code.",
"2-0": "**name**",
"2-1": "_string_",
"2-2": "Journal name.  
The maximum length for a journal name is 256 characters. All characters above that number will be truncated.",
"3-0": "**type**",
"3-1": "_string_",
"3-2": "The type of the journal.",
"4-0": "**parentId**",
"4-1": "_string_",
"4-2": "Parent journal ID.  
If the journal is a parent journal, this value is not present.",
"5-0": "**hasChildren**",
"5-1": "_boolean_",
"5-2": "If the journal has child journals, this value is `true`. If it doesn’t, it is `false`.",
"6-0": "**createdOn**",
"6-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"6-2": "Journal creation date.",
"7-0": "**status**",
"7-1": "_string_",
"7-2": "Possible statuses:

<ul>
  <li>`Unknown`</li>
  <li>`Active`</li>
  <li>`Archived`</li>
</ul>
", "8-0": "**modifiedDate**", "8-1": "_string_ See
[date](https://docs.codat.io/docs/datamodel-shared-date)", "8-2": "The last time
Codat modified the record.", "9-0": "**sourceModifiedDate**", "9-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)", "9-2": "The last
time the journal was modified on the source platform." }, "cols": 3, "rows": 10,
"align": [ "left", "left", "left" ] } [/block]

## Example data

```json
{
      "id": "07b94827-c0a5-4cc7-ba58-3f9efec3b4b3",
      "journalCode": "PAY",
      "name": "Payroll Journal",
      "type": "Payroll Journal",
      "parentId": "90bb7784-083b-4bcb-a534-b30756cee65d",
      "hasChildren": false,
      "createdOn": "2021-02-23T15:33:22",
      "status": "Active",
      "modifiedDate": "2022-07-22T14:46:15Z",
      "sourceModifiedDate": "2022-03-21T21:43:22"
    },
```

##
