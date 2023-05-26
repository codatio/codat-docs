---
title: "Test your Codat solution"
description: "Review our suggestions, best practices, and strategies for testing your Codat build"
---

We advise you always test your build into Codat's endpoints during the implementation and before go-live. You should also validate that your live solution is performing as expected, for example, when enabling a deprecation early. 

## Using a test instance

We suggest you create an additional instance of Codat to use for testing purposes. On our **Free** plan, simply register for another account to use as your test instance. 

When you upgrade to our **Start-up** plan, we automatically clone your existing client to create a test instance for you. We copy the following details and settings: 

* All users with access to the existing client
* Client settings and feature overrides
* Enabled products and deprecations
* Integration-specific settings and credentials
* Client sync settings
* Webhook rules and settings
* Auth flow settings

We work directly with our **Enterprise** clients to arrange test instance creation. 

Start-up and Enterprise users can switch between the production client and the test instance by using the client dropdown in the [Codat Portal](https://app.codat.io/). 

![](/img/introduction/0026-client-selection.png)

### Pitfalls

1. Your test client will have a separate set of API keys, and you may need to maintain different credentials for the integrations in the test instance. 

2. To see the new client once it's been created, you will need to reauthenticate. Log out and lock back in if you are using Portal, or get a new token if you are using our APIs.

3. Test clients are limited to 50 active connected companies and are not included in the billing. 

## Testing strategy

When planning a testing strategy and scope for your implementation, consider including the following approaches:

1. Back-end integration testing

   Once you complete the initial API build to Codat's endpoints, you need to ensure the integration is working as expected. We recommend performing validation using sandbox data (this can be Codat, Quickbooks Online, or Xero sandbox data). 

2. Live SMB testing

   Involve one of your real SMB customers to perform authentication via your front-end digital application flow. Then, verify that the data syncs between the relevant platform and Codat and triggers a webhook into your system to start the data pull.

## Testing the integrations

When testing your integrations throughout the implementation, it is important to check you can authorize and complete the connections before you proceed to live SMB testing.

We recommend using **Codat Sandbox** integrations that contain sample data generated as a tool for developer testing. When you link to these integrations, you can choose from a number of different datasets providing varying levels of detail. 

You can also test with Xero and QuickBooks Online, both of who offer demo or sandbox companies equipped with sample data. Other integrations may require signing up to multiple free trials in order to test the connection, or provide no sample data.

:::info Testing in production instance
In your production instance, active companies that are connected only to Codat Sandbox or QuickBooks Online Sandbox are excluded from billing.
:::

### Overview of integrations' test account

| Platform 	| Integration type 	| Account type 	| Notes 	|
|---	|---	|---	|---	|
| Codat Sandbox 	| Sandbox integration 	| Demo company 	| Active companies connected only to Codat Sandbox are excluded from billing in your production instance. 	|
| [ClearBooks](https://www.clearbooks.co.uk/) 	| Live integration 	| Free trial 	|  	|
| [Exact](https://www.exact.com/try) 	| Live integration 	| Free trial 	|  	|
| [FreeAgent](https://signup.sandbox.freeagent.com/signup) 	| Live integration 	| Free trial 	| Temporary free account at the [FreeAgent   Sandbox](https://dev.freeagent.com/docs/quick_start). 	|
| [FreshBooks](https://www.freshbooks.com/blog/freshbooks-trial) 	| Live integration 	| Free trial 	|  	|
| [KashFlow](https://www.kashflow.com/support/kb/developer-account/) 	| Live integration 	| Free trial 	| Contact KashFlow support to request a test developer account. 	|
| [MYOB](https://developer.myob.com/api/myob-business-api/api-overview/getting-started/) 	| Live integration 	| Demo company 	| Codat only supports data hosted online. 	|
| [Microsoft 365 Dynamics Business   Central](https://learn.microsoft.com/en-gb/dynamics365/business-central/admin-sandbox-environments) 	| Live integration 	| Sandbox environment 	|  	|
| [QuickBooks   Desktop](https://quickbooks.intuit.com/desktop/enterprise/contact/trial-download/?auto=true) 	| Live integration 	| Free trial 	|  	|
| [QuickBooks   Online](https://developer.intuit.com/app/developer/qbo/docs/develop/sandboxes/manage-your-sandboxes) 	| Sandbox integration 	| Demo company 	| Active companies connected only to QuickBooks Online Sandbox are excluded from billing in your production instance. 	|
| [Sage 50 and Business   Cloud](https://www.sage.com/en-gb/products/free-trials/) 	| Live integration 	| Free trial 	| Sage also provides a [Postman   collection](https://developer.sage.com/accounting/quick-start/preparing-to-create-test-data/) with pre-filled test data. 	|
| [Pandle](https://my.pandle.com/users/sign_up) 	| Live integration 	| Free account 	|  	|
| [Wave](https://my.waveapps.com/register/) 	| Live integration 	| Free account 	|  	|
| [Xero](https://central.xero.com/s/article/Use-the-demo-company#Web) 	| Live integration 	| Demo company 	| Demo does not include automatic bank feeds and the ability to invite   other users. You are able to add your own data, but the demo company resets   itself after 28 days. 	|
| [Zoho Books](https://www.zoho.com/subscriptions/api/v1/introduction/#organization-id) 	| Live integration 	| Test company 	| When setting up a test organisation, you can choose to import or create   test data. 	|
| [Plaid](https://plaid.com/docs/sandbox/) 	| Live integration 	| Sandbox environment 	| Initial setup for Plaid needs to be complete to gain access to the   sandbox environment with demo data. 	|

---
## Read next
* Review our [plans and pricing](https://www.codat.io/plans/)