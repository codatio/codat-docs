---
title: "Bank transactions reconciliation with QBO Bank Feeds"
description: "Example-based tutorial on reconciling bank transactions with QuickBooks Online using Codat's Bank Feeds API"
displayed_sidebar: "bankfeeds"
hide_title: true
hide_description: true
banner_title: Bank transactions reconciliation with QBO Bank Feeds
banner_image: "/img/banners/bank-feeds.png"
banner_text: "Example-based tutorial on reconciling bank transactions with QuickBooks Online using Codat's Bank Feeds"
---

:::info Integrations and languages

This tutorial focuses on reconciling bank feeds with QuickBooks Online (QBO), and uses an [SDK written in Python](https://github.com/codatio/client-sdk-python/tree/main/bankfeeds). We also provide this SDK in Typescript and Go on our [GitHub](https://github.com/orgs/codatio/repositories).

:::

## Summary

🎯 Our QuickBooks Online Bank Feeds integration makes it possible for your customers to connect bank accounts from your application to QBO. See how you can support your users by syncing their bank transaction data to QBO Bank Feeds, ensuring the records match each other. 

⏳ Estimated time to review: 10-15 minutes

🛠️ This tutorial includes code snippets from our [Python SDK](https://github.com/codatio/client-sdk-python/tree/main/bankfeeds). However, we use the same method names in our [Typescript](https://github.com/codatio/client-sdk-typescript/tree/main/bankfeeds) and [Go](https://github.com/codatio/client-sdk-go/tree/main/bankfeeds) SDKs, which you can use instead.

## Why reconcile bank transactions

Traditionally, bank reconciliation is done by comparing a bank statement to the ledger entries. However, outdated methods like manual data processing and
screen scraping no longer satisfy SMBs' demand for efficient, effortless processes.

Help your SMB customers sync their bank statements digitally to their accounting software and automatically reconcile transactions, therefore removing manual effort, reducing potential for errors, and facilitating transaction matching.

This saves your customers time and gives them the context they need to properly analyze and optimize their spend.

## Solution overview

We have done the heavy lifting for you by building bank feeds integrations with a standardized data model to the accounting platforms your customers already use. This gives you access to real-time data that you can fetch, create, or update to support your customers. In this tutorial, we focus on our QuickBooks Online Bank Feeds integration. 

:::tip Prerequisites

1. Make sure you have enabled the QuickBooks Online Bank Feeds integration. You can do that in the [Codat Portal](https://app.codat.io/settings/integrations/bankfeeds), or [read more](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-setup) for detailed instructions.

2. Intuit must have approved your company to appear in the QuickBooks Online bank selection screen. Submit a request to Codat so that we can organize this with Intuit on your behalf. 

We also expect that your application has a UI that your SMB users interact with.

:::

### Preparation

Use our SDKs to easily implement the bank feeds solution in your app. We use the [Python SDK](https://github.com/codatio/client-sdk-python/tree/main/bankfeeds) in this tutorial, but you can also find Typescript and Go SDKs on [GitHub](https://github.com/orgs/codatio/repositories). 

First, install the client library: 

```python
pip install codat-bank-feeds
```

Next, import the package and add your Base64 encoded API key within an authorization header. You can copy your authorization header in the [Developers](https://app.codat.io/developers/api-keys) section of the Codat Portal. In our example, we chose to call the client library `bank_feeds_client`.

```python
import codatbankfeeds
from codatbankfeeds.models import operations, shared

bank_feeds_client = codatbankfeeds.CodatBankFeeds(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)
```

### Bank feeds process flow

``` mermaid
    sequenceDiagram
        participant frontend as User 
        participant backend as Bank
        participant codat as Codat
        participant qbo as QBO Portal
        frontend ->> backend: Connect bank feed
        backend ->> codat: Create company with QBO Bank Feeds connection
        codat -->> backend: Company Id with QBO Bank Feeds connection
        backend ->> codat: Create bank feed account
        codat -->> backend: Bank feed account
        backend ->> codat: Get QBO Bank Feeds credentials via proxy
        codat -->> backend: QBO Bank Feeds credentials
        backend -->> frontend: QBO Bank Feeds credentials
        frontend ->> qbo: Complete QBO Bank Feeds link
        loop batch of transactions
            backend ->> codat: Create bank transactions
            codat -->> backend: Confirm operation status
        end
        loop batch of transactions, periodically
            qbo ->> codat: Request bank transactions
            codat -->> qbo: Provide bank transactions
        end
```

## Solution walkthrough

Provide your users with a link or a button in your app so they can trigger the connection of their bank accounts to QBO Bank Feeds. Use an appropriate call-to-action, such as _Connect account to QuickBooks_.

When an SMB user clicks the button or link you added, initiate the process described below to create a Codat company with a QBO Bank Feeds connection and provide opportunity to authorize that connection.

### Create a company with a QBO Bank Feeds connection

Use our [Create company](/bank-feeds-api#/operations/create-company) endpoint to trigger company creation, which will represent your SMB customer in Codat. In response, you will receive a company Id, which is required by subsequent endpoints.

```python
   req = shared.CompanyRequestBody(
    description='Requested early access to the new bank reconciliation scheme.',
    name='Elaborate Events, Inc',
                                  )
   companies_response = bank_feeds_client.companies.create(req)
```

Next, call the [Create connection](/bank-feeds-api#/operations/create-data-connection) endpoint to establish a data link to QBO Bank Feeds for the company. We pass the response from the previous endpoint in the request, and also include the platform key, which for QBO Bank Feeds is `hcws`.

```python
   req = operations.CreateDataConnectionRequest(
       request_body=operations.CreateDataConnectionRequestBody(
           platform_key='hcws', #Codat's platform key for QBO Bank Feeds
       ),
       company_id=companies_response.company.id,
   )
   connections_response = bank_feeds_client.connections.create(req)
```

### Create bank feeds bank accounts

Now, use the [Create bank feed bank accounts](/bank-feeds-api#/operations/create-bank-feed) endpoint to add your SMB's source bank accounts to Codat. These are the accounts the SMB user will be able to connect to QBO Bank Feeds. In the response, you will receive a list of created bank accounts.

```python
req = operations.CreateBankFeedRequest(
    request_body=[
        shared.BankFeedAccount(
            account_name='Account 002',
            account_number='12345670',
            account_type='Debit',
            balance=6531.4,
            currency='GBP',
            id='352c5955-907a-4ff1-a3a2-fa9467739251',
            sort_code='123456',
        ),
    ],
    company_id=companies_response.company.id,
    connection_id=connections_response.connection.id,
)

bank_accounts_response = bank_feeds_client.bank_feed_accounts.create(req)
```

### Authorize the connection via proxy

Finally, use our [Proxy](/bank-feeds-api#/operations/proxy) endpoint to authorize the previously created data connection. Embed the call to this endpoint in the UI flow the user triggered when choosing to link their bank accounts. 

In response, you will receive login credentials that your user needs to enter in QBO Banking to link a bank account. Share them with the user, and consider providing instructions on steps to take in QBO. For example, this is how we manage it in our QBO Link flow:

![](/img/use-cases/bank-feeds/0027-qbo-feeds-instruction.PNG)

```python

req = operations.ProxyRequest(
    company_id=companies_response.company.id,
    connection_id=connections_response.connection.id,
    endpoint='generatecredentials?dataconnectionid={connection_id}',
)

proxy_response = bank_feeds_client.connections.proxy(req)
```

When completing the authorization in QBO Banking, your user chooses the bank accounts they want to connect. At the same time, they also choose a `feed_start_date` value that is then used to limit the load of historic transactions to seven days.

Once this is complete, you can sync transactions between the bank and Codat. QBO will then poll Codat periodically to pull these transactions to their bank feed.

### Sync bank feeds bank transactions

:::tip Bank transactions guidelines

- You can push historic (back-dated) transactions that are up to seven days old based on the `feed_start_date`, as chosen by the SMB user in the QBO UI.
- Syncing future-dated transactions to QBO is not supported.
- You can only sync bank transactions from one connected account at a time.
- Bank transactions must be synced in chronological order (from earliest to latest) based on the `cleared_on_date`.
- Bank transactions can't be older than the most recent transaction available on the destination bank account.
- Up to 1000 bank transactions can be synced at a time.

:::

Use the [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint to post your SMB user's bank transactions to Codat. 

Because of the way bank transactions work, we recommend you post seven days of transactions on the initial sync. For subsequent syncs, we recommend you post daily transaction data. 

```python
req = operations.CreateBankTransactionsRequest(
    create_bank_transactions=shared.CreateBankTransactions(
        account_id='bank_accounts_response.account.id',
        transactions=[
            shared.CreateBankAccountTransaction(
                amount=2088.76,
                date_='2022-10-23T00:00:00.000Z',
                description='HSBC Covent Grdn ATM W',
                id='fa946773-9251-4aa5-ac3f-5ad019da1ffe',
            ),
            shared.CreateBankAccountTransaction(
                amount=4686.51,
                date_='2022-10-23T00:00:00.000Z',
                description='Forbes subscription',
                id='097b0074-f154-471b-9e6e-13b99d488e1e',
            ),
            shared.CreateBankAccountTransaction(
                amount=5759.47,
                date_='2022-10-23T00:00:00.000Z',
                description='Wholesale Balloons, Ltd',
                id='450ad2ab-d442-4698-82d5-02a94bb4f63c',
            ),
        ],
    ),
    account_id=bank_accounts_response.account.id,
    company_id=companies_response.company.id,
    connection_id=connections_response.connection.id,
)

create_transactions_response = bank_feeds_client.bank_account_transactions.create(req)
```
Repeat the request for the remainder of the SMB user's source bank accounts. Keep the bank transactions in Codat up to date, as QBO polls Codat periodically to pull these transactions to their bank feeds. 

:::tip Recap

That's it - you have followed Codat's bank transactions reconciliation process flow and understood how to implement it in code. You can now use this tutorial as a basis for your application.

:::

---

## Read next

* Expand your coverage of bank feds to [Xero](/integrations/bank-feeds/xero-bank-feeds/) and [Sage](/integrations/bank-feeds/sage-bank-feeds/)
* Learn more about how Codat can automate your lending solutions on the examples of [loan qualification](/lending/guides/invoice-finance/introduction) and [invoice financing](/lending/guides/invoice-finance/introduction)
