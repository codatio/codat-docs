---
title: "How the decisioning works"
description: "Reference page with details on our decisioning logic, fetching data, and coming to a decision"
sidebar_label: "App's decisioning logic"
---

### 🚀 In this section, you will...

* Review the app's decisioning logic,
* Understand how we fetch the required data, 
* See how the app makes a decision based on that data. 

### <input type="checkbox" unchecked/> Review the app's decisioning logic

Each lender usually has their own set of data points they use to review an application. 

The loan qualification model we use as our example in the [LoanUnderwriter](https://github.com/codatio/demo-loan-qualification/blob/main/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs) service is a rules-based model that requires certain thresholds to be passed for **gross profit margin**, **revenue**, and **gearing ratio**. The threshold values for these data points are maintained in `appsettings.json`.

It also requires validated application details and the company's fully categorized accounts.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="gpm" label="Gross profit margin">

**Gross profit margin** uses `Income.Operating` values and `Expense.CostOfSales` values returned by Lending' [`profitAndLoss`](https://docs.codat.io/assess-api#/operations/get-enhanced-profit-and-loss) endpoint. It is calculated by subtracting the cost of sales from net sales and dividing the resulting gross profit by net sales. It is then expressed by a ratio and indicates a business’s profitability. 

Its threshold is maintained as `MinGrossProfitMargin` in `appsettings.json`. In the demo app, the value is set to 0.4.

</TabItem>

<TabItem value="rev" label="Revenue">

The **revenue**  relies on the [`profitAndLoss`](https://docs.codat.io/assess-api#/operations/get-enhanced-profit-and-loss) endpoint and the `Income.Operating` value returned by it, together with `loanAmount` and `loanTerm` values provided in the application form. It uses operating income value to determine whether the company’s monthly revenue covers the proposed monthly repayment to a sufficient threshold. It can serve as a useful indicator of overall business growth.

Its threshold is maintained as `RevenueThreshold` in `appsettings.json`. In the demo app, the value is set to 0.3.

</TabItem>

<TabItem value="grat" label="Gearing ratio">

The gearing ratio used in the example model is the **debt ratio**, calculated by dividing total debt by total assets. It uses the [`balanceSheet`](https://docs.codat.io/assess-api#/operations/get-enhanced-balance-sheet) endpoint and its `Asset` and `Liability.NonCurrent.LoansPayable` values. Having too much debt may indicate a higher financial risk associated with the company. 

Its threshold is maintained as `MaxGearingRatio` in `appsettings.json`. In the demo app, the value is set to 0.5.

</TabItem>

</Tabs>

### <input type="checkbox" unchecked/> Understand how we generate an automatic decision

Once the demo app fetches the data, it uses the results to calculate the data points we use in our loan qualification model: gross profit margin, revenue, and gearing ratio. In the loan qualification industry, there are other models and data points that can be used to make a decision. The selection depends on the needs of your business. 

The [LoanUnderwriter](https://github.com/codatio/demo-loan-qualification/blob/main/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs) service then checks how these values compare to the thresholds set in the app: 

1. Gross profit margin must be more than `MinGrossProfitMargin` threshold set to 0.4,
2. Revenue must exceed the `RevenueThreshold` set to 0.3, and
3. Gearing ratio must be below the `MaxGearingRatio` threshold set to 0.5.

Only if all the thresholds are met or surpassed by the applicant, the app updates the loan request automatically with an _Accepted_ status. Otherwise, the application is updated with a _Rejected_ status. The app also caters for a scenario of programmatic errors that means a decision could not be made with a _UnderwritingFailure_ status.

### <input type="checkbox" unchecked/> Access additional resources

🗝️ You may want to enhance this simple working guide with some UI elements - why not use [Embedded Link](https://docs.codat.io/auth-flow/authorize-embedded-link) to seamlessly include our authorization journey into your app?

📊 If you are interested in loan qualification models used by lenders in the industry, you can read through [Bigfoot Capital's blog](https://www.bigfootcap.com/revenue-based-financing/) on revenue-based finance or [Workweek's article](https://workweek.com/2023/03/02/unlocking-lending-innovation) on unlocking loan qualification innovation.

🧠 See what else [Codat recommends](https://www.codat.io/blog/how-to-underwrite-ecommerce-merchants-effectively/) to build your loan qualification process effectively. 

🗣️ Anything unclear in this guide? Got feedback? We're working on a whole host of new content for you, so [let us know](https://github.com/orgs/codatio/discussions/new?category=general).

### Recap

In this reference section, you have learned and understood in detail the data points we chose for our loan qualification model, how we fetched the data used in the calculation of these data points, and how all of this influenced the decision on the loan made automatically. 

Next, you can find out more about [Lending API](/lending/overview), or explore other use cases.
