---
title: "Migration guide for Enhanced Cashflow report"
description: "Check how you can transition your existing Codat integration with Enhanced Cashflow endpoints to our new Categorized Bank Statement report endpoints"
displayed_sidebar: "lending"
image: "/img/banners/social/lending.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

We have recently launched the **Categorized Bank Statement** report, which replaces the legacy **Enhanced Cashflow** report. The new report includes built-in orchestration for fetching required data from third-party integrations and provides webhook notifications when the report is ready. 

To ensure a smooth transition, we recommend migrating to the new endpoints ahead of the [upcoming deprecation](https://docs.codat.io/updates/250703-deprecation-enh-cashflow-endpoints) on **July 10, 2026**.

Categorized Bank Statement report is generated through an asynchronous process. This means you must explicitly request the report before you can retrieve any data, and wait until it completes.

This report is not generated automatically on a predefined schedule. If you need reports to be triggered automatically on link and/or on a sync schedule, please reach out to your Account Manager.

:::info In this guide:

- Recommended steps to migrate your integration to new Categorized Bank Statement report
- Mapping of legacy Enhanced Cashflow endpoints to new ones
- Workflow updates required for the new report
  :::

## What you need to do

To prepare for the deprecation, you’ll need to update your application to use the Categorized Bank Statement endpoints in place of the Enhanced Cashflow ones.

To switch to the Categorized Bank Statement report we recommend an "expand/contract" strategy. 
Before you start your migration enable the new report in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/configure/portal/developers).

Once enabled, you can run both the legacy and new endpoints in parallel, allowing for a phased transition before the deprecation deadline.

The steps below outline how each part of your existing workflow maps to the new implementation, with details on what’s changed and how to adapt.

### 1. Generate a report

To generate the report asynchronously, update your application logic to call the new endpoint in place of the legacy one. This triggers the orchestration process to fetch all required data for the report.

#### Legacy endpoint

`POST /data/companies/{companyId}/assess/excel?reportType=enhancedCashFlow`

#### New endpoint

`POST /companies/{companyId}/reports/categorizedBankStatement`

#### Response changes

**The response format has changed**. The new Categorized Bank Statement endpoint returns a simplified, structured object that includes the report id, status, and relevant timestamps.

<details>
  <summary><b>Compare sample responses</b></summary>
<Tabs>
<TabItem value="legacy" label="Legacy schema">

```json
{
  "lastGenerated": "2023-01-25T22:36:05.125Z",
  "inProgress": true,
  "queued": "2023-01-25T22:36:05.125Z",
  "success": true,
  "errorMessage": "string",
  "lastInvocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "reportType": "string",
  "fileSize": 0
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "6e9bae88-72c9-45ae-abe8-41fbf2871458",
  "status": "InProgress",
  "type": "categorizedBankStatement",
  "requestedDate": "2024-09-27T04:43:41Z",
  "updatedDate": "2024-10-01T14:41:46Z"
}
```

</TabItem>

</Tabs>

| **Old schema property** | **New schema equivalent**                                                                                     |
|-------------------------|----------------------------------------------------------------------------------------------------------------|
| `lastGenerated`         | 🔁 Use `GET /companies/{companyId}/reports` endpoint instead to retrieve previously generated reports                                                                                               |
| `inProgress`            | ✅ Replaced by `status` – indicates the current state of the report (`InProgress`, `Complete`, `Error`)       |
| `queued`                | ✅ Replaced by `requestedDate` – timestamp for when the report was requested                                   |
| `success`               | ✅ Use `status` instead                                                                                        |
| `errorMessage`          | ✅ Remains `errorMessage`                                                                                      |
| `lastInvocationId`      | ❌ Not available                                                                                               |
| `reportType`            | ✅ Renamed to `type`                                                                                           |
| `fileSize`              | ❌ Not available                                                                                               |

</details>


