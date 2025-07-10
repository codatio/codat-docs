---
title: "Migration guide for Enhanced Cashflow report"
description: "Check how you can transition your existing Codat integration with Enhanced Cashflow endpoints to our new Categorized Bank Statement report endpoints"
displayed_sidebar: "lending"
image: "/img/banners/social/lending.png"
---


We have recently launched the **Categorized Bank Statement** report, which replaces the legacy **Enhanced Cashflow** report. The new report includes built-in orchestration for fetching required data from third-party integrations and provides webhook notifications when the report is ready. 

To ensure a smooth transition, we recommend migrating to the new endpoints ahead of the [upcoming deprecation](https://docs.codat.io/updates/250703-deprecation-enh-cashflow-endpoints) on **July 10, 2026**.

The Categorized Bank Statement report is asynchronous, which means it must be generated before you can retrieve data from it. If you’d like to continue using a sync scheduler for this report, please reach out to your Account Manager.

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

**The response format has changed**. The new Categorized Bank Statement endpoint returns a simplified, structured object that includes the report id, status, and relevant timestamps.

#### Legacy Endpoint

`POST /data/companies/{companyId}/assess/excel?reportType=enhancedCashFlow`

#### New Endpoint

`POST /companies/{companyId}/reports/categorizedBankStatement`

#### Response Changes

The **response object will change** to the following:

```json
{
  "id": "6e9bae88-72c9-45ae-abe8-41fbf2871458",
  "status": "InProgress",
  "type": "categorizedBankStatement",
  "requestedDate": "2024-09-27T04:43:41Z",
  "updatedDate": "2024-09-27T04:43:41Z"
}
```

Refer to the [Generate Report API documentation](https://docs.codat.io/lending-api#/operations/generate-report) for more details.

### 2. Check Report Status

To determine when the report is complete, update your implementation to use the new status endpoint.

The response has been updated to return the full report metadata, including the report id, status, timestamps, and the report type.

#### Legacy Endpoint

`GET /data/companies/{companyId}/assess/excel?reportType=enhancedCashFlow`

#### New Endpoint

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/status`

#### Response Changes

The response object is updated to:

```json
{
  "id": "6e9bae88-72c9-45ae-abe8-41fbf2871458",
  "status": "Complete",
  "type": "categorizedBankStatement",
  "requestedDate": "2024-09-27T04:43:41Z",
  "updatedDate": "2024-09-27T04:48:31Z"
}
```

Refer to the [Get Report Status API documentation](https://docs.codat.io/lending-api#/operations/get-report-status) for details.

### 3. Download the Excel Report

To download the generated report, update your application to use the new endpoint.

There are no changes to the response — it continues to return an Excel file containing the report data.

#### Legacy Endpoint

`GET /data/companies/{companyId}/assess/excel/download?reportType=enhancedCashFlow`

#### New Endpoint

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/excel`

#### Response Changes

There are **no changes** to the response. The endpoint will return an Excel file containing the report data as before.

Refer to the [Download Report API documentation](https://docs.codat.io/lending-api#/operations/download-categorized-bank-statement-excel) for more details.

### 4. Ensure the report generation is complete before querying data

The Categorized Bank Statement endpoints for accounts and transactions require the report to be fully generated before any data can be retrieved.

:::warning Important workflow update

Unlike the legacy endpoints, the new endpoints require that a report already exists and its status is `Complete` before you can request accounts or transactions data.

**Action Required** - Update your workflow to:

1. Call `POST /companies/{companyId}/reports/categorizedBankStatement`

2. Confirm the report status is `Complete` before calling Categorized Bank Statement accounts or transactions endpoints.
:::

You can check report completion in one of two ways:

1. **Poll the Status Endpoint**

   `GET /companies/{companyId}/reports/categorizedBankStatement/latest/status`

2. **Listen to Webhook Event**  
    Subscribe to the webhook:

   `reports.categorizedBankStatement.generate.successful`

   This webhook fires when the report generation is complete.

   For more details, see [Webhooks Overview](https://docs.codat.io/using-the-api/webhooks/overview)


### 5. Retrieve Accounts and Transactions Data

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



Refer to the [List Accounts Endpoint](https://docs.codat.io/lending-api#/operations/list-categorized-bank-statement-accounts) and [List Transactions Endpoint](https://docs.codat.io/lending-api#/operations/get-categorized-bank-statement-transactions) documentations for details.
