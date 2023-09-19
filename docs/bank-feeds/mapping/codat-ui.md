---
title: "Bank feeds mapping user interface"
description: "Push bank transaction data into your customers' accounting platforms with an automated feed."
sidebar_label: Map in UI
displayed_sidebar: bankfeeds
hide_title: true
hide_description: true
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {IntegrationsList} from '@components/global/Integrations'
import {bankfeedsExternalMappingIntegrations} from '@components/global/Integrations/integrations'

# Codat mapping user interface

<br/>

<Loom source="https://www.loom.com/embed/48972835b6e74d199448b794f41b9997" />

The bank feeds mapping interface allows for customization with your own logo and primary color scheme. Designed to meet all third-party requirements, it enables a seamless launch of your bank feeds product, ensuring an outstanding experience for your customers with minimal development effort.

### Supported integrations

<IntegrationsList integrations={bankfeedsExternalMappingIntegrations}/>


## Using the mapping UI
### Mapping an account

To utilize the mapping UI, direct your company's users to the `linkUrl` provided in the [dataConnection](/bank-feeds/setup#creating-a-data-connection) response. After they've authorized their accounting software, they'll be guided to an interface for mapping their source account to either an existing or a new target account within their accounting platform.

The target accounts presented are selectively filtered based on criteria like currency and account type. For instance, if the source account is a credit card with a USD currency, only credit accounts denominated in USD will appear in the 'target options' picklist.

When a user has successfully linked their account, they will be redirected to your application based on any [redirect parameters](/auth-flow/customize/set-up-redirects) configured, you can also poll the [get-bank-account-mapping](/bank-feeds-api#/operations/get-bank-account-mapping) to check whether an account has been mapped successfully.

<Tabs>

  <TabItem value="request-url" label="Request Url">
  Mapping options request url:

```http
GET /companies/:companyId/connections/:connectionId/bankFeedAccounts/mapping
```
    
  </TabItem >

  <TabItem value="response-body" label="Response Body">
  Sample Xero mapping response body:

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

### Connection management
To allow your SMB users to view and manage their existing bank feed connections, you can direct them to a newly-generated `linkUrl`. When they open this URL and revisit the account mapping UI, their existing connections are displayed in the **Manage your connected accounts** panel:

![xero-bank-feeds_account-mapping-ui-manage-feed-connections](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds_account-mapping-ui-manage-feed-connections.png "Codat-provided account mapping UI showing several connected accounts in the bottom panel.")

To disconnect a source bank account, the SMB user hovers over the **connected** status icon and selects **Disconnect**. This immediately disables the bank feed connection. The disconnected account will display in the source bank account dropdown menu when the user next refreshes the page.


---
## Read next

* [Pushing transactions](/bank-feeds/pushing-transactions
