---

title: "Implementing a Mapping Page"
description: "How to push data to inconsistent Chart of Accounts across your user base"
sidebar_label: "Implementing a Mapping Page"

---

## When would you need a mapping page?

If you’re pushing any data using our accounting API or creating a solution with one of the following use cases:

- bill pay

- payroll

- expense management solution

- payments 

This guide is also useful if you’re integrating to Xero and want to implement lending write back.


## Why?

Whilst accounting platforms offer a default Chart of Accounts, with pre-defined system accounts to match accounting best practices, your customers have the ability to rename, renumber and create new accounts.  Mapping the correct accounts for your use case whilst onboarding means you use the correct account specific to your customer's Chart of Accounts and avoids wasting time manually looking through inconsistent accounts across your customer base.

## What should you consider for your implementation?

These requirements should be factored into your solution design from the start of Codat implementation, even if Xero is not the first integration they want to go live with, to avoid wasting developer time rebuilding features later on.

It’s best to implement this mapping page as part of your customer onboarding.  As soon as the first fetch of data from the accounting platform has completed, you can present your suggested mappings or ask your customers to select the appropriate account in a mapping/config page.  

You’ll need front end support to create the page and then use the Codat API to:

1. Enable the Chart of Accounts data type either in the Codat portal > Settings > Integrations > Data Types and check ‘Fetch on First Link’ or alternatively use the API using this guide

2. Enable [the 'Dataset data changed' webhook](/docs/introduction/webhooks/core-rules-types.md) to listen to change in underlying Accounts data 

3. On receipt of an alert, queue a sync using [GET/Accounts](/https://docs.codat.io/accounting-api#/operations/list-accounts)

4. Use the response from the [GET/Accounts](/https://docs.codat.io/accounting-api#/operations/list-accounts) data type to display these fields in a drop down box for the customer to select from:

        account.name

        account.id

5. Query the response to either
- display only active, relevant account type needed for your mapping page e.g. `type=income` and `status=active`

```
/companies/{{companyId}}/data/accounts?query=status=active&&type=income
```

-  set defaults for customers, for example, if you are mapping sales revenue, check to see if a “sales” account exists and present it as a suggested account for the customer to confirm   

```
/companies/{{companyId}}/data/accounts?query=name~sales
```

- for use cases where you’re pushing invoices or payments to Xero specifically, ensure that your customer only has the ability to select a bank account which also as the ‘enable payments to account’ option selected - you can do this by calling the [GET/Accounts](/https://docs.codat.io/accounting-api#/operations/list-accounts) endpoint and adding the query `isBankAccount=true`

```
/companies/{{companyId}}/data/accounts?query=isBankAccount=true
```
 
6.  If no relevant account exists, you can offer your customer to create one using [POST/Accounts](/https://docs.codat.io/accounting-api#/operations/create-account) - this will involve UI to support additional steps such as user populating the required fields, depending on the accounting platform 

 Also, use our Get model endpoints - [Push/Options](/https://docs.codat.io/codat-api#/operations/get-create-update-model-options-by-data-type)- to understand the required fields by platform.

Once created and your mapping/config page published, you’ll need to continually validate account mappings.  Customers may continue to modify their chart of accounts after they’ve set up your integration. A best practice is to validate the customer's account mappings prior to performing any push request:

Enable [the 'Dataset data changed' webhook](/docs/introduction/webhooks/core-rules-types.md) to listen to change in underlying Accounts data.  If any accounts are missing, you’ll want to notify the customer and guide them back to your configuration screen. Once there, they can fix any issues.

 

 

## Examples

![SampleMappingPage](/img/other-guides/codatmappingpageexample.png)



:::

##  Additional configuration best practices for Xero

### Manage your Integration UX
If you have an SMB-facing app, ensure you implement a setup page that allows customers to connect to their accounting software and manage their settings for the integration. Ideally this should be made possible without assistance from your support or onboarding team.

- Display the name of the connected business in your UX as it is displayed in the accounting software

- Display the current status of the accounting software connection. If disconnected, provide a button to connect. 

- Include a button to disconnect the integration. 

- Handle a disconnection from the accounting software side. If a customer disconnects your app from their accounting software, best practice is to:

    1. Create an alert in your platform to ensure the user is aware that their accounting software is not disconnected

    2. Guide the user to reconnect

- Implement a disconnection process for customers who are off-boarding from your product to ensure you aren’t accessing data beyond what is necessary

- Let users know if an error has taken place in; through error logs or error messages/alerts
 

[More Xero specific best practices are available here](/https://developer.xero.com/documentation/guides/how-to-guides/integration-best-practices/)
