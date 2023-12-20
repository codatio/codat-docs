---
title: "Import bank transactions"
description: "Learn how to import bank transaction data from your application to your customer's accounting platform"
sidebar_label: Import transactions
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

Once a company has mapped their source account to a target account, you can begin creating bank transactions in their accounting platform using the established [bank feed](../terms/bank-feed).

## Generate transactions

Before you can record your customer's bank transactions in their accounting platform, you need to generate a `transactions` object for each transaction that has been made from their account. 

Collect transaction data within your own application and map it to Codat's [Bank transactions](/bank-feeds-api#/schemas/BankTransactions) schema. Add this to [Create bank transactions](/bank-feeds-api#/schemas/CreateBankTransactions), including the `sourceAccount` id that the transactions should be associated with at the top level.  

:::caution Transaction signs
Make sure the transaction `amount` signs align with the `transactionType`. Codat issues a warning for inconsistencies, such as a `Debit` transaction with a positive amount.
:::

## Push bank transactions

In Codat, creating a bank transaction is a two-step process (learn more about it [here](/using-the-api/push)). It requires you to check the data model of the data type you want to create first to ensure all required properties are included in your request. 

Next, you are ready to create the bank transaction. You will receive `pushOperation` key in return. You can then use it to monitor the status of the operation, or display its results.

```mermaid

sequenceDiagram
    participant app as Your application
    participant codat as Codat


    app ->> codat: Create `bankTransaction` to represent credits and debits
    codat -->> app: pushOperation key

    codat -->> app: pushOperation status webhook

    app ->> codat: retrieve pushOperation detail

```

### Create bank transactions

We recommend regularly uploading transactions throughout the day so that your customers' bank feed balances are close to real-time. This enhanced accuracy helps companies with their planning and forecasting.

