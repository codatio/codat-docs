---
title: "Making an application decision"
description: "Review how to automatically make a loan decision based on underwriting metrics"
---


This is a reference page




## Fetching financial data with Assess


 Assess' [Enhanced Profit and Loss](https://docs.codat.io/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-enhancedProfitAndLoss) and [Enhanced Balance Sheet](https://docs.codat.io/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-enhancedBalanceSheet) endpoints for analysis

```html
GET https://api.codat.io/data/companies/{companyId}/connections/{connectionId}/assess/enhancedProfitAndLoss
GET https://api.codat.io/data/companies/{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet
```

You can explore Assess' other endpoints to focus on data relevant for your underwriting model. 


:::tip Demo app: pulling data from Codat

Let’s review how Codat supports the automatic decision-making by providing the data required to calculate the ratios. To fetch the data used by the [LoanUnderwriter](https://dev.azure.com/codat/Codat%20Spikes/_git/DemosUnderwriting?path=/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs&version=GBmain) service, we use Assess' [Enhanced Profit and Loss](https://docs.codat.io/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-enhancedProfitAndLoss) and [Enhanced Balance Sheet](https://docs.codat.io/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-enhancedBalanceSheet) endpoints for analysis.

Both endpoints require a `reportDate`, `periodLength`, and `numberOfPeriods` as query parameters. The loan application's `createdDate` is used where the year and previous month are set as the `reportDate`. This ensures that a full year of financial data is returned by Codat. In addition, `includeDisplayNames` parameter is set to `true` in the request because it allows accounts to be accessed via Codat's standardized taxonomy display names.

Once both enhanced data types have been fetched, they are passed to the [LoanUnderwriter](https://dev.azure.com/codat/Codat%20Spikes/_git/DemosUnderwriting?path=/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs&version=GBmain) service together with the application's loan amount and term length. This is to perform an assessment of the prospective borrower's credit worthiness.

Any details on the file directory and if there is anything specific to do there? 

ApplicationOrchestrator.cs?

how do you get meaningful data from the endpoint response

this is hwo we’ve normalized this

a bit of the example response structure. if some elements are not relevant for the guide, then we can exclude them from the response entirely. link out to OAS to the reports. 

Period 1, oldest

:::

How to access an element to create a ratio 

## Metrics used for underwriting

Each lender is expected to have their own set of metrics and checks they use to review an application. These can be easily supported by Assess and its associated data types to provide automatic decision-making on the loan application. 

:::tip Demo app: underwriting model

The underwriting model we use as our example in the [LoanUnderwriter](https://dev.azure.com/codat/Codat%20Spikes/_git/DemosUnderwriting?path=/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs&version=GBmain) service is a rules-based model that requires example thresholds to be passed for gross profit margin, revenue, and gearing ratio. You would have previously maintained these thresholds in `appsettings.json`.
:::

IS THIS EXPLANATION NEEDED? DOES THIS ALSO NEED TO GO INTO AN ADMONITION WITH TABS?

metric -> da

**Gross profit margin**  uses `operating` income values and `costOfSales` expense values returned by the `profitAndLoss` endpoint. It is calculated by subtracting cost of sales from net sales, and dividing the resulting gross profit by net sales. It is then expressed by a ratio, and indicates a business’s profitability. 

The **revenue**  relies on the the `profitAndLoss` endpoint and the `operating` income value returned by it, together with `loanAmount` and `loanTerm` values provided in the application form. It uses operating income value to determine whether the company’s monthly revenue covers the proposed monthly repayment to a sufficient threshold. It can serve as a useful indicator of overall business growth.

Finally, the gearing ratio used in the example model is the **debt ratio**, calculated by dividing total debt by total assets. It uses the `balanceSheet` endpoint and its `asset` and non-current payable loans `liability` values. Having too much debt may indicate a higher financial risk associated with the company. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip Demo app: underwriting metrics
<Tabs>
  <TabItem value="Gross profit margin" label="Gross profit margin">  
  Code snippet - critical pieces of logic, comments on which file to find them in 
  </TabItem>
  <TabItem value="Revenue" label="Revenue">  
  Code snippet - critical pieces of logic, comments on which file to find them in 
  </TabItem>
  <TabItem value="Debt ratio" label="Debt ratio">  
  Code snippet - critical pieces of logic, comments on which file to find them in 
  </TabItem>
</Tabs>
:::

## Generating an automatic decision

-We expect you to have your own list of statuses, thresholds, data requirements, and error handling. - Expand on this

:::tip Demo app: receiving the decision

Continue calling the `GET applications/{applicationId}` endpoint periodically to view the status of the loan until it is updated with an underwriting decision.

Only if all the thresholds are met or surpassed by the applicant, the loan request is automatically updated with an _Accepted_ status. Otherwise, the application is updated with a _Rejected_ status. We also cater for a scenario of programmatic errors that means a decision could not be made with a _UnderwritingFailure_ status.


The thresholds that are set, 
how the metrics above become a decision

:::


1 This is our decisioning

2 This is how we get the report / fetching that data

3 This is how we get the decision





# More resources

now you have a simple working guide. now you do ui - next js - here s embedded
underwriting model - here is a medium post
blog post on underwriting with assess






## Recap

Following this guide, you were able to plan or create your own underwriting application using Codat's Assess product. You also had the opportunity to see it in action by executing our demo project. 

Next, you can find out more about [Assess](/assess/overview), or explore other use cases.