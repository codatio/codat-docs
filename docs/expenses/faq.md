---
title: "Sync for Expenses FAQs"
sidebar_label: FAQs
description: "Frequently asked questions about Sync for Expenses"
displayed_sidebar: expenses
---

import Questions, { Question } from '@components/global/Questions';

## Product overview

<Questions>
	<Question
		question="Where can I see a roadmap for integration and feature support for Sync for Expenses?"
		answer={`
Codat does not currently publish a public product roadmap. If you would like to learn more about upcoming product releases, speak to your account manager.
		`}
	/>
	<Question
		question="How can I migrate our in-house integration to Codat?"
		answer={`
Our <a href="https://docs.codat.io/get-started/migration">token migration process</a> allows you to seamlessly migrate your customers' connections without them needing to reconnect. We offer self-service and managed migrations, so you can choose the option that suits your use case best. 
		`}
	/>
	<Question
		question="Why should I move our existing accounting integrations to Sync for Expenses?"
		answer={`
Moving your existing integrations to Sync for Expenses lets you leverage the following benefits:

<ol>

<li>Up-to-date mapping options</li>

<p>Every company has its own preference for representing an individual expense in its accounting software. You can retrieve the representation mapping from our <a href="https://docs.codat.io/sync-for-expenses-api#/operations/get-mapping-options">Mapping options endpoint</a> and set up webhook notifications that notify you when your customer creates a new expense account or tracking category. This ensures the list of tracking categories, accounts, and tax rates used to map the expense is always up to date.</p>

<li>Standardization of expense data</li>

<p>Sync for Expenses is built to standardize transaction data using an opinionated model that is based on feedback from customers and industry expertise. This means you don’t need to make decisions on how to handle validation differences between accounting platforms. Simply send transactions based on what they represent and let Codat handle the mapping to their best representation in the accounting software.</p>

<li>Multiple transaction support</li>

<p>Sync for Expenses handles the pushing of multiple transactions in an array to make your interactions more efficient. You can retrieve the status of these transactions from the <a href="https://docs.codat.io/sync-for-expenses-api#/operations/get-sync-transactions">Transactions status endpoint</a>.</p>

<li>Enhanced developer experience</li>

<p>Our detailed documentation aimed at developers and a variety of SDKs mean you can get up and running with the Sync for Expense API quickly.</p>

<li>Adjacency to Codat’s product range</li>

<p>You can use Sync for Expenses alongside all Codat use cases or products.

For example, if you are issuing credit cards, using Codat’s <a href="https://docs.codat.io/lending/overview">Lending API</a> product would allow you to determine the risk associated with the company that has the same `companyId` and API key.

Likewise, you can use `billPayments` to retrieve a list of bills from your customer’s accounting software and enable them to pay these and reconcile their payments.</p>

</ol>
		`}
	/>
	<Question
		question="What can we reuse from the Codat Bill Pay build for Sync for Expenses?"
		answer={`
You can reuse the chart of accounts, tracking categories, and tax rates from our Accounting API. However, we recommend using the <a href="https://docs.codat.io/sync-for-expenses-api#/operations/get-mapping-options">Mapping options endpoint</a> endpoint for expenses because of the transaction type support. 

Authentication, company creation and the Accounting connection linking journeys can be reused between builds. This is because the companies can use the same Id between Codat products.
		`}
	/>
</Questions>

## Configuration and setup

