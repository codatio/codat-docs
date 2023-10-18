---
title: "Configure your solution"
description: "Create key elements of loan writeback in Codat's domain and enable your SMB customer to map them"
sidebar_label: "Configure solution"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WritebackMapping from "@components/global/Prototypes/WritebackMapping";

Once your SMB customer's loan has been approved, provide them with a user interface that lets them enable the loan writeback and configure loan writeback accounts so that the accounting entries are reflected correctly in their accounting platform. They will create or select existing, and subsequently map, the following elements:

* **SMB bank account**, the borrower's business account where the loan is deposited.
* **Expense account**, an account to record incurred fees and interest.
* **Supplier record**, a record to identify you, the lender, in future transactions.

Your solution also needs a **lender bank account**, a virtual account that contains the lender's transactions. You would have created this source account when implementing [bank feeds](/bank-feeds/overview). Now, map it to a target account in your SMB customer's accounting platform. You can define it as 'lendersBankAccount` in your solution.

For example, your user interface might look something like this:

<WritebackMapping/>

Let's go through this process in detail. On the diagram below, you can see the configuration sequence covering the display and selection of a bank account, an expense account, and a supplier record. Alternative steps are also provided in case a new account and a new supplier need to be created. 

```mermaid
sequenceDiagram
    participant frontend as Borrower
    participant backend as Your application 
    participant codat as Codat
    

    frontend ->> backend: Configures writeback

    backend ->> codat: List suppliers
    codat -->> backend: suppliers

    backend ->> codat: List expense accounts
    codat -->> backend: Expense accounts
        
    backend ->> codat: List bank accounts
    codat -->> backend: bank accounts
    
    backend -->> frontend: Configuration options
    
    frontend ->> backend: Submits options
    
    alt create expense account
        backend ->> codat: Create nominal account
        codat -->> backend: Nominal expense account
    end
    
    alt create supplier (the lender)
        backend ->> codat: Create supplier
        codat -->> backend: supplier
    end

    backend -->> frontend: View configuration
```

### Bank account

Loan writeback process operates with two bank accounts: 
- A borrower's business bank account where the money lent is deposited.
- A lender's bank account, which is a virtual bank account in the accounting platform that acts as a container for lender transactions. 

