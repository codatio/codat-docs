---
title: "Indicators"
createdAt: "2021-11-18T13:27:38.767Z"
updatedAt: "2022-11-23T15:37:00.914Z"
---

:::caution Indicators - Beta testing

Note that Indicators is still in testing mode across all integrations and hasn't been fully released yet.

If you're interested in participating in the beta testing, contact your sales representative.
:::

This feature provides a set of pre-calculated ratios and metrics used to assess company financial performance. It leverages the [Categories](/categorization-of-accounts) feature, which standardizes bespoke data across SMEs. After the data is standardized, meaningful insights and measurements are produced for financial performance.

Currently, to measure company performance, clients need to map each of their customer’s bespoke financial statements to a single standardized chart of accounts - this is what our Categories feature does. After financials are fully standardized, clients need to perform complex calculations in order to produce financial ratios and metrics - this is what our Indicators feature does. It saves the client considerable time and effort.

With this feature, you will decrease the time to onboard customers, underwrite customers faster, easily monitor the ongoing health of your customers, and provide improved financial reporting, planning and analysis. You will have more confidence in your decisions knowing they are based on the latest, most accurate data available.

## What ratios and metrics are available?

The following table lists which ratios and metrics are calculated, their formulas and how they translate to Codat data points:

[block:parameters]
{
"data": {
"h-0": "Ratio / Metric",
"h-1": "Formula",
"h-2": "How that's translated to Codat data points",
"0-0": "Gross profit margin",
"0-1": "gross profit / net sales",
"0-2": "Gross profit = a-b \n<ul> \n<li>a. sum[Income.Operating]</li> \n<li>b. sum[Expense.CostOfSales]</li> \n</ul> \nNet Sales = a \n<ul> \n<li>a. sum[Income.Operating]</li> \n</ul>",
"1-0": "EBITDA",
"1-1": "net income + interest + tax + depreciation + amortization",
"1-2": "Net Income = a - b \n<ul> \n<li>a. sum [Income]</li> \n<li>b. sum [Expense] </li> \n</ul> \nInterest = a + b \n<ul> \n<li>a. sum[Expense.Operating.Interest] </li> \n<li>b. sum[Expense.NonOperating.Interest]</li> \n</ul> \nTax = a \n<ul> \n<li>a. sum[Expense.NonOperating.Tax] </li> \n</ul> \nDepreciation = a \n<ul> \n<li>a. sum[Expense.Operating.DepreciationDepletion] </li> \n</ul> \nAmortization = a \n<ul> \n<li>a. sum[Expense.Operating.Amortization]</li> \n</ul>",
"2-0": "Debt service coverage ratio",
"2-1": "net operating income/total debt service \n \nWhere, \ntotal debt service = Loan interest + principal",
"2-2": "Net Operating Income = a - (b + c) \n<ul> \n<li>a. sum[Income.Operating] </li> \n<li>b. sum[Expense.CostOfSales] </li> \n<li>c. sum[Expense.Operating]</li> \n</ul> \nTotal Debt Service = sum(a : n) \n<ul> \n<li>a. sum[Expense.NonOperating.Interest]</li> \n<li>b. sum[Expense.Operating.Interest]</li> \n<li>c. sum[Expense.Operating.EquipmentRentLease]</li> \n<li>d. sum[Expense.Operating.BuildingRentLease]</li> \n<li>e. sum[Liability.Current.NotesPayable]</li> \n<li>f. sum[Liability.Current.LoansPayable]</li> \n<li>g. sum[Liability.Current.InterestPayable]</li> \n<li>h. sum[Liability.Current.FinanceLeaseObligations]</li> \n<li>i. sum[Liability.Current.CapitalLeaseObligations]</li> \n<li>j. sum[Liability.Current.OtherShortTermDebt]</li> \n<li>k. sum[Liability.Current.OtherLongTermDebt]</li> \n<li>l. sum[Liability.Current.CreditCards]</li> \n<li>m. sum[Liability.Current.ConvertibleDebt]</li> \n<li>n. sum[Liability.Current.DueToOfficersStockholders]</li> \n</ul>",
"3-0": "Current ratio",
"3-1": "current assets / current liabilities",
"3-2": "Current Assets = a \n<ul> \n<li>a. sum[Asset.Current] </li> \n</ul> \nCurrent Liabilites = a \n<ul> \n<li>a. sum[Liability.Current]</li> \n</ul>",
"4-0": "Quick ratio",
"4-1": "(current assets - inventory – prepaid expenses) / current liabilities",
"4-2": "Current Assets = a \n<ul> \n<li>a. sum[Asset.Current] </li> \n</ul> \nInventory = sum(a : e) \n<ul> \n<li>a. sum[Asset.Current.InventoryMerchandise]</li> \n<li>b. sum[Asset.Current.InventoryFinishedGoods]</li> \n<li>c. sum[Asset.Current.OtherInventory]</li> \n<li>d. sum[Asset.Current.InventoryRawMaterials]</li> \n<li>e. sum[Asset.Current.InventoryWorkInProcess] </li> \n</ul> \nPrepaid Expenses = a \n<ul> \n<li>a. sum[Asset.Current.PrepaidExpenses] </li> \n</ul> \nCurrent Liabilities = a \n<ul> \n<li>a. sum[Liability.Current]</li> \n</ul>",
"5-0": "Free cash flow",
"5-1": "net income + Depreciation and amortization (non-cash expense) - Working Capital Variation - Purchases of PP&E (CAPEX) \n \nWhere, \nWorking Capital Variation = Stock + Account Receivable (trade and others) – Account Payables (trade and others)",
"5-2": "Net Income = a - b \n<ul> \n<li>a. sum [Income]</li> \n<li>b. sum [Expense]</li> \n</ul> \nNon-cash expense = sum(a:d) \n<ul> \n<li>a. sum[Expense.Operating.DepreciationDepletion]</li> \n<li>b. sum[Expense.Operating.Amortization]</li> \n<li>c. sum[Expense.Operating.RevaluationImpairment]</li> \n<li>d. sum[Expense.Operating.EmployeeStockCompensation]</li> \n</ul> \nWorking Capital variation = ((sum(a:e) + k ) - m) - ((sum(f:j) + l) - n) \n<ul> \n<li>a. sum[Asset.Current.InventoryMerchandise]</li> \n<li>b. sum[Asset.Current.InventoryFinishedGoods]</li> \n<li>c. sum[Asset.Current.OtherInventory]</li> \n<li>d. sum[Asset.Current.InventoryRawMaterials]</li> \n<li>e. sum[Asset.Current.InventoryWorkInProcess]</li> \n<li>f. PreviousYr'sum[Asset.Current.InventoryMerchandise]</li> \n<li>g. PreviousYr'sum[Asset.Current.InventoryFinishedGoods]</li> \n<li>h. PreviousYr'sum[Asset.Current.OtherInventory]</li> \n<li>i. PreviousYr'sum[Asset.Current.InventoryRawMaterials]</li> \n<li>j. PreviousYr'sum[Asset.Current.InventoryWorkInProcess]</li> \n<li>k. sum[Asset.Current.AccountsReceivable]</li> \n<li>l. PreviousYr'sum[Asset.Current.AccountsReceivable]</li> \n<li>m. sum[Liability.Current.AccountsPayable]</li> \n<li>n. PreviousYr'sum[Liability.Current.AccountsPayable]</li> \n</ul> \nPurchases of PP&E = sum(a:j) - sum(k:t) \n<ul> \n<li>a. sum[Asset.NonCurrent.FixturesFittings]</li> \n<li>b. sum[Asset.NonCurrent.EquipmentMachinery]</li> \n<li>c. sum[Asset.NonCurrent.LandBuildings]</li> \n<li>d. sum[Asset.NonCurrent.LandBuildingsImprovements]</li> \n<li>e. sum[Asset.NonCurrent.OtherTangibleAssets]</li> \n<li>f. sum[Asset.NonCurrent.CapitalLeases]</li> \n<li>g. sum[Asset.NonCurrent.AssetsUnderConstruction]</li> \n<li>h. sum[Asset.NonCurrent.Goodwill]</li> \n<li>i. sum[Asset.NonCurrent.IntangibleAssets]</li> \n<li>j. sum[Asset.NonCurrent.AcquisitionsInProgress]</li> \n<li>k. PreviousYr'sum[Asset.NonCurrent.FixturesFittings]</li> \n<li>l. PreviousYr'sum[Asset.NonCurrent.EquipmentMachinery]</li> \n<li>m. PreviousYr'sum[Asset.NonCurrent.LandBuildings]</li> \n<li>n. PreviousYr'sum[Asset.NonCurrent.LandBuildingsImprovements]</li> \n<li>o. PreviousYr'sum[Asset.NonCurrent.OtherTangibleAssets]</li> \n<li>p. PreviousYr'sum[Asset.NonCurrent.CapitalLeases]</li> \n<li>q. PreviousYr'sum[Asset.NonCurrent.AssetsUnderConstruction]</li> \n<li>r. PreviousYr'sum[Asset.NonCurrent.Goodwill]</li> \n<li>s. PreviousYr'sum[Asset.NonCurrent.IntangibleAssets]</li> \n<li>t. PreviousYr'sum[Asset.NonCurrent.AcquisitionsInProgress]</li> \n</ul>",
"6-0": "Working capital",
"6-1": "current assets – current liabilities",
"6-2": "Current Assets = a \n<ul> \n<li>a. sum[Asset.Current] \n</ul> \nCurrent Liabilites = a \n<ul> \n<li>a. sum[Liability.Current] \n</ul>",
"7-0": "Fixed-charge coverage ratio",
"7-1": "(EBIT + Fixed charge before tax) / (Fixed charge before tax + Interest)",
"7-2": "EBIT = (a - b - c) + d \n<ul> \n<li>a. sum[Income.Operating]</li> \n<li>b. sum[Expense.CostOfSales]</li> \n<li>c. sum[Expense.Operating]</li> \n<li>d. sum[Expense.Operating.Interest] </li> \n</ul> \nFixed charge before tax = sum(a:p) \n<ul> \n<li>a. sum[Expense.Operating.GeneralAdministrative]</li> \n<li>b. sum[Expense.Operating.SubscriptionFees]</li> \n<li>c. sum[Expense.Operating.OtherEmployeeBenefits]</li> \n<li>d. sum[Expense.Operating.EmployeeWages]</li> \n<li>e. sum[Expense.Operating.BuildingRentLease]</li> \n<li>f. sum[Expense.Operating.EquipmentRentLease]</li> \n<li>g. sum[Expense.Operating.BankCharges]</li> \n<li>h. sum[Expense.Operating.ManagementFees]</li> \n<li>i. sum[Expense.Operating.ServiceChargeGroundRent]</li> \n<li>j. sum[Expense.Operating.DirectorsCompensation]</li> \n<li>k. sum[Expense.Operating.EmployeeTax]</li> \n<li>l. sum[Expense.Operating.Pension]</li> \n<li>m. sum[Expense.Operating.DepreciationDepletion]</li> \n<li>n. sum[Expense.Operating.Amortization]</li> \n<li>o. sum[Expense.Operating.EmployeeStockCompensation]</li> \n<li>p. sum[Expense.Operating.RevaluationImpairment] </li> \n</ul> \nInterest = a \n<ul> \n<li>a. sum[Expense.Operating.Interest]</li> \n</ul>"
},
"cols": 3,
"rows": 8,
"align": [
"left",
"left",
"left"
]
}
[/block]

