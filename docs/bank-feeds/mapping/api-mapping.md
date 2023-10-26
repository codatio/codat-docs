---
title: "Build your own mapping interface"
description: "For a more integrated user experience, build your own interface using our API's account mapping endpoints"
sidebar_label: Map via API
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {IntegrationsList} from '@components/global/Integrations'
import {bankfeedsInternalMappingIntegrations} from '@components/global/Integrations/integrations'

You can enable your users to map their accounts directly within your own application by using the account mapping endpoints of our API. These are the same endpoints that our [pre-built interface](/bank-feeds/mapping/codat-ui) uses. When building, make sure to check all partner requirements to maintain compliance of your app.

## List account options

In preparation, set up your [redirect parameters](/auth-flow/customize/set-up-redirects) to refer to the mapping page of your application. Then, direct your customer to the `linkUrl` returned in the [Create a connection](/bank-feeds/create-account#create-a-connection) response. After they authorize your access to their accounting software, they'll be guided your application.

Use the [List bank feed account mappings](/bank-feeds-api#/operations/get-bank-account-mapping) endpoint to retrieve a list of valid target accounts available to map the company's source account and display these to your user. 

These options are filtered based on the currency and the type of the source account. For example, if the source account is a credit card in a USD currency, the endpoint will only return USD credit accounts as options.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Request

```http
GET /companies/{companyId}/connections/{connectionId}/bankFeedAccounts/mapping
```
    
#### Response

Example Xero mapping response body:

```json
  [
	{
	"sourceAccountId": "39aaec5d-f3c1-4d15-a8d8-73c27d7fdef8",
	"targetAccountId": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
	"feedStartDate": "2023-09-12T00:00:00",
	"status": "connected",
	"targetAccountOptions": [
		{
			"name": "SavingsBankPro",
			"id": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
			"accountNumber": "4243"
		},
		{
			"name": "WaveCrestFinance",
			"id": "57ab0173-3381-4be8-afd5-dfa48b3b0bb6",
			"accountNumber": "77"
		},
		{
			"name": "ZenithBanking",
			"id": "195e6138-79ac-4ad4-8724-b7c9a1f90f9f",
			"accountNumber": "1234"
		},
		{
			"name": "CosmicCreditUnion",
			"id": "2254eaa8-ddf0-4b2f-ba52-efb3bf7f338f",
			"accountNumber": "5670"
		},
		{
			"name": "VertexCapital",
			"id": "0d62ba1a-b62a-4d4e-b3a2-2fccb0345523",
			"accountNumber": "5678"
		},
		{
			"name": "VertexCapital#Gold",
			"id": "aa635648-99cf-4ab0-bfba-2a1128f7b521",
			"accountNumber": "5679"
		}
	],
	"sourceAccountName": "source-account-1",
	"sourceAccountNumber": "4243",
	"sourceBalance": 100,
	"sourceCurrency": "GBP",
	"targetAccountName": "SavingsBankPro",
	"targetAccountNumber": "4243"
    },
	{
	"sourceAccountId": "e7569bca-85a1-4b9f-9006-219a486e9cc3",
	"status": "pending",
	"targetAccountOptions": [
		{
			"name": "SavingsBankPro",
			"id": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
			"accountNumber": "4243"
		},
		{
			"name": "WaveCrestFinance",
			"id": "57ab0173-3381-4be8-afd5-dfa48b3b0bb6",
			"accountNumber": "77"
		},
		{
			"name": "ZenithBanking",
			"id": "195e6138-79ac-4ad4-8724-b7c9a1f90f9f",
			"accountNumber": "1234"
		},
		{
			"name": "CosmicCreditUnion",
			"id": "2254eaa8-ddf0-4b2f-ba52-efb3bf7f338f",
			"accountNumber": "5670"
		},
		{
			"name": "VertexCapital",
			"id": "0d62ba1a-b62a-4d4e-b3a2-2fccb0345523",
			"accountNumber": "5678"
		},
		{
			"name": "VertexCapital#Gold",
			"id": "aa635648-99cf-4ab0-bfba-2a1128f7b521",
			"accountNumber": "5679"
		}
		],
	"sourceAccountName": "source-account-2",
	"sourceAccountNumber": "4243",
	"sourceBalance": 100,
	"sourceCurrency": "GBP"
	}
]
```
</TabItem >

</Tabs>

## Save account mapping

Once your user indicates the desired source and target account pair within your application, use our [Create bank feed account mapping](/bank-feeds-api#/operations/create-bank-account-mapping) endpoint to save the mapping. 

:::caution Mapping multiple accounts
You can only save the mapping for one account at a time. If your user needs to map multiple accounts, save the mappings in separate requests to our API.
:::

### Map to a new account

If your user wants to use a new target account to reconcile bank transactions, you can achieve this by omitting the `targetAccountId` parameter while saving the mapping.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Request

```json
POST /companies/{companyId}/connections/{connectionId}/bankFeedAccounts/mapping

{
    "sourceAccountId": "source-account-id",
    "feedStartDate": "2023-01-01T00:00:21.470Z"
}
```
#### Response

```json
{
	"sourceAccountId": "e58c281d-e8fd-48eb-a07f-ea7eef9b96f3",
    "targetAccountId": null,
    "status": "connecting"
}
```
</TabItem >

</Tabs>

### Map to an existing account

If your user chooses an existing target account to reconcile bank transactions, populate the `targetAccountId` parameter while saving the mapping.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Request

```json
POST /companies/{companyId}/connections/{connectionId}/bankFeedAccounts/mapping

{
    "sourceAccountId": "source-account-id",
    "targetAccountId": "2efba41e-1edf-49dc-8e14-b5eaed792f07",
    "feedStartDate": "2023-01-01T00:00:21.470Z"
}
```
#### Response

```json
{
    "sourceAccountId": "e58c281d-e8fd-48eb-a07f-ea7eef9b96f3",
    "targetAccountId": "2efba41e-1edf-49dc-8e14-b5eaed792f07",
    "status": "connecting"
}
```
</TabItem >

</Tabs>

### Check mapping status

Sometimes the mapping isn't immediately saved to the underlying accounting platform and its status in the request remains `pending`. 

Query the [List bank feed account mappings](/bank-feeds-api#/operations/get-bank-account-mapping) endpoint repeatedly until the status changes to `connected`. You can then proceed to create bank transactions in the target account.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Request

```http
GET /companies/{companyId}/connections/{connectionId}/bankFeedAccounts/mapping
```
#### Response

In this example Xero mapping response body, you can see that the source account `39aaec5d-f3c1-4d15-a8d8-73c27d7fdef8` has been successfully mapped.

```json
  [
	{
	"sourceAccountId": "39aaec5d-f3c1-4d15-a8d8-73c27d7fdef8",
	"targetAccountId": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
	"feedStartDate": "2023-09-12T00:00:00",
	"status": "connected",
	"targetAccountOptions": [
		{
			"name": "SavingsBankPro",
			"id": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
			"accountNumber": "4243"
		},
		{
			"name": "WaveCrestFinance",
			"id": "57ab0173-3381-4be8-afd5-dfa48b3b0bb6",
			"accountNumber": "77"
		},
		{
			"name": "ZenithBanking",
			"id": "195e6138-79ac-4ad4-8724-b7c9a1f90f9f",
			"accountNumber": "1234"
		},
		{
			"name": "CosmicCreditUnion",
			"id": "2254eaa8-ddf0-4b2f-ba52-efb3bf7f338f",
			"accountNumber": "5670"
		},
		{
			"name": "VertexCapital",
			"id": "0d62ba1a-b62a-4d4e-b3a2-2fccb0345523",
			"accountNumber": "5678"
		},
		{
			"name": "VertexCapital#Gold",
			"id": "aa635648-99cf-4ab0-bfba-2a1128f7b521",
			"accountNumber": "5679"
		}
		],
	"sourceAccountName": "source-account-1",
	"sourceAccountNumber": "4243",
	"sourceBalance": 100,
	"sourceCurrency": "GBP",
	"targetAccountName": "SavingsBankPro",
	"targetAccountNumber": "4243"
	},
	{
	"sourceAccountId": "e7569bca-85a1-4b9f-9006-219a486e9cc3",
	"status": "pending",
	"targetAccountOptions": [
		{
			"name": "SavingsBankPro",
			"id": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
			"accountNumber": "4243"
		},
		{
			"name": "WaveCrestFinance",
			"id": "57ab0173-3381-4be8-afd5-dfa48b3b0bb6",
			"accountNumber": "77"
		},
		{
			"name": "ZenithBanking",
			"id": "195e6138-79ac-4ad4-8724-b7c9a1f90f9f",
			"accountNumber": "1234"
		},
		{
			"name": "CosmicCreditUnion",
			"id": "2254eaa8-ddf0-4b2f-ba52-efb3bf7f338f",
			"accountNumber": "5670"
		},
		{
			"name": "VertexCapital",
			"id": "0d62ba1a-b62a-4d4e-b3a2-2fccb0345523",
			"accountNumber": "5678"
		},
		{
			"name": "VertexCapital#Gold",
			"id": "aa635648-99cf-4ab0-bfba-2a1128f7b521",
			"accountNumber": "5679"
		}
	],
	"sourceAccountName": "source-account-2",
	"sourceAccountNumber": "4243",
	"sourceBalance": 100,
	"sourceCurrency": "GBP"
	}
]
```
</TabItem >

</Tabs>

## Supported integrations

<IntegrationsList integrations={bankfeedsInternalMappingIntegrations}/>

---
## Read next

* [Create bank transactions in the accounting platform](/bank-feeds/pushing-transactions)