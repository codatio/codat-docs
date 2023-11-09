---
title: "Get started with Sync for Payables"
sidebar_label: Get started
description: "Learn how to perform the initial setup for Sync for Payables"
image: "/img/banners/social/payables.png"
---

import { IntegrationsList } from "@components/global/Integrations";
import { bankfeedsIntegrations } from "@components/global/Integrations/integrations";

## Journey overview

The diagram below represents the overall activity flow when using Sync for Payables. You can manage bills, suppliers, and payment methods in different ways and order, so we chose to represent these options as alternative scenarios. Consider them elements you can use to build the flow that suits you and your customers best.

```mermaid

sequenceDiagram
    participant smb as SMB customer
    participant app as Your application 
    participant codat as Codat
    participant acctg as Accounting platform
    
    smb ->> app: Logs into application
    smb ->> app: Initiates connection to accounting software

    rect rgb(191, 223, 255)
      app ->> codat: Passes company and connection details
      app ->> codat: Initiates auth flow
      codat -->> smb: Displays auth flow
      smb -->> codat: Authorizes connection
      codat ->> acctg: Establishes connection
    end

    rect rgb(236, 215, 245)
    alt Retrieve suppliers
      app ->> codat: Requests details of existing suppliers
      codat ->> acctg: Fetches suppliers
      acctg -->> codat: Returns suppliers
      codat ->> app: Returns suppliers
      app -> smb: Displays suppliers
      smb -> app: Selects supplier
    else Create supplier
      smb ->> app: Provides supplier details
      app ->> codat: Creates supplier
      codat ->> acctg: Creates supplier record
    end
    end

    rect rgb(215, 236, 245)
    alt Retrieve bills
      codat ->> acctg: Fetches existing bills
      acctg -->> codat: Returns existing bills
      codat ->> app: Returns existing bills
      app ->> smb: Displays existing bills
    else Create bill
      app ->> codat: Creates bill
      codat ->> acctg: Creates bill
    end
    end

    rect rgb(231, 218, 237)
    alt Retrieve bank accounts
      codat ->> acctg: Fetches existing bank accounts
      acctg -->> codat: Returns existing bank accounts
      codat ->> app: Returns existing bank accounts
      app ->> smb: Displays existing bank accounts
    else Create bank account
      app ->> codat: Creates bank account
      codat ->> acctg: Creates bank account
    end
    app ->> smb: Displays payment method mapping
    smb ->> app: Maps payment methods
    end

    rect rgb(237, 218, 231)
      smb ->> app: Pays a bill
      app ->> codat: Records bill payment
      codat ->> acctg: Reconciles bill payment
      acctg ->> smb: Displays paid bill
    end

```

```mermaid

graph TD

    A(Create company) --> B(Create connection)
    B --> C(Authorize connection)

    C --> D1(Retrieve supplier)
    C --> D2(Create supplier)
    C --> E2(Retrieve bill)

    D1 --> E1(Create bill)
    D2 --> E1

    E1 --> F(Map payment methods)
    E2 --> F

    F --> G(Pay bill)

    G --> H(Reconcile payments)
```

## Configure Sync for Payables

Once you decide to build this flow with Sync for Payables, you need to configure Codat accordingly. Let's go through these requirements in detail.

### Enable the product

1. Open the <a href="https://app.codat.io" target="_blank">Codat Portal</a> and sign in.
2. Click on **Settings > Organizational settings > Products**.
3. In the list of products, find _Sync for Payables_ and click **Enable**. Then, follow the on-screen prompt.

### Data types

Set the minimum set of [data types](/core-concepts/data-type-settings#override-the-default-sync-settings) required for the Lending API to `fetch on first link`. Each feature may also have additional data type requirements, so be sure to review these for the feature you want to use.

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations > Data types**. As a minimum, you need the following data types enabled:

|  Data source          | Accounting                                                                                                                                                                                            | Banking                                                                                                                                                                             | Commerce                                                                                                     |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Data types | `company`<br/>`chartOfAccounts`<br/>`balanceSheet`<br/>`profitAndLoss`<br/>`bankAccounts`<br/>`bankTransactions` | `banking-accounts`<br/>`banking-transactions`<br/>`banking-transactionCategories`<br/>`banking-accountBalances` | `commerce-companyInfo`<br/>`commerce-customers`<br/>`commerce-orders` |

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency) on the same screen. We recommend setting it to a daily or a monthly sync.

bills
billpayments
accounts
bankaccounts
suppliers
billcreditnotes
paymentmethods
tracking categories
taxrates

### Manage data sources

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations** and click **Manage integrations**. Next, click **Manage** next to the specific integration you want to enable and set it up to serve as a data source for the product. 

<IntegrationsList integrations={bankfeedsIntegrations}/>

Some of these integrations may require enhanced setup specific to bank feeds. We walk you through these in our integration-specific instructions in the _Manage integrations_ section of our documentation. 

### Authorization flow

As part of using Sync for Payables, you will need your customers to authorize your access to their data. To do so, use Link - our pre-built, conversion-optimized, and white-labelled authorization flow. 

We recommend you fully embed the Link auth flow in your experience by using our [Embedded Link](/auth-flow/authorize-embedded-link) SDK in your front-end code. You can also choose our out-of-the-box [Hosted Link](/auth-flow/authorize-hosted-link) auth flow option to get up and running as quick as possible. 

The solution lets you tailor the authorization journey to your business needs. You can:

* [Customize Link settings](/auth-flow/customize/customize-link)
* [Set up company branding](/auth-flow/customize/branding)
* [Set up redirects](/auth-flow/customize/set-up-redirects)

### Webhooks

Codat supports a range of [webhooks](/using-the-api/webhooks/core-rules-types) to help you manage your data pipelines. In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Webhooks > Rules** and click **Create new rule** to set up the following webhook and get the most out of Bank Feeds API:

- [Push operation status has changed](/using-the-api/webhooks/core-rules-types#push-operation-status-has-changed)  

  Use this webhook to track the completion of the operation to create bank transactions in the target platform. When you receive a notification from this webhook, check the `status` value in the body. A `Success` status means the `transactions` array has been successfully pushed to the accounting software.



--- 

## Read next

SDK