## How to access Indicators

You can access Indicators on the Codat Portal. Make sure you have _Accounts_, _Profit and Loss_, and _Balance Sheet_ enabled to sync.

1. Log in to the <a href="https://app.codat.io/" target="_blank">Codat Portal</a>.
2. Go to the **Companies** page.
3. Click the company whose ratios and metrics you want to calculate.
4. Click the _Visualize_ button.  
   _Skip_ the Companies House popup.
5. Click the _Profit and Loss_ tab or the _Balance Sheet_ tab.
6. Click the _Indicators_ tab which is located below the graph and to the left. The following table of ratios and metrics displays below the graph:

![Indicators section sceenshot with ratios, metrics and results displayed](https://files.readme.io/05c3659-Indicators_Img1.png)

7. Specify your filters: _Latest Month_, _Period Length_ and _Periods to Compare_, to automatically calculate the ratios and metrics for your selection.

![Filters section of Indicators](https://files.readme.io/ede8553-Indicators_Img2.png)

## Resolve errors

Errors are flagged with a red and white exclamation mark as shown in the image below. The system generates the following errors:

- Accounts are missing categories
- Data not available

:::caution Alert

Please make sure your accounts are correctly [categorized](/portal-categorization-of-accounts).
:::

### Accounts are missing categories

This error occurs when an account is either uncategorized or is partially categorized.

When a company is first linked, Codat automatically categorizes accounts and attempts to calculate the ratios and metrics. If an account could not be auto-categorized, it will show an error message. Clicking the message and following the instructions will guide you through a short process to manually apply a category to the account. Once completed, the ratios and metrics are recalculated automatically. The steps for doing this are shown below.

1. Click the exclamation mark to view the error message.

![An error pop-up window](https://files.readme.io/e80e37a-Indicators_Img3.png)

2. Click the _Categorize accounts_ button. The screen below is displayed.

![Account categorization screen](https://files.readme.io/5a04764-Indicators_Img4.png)

In this example, it shows that the VAT account has not been categorized.

3. Select an _Account subtype_, _Account detail_ and click _Save_.  
   The ratios and metrics will automatically recalculate.

### Data not available

If a company does not have accounts that a ratio or metric usually requires, it is treated as zero and flagged with a red and white exclamation mark. This warning is for information purposes only, no user action is required. For example, the current ratio is computed using formula _current assets/current liabilities_. If a business does not have any accounts which are considered current assets, that line item will show the warning icon.

!["Data not available" error pop-up window](https://files.readme.io/1175751-Indicators_Img5.png)
