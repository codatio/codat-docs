---
title: "Step 2: Configure Sync for Expenses"
hidden: true
createdAt: "2022-09-30T18:36:49.005Z"
updatedAt: "2022-09-30T18:37:11.298Z"
---

The configuration endpoint enables you to set up how your customers’ expenses will be pushed.

Using this endpoint you will be able to:

- Enable / disable the integration
- Determine the frequency and time that your customers syncs will run (you can also trigger syncs manually)

## Bank Feeds (syncAsBankFeeds)

- Enable expenseTransactions to be sync’d as bank feeds.
- Choose which bank account (selectedBankAccountId) purchases will be made from, Codat provides a list of the company’s available options in the bankAccountOptions array.

## Bank Feeds (syncAsExpenses)

- Enable expenseReconciliations to be sync’d as bank feeds.
- Choose which Supplier (selectedSupplierId) purchases will be associated to, Codat provides a list of the available suppliers in the supplierOptions array.
- Choose which Customer (selectedCustomerId) sales or revenue-generating transactions, such as interest, will be associated to.
- Codat provides a list of the customer options in the customerOptions array.
- Choose which bank account (selectedBankAccountId) purchases will be made from. Codat provides a list of the SMB’s available options in the bankAccountOptions array.

:::caution

There are two ways to handle FX transactions with Sync for Expenses

- Each FX has its own bank account
- Each transaction is converted back to the currency of the bank account

Using our Configuration endpoint, you can first make a GET request, store the response body and then update it with your customers preferences and make a POST request to save the updated config.
