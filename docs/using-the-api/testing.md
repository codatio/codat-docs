---
title: "Test your Codat solution"
sidebar_label: "Test your solution"
description: "Review our suggestions, best practices, and strategies for testing your Codat build"
---

Testing is a key component of any software development process, both during the implementation and after go-live if changes are made to the solution. Here is what Codat recomments for testing your Codat build.

## Using a test instance

We recommend you use an additional instance of Codat for testing purposes. We work directly with our **Full access** clients to arrange test instance creation and copy the following details and settings: 

* All users with access to the existing client
* Client settings and feature overrides
* Enabled solutions and deprecations
* Integration-specific settings and credentials
* Client sync settings
* Webhook consumer endpoints and settings
* Auth flow settings

Users can switch between the production client and the test client by using the client dropdown in the [Codat Portal](https://app.codat.io/). 

### Tips and pitfalls

1. Your test client will have a separate set of API keys, and you may need to maintain different credentials for the integrations in the test instance. 

2. To see the new client once it's been created, you will need to reauthenticate. Log out and log back in if you are using Portal, or get a new token if you are using our APIs.

3. Test clients are limited to 50 active connected companies and are not included in the billing. 

## Testing strategy

When planning a testing strategy and scope for your implementation, consider including the following approaches:

1. Back-end integration testing

   Once you complete the initial API build to Codat's endpoints, you need to ensure the integration is working as expected. We recommend performing the validation using sandbox data. 

2. Live SMB testing

   Involve one of your real SMB customers to perform authentication via your front-end digital application flow. Then, verify that the data syncs between the relevant platform and Codat and triggers a webhook into your system to start the data read.

## Back-end integration testing

When testing your integrations throughout the implementation, it is important to check you can authorize and complete the connections before you proceed to live SMB testing.

We recommend using **Codat Sandbox** integrations that contain sample data generated as a tool for developer testing. When you link to these integrations, you can choose from a number of different datasets that provide varying levels of detail. These integrations are enabled by default and do not require any credentials to authorize.

You can also sign up and test with **Xero** and **QuickBooks Online**, both of which offer demo or sandbox companies equipped with sample data. Other integrations also provide free trials in order to test the connections, but may not provide sample data.

### Overview of integrations' test accounts

| Platform 	| Integration type 	| Account type 	| Notes 	|
|---	|---	|---	|---	|
| Codat Sandbox 	| Sandbox integration 	| Demo company 	| Active companies connected only to Codat Sandbox are excluded from billing in your production instance. <br/> [Read more](/integrations/accounting/sandbox/accounting-sandbox) about testing this integration.	|
| [Clear Books](https://www.clearbooks.co.uk/) 	| Live integration 	| Free trial 	|  	|
| [Exact NL](https://www.exact.com/nl/producten/accountancy/boekhouden/probeer) 	| Live integration 	| Free trial 	|  	|
| [FreeAgent](https://signup.sandbox.freeagent.com/signup) 	| Live integration 	| Free trial 	| Temporary free account at the [FreeAgent   Sandbox](https://dev.freeagent.com/docs/quick_start). 	|
| [FreshBooks](https://www.freshbooks.com/blog/freshbooks-trial) 	| Live integration 	| Free trial 	|  	|
| [KashFlow](https://www.kashflow.com/support/kb/developer-account/) 	| Live integration 	| Free trial 	| Contact KashFlow support to request a test developer account. 	|
| [MYOB](https://developer.myob.com/api/myob-business-api/api-overview/getting-started/) 	| Live integration 	| Demo company 	| Codat only supports data hosted online. When setting up the account, you will receive instructions on loading demo files.	|
| [Microsoft 365 Dynamics Business   Central](https://learn.microsoft.com/en-gb/dynamics365/business-central/admin-sandbox-environments) 	| Live integration 	| Sandbox environment 	| [Read more](/integrations/accounting/dynamics365businesscentral/test-your-dynamics-365-business-central-integration) about testing this integration. 	|
| [QuickBooks   Desktop](https://quickbooks.intuit.com/desktop/enterprise/contact/trial-download/?auto=true) 	| Live integration 	| Free trial 	|  	|
| [QuickBooks   Online](https://developer.intuit.com/app/developer/qbo/docs/develop/sandboxes/manage-your-sandboxes) 	| Sandbox integration 	| Demo company 	| Active companies connected only to QuickBooks Online Sandbox are excluded from billing in your production instance. <br/> [Read more](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#create-a-quickbooks-online-app-configured-for-sandbox) about testing this integration.	|
| [Sage 50 and Business   Cloud](https://www.sage.com/en-gb/products/free-trials/) 	| Live integration 	| Free trial 	| Sage also provides a [Postman   collection](https://developer.sage.com/accounting/quick-start/preparing-to-create-test-data/) with pre-filled test data. 	|
| [Pandle](https://my.pandle.com/users/sign_up) 	| Live integration 	| Free account 	|  	|
| [Wave](https://my.waveapps.com/register/) 	| Live integration 	| Free account 	|  	|
| [Xero](https://central.xero.com/s/article/Use-the-demo-company#Web) 	| Live integration 	| Demo company 	| Demo does not include automatic bank feeds and the ability to invite   other users. You are able to add your own data, but the demo company resets   itself after 28 days. <br/> [Read more](/integrations/accounting/xero/accounting-xero-test) about testing this integration.	|
| [Zoho Books](https://www.zoho.com/books/signup/) 	| Live integration 	| Test company 	| When setting up a test organisation, you can choose to import or create   test data. <br/> [Read more](/integrations/accounting/zoho-books/accounting-zohobooks-setup) about testing this integration.	|
| [Plaid](https://plaid.com/docs/sandbox/) 	| Live integration 	| Sandbox environment 	| Initial setup for Plaid needs to be complete to gain access to the   sandbox environment with demo data. <br/> [Read more](/integrations/banking/plaid/test-your-plaid-integration) about testing this integration.	|

---
## Read next
* Review our [plans and pricing](https://www.codat.io/plans/)
