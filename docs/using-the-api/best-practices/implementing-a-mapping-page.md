---
title: "Implementing an account mapping user interface"
description: "Tips and advice on managing inconsistent accounts across your user base"
sidebar_label: "Mapping interface"
---

Accounting platforms that your customers use normally offer them a default set of accounts (also known as chart of accounts), pre-defined to match accounting best practices. Your customers then have the ability to rename and renumber these accounts, or create new ones, to match their business needs. 

This results in discrepancies of the accounts list across your customer base. To manage that and use accounts specific to your customers, provide your customers with an **account mapping user interface**. 

An account mapping page is particularly helpful if you are:
* Creating or updating data with our Accounting API.
* Creating a solution for Bill pay, Payroll, Expense management or Payments use cases.
* Implementing lending writeback in your Xero integration.

## Implementation guidance

First, obtain front-end support to create the account mapping page and include it in your customer onboarding. When the initial accounting data sync is complete, present the suggested mapping to your customers and ask them to review it and change it where appropriate or perform the mapping themselves.

Here is a simple example of an account mapping user interface implemented using dropdowns.

![SampleMappingPage](/img/other-guides/codatmappingpageexample.png)

### Using the API for mapping

Build your account mapping process to use the Codat API as follows:

1. Enable the Chart of Accounts data type and set it to fetch on first link. Navigate to **Settings > Integrations > Data types** to manage [Data type settings](https://app.codat.io/settings/data-types) in the Portal or [use the API](https://docs.codat.io/platform-api#/operations/update-profile-syncSettings) instead. 

    You can also read more about [data type settings](/core-concepts/data-type-settings).

2. Configure the [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed) webhook to listen for changes in the underlying data for the `chartOfAccounts` data type. You will receive a notification when the data sync completes successfully. 

3. Once notified by the webhook, call our [List accounts](/accounting-api#/operations/list-accounts) endpoint and use the response to display `account.name` and `account.id` in a dropdown box for your customer to choose the correct mapping. You can also query the response to simplify the mapping experience for your customer:  

    * Display only active accounts of relevant account type needed for your mapping page, such as `type=income` and `status=active`.  
    ```
    /companies/{{companyId}}/data/accounts?query=status%3dactive&&type%3dincome
    ```
    * Set defaults for customers. For example, if you are mapping sales revenue, check if a “Sales” account exists and present it as a suggestion.  
    ```
    /companies/{{companyId}}/data/accounts?query=name~sales
    ```
    * If creating or updating invoices or payments in Xero, allow your customer only to select a bank account that has the 'Enable payments to account' checkbox ticked.  
    ```
    /companies/{{companyId}}/data/accounts?query=isBankAccount%3dtrue
    ```

:::tip Missing accounts

If a new account is required for correct mapping, you can offer your customer to create one. You will need a user interface that supports additional steps, such as populating fields required for account creation by the specific accounting platform. 

Read our guidance on [creating, updating, and deleting data](/using-the-api/push) with Codat.
:::

### Mapping validation

Once the initial mapping is complete, you need to validate account mappings periodically because customers may continue changing their list of accounts after they have set up your integration. 

We recommend validating the mapping prior to performing any create or update operation. Use the [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed) webhook you previously set up that informs you of changes in the `chartOfAccounts` data type. 

If new accounts are present that have not been mapped yet, notify your customer and guide them back to the mapping page.