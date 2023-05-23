---
title: "April feature updates"
date: "2023-04-28"
tags: ["Product", "Update"]
authors: jyorston
---

import Loom from '@components/global/Loom'

This month, our product and engineering teams have been working on expanding coverage across our existing integrations as well as introducing some exciting new features.

In the following videos, Codat engineers demonstrate some of this new functionality.

<!--truncate-->

## Assess: Enhanced Invoices Report

<Loom source="https://www.loom.com/embed/47fad41c68ce49c8b0b1b1aa1909c154" />

Traditionally, lenders look up a bank statement to verify that payments for an invoice were received, and that payment dates and amounts are accurate.

The Enhanced Invoices Report uses open banking and accounting data to automatically match a paid invoice to the bank transaction record that was used to pay it. This helps to verify a customer’s payment against the company's historical invoice.

See [Enhanced Invoices](https://docs.codat.io/assess/enhanced-invoices/overview) for more information.


### List and create trackingCategories on QuickBooks Online Direct Costs.

<Loom source="https://www.loom.com/embed/32009bdb95124cd48df095ba8613599f" />

This update enables you to view and assign Locations, Customers, and Classes on expenses or checks in QuickBooks Online. 

By using these fields on Codat's Direct cost model, you can provide companies with valuable insights into their spending patterns across multiple locations and departments, and even individual customer profitability.

Review the documentation for [creating a direct cost](https://docs.codat.io/accounting-api#/operations/create-direct-cost) and [retrieving a direct cost](https://docs.codat.io/accounting-api#/operations/list-direct-costs)


### Create journals in Microsoft Dynamics 365 Business Central

<Loom source="https://www.loom.com/embed/5436c8551e90401d99f03f058626ea07" />

Codat now supports the creation of journal entries in Microsoft Dynamics 365 Business Central. 

This enhancement empowers you to provide this integration to your customers, streamlining use cases such as payroll reconciliation, purchase amortization, loan repayment reconciliation, and more.

See the [API Reference](https://docs.codat.io/accounting-api#/operations/create-journal-entry) for more information on how to use the POST journal entry endpoint.


### Increased Coverage of QuickBooks Online Deletion Support

<Loom source="https://www.loom.com/embed/b75c1ed71f63481bb11d0d7d54ed94a4" />

Codat has added support for the deletion of journal entries, bills, and invoices from QuickBooks Online. 

This improvement enables you to offer this integration to your customers, simplifying use cases such as reversing erroneous transactions and maintaining accurate financial records.

See [Delete data from QuickBooks Online](https://docs.codat.io/integrations/accounting/quickbooksonline/accounting-quickbooksonline-delete-journal-entries) for more information on how to use this feature.

### Addition of the QuickBooks Desktop Tracking Object

<Loom source="https://www.loom.com/embed/e517c51c9ccc497ca7380431aead7e7f" />

Codat has added support for the tracking object on Direct costs for QuickBooks Desktop. This feature enables you to see the billable status on the check object in QuickBooks.

By marking expenses on a check as billable, businesses can easily identify and allocate costs to specific customers or projects. This feature simplifies the process of invoicing clients for reimbursable expenses.

### Support for negative direct costs on bank accounts for QuickBooks Online

<Loom source="https://www.loom.com/embed/41607424e2884de1a0b44504f9468e18" />


We've extended our support for creating refunds for expenses in QuickBooks Online. In addition to the existing support for refunds on credit cards, you can now use negative direct costs for prepay or bank accounts. 

This enhancement lets you facilitate use cases such as refunding an erroneous transaction or representing a returned order, and managing accidental duplicate payments.

See [Direct cost](https://docs.codat.io/accounting-api#/operations/create-direct-cost) for more information on how to use this feature.