Refer to the [Generate report](https://docs.codat.io/lending-api#/operations/generate-report) API reference for more details.

### 2. Check report status

To determine when the report is complete, update your implementation to use the new status endpoint.

#### Legacy endpoint

`GET /data/companies/{companyId}/assess/excel?reportType=enhancedCashFlow`

#### New endpoint

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/status`

#### Response changes

The **response object has changed**. The response has been updated to return the full report metadata, including the report id, status, timestamps, and the report type.

<details>
  <summary><b>Compare sample responses</b></summary>
<Tabs>
<TabItem value="legacy" label="Legacy schema">

```json
{
  "lastGenerated": "2023-01-25T22:36:05.125Z",
  "inProgress": true,
  "queued": "2023-01-25T22:36:05.125Z",
  "success": true,
  "errorMessage": "string",
  "lastInvocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "reportType": "string",
  "fileSize": 0
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "6e9bae88-72c9-45ae-abe8-41fbf2871458",
  "status": "Complete",
  "type": "categorizedBankStatement",
  "requestedDate": "2024-09-27T04:43:41Z",
  "updatedDate": "2024-09-27T04:48:31Z"
}
```

</TabItem>

</Tabs>

| **Old schema property** | **New schema equivalent**                                                                                     |
|-------------------------|----------------------------------------------------------------------------------------------------------------|
| `lastGenerated`         | 🔁 Use `GET /companies/{companyId}/reports` endpoint instead to retrieve previously generated reports                                                                                             |
| `inProgress`            | ✅ Replaced by `status` – indicates the current state of the report (`InProgress`, `Complete`, `Error`)       |
| `queued`                | ✅ Replaced by `requestedDate` – timestamp for when the report was requested                                   |
| `success`               | ✅ Use `status` instead                                                                                        |
| `errorMessage`          | ✅ Remains `errorMessage`                                                                                      |
| `lastInvocationId`      | ❌ Not available                                                                                               |
| `reportType`            | ✅ Renamed to `type`                                                                                           |
| `fileSize`              | ❌ Not available                                                                                               |

</details>

Refer to the [Get report status](https://docs.codat.io/lending-api#/operations/get-report-status) API reference for details.

### 3. Download the Excel report

To download the generated report, update your application to use the new endpoint.

#### Legacy endpoint

`GET /data/companies/{companyId}/assess/excel/download?reportType=enhancedCashFlow`

#### New endpoint

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/excel`

#### Response changes

There are **no changes** to the response. The endpoint will return an Excel file containing the report data as before.

Refer to the [Download report](https://docs.codat.io/lending-api#/operations/download-categorized-bank-statement-excel) API reference for more details.

### 4. Ensure the report generation is complete before querying data

The Categorized Bank Statement endpoints for accounts and transactions require the report to be fully generated before any data can be retrieved.

:::warning Important workflow update

Unlike the legacy endpoints, the new endpoints require that a report already exists and its status is `Complete` before you can request accounts or transactions data.

**Action Required** - Update your workflow to:

1. Call `POST /companies/{companyId}/reports/categorizedBankStatement`

2. Confirm the report status is `Complete` before calling Categorized Bank Statement accounts or transactions endpoints.
:::

You can determine whether the report has finished generating using one of the following methods:

1. **Preferred: Subscribe to webhook events**

   [`reports.categorizedBankStatement.generate.successful`](/lending-api#/webhooks/reports.categorizedBankStatement.generate.successful/post)

   This event is triggered when the report is generated successfully.

   For more details, see [Webhooks Overview](/using-the-api/webhooks/create-consumer)

2. **Alternatively: Poll the status endpoint**

   `GET /companies/{companyId}/reports/categorizedBankStatement/latest/status`

### 5. Retrieve accounts and transactions data

Instead of a single endpoint, account and transaction data is now available via two dedicated endpoints.
Before calling these, ensure that a report has been generated and is in the `Complete` state.
There are a few implications for your integration.
* You’ll need to update your data parsing logic to extract transactions from the results array instead of navigating nested structures.

* If you previously depended on embedded account information (e.g. balances or bank codes), you'll now need to use the accounts endpoint `GET /companies/{companyId}/reports/categorizedBankStatement/latest/accounts`

* The new response follows standard REST conventions, which simplifies pagination and improves performance when working with large datasets.

#### Legacy endpoint

`GET /companies/{companyId}/reports/enhancedCashFlow/transactions`

#### New endpoints

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/accounts`

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/transactions`

#### Response changes


| Change                      | Legacy Enhanced Cashflow                                     | Categorized Bank Statement                                      |
|----------------------------|---------------------------------------------------------------|------------------------------------------------------------------|
| **Top-level shape**        | Nested object with `reportInfo`, `dataSources`, `reportItems` | Flat object with `results` array                                |
| **Transactions**           | Nested under `reportItems.transactions`                       | Flattened under `results` array                                 |
| **Accounts**               | Embedded in `dataSources.accounts` with full account details  | Referenced via `accountRef`; full details retrieved separately  |
| **Metadata**               | Included in `reportInfo`                                      | Retrieved separately via status endpoint                        |

<details>
  <summary><b>Compare sample responses</b></summary>
<Tabs>
<TabItem value="legacy" label="Legacy schema">

```json
{
  "reportInfo": {
    "pageNumber": 1,
    "pageSize": 100,
    "totalResults": 2401,
    "reportName": "Cash Flow transactions report",
    "companyName": "Example Company",
    "generatedDate": "2023-01-25T22:36:05.125Z"
  },
  "dataSources": [
    {
      "accounts": [
        {
          "id": "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
          "accountName": "Business Current Account",
          "accountType": "Debit",
          "currency": "USD",
          "currentBalance": 1000
          ...
        }
      ]
    }
  ],
  "reportItems": [
    {
      "transactions": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "accountRef": {
            "id": "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
            "name": "Business Current Account"
          },
          "date": "2023-01-25",
          "description": "Payment to supplier",
          "amount": 100,
          "currency": "USD",
          "platformName": "Plaid"
          ...
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="newac" label="New schema - Accounts">

```json
{
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 2,
  "_links": {
    "self": {
      "href": "/companies/{companyId}/reports/categorizedBankStatement/latest/accounts"
    }
    ...
  },
  "results": [
    {
      "id": "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
      "accountName": "Business Current Account",
      "accountType": "Debit",
      "currency": "USD",
      "currentBalance": 1000
      ...
    }
    ...
  ]
}
```
</TabItem>

<TabItem value="newtr" label="New schema - Transactions">

```json
{
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 1,
  "_links": {
    "self": {
      "href": "/companies/{companyId}/reports/categorizedBankStatement/latest/transactions"
    }
    ...
  },
  "results": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "accountRef": {
        "id": "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
        "name": "Business Current Account"
      },
      "date": "2023-01-25",
      "description": "Payment to supplier",
      "amount": 100,
      "currency": "USD",
      "platformName": "Plaid"
      ...
    }
    ...
  ]
}
```

</TabItem>

</Tabs>

| **Old schema property**                     | **New schema - Accounts**                            | **New schema - Transactions**                         |
|---------------------------------------------|---------------------------------------------------------------|----------------------------------------------------------------|
| `reportInfo.pageNumber`                     | ✅ `pageNumber`                                               | ✅ `pageNumber`                                                 |
| `reportInfo.pageSize`                       | ✅ `pageSize`                                                 | ✅ `pageSize`                                                   |
| `reportInfo.totalResults`                   | ✅ `totalResults`                                             | ✅ `totalResults`                                               |
| `reportInfo.generatedDate`                  | ❌ Not available (see report status for `updatedDate`)        | ❌ Not available (see report status for `updatedDate`)          |
| `dataSources.accounts[].id`                 | ✅ `results[].id`                                             | 🔁 Referenced via `accountRef.id`                              |
| `dataSources.accounts[].accountName`        | ✅ `accountName`                                              | 🔁 Referenced via `accountRef.name`                            |
| `dataSources.accounts[].accountType`        | ✅ `accountType`                                              | ❌ Not available                                                |
| `dataSources.accounts[].currency`           | ✅ `currency`                                                 | ✅ `currency`                                                   |
| `dataSources.accounts[].currentBalance`     | ✅ `currentBalance`                                           | ❌ Not available                                                |
| `reportItems[].transactions[].id`           | ❌ Not available                                              | ✅ `results[].id`                                               |
| `reportItems[].transactions[].accountRef`   | ❌ Not available                                              | ✅ `accountRef`                                                 |
| `reportItems[].transactions[].date`         | ❌ Not available                                              | ✅ `date`                                                       |
| `reportItems[].transactions[].description`  | ❌ Not available                                              | ✅ `description`                                                |
| `reportItems[].transactions[].amount`       | ❌ Not available                                              | ✅ `amount`                                                     |
| `reportItems[].transactions[].currency`     | ❌ Not available                                              | ✅ `currency`                                                   |
| `reportItems[].transactions[].platformName` | ❌ Not available                                              | ✅ `platformName`                                               |

</details>

Refer to the [List Accounts Endpoint](https://docs.codat.io/lending-api#/operations/list-categorized-bank-statement-accounts) and [List Transactions Endpoint](https://docs.codat.io/lending-api#/operations/get-categorized-bank-statement-transactions) documentations for details.

