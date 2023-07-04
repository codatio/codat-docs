---
title: "June feature updates"
date: "2023-06-30"
tags: ["Product", "Update"]
draft: true
authors: mcclowes
---

This month, our product and engineering teams have been working on expanding coverage across our existing integrations as well as introducing some exciting new features.

In the following videos, Codat engineers demonstrate some of this new functionality.

<!--truncate-->

## Example feature

<div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
  <iframe
    src="https://www.loom.com/embed/47fad41c68ce49c8b0b1b1aa1909c154"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  ></iframe>
</div>
<br />

Traditionally, lenders look up a bank statement to verify that payments for an invoice were received, and that payment dates and amounts are accurate.

The Enhanced Invoices Report uses open banking and accounting data to automatically match a paid invoice to the bank transaction record that was used to pay it. This helps to verify a customer’s payment against the company's historical invoice.

See [Enhanced Invoices](https://docs.codat.io/assess/enhanced-invoices/overview) for more information.


## Sync for Expenses: Support for Microsoft Dynamics 365

Codat now supports the following features within the Dynamics integration: 

* Create an expense to represent a company's spend and upload the associated receipt for easier matching, even splitting these into individual line items for better visibility and reporting.

* Present only valid expense bank accounts and tax rates to your users to simplify their configuration process. 

* Use the tracking category objects to associate each expense with the applicable dimension in Microsoft Dynamics to add context to the spend and assist in transaction reports. 

This addition to Sync for Expenses means that you can now begin to offer this accounting platform coverage to your customers for the following supported expense [transaction types](https://docs.codat.io/sync-for-expenses/sync-process/expense-transactions#transaction-types): Payments, Refunds, Chargeback and Rewards.

For other suggestions for expense management with our Dynamics integration, please let us know on our [product roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/51-sync-for-expenses/submit-idea).

## Sync for Expenses: Updating expenses support for Xero

Currently if an SMB needs to alter an expense they would need to make changes to their expense management platform and their accounting package separately. This can be time consuming as making expense alterations are not uncommon tasks.   

This latest addition to Sync for Expenses means that your users can update their expenses without having to duplicate the work in Xero. 

Codat is now able to support users when they need to update the following  expense metadata in Xero: 
- Net expense amount
- Tax amount of the spend
- Tax rate reference associated with the spend
- Expense bank account reference
- Tracking category objects
- Description & notes

To update an attachment or receipt users will need to delete and then create a new dataset for the updated transaction attachment before syncing it to their accounting platform. 

This feature is currently only available for Xero. If you would like to see this functionality across other platforms please let us know [here](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/51-sync-for-expenses/submit-idea). 


