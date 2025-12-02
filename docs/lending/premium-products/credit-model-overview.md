---
title: "Credit model overview"
displayed_sidebar: "lending"
description: "Access a detailed data-driven assessment of a business's financial health and creditworthiness"
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import { integrationsAccountingFilterCreditModel, bankingIntegrations } from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Lending's premium **Credit model** feature provides an intuitive way to interpret, visualize, and analyze a borrower’s accounting and banking data. It offers a holistic view of financial performance to support credit decisions and other financial evaluations.

## Features

The Credit model contains a variety of features that enhance the underwriting process:

- **Dashboard:** an all-encompassing view of a borrower’s financial health

- **Credit score:** a customizable credit score that aligns the model to the metrics most important to your analysis

- **Accounting score:** an evaluation of the quality and completeness of a business’s bookkeeping

- **Financial summary:** financial statements that are automatically spread with calculated metrics and ratio

- **Bank summary:** bank transaction data that is converted into a cash-based profit and loss statement

- **Debt summary:** a breakdown of existing debt with historical and projected repayment terms

- **Customer summary:** terms, concentration, and punctuality of a borrower’s receivables

- **Repayment summary:** terms, concentration, and punctuality of a borrower’s payables

## Feature components

The Credit Model report can be based on accounting data sources, banking data sources, or both.

#### Supported integrations: accounting

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQv5tU64V66C6QkR2L3I-iuCIN02A7ROyyZL1D6gmglwrtAHU9VwJmxwWMHtslJV5aP_oeq2--6tHm1/pubhtml?gid=390125489&single=true&amp;widget=true&amp;headers=false"
  className="googleSheets"
  style={{ height: "450px", border: "0" }}
/>

#### Supported integrations: banking

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=1760315404&amp;single=true&amp;widget=true&amp;headers=false"
  className="googleSheets"
  style={{ height: "250px", border: "0" }}
/>

## Feature enrichments

The Credit model report provides the following insights into the financial health of a company:

- **Key highlights:** a detailed outline of the company’s best performing and most material financial metrics

- **Key risks:** a detailed outline of the company’s worst performing and most material financial metrics

- **Proforma cash runway:** a prediction of a cash runway that considers historical burn, upcoming capital injections, and future debt payments

- **Knockout rules:** custom alerts for when certain financial metrics reach given thresholds

- **Accounting issues:** an explanation of any poor bookkeeping practices

- **Closed books indicator:** an estimation of the most recent accounting period officially closed by a business

- **Debt repayment schedule:** implied terms of a company’s credit cards and debt facilities, including payment, frequency, maturity, and balance

- **Accounts receivable aging:** an automated aging schedule from unpaid customer invoices

- **Accounts payable aging:** an automated aging schedule from unpaid supplier bills

- **Customer summary:** a full overview of customer repayment behavior, including percentage of on-time payments, breakdown of repayment terms, and customer concentration

- **Repayment summary:** a full overview of supplier repayment behavior, including percentage of on-time payments, breakdown of repayment terms, and supplier concentration

## Supported outputs

You can generate and retrieve the data read and enriched by this feature in an Excel format using an API call or in the [Codat Portal](https://app.codat.io).

#### Get report via API

Use the [Generate report](/lending-api#/operations/generate-report) endpoint to asynchronously generate the report. Set the `reportType` parameter to `creditModel`. Initiating the report will trigger a new data sync.

Next, call the [Download credit model Excel](/lending-api#/operations/download-credit-model-excel) endpoint to retrieve the resulting report. 

You can also view individual Credit Model metrics using the [Get financial summary insights](/lending-api#/operations/get-financial-summary) endpoint. 

#### Get report via Portal

In the [Codat Portal](https://app.codat.io), navigate to **Companies** and select the company you want to analyze. In the side menu, click **Lending > Reports**. 

In the list of reports, find _Credit Model (Beta)_ and click **Generate report**. Once the report is ready to download, it will appear underneath the report name. Click **Download** to save the report to your machine. 

![A snippet of the Codat Portal company detail screen with the Lending > Reports path visible and Credit Model report displayed](/img/updates/bank-feeds-bento.png)

## Get started

Once you have the Lending solution enabled, contact your Account Manager or our support team to enable the Credit Model report. As a premium feature, it will be billed in addition to your use of the Lending solution.

Next, configure your instance to work with the Credit Model feature.

#### Configure data sources

Follow the respective guides to set up and enable accounting integrations that will serve as a data source for the feature:

##### Accounting data sources

<IntegrationsList filter={integrationsAccountingFilterCreditModel} />

##### Banking data sources

<IntegrationsList integrations={bankingIntegrations} />

#### Enable data types

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

| **Accounting**                  | **Banking**                                 |
|---------------------------------|---------------------------------------------|
| Company `company`               | Banking transactions `banking-transactions` |
| Profit and loss `profitAndLoss` | Banking accounts `banking-accounts`         |
| Balance sheet `balanceSheet`    |                                             |
| Bills `bills`                   |                                             |
| Bill payments `billPayments`    |                                             |
| Suppliers `suppliers`           |                                             |
| Customers `customers`           |                                             |
| Invoices `invoices`             |                                             |
| Payments `payments`             |                                             |
| Credit notes `creditNotes`      |                                             |

#### Configure webhooks

We recommend you [subscribe to the following webhooks](/using-the-api/webhooks/create-consumer) if you are using an API solution:

- [`reports.creditModel.generate.successful`](/lending-api#/webhooks/reports.creditModel.generate.successful/post)

  Thia webhook will notify you once the report successfully generates.

- [`reports.creditModel.generate.unsuccessful`](/lending-api#/webhooks/reports.creditModel.generate.unsuccessful/post)

  Thia webhook will notify you if the report generation fails.