Use our [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint to create bank transactions. In response, you will receive a `pushOperation` object with a `Pending` status.

:::caution Quantity limit
A maximum of 1000 bank transactions can be pushed at a time.
:::

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const transactionsResponse = bankFeedsClient.transactions.create({
    createBankTransactions: {
      accountId: sourceAccountResponse.sourceAccount.id,
      transactions: [
        {
            id: "63e2b848-951a-4657-a889-ded00f0e616a",
            amount: 100.0,
            balance: 100.0,
            date: "2023-08-22T10:21:00.000Z",
            description: "Repayment of Credit Card",
            transactionType: BankTransactionType.Credit
        },
        {
            id: "710ed9f9-feb6-4ab7-9055-05a26d31718c",
            amount: -75.0,
            balance: 25.00,
            date: "2023-08-22T10:22:00.000Z",
            description: "Amazon US | $1.25 | PXDFGSDTR | c2dddf4c-eece-4a9b-a392-8c8e65b59e47",
            transactionType: BankTransactionType.Debit
        }
      ],
    },
    accountId: sourceAccountResponse.sourceAccount.id,
    companyId: companyResponse.company.id,
    connectionId: connectionResponse.connection.id
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
transactions_request = operations.CreateBankTransactionsRequest(
    create_bank_transactions=shared.CreateBankTransactions(
        account_id=source_account_response.source_account.id,
        transactions=[
            shared.BankTransactions(
                id='63e2b848-951a-4657-a889-ded00f0e616a',
                amount=Decimal('100.0'),
                balance=Decimal('100.0'),
                date_='2023-08-22T10:21:00.000Z',
                description='Repayment of Credit Card',
                transaction_type=shared.BankTransactionType.CREDIT
            ),
            shared.BankTransactions(
                id='710ed9f9-feb6-4ab7-9055-05a26d31718c',
                amount=Decimal('-75.0'),
                balance=Decimal('25.0'),
                date_='2023-08-22T10:22:00.000Z',
                description='Amazon US | $1.25 | PXDFGSDTR | c2dddf4c-eece-4a9b-a392-8c8e65b59e47',
                transaction_type=shared.BankTransactionType.DEBIT
            ),
        ],
    ),
    account_id=source_account_response.source_account.id,
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id
)

transactions_response = bank_feeds_client.transactions.create(transactions_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var transactionsResponse = await bankFeedsClient.Transactions.CreateAsync(new() {
    CreateBankTransactions = new CreateBankTransactions() {
        AccountId = sourceAccountResponse.SourceAccount.Id,
        Transactions = new List<BankTransactions>() {
            new BankTransactions() {
                Id = "63e2b848-951a-4657-a889-ded00f0e616a",
                Amount = 100.0M,
                Balance = 100.0M,
                Date = "2023-08-22T10:21:00.000Z",
                Description = "Repayment of Credit Card",
                TransactionType = BankTransactionType.Credit
            },
            new BankTransactions() {
                Id = "710ed9f9-feb6-4ab7-9055-05a26d31718c",
                Amount = -75.0M,
                Balance = 25.0M,
                Date = "2023-08-22T10:22:00.000Z",
                Description = "Amazon US | $1.25 | PXDFGSDTR | c2dddf4c-eece-4a9b-a392-8c8e65b59e47",
                TransactionType = BankTransactionType.Dedit
            },
        },
    },
    AccountId = sourceAccountResponse.SourceAccount.Id,
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
transactionsResponse, err := s.Transactions.Create(ctx, operations.CreateBankTransactionsRequest{
    CreateBankTransactions: &shared.CreateBankTransactions{
        AccountID: sourceAccountResponse.SourceAccount.ID,
        Transactions: []shared.BankTransactions{
            shared.BankTransactions{
                ID: bankfeeds.String("63e2b848-951a-4657-a889-ded00f0e616a"),
                Amount: types.MustNewDecimalFromString("100.0"),
                Balance: types.MustNewDecimalFromString("100.0"),
                Date: bankfeeds.String("2023-08-22T10:21:00.000Z"),
                Description: bankfeeds.String("Repayment of Credit Card"),
                TransactionType: BankTransactionTypeCredit
            },
            shared.BankTransactions{
                ID: bankfeeds.String("710ed9f9-feb6-4ab7-9055-05a26d31718c"),
                Amount: types.MustNewDecimalFromString("-75.0"),
                Balance: types.MustNewDecimalFromString("25.0"),
                Date: bankfeeds.String("2023-08-22T10:22:00.000Z"),
                Description: bankfeeds.String("Amazon US | $1.25 | PXDFGSDTR | c2dddf4c-eece-4a9b-a392-8c8e65b59e47"),
                TransactionType: BankTransactionTypeDebit
            },
        },
    },
    AccountID: sourceAccountResponse.SourceAccount.ID,
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```
</TabItem>

</Tabs>

:::caution QuickBooks Online bank feeds syncing info

Transactions pushed to QuickBooks Online bank feeds will show a `Success` status when they validated and saved by Codat. However, they will only become available in their accounting software after synchronization between QBO and Codat.

QBO automatically polls Codat daily for updates, and users can also manually trigger that sync from the QBO interface.

:::


### Monitor request status

After you submit your request to create bank transactions to our API, it will have a status of `Pending`. Use the [Push Operation Status Changed](/bank-feeds/setup#webhooks) webhook to track when the status of your push operation changes to `Success` or `Failed`.

If the request is successful, you will receive a webhook like this:

```json
{
 "CompanyId":"c2dddf4c-eece-4a9b-a392-8c8e65b59e47",
 "RuleId":"5a6f112d-b0fa-4c0b-9ea4-7dd4075bc43d",
 "Type":"Push Operation Status Changed",
 "AlertId":"a6bb69d5-631c-4732-8e4e-18bea36aea20",
 "Message":"bankTransactions triggered notification for PushOperationStatusChanged at 2023-09-12T18:19:42.742Z",
 "Data":{
    "dataType":"bankTransactions",
    "status":"Success",
    "pushOperationKey":"e881111f-b6a4-4740-b125-340a6c300cd3"
    }
}
```

If you want to see a history of all push operations for a specific company, retrieve these by calling the [List create operations](/bank-feeds-api#/operations/list-create-operations) endpoint.
