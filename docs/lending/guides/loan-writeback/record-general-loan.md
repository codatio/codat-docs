---
title: "Record loan repayments"
description: "Record the repayment of money owed to the lender for a loan in the SMB's accounting software"
sidebar_label: "Record repayments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The loan writeback process is the same for general lending and invoice finance. The key distinction lies in the repayment method: general lending usually involves recurring payments, while invoice finance is repaid when the SMB’s customer pays the invoice.

On this page, we focus on general lending and provide additional details on automating the process for invoice finance providers. 

## Record repayment

To reflect loan repayments programmatically, perform these steps every time a repayment is made:

1. [Create a transfer](/lending/guides/loan-writeback/record-general-loan#create-transfer) from the borrower's bank account to the lender's for each repayment.

2. [Create a direct cost](/lending/guides/loan-writeback/record-general-loan#create-direct-cost) to record interest or fees.

3. [Create bank feed transactions](/lending/guides/loan-writeback/record-general-loan#create-bank-feed-transactions) to represent the transfer and direct cost in the lender's bank account.

For example, if the borrower took out a loan of £1000 with a loan charge of 20%, the total amount due comes to £1200. With a 3-month equal instalment repayment plan, the borrower pays back £400 each month. 

This means you need to create a transfer of £320 to represent the payment, a direct cost of £80 to record the fees, and a bank transaction of £400 to reduce the liability to the lender.

:::info Repay on your terms

Our example shows how to record loan repayments with monthly payments covering both drawdown and fees. To separate repayments from fee or interest payments, include a transfer from the borrower’s account to the lender’s account that equals the amount of fees or interest. Then, create the associated direct cost to register the fees and/or interest.

:::

```mermaid
sequenceDiagram
    participant application as Your application 
    participant codat as Codat
    
    alt repaying loan amount
        application ->> codat: Create transfer (bank account -> lender)
        codat -->> application:  transfer
    end
    
    alt paying interest and/or fees
        application ->> codat: Create direct cost
        codat -->> application: direct cost
    end

    application ->> codat: Create bank feed transactions (deposit in lender's account)
    codat -->> application: bank feed transactions
```
To perform these operations, you will need the following properties:

- Lender's [`supplier.id`](/lending-api#/schemas/AccountingSupplier) and [`lendersBankAccountId`](/lending-api#/AccountingBankAccount)
- SMB's [`expenseAccount.id`](/lending-api#/schemas/AccountingAccount), [`borrowersBankAccount.id`](/lending-api#/AccountingBankAccount), and `currency`
- `repaymentDate` - the date of the repayment
- `repaymentAmount` - the amount repaying the loan amount
- `interestAndFeesAmount` - the amount paying for interest and fees
- `totalRepaymentAmount`, where `totalRepaymentAmount = repaymentAmount + interestAndFeesAmount`

### Create transfer

Use the [Create transfer](/lending-api#/operations/create-transfer) endpoint again, this time to record the total repayment amount. Note that you are performing a transfer *from* `borrowersBankAccount.id` *to* `lendersBankAccountId`.

<Tabs>
<TabItem value="nodejs" label="TypeScript">

```javascript
codatLending.loanWriteback.transfers.create({
    accountingTransfer: {
        date: repaymentDate,
        from: {
            accountRef: {
                id: borrowersBankAccount.id,
            },
            amount: totalRepaymentAmount,
            currency: borrowersBankAccount.currency,
        },
        to: {
            accountRef: {
                id: lendersBankAccountId,
            },
            amount: totalRepaymentAmount,
            currency: borrowersBankAccount.currency,
        },
    },
    companyId: companyId,
    connectionId: connectionId,
    }).then((res: CreateTransferResponse) => {
    if (res.statusCode == 200) {
        // handle response
    }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
transfers_create_request = operations.CreateTransferRequest(
    accounting_transfer=shared.AccountingTransfer(
        date_=repaymentDate,
        from_=shared.TransferAccount(
            account_ref=shared.AccountRef(
                id=borrowers_bank_account.id,
            ),
            amount=Decimal(total_repayment_amount),
            currency=borrowers_bank_account.currency,
        ),
        to=shared.TransferAccount(
            account_ref=shared.AccountRef(
                id=lenders_bank_account_id,
            ),
            amount=Decimal(total_repayment_amount),
            currency=borrowers_bank_account.currency,
        ),
    ),
    company_id=company_id,
    connection_id=connection_id,
)

transfers_create_response = codat_lending.loan_writeback.transfers.create(transfers_create_request)
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var transfersCreateResponse = await codatLending.LoanWriteback.Transfers.CreateAsync(new CreateTransferRequest() {
    AccountingTransfer = new AccountingTransfer() {
        Date = repaymentDate,
        From = new TransferAccount() {
            AccountRef = new AccountRef() {
                Id = borrowersBankAccount.Id,
            },
            Amount = totalRepaymentAmount,
            Currency = borrowersBankAccount.Currency,
        },
        To = new TransferAccount() {
            AccountRef = new AccountRef() {
                Id = lendersBankAccountId,
            },
            Amount = totalRepaymentAmount,
            Currency = borrowersBankAccount.Currency,
        },
    },
    CompanyId = companyId,
    ConnectionId = connectionId,
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
transfersCreateResponse, err := codatLending.LoanWriteback.Transfers.Create(ctx, operations.CreateTransferRequest{
    AccountingTransfer: &shared.AccountingTransfer{
        Date: lending.String(repaymentDate),
        From: &shared.TransferAccount{
            AccountRef: &shared.AccountRef{
                ID: lending.String(borrowersBankAccount.ID),
            },
            Amount: types.MustNewDecimalFromString(totalRepaymentAmount),
            Currency: lending.String(borrowersBankAccount.Currency),
        },
        To: &shared.TransferAccount{
            AccountRef: &shared.AccountRef{
                ID: lending.String(lendersBankAccountID),
            },
            Amount: types.MustNewDecimalFromString(totalRepaymentAmount),
            Currency: lending.String(borrowersBankAccount.Currency),
        },
    },
    CompanyID: companyID,
    ConnectionID: connectionID,
})
```
</TabItem>

<TabItem value="java" label="Java">

```java
CreateTransferRequest req = CreateTransferRequest.builder()
    .companyId(companyId)
    .connectionId(connectionId)
    .accountingTransfer(AccountingTransfer.builder()
        .date(repaymentDate)
        .from(TransferAccount.builder()
            .accountRef(AccountRef.builder()
                .id(borrowersBankAccount.id)
                .build()
            )
            .amount(totalRepaymentAmount)
            .currency(borrowersBankAccount.currency)
            .build())
        .to(TransferAccount.builder()
            .accountRef(AccountRef.builder()
                .id(lendersBankAccountId)
                .build()
            )
            .amount(totalRepaymentAmount)
            .currency(borrowersBankAccount.currency)
            .build())
        .build())
    .build();

CreateTransferResponse res = codatLending.loanWriteback().transfers().create()
    .request(req)
    .call();
```
</TabItem>

<TabItem value="http" label="HTTP">

```http
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/transfers
```

#### Request body

```json
{
    "date": repaymentDate,
    "from": {
        "accountRef": {
            "id": borrowersBankAccount.id,
        },
        "account": totalRepaymentAmount,
        "currency": borrowersBankAccount.currency,
    },
    "to": {
        "accountRef": {
            "id": lendersBankAccountId,
        },
        "account": totalRepaymentAmount,
        "currency": borrowersBankAccount.currency,
    }
}
```

</TabItem>

</Tabs>

### Create direct cost

Check the [Get create direct cost model](/lending-api#/operations/get-create-directCosts-model), then use the [Create direct cost](/lending-api#/operations/create-direct-cost) endpoint to capture the amount of fees or interest incurred by the borrower.

<Tabs>
<TabItem value="nodejs" label="TypeScript">

```javascript
codatLending.loanWriteback.directCosts.create({
    accountingDirectCost: {
        contactRef: {
            dataType: "suppliers",
            id: supplier.id,
        },
        currency: borrowersBankAccount.currency,
        issueDate: repaymentDate,
        lineItems: [
        {
            accountRef: {
                id: expenseAccount.id,
            },
            description: "Fees and/or interest",
            quantity: 1,
            taxAmount: 0,
            unitAmount: interestAndFeesAmount,
        },
        ],
        paymentAllocations: [
        {
            allocation: {
                totalAmount: interestAndFeesAmount,
            },
            payment: {
                accountRef: {
                    id: lendersBankAccountId,
                },
            },
        },
        ],
        taxAmount: 0.0,
        totalAmount: interestAndFeesAmount,
    },
    companyId: companyId,
    connectionId: connectionId,
    }).then((res: CreateDirectCostResponse) => {
    if (res.statusCode == 200) {
        // handle response
    }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
direct_costs_create_request = operations.CreateDirectCostRequest(
    accounting_direct_cost=shared.AccountingDirectCost(
        contact_ref=shared.ContactRef(
            data_type='suppliers',
            id=supplier.id,
        ),
        currency=borrowersBankAccount.currency,
        issue_date=repaymentDate,
        line_items=[
            shared.DirectCostLineItem(
                account_ref=shared.AccountRef(
                    id=expense_account.id,
                ),
                description='Fees and/or interest',
                quantity=Decimal('1'),
                tax_amount=Decimal('0'),
                unit_amount=Decimal(interest_and_fees_amount),
            ),
        ],
        payment_allocations=[
            shared.AccountingPaymentAllocation(
                allocation=shared.AccountingPaymentAllocationAllocation(
                    total_amount=Decimal(interest_and_fees_amount),
                ),
                payment=shared.PaymentAllocationPayment(
                    account_ref=shared.AccountRef(
                        id=lenders_bank_account_id,
                    ),
                ),
            ),
        ],
        tax_amount=Decimal('0'),
        total_amount=Decimal(interest_and_fees_amount),
    ),
    company_id=company_id,
    connection_id=connection_id,
)

direct_costs_create_response = codat_lending.loan_writeback.direct_costs.create(direct_costs_create_request)
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var redirectCostsCreateResponse = await codatLending.LoanWriteback.DirectCosts.CreateAsync(new CreateDirectCostRequest() {
    AccountingDirectCost = new AccountingDirectCost() {
        ContactRef = new ContactRef() {
            DataType = "suppliers",
            Id = supplier.id,
        },
        Currency = borrowersBankAccount.Currency,
        IssueDate = repaymentDate,
        LineItems = new List<DirectCostLineItem>() {
            new DirectCostLineItem() {
                AccountRef = new AccountRef() {
                    Id = expenseAccount.Id,
                },
                Description = "Fees and/or interest",
                Quantity = 1M,
                TaxAmount = 0M,
                UnitAmount = interestAndFeesAmount,
            },
        },
        PaymentAllocations = new List<AccountingPaymentAllocation>() {
            new AccountingPaymentAllocation() {
                Allocation = new AccountingPaymentAllocationAllocation() {
                    TotalAmount = interestAndFeesAmount,
                },
                Payment = new PaymentAllocationPayment() {
                    AccountRef = new AccountRef() {
                        Id = lendersBankAccountId,
                    },
                },
            },
        },
        TaxAmount = 0M,
        TotalAmount = interestAndFeesAmount,
    },
    CompanyId = companyId,
    ConnectionId = connectionId,
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
res, err := codatLending.LoanWriteback.DirectCosts.Create(ctx, operations.CreateDirectCostRequest{
    AccountingDirectCost: &shared.AccountingDirectCost{
        ContactRef: &shared.ContactRef{
            DataType: lending.String("suppliers"),
            ID: supplier.ID,
        },
        Currency: borrowersBankAccount.Currency,
        IssueDate: repaymentDate,
        LineItems: []shared.DirectCostLineItem{
            shared.DirectCostLineItem{
                AccountRef: &shared.AccountRef{
                    ID: lending.String(expenseAccount.ID),
                },
                Description: lending.String("Fees and/or interest"),
                Quantity: types.MustNewDecimalFromString("1"),
                TaxAmount: types.MustNewDecimalFromString("0"),
                UnitAmount: types.MustNewDecimalFromString(interestAndFeesAmount),
            },
        },
        PaymentAllocations: []shared.AccountingPaymentAllocation{
            shared.AccountingPaymentAllocation{
                Allocation: shared.AccountingPaymentAllocationAllocation{
                    TotalAmount: types.MustNewDecimalFromString(interestAndFeesAmount),
                },
                Payment: shared.PaymentAllocationPayment{
                    AccountRef: &shared.AccountRef{
                        ID: lending.String(lendersBankAccountID),
                    },
                },
            },
        },
        TaxAmount: types.MustNewDecimalFromString("0"),
        TotalAmount: types.MustNewDecimalFromString(interestAndFeesAmount),
    },
    CompanyID: companyID,
    ConnectionID: connectionID,
})
```
</TabItem>

<TabItem value="java" label="Java">

```java
CreateDirectCostRequest req = CreateDirectCostRequest.builder()
    .companyId(companyId)
    .connectionId(connectionId)
    .directCostPrototype(DirectCostPrototype.builder()
        contactRef(ContactRef.builder()
            .dataType("suppliers")
            .id(supplier.Id)
            .build()
        )
        .currency(borrowersBankAccount.currency)
        .issueDate(repaymentDate)
        .lineItems(List.of(
            DirectCostLineItem.builder()
                .accountRef(AccountRef.builder()
                    .id(expenseAccount.Id)
                    .build()
                )
                .description("Fees and/or interest")
                .quantity(new BigDecimal("1"))

                .taxAmount(new BigDecimal("0"))
                .unitAmount(new BigDecimal(interestAndFeesAmount))
                .build()
            )
        )
        .paymentAllocations(List.of(
            AccountingPaymentAllocation.builder()
                .allocation(Allocation.builder()
                    .totalAmount(new BigDecimal(interestAndFeesAmount))
                    .build()
                )
                .payment(PaymentAllocationPayment.builder()
                    .accountRef(AccountRef.builder()
                        .id(expenseAccount.Id)
                        .build()
                    )
                    .build()
                )
                .build()
            )
        )
        .taxAmount(new BigDecimal("0"))
        .totalAmount(new BigDecimal(interestAndFeesAmount))
        .build())
    .build();

CreateDirectCostResponse res = codatLending.loanWriteback().directCosts().create()
    .request(req)
    .call();
```
</TabItem>

<TabItem value="http" label="HTTP">

```http
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/directCosts
```

#### Request body

```json
{
	"issueDate": repaymentDate,
	"currency": borrowersBankAccount.currency,
	"taxAmount": 0.0,
	"totalAmount": interestAndFeesAmount,
	"contactRef": {
		"id": supplier.id,
		"dataType": "suppliers"
	},
	"paymentAllocations": [{
		"payment": {
			"accountRef": {
				"id": lendersBankAccountId
			}
		},
		"allocation": {
			"totalAmount": interestAndFeesAmount
		}
	}],
	"lineItems": [{
		"description": Fees and/or interest,
		"quantity": 1,
		"unitAmount": interestAndFeesAmount,
		"taxAmount": 0,
		"accountRef": {
			"id": expenseAccount.id
		}
	}]
}
```
</TabItem>

</Tabs>

### Create bank feed transactions

Use the [Create bank account transactions](/lending-api#/operations/create-bank-transactions) endpoint to deposit the total amount (including the repayment, fees, and any interest) into the lender's bank account.

<Tabs>
<TabItem value="nodejs" label="TypeScript">

```javascript
codatLending.loanWriteback.bankTransactions.create({
    accountingCreateBankTransactions: {
        accountId: lendersBankAccount.id,
        transactions: [
        {
            id: transactionId, // Unique identifier for this bank transaction
            amount: totalRepaymentAmount,
            date: repaymentDate,
            description: description, // Include a reference to the direct cost, the loan and you, the lender
        },
        ],
    },
    accountId: lendersBankAccountId,
    companyId: companyId,
    connectionId: connectionId,
}).then((res: CreateBankTransactionsResponse) => {
if (res.statusCode == 200) {
    // handle response
}
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
bank_transactions_create_request = operations.CreateBankTransactionsRequest(
    accounting_create_bank_transactions=shared.AccountingCreateBankTransactions(
        account_id=lenders_bank_account_id,
        transactions=[
            shared.CreateBankAccountTransaction(
                id=transaction_id, # Unique identifier for this bank transaction
                amount=Decimal(total_repayment_amount),
                date_=repayment_date,
                description=description, # Include a reference to the direct cost, the loan and you, the lender
            ),
        ],
    ),
    account_id=lenders_bank_account.id,
    company_id=company_id,
    connection_id=connection_id,
)

bank_transactions_create_response = codat_lending.loan_writeback.bank_transactions.create(bank_transactions_create_request)
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var bankTransactionsCreateResponse = await codatLending.LoanWriteback.BankTransactions.CreateAsync(new CreateBankTransactionsRequest() {
    AccountingCreateBankTransactions = new AccountingCreateBankTransactions() {
        AccountId = lendersBankAccountId,
        Transactions = new List<CreateBankAccountTransaction>() {
            new CreateBankAccountTransaction() {
                Id = transactionId, // Unique identifier for this bank transaction
                Amount = totalRepaymentAmount,
                Date = repaymentDate,
                Description = description, // Include a reference to the direct cost, the loan and you, the lender
            },
        },
    },
    AccountId = lendersBankAccount.Id,
    CompanyId = companyId,
    ConnectionId = connectionId
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
bankTransactionsCreateRequest, err := codatLending.LoanWriteback.BankTransactions.Create(ctx, operations.CreateBankTransactionsRequest{
    AccountingCreateBankTransactions: &shared.AccountingCreateBankTransactions{
        AccountID: lending.String(lendersBankAccountID),
        Transactions: []shared.CreateBankAccountTransaction{ 
            shared.CreateBankAccountTransaction{
                ID: lending.String(transactionID), // Unique identifier for this bank transaction
                Amount: types.MustNewDecimalFromString(totalRepaymentAmount),
                Date: lending.String(repaymentDate),
                Description: lending.String(description), // Include a reference to the direct cost, the loan and you, the lender
            },
        },
    },
    AccountID: lendersBankAccountID,
    CompanyID: companyID,
    ConnectionID: connectionID,
})
```
</TabItem>

<TabItem value="java" label="Java">

```java
CreateBankTransactionsRequest req = CreateBankTransactionsRequest.builder()
    .companyId(companyId)
    .connectionId(connectionId)
    .accountId(lendersBankAccountId)
    .accountingCreateBankTransactions(AccountingCreateBankTransactions.builder()
        .accountId(lendersBankAccountId)
        .transactions(List.of(
            CreateBankAccountTransaction.builder()
                .id(transactionID) // Unique identifier for this bank transaction
                .amount(new BigDecimal(totalRepaymentAmount))
                .date(repaymentDate)
                .description(description) // Include a reference to the direct cost, the loan and you, the lender
                .build()))
        .build())
    .build();

CreateBankTransactionsResponse res = codatLending.loanWriteback().bankTransactions().create()
    .request(req)
    .call();

```
</TabItem>

<TabItem value="http" label="HTTP">

```http
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions
```

#### Request body

```json
{
  "accountId": lendersBankAccountId,
  "transactions": [{
    "id": transactionId, // Unique identifier for this bank transaction
    "amount": totalRepaymentAmount,
    "date": repaymentDate,
    "description": description // Include a reference to the direct cost, the loan and you, the lender
  }]
}
```
</TabItem>

</Tabs>

At the end of this 3-stage process, your borrower will have the loan writeback reflected correctly in their accounting software. This saves them time on reconciliation and makes sure they (and you!) have clarity on the state of the loan.

## Invoice finance repayments

Some accounting software providers offer webhook notifications that alert you about changes to invoices in the SMB’s accounts. By subscribing to these notifications, you can automatically trigger repayments once the customer pays the SMB.

To enhance your repayment automation, check out the supported webhooks from [Xero](https://developer.xero.com/documentation/guides/webhooks/overview/) and [Intuit](https://developer.intuit.com/app/developer/qbo/docs/develop/webhooks).

:::tip Recap
In this guide, you have learned:
* What is loan writeback and what it's used for.
* How to map and configure the loan writeback solution.
* How to perform the necessary postings using Codat's endpoints.
:::

---

## Read next

* Looking to implement loan writeback for Xero? View Xero's [own documentation](https://developer.xero.com/documentation/guides/how-to-guides/general-lending-integration-guide/).
* Review other features of the [Lending API](/lending/overview).
