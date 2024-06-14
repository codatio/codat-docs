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
  className="googleSheets"
  style={{ height: "660px" }}
/>

## Supported outputs

You can retrieve the data pulled by the feature by calling the **liabilities** [endpoints of our API](/lending-api#/operations/generate-loan-transactions). For example, use the [Get loan summaries](/lending-api#/operations/get-loan-summary) endpoint to review a company's loan repayment history and determine their drawdown to repayment ratio.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
type LoanData {
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
  const reportResponse = await lendingClient.liabilities.getLoanSummary({
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

const summaryResponse = await getLoanSummary(lendingClient, companyId, formattedDate)

const summaries: LoanData[] = summaryResponse.loanSummary.reportItems.map(x => {
  totalDrawdowns: x.totalDrawdowns,
  totalRepayments: x.totalRepayments
})

const totalDrawdowns = summaries.reduce((sum, current) => sum + current.totalDrawdowns, 0)
const totalRepayments = summaries.reduce((sum, current) => sum + current.totalRepayments, 0)

const repaymentRatio = totalRepayments / totalDrawdowns

if(repaymentRatio < repaymentRatioThreshold){
  console.log('Company does repayment ratio does not pass threshold')
}
```

</TabItem>

<TabItem value="python" label="Python">

```python
@dataclass
class LoanData:
  total_drawdowns: Decimal
  total_repayments: Decimal

source_type = operations.GenerateLoanSummarySourceType.ACCOUNTING

generate_request = operations.GenerateLoanSummaryRequest(
    company_id=company_id,
    source_type=source_type,
)

generate_response = lending_client.liabilities.generate_loan_summary(generate_request)

if generate_response.status_code != 202:
  raise Exception('Unable to generate loan summary report')

loan_summaries_request = operations.GetLoanSummaryRequest(
  company_id=company_id,
  source_type=source_type,
)

loan_summary = None
while True:
  loan_summaries_response = lending_client.liabilities.get_loan_summary(loan_summaries_request)

  if loan_summaries_response.status_code == 200:
    loan_summary = loan_summaries_response.loan_summary
    break

summaries = []
for x in loan_summary.report_items:
  summaries.append(LoanData(total_drawdowns=x.total_repayments, total_repayments=x.total_repayments))

total_drawdowns = sum(account.total_drawdowns for account in accounts)
total_repayments = sum(account.total_repayments for account in accounts)

repayment_ratio = total_repayments / total_drawdowns

if repayment_ratio < repayment_ratio_threshold:
  print('Company does repayment ratio does not pass threshold')
```

</TabItem>

<TabItem value="csharp" label="C#">


```csharp
public record LoanData(decimal TotalDrawdowns, decimal TotalRepayments);

var sourceType = GenerateLoanSummarySourceType.Accounting;

var generateSummaryResponse = await lendingClient.Liabilities.GenerateLoanSummaryAsync(new() {
    CompanyId = companyId,
    SourceType = sourceType,
});

if (generateSummaryResponse.StatusCode != 202) {
  throw new Exception("Unable to generate loan summary report");
}

LoanSummary summary = null;
while(true){
  var summaryResponse = await lendingClient.Liabilities.GetLoanSummaryAsync(new() {
      CompanyId = companyId,
      SourceType = sourceType,
  });

  if(summaryResponse.StatusCode == 200){
    summary = summaryResponse.LoanSummary;
    break;
  }
}

var summaries = summary.ReportItems.Select(x => new LoanData(){
  TotalDrawdowns = x.TotalDrawdowns,
  TotalRepayments = x.TotalRepayments
});

var totalDrawdowns = summaries.Sum(x => x.TotalDrawdowns);
var totalRepayments = summaries.Sum(x => x.TotalRepayments);

var repaymentRatio = totalRepayments / totalDrawdowns;

if(repaymentRatio < repaymentRatioThreshold){
  Console.WriteLine("Company does repayment ratio does not pass threshold");
}
```

</TabItem>

<TabItem value="go" label="Go">

```go
type LoanData struct {
  TotalDrawdowns float64
  TotalRepayments float64
}

sourceType := operations.GenerateLoanSummarySourceTypeAccounting
ctx := context.Background()

generateSummaryResponse, err := s.Liabilities.GenerateLoanSummary(ctx, operations.GenerateLoanSummaryRequest{
    CompanyID: companyID,
    SourceType: sourceType,
})

var LoanSummary summary
if generateSummaryResponse.StatusCode == 202 {
  for {
    var summaryResponse = await lendingClient.Liabilities.GetLoanSummary(ctx, operations.GetLoanSummaryRequest{
        CompanyID: companyID,
        SourceType: sourceType
    })
    
    if(summaryResponse.StatusCode == 200){
      summary = summaryResponse.LoanData;
      break;
    }
  }

  summaries = []LoanData{}
  for _, data := summary.ReportItems {
    totalDrawdowns, _ = data.TotalDrawdowns.Float64()
    totalRepayments, _ = data.TotalRepayments.Float64()
    summaries = append(summaries, LoanData{totalDrawdowns, totalRepayments})
  }

  totalDrawdowns := 0.0
  totalRepayments := 0.0
  for _, data, := summaries {
    totalDrawdowns += data.TotalDrawdowns
    totalRepayments += data.TotalRepayments
  }

  var repaymentRatio = totalRepayments / totalDrawdowns

  if repaymentRatio < repaymentRatioThreshold {
    fmt.Println("Company does repayment ratio does not pass threshold");
  }
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

We recommend you [configure webhook consumers](/using-the-api/webhooks/create-consumer) with the following [event types](/using-the-api/webhooks/event-types) to manage your data pipelines. These webhooks send a message for each `dataType` separately.

- [DataSyncStatusChangedToError](/using-the-api/webhooks/event-types)  

  If you receive a message from this webhook, it means an issue occurred when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [DatasetDataChanged](/using-the-api/webhooks/event-types)  

  If you receive a message from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

---

## Read next
- [Accounts receivable](/lending/features/accounts-receivable-overview)
