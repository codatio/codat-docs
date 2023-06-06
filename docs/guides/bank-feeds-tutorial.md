---
title: "Bank transactions reconciliation with QBO"
sidebar_label: "Bank transactions reconciliation"
description: "Example-based tutorial on reconciling bank transactions with QuickBooks Online using Codat's Bank Feeds API"
---

:::info Integrations and languages

This tutorial focuses on reconciling bank feeds with QuickBooks Online (QBO), and uses an [SDK written in Python](https://github.com/codatio/client-sdk-python/tree/main/bankfeeds). We also provide this SDK in Typescript and Go on our [GitHub](https://github.com/orgs/codatio/repositories).

:::

## Tutorial summary

🎯 Our QuickBooks Online bank feeds integration makes it possible for your customers to connect bank accounts from your application to QBO. See how you can support your users by syncing their bank transaction data to QBO, ensuring the records match each other. 

⏳ Estimated time to review: 10-15 minutes

🛠️ This tutorial includes code snippets from our [Python SDK](https://github.com/codatio/client-sdk-python/tree/main/bankfeeds). However, we use the same method names in our [Typescript](https://github.com/codatio/client-sdk-typescript/tree/main/bankfeeds) and [Go](https://github.com/codatio/client-sdk-go/tree/main/bankfeeds) SDKs, which you can use instead.

## Why reconcile bank transactions

Traditionally, bank reconciliation is done by comparing a bank statement to the ledger entries. However, outdated methods like manual data processing and
screen scraping no longer satisfy SMBs' demand for efficient, effortless processes.

Help your SMB customers sync their bank statements digitally to their accounting software and automatically reconcile transactions, therefore removing manual effort, reducing potential for errors, and facilitating transaction matching.

This saves your customers time and gives them the context they need to properly analyze and optimize their spend.

## Solution overview

We have done the heavy lifting for you by building bank feeds integrations with a standardized data model to the accounting platforms your customers already use. This gives you access to real-time data that you can fetch, create, or update to support your customers. In this tutorial, we focus on our QuickBooks Online bank feeds integration. 

:::tip Prerequisites

Make sure you have the QuickBooks Online bank feeds integration enabled in the Codat Portal. Navigate to **Settings > Integrations > Bank feeds** to do so, or [read more](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup) for detailed instructions.

QuickBooks Online bank feeds must be enabled by Intuit before the solution can go into production.

We also expect your SMB users to interact with your application via a UI that you built.

:::

### Preparation

Use our SDKs to easily implement the bank feeds solution in your app. We use our [Python SDK](https://github.com/codatio/client-sdk-python/tree/main/bankfeeds) in this tutorial, but you can also find Typescript and Go SDKs on our [GitHub](https://github.com/orgs/codatio/repositories). 

First, install the client library: 

```python
pip install codat-bank-feeds
```

Next, import the package and add your Base64 encoded API key within an authorization header. To get your API key, navigate to **Developers > API keys** in the [Codat Portal](https://app.codat.io/) and copy your authorization header. In our example, we chose to call our client library `bank_feeds_client`.

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
        frontend ->>+ backend: Connect bank feed
        backend ->> codat: Create company with QBO connection
        codat -->> backend: Company id with QBO connection
        backend ->> codat: Create bank feed account
        codat -->> backend: Bank feed account
        backend ->> codat: Proxy (QBO Auth.)
        codat -->> frontend: QBO Link flow
        loop batch of transactions
            backend ->> codat: Create bank transactions
            codat -->> backend: Push operation
        end
```

### Enable users to initiate connection

We expect your SMB users to interact with your application via a UI that you built. Add a button or a link to your app that lets your users trigger the connection of their bank accounts to QBO. Use an appropriate call-to-action, such as _Connect account to QuickBooks_.

When an SMB user clicks the button or link you added, create a Company with a QBO connection for them.

### Create a company with a QBO connection

Use our [Create company](/bank-feeds-api#/operations/create-company) endpoint to trigger company creation, which will represent the SMB customer in Codat. In response, you will receive a company Id, which is required by subsequent endpoints.

```python
   req = shared.CompanyRequestBody(
    description='Requested early access to the new bank reconciliation scheme.',
    name='Elaborate Events, Inc',
                                  )
   companies_response = bank_feeds_client.companies.create(req)
```

Next, call the [Create connection](/bank-feeds-api#/operations/create-data-connection) endpoint to establish a data link to QBO for the company. We pass the response from the previous endpoint, and also the platform key, which for QBO is `hcws`.

```python
   req = operations.CreateDataConnectionRequest(
       request_body=operations.CreateDataConnectionRequestBody(
           platform_key='hcws',
       ),
       company_id=companies_response.company.id,
   )
   connections_response = bank_feeds_client.connections.create(req)
```

### Create bank feeds bank accounts

Now, use the [Create bank feed bank accounts](/bank-feeds-api#/operations/create-bank-feed) to add source bank accounts. These are the accounts the SMB user will be able to connect to QBO. In the response, you will receive a list of created bank accounts.

Note that `feed_start_date` value is chosen by your SMB user in the QBO UI and is used to limit the load of historic transactions to seven days. 

```python
req = operations.CreateBankFeedRequest(
    request_body=[
        shared.BankFeedAccount(
            account_name='Account 002',
            account_number='12345670',
            account_type='Debit',
            balance=6531.4,
            currency='GBP',
            feed_start_date='dolores', WHAT IS DIS IT S NOT ANYWHERE? doesnt seem to be needed
            id='352c5955-907a-4ff1-a3a2-fa9467739251',
            modified_date='2023-01-09T14:14:14.1057478Z',
            sort_code='123456',
            status='Pending',  IS THIS SOMETHING THAT NEEDS TO BE PASSED IN THE REQUEST? doesnt seem to be needed
        ),
    ],
    company_id=companies_response.company.id,
    connection_id=connections_response.connection.id,
)

bank_accounts_response = bank_feeds_client.bank_feed_accounts.create(req)
```

### Authorize the connection via proxy

Finally, use our [Proxy](/bank-feeds-api#/operations/proxy) endpoint to authorize the previously created data connection by querying QuickBooks Online's own authorization flow endpoints. 

DO WE NEED TO DIRECT THE PERSON TO A QBO WEB ADDRESS, OR THIS ENDPOINT DOES THAT BY ITSELF?


```python

req = operations.ProxyRequest(
    company_id=companies_response.company.id,
    connection_id=connections_response.connection.id,
    endpoint='generatecredentials?dataconnectionid={connection_id}',
)

proxy_response = bank_feeds_client.connections.proxy(req)
```

WHAT DOES THE RESPONSE PROVIDE? THE URL? does it auto open? 

When an SMB user has completed authorization and connected one or more bank accounts to QuickBooks Online, you can create and sync their bank transactions with QBO, one account at a time. 

### Create bank feeds bank transactions

Note the following guidelines before syncing bank transactions, or [read more](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions) about them:

- You can push historic (back-dated) transactions that are up to seven days old based on the `feed_start_date`, as chosen by the SMB user in the QBO UI.
- Syncing future-dated transactions to QBO is not supported.
- You can only sync bank transactions from one connected account at a time.
- Bank transactions must be synced in chronological order (from earliest to latest) based on the `cleared_on_date`.
- Bank transactions can't be older than the most recent transaction available on the destination bank account.
- Up to 1000 bank transactions can be synced at a time.

Use the [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint to post your SMB user's bank transactions to QuickBooks Online. Because of the way bank transactions work, we recommend you post seven days of transactions on the initial sync. For subsequent syncs, we recommend you post daily transaction data. 

```python
req = operations.CreateBankTransactionsRequest(
    bank_transactions=shared.BankTransactions(
        account_id=bank_accounts_response.account.id,
        amount=7991.59,
        balance=8009.11,
        cleared_on_date='2023-01-10T14:14:14.1057478Z',
        description='HSBC Covent Grdn ATM W',
        id='ca1ba928-fc81-4674-acb7-39205929396f',
        modified_date='2023-01-09T14:14:14.1057478Z',
        reconciled=False,
        source_modified_date='2023-01-09T14:14:14.1057478Z',
        transaction_type=shared.BankTransactionType.ATM,
    ),
    account_id=bank_accounts_response.account.id, ACCOUNT ID TWICE?
    allow_sync_on_push_complete=False,
    company_id=companies_response.company.id,
    connection_id=connections_response.connection.id,
    timeout_in_minutes=613064,
)

create_transactions_response = bank_feeds_client.bank_account_transactions.create(req)
```
Repeat the request for the remainder of the SMB user's source bank accounts.

### Enhance your users' experience

Once the bank transactions have been synced between the bank feed and QuickBooks Online, you can enhance your SMB user's experience and allow them to view the synced transactions and their status in your application's UI. 

To display the bank transactions for a specific bank account, use the [List bank transactions for a bank account](/bank-feeds-api#/operations/list-bank-account-transactions) endpoint. 

```python
req = operations.ListBankAccountTransactionsRequest(
    account_id=bank_accounts_response.account.id,
    company_id=companies_response.company.id,
    connection_id=connections_response.connection.id,
    order_by='-modifiedDate',
    page=1,
    page_size=100,
    query='quidem',
)

list_transactions_response = bank_feeds_client.bank_account_transactions.list(req)
```

:::tip Recap

That's it - you have followed Codat's bank transactions reconciliation process flow and understood how to implement it in code. You can now use this tutorial as a basis for your application.

:::

---

## Read next

* [Overview of the bank transaction reconciliation use case](/usecases/summary/reconciling-bank-transactions)
* [Overview of other use cases supported by Codat](/usecases/overview)