---
title: "Xero scopes"
description: "How to set up your scopes ."
---

As part of the Xero App Partner Program, Checkpoint 7: Scopes requires that you to set the minimum scopes required to pull data that fulfils your intended use case.

In order to help you with this process we have mapped out a table below which details the Xero scopes that are requested per Codat datatype.

### Datatype in Codat data model

| Datatype in Codat data model | Equivalent in Xero | Scopes needed | 
| :- | :- | :- | 
| Account transactions (direct incomes, direct costs, transfers, bills, and bill payments) | Please see component datatypes below | Please see component datatypes below |
| Balance sheet | Balance sheets, company | accounting.reports.read, accounting.settings | 
| Bank accounts | Accounts (Accounting API, for debit type bank accounts), bank feed connections (Bank Feeds) | accounting.settings, bankfeeds | 
| Bank transactions | | accounting.reports.read | 
| Bill credit notes | Credit note | accounting.transactions | 
| Bill payments | Payments, batch payments | accounting.transactions | 
| Bills | Invoices | accounting.transactions, accounting.attachments | 
| Cash flow statement | Company, Payment journal entries, accounts | accounting.settings, accounting.journals.read, accounting.accounts | 
| Chart of accounts | Accounts | accounting.settings | 
| Company info | Company | accounting.settings | 
| Credit notes | Credit notes, contacts, invoices, accounts | accounting.transactions, accounting.accounts | 
| Customers | Contacts | accounting.contacts | 
| Direct costs | Spend money, prepayments | accounting.attachments, accounting.transactions | 
| Direct incomes | Receive money, overpayments | accounting.attachments, accounting.transactions | 
| Invoices | Invoices, contacts, currencies | accounting.attachments, accounting.transactions | 
| Items | Items | accounting.settings | 
| Journal entries | Journals | accounting.journals.read | 
| Payments | Payments, accounts, invoices, credit notes, | accounting.transactions | 
| Profit and loss | Profit and loss | accounting.reports.read | 
| Purchase orders | Purchase orders | accounting.transactions | 
| Suppliers | Contacts | accounting.contacts | 
| Tax rates | Tax rates | accounting.settings | 
| Tracking categories | Tracking categories | accounting.settings | 
| Transfers | Bank transfers | accounting.transactions |