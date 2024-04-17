---
title: "Bank statements overview"
sidebar_label: "Bank statements"
description: "Underwrite with accurate, real-time cash flows enriched with detailed spend and income transaction categories"
displayed_sidebar: "lending"
image: "/img/banners/social/lending.png"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { bankingIntegrations } from "@components/global/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Our **bank statements** feature provides data from a linked company’s banking connections. Transactions are enriched with financial category and payment provider information.

## Use cases

Common uses of our bank statements feature include:

1. **Liquidity assessment:** determine the borrower's ability to cover short-term expenses and financial obligations.

2. **Financial obligation evaluation:** assess the borrower's capability to meet debt payments and other financial commitments.

3. **Cash flow trend analysis:** identify patterns and fluctuations in the borrower's cash flow to predict their future financial health.

4. **Revenue analysis:** identify all revenue channels of a business using the payment provider enrichment.

## Feature components

Our banking feature consists of the following components, supported across a number of banking data sources.

1. **[Accounts:](/lending-api#/operations/list-banking-accounts)** detailed information on a business’ bank accounts including balances, account numbers, and institutions holding the accounts

2. **[Transactions:](/lending-api#/operations/list-banking-transactions)** transactions incurred by the bank account

3. **[Account balances:](/lending-api#/operations/list-banking-account-balances)** balances for a bank account, including the end-of-day batch balance or running balances per transaction

4. **[Categorized bank statements:](/lending-api#/operations/get-categorized-bank-statement)** all connected bank accounts and transactions with enrichments in a single endpoint.

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1760315404&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "200px" }}
></iframe>

## Feature enrichments

We provide the following enrichments via our [categorized bank statement](/lending-api#/operations/get-categorized-bank-statement) component.

#### Transaction categories

Bank transactions lack useful context for underwriting. We have solved this problem by enriching bank transactions with the same financial categories you find on an income statement (profit and loss) and a balance sheet. Lenders can rebuild a cash-based profit and loss using bank data. This gives them a clear and reliable view of borrower affordability.

<details>
  <summary>View supported transaction categories</summary>

  <iframe
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=340133827&amp;single=true&amp;widget=true&amp;headers=false"
    frameborder="0"
    style={{ top: 0, left: 0, width: "100%", height: "660px" }}
  ></iframe>
</details>

#### Payment provider

Businesses often sell across multiple channels, for example, brick and mortar, online or marketplace. We help lenders identify the total revenue of a business by identifying the payment providers in their bank transactions.

<details>
  <summary>View supported payment providers</summary>

 <iframe
   src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=88475193&amp;single=true&amp;widget=true&amp;headers=false"
   frameborder="0"
   style={{ top: 0, left: 0, width: "100%", height: "660px" }}
 ></iframe>
</details>

## Supported outputs

You can retrieve the data pulled and enriched by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **bank statements** [endpoints of our API](/lending-api#/operations/get-categorized-bank-statement).

For example, use the [Get categorized bank statement](/lending-api#/operations/get-categorized-bank-statement) endpoint to precisely calculate the current position of the company's outstanding loans.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
type Transaction {
  category: string;
  amount: number;
}

const statementResponse = await lendingClient.banking.categorizedStatement.get({
    companyId: companyId
});

if (statementResponse.statusCode != 200) {
  throw new Error("Could not get categorized bank statement")
}

const transactions: Transaction[] = statementResponse.enhancedCashFlowTransactions.reportItems.transactions.map(x => ({
  category: x.transactionCategory.levels.join('.'),
  amount: x.amount
}));

const loansPayable = transactions.filter(x => x.category
  .startsWith('Liability.Current.Debt.LoansPayable'))
  .reduce((sum, current) => sum + current.amount, 0);
```

</TabItem>

<TabItem value="python" label="Python">

```python
@dataclass
class Transaction:
  category: str
  amount: Decimal

statement_request = operations.GetCategorizedBankStatementRequest(
    company_id=company_id,
)

statement_response = lending_client.banking.categorized_statement.get(statement_request)

if statement_response.status_code != 200:
  raise Exception('Could not get categorized bank statement')

transactions = []
for x in statement_response.enhanced_cash_flow_transactions.report_items.transactions:
  transactions.append(Transaction(category='.'.join(x.transaction_category.levels), amount=x.amount))

loans_payable = sum(transaction.amount for transaction in transactions \
    if transaction.category.startswith('Liability.Current.Debt.LoansPayable'))
```

</TabItem>

<TabItem value="csharp" label="C#">


```csharp
public record Transaction(string Category, decimal Amount);

var statementResponse = await lendingClient.Banking.CategorizedStatement.GetAsync(new() {
    CompanyId = companyId
});

if (statementResponse.StatusCode != 200) {
  throw new Exception("Could not get categorized bank statement");
}

var transactions = statementResponse.EnhancedCashFlowTransactions.ReportItems.Transactions
  .Select(x => new Transaction(){
    Category = string.Join(".", x.TransactionCategory.Levels),
    Amount = x.Amount
  });

var loansPayable = transactions.Sum(x => 
  x.category.startsWith('Liability.Current.Debt.LoansPayable'));
```

</TabItem>

<TabItem value="go" label="Go">

```go
type Transaction struct {
  Category string
  Amount float64
}

ctx := context.Background()
statementResponse, err := lendingClient.Banking.CategorizedStatement.Get(ctx, operations.GetCategorizedBankStatementRequest{
    CompanyID: companyID,
})

if err == nil && statementResponse.StatusCode == 200 {
  transactions := []Transaction{}

  for _, transaction := range statementResponse.EnhancedCashFlowTransactions.ReportItems.Transactions {
    category := strings.Join(transaction.TransactionCategory.Levels, ".")
    amount, _ := transaction.Amount.Float64()
		transactions = append(transactions, Transaction{category, amount})
	}

  loansPayable := 0.0
  for _, transaction := range transactions {
    if strings.HasPrefix(transaction.Category, "Liability.Current.Debt.LoansPayable") {
      loansPayable += transaction.Amount
    }
  }

  fmt.Println(loansPayable)
}
```

</TabItem>

</Tabs>


## Get started

Once you have the Lending API enabled, configure your instance to work with our bank statements feature. 

#### Configure data sources

Follow the respective guides to set up enable banking integrations that will serve as a data source:

<IntegrationsList integrations={bankingIntegrations} />

:::tip Already have a banking integration?

If you have an existing banking integration, you can use our [data upload](/lending/functions/data-upload) functionality to manually upload records that will be used as a source for bank statement categorization.

:::

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Accounts `banking-accounts`
- Transactions `banking-transactions`
- Account balances `banking-accountBalances`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you [configure webhook consumers](/using-the-api/webhooks/create-consumer) with the following [event types](/using-the-api/webhooks/event-types) to manage your data pipelines. These webhooks send a message for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/event-types)  

  If you receive a message from this webhook, it means an issue occured when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [Dataset data changed](/using-the-api/webhooks/event-types)  

  If you receive a message from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

---

## Read next
- [Sales](/lending/features/sales-overview)
