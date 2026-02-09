---
title: "Aperçu des ventes"
sidebar_label: "Ventes"
description: "Évaluez avec des données en temps réel provenant des plateformes de paiement et de commerce des PME"
image: "/img/banners/social/lending.png"
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import { commerceIntegrations } from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Notre fonctionnalité de **ventes** offre des données provenant des connexions commerciales d'une entreprise liée, vous permettant d'accéder à des informations précieuses grâce à des métriques agrégées et une ventilation complète des transactions de vente provenant de plateformes de commerce électronique, de point de vente et de paiement de premier plan.

## Cas d'utilisation

Le cas d'utilisation principal de cette fonctionnalité est l'**analyse des revenus**. Évaluez les flux de revenus historiques avec des informations en temps réel sur les transactions, les commandes et les paiements. Les prêteurs utilisent ces points de données pour évaluer la stabilité, les modèles de croissance et la durabilité des revenus de l'emprunteur.

## Composants de la fonctionnalité

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=250863128&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "550px" }}
/>

## Enrichissements de la fonctionnalité

#### Métriques

Nos métriques incluent un ensemble de ratios et de métriques pré-calculés axés sur les données de commerce et de vente qui aident les prêteurs à évaluer la santé des commerçants et à évaluer le risque de crédit d'une entreprise. Le tableau suivant détaille les métriques calculées et leurs formules :

