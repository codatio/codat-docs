## Using Assess' enhanced financials

### Fetching financial data with Assess

Let’s review how Codat supports the automatic decision-making by providing the data required to calculate the ratios. To fetch the data used by the [LoanUnderwriter](https://dev.azure.com/codat/Codat%20Spikes/_git/DemosUnderwriting?path=/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs&version=GBmain) service, we use Assess' [Enhanced Profit and Loss](https://docs.codat.io/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-enhancedProfitAndLoss) and [Enhanced Balance Sheet](https://docs.codat.io/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-enhancedBalanceSheet) endpoints for analysis:

- `GET https://api.codat.io/data/companies/{companyId}/connections/{connectionId}/assess/enhancedProfitAndLoss`
- `GET https://api.codat.io/data/companies/{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet`

Both endpoints require a `reportDate`, `periodLength`, and `numberOfPeriods` as query parameters. The loan application's `createdDate` is used where the year and previous month are set as the `reportDate`. This ensures that a full year of financial data is returned by Codat. In addition, `includeDisplayNames` parameter is set to `true` in the request because it allows accounts to be accessed via Codat's standardized taxonomy display names.

Once both enhanced data types have been fetched, they are passed to the [LoanUnderwriter](https://dev.azure.com/codat/Codat%20Spikes/_git/DemosUnderwriting?path=/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs&version=GBmain) service together with the application's loan amount and term length. This is to perform an assessment of the prospective borrower's credit worthiness.

### Metrics used for underwriting

Each lender is expected to have their own set of metrics and checks they use to review an application. These can be easily supported by Assess and its associated data types to provide automatic decision-making on the loan application. 

The underwriting model we use as our example in the [LoanUnderwriter](https://dev.azure.com/codat/Codat%20Spikes/_git/DemosUnderwriting?path=/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs&version=GBmain) service is a rules-based model that requires example thresholds to be passed for gross profit margin, revenue, and gearing ratio. 

**Gross profit margin** metric uses `operating` income values and `costOfSales` expense values returned by the `profitAndLoss` endpoint. It is calculated by subtracting cost of sales from net sales, and dividing the resulting gross profit by net sales. It is then expressed by a ratio, and indicates a business’s profitability. 

The **revenue** metric relies on the the `profitAndLoss` endpoint and the `operating` income value returned by it, together with `loanAmount` and `loanTerm` values provided in the application form. It uses operating income value to determine whether the company’s monthly revenue covers the proposed monthly repayment to a sufficient threshold. It can serve as a useful indicator of overall business growth.

Finally, the gearing ratio used in the example model is the **debt ratio**, calculated by dividing total debt by total assets. It uses the `balanceSheet` endpoint and its `asset` and non-current payable loans `liability` values. Having too much debt may indicate a higher financial risk associated with the company. 

Code snippet - criticak pieces of logic, comments on which file to find them in

how do you get meaningful data from the response

this is hwo we’ve normalized this

Only if all the thresholds are met or surpassed by the applicant, the loan request is automatically updated with an _Accepted_ status. Otherwise, the application is updated with a _Rejected_ status. We also cater for a scenario of programmatic errors that means a decision could not be made with a _UnderwritingFailure_ status.