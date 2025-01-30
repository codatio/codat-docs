---
title: "Expenses FAQs"
sidebar_label: Solution help
description: "Frequently asked questions about Codat's Expenses solution"
displayed_sidebar: expenses
---

import Questions, { Question } from '@components/Questions';

<Questions>
	<Question
		question="Where can I see a roadmap for integration and feature support for Expenses?"
		answer={`
Codat does not currently publish a public solution roadmap. If you would like to learn more about upcoming solution releases, speak to your Codat contact.
		`}
	/>
	<Question
		question="How can I migrate our in-house integration to Codat?"
		answer={`
Our <a href="https://docs.codat.io/get-started/migration">token migration process</a> allows you to seamlessly migrate your customers' connections without them needing to reconnect. We offer self-service and managed migrations, so you can choose the option that suits your use case best. 
		`}
	/>
	<Question
		question="Why should I move our existing accounting integrations to Expenses?"
		answer={`
Moving your existing integrations to Expenses lets you leverage the following benefits:

<ol>

<li><b>Up-to-date mapping options</b></li>

<p>Every company has its own preference for representing an individual expense in its accounting software. With Codat, you can retrieve the account mapping and set up webhook notifications to notify you when your customer creates a new expense account or tracking category. This keeps the list of tracking categories, accounts, and tax rates used to map the expense up to date.</p>

<li><b>Standardization of expense data</b></li>

<p>Expenses standardizes transaction data using an opinionated model that is based on feedback from our customers and industry expertise. This means you don’t need to make decisions on how to handle validation differences between accounting software. Simply send transactions based on what they represent and let Codat handle the mapping to their best representation in the accounting software.</p>

<li><b>Multiple transaction support</b></li>

<p>Expenses handles the writing of multiple transactions in an array to make your interactions more efficient. You can retrieve the status of these transactions from the <a href="https://docs.codat.io/sync-for-expenses-api#/operations/get-sync-transaction">Get sync transaction</a> endpoint.</p>

<li><b>Enhanced developer experience</b></li>

<p>Our detailed documentation aimed at developers and a variety of <a href="/get-started/libraries">client libraries</a> in multiple languages mean you can get up and running with Expenses quickly.</p>

<li><b>Adjacency to Codat’s solution range</b></li>

<p>You can use Expenses alongside all Codat solutions. For example, if you are issuing credit cards, Codat's <a href="https://docs.codat.io/lending/overview" target="_blank">Lending</a> solution would allow you to determine the risk associated with the company that has the same <code>companyId</code> and API key.</p>

<p>Likewise, you can use our <code>billPayments</code> data type to retrieve a list of bills from your customer's accounting software and enable them to pay these and reconcile their payments.</p>

</ol>
		`}
	/>
	<Question
		question="What can we reuse from our existing Codat build for Expenses?"
		answer={`
<p>You can reuse the chart of accounts, tracking categories, and tax rates settings. However, we recommend using the <a href="https://docs.codat.io/sync-for-expenses-api#/operations/get-mapping-options">Mapping options</a> endpoint for expenses because of the transaction type support.</p>
<p>Authentication, company creation and connection linking journeys can be reused between builds. This is because the companies can use the same Id between Codat solutions.</p>
		`}
	/>
	<Question
		question="How do I reconnect a company?"
		answer={`
If a user disconnects, you can use a <a href="https://docs.codat.io/using-the-api/webhooks/event-types">webhook</a> and redirect your user to the <code>linkUrl</code> of the accounting connection to re-authenticate. If a company changes accounting software, it is better to remove the accounting connection completely and create a new one. 
		`}
	/>
	<Question
		question="Where can I find logo files for the accounting software supported by Expenses?"
		answer={`
If you want to use the accounting software logos in your user interface, you can get these via our <a href="https://docs.codat.io/platform-api#/operations/get-integrations-branding">Get branding</a> endpoint. 
		`}
	/>	
	<Question
		question="Can I use the Sandbox account to test a sync when implementing Expenses?"
		answer={`
<p>Expenses does not support Sandbox as a destination platform to sync transactions because it has been designed specifically for reading, not writing, data. We recommend signing up for a free QuickBooks or Xero developer account to test syncs, which will give you sandbox access as well.</p>
<p>For more information on how to set up your accounting software integration, take a look at the <a href="https://docs.codat.io/integrations/accounting/overview">integration-specific documentation</a>.</p>
		`}
	/>
	<Question
		question="How can I resync a failed transaction when I resolve the issue with the transaction?"
		answer={`
<p>Once you resolve the issue with the transaction, you can create a new dataset for that transaction Id. You can't resync the transaction with the same dataset because Codat checks the transaction metadata to avoid duplicates. If a transaction Id has a status of completed, it is not synced again.</p>
<p>The following error will appear if a transaction has been previously synced: <code>error: One or more transactions have previously been processed: {Transaction Id}</code>.</p>
		`}
	/>
	<Question
		question="How can I detect if an expense account has been deactivated?"
		answer={`
You can create a webhook consumer in the Codat portal to inform you when the chart of accounts has been changed. By querying the Chart of Accounts data type and using the <code>isDeleted</code> flag, you can identify which accounts have been deleted before a sync occurs. For more information, please refer to the <a href="https://docs.codat.io/using-the-api/webhooks/overview">documentation</a> on creating and updating webhook consumers.
		`}
	/>
	<Question
		question="Am I able to update an attachment when I have already synced the expense transaction?"
		answer={`
Codat writes attachments synchronously to the expense transactions. To update any of these documents, you need to remove the attachment directly from the accounting software. Next, you need to upload the correct document either directly to the accounting software or using Expenses. When using Expenses, you benefit from its support for multiple attachments. 
		`}
	/>  
	<Question
		question="How do you handle transactions in foreign currency?"
		answer={`
Expenses validates each expense transaction involving foreign currency. We ensure that the combination of participating currencies will be accepted by the target accounting software as a valid expense. You can read more about <a href="https://docs.codat.io/expenses/fx-management">expenses in foreign currency</a> and platform support for different transaction types. 
		`}
	/> 
	<Question
		question="What is the difference between effectiveTaxRate and totalTaxRate?"
		answer={`
<p>If a transaction has multiple tax components, each component may be calculated based on the original amount separately, and then added together.</p>
<p>Alternatively, primary tax can be calculated on the item cost, and another tax component is added on top of that amount.This is known as compounding. In this case, the effective tax rate is the rate that results in the total amount of tax with compounding when applied to the original amount.</p>
<p>The <code>totalTaxRate</code> is the total, not compounded, sum of the components of a tax rate. You can read more about this in our <a href="https://docs.codat.io/accounting-api#/schemas/TaxRate#tax-components">API documentation covering tax rates</a>.</p>
		`}
	/> 
	<Question
		question="Is the transaction Id unique to each connected company?"
		answer={`
Each transaction Id is unique to a client's company but they aren't unique across connections. In Codat, it's only possible to have a single accounting connection per company. If a company wants to swap their accounting software or would like to link to a different entity, we recommend creating a new company.
		`}
	/>
</Questions>

## Read next

* Try Expenses in our interactive [API reference](/sync-for-expenses-api#/)