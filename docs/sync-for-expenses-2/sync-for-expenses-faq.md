---
title: "Sync for Expenses FAQs"
sidebar_label: FAQs and troubleshooting
description: "Frequently asked questions about Sync for Expenses"
---

### Where can I see a roadmap for integration and feature support for Sync for Expenses? 
You can track our future plans and initiatives, and even suggest your own, on our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/51-sync-for-expenses). 

### Am I able to update an attachment (i.e. receipt) when I have already synced the expense transaction? 
Codat pushes attachments synchronously to the expense transactions. To update any of these documents, you need to remove the attachment from the accounting platform. Next, you need to upload the correct document either directly to the accounting platform or using Sync for Expenses. When using Sync for Expenses, you benefit from its support for multiple attachments.   

### How can I migrate our in-house integration to Codat?
Our [token migration process](https://docs.codat.io/get-started/migration) allows you to seamlessly migrate your customers' connections without them needing to reconnect. We offer self service and managed migrations, so you can choose the option that suits your use case best. 

### How should I handle transactions in a foreign currency?
Sync for Expenses only handles foreign currencies if each transaction is converted back to the currency of the bank account where the transaction is recorded. It does not support separate bank accounts for each foreign exchange currency. 

### How do I reconnect a company? 
If a user disconnects, you can use a [webhook](/introduction/webhooks/core-rules-types#company-data-connection-status-changed) and redirect your user to the `linkUrl` of the accounting connection to re-authenticate. If a company changes accounting platforms, it is better to remove the accounting connection completely and create a new one. 

### What is the difference between effectiveTaxRate and totalTaxRate?
If a transaction has multiple tax components, each component may be calculated based on the original amount separately, and then added together. 

Alternatively, primary tax can be calculated on the item cost, and another tax component is added on top of that amount.This is known as compounding. In this case, the effective tax rate is the rate that results in the total amount of tax with compounding when applied to the original amount. 

The `totalTaxRate` is the total, not compounded, sum of the components of a tax rate. Further details can be found in our [Codat docs](/accounting-api#/schemas/TaxRate#tax-components). 

### Where can I find logo files for the accounting platforms supported by Sync for Expenses?
If you want to use the accounting platform logos in your user interface, you can get these via our `GET /integrations` endpoint. 


### Why should I move our existing accounting integrations to Sync for Expenses?
Moving your existing integrations to Sync for Expenses lets you leverage the following benefits:

1. Up-to-date mapping options 

Every company has their own preference on representing an individual expense in their accounting software. You can retrieve the representation mapping from our [Mapping options endpoint](/sync-for-expenses-api#/operations/get-mapping-options) and set up webhook notifications that notify when your customer creates a new expense account or tracking category. This ensures the list of tracking categories, accounts, and tax rates used to map the expense is always up to date.

2. Standardization of expense data

The Sync for Expenses API is built to standardize data opinionated based on feedback from customers and industry expertise. This means you don’t need to make decisions on how to handle validation differences between accounting platforms. Simply send transactions based on what they represent and let Codat handle the mapping to their best representation in the accounting software.

3. Multiple transaction support

Sync for Expenses handles pushing of multiple transactions in an array to make your interactions more efficient. You can retrieve the status of these transactions from the [Transactions status endpoint](/sync-for-expenses-api#/operations/get-sync-transactions)

4. Enhanced developer experience

Our detailed documentation aimed at developers and a variety of SDKs mean you can get up and running with the Sync for Expense API quickly.

5. Adjacency to Codat’s product range

You can use Sync for Expenses alongside all Codat use cases or products.


For example, if you are issuing credit cards, using Codat’s Assess product would allow you to determine the risk associated with the company that has the same `companyId` and API key.

Likewise, you can use `billPayments` to retrieve a list of bills from your customer’s accounting software and enable them to pay these and reconcile their payments.

### Can I use the Sandbox account to test a sync when implementing Sync for Expenses?
Currently we do not support Sandbox as a destination platform when establishing an accounting connection. This is because it is hard to see data which has been pushed and our Codat sandbox has been designed for pulling data. We recommend signing up to a free QuickBooks/Xero developer account to test syncs, which will give you sandbox access as well.

For more information on how to set up your accounting platform integration take a look at the [following documentation](https://docs.codat.io/integrations/accounting/overview).

### Is the transaction ID unique to each connected company? 
Each transaction id is unique to a client's company but they aren't unique across connections. We currently only support a single accounting connection per company. If a company wants to swap their accounting software or would like to link to a different entity we recommend creating a new company. 

### What can we reuse from the Codat Bill Pay build for Sync for Expenses?
You can reuse the chart of accounts, tracking categories, and tax rates from our Accounting API. However, we recommend using the [mappingOptions](https://docs.codat.io/sync-for-expenses-api#/operations/get-mapping-options) endpoint for expenses because of the transaction type support. 
Authentication, company creation and the Accounting connection linking journeys can be reused between builds. This is because the companies can use the same Id between Codat products. 

### How can I resync a transaction which has previously failed once I resolve the issue with the transaction?
Once you resolve the issue with the transaction, you can create a new dataset for that transaction Id. You are unable to resync the transaction with the same dataset Id as the other successfully synced transactions will trigger the validation for preventing duplicates. To avoid duplicates, Codat checks the transaction metadata to see if a transaction Id has a status of completed. If it does, it is not synced again. 

The following error will appear if a transaction has been previously synced: 

```
error: One or more transactions have previously been processed: 46dd5a8a-d74f-46f0-adf8-4f74ffe5e7c8
```

### How can I detect if an expense account has been deactivated?
You can create a webhook in the Codat portal to inform you when the Chart of Accounts has been changed. By querying the Chart of Accounts and using the `isDeleted` flag, you can identify which accounts have been deleted before a sync occurs. 
For more information, please refer to the [documentation](https://docs.codat.io/introduction/webhooks/core-rules-types) on creating and updating rules.
