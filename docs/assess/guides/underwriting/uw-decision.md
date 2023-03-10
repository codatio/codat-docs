---
title: "How the decisioning works"
description: "Reference page with details on our decisioning logic, fetching data, and coming to a decision"
---

### 🚀 In this section, you will...

* Review the app's decisioning logic,
* Understand how we fetch the required data, 
* See how the app makes a decision based on that data. 

### <input type="checkbox" unchecked/> Review the app's decisioning logic

Each lender usually has their own set of data points they use to review an application. 

The underwriting model we use as our example in the [LoanUnderwriter](https://github.com/codatio/build-guide-underwriting-be/blob/main/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs) service is a rules-based model that requires certain thresholds to be passed for **gross profit margin**, **revenue**, and **gearing ratio**. The threshold values for these data points are maintained in `appsettings.json`.

It also requires validated application details and the company's fully categorized accounts.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="gpm" label="Gross profit margin">

**Gross profit margin** uses `Income.Operating` values and `Expense.CostOfSales` values returned by Assess' [`profitAndLoss`](https://docs.codat.io/assess-api#/operations/get-enhanced-profit-and-loss) endpoint. It is calculated by subtracting cost of sales from net sales, and dividing the resulting gross profit by net sales. It is then expressed by a ratio, and indicates a business’s profitability. 
 
Its threshold is maintained as `MinGrossProfitMargin` in `appsettings.json`. In the demo app, the value is set to 0.4.

</TabItem>

<TabItem value="rev" label="Revenue">

The **revenue**  relies on the the [`profitAndLoss`](https://docs.codat.io/assess-api#/operations/get-enhanced-profit-and-loss) endpoint and the `Income.Operating` value returned by it, together with `loanAmount` and `loanTerm` values provided in the application form. It uses operating income value to determine whether the company’s monthly revenue covers the proposed monthly repayment to a sufficient threshold. It can serve as a useful indicator of overall business growth.

Its threshold is maintained as `RevenueThreshold` in `appsettings.json`. In the demo app, the value is set to 0.3.

</TabItem>

<TabItem value="grat" label="Gearing ratio">

The gearing ratio used in the example model is the **debt ratio**, calculated by dividing total debt by total assets. It uses the [`balanceSheet`](https://docs.codat.io/assess-api#/operations/get-enhanced-balance-sheet) endpoint and its `Asset` and `Liability.NonCurrent.LoansPayable` values. Having too much debt may indicate a higher financial risk associated with the company. 

Its threshold is maintained as `MaxGearingRatio` in `appsettings.json`. In the demo app, the value is set to 0.5.

</TabItem>

</Tabs>

### <input type="checkbox" unchecked/> See how we fetch financial data

Codat supports the automatic loan decision-making by providing the data required to calculate the ratios described previously. To fetch the required data, we use Assess' [Enhanced Profit and Loss](https://docs.codat.io/assess-api#/operations/get-enhanced-profit-and-loss) and [Enhanced Balance Sheet](https://docs.codat.io/assess-api#/operations/get-enhanced-balance-sheet) endpoints for analysis. The `{companyId}` used in the endpoint call is the same `id` as previously returned by the `/applications/start` endpoint. 

```html
GET https://api.codat.io/data/companies/{companyId}/connections/{connectionId}/assess/enhancedProfitAndLoss
GET https://api.codat.io/data/companies/{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet
```

Both endpoints require a `reportDate`, `periodLength`, and `numberOfPeriods` as query parameters. The loan application's `createdDate` is used where the year and previous month are set as the `reportDate`. This ensures that a full year of financial data is returned by Codat. In addition, `includeDisplayNames` parameter is set to `true` in the request because it allows accounts to be accessed via Codat's standardized taxonomy display names.

Once both enhanced data types have been fetched, they are passed to the [LoanUnderwriter]https://github.com/codatio/build-guide-underwriting-be/blob/main/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs) service together with the application's loan amount and term length. This is to perform an assessment of the prospective borrower's creditworthiness and make a decision on their application.

### <input type="checkbox" unchecked/> Understand how we generate an automatic decision

Once the demo app fetches the data, it uses the results to calculate the data points we use in our underwriting model: gross profit margin, revenue, and gearing ratio. In the underwriting industry, there are other models and data points that can be used to make a decision. The selection depends on the needs of your business. 

The [LoanUnderwriter](https://github.com/codatio/build-guide-underwriting-be/blob/main/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs) service then checks how these values compare to the thresholds set in the app: 

1. Gross profit margin must be more than `MinGrossProfitMargin` threshold set to 0.4,
2. Revenue must exceed the `RevenueThreshold` set to 0.3, and
3. Gearing ratio must be below the `MaxGearingRatio` threshold set to 0.5.

Only if all the thresholds are met or surpassed by the applicant, the app updates the loan request automatically with an _Accepted_ status. Otherwise, the application is updated with a _Rejected_ status. The app also caters for a scenario of programmatic errors that means a decision could not be made with a _UnderwritingFailure_ status.

### <input type="checkbox" unchecked/> Access additional resources

🗝️ You may want to enhance this simple working guide with some UI elements - why not use [Embedded Link](https://docs.codat.io/auth-flow/authorize-embedded-link) to seamlessly include our authorization journey into your app?

📊 If you are interested in underwriting models used by lenders in the industry, you can read through [Bigfoot Capital's blog](https://www.bigfootcap.com/revenue-based-financing/) on revenue-based finance or [Workweek's article](https://workweek.com/2023/03/02/unlocking-lending-innovation) on unlocking underwriting innovation.

💸 Lenders also use Assess to understand a business' liquidity via the [enhanced cash flow report](/assess/reports/enhanced-cash-flow-report/overview), or whether a business' accounts are accurate using both [data integrity](/assess/data-integrity) and the [audit report](/assess/reports/audit-report).

🧠 See what else [Codat recommends](https://www.codat.io/blog/how-to-underwrite-ecommerce-merchants-effectively/) to build your underwriting process effectively. 

### Recap

In this reference section, you have learned and understood in detail the data points we chose for our underwriting model, how we fetched the data used in in the calculation of these data points, and how all of this influenced the decision on the loan made automatically. 

Next, you can find out more about [Assess](/assess/overview), or explore other use cases.