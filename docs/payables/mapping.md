---
title: Map payment methods
description: "Provide your SMBs with the ability to choose how to make payments"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

Your SMB customers may have multiple bank accounts they can use to pay for a bill. In your application, you should enable them to select the account the payment should originate from.

Retrieve the list of existing bank accounts from the SMB's accounting platform and display the available mapping options to them in a UI, or allow them to create a new account when needed.

We have highlighted this alternative sequence of steps in our detailed process diagram below. 

<details>
<summary><b>Detailed process diagram</b></summary>

```mermaid

  sequenceDiagram
      participant smb as SMB customer
      participant app as Your application 
      participant codat as Codat
      participant acctg as Accounting platform
      
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

```

</details>

If your platform supports multiple payment methods that can be mapped to a separate account, store the mapping of the relevant `accountId` - you will need this to create the [bill payment](/payables/payments) later.

### Foreign currency payments

:::tip Foreign currency payments

If you facilitate payments in a foreign currency, you should convert the payment to the currency of the account or create a new account in that currency.

Use the [Get create account model](/sync-for-payables-api#/operations/get-create-chartOfAccounts-model) endpoint to view the list of the company's currently enabled currencies. It can return:

- *Single value*: the account's base currency in platforms that only support the base currency
- *Multiple values*: several currencies enabled by the SMB user in their accounting platform
- *No values*: empty array for platforms where any and all currencies can be selected

:::

## Retrieve bank accounts

If your SMB customer is making payments from a pre-existing bank account, retrieve a list of their accounts and allow them to map payment methods against each one. Use the [List accounts](/sync-for-payables-api#/operations/list-accounts) endpoint and filter by `isBankAccount=true` to return a list of valid bank accounts.

<!-- For example, if you offer the option to make payments from a credit card, the company's bill payments should be mapped and reconciled to a credit account. -->

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const accountsListResponse = await payablesClient.accounts.list({
    companyId: companyId,
    query: 'isBankAccount=true'
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
accounts_list_request = operations.ListAccountsRequest(
    company_id=company_id,
    query='isBankAccount=true'
)

accounts_list_response = payables_client.accounts.list(accounts_list_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var accountsListResponse = await payablesClient.Accounts.ListAsync(new ListAccountsRequest() {
    CompanyId = companyId,
    Query = "isBankAccount=true"
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
accountsListResponse, err := payablesClient.Accounts.List(ctx, operations.ListAccountsRequest{
    CompanyID: companyID,
    Query: "isBankAccount=true"
})
```
</TabItem>

</Tabs>

## Create new account

If the SMB customer plans to make payments from a new payment method or account that you provide, a new account must be created in their accounting software. The account will contain their transactions, making the SMB's payment reconciliation workflows easier. 

For Xero, QuickBooks Online, and Oracle NetSuite, use the [Create bank account](/sync-for-payables-api#/operations/create-bank-account) endpoint.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const accountCreateResponse = await payablesClient.accounts.create({
	account: {
		accountName: "BillPay Debit Account",
		accountType: AccountType.Debit,
		accountNumber: "80088008",
		currency: "USD",
		balance: 0,
		availableBalance: 0,
	},
    companyId: companyId,
	connectionId: connectionId
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
account_create_request = operations.CreateAccountsRequest(
	account=shared.Account(
		account_name="BillPay Debit Account",
		account_type=shared.AccountType.DEBIT,
		account_number="80088008",
		currency="USD",
		balance=0,
		available_balance=0,
	)
    company_id=company_id,
	connection_id=connection_id
)

account_create_response = payables_client.accounts.create(account_create_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var accountCreateResponse = await payablesClient.Accounts.CreateAsync(new CreateAccountRequest() {
	Account=new Account(){
		AccountName = "BillPay Debit Account",
		AccountType = AccountType.Debit,
		AccountNumber = "80088008",
		Currency = "USD",
		Balance = 0,
		AvailableBalance = 0,
	}
    CompanyId = companyId,
	ConnectionId = connectionId
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
accountsResponse, err := payablesClient.Accounts.Create(ctx, operations.CreateAccountRequest{
	Account: &shared.Account{
		AccountName: syncforpayables.String("BillPay Debit Account"),
		AccountType: AccountType.Debit,
		AccountNumber: "80088008",
		Currency: syncforpayables.String("USD"),
		Balance: 0,
		AvailableBalance: 0,
	},
    CompanyID: companyID,
    ConnectionID: connectionID,
})
```
</TabItem>

</Tabs>

Note that Xero does not support creating credit accounts.

For Sage Intacct, use the [Create account](/sync-for-payables-api#/operations/create-account) endpoint to reflect that account in the customer's accounting software. 

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const accountCreateResponse = await payablesClient.accounts.create({
	accountPrototype: {
    name: "BillPay Debit Account"
		fullyQualifiedName: "BillPay Debit Account",
    fullyQualifiedCategory: "Asset.Current",
		nominalCode: "610",
		currency: "USD",
    status: AccountStatus.Active,
    type: AccountType.Asset,
		currentBalance: 0,
	},
  companyId: companyId,
	connectionId: connectionId
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
account_create_request = operations.CreateAccountRequest(
	account_prototype=shared.AccountPrototype(
		name='BillPay Debit Account',
		fully_qualified_name='BillPay Debit Account',
    fully_qualified_category='Asset.Current',
    nominal_code='610',
		currency='USD',
    status=shared.AccountStatus.ACTIVE,
    type=shared.AccountType.ASSET,
		current_balance=0,
	),
  company_id=company_id,
	connection_id=connection_id
)

account_create_response = payables_client.accounts.create(account_create_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var accountCreateResponse = await payablesClient.Accounts.CreateAsync(new CreateAccountRequest() {
  Account = new AccountPrototype(){
    Name = "BillPay Debit Account",
		FullyQualifiedName = "BillPay Debit Account",
    FullyQualifiedCategory = "Asset.Current",
    NominalCode = "610",
		Currency = "USD",
    Status = AccountStatus.Active,
    Type = AccountType.Asset,
		CurrentBalance = 0,
	},
  CompanyId = companyId,
	ConnectionId = connectionId
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
accountCreateResponse, err := payablesClient.Accounts.Create(ctx, operations.CreateAccountRequest{
	AccountPrototype: &shared.AccountPrototype{
    Name: syncforpayables.String("BillPay Debit Account"),
		FullyQualifiedName: syncforpayables.String("BillPay Debit Account"),
    FullyQualifiedCategory: syncforpayables.String("Asset.Current"),
    NominalCode: syncforpayables.String("610"),
		Currency: syncforpayables.String("USD"),
    Status: shared.AccountStatusActive.ToPointer(),
    Type: shared.AccountTypeAsset.ToPointer(),
		CurrentBalance: 0
	},
    CompanyID: companyID,
    ConnectionID: connectionID,
})
```
</TabItem>

</Tabs>

You can also use the [Get create bank account model](/sync-for-payables-api#/operations/get-create-bankAccounts-model) or [Get create account model](/sync-for-payables-api#/operations/get-create-chartOfAccounts-model) endpoints first to check integration-specific requirements for account creation, or [read more](/using-the-api/push) about creating data with Codat.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Request

```http
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bankAccounts
```

#### Example request body

```json
{
    "accountName": "BillPay Debit Account",
    "accountType": "Debit",
    "accountNumber": "123456789",
    "currency": "USD",
    "balance": 0,
    "availableBalance": 0,
    "modifiedDate": "2023-04-14T09:25:10Z"
}
```

</TabItem >

</Tabs>  

### Pre-pay account

Create a bank account with an `accountType` of `Debit` if you need to represent the following payment methods: 

- Automated Clearing House (ACH) or Real-Time Payments (RTP) networks
- Cheque/check payments
- Electronic bank transfer
- BACS (Bankers' Automated Clearing System)


### Credit account

Create a bank account with an `accountType` of `Credit` if you are providing a credit facility for the payment, such as:

- Commercial/business credit card
- BNPL (Buy Now, Pay Later)

---

## Read next

- [Reflect and reconcile bill payments](/payables/payments) in the SMB's accounting software