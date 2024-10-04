---
title: "Map accounts in QuickBooks Online"
description: "Write bank transaction data into your customers' accounting software with an automated feed"
sidebar_label: Map accounts
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Loom from '@components/Loom'

For Bank Feeds in QuickBooks Online, the account mapping is conducted within the QuickBooks platform itself. Codat produces a secure username and password against a data connection which can be entered into QuickBooks, facilitating the account and transaction verification process.

There are two ways you can share credentials with a Company - either via a hosted and customizable Codat credentials page, or alternatively through the [Generate credentials](/bank-feeds-api#/operations/generate-credentials) endpoint.

## Use the Codat credentials page
The Codat provided user interface is designed to enable you to launch QuickBooks bankfeeds quickly with minimal overhead and allow the company to retrieve credentials for their bank feeds in a secure manner.

To utilize the mapping UI, direct your company's users to the `linkUrl` provided in the [create-data-connection](/bank-feeds/setup#creating-a-data-connection) response. The linkUrl has a one-time password (OTP) that will expire after 60 minutes. If the password expires, you can retrieve the `linkUrl` again (with a new OTP) using the [`get-connection`](/bank-feeds-api#/operations/get-connection) endpoint.

On the Set up QuickBooks page, they click Get credentials to generate their unique one-time username and password for connecting an account to QBO (see step six in the next procedure). 

![Image](/img/bank-feeds/qbo-bank-feeds/400590b-qbo-bank-feeds_smb-customer-steps-revised.png "The Set up QuickBooks page that allows your SMB user to get their credentials.")

Once credentials have been generated, the user can simply follow the instructions displayed in the UI. These are summarized in [Map accounts in QuickBooks](/bank-feeds/integrations/qbo/mapping#map-accounts-in-quickbooks)

The Revoke credentials button appears immediately after their credentials are generated.


## Use the Generate Credentials API

Should you desire a more integrated user experience, you have the option to generate and display the credentials directly within your own application through the API.
To do this, call the [Generate credentials](/bank-feeds-api#/operations/generate-credentials) endpoint.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const credentialsResponse = bankFeedClient.sourceAccounts.generateCredentials({
    requestBody: {},
    companyId: companyResponse.company.id,
    connectionId: connectionResponse.connection.id
  });

const credentials = credentialsResponse.bankAccountCredentials
console.log(credentials.username, credentials.password)
```

</TabItem>

<TabItem value="python" label="Python">

```python
req = operations.GenerateCredentialsRequest(
    request_body='',
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id,
)

credentials_response = bank_feed_client.source_accounts.generate_credentials(req)

credentials = credentials_response.bankAccountCredentials
print(credentials.username, credentials.password)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var credentialsResponse = await bankFeedClient.SourceAccounts.GenerateCredentialsAsync(new() {
    RequestBody = null,
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});

var credentials = credentialsResponse.bankAccountCredentials;
Console.WriteLine($"{credentials.Username} {credentials.Password}")
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
credentialsResponse, err := s.SourceAccounts.GenerateCredentials(ctx, operations.GenerateCredentialsRequest{
    RequestBody: nil,
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID,
})

fmt.Println("%s %s", credentialsResponse.Username, credentialsResponse.Password)
```
</TabItem>

</Tabs>

## Revoke credentials
Credentials for a company can be revoked at any point by using the [Delete credentials](/bank-feeds-api#/operations/delete-bank-feed-credentials) endpoint.

This will remove **all** credentials associated with the company, if you wish to reconnect the company and re-establish the bank feed, you should generate new credentials via the Credentials page or API.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const res = bankFeedsClient.sourceAccounts.deleteCredentials({
    companyId: companyResponse.company.id,
    connectionId: connectionResponse.connection.id
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
req = operations.DeleteBankFeedCredentialsRequest(
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id,
)

res = bank_feed_client.source_accounts.delete_credentials(req)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var res = await sdk.SourceAccounts.DeleteCredentialsAsync(new() {
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
res, err := s.SourceAccounts.DeleteCredentials(ctx, operations.DeleteBankFeedCredentialsRequest{
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```
</TabItem>

</Tabs>

## Map accounts in QuickBooks

<Loom source="https://www.loom.com/embed/50fbe91987924c38a6de91c3582069ab" />

<br/>

The SMB user first logs into QuickBooks Online and navigates to the Banking section if they are in Accounting View or Bookkeeping > Bank Transactions if in Business View. 

Next, they click the Link account button and, on the ensuing Connect an account screen, find and choose your organization from the list of available financial institutions. 

After agreeing to the terms and conditions, they enter a one-time username and password to complete the authentication process. They then select one or more source bank accounts to link to QBO and choose the account type from a dropdown menu, specifying which chart of accounts they wish to view bank feeds for. 

Additionally, they select a start date for the bank feed.

:::info Historic Transactions

QuickBooks online only supports retrieval of transactions **up to 90 days old**, any transactions prior to this date will be excluded irrespective of what date the user selects.
:::

---
## Read next

[Writing transactions](/bank-feeds/pushing-transactions).
