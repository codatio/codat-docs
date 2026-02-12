---
title: "Aperçu des passifs"
sidebar_label: "Passifs"
description: "Aperçu complet des prêts et analyse de l'historique de crédit"
image: "/fr-ca/img/banners/social/lending.png"
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import {
  accountingIntegrations,
  bankingIntegrations,
  commerceIntegrations,
} from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Notre fonctionnalité de **passifs** simplifie l'évaluation des obligations financières d'un emprunteur. Les modèles d'apprentissage automatique identifient automatiquement les prêts à partir des sources connectées et fournissent aux prêteurs un aperçu clair des prêts en cours d'un emprunteur et de leur historique de remboursement.

## Cas d'utilisation

Les utilisations courantes de notre fonctionnalité de passifs comprennent :

- **Évaluation des risques :** aide à évaluer le profil de risque de l'emprunteur et sa fiabilité en matière de remboursement.

- **Capacité d'endettement :** évalue si l'entreprise peut gérer plus de dettes sans tension financière.

- **Comportement de remboursement :** indique si l'emprunteur effectue ses paiements à temps ou fait défaut.

- **Structuration de prêt :** adapte les conditions du nouveau prêt à la situation financière de l'emprunteur.

## Composants de la fonctionnalité

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=554962936&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "660px" }}
/>

## Sorties prises en charge

Vous pouvez récupérer les données lues par la fonctionnalité en appelant les [endpoints de notre API](/lending-api#/operations/generate-loan-transactions) des **passifs**. Par exemple, utilisez l'endpoint [Get loan summaries](/lending-api#/operations/get-loan-summary) pour examiner l'historique de remboursement des prêts d'une entreprise et déterminer son ratio de prélèvement par rapport au remboursement.

<Tabs groupId="language">

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

## Commencer

Une fois que vous avez activé la solution Lending, configurez votre instance pour travailler avec notre fonctionnalité de passifs.

#### Configurer les sources de données

Suivez les guides respectifs pour configurer et activer au moins une intégration comptable, bancaire ou commerciale qui servira de source de données pour la fonctionnalité :

##### Comptabilité

<IntegrationsList
  filter={[
    "Dynamics 365 Business Central",
    "Exact Online",
    "FreshBooks",
    "MYOB Business",
    "Oracle NetSuite",
    "QuickBooks Online",
    "QuickBooks Desktop",
    "Sage 50",
    "Sage Accounting",
    "Xero",
  ]}
/>

##### Commerce

<IntegrationsList filter={["Stripe", "Zettle"]} />

#### Activer les types de données et la planification de synchronisation

Découvrez comment [activer les types de données](/core-concepts/data-type-settings#override-the-default-sync-settings) et assurez-vous que les types de données suivants ont été activés :

- Proft and loss `profitAndLoss`
- Balance sheet `balanceSheet`
- Chart of accounts `chartOfAccounts`
- Journal entries `journalEntries`
- Accounts `banking-accounts`
- Transactions `banking-transactions`
- Transactions `commerce-transactions`

Configurez la solution pour actualiser les données quand vous en avez besoin en [définissant une fréquence de synchronisation](/core-concepts/data-type-settings#choose-a-synchronization-frequency). Nous recommandons de la définir sur une synchronisation quotidienne ou mensuelle.

#### Configurer les webhooks

Nous vous recommandons de [configurer des consommateurs de webhook](/using-the-api/webhooks/create-consumer) avec les [types d'événements](/using-the-api/webhooks/event-types) suivants pour gérer vos pipelines de données. Ces webhooks envoient un message pour chaque `dataType` séparément.

- [`DataSyncStatusChangedToError`](/using-the-api/webhooks/event-types)

  Cela signifie qu'un problème est survenu lors de la synchronisation du type de données spécifié. Résolvez le problème et [lancez la synchronisation](/using-the-api/queueing-data-syncs#refresh-data) pour cet ensemble de données à nouveau.

- [`DatasetDataChanged`](/using-the-api/webhooks/event-types)

  Cela signifie que les données ont été mises à jour pour le type de données spécifié. Cela peut inclure des données nouvelles, mises à jour ou supprimées. Vous devriez alors actualiser les données dans votre plateforme.

---

## À lire ensuite

- [Comptes clients](/lending/features/accounts-receivable-overview)
