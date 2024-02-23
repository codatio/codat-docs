---
title: "Banking data file upload"
sidebar_label: Data upload
description: "Upload your banking data in CSV format and take advantage of the Codat enhancement features and reports"
---

## Overview

If you are using a pre-existing integration to , you can benefit from our categorization enrichment for bank statements by uploading your banking data as a CSV file. 



This can be done in three ways:

1. bla
2. bla
3. bla

Upload your banking data in CSV format and take advantage of the Codat enhancement features and reports.

Today, clients can only use these features if they are connecting banking data via Codat. If a client has pre-existing integrations, client are required to migrate their connections to Codat to make use of these features. 

CSV templates 

Allow clients to use the Categorised Bank Statement and Reconciled Invoices features with their existing banking data providers. We want to support three user journeys:

User uploads banking data via CSV in the portal & then downloads the Categorised Bank Statement via the portal. You can upload a CSV file with you banking data in our [Portal](https://app.codat.io) and download the resulting categorized bank statement there as well. 

Alternatively, you can push the banking data via our API and pull the resulting categorized bank statement from the [Get categorized bank statement](/lending-api#/operations/get-categorized-bank-statement) endpoint.  

pushes banking data via API and then pulls the categorised bank statement via API.

You can also combine these options - allow your customers to upload their banking data via the Portal first, then pull the resulting reports via our API into your own system. 


**Banking accounts**
id,name,type,currentBalance,currency,accountIdentifierType,institutionId,institutionName,iban,bic,accountNumber
c8996a8b-bc31-4c33-94af-76a4b6d10ae2,Example Credit Account,Credit,1234.32,GBP,Credit,lloyds-bank,Lloyds Bank,GB29NWBK60161331926819,,

For each account only one of the following acount identifiernumbers is required: `iban`, `bic`, or `accountNumber`.

Please refer to the Codat documentation for all allowed values [Banking: Bank account](https://docs.codat.io/banking-api#/schemas/Account)

**Banking transactions:**

id,accountId,currency,description,amount,postedDate,code
f46ffd50-787b-4968-81a9-a3c118a1d7c0,ccc7e4ff-7a78-4c09-a00f-e40c51c42c37,GBP,Example transaction,123.45,2024-01-11T13:45:30.0000000Z,Cash

Please refer to the Codat documentation for all allowed values [Banking: Transaction](https://docs.codat.io/banking-api#/schemas/Transaction)

Manually upload files with bank statement data from your banking platform to categorize it

## Upload in Portal

Navigate to **Companies**, choose the company you want to upload the statement data for, then select **Lending > Upload banking data**. 

Deletion of records will not be support in the first instance. Users will be required to delete the data connection and reupload all data.

It's not possible to delete the data you uploaded. 

We prepared CSV templates for you to use when uploading banking data for accounts and transactions. You can download these templates in the [Codat Portal](https://app.codat.io).


## Upload via API

To upload your customer's banking data using our API, perform the following steps:

1. Set upload configuration

    Use the 



[Get upload configuration](/lending-api#/operations/get-bank-statement-upload-configuration)
[Set upload configuration](/lending-api#/operations/set-bank-statement-upload-configuration)
[Start upload session](/lending-api#/operations/start-bank-statement-upload-session)
[Upload data](/lending-api#/operations/upload-bank-statement-data)
[End upload session](/lending-api#/operations/end-bank-statement-upload-session)

There is not a lot of purpose at the moment because we expect people to be only providing data in the codat format. However the initial plan (and possibly a future enhancement) is to allow clients to upload the pages of data that they receive directly from the 3rd party banking aggregators, (e.g. we would ask them that they send us exactly the responses that they get from plaid when they call a get transactions endpoint). The idea behind the configuration is that clients can tell us before they start uploading data which format they are going to provide data in so we know how to parse it

They need to do this configuration at the moment, and also we expect a one to one relationship between data connections and account IDs so they need to give us that at the moment also. There are good reasons for this e.g. if they have banking data for one account that they then want to update because they have more transactions, they will need to update the whole dataset again (it was going to be complex and confusing we decided to support delta sync) this becomes worse if you are uploading data for more than one account to the same data connection
14:46
I think also we may like to allow checking that the data that is uploaded only has transactions/accounts for the relevant ID but that doesn't currently exist (edited) 
14:46
but to enable it effectively we would need all existing data connections to have that data there

---
## Read next