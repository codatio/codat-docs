---
title: "Banking data file upload"
sidebar_label: Data upload
displayed_sidebar: lending
description: "Upload your banking data to Codat and take advantage of our bank statement enrichment features and reports"
---

## Overview

If you already have a banking data provider, you can still benefit from our bank statement categorization functionality by manually uploading that banking data to Codat.

You can do this in two ways:

1. Upload banking data files and download the resulting categorized bank statement [in our Portal](/lending/functions/data-upload#upload-in-portal).
2. Push the banking data records and get the resulting categorized bank statement [via our API](/lending/functions/data-upload#upload-via-api).

:::caution Prerequisites

To use the data upload functionality, you need to create a Codat [company](../../terms/company) first. We walk you through this in [Get started with Lending API](/lending/get-started#use-lending-api).

:::

## Upload in Portal

In the [Codat Portal](https://app.codat.io), navigate to **Companies**, choose the company you want to upload the banking data for, then select **Lending > Upload banking data**. Here, you can manually upload CSV files that contain bank account details and bank transaction details from your banking provider. 

Download CSV templates with example data from this page and check the allowed values for each data type in our [API reference](/lending-api#/) to make sure your data is in the right format. We summarized the data requirements in the table below.

| Data type    | Template                                                                              | Required fields                                                                                                                                                         | Allowed values                                                                                           |
|--------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Accounts     | [CSV template](https://static.codat.io/public/templates/lending/accounts-template.csv)     | `id`, `name`, `type`, `currentBalance`, `currency`, `accountIdentifierType`, `institutionId`, `institutionName`<br/><br/> An account identifier: `iban`, `bic`, or `number` | See the [Banking: Bank account](/lending-api#/schemas/BankingAccount) schema|
| Transactions | [CSV template](https://static.codat.io/public/templates/lending/transactions-template.csv) | `id`, `accountId`, `currency`, `description`, `amount`, `postedDate`, `code`                                                                                            | See the [Banking: Transaction](/lending-api#/schemas/BankingTransaction) schema |

You can check the progress of the upload by navigating to **Data history > Pull history** of the company. Once the upload is complete, download the [Enhanced cash flow](/lending/features/excel-download-overview#feature-components) report to view the resulting categorized bank statement in **Lending > Reports**. 

To add, amend or remove records, upload a CSV file that contains the updated dataset you want recorded in Codat, and it will replace the existing dataset. For example, if you perform a monthly statement upload, each new CSV file must contain the data for all previously uploaded months as well as the new month. 

To delete the dataset in its entirety, [delete the existing data connection](/core-concepts/connections#delete-a-data-connection) first, then upload the correct file. This will automatically create a new data connection.

## Upload via API

To upload your customer's banking data using our API, follow these steps:

1. **Create Data Connection**

First, [create a data connection](/lending-api#/operations/create-connection) for the company. The platform key for a 'Banking Data Upload' connection is `zpqy`.

2. **Set upload configuration**

Before creating the data, you must define its source type and account. This tells us what format to expect the data in. Use the [Set upload configuration](/lending-api#/operations/set-bank-statement-upload-configuration) endpoint to create the configuration. 

To upload records that align with our [Banking: Bank account](/lending-api#/schemas/BankingAccount) and [Banking: Transaction](/lending-api#/schemas/BankingTransaction) schemas, set `codat` as your source. 

:::caution Changing the configuration

Each data connection can only have one configuration. To view existing configuration, use the [Get upload configuration](/lending-api#/operations/get-bank-statement-upload-configuration) endpoint. 

To change it, delete the connection, set the configuration for the new `connectionId`, and reupload the data.

:::

3. **Start the upload session**

Use the [Start upload session](/lending-api#/operations/start-bank-statement-upload-session) endpoint to initiate a bank statement upload session for a given company. A session is a one-time process that lets accounts and transactions to be uploaded to Codat. 

You can only have one active session per data type at a time. Additionally, the session will time out if no data is uploaded after 90 minutes. You can complete or cancel a session using the [End upload session](lending-api#/operations/end-bank-statement-upload-session) endpoint.

4. **Upload the data**

During an active session, use the [Upload data](/lending-api#/operations/upload-bank-statement-data) endpoint to upload an object that matches the [Banking: Bank account](/lending-api#/schemas/BankingAccount) schema or an array of objects that match the [Banking: Transaction](/lending-api#/schemas/BankingTransaction) schema. 

:::caution Updating the records

If you need to add, amend or remove the banking transaction records, upload the whole dataset again and include the changed records in it. To delete the records, delete the data connection first, create a new one, and upload the data for the new `connectionId`.

:::

5. **End the upload session**

Use the [End upload session](/lending-api#/operations/end-bank-statement-upload-session) to indicate that you want to finalize the bank statement upload process. Include `Cancel` in the request body to cancel the processing of the dataset or `Process` to trigger the ingestion and enrichment of the data.

You can check the progress by calling the [Get pull operation](/lending-api#/operations/get-pull-operation) endpoint. Once complete, pull the resulting categorized bank statement using the [Get categorized bank statement](/lending-api#/operations/get-categorized-bank-statement) endpoint.

:::tip Recap

We have covered the options to upload banking data from your existing provider using our Portal and our API. Next, you may want to learn more about our [categorized bank statements](/lending/features/bank-statements-overview).

:::

---
## Read next

- [Categorized bank statements](/lending/features/bank-statements-overview)
