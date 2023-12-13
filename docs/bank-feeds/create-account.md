---
title: "Configure customer in Codat"
description: "Create a company, its connection, and a source account that form the structure required to establish a bank feed"
sidebar_label: Configure customer
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

When implementing your bank feed solution, you need to create your customer as a [company](../terms/company) in Codat before registering their accounting platform as a connection and creating a source account to represent the company's actual bank account.

You can see how these elements fit together and where they sit in the overall bank feeds process on the diagram below.

![A diagram demonstrating the relationship between various Codat concepts and subsequent steps of the Bank Feeds API process](/img/bank-feeds/bankfeeds-concept-flow.png)

:::tip Authorize your API calls
Remember to [authenticate](/using-the-api/authentication) when making calls to our API. Navigate to **Developers > API keys** in the Portal to pick up your authorization header.
:::

## Create a company

Within Bank Feeds API, a company represents your SMB customer that wishes to export their transactions from your application to their accounting software. 

Use the [Create company](/bank-feeds-api#/operations/create-company) endpoint to represent your customer in Codat.
Make sure to store the company ID as you will use it to establish a connection to an accounting platform. 

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const companyResponse = bankFeedsClient.companies.create({
    name: companyName,
});

if(companyResponse.statusCode == 200){
  throw new Error("Could not create company")
}

const companyId = companyResponse.company.id
console.log(companyId)
```

</TabItem>

<TabItem value="python" label="Python">

```python
company_request = shared.CompanyRequestBody(
    name=company_name,
)

company_response = bank_feeds_client.companies.create(company_request)

if company_response.status_code != 200:
  raise Exception('Could not create company')

company_id = company_response.company.id
print(company_id)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var companyResponse = await bankFeedsClient.Companies.CreateAsync(new() {
    Name = companyName,
});

if(companyResponse.StatusCode != 200){
  throw new Exception("Could not create company");
}

var companyId = companyResponse.Company.Id;
console.log(companyId)
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
companyResponse, err := bankFeedsClient.Companies.Create(ctx, &shared.CompanyRequestBody{
  Name: companyName,
	})

if companyResponse.StatusCode == 200 {
  companyID := companyResponse.Company.ID
  fmt.Println("%s", companyID)
}
```
</TabItem>

</Tabs>

## Create a connection

Next, use the [Create connection](/bank-feeds-api#/operations/create-connection) endpoint to connect the company to an accounting data source via one of our integrations. This will allow you to synchronize data with that source. 

In the request body, specify a `platformKey` of the accounting platform you're looking to connect.

| Accounting platform | platformKey |
| ---  | ---  |
| Quickbooks Online Bankfeeds | `hcws` |
| Oracle NetSuite | `akxx` |
| Xero | `gbol` |
| FreeAgent | `fbrh` |
| Sage bank feeds | `olpr` |

As an example, let's create a QuickBooks Online (QBO) connection. In response, the endpoint returns a `dataConnection` object with a `PendingAuth` status and a `linkUrl`. Direct your customer to the `linkUrl` to initiate our [Link auth flow](/auth-flow/overview) and enable them to authorize this connection.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const connectionResponse = bankFeedsClient.connections.create({
    requestBody: {
      platformKey: "hcws",
    },
    companyId: companyResponse.company.id,
  });

console.log(connectionResponse.connection.linkUrl)
```

</TabItem>

<TabItem value="python" label="Python">

```python
connection_request = operations.CreateConnectionRequest(
    request_body=operations.CreateConnectionRequestBody(
        platform_key='hcws',
    ),
    company_id=company_response.company.id,
)

connection_response = bank_feeds_client.connections.create(connection_request)

console.log(connection_response.connection.link_url)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var connectionResponse = await bankFeedsClient.Connections.CreateAsync(new() {
    RequestBody = new CreateConnectionRequestBody() {
        PlatformKey = "hcws",
    },
    CompanyId = companyResponse.Company.Id,
});

Console.WriteLine(connectionResponse.Connection.LinkUrl)
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
connectionResponse, err := bankFeedsClient.Connections.Create(ctx, operations.CreateConnectionRequest{
    RequestBody: &operations.CreateConnectionRequestBody{
        PlatformKey: bankfeeds.String("hcws"),
    },
    CompanyID: companyResponse.Company.ID,
})

fmt.Println(connectionResponse.Connection.LinkUrl)
```
</TabItem>

</Tabs>

:::info One-time password for QBO

For QBO, the `linkUrl` contains a one-time password (OTP) that expires after one hour. If the OTP has expired, your customer will receive a `401` error when loading the page. Generate a new OTP by calling the [Get connection](/bank-feeds-api#/operations/get-connection) endpoint.

<details>
  <summary><b>View code snippets</b></summary>

<Tabs>
<TabItem value="nodejs" label="TypeScript">

```javascript
const connectionOtpResponse = bankFeedsClient.connections.get({
    companyId: companyResponse.company.id,
    connectionId: connectionResponse.connection.id,
  });

console.log(connectionOtpResponse.connection.linkUrl)
```

</TabItem>

<TabItem value="python" label="Python">

```python

connection_otp_request = operations.GetConnectionRequest(
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id,
)

connection_otp_response = bank_feeds_client.connections.get(connection_otp_request)

console.log(connection_otp_response.connection.link_url)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var connectionOtpResponse = await bankFeedsClient.Connections.GetAsync(new() {
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id,
});

Console.WriteLine(connectionOtpResponse.Connection.LinkUrl)
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
connectionOtpResponse, err := bankFeedsClient.Connections.Get(ctx, operations.GetConnectionRequest{
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID,
})

fmt.Println(connectionOtpResponse.Connection.LinkUrl)
```
</TabItem>

</Tabs>

</details>

:::

### Deauthorize a connection

If your customer wants to revoke their approval and sever the connection to their accounting package, use the [Unlink connection](/bank-feeds-api#/operations/unlink-connection) endpoint.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const unlinkResponse = bankFeedsClient.connections.unlink({
    requestBody: {
      status: DataConnectionStatus.Unlinked
    },
    companyId: companyResponse.company.id,
    connectionId: connectionResponse.connection.id,
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
unlink_request = operations.UnlinkConnectionRequest(
    request_body=operations.UnlinkConnectionUpdateConnection(
      status=shared.DataConnectionStatus.UNLINKED
    ),
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id,
)

unlink_response = bank_feeds_client.connections.unlink(req)

```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var unlinkResponse = await bankFeedsClient.Connections.UnlinkAsync(new() {
    RequestBody = new UnlinkConnectionUpdateConnection() {
      Status = DataConnectionStatus.Unlinked
    },
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
unlinkResponse, err := bankFeedsClient.Connections.Unlink(ctx, operations.UnlinkConnectionRequest{
    RequestBody: &operations.UnlinkConnectionUpdateConnection{
      Status: shared.DataConnectionStatusUnlinked
    },
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID,
})
```
</TabItem>

</Tabs>

## Create a source account

Finally, create a source account using our [Create source account](/bank-feeds-api#/operations/create-source-account) endpoint. It represents the company's actual financial account, savings account or credit card within Codat. We categorize accounts as a credit or a debit account type for standardization. 

As an example, let's create a debit account. If the source account passes validation, you will receive a **synchronous response** with a `200` status code indicating a successful operation.

:::note UK-specific requirements

For bank accounts in GBP, `sortCode` is also a required field. 

:::

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const sourceAccountResponse = bankFeedsClient.sourceAccounts.create({
    sourceAccount: {
      id: "ac-001",
      accountName: "Checking Account",
      accountType: "Debit",
      accountNumber: "01120912",
      currency: "USD",
      balance: 4002
    },
    companyId: companyResponse.company.id,
    connectionId: connectionResponse.connection.id
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
source_account_request = operations.CreateSourceAccountRequest(
    id="ac-001",
    accountName="Checking Account",
    accountType="Debit",
    accountNumber="01120912",
    currency="USD",
    balance=4002
  ),
  company_id=company_response.company.id,
  connection_id=connection_response.connection.id
)

source_account_response = bank_feeds_client.source_accounts.create(req)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var sourceAccountResponse = await bankFeedsClient.SourceAccounts.CreateAsync(new() {
    SourceAccount = new SourceAccount() {
      Id = "ac-001",
      AccountName = "Checking Account",
      AccountType = "Debit",
      AccountNumber = "01120912",
      Currency = "USD",
      Balance = 4002
    },
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});

```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
sourceAccountResponse, err := bankFeedsClient.SourceAccounts.Create(ctx, operations.CreateSourceAccountRequest{
    SourceAccount: &shared.SourceAccount{
      ID: bankfeeds.String("ac-001"),
      AccountName: bankfeeds.String("Checking Account"),
      AccountType: bankfeeds.String("Debit"),
      AccountNumber: bankfeeds.String("01120912"),
      Currency: bankfeeds.String("USD"),
      Balance: 4002
    },
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```
</TabItem>

</Tabs>

Once the source account is successfully created, guide your customer through the **mapping process** to associate it with a corresponding target account in their accounting software. The account will stay in a `pending` status until that happens, and it must change to `linked` before you can successfully transmit any bank transactions.

### Multi-currency accounts

You can create multiple accounts in different currencies using the same [Create source account](/bank-feeds-api#/operations/create-source-account) endpoint for the company and the connection. If the user has not enabled multi-currency in their accounting software, you will receive an error message which you can display to the user.

### Update a source account

You may need to modify a source account before the mapping is finalized. For example, your customer might want a bank account name to appear in their accounting software. To do that, use the [Update source account](/bank-feeds-api#/operations/update-source-account) endpoint.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const sourceAccountUpdateResponse = bankFeedsClient.sourceAccounts.update({
  sourceAccount: {
    id: "ac-001",
    accountName: "Bank of Dave Checking Account",
    accountType: "Debit",
    accountNumber: "01120912",
    currency: "USD",
    balance: 4002
  },
  accountId: sourceAccountResponse.sourceAccount.id,
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id
});
```

</TabItem>

<TabItem value="python" label="Python">

```python

source_account_update_request = operations.UpdateSourceAccountRequest(
  source_account=shared.SourceAccount(
    id="ac-001",
    accountName="Bank of Dave Checking Account",
    accountType="Debit",
    accountNumber="01120912",
    currency="USD",
    balance=4002
  ),
  account_id=source_account_response.source_account.id,
  company_id=company_response.company.id,
  connection_id=connection_response.connection.id
)

res = bank_feeds_client.source_accounts.update(source_account_update_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var sourceAccountUpdateResponse = await sdk.SourceAccounts.UpdateAsync(new() {
    SourceAccount = new SourceAccount() {
        Id = "ac-001",
        AccountName = "Checking Account",
        AccountType = "Debit",
        AccountNumber = "01120912",
        Currency = "USD",
        Balance = 4002
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
res, err := bankFeedsClient.SourceAccounts.Update(ctx, operations.UpdateSourceAccountRequest{
    SourceAccount: &shared.SourceAccount{
        ID: bankfeeds.String("ac-001"),
        AccountName: bankfeeds.String("Checking Account"),
        AccountType: bankfeeds.String("Debit"),
        AccountNumber: bankfeeds.String("01120912"),
        Currency: bankfeeds.String("USD"),
        Balance: 4002
    },
    AccountID: sourceAccountResponse.SourceAccount.ID,
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```
</TabItem>

</Tabs>

### Remove a source account

If your customer decides to close their account, you can also remove it from Codat using the [Delete source account](/bank-feeds-api#/operations/delete-source-account) endpoint. This will not delete the account from your customer's accounting software, but it will disable the bank feed, preventing any new transactions from appearing.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const sourceAccountDeleteResponse = bankFeedsClient.sourceAccounts.delete({
  accountId: sourceAccountResponse.sourceAccount.id,
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
source_account_delete_request = operations.DeleteSourceAccountRequest(
  account_id=source_account_response.source_account.id,
  company_id=company_response.company.id,
  connection_id=connection_response.connection.id
)

res = bank_feeds_client.source_accounts.delete(source_account_delete_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var res = await bankFeedsClient.SourceAccounts.DeleteAsync(new() {
    AccountId = sourceAccountResponse.SourceAccount.Id,
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
res, err := bankFeedsClient.SourceAccounts.Delete(ctx, operations.DeleteSourceAccountRequest{
    AccountID: sourceAccountResponse.SourceAccount.ID,
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```
</TabItem>

</Tabs>

:::tip Recap

You have created the structure of key objects required by Codat's Bank Feeds API: a company, its connection to an accounting data source, and a source account. 

Next, provide your customer with a **mapping** process interface so they can associate the source account with a target account in their accounting software.
:::

---

## Read next

* Enable your customer to map accounts to their accounting platform via a [mapping UI](/bank-feeds/mapping/overview).

