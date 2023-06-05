---
title: "Bank feeds reconciliation"
sidebar_label: Bank feeds reconciliation
description: "Example-based tutorial on reconciling bank transactions with QuickBooks Online with Codat"
---

:::info 

This tutorial focuses on reconciling bank feeds with QuickBooks Online (QBO), and uses an [SDK written in Python](https://github.com/codatio/client-sdk-python/tree/main/bankfeeds). We also provide this SDK in Typescript and Go on our [GitHub](https://github.com/orgs/codatio/repositories).    
:::

## Tutorial summary

🎯 Our QuickBooks Online bank feeds integration makes it possible for your customers to connect bank accounts from your application to QBO. See how you can support your users by syncing their bank transaction data to QBO, ensuring the records match each other. 

⏳ Estimated time to review: 10-15 minutes

🛠️ This tutorial includes code snippets from our [Python SDK](https://github.com/codatio/client-sdk-python/tree/main/bankfeeds). However, we use the same method names in our [Typescript](https://github.com/codatio/client-sdk-typescript/tree/main/bankfeeds) and [Go](https://github.com/codatio/client-sdk-go/tree/main/bankfeeds) SDKs.

## Why reconcile bank transactions

benefits of bank feeds recon etc

One of the key considerations for SMBs in a post-pandemic world is
interoperability between their bank account and their accounting
software, and outdated methods like manual data reconciliation and
screen scraping no longer satisfy their demand for efficient, effortless
processes.
Instead, SMBs are turning to solutions like bank feeds, which
transmit standardized banking and expense data directly into their
accounting system.

Banks and neobanks need to be able to support a wide range of
services in real time—from accounts to loans to corporate cards—to
meet growing demand for instant, transparent solutions.
But banking data on its own is just numbers in a vacuum—it doesn’t
provide the contextual details SMBs need to make informed business
decisions. Someone from their finance team still has to spend hours
cross-referencing and reconciling each expense in their accounting
system to get a clear picture of the company’s finances.
Syncing an SMB’s bank statements digitally to their accounting
software and automatically reconciling transactions means saving
them time and giving them the context they need to properly analyze
and optimize their spend.


Codat helps by: 

Bank reconciliation is the process of ensuring that the information in a business’s accounting records matches the information in their bank account. Traditionally, this would be done by comparing a bank statement to the ledger entries, but our Accounting API makes it possible to upload bank transactions to the accounting platform.

This saves your customers time by removing manual entry and importing bank transactions, removes the potential for errors, and facilitates matching by providing additional details, like a merchant's name.

We can support traditional banks and neobanks in their activity by leveraging our Accounting API product. We have done the heavy lifting for you by building integrations with a standardized data model to the accounting platforms your customers already use. This gives you access to real-time data that you can pull, create, or update to support your use case.

## Solution overview

Financial institutions can enable matching of bank accounts with
existing accounts in their SMB customers’ accounting system—or
allow them to create new accounts.
Bank transactions can be pushed against the relevant bank accounts
to show credits and debits, removing the administrative logjam
typically associated with manual reconciliation.

:::tip Prerequisites

Make sure you have the QuickBooks Online bank feeds integration enabled in the Codat Portal. Navigate to **Settings > Integrations > Bank feeds** to do so, or [read more](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup) for detailed instructions.

QuickBooks Online bank feeds must be enabled by Intuit before the solution can go into production.
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

### Using Codat for bank feeds reconciliation

We expect your SMB users to interact with your application via a UI. Add a button or a link to your app that lets your users trigger the connection of their bank accounts to QBO. 

Next, add a button or link to your application that prompts your SMB users to connect their bank accounts to QBO. Use an appropriate call-to-action, such as Connect account to QuickBooks.

Add functionality—for example, a button or link—to your application that lets your users connect their bank accounts to QBO for the purposes of viewing bank feeds. Use an appropriate UI label, such as Connect account to QuickBooks.

When an SMB user clicks the button or link you added, create a Company with a QBO connection for them:

#### Create a company with a QBO connection

Use our [Create company](https://docs.codat.io/bank-feeds-api#/operations/create-company) endpoint to trigger company creation, which will represent the SMB customer in Codat. In response, you will receive a company `id`.

```python
   req = shared.CompanyRequestBody(
    description='Requested early access to the new bank reconciliation scheme.',
    name='Elaborate Events, Inc',
                                  )
   companies_response = bank_feeds_client.companies.create(req)
```

Next, call the [Create connection](https://docs.codat.io/bank-feeds-api#/operations/create-data-connection) endpoint to establish a data link to QBO for the company. We pass the response from the previous endpoint, and also the platform key, which for QBO is `hcws`.

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

Now, use the [Create bank feed bank accounts](https://docs.codat.io/bank-feeds-api#/operations/create-bank-feed) to add source bank accounts. These are the accounts the SMB user will be able to connect to QBO. In the response, you will receive a list of created bank accounts.

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

Finally, use our [Proxy](https://docs.codat.io/bank-feeds-api#/operations/proxy) endpoint to authorize the previously created data connection by querying the QBO auth flow endpoints. 

DO WE NEED TO DIRECT THE PERSON TO A QBO WEB ADDRESS, OR THIS ENDPOINT DOES THAT BY ITSELF?

requests for the additional banking data types are routed directly to the relevant endpoints

```python

req = operations.ProxyRequest(
    company_id=companies_response.company.id,
    connection_id=connections_response.connection.id,
    endpoint='generatecredentials?dataconnectionid={connectionId}',
)

proxy_response = bank_feeds_client.connections.proxy(req)
```

When an SMB user has connected one or more bank accounts to QuickBooks Online, you can enable them to create and sync their bank transactions with QBO, one account at a time. 

Because of the way bank transactions work, we recommend you post seven days of transactions on the initial push. For subsequent pushes, we recommend you post daily transaction data. 


### Create bank feeds bank transactions

:::info Bank transaction history
Codat supports pushing historic (back-dated) transactions which are up to one week old.
Future-dated bank feeds are not supported
Note that pushing future (future-dated) transactions to QBO Bank Feeds is not supported by Codat.
:::

Use the [Create bank transactions](https://docs.codat.io/bank-feeds-api#/operations/create-bank-transactions) endpoint to post your SMB user's bank transactions to QuickBooks Online.

[Read more](https://docs.codat.io/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions) on these prerequisites.

Make the following requests to the Codat API. All push requests are asynchronous.
Push bank transactions from an SMB user's connected bank account using the Create bank transactions endpoint. Note that:
You can only push bank transactions from one connected account at a time.
Bank transactions must be pushed in chronological order. (from earliest to latest) by the clearedOnDate.
Bank transactions can't be older than the most recent transaction available on the destination bank account.
QBO fetches bank transactions for a maximum of the past seven days.
Bank transactions must have a date set to the prior or current day.
Up to 1000 bank transactions can be pushed at a time.

You can push historic transactions of up to seven days based on the feed start date, as chosen by the SMB user in the QBO UI.

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

### Enhancing the user experience

Once the bank transactions have been synced between the bank feed and QuickBooks Online, enable your SMB user to view the synced transactions and their status in a UI - this should be built into your app. 

To display the bank transactions for a specific bank account, use the [List bank transactions for a bank account](https://docs.codat.io/bank-feeds-api#/operations/list-bank-account-transactions) endpoint. 

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
That's it - you have followed Codat's bank feeds reconciliation process flow and understood how to implement it in code. You can now use this tutorial as a basis for your application.
:::

REMEMBER TO ALSO CHANGE THIS PAGE https://docs.codat.io/usecases/summary/reconciling-bank-transactions  

## Read next

* [Overview of the bank feeds use case](/usecases/summary/reconciling-bank-transactions)
* [Overview of other use cases supported by Codat](/usecases/overview)