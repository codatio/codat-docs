---
title: "Migration Guide for Enhanced cashflow report"
description: "Migration to Categorized Bank Statement Endpoints: Replacing Deprecated Enhanced Cashflow APIs"
displayed_sidebar: "lending"
image: "/img/banners/social/lending.png"
---

:::info In this guide:

- Alternatives to deprecated **Enhanced Cashflow** report endpoints
- Endpoint replacements and response changes
- Essential workflow adjustments to ensure a smooth transition
  :::

## Generate a Report

#### **Old Endpoint**

`POST /data/companies/{companyId}/assess/excel?reportType=enhancedCashFlow`

#### New Endpoint

`POST /companies/{companyId}/reports/categorizedBankStatement`

#### Response Changes

The response object will change from the old format to the following:

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

## Check the Status of the Latest Report

#### **Old Endpoint**

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

## Download the Excel Report

#### **Old Endpoint**

`GET /data/companies/{companyId}/assess/excel/download?reportType=enhancedCashFlow`

#### New Endpoint

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/excel`

#### Response Changes

There are **no changes** to the response. The endpoint will return an Excel file containing the report data as before.

## Retrieve Transactions Data

#### **Old Endpoint**

`GET /companies/{companyId}/reports/enhancedCashFlow/transactions`

#### New Endpoints

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/accounts`

`GET /companies/{companyId}/reports/categorizedBankStatement/latest/transactions`

Refer to the [List Accounts Endpoint](https://docs.codat.io/lending-api#/operations/list-categorized-bank-statement-accounts) and [List Transactions Endpoint](https://docs.codat.io/lending-api#/operations/get-categorized-bank-statement-transactions) documentations for details.
:::warning Important Workflow Update

For retrieving transactions data, unlike the old endpoints, the new endpoints require that a report already exists **and its status is** `Complete` before retrieving accounts or transactions.

**Action Required**: Update your workflow to first call:

`POST /companies/{companyId}/reports/categorizedBankStatement`

…and ensure the report status is `Complete` before making requests to the new accounts or transactions endpoints.
:::

:::tip How to Check for Completion

You can verify the report's completion in **two ways**:

1. **Poll the Status Endpoint**

   `GET /companies/{companyId}/reports/categorizedBankStatement/latest/status`

2. **Listen to Webhook Event**  
    Subscribe to the webhook:

   `reports.categorizedBankStatement.generate.successful`

   This webhook fires when the report generation is complete.

   For more details, see [Webhooks Overview](https://docs.codat.io/using-the-api/webhooks/overview)
   :::
