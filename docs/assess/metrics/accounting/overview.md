---
title: "Accounting metrics"
sidebar_label: Overview
description: "Describes accounting metrics and the formulas produced by the financial and marketing metrics endpoints"
createdAt: "2022-02-18T14:39:41.096Z"
updatedAt: "2022-11-16T14:23:23.311Z"
---

This feature provides a set of pre-calculated ratios and metrics used to assess a company's performance. It leverages the [Categories](/categorization-of-accounts) feature, which standardizes bespoke data across SMEs. After the data is standardized, meaningful insights and measurements are produced for financial performance.

Currently, to measure company performance, clients need to map each of their customer’s bespoke financial statements to a single standardized chart of accounts - this is what our Categories feature does. After financials are fully standardized, clients need to perform complex calculations in order to produce financial ratios and metrics - this is what our Financial Metrics feature does. It saves the client considerable time and effort.

With this feature, you will decrease the time to onboard customers, underwrite customers faster, easily monitor the ongoing health of your customers, and provide improved financial reporting, planning and analysis. You will have more confidence in your decisions knowing they are based on the latest, most accurate data available.

## What ratios and metrics are available?

The following table lists which ratios and metrics are calculated, their formulas and how they translate to Codat data points:

## Financial metrics formulas


{
"data": {
"h-0": "Ratio / Metric",
"h-1": "Formula",
"h-2": "How that's translated to Codat data points",
"0-0": "Gross profit margin",
"0-1": "gross profit / net sales",
"0-2": "`Gross profit = a - b`

a. SUM(Income.Operating)
b. SUM(Expense.CostOfSales)

Net Sales = a
a. SUM(Income.Operating)",
"1-0": "EBITDA",
"1-1": "net operating income + interest + tax + depreciation + amortization",
"1-2": "`Net Income = a - b`

a. SUM(Income)
b. SUM(Expense)

`Interest = (a + b) - c`

a. SUM(Expense.Operating.Interest)
b. SUM(Expense.NonOperating.Interest)
c. SUM(Income.NonOperating.Interest)

`Tax = a`

a. SUM(Expense.NonOperating.Tax)

`Depreciation = a + b`

a. SUM(Expense.Operating.DepreciationDepletion)
b. SUM(Expense.Operating.Amortization)",
"2-0": "Debt service coverage ratio",
"2-1": "net operating income/total debt service

Where,
total debt service = Loan interest + principal",
"2-2": "`Net Operating Income = a - (b + c)`

a. SUM(Income.Operating)
b. SUM(Expense.CostOfSales)
c. SUM(Expense.Operating)

`Total Debt Service = sum(a : n)`

a. SUM(Expense.NonOperating.Interest)
b. SUM(Expense.Operating.Interest)
c. SUM(Expense.Operating.EquipmentRentLease)
d. SUM(Expense.Operating.BuildingRentLease)
e. SUM(Liability.Current.NotesPayable)
f. SUM(Liability.Current.LoansPayable)
g. SUM(Liability.Current.InterestPayable)
h. SUM(Liability.Current.FinanceLeaseObligations)
i. SUM(Liability.Current.CapitalLeaseObligations)
j. SUM(Liability.Current.OtherShortTermDebt)
k. SUM(Liability.Current.OtherLongTermDebt)
l. SUM(Liability.Current.CreditCards)
m. SUM(Liability.Current.ConvertibleDebt)
n. SUM(Liability.Current.DueToOfficersStockholders)",
"3-0": "Current ratio",
"3-1": "current assets / current liabilities",
"3-2": "`Current Assets = a`

a. SUM(Asset.Current)

`Current Liabilites = a`

a. SUM(Liability.Current)",
"4-0": "Quick ratio",
"4-1": "(current assets - inventory – prepaid expenses) / current liabilities",
"4-2": "`Current Assets = a`

a. SUM(Asset.Current)

`Inventory = SUM(a : e)`

a. SUM(Asset.Current.InventoryMerchandise)
b. SUM(Asset.Current.InventoryFinishedGoods)
c. SUM(Asset.Current.OtherInventory)
d. SUM(Asset.Current.InventoryRawMaterials)
e. SUM(Asset.Current.InventoryWorkInProcess)

`Prepaid Expenses = a`

a. SUM(Asset.Current.PrepaidExpenses)

`Current Liabilities = a`

a. SUM(Liability.Current)",
"5-0": "Free cash flow",
"5-1": "Net Income + Depreciation and amortization (non cash expense) - Working Capital Variation - Purchases of PP&E (CAPEX)",
"5-2": "`Free cash flow = Net Income + Non cash expense - Working Capital Variation - Purchases of PP&E (CAPEX)`

where,

`Net Income = a - b`

a. SUM(Income)
b. SUM(Expense)

`Non cash expense = sum(a : d)`

a. SUM(Expense.Operating.DepreciationDepletion)
b. SUM(Expense.Operating.Amortization)
c. SUM(Expense.Operating.RevaluationImpairment)
d. SUM(Expense.Operating.EmployeeStockCompensation)

`Working Capital Variation = (a - b) - (c - d)`

a. SUM(Asset.Current)
b. SUM(Liability.Current)
c. PreviousPeriod's SUM(Asset.Current)
d. PreviousPeriod's SUM(Liability.Current)

`Purchases of PP&E = SUM(a : j) - SUM(k : t)`

a. SUM(Asset.NonCurrent.FixturesFittings)
b. SUM(Asset.NonCurrent.EquipmentMachinery)
c. SUM(Asset.NonCurrent.LandBuildings)
d. SUM(Asset.NonCurrent.LandBuildingsImprovements)
e. SUM(Asset.NonCurrent.OtherTangibleAssets)
f. SUM(Asset.NonCurrent.CapitalLeases)
g. SUM(Asset.NonCurrent.AssetsUnderConstruction)
h. SUM(Asset.NonCurrent.Goodwill)
i. SUM(Asset.NonCurrent.IntangibleAssets)
j. SUM(Asset.NonCurrent.AcquisitionsInProgress)

k. PreviousPeriod'sum(Asset.NonCurrent.FixturesFittings)
l. PreviousPeriod'sum(Asset.NonCurrent.EquipmentMachinery)
m. PreviousPeriod'sum(Asset.NonCurrent.LandBuildings)
n. PreviousPeriod'sum(Asset.NonCurrent.LandBuildingsImprovements)
o. PreviousPeriod'sum(Asset.NonCurrent.OtherTangibleAssets)
p. PreviousPeriod'sum(Asset.NonCurrent.CapitalLeases)
q. PreviousPeriod'sum(Asset.NonCurrent.AssetsUnderConstruction)
r. PreviousPeriod'sum(Asset.NonCurrent.Goodwill)
s. PreviousPeriod'sum(Asset.NonCurrent.IntangibleAssets)
t. PreviousPeriod'sum(Asset.NonCurrent.AcquisitionsInProgress)",
"6-0": "Working capital",
"6-1": "current assets – current liabilities",
"6-2": "`Current Assets = a`

a. SUM(Asset.Current)

`Current Liabilites = a`

a. SUM(Liability.Current)",
"7-0": "Fixed-charge coverage ratio",
"7-1": "(EBIT + Fixed charge before tax) / (Fixed charge before tax + Interest)",
"7-2": "`EBIT = (a - b - c) + d`

a. SUM(Income.Operating)
b. SUM(Expense.CostOfSales)
c. SUM(Expense.Operating)
d. SUM(Expense.Operating.Interest)

`Fixed charge before tax = SUM(a : p)`

a. SUM(Expense.Operating.GeneralAdministrative)
b. SUM(Expense.Operating.SubscriptionFees)
c. SUM(Expense.Operating.OtherEmployeeBenefits)
d. SUM(Expense.Operating.EmployeeWages)
e. SUM(Expense.Operating.BuildingRentLease)
f. SUM(Expense.Operating.EquipmentRentLease)
g. SUM(Expense.Operating.BankCharges)
h. SUM(Expense.Operating.ManagementFees)
i. SUM(Expense.Operating.ServiceChargeGroundRent)
j. SUM(Expense.Operating.DirectorsCompensation)
k. SUM(Expense.Operating.EmployeeTax)
l. SUM(Expense.Operating.Pension)
m. SUM(Expense.Operating.DepreciationDepletion)
n. SUM(Expense.Operating.Amortization)
o. SUM(Expense.Operating.EmployeeStockCompensation)
p. SUM(Expense.Operating.RevaluationImpairment)

`Interest = a`

a. SUM(Expense.Operating.Interest)"
},
"cols": 3,
"rows": 8
}


## Marketing metrics formulas


{
"data": {
"h-0": "Percentage",
"h-1": "Formula",
"h-2": "How that's translated to Codat data points",
"0-0": "Marketing to revenue",
"1-0": "Marketing to expense",
"0-2": "`Marketing to revenue = a / b`

a. SUM(Income.Operating)
b. SUM(Expense.Operating.Marketing)",
"0-1": "(revenue) / (sum of marketing operating expense)",
"1-1": "(sum of marketing operating expense) / (expense)",
"1-2": "`Marketing to expense = a / b`

a. SUM(Expense.Operating.Marketing)
b. SUM(Expense)"
},
"cols": 3,
"rows": 2
}

