---
title: "Configure customer in Codat"
description: "Create a company and its connection that form the structure required to execute the bill pay process"
sidebar_label: Configure customer
displayed_sidebar: expenses
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

When implementing your Sync for Payables solution, you need to create your SMB customer as a [company](../terms/company) in Codat before registering their accounting platform as a connection. You can do that when the customer starts interacting with your application.  

We have highlighted this sequence of steps in our detailed process diagram below. 

<details>
<summary><b>Detailed process diagram</b></summary>

```mermaid

  sequenceDiagram
      participant smb as SMB customer
      participant app as You 
      participant codat as Codat
      participant acctg as Accounting platform
      
      smb ->> app: Logs into application
      smb ->> app: Initiates connection to accounting software

        app ->> codat: Passes company and connection details
        codat ->> codat: Creates company and connection
        app ->> codat: Initiates auth flow
        codat -->> smb: Displays auth flow
        smb -->> codat: Authorizes connection
        codat ->> acctg: Establishes connection
```

</details>  

:::tip Authorize your API calls
Remember to [authenticate](/using-the-api/authentication) when making calls to our API. Navigate to **Developers > API keys** in the Portal to pick up your authorization header.
:::

## Create a company

Within Sync for Payables, a company represents your SMB customer that pays and manages their bills using your application. To create it, use our [Create company](/sync-for-payables-api#/operations/create-company) endpoint. It returns a JSON response containing the company `id`. You will use this `id` to establish a connection to an accounting platform. 

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Request

```json
POST /companies

{
    "name": "{companyName}"
}
```

#### Response

```json
{
    "id": "77921ff9-2491-4dfe-b23b-ff28f3e31e4f",
    "name": "Sawayn Group",
    "platform": "",
    "redirect": "https://link.codat.io/company/77921ff9-2491-4dfe-b23b-ff28f3e31e4f",
    "dataConnections": [],
    "created": "2023-09-06T09:13:35.8188152Z"
}
```

</TabItem >

</Tabs>

## Create a connection

Next, use the [Create connection](/sync-for-payables-api#/operations/create-connection) endpoint to connect the company to an accounting data source via one of our integrations. This will allow you to synchronize data with that source, fetching or creating suppliers, bills, and payment methods. 

In the request body, specify a `platformKey` of the accounting platform you're looking to connect.

| Accounting platform | platformKey |
| ---  | ---  |
| MYOB Business | `pdvj` |
| Oracle NetSuite | `akxx` |
| QuickBooks Online | `qhyg` |
| QuickBooks Desktop | `pqsw` |
| Sage Intacct | `knfz` |
| Xero | `gbol` |

As an example, let's create a QuickBooks Online (QBO) connection. In response, the endpoint returns a `dataConnection` object with a `PendingAuth` status and a `linkUrl`. Direct your customer to the `linkUrl` to initiate our [Link auth flow](/auth-flow/overview) and enable them to authorize this connection.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Request

```json

POST /companies/{companyId}/connections
{
    "platformKey": "qhyg"
}

```

#### Response

```json
 {
  "id": "7baba7cc-4ae0-48fd-a617-98d55a6fc008",
  "integrationId": "6b113e06-e818-45d7-977b-8e6bb3d01269",
  "sourceId": "56e6575a-3f1f-4918-b009-f7535555f0d6",
  "platformName": "QuickBooks Online",
  "linkUrl": "https://link-api.codat.io/companies/{companyId}/connections/{connectionId}/start?otp=742271",  
  "status": "PendingAuth",
  "created": "2022-09-01T10:21:57.0807447Z",
  "sourceType": "Accounting"
}
```
</TabItem >

</Tabs>

## Deauthorize a connection

If your customer wants to revoke their approval and sever the connection to their accounting package, use the [Unlink connection](/sync-for-payables-api#/operations/unlink-connection) endpoint.

```json
PATCH /companies/:companyId/connections/{connectionId}
 {
 "status": "Unlinked"
 }
```

:::tip Recap

You have created the structure of key objects required by Codat's Sync for Expenses: a company and its connection to an accounting data source.

Next, you can choose to manage your customer's suppliers, bills or payment methods prior to paying the bills.

:::

---

## Read next

* [Manage your customer's suppliers](/payables/suppliers)
