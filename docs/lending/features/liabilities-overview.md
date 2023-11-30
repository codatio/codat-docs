---
title: "Liabilities overview"
sidebar_label: "Liabilities"
description: "Comprehensive loan insights and credit history analysis"
image: "/img/banners/social/lending.png"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations, bankingIntegrations, commerceIntegrations } from "@components/global/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Our **liabilities** feature simplifies the evaluation of a borrower's financial obligations. Machine learning models automatically identify loans from connected sources and provide lenders with a clear overview of a borrower's outstanding loans and their repayment history.

## Use cases

Common uses of our liabilities feature include:

- **Risk assessment:** helps assess the borrower's risk profile and repayment reliability.

- **Debt capacity:** evaluates if the business can handle more debt without financial strain.

- **Repayment behaviour:** indicates if the borrower makes payments on time or defaults.

- **Loan structuring:** tailors new loan terms to fit the borrower's financial situation.

## Feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=554962936&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "660px" }}
></iframe>

## Supported outputs

You can retrieve the data pulled by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **liabilities** [endpoints of our API](/lending-api#/operations/generate-loan-transactions).
For example, to review a company's loan repayment history use the [Get loan summaries](/lending-api#/operations/get-loan-summary) endpoint to determine the drawdown to repayment ratio.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
type LoanSummary {
  totalDrawdowns: number;
  totalRepayments: number;
}

const sourceType = GenerateLoanSummarySourceType.Accounting

// Request the generation of the report. This can take some time so 
// make sure to poll the get endpoint to check the status of the process.
const generateResponse = await lendingClient.liabilities.generateLoanSummary({
    companyId: companyId,
    sourceType: sourceType,
  });

if(generateResponse.statusCode != 202){
  throw new Error("Unable to generate loan summary report")
}

// Wrap get call in function to poll endpoint
const getLoanSummary = async (lendingClient, companyId, sourceType) => {
  const reportResponse = await lendingClient..liabilities.getLoanSummary({
    companyId: companyId,
    sourceType: sourceType,
  });

  if (reportResponse.statusCode != 200) {
    return getLoanSummary(companyId, sourceType)
  }
  else {
    return reportResponse
  }
}

const loanSummaryResponse = await getLoanSummary(lendingClient, companyId, formattedDate)

const summaries: LoanSummary[] = loanSummaryResponse.loanSummary.reportItems.map(x => {
  totalDrawdowns: x.totalDrawdowns,
  totalRepayments: x.totalRepayments
})

const totalDrawdowns = summaries.reduce((sum, current) => sum + current.totalDrawdowns, 0)
const totalRepayments = summaries.reduce((sum, current) => sum + current.totalRepayments, 0)

const repaymentRatio = totalRepayments / totalDrawdowns
console.log(repaymentRatio)
```

</TabItem>

<TabItem value="python" label="Python">

```python
@dataclass
class LoanSummary:
  total_drawdowns: Decimal
  total_repayments: Decimal

source_type = operations.GenerateLoanSummarySourceType.ACCOUNTING

loan_summary_request = operations.GenerateLoanSummaryRequest(
    company_id=company_id,
    source_type=source_type,
)

loan_summary_response = lending_client.liabilities.generate_loan_summary(loan_summary_request)

if loan_summary_response.status_code != 202:
  raise Exception('Unable to generate loan summary report')



summaries = []
for x in report_response.enhanced_financial_report.report_items:
  summaries.append(Account(category='.'.join([y.level_name for y in x.transaction_category.levels]), balance=x.balance))

total_assets = sum(account.amount for accounts in accounts if account.category.startswith('Asset'))
total_debts = sum(account.amount for accounts in accounts if account.category.startswith('Liability.NonCurrent.LoansPayable'))

gearing_ratio = total_debts / total_assets
print(gearing_ratio)
```

</TabItem>

<TabItem value="csharp" label="C#">


```csharp
public record Account(string Category, decimal Balance);

// Convert date to dd-mm-yyyy format
var formattedDate = DateTime.UtcNow.ToString("dd-MM-yyyy");

// Last 12 months is returned by default
var reportResponse = await lendingClient.FinancialStatements.BalanceSheet.GetCategorizedAccountsAsync(new() {
    CompanyId = companyId,
    ReportDate = formattedDate,
});

if (reportResponse.StatusCode != 200) {
  throw new Exception("Could not get categorized balance sheet accounts");
}

var accounts = reportResponse.EnhancedFinancialReport.ReportItems.Select(x => new Account(){
  Category = string.Join(".", x.AccountCategory.Levels.Select(y => y.LevelName)),
  Balance = x.Balance
});

// Calculate gearing ratio
var totalAssets = accounts.Sum(x => x.Category.StartsWith("Asset"));
var totalDebts = accounts.Sum(x => x.Category.StartsWith("Liability.NonCurrent.LoansPayable"));

var gearingRatio = totalDebts / totalAssets;
Console.WriteLine(gearingRatio);
```

</TabItem>

<TabItem value="go" label="Go">

```go
type Account struct {
  Category string
  Balance float64
}

// Convert date to dd-mm-yyyy format
now := time.Now().UTC()
formattedDate := now.Format("28-11-2023")

ctx := context.Background()
reportResponse, err := lendingClient.FinancialStatements.BalanceSheet.GetCategorizedAccounts(ctx, 
  operations.GetCategorizedBalanceSheetStatementRequest{
    CompanyID: companyID,
    ReportDate: formattedDate,
})

if err == nil && reportResponse.StatusCode == 200 {
  accounts := []Account{}

  for _, account := range reportResponse.EnhancedFinancialReport.ReportItems {
    levelNames := []string{}
    for _, level := range account.AccountCategory.Levels {
      levelNames = append(levelNames, level.LevelName)
    }
    category := strings.Join(levelNames, ".")
    balance, _ := transaction.Amount.Float64()
		accounts = append(accounts, Account{category, balance})
	}

  totalAssets := 0.0
  totalDebts := 0.0
  for _, account := range accounts {
    if strings.HasPrefix(account.Category, "Assets") {
      totalAssets += transaction.Balance
    }

    if strings.HasPrefix(account.Category, "Liability.NonCurrent.LoansPayable") {
      totalDebts += transaction.Balance
    }
  }

  gearingRatio := totalDebts / totalAssets

  fmt.Println(gearingRatio)
}
```

</TabItem>

</Tabs>

## Get started

Once you have the Lending API enabled, configure your instance to work with our liabilities feature. 

#### Configure data sources

Follow the respective guides to set up and enable at least one accounting, banking, or commerce integration that will serve as a data source for the feature:

##### Accounting

<IntegrationsList filter={['Dynamics 365 Business Central', 'Exact Online', 'FreshBooks', 'MYOB Business', 'Oracle NetSuite', 'QuickBooks Online', 'QuickBooks Desktop', 'Sage 50', 'Sage Business Cloud Accounting', 'Xero']} />

##### Commerce

<IntegrationsList filter={['Stripe', 'Zettle']} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Proft and loss `profitAndLoss`
- Balance sheet `balanceSheet`
- Chart of accounts `chartOfAccounts`
- Journal entries `journalEntries`
- Accounts `banking-accounts`
- Transactions `banking-transactions`
- Transactions `commerce-transactions`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you configure the following [webhooks](/using-the-api/webhooks/core-rules-types) to manage your data pipelines. These webhooks send a notification for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state)  

  If you receive a notification from this webhook, it means an issue occured when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)  

  If you receive a notification from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

---

## Read next
- [Accounts receivable](/lending/features/accounts-receivable-overview)