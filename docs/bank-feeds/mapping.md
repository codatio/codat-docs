---
title: "Source accounts"
description: "Push bank transaction data into your customers' accounting platforms with an automated feed."
sidebar_label: Authorization & Mapping
displayed_sidebar: bankfeeds
hide_title: true
hide_description: true
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Authorization and mapping

The method of connecting and mapping this source account to your target account varies depending on the accounting package your customer is using, typically there are three methods of mapping the source account to a target account:
- [**Codat UI Mapping:**](/bank-feeds/mapping#codat-mapping-user-interface) If you prefer a quicker setup, you can utilize Codat's provided user interface for mapping.
- [**API Mapping:**](/bank-feeds/mapping#api-mapping) Integrate the mapping journey directly into your application for a seamless user experience.
- **Accounting Platform Mapping:** For some accounting softwares, the mapping process must be conducted within the software itself.

| Bank Feed Integration | API Mapping | Codat UI Mapping | Accounting Platform Mapping |
| --------------------- | ----------- | ---------------- | --------------------------- |
| Xero                  | ✅          | ✅               |                             |
| FreeAgent             | ✅          | ✅               |                             |
| QuickBooks Online     |             |                  | ✅                          |
| Sage                  |             |                  | ✅                          |


## Codat Mapping User Interface

![Codat-bank-feeds_account-mapping-ui](/img/bank-feeds/mappingUi.png "Codat-provided account mapping UI")

The bank feeds mapping interface allows for customization with your own logo and primary color scheme. Designed to meet all third-party requirements, it enables a seamless launch of your bank feeds product, ensuring an outstanding experience for your customers with minimal development effort.

#### Supported Integrations
- Xero
- FreeAgent

### Using the mapping UI
#### Mapping an account

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

#### Connection management
To allow your SMB users to view and manage their existing bank feed connections, you can direct them to a newly-generated `linkUrl`. When they open this URL and revisit the account mapping UI, their existing connections are displayed in the **Manage your connected accounts** panel:

![xero-bank-feeds_account-mapping-ui-manage-feed-connections](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds_account-mapping-ui-manage-feed-connections.png "Codat-provided account mapping UI showing several connected accounts in the bottom panel.")

To disconnect a source bank account, the SMB user hovers over the **connected** status icon and selects **Disconnect**. This immediately disables the bank feed connection. The disconnected account will display in the source bank account dropdown menu when the user next refreshes the page.



## Build your own user interface

Should you desire a more integrated user experience, you have the option to allow users to map their accounts directly within your own application.

This can be achieved by utilizing the account mapping endpoints. These endpoints also drive the functionality of the white-labeled user interface. 
 
However, be sure to meet all partner requirements to maintain compliance.

#### Supported Integrations
- Xero
- FreeAgent

### Using the mapping API
To utilize the mapping UI, direct your company's users to the `linkUrl` provided in the [dataConnection](/bank-feeds/setup#creating-a-data-connection) response. After they've authorized their accounting software, they'll be redirected to your application based on any pre-configured [redirect parameters](/auth-flow/customize/set-up-redirects).  

You can use the [get-bank-account-mapping](/bank-feeds-api#/operations/get-bank-account-mapping) endpoint to retrieve a list of valid target accounts to map the companies source account to, these options are also filtered based on the currency and the type of the source account.

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

To save a mapping, you can use the [create-bank-account-mapping](/bank-feeds-api#/operations/create-bank-account-mapping) endpoint, 

:::caution Mapping multiple accounts

You can only save the mapping for one account at a time - where a user needs to map multiple accounts you should save the mappings in separate requests.

:::


##### Mapping to a new account
if your user intends to establish a new target account for reconciling bank transactions, this can be easily achieved by omitting the `targetAccountId` parameter while saving the mapping.

<Tabs>

  <TabItem value="request-url" label="Request Url">
  create-bank-account-mapping request url

```http
POST /companies/:companyId/connections/:connectionId/bankFeedAccounts/mapping
```

  </TabItem >

  <TabItem value="request-body" label="Request Body">
  Sample request body:

```json
{
    "sourceAccountId": "source-account-id",
    "feedStartDate": "2023-01-01T00:00:21.470Z"
}
```


  </TabItem >

  <TabItem value="response-body" label="Response Body">
   Sample response body:

```json
{
    "sourceAccountId": "e58c281d-e8fd-48eb-a07f-ea7eef9b96f3",
    "targetAccountId": null,
    "status": "connecting"
}
```

  </TabItem >

</Tabs>

##### Mapping to an existing account
Should your user opt to map to an existing target account, this can be conveniently done by populating the `targetAccountId` parameter when saving the mapping.


<Tabs>

  <TabItem value="request-url" label="Request Url">
  create-bank-account-mapping request url

```http
POST /companies/:companyId/connections/:connectionId/bankFeedAccounts/mapping
```

  </TabItem >

  <TabItem value="request-body" label="Request Body">
  Sample request body:

```json
{
    "sourceAccountId": "source-account-id",
    "targetAccountId": "2efba41e-1edf-49dc-8e14-b5eaed792f07",
    "feedStartDate": "2023-01-01T00:00:21.470Z"
}
```


  </TabItem >

  <TabItem value="response-body" label="Response Body">
   Sample response body:

```json
{
    "sourceAccountId": "e58c281d-e8fd-48eb-a07f-ea7eef9b96f3",
    "targetAccountId": "2efba41e-1edf-49dc-8e14-b5eaed792f07",
    "status": "connecting"
}
```

  </TabItem >

</Tabs>

#### Checking the status
In certain instances, saving the mapping to the underlying accounting system may not be instantaneous. If the status in the request remains unlinked, you can repeatedly query the [list-bank-account-mapping](/bank-feeds-api#/operations/get-bank-account-mapping) until the status updates, at which point you can proceed to push the bank transactions.

<Tabs>

  <TabItem value="request-url" label="Request Url">
  Mapping options request url:

```http
GET /companies/:companyId/connections/:connectionId/bankFeedAccounts/mapping
```
    
  </TabItem >

  <TabItem value="response-body" label="Response Body">
  Sample Xero mapping response body, you can see that sourceAccountId `39aaec5d-f3c1-4d15-a8d8-73c27d7fdef8` has been successfully mapped.


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