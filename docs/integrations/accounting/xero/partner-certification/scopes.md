---
title: "Xero scopes by use case"
description: "Detailed guidance on access scopes required for the Xero partnership certification"
---

[Checkpoint 7: Scopes](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/#required-for-all-integrations), part of the Xero App Partner certification program, requires that apps have the minimal access to data as required by their use case. 

To comply, you must define the access scopes you need for your intended use case. During the app review, Xero will ask you to justify your use of scopes and explain why you are accessing the related data.

We have mapped out the Xero scopes that apply to each specific Codat use case in the table below. You will also need these scope regardless of the use case:
* `offline_access`
* `accounting.settings` 

| **Xero Partnership Type**                     | **Codat Use Case**            | **Suggested Xero Scopes**                                                                                                                                                                                                                                     |
|-----------------------------------------------|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Financial Services - Bank Feeds               | Reconciling bank transactions |   `bankfeeds`                                                                                                                                                                                                                                                   |
| Financial Services - Lending                  | Lending - Loan qualification  | `accounting.reports.read` <br/> `accounting.transactions`<br/>`accounting.contacts` <br/> `accounting.attachments`<br/>`accounting.reports.bankstatement.read`                                                                                                                 |
| Financial Services - Lending                  | Lending - Invoice finance     | `accounting.reports.read` <br/> `accounting.transactions` <br/> `accounting.contacts` <br/> `accounting.attachments`<br/>`accounting.reports.bankstatement.read`                                                                                                                  |
| App Store and Financial Services - Bank Feeds | Managing expenses             | `accounting.transactions` <br/> `accounting.contacts` <br/> `accounting.attachments` <br/> `bankfeeds`                                                                                                                                                                          |
| App Store                                     | Dashboarding                  | Read-only configuration required. Please work with your implementation specialist to configure scopes. |
| App Store                                     | Automating payables           | `accounting.transactions` <br/> `accounting.contacts` <br/> `accounting.attachments`                                                                                                                                                                                      |
| App Store                                     | Automating receivables        | `accounting.transactions` <br/> `accounting.contacts` <br/> `accounting.attachments`                                                                                                                                                                                      |
| App Store                                     | Integrating commerce data     | `accounting.journals.read` <br/> `accounting.transactions` <br/> `accounting.contacts`                                                                                                                                                                                    |
| App Store                                     | Managing payroll              | `accounting.journals.read` <br/> `accounting.transactions`    
