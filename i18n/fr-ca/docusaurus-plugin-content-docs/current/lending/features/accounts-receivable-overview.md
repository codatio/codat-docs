---
title: "Aperçu des comptes clients"
sidebar_label: "Comptes clients"
description: "Évaluer le risque débiteur en temps réel avec les informations sur les comptes clients"
image: "/img/banners/social/lending.png"
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import {
  accountingIntegrations,
  bankingIntegrations,
} from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Notre fonctionnalité de **comptes clients** offre une ventilation complète du grand livre des débiteurs d'un emprunteur provenant de son logiciel comptable. Vous pouvez examiner le grand livre dans son intégralité ou explorer des historiques de clients spécifiques, permettant une automatisation complète du processus de financement de créances.

## Cas d'utilisation

Les utilisations courantes de notre fonctionnalité de comptes clients incluent :

- **Collecte de données numériques :** obtenir un flux continu de factures clients.

- **Analyse du risque débiteur :** obtenir des informations sur l'historique d'un débiteur, y compris les détails du client et l'historique complet de la relation couvrant les factures, les paiements et les notes de crédit.

- **Rapprochement des factures :** faire correspondre automatiquement les paiements de factures avec les transactions bancaires.

- **Évaluation de la performance des recouvrements :** évaluer la ponctualité des paiements des clients, mesurer les niveaux de créances irrécouvrables et surveiller les soldes impayés des créances clients.

## Composants de la fonctionnalité

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=1688137158&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "660px" }}
/>

## Enrichissements de la fonctionnalité

#### Factures rapprochées

Le composant **factures rapprochées** de cette fonctionnalité simplifie le processus souvent fastidieux et sujet aux erreurs de rapprochement des paiements de factures avec les transactions bancaires. En automatisant cette tâche cruciale, il garantit que les prêteurs peuvent valider en toute confiance l'exactitude et l'authenticité des paiements de factures en temps réel, minimisant le risque d'erreurs et de fraude.

Un test rapide et facile consiste à filtrer les factures dont le statut est « Payé » mais qui n'ont pas de transaction bancaire correspondante.

Appelez notre endpoint [List reconciled invoices](/lending-api#/operations/list-reconciled-invoices) pour utiliser ce composant de fonctionnalité. Vous devez avoir à la fois une source comptable et une source bancaire connectées.

## Sorties prises en charge

Vous pouvez récupérer les données lues et enrichies par la fonctionnalité en [téléchargeant un rapport au format Excel](/lending/features/excel-download-overview) ou en appelant les [endpoints de notre API](/lending-api#/operations/list-reconciled-invoices) pour les **comptes clients**.

Par exemple, les fournisseurs de financement de factures cherchant à réduire leur risque peuvent utiliser l'endpoint [List reconciled invoices](/lending-api#/operations/list-reconciled-invoices) pour évaluer la capacité de remboursement des clients d'une PME.

<Tabs groupId="language">

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

## Pour commencer

Une fois la solution Lending activée, configurez votre instance pour fonctionner avec notre fonctionnalité de comptes clients.

#### Configurer les sources de données

Suivez les guides respectifs pour configurer et activer au moins une intégration comptable et une intégration bancaire qui serviront de source de données pour la fonctionnalité de comptes clients :

##### Comptabilité

<IntegrationsList integrations={accountingIntegrations} />

##### Bancaire

<IntegrationsList integrations={bankingIntegrations} />

#### Activer les types de données et le calendrier de synchronisation

Consultez comment [activer les types de données](/core-concepts/data-type-settings#override-the-default-sync-settings) et assurez-vous que les types de données suivants ont été activés :

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

Configurez la solution pour actualiser les données lorsque vous en avez besoin en [définissant une fréquence de synchronisation](/core-concepts/data-type-settings#choose-a-synchronization-frequency). Nous recommandons de définir une synchronisation quotidienne ou mensuelle.

#### Configurer les webhooks

Nous vous recommandons de [configurer des consommateurs de webhooks](/using-the-api/webhooks/create-consumer) avec les [types d'événements](/using-the-api/webhooks/event-types) suivants pour gérer vos pipelines de données. Ces webhooks envoient un message pour chaque `dataType` séparément.

- [Dataset status has changed to an error state](/using-the-api/webhooks/event-types)

  Cela signifie qu'un problème s'est produit lors de la synchronisation du type de données spécifié. Résolvez le problème et [lancez la synchronisation](/using-the-api/queueing-data-syncs#refresh-data) pour cet ensemble de données à nouveau.

- [Dataset data changed](/using-the-api/webhooks/event-types)

  Cela signifie que les données ont été mises à jour pour le type de données spécifié. Cela peut inclure des données nouvelles, mises à jour ou supprimées. Vous devez alors actualiser les données dans votre plateforme.

---

## À lire ensuite

- [Accounts payable](/lending/features/accounts-payable-overview)
