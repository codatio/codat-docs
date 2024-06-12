---
title: "Financial statements overview"
sidebar_label: "Financial statements"
description: "Automate financial statement and ratio calculation with a fully standardized profit and loss and balance sheet"
image: "/img/banners/social/lending.png"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations } from "@components/global/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Our **financial statements** feature provides lenders with a comprehensive view of a borrower's financial data, including profit and loss, balance sheet, and operating cash flow statements. Statements are categorized to a single chart of accounts allowing ratio analysis to be automated.

## Use cases

Common uses of our financial statements feature include:

- **Financial statement analysis:** identify potential red flags, such as declining profitability or increasing debt levels of your borrower, that could signal financial distress.

- **Ratio analysis:** examine key ratios that offer insights into the borrower's financial strength, efficiency, and profitability.

- **Monitoring:** continuously monitor the borrower's financial statements to track changes in their financial health over time.

## Feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1364518639&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "450px" }}
/>

## Feature enrichments

#### Categorized financial accounts

Businesses often have unique line items on their financial statements, which can pose challenges for comparison and automation. To address this, we've introduced a standardized set of financial categories called "account categories" for lenders. These categories enable seamless comparisons between companies. When connecting a company, our machine learning models predict the most suitable category for each account, drawing from extensive training on tens of thousands of accounts.

Each account category consists of up to five levels, with the most relevant level populated for each account.

<details>
  <summary>Supported account categories</summary>

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=340133827&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "450px" }}
/>
  
</details>

#### Recategorizing accounts

You can help improve the suggestions our model supplies by confirming them or providing a more applicable category. View all available categories proposed for accounts and, where relevant, recategorize them in the [Codat Portal](https://app.codat.io/).

<details>
  <summary>Recategorizing accounts in the Portal</summary>

1. Navigate to **Companies**, then click the company that requires recategorization. Select **Lending** in the side menu and choose **Categorize accounts** to view the categories for each account.  

  These are ordered by _impact_ by default, which is determined by the current account balance and our confidence in our automatic categorization. 

  ![An image of the Lending Categorization view in the Portal](/img/lending/acct-categorization-v3-2.png)

2. To change the category of an account, select the accounts using the checkbox and click **Recategorize**. 

   Choose an appropriate category from the proposed five levels and click **Recategorize**.  This saves the newly assigned category. 

![An image of the Lending Categorization view in the Portal with an account in process of recategorizing](/img/lending/acct-categorization-v3-3.png)

That's it! Financial statements will return the updated category for the accounts going forward.

</details>

## Supported outputs

You can retrieve the data pulled and enriched by this feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **financial statements** [endpoints of our API](/lending-api#/operations/get-categorized-profit-and-loss-statement). 

For example, a company's gearing ratio can be calculated using data returned by the [Get categorized balance sheet statement](/lending-api#/operations/get-categorized-balance-sheet-statement) endpoint. Check out our [loan qualification demo app](https://github.com/codatio/demo-loan-qualification/tree/main#demo-loan-qualification) written in C# to learn how to calculate other ratios. 

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
type Account {
  category: string;
  balance: number;
}

const now = new Date();
// Convert date to dd-mm-yyyy format
let formattedDate = `${now.getUTCDate().toString().padStart(2, '0')}-`;
formattedDate += `${(now.getUTCMonth() + 1).toString().padStart(2, '0')}-`;
formattedDate += `${now.getUTCFullYear()}`;

// Last 12 months is returned by default
const reportResponse = await lendingClient.financialStatements.balanceSheet.getCategorizedAccounts({
    companyId: companyId,
    reportDate: formattedDate,
  });

if (reportResponse.statusCode != 200) {
  throw new Error("Could not get categorized balance sheet accounts")
}

const accounts: Account[] = reportResponse.enhancedFinancialReport.reportItems.map(x => ({
  category: x.accountCategory.levels.map(y => y.levelName).join('.'),
  balance: x.balance
}));

// Calculate gearing ratio
const totalAssets = accounts.filter(x => x.category.startsWith('Asset'))
  .reduce((sum, current) => sum + current.balance, 0)

const totalDebts = accounts.filter(x => x.category.startsWith('Liability.NonCurrent.LoansPayable'))
  .reduce((sum, current) => sum + current.balance, 0)

const gearingRatio = totalDebts / totalAssets
console.log(gearingRatio)
```

</TabItem>

<TabItem value="python" label="Python">

```python
@dataclass
class Account:
  category: str
  amount: Decimal

# Convert date to dd-mm-yyyy format
formatted_date = datetime.utcnow().strftime("%d-%m-%Y")

# Last 12 months is returned by default
report_request = operations.GetCategorizedBalanceSheetStatementRequest(
    company_id=company_id,
    report_date=formatted_date,
)

report_response = lending_client.financial_statements.balance_sheet.get_categorized_accounts(report_request)

if report_response.status_code != 200:
  raise Exception('Could not get categorized balance sheet accounts')

accounts = []
for x in report_response.enhanced_financial_report.report_items:
  accounts.append(Account(category='.'.join([y.level_name for y in x.transaction_category.levels]), balance=x.balance))

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

Once you have the Lending API enabled, configure your instance to work with our financial statements feature. 

#### Configure data sources

Follow the respective guides to set up and enable accounting integrations that will serve as a data source for the feature:

<IntegrationsList integrations={accountingIntegrations} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Proft and loss `profitAndLoss`
- Balance sheet `balanceSheet`
- Cash flow statement `cashFlowStatement`
- Chart of accounts `chartOfAccounts`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you [configure webhook consumers](/using-the-api/webhooks/create-consumer) with the following [event types](/using-the-api/webhooks/event-types) to manage your data pipelines. These webhooks send a message for each `dataType` separately.

- [DataSyncStatusChangedToError](/using-the-api/webhooks/event-types)  

  If you receive a message from this webhook, it means an issue occurred when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [DatasetDataChanged](/using-the-api/webhooks/event-types)  

  If you receive a message from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

- [AccountCategoriesUpdated](/using-the-api/webhooks/event-types)

  If you receive a message from this webhook, it means categories associated with accounts have been updated for the [categorized profit and loss statement](https://docs.codat.io/lending-api#/operations/get-enhanced-profit-and-loss-accounts) and the [categorized balance sheet statement](https://docs.codat.io/lending-api#/operations/get-enhanced-balance-sheet-accounts) components. 
  
  This update may be done automatically by Codat updating `suggested` categories, or manually by a user updating `confirmed` categories.
---

## Read next
- [Liabilities](/lending/features/liabilities-overview)