<Questions>
	<Question
		question="How do I reconnect a company?"
		answer={`
If a user disconnects, you can use a <a href="https://docs.codat.io/using-the-api/webhooks/core-rules-types#company-data-connection-status-changed">webhook</a> and redirect your user to the `linkUrl` of the accounting connection to re-authenticate. If a company changes accounting platforms, it is better to remove the accounting connection completely and create a new one. 
		`}
	/>
	<Question
		question="Where can I find logo files for the accounting platforms supported by Sync for Expenses?"
		answer={`
If you want to use the accounting platform logos in your user interface, you can get these via our `GET /integrations` endpoint. 
		`}
	/>	
	<Question
		question="Can I use the Sandbox account to test a sync when implementing Sync for Expenses?"
		answer={`
Currently, we do not support Sandbox as a destination platform when establishing an accounting connection. This is because it is hard to see data that has been pushed and our Codat sandbox has been designed for pulling data. We recommend signing up for a free QuickBooks or Xero developer account to test syncs, which will give you sandbox access as well.

For more information on how to set up your accounting platform integration take a look at the <a href="https://docs.codat.io/integrations/accounting/overview">following documentation</a>. 
		`}
	/>	
	<Question
		question="Can I use the Sandbox account to test a sync when implementing Sync for Expenses?"
		answer={`
Currently, we do not support Sandbox as a destination platform when establishing an accounting connection. This is because it is hard to see data that has been pushed and our Codat sandbox has been designed for pulling data. We recommend signing up for a free QuickBooks or Xero developer account to test syncs, which will give you sandbox access as well.

For more information on how to set up your accounting platform integration take a look at the <a href="https://docs.codat.io/integrations/accounting/overview">following documentation</a>. 
		`}
	/>	
</Questions>

## Syncing expenses

<Questions>
	<Question
		question="How can I resync a transaction which has previously failed once I resolve the issue with the transaction?"
		answer={`
Once you resolve the issue with the transaction, you can create a new dataset for that transaction Id. You are unable to resync the transaction with the same dataset Id as the other successfully synced transactions will trigger the validation for preventing duplicates. To avoid duplicates, Codat checks the transaction metadata to see if a transaction Id has a status of completed. If it does, it is not synced again. 

The following error will appear if a transaction has been previously synced: 

```
error: One or more transactions have previously been processed: 46dd5a8a-d74f-46f0-adf8-4f74ffe5e7c8
``` 
		`}
	/>
	<Question
		question="How can I detect if an expense account has been deactivated?"
		answer={`
You can create a webhook in the Codat portal to inform you when the Chart of Accounts has been changed. By querying the Chart of Accounts and using the `isDeleted` flag, you can identify which accounts have been deleted before a sync occurs. For more information, please refer to the <a href="https://docs.codat.io/using-the-api/webhooks/core-rules-types">documentation</a> on creating and updating rules.
		`}
	/>
</Questions>

## Expense transactions

<Questions>
	<Question
		question="Am I able to update an attachment (i.e. receipt) when I have already synced the expense transaction?"
		answer={`
Codat pushes attachments synchronously to the expense transactions. To update any of these documents, you need to remove the attachment from the accounting platform. Next, you need to upload the correct document either directly to the accounting platform or using Sync for Expenses. When using Sync for Expenses, you benefit from its support for multiple attachments. 
		`}
	/>  
	<Question
		question="How should I handle transactions in a foreign currency?"
		answer={`
For multicurrency transactions, you have to consider the currency of the transaction, the currency of the card, and the base currency of the company in the accounting platform. Depending on the platform, only specific multicurrency scenarios may be supported. Codat provides built-in validations that protect against multicurrency scenarios that aren't supported by specific accounting platforms. 

If the currency of the transaction or the card differs from the base currency, you must specify the exchange rate that will be used to convert the amount into the base currency. Indicate it in the `currencyRate` field. This is mandatory for all accounting platforms because all transactions must be expressed in the base currency for accounting and financial reporting purposes.

It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and the transaction currency (supplier currency) is GBP, then the bank account used must be USD or GBP. 
		`}
	/> 
	<Question
		question="What is the difference between effectiveTaxRate and totalTaxRate?"
		answer={`
If a transaction has multiple tax components, each component may be calculated based on the original amount separately, and then added together. 

Alternatively, primary tax can be calculated on the item cost, and another tax component is added on top of that amount.This is known as compounding. In this case, the effective tax rate is the rate that results in the total amount of tax with compounding when applied to the original amount. 

The `totalTaxRate` is the total, not compounded, sum of the components of a tax rate. Further details can be found in our <a href="https://docs.codat.ioaccounting-api#/schemas/TaxRate#tax-components">Codat docs</a>.
		`}
	/> 
	<Question
		question="Is the transaction ID unique to each connected company? "
		answer={`
Each transaction id is unique to a client's company but they aren't unique across connections. We currently only support a single accounting connection per company. If a company wants to swap their accounting software or would like to link to a different entity we recommend creating a new company.
		`}
	/>
</Questions>