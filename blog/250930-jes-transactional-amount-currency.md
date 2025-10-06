---
title: "Journal Entries: Transactional amount and currency now supported"
date: "2025-09-30"
tags: ["Product", "Update", "Lending", "Quickbooks Online", "NetSuite", "Dynamics 365 BC", "Sage Intacct", "Sage 50", "Sage BC"]
authors: ivasiutkova
---

We've expanded our data model to include **transactional amount** and **transactional currency** for journal entries.

<!--truncate-->

## What's new?

Our data model for **journal entries** now supports both the **transactional amount** and the **transactional currency** fields.  
This enhancement is available for the following accounting and ERP software:

- QuickBooks Online  
- NetSuite  
- Dynamics 365 Business Central  
- Sage Intacct  
- Sage 50  
- Sage BC  

You can now find these fields within `journalLines`:

```json
"journalLines": [
  {
    "description": "string",
    "netAmount": 0,
    "currency": "string",
    "transactionAmount": 0,
    "transactionCurrency": "string",
    "accountRef": {},
    "tracking": {
      "recordRefs": []
    },
    "contactRef": {}
  }
]
```

## Who is this relevant for?

Clients who **use journal entries and need to work with transactional currency** in their implementations — for example, when analyzing multi-currency transactions for lending or financial reporting.

## How to get started?

This update is already available.  
Refer to the [Journal Entries documentation](https://docs.codat.io/lending-api#/schemas/AccountingJournalEntry) for more details on using transactional amount and currency.
