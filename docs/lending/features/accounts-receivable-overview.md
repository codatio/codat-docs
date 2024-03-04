---
title: "Accounts receivable overview"
sidebar_label: "Accounts receivable"
description: "Assessing debtor risk in real time with accounts receivable insights"
image: "/img/banners/social/lending.png"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations, bankingIntegrations } from "@components/global/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Our **accounts receivable** feature offers a thorough breakdown of a borrower's debtors ledger sourced from their accounting platform. You can examine the ledger in its entirety or delve into specific customer histories, enabling full automation of the receivables financing process.

## Use cases

Common uses of our accounts receivable feature include:

- **Digital data collection:** get an ongoing feed of customer invoices.

- **Debtor risk analysis:** gain insights into a debtor's history, including customer details and comprehensive relationship history spanning invoices, payments, and credit notes.

- **Invoice reconciliation:** automatically match invoice payments with bank transactions.

- **Collections performance evaluation:** assess customer payment timeliness, gauge bad debt levels, and monitor outstanding customer receivables balances.

## Feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1688137158&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "660px" }}
></iframe>

## Feature enrichments

#### Reconciled invoices

The **reconciled invoices** component of this feature streamlines the often tedious and error-prone process of matching invoice payments with bank transactions. By automating this crucial task, it ensures that lenders can confidently validate the accuracy and authenticity of invoice payments in real time, minimizing the risk of errors and fraud. 

A quick and easy test is to filter for invoices that have a status of ‘Paid’ but do not have a matching bank transaction. 

Call our [List reconciled invoices](/lending-api#/operations/list-reconciled-invoices) endpoint to use this feature component. You must have both an accounting and a banking source connected. 

## Supported outputs

You can retrieve the data pulled and enriched by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **accounts receivable** [endpoints of our API](/lending-api#/operations/list-reconciled-invoices).

For example, invoice finance providers looking to reduce their risk can use the [List reconciled invoices](/lending-api#/operations/list-reconciled-invoices) endpoint to evaluate an SMB's customers ability to repay.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
type CustomerDetails {
  id: string;
  name: string;
}

const invoicesResponse = await lendingClient.accountsReceivable.invoices.listReconciled({
    companyId: companyId,
    query: 'status=Paid'
  });

if(invoicesResponse.statusCode != 200){
  throw new Error("Could not get reconciled invoices")
}

// Get all fully reconciled invoices
const reconciledInvoices = invoicesResponse.enhancedInvoicesReport.reportItems.filter(x => {
  reconciledTotal = x.payments.reduce((sum, current) => sum + current.amount, 0);
  return x.totalAmount === reconciledTotal;
})

// Get customer details:
const customers: CustomerDetails[] = reconciledInvoices.map(x => {
  id: x.customerRef.id,
  name: x.customerRef.customerName
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
@dataclass
class CustomerDetails:
  id: str
  name: str

# Get all fully reconciled invoices
invoices_request = operations.ListReconciledInvoicesRequest(
    company_id=company_id,
    query='status=Paid'
)
invoices_response = lending_client.accounts_receivable.invoices.list_reconciled(invoices_request)

if invoices_response.status_code != 200:
  raise Exception('Could not get reconciled invoices')

# Get customer details for fully reconciled invoices:
customers = []
for invoice in invoices_response.enhanced_invoices_report.report_items:
  reconciled_total = sum(x for x in invoice.payments)

  if invoice.total_amount == reconciled_total:
    customers.append(CustomerDetails(
      id=invoice.customer_ref.id,
      name=invoice.customer_ref.customer_ame
    ))
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
public record CustomerDetails(string Id, string Name);

var invoicesResponse = await lendingClient.AccountsReceivable.Invoices.ListReconciledAsync(new() {
    CompanyId = companyId,
    Query = "status=Paid"
});

if(invoicesResponse.StatusCode != 200){
  throw new Exception("Could not get reconciled invoices");
}

// Get customer details for fully reconciled invoices:
var customers = invoicesResponse.EnhancedInvoicesReport.ReportItems.Where(x =>
  x.payments.Sum(y => y.Amount) == x.TotalAmount)
  .Select(x => new CustomerDetails(x.CustomerRef.Id, x.CustomerRef.CustomerName);
```

</TabItem>

<TabItem value="go" label="Go">

```go
type CustomerDetails struct {
  Id string
  Name string
}

ctx := context.Background()
invoicesResponse, err := lendingClient.AccountsReceivable.Invoices.ListReconciled(
    ctx,
    operations.ListReconciledInvoicesRequest{
      CompanyID: companyID,
      Query: "status=Paid"
  })

if invoicesResponse.StatusCode == 200 {
  // Get customer details for fully reconciled invoices:
  customers = []CustomerDetails{}
  for _, invoice := invoicesResponse.EnhancedInvoicesReport.ReportItems {
    reconciledTotal := 0.0
    for _, payment := invoice.payments {
      reconciledTotal += payment.Amount
    }

    if reconciledTotal == invoice.TotalAmount {
      customers = append(customers, CustomerDetails{})
    }
  }
}
```

</TabItem>

</Tabs>

## Get started

Once you have the Lending API enabled, configure your instance to work with our accounts receivable feature. 

#### Configure data sources

Follow the respective guides to set up and enable at least one accounting and one banking integration that will serve as a data source for the accounts receivable feature:

##### Accounting

<IntegrationsList integrations={accountingIntegrations} />

##### Banking

<IntegrationsList integrations={bankingIntegrations} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Customers `customers`
- Invoices `invoices`
- Payments `payments`
- Credit Notes `creditNotes`
- Account transactions `accountTransactions`
- Direct costs `directCosts`
- Direct incomes `directIncomes`
- Transfers `transfers`
- Accounts `banking-accounts`
- Transactions `banking-transactions`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you [configure webhook consumers](/using-the-api/webhooks/create-consumer) with the following [event types](/using-the-api/webhooks/event-types) to manage your data pipelines. These webhooks send a message for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/event-types)  

  If you receive a message from this webhook, it means an issue has occurred when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [Dataset data changed](/using-the-api/webhooks/event-types)  

  If you receive a message from this webhook, it means data has been updated for the specified data type. This can include new, updated, or deleted data. You should then refresh the data in your platform.

---

## Read next
- [Accounts payable](/lending/features/accounts-payable-overview)