| Métrique                                                                                                          | Description                                                                                                               | Traduction en données Codat                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Revenue](https://docs.codat.io/lending-api#/operations/get-commerce-revenue-metrics)**                       |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Revenus                                                                                                         | Le revenu brut pour une période sélectionnée.                                                                                  | `Revenus = SOMME(orderlines.quantity * orderlines.unitPrice)` pour la période spécifiée                                                                                                                                                                                                                                                                                                                                                                                            |
| Croissance des revenus                                                                                                  | Le changement en pourcentage des revenus entre la valeur de la période actuelle et la valeur de la période précédente.                      | `Croissance des revenus % changement = ((b-a)/a) * 100` par rapport à la période précédente. <br/> a. revenus du mois précédent, <br/> b. revenus du mois actuel.                                                                                                                                                                                                                                                                                                               |
| **[Commandes](https://docs.codat.io/lending-api#/operations/get-commerce-orders-metrics)**                         |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Nombre de commandes                                                                                                | Le nombre de commandes pour une période spécifique.                                                                               | `Nombre de commandes = COMPTE(orders)` pour cette période                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Valeur des commandes                                                                                                     | La somme des valeurs de toutes les commandes sur une période spécifique.                                                               | `Valeur des commandes = SOMME(orders.totalAmount)` pour cette période                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Valeur moyenne des commandes                                                                                             | La valeur moyenne des commandes sur une période spécifiée.                                                                          | `Valeur moyenne des commandes = a / b` pour cette période. <br/> a. valeur des commandes, <br/> b. COMPTE(orders).                                                                                                                                                                                                                                                                                                                                                                    |
| **[Remboursements](https://docs.codat.io/lending-api#/operations/get-commerce-refunds-report)**                        |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Nombre de remboursements                                                                                               | Le nombre de commandes où le champ `totalRefund` n'est PAS NULL.                                                           | `Nombre de remboursements = COMPTE(orders)` pour la période sélectionnée où `totalRefund > 0` pour la période sélectionnée                                                                                                                                                                                                                                                                                                                                                                     |
| Valeur des remboursements                                                                                                | La somme de tous les remboursements sur une période spécifiée.                                                                           | `Valeur des remboursements = SOMME(orders.totalRefund)` pour la période sélectionnée, toujours exprimée comme une valeur négative                                                                                                                                                                                                                                                                                                                                                      |
| Taux de remboursement                                                                                                     | Le nombre de remboursements comparé au nombre de commandes sur une période spécifique.                                          | `Taux de remboursement = a / b` pour cette période. <br/> a. nombre de remboursements, <br/> b. nombre de commandes.                                                                                                                                                                                                                                                                                                                                                                   |
| **[Rétention de la clientèle](https://docs.codat.io/lending-api#/operations/get-commerce-customer-retention-metrics)** |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Clients existants                                                                                              | COMPTE de clients uniques où ils ont passé des commandes dans la période spécifiée ET dans toute période précédente                   | `Clients existants = COMPTE(customers)` qui ont passé des commandes dans la période spécifiée et dans toute période précédente                                                                                                                                                                                                                                                                                                                                                       |
| Nouveaux clients                                                                                                   | COMPTE de clients uniques où ils ont passé des commandes dans la période spécifiée ET AUCUNE dans toute période précédente.          | `Nouveaux clients = COMPTE(customers)` qui ont passé des commandes uniquement dans la période spécifiée                                                                                                                                                                                                                                                                                                                                                                               |
| Total des clients                                                                                                 | SOMME des clients existants et nouveaux.                                                                                        | `Total des clients = a + b`. <br/> a. nouveaux clients, <br/> b. clients existants.                                                                                                                                                                                                                                                                                                                                                                                                 |
| Taux de rétention                                                                                                  | Le pourcentage de clients existants dans la période par rapport au total des clients à la fin de la période précédente. | `Taux de rétention = (a/(b + c)) * 100` <br/> a. COMPTE(customers): clients existants de la période actuelle, c'est-à-dire les clients qui ont passé leur toute première commande avant la période actuelle <br/> b. COMPTE(customers): clients existants de la période précédente, c'est-à-dire les clients qui ont passé leur toute première commande avant la période précédente <br/> c. COMPTE(customers): nouveaux clients de la période précédente, c'est-à-dire les clients qui ont passé leur toute première commande dans la période précédente |
| Taux de répétition                                                                                                     | Le pourcentage de clients existants par rapport au total des clients sur la période spécifiée.                                        | `Taux de répétition = (a / a + b) * 100` <br/> a. COMPTE(customers): clients existants de la période actuelle, c'est-à-dire les clients qui ont passé leur toute première commande avant la période actuelle <br/> b. COMPTE(customers): nouveaux clients de la période actuelle, c'est-à-dire les clients qui ont passé leur toute première commande dans la période actuelle                                                                                        |
| **[Valeur à vie](https://docs.codat.io/lending-api#/operations/get-commerce-lifetime-value-metrics)**         |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Valeur à vie                                                                                                  | Le revenu qu'une entreprise peut attendre d'un client payant pendant son temps en tant que client payant.                          | `Valeur à vie = a * b * c` <br/> a. Valeur moyenne des commandes pour cette période <br/> b. `COMPTE(orders) / COMPTE(customers)`: nombre moyen de commandes par client, pour cette période <br/> c. `Durée de vie moyenne du client`: différence moyenne en jours entre les dernières et premières commandes dans une période spécifiée, pour tous les clients.                                                                                      |

## Sorties prises en charge

Vous pouvez récupérer les données lues et enrichies par la fonctionnalité en appelant les [endpoints de notre API](/lending-api#/) des **ventes**.

Par exemple, les prêteurs basés sur les revenus récurrents cherchant à évaluer la croissance mois après mois peuvent utiliser l'endpoint [Get commerce revenue metrics](/lending-api#/operations/get-commerce-revenue-metrics).

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
type RevenueGrowth {
  month: string;
  growthRate: number;
}

const now = new Date();
// Convert date to dd-mm-yyyy format
let formattedDate = `${now.getUTCDate().toString().padStart(2, '0')}-`;
formattedDate += `${(now.getUTCMonth() + 1).toString().padStart(2, '0')}-`;
formattedDate += `${now.getUTCFullYear()}`;

const revenueResponse = await lendingClient.sales.metrics.getRevenue({
    companyId: companyId,
    connectionId: connectionId,
    numberOfPeriods: 12,
    periodLength: 1,
    periodUnit: PeriodUnit.Month,
    reportDate: formattedDate,
    includeDisplayNames: true // Make accessing data easier
  });

if (revenueResponse.statusCode != 200) {
  throw new Error("Could not get revenue report")
}

// Revenue metrics contain two components: zeroth element is revenue and
// the first element is growth percentage compared to previous period.
const growthMonthOnMonth: RevenueGrowth[] = revenueResponse.commerceReport.reportData.map(x => ({
  month: x.itemDisplayName,
  growthRate: x.components[1].measures[0].value
}));

const growthRateAverage = growthMonthOnMonth.reduce((total, next) => total + next.growthRate) / growthMonthOnMonth.length;

if(growthRateAverage < growthRateThreshold){
  console.log('Prospective borrower does not qualify for a loan')
}
```

</TabItem>

<TabItem value="python" label="Python">

```python
@dataclass
class RevenueGrowth:
  month: str
  growth_rate: Decimal

# Convert date to dd-mm-yyyy format
formatted_date = datetime.utcnow().strftime("%d-%m-%Y")

revenue_request = operations.GetCommerceRevenueMetricsRequest(
    company_id=company_id,
    connection_id=connection_id,
    number_of_periods=12,
    period_length=1,
    period_unit=shared.PeriodUnit.MONTH,
    report_date=formatted_date,
    include_display_names=True # Make accessing data easier
)

revenue_response = lending_client.sales.metrics.get_revenue(revenue_request)

if revenue_response.status_code != 200:
  raise Exception('Could not get revenue report')

# Revenue metrics contain two components: zeroth element is revenue and
# the first element is growth percentage compared to previous period.

growth_month_on_month = []
for x in revenue_response.commerce_report.report_data:
  growth_month_on_month.append(RevenueGrowth(
    month=x.item_display_name,
    growth_rate=x.components[1].measures[0].value
  ))

growth_rate_average = sum(x.growth_rate for x in growth_month_on_month) / len(growth_month_on_month)

if growth_rate_average < growth_rate_threshold:
  print('Prospective borrower does not qualify for a loan')
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
public record RevenueGrowth(string Month, decimal GrowthRate);

// Convert date to dd-mm-yyyy format
var formattedDate = DateTime.UtcNow.ToString("dd-MM-yyyy");

var revenueResponse = await lendingClient.Sales.Metrics.GetRevenueAsync(new() {
    CompanyId = companyId,
    ConnectionId = connectionId,
    NumberOfPeriods = 12,
    PeriodLength = 1,
    PeriodUnit = PeriodUnit.Month,
    ReportDate = formattedDate,
    IncludeDisplayNames: true // Make accessing data easier
});

if (revenueResponse.StatusCode != 200) {
  throw new Exception("Could not get revenue report");
}

// Revenue metrics contain two components: zeroth element is revenue and
// the first element is growth percentage compared to previous period.
var growthMonthOnMonth = revenueResponse.CommerceReport.ReportData.Select(x => new RevenueGrowth(){
  Month = x.ItemDisplayName,
  GrowthRate = x.Components[1].Measures[0].Value
});

const growthRateAverage = growthMonthOnMonth.Average(x => x.GrowthRate);
if(growthRateAverage < growthRateThreshold){
  Console.WriteLine('Prospective borrower does not qualify for a loan');
}
```

</TabItem>

<TabItem value="go" label="Go">

```go
type RevenueGrowth struct {
  Month string
  GrowthRate float64
}

// Convert date to dd-mm-yyyy format
now := time.Now().UTC()
formattedDate := now.Format("28-11-2023")

ctx := context.Background()
revenueResponse, err := lendingClient.Sales.Metrics.GetRevenue(ctx,
  operations.GetCommerceRevenueMetricsRequest{
    CompanyID: companyID,
    ConnectionID: connectionID,
    NumberOfPeriods: 12,
    PeriodLength: 1,
    PeriodUnit: shared.PeriodUnitMonth,
    ReportDate: formattedDate,
    IncludeDisplayNames: true // Make accessing data easier
})

if err == nil && revenueResponse.StatusCode == 200 {
  growthMonthOnMonth := []RevenueGrowth{}

  // Revenue metrics contain two components: zeroth element is revenue and
  // the first element is growth percentage compared to previous period.
  for _, period := range revenueResponse.CommerceReport.ReportData {
    month := period.ItemDisplayName
    growthRate, _ := period.Components[1].Measures[0].Value.Float64()
		growthMonthOnMonth = append(growthMonthOnMonth, RevenueGrowth{month, growthRate})
  }

  growthRateSum := 0.0
  for _, period := range growthMonthOnMonth {
    growthRateSum += period.GrowthRate
  }

  growthRateAverage := growthRateSum / float64(len(growthMonthOnMonth));
  if growthRateAverage < growthRateThreshold {
    fmt.Println("Prospective borrower does not qualify for a loan")
  }
}
```

</TabItem>

</Tabs>

## Commencer

Une fois que vous avez activé la solution Lending, configurez votre instance pour travailler avec notre fonctionnalité de ventes.

#### Configurer les sources de données

Suivez les guides respectifs pour configurer et activer les intégrations commerciales qui serviront de source de données pour la fonctionnalité :

<IntegrationsList integrations={commerceIntegrations} />

#### Activer les types de données et la planification de synchronisation

Découvrez comment [activer les types de données](/core-concepts/data-type-settings#override-the-default-sync-settings) et assurez-vous que les types de données suivants ont été activés :

- Customers `commerce-customers`
- Disputes `commerce-disputes`
- Locations `commerce-locations`
- Orders `commerce-orders`
- Payment methods `commerce-paymentMethods`
- Payments `commerce-payments`
- Products `commerce-products`
- Product categories `commerce-productCategories`
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

- [États financiers](/lending/features/financial-statements-overview)
