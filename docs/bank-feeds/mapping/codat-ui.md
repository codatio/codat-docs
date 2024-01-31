---
title: "Use our interface to map accounts"
description: "Use our pre-built mapping interface to provide account mapping in your app with minimal development effort"
sidebar_label: Use our UI
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {IntegrationsList} from '@components/global/Integrations'
import {bankfeedsInternalMappingIntegrations} from '@components/global/Integrations/integrations'
import Loom from '@components/global/Loom'

Quickly provide an outstanding mapping experience for your customers with minimal development effort by using our pre-built mapping user interface. It is designed to meet all third-party requirements and can be customized to match your logo and primary color scheme. 

## Map an account

Direct your customer to the `linkUrl` returned in the [Create a connection](/bank-feeds/create-account#create-a-connection) response. After they've authorized your access to their accounting software, they'll be taken to Codat's mapping UI (as seen on the screenshot below) where they will map their source account to an existing or a new target account within their accounting platform. 

![Codat-bank-feeds_account-mapping-ui](/img/bank-feeds/mappingUi.png "Codat-provided account mapping UI")

The target accounts listed in the UI are filtered based on the parameters of the source account. For example, if the source account is a credit card in a USD currency, only USD credit accounts will appear in the "Target options" dropdown list.

When a user has successfully mapped and linked their account, they will be redirected to your application based on the [redirect parameters](/auth-flow/customize/set-up-redirects) you configured. 

You can also poll the [List bank feed account mappings](/bank-feeds-api#/operations/get-bank-account-mapping) endpoint to check whether an account has been mapped successfully.

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

## Manage connections

To allow your SMB users to view and manage their existing bank feed connections, you can direct them to a newly-generated `linkUrl`. When they open this URL and revisit the account mapping UI, their existing connections will be displayed in the **Manage your connected accounts** panel.

![xero-bank-feeds_account-mapping-ui-manage-feed-connections](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds_account-mapping-ui-manage-feed-connections.png "Codat-provided account mapping UI showing several connected accounts in the bottom panel.")

To disconnect a source bank account, the SMB user should hover over the **connected** status icon and select **Disconnect**. This immediately disables the bank feed connection. The disconnected account will display as an option in the "Source bank account" dropdown menu when the user next refreshes the mapping page.

## Supported integrations

<IntegrationsList integrations={bankfeedsInternalMappingIntegrations}/>

---

## Read next

* [Create bank transactions in the accounting platform](/bank-feeds/pushing-transactions)