First, your customer needs to choose one of their existing bank accounts. This account will be used to depost the loan. Call our [List bank accounts](/lending-api#/operations/list-accounting-bank-accounts) endpoint to retrieve the customer's existing bank accounts. 

<Tabs>
<TabItem value="nodejs" label="TypeScript">

```javascript
codatLending.accountingBankData.accounts.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171"
}).then((res: ListAccountingBankAccountsResponse) => {
if (res.statusCode == 200) {
    // handle response
}
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
bank_accounts_list_request = operations.ListAccountingBankAccountsRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    connection_id='2e9d2c44-f675-40ba-8049-353bfcb5e171'
)

bank_accounts_list_response = codat_lending.accounting_bank_data.accounts.list(bank_accounts_list_request)
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var bankAccountsListResponse = await codatLending.AccountingBankData.Accounts.ListAsync(new ListAccountingBankAccountsRequest() {
    CompanyId = "8a210b68-6988-11ed-a1eb-0242ac120002",
    ConnectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171"
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
bankAccountsListResponse, err := codatLending.AccountingBankData.Accounts.List(
    ctx, 
    operations.ListAccountingBankAccountsRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    })
```
</TabItem>

<TabItem value="http" label="HTTP">

```http
GET https://api.codat.io/companies/{companyId}/connections/{connectionId}/data/bankAccounts
```
</TabItem>

</Tabs>

Display the response to the customer and allow them to select the account. Store the returned bank account as `borrowersBankAccount` and use it to access properties on the borrower's bank account in future operations. 

### Supplier

In order to create a *spend money* transaction, Codat requires you, the lender, to be represented as a [supplier](../terms/supplier) in your SMB's accounting system. 

Let your customer check if your record already exists in their accounts. Use our [List suppliers](/lending-api#/operations/list-accounting-suppliers) endpoint to fetch the list of existing suppliers. 

<Tabs>
<TabItem value="nodejs" label="TypeScript">

```javascript
codatLending.accountsPayable.suppliers.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: ListAccountingSuppliersResponse) => {
if (res.statusCode == 200) {
    // handle response
}
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
suppliers_list_request = operations.ListAccountingSuppliersRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
)

suppliers_list_response = codat_lending.accounts_payable.suppliers.list(suppliers_list_request)
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var suppliersListResponse = await codatLending.AccountsPayable.Suppliers.ListAsync(new ListAccountingSuppliersRequest() {
    CompanyId = "8a210b68-6988-11ed-a1eb-0242ac120002"
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
suppliersListResponse, err := codatLending.AccountsPayable.Suppliers.List(ctx, operations.ListAccountingSuppliersRequest{
    CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002"
})
```
</TabItem>

<TabItem value="http" label="HTTP">

```http
GET https://api.codat.io/companies/{companyId}/data/suppliers
```
</TabItem>

</Tabs>

Display the response to the customer and allow them to find and select your lender record in their supplier list. Store the supplier `id` as `supplier` and use it in future transactions.

If this is the first time you have lent to this SMB customer, you may need to create yourself as a new supplier in their accounting platform. 

1. Use our [Get create/update supplier model](/lending-api#/operations/get-create-update-suppliers-model) to get the expected data for the supplier creation request payload. The data required can vary depending on the platform.
2. Use that payload to call the [Create supplier](/lending-api#/operations/create-supplier) endpoint to create the new supplier record in the accounting platform.

<Tabs>
<TabItem value="nodejs" label="TypeScript">

```javascript
codatLending.loanWriteback.suppliers.create({
    accountingSupplier: {
        addresses: [
        {
            line1: "Stoney Business Park",
            city: "London",
            country: "UK",
            postalCode: "SE14 1PE",
            type: AccountingAddressType.Billing,
        },
        ],
        contactName: "David",
        defaultCurrency: "GBP",
        emailAddress: "david@example.com",
        phone: "+44 25691 154789",
        registrationNumber: "0115633",
        status: SupplierStatus.Active,
        supplierName: "Bank of Dave",
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    }).then((res: CreateSupplierResponse) => {
    if (res.statusCode == 200) {
        // handle response
    }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
supplier_create_request = operations.CreateSupplierRequest(
    accounting_supplier=shared.AccountingSupplier(
        addresses=[
            shared.AccountingAddress(
                line1='Stoney Business Park',
                city='London',
                country='UK',
                postal_code='SE14 1PE',
                type=shared.AccountingAddressType.BILLING,
            ),
        ],
        contact_name='David',
        default_currency='GBP',
        email_address='david@example.com',
        phone='+44 25691 154789',
        registration_number='0115633',
        status=shared.SupplierStatus.ACTIVE,
        supplier_name='Bank of Dave',
    ),
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    connection_id='2e9d2c44-f675-40ba-8049-353bfcb5e171',
)

supplier_create_response = codat_lending.loan_writeback.suppliers.create(supplier_create_request)
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var suppliersCreateResponse = await codatLending.LoanWriteback.Suppliers.CreateAsync(new CreateSupplierRequest() {
    AccountingSupplier = new AccountingSupplier() {
        Addresses = new List<AccountingAddress>() {
            new AccountingAddress() {
                Line1 = "Stoney Business Park",
                City = "London",
                Country = "UK",
                PostalCode = "SE14 1PE",
                Type = CodatLending.Models.Shared.AccountingAddressType.Billing,
            },
        },
        ContactName = "David",
        DefaultCurrency = "GBP",
        EmailAddress = "david@example.com",
        Phone = "+44 25691 154789",
        RegistrationNumber = "0115633",
        Status = CodatLending.Models.Shared.SupplierStatus.Active,
        SupplierName = "Bank of Dave",
    },
    CompanyId = "8a210b68-6988-11ed-a1eb-0242ac120002",
    ConnectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171",
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
suppliersCreateResponse, err := codatLending.LoanWriteback.Suppliers.Create(ctx, operations.CreateSupplierRequest{
    AccountingSupplier: &shared.AccountingSupplier{
        Addresses: []shared.AccountingAddress{
            shared.AccountingAddress{
                Line1: lending.String("nulla"),
                City: lending.String("London"),
                Country: lending.String("UK"),
                PostalCode: lending.String("SE14 1PE"),
                Type: shared.AccountingAddressTypeBilling,
            },
        },
        ContactName: lending.String("David"),
        DefaultCurrency: lending.String("GBP"),
        EmailAddress: lending.String("david@example.com"),
        Phone: lending.String("+44 25691 154789"),
        RegistrationNumber: lending.String("0115633"),
        Status: shared.SupplierStatusActive,
        SupplierName: lending.String("Bank of Dave"),
    },
    CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
    ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
})
```
</TabItem>

<TabItem value="http" label="HTTP">

```http
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/suppliers
```

#### Request body
```json
{
    "contactName": "David",
    "defaultCurrency": "GBP",
    "emailAddress": "david@example.com",
    "phone": "+44 25691 154789",
    "registrationNumber": "0115633",
    "status": "Active",
    "supplierName": "Bank of Dave",
    "addresses": [
        {
            "line1": "Stoney Business Park",
            "city": "London",
            "country": "UK",
            "postalCode": "SE14 1PE",
            "type": "Billing",
        }
    ]
}
```
</TabItem>

</Tabs>

Similarly, store the `supplier` and use it in future transactions.

### Expense account

Finally, use our [List accounts](/lending-api#/operations/list-accounting-accounts) endpoint filtered by `type=Expense` to retrieve the customer's existing expense accounts. Let them choose one that will be used to record fees and interest. 

<Tabs>
<TabItem value="nodejs" label="TypeScript">

```javascript
codatLending.financialStatements.accounts.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "type=Expense",
}).then((res: ListAccountingAccountsResponse) => {
if (res.statusCode == 200) {
    // handle response
}
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
accounts_list_request = operations.ListAccountingAccountsRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='type=Expense',
)

accounts_list_response = codat_lending.financial_statements.accounts.list(accounts_list_request)
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var accountsListResponse = await codatLending.FinancialStatements.Accounts.ListAsync(new ListAccountingAccountsRequest() {
    CompanyId = "8a210b68-6988-11ed-a1eb-0242ac120002",
    Query = "type=Expense",
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
accountsListResponse, err := codatLending.FinancialStatements.Accounts.List(ctx, operations.ListAccountingAccountsRequest{
    CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
    Query: lending.String("type=Expense"),
})
```
</TabItem>

<TabItem value="http" label="HTTP">

```http
GET https://api.codat.io/companies/{companyId}/data/accounts?query=type%3e0Expense
```
</TabItem>

</Tabs>

Display the response to the customer and allow them to select the desired expense account. Store the account as `expenseAccount` and use it as the expense account in future operations. 

If the customer wants to create a new nominal expense account for this purpose, use our [Get create account model](//lending-api#/operations/get-create-chartOfAccounts-model) to figure out what payload is required for account creation. 

Next, call the [Create account](/lending-api#/operations/create-account) endpoint to create the new account. 

<Tabs>
<TabItem value="nodejs" label="TypeScript">

```javascript
codatLending.loanWriteback.accounts.create({
accountingAccount: {
    currency: "USD",
    currentBalance: 0,
    description: "Invoices the business has issued but has not yet collected payment on.",
    fullyQualifiedCategory: "Asset.Current",
    fullyQualifiedName: "Cash On Hand",
    name: "Accounts Receivable",
    nominalCode: "610",
    status: AccountStatus.Active,
    type: AccountType.Asset,
    
},
companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: CreateAccountResponse) => {
if (res.statusCode == 200) {
    // handle response
}
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
accounts_create_request = operations.CreateAccountRequest(
    accounting_account=shared.AccountingAccount(
        currency='USD',
        current_balance=Decimal('0'),
        description='Invoices the business has issued but has not yet collected payment on.',
        fully_qualified_category='Asset.Current',
        fully_qualified_name='Cash On Hand',
        name='Accounts Receivable',
        nominal_code='610',
        status=shared.AccountStatus.ACTIVE,
        type=shared.AccountType.ASSET,
    ),
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    connection_id='2e9d2c44-f675-40ba-8049-353bfcb5e171',
)

accounts_create_response = codat_lending.loan_writeback.accounts.create(accounts_create_request)
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var accountsCreateResponse = await codatLending.LoanWriteback.Accounts.CreateAsync(new CreateAccountRequest() {
    AccountingAccount = new AccountingAccount() {
        Currency = "USD",
        CurrentBalance = 0M,
        Description = "Invoices the business has issued but has not yet collected payment on.",
        FullyQualifiedCategory = "Asset.Current",
        FullyQualifiedName = "Cash On Hand",
        Name = "Accounts Receivable",
        NominalCode = "610",
        Status = CodatLending.Models.Shared.AccountStatus.Active,
        Type = CodatLending.Models.Shared.AccountType.Asset
    },
    CompanyId = "8a210b68-6988-11ed-a1eb-0242ac120002",
    ConnectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171",
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
accountsCreateResponse, err := codatLending.LoanWriteback.Accounts.Create(ctx, operations.CreateAccountRequest{
    AccountingAccount: &shared.AccountingAccount{
        Currency: lending.String("USD"),
        CurrentBalance: types.MustNewDecimalFromString("0"),
        Description: lending.String("Invoices the business has issued but has not yet collected payment on."),
        FullyQualifiedCategory: lending.String("Asset.Current"),
        FullyQualifiedName: lending.String("Cash On Hand"),
        Name: lending.String("Accounts Receivable"),
        NominalCode: lending.String("610"),
        Status: shared.AccountStatusActive.ToPointer(),
        Type: shared.AccountTypeAsset.ToPointer(),
    },
    CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
    ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171"
})
```
</TabItem>

<TabItem value="http" label="HTTP">

```http
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/accounts
```

#### Request body

```json
{
    "currency": "USD",
    "currentBalance": 0,
    "description": "Invoices the business has issued but has not yet collected payment on.",
    "fullyQualifiedCategory": "Asset.Current",
    "fullyQualifiedName": "Cash On Hand",
    "name": "Accounts Receivable",
    "nominalCode": "610",
    "status": "Active",
    "type": "Asset"
}
```
</TabItem>

</Tabs>

In response, you will receive account creation details which you can display to your customer. Similarly, store the account as `expenseAccount` for use in future transactions.

---

## Read next

* Learn how to [deposit](/lending/guides/loan-writeback/deposit) the lent funds into your SMB's accounting platform.