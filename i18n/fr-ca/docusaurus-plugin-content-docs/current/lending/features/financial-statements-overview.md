---
title: "Aperçu des états financiers"
sidebar_label: "États financiers"
description: "Automatisez le calcul des états financiers et des ratios avec un état de résultat et un bilan entièrement standardisés"
image: "/fr-ca/img/banners/social/lending.png"
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import { accountingIntegrations } from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Notre fonctionnalité d'**états financiers** offre aux prêteurs une vue complète des données financières d'un emprunteur, incluant les états de résultat, le bilan et les états des flux de trésorerie d'exploitation. Les états sont catégorisés selon un plan comptable unique permettant d'automatiser l'analyse des ratios.

## Cas d'utilisation

Les utilisations courantes de notre fonctionnalité d'états financiers comprennent :

- **Analyse des états financiers :** identifiez les signaux d'alerte potentiels, tels qu'une baisse de rentabilité ou une augmentation des niveaux d'endettement de votre emprunteur, qui pourraient signaler une détresse financière.

- **Analyse des ratios :** examinez les ratios clés qui offrent des perspectives sur la solidité financière, l'efficacité et la rentabilité de l'emprunteur.

- **Surveillance :** surveillez en continu les états financiers de l'emprunteur pour suivre les changements dans leur santé financière au fil du temps.

## Composants de la fonctionnalité

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=1364518639&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "450px" }}
/>

## Enrichissements de la fonctionnalité

#### Comptes financiers catégorisés

Les entreprises ont souvent des postes uniques sur leurs états financiers, ce qui peut poser des défis pour la comparaison et l'automatisation. Pour résoudre ce problème, nous avons introduit un ensemble standardisé de catégories financières appelées « catégories de comptes » pour les prêteurs. Ces catégories permettent des comparaisons transparentes entre les entreprises. Lors de la connexion d'une entreprise, nos modèles d'apprentissage automatique prédisent la catégorie la plus appropriée pour chaque compte, en s'appuyant sur une formation approfondie sur des dizaines de milliers de comptes.

Chaque catégorie de compte se compose de jusqu'à cinq niveaux, avec le niveau le plus pertinent renseigné pour chaque compte.

<details>
  <summary>Catégories de comptes prises en charge</summary>

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=340133827&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "450px" }}
/>

</details>

#### Recatégorisation des comptes

Vous pouvez aider à améliorer les suggestions fournies par notre modèle en les confirmant ou en fournissant une catégorie plus applicable. Consultez toutes les catégories disponibles proposées pour les comptes et, le cas échéant, recatégorisez-les dans le [Portail Codat](https://app.codat.io/).

<details>
  <summary>Recatégorisation des comptes dans le Portail</summary>

1. Accédez à **Companies**, puis cliquez sur l'entreprise qui nécessite une recatégorisation. Sélectionnez **Lending** dans le menu latéral et choisissez **Categorize accounts** pour visualiser les catégories de chaque compte.

Celles-ci sont classées par _impact_ par défaut, qui est déterminé par le solde actuel du compte et notre confiance dans notre catégorisation automatique.

![Une image de la vue de catégorisation Lending dans le Portail](/img/lending/acct-categorization-v3-2.png)

2. Pour changer la catégorie d'un compte, sélectionnez les comptes à l'aide de la case à cocher et cliquez sur **Recategorize**.

   Choisissez une catégorie appropriée parmi les cinq niveaux proposés et cliquez sur **Recategorize**. Cela enregistre la catégorie nouvellement attribuée.

![Une image de la vue de catégorisation Lending dans le Portail avec un compte en cours de recatégorisation](/img/lending/acct-categorization-v3-3.png)

C'est tout ! Les états financiers retourneront la catégorie mise à jour pour les comptes à l'avenir.

</details>

## Sorties prises en charge

Vous pouvez récupérer les données lues et enrichies par cette fonctionnalité en [téléchargeant un rapport au format Excel](/lending/features/excel-download-overview) ou en appelant les [endpoints de notre API](/lending-api#/operations/get-categorized-profit-and-loss-statement) des **états financiers**.

Par exemple, le ratio d'endettement d'une entreprise peut être calculé à l'aide des données renvoyées par l'endpoint [Get categorized balance sheet statement](/lending-api#/operations/get-categorized-balance-sheet-statement). Consultez notre [application de démonstration de qualification de prêt](https://github.com/codatio/demo-loan-qualification/tree/main#demo-loan-qualification) écrite en C# pour apprendre à calculer d'autres ratios.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
type Account {
  category: string;
  balance: number;
}

const now = new Date();
// Convert date to dd-mm-yyyy format
let formattedDate = `${now.getUTCDate().toString().padStart(2, '0')}-`;
formattedDate += `${(now.getUTCMonth() + 1).toString().padStart(2, '0')}-`;
formattedDate += `${now.getUTCFullYear()}`;

// Last 12 months is returned by default
const reportResponse = await lendingClient.financialStatements.balanceSheet.getCategorizedAccounts({
    companyId: companyId,
    reportDate: formattedDate,
  });

if (reportResponse.statusCode != 200) {
  throw new Error("Could not get categorized balance sheet accounts")
}

const accounts: Account[] = reportResponse.enhancedFinancialReport.reportItems.map(x => ({
  category: x.accountCategory.levels.map(y => y.levelName).join('.'),
  balance: x.balance
}));

// Calculate gearing ratio
const totalAssets = accounts.filter(x => x.category.startsWith('Asset'))
  .reduce((sum, current) => sum + current.balance, 0)

const totalDebts = accounts.filter(x => x.category.startsWith('Liability.NonCurrent.LoansPayable'))
  .reduce((sum, current) => sum + current.balance, 0)

const gearingRatio = totalDebts / totalAssets
console.log(gearingRatio)
```

</TabItem>

<TabItem value="python" label="Python">

```python
@dataclass
class Account:
  category: str
  amount: Decimal

# Convert date to dd-mm-yyyy format
formatted_date = datetime.utcnow().strftime("%d-%m-%Y")

# Last 12 months is returned by default
report_request = operations.GetCategorizedBalanceSheetStatementRequest(
    company_id=company_id,
    report_date=formatted_date,
)

report_response = lending_client.financial_statements.balance_sheet.get_categorized_accounts(report_request)

if report_response.status_code != 200:
  raise Exception('Could not get categorized balance sheet accounts')

accounts = []
for x in report_response.enhanced_financial_report.report_items:
  accounts.append(Account(category='.'.join([y.level_name for y in x.transaction_category.levels]), balance=x.balance))

total_assets = sum(account.amount for accounts in accounts if account.category.startswith('Asset'))
total_debts = sum(account.amount for accounts in accounts if account.category.startswith('Liability.NonCurrent.LoansPayable'))

gearing_ratio = total_debts / total_assets
print(gearing_ratio)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
public record Account(string Category, decimal Balance);

// Convert date to dd-mm-yyyy format
var formattedDate = DateTime.UtcNow.ToString("dd-MM-yyyy");

// Last 12 months is returned by default
var reportResponse = await lendingClient.FinancialStatements.BalanceSheet.GetCategorizedAccountsAsync(new() {
    CompanyId = companyId,
    ReportDate = formattedDate,
});

if (reportResponse.StatusCode != 200) {
  throw new Exception("Could not get categorized balance sheet accounts");
}

var accounts = reportResponse.EnhancedFinancialReport.ReportItems.Select(x => new Account(){
  Category = string.Join(".", x.AccountCategory.Levels.Select(y => y.LevelName)),
  Balance = x.Balance
});

// Calculate gearing ratio
var totalAssets = accounts.Sum(x => x.Category.StartsWith("Asset"));
var totalDebts = accounts.Sum(x => x.Category.StartsWith("Liability.NonCurrent.LoansPayable"));

var gearingRatio = totalDebts / totalAssets;
Console.WriteLine(gearingRatio);
```

</TabItem>

<TabItem value="go" label="Go">

```go
type Account struct {
  Category string
  Balance float64
}

// Convert date to dd-mm-yyyy format
now := time.Now().UTC()
formattedDate := now.Format("28-11-2023")

ctx := context.Background()
reportResponse, err := lendingClient.FinancialStatements.BalanceSheet.GetCategorizedAccounts(ctx,
  operations.GetCategorizedBalanceSheetStatementRequest{
    CompanyID: companyID,
    ReportDate: formattedDate,
})

if err == nil && reportResponse.StatusCode == 200 {
  accounts := []Account{}

  for _, account := range reportResponse.EnhancedFinancialReport.ReportItems {
    levelNames := []string{}
    for _, level := range account.AccountCategory.Levels {
      levelNames = append(levelNames, level.LevelName)
    }
    category := strings.Join(levelNames, ".")
    balance, _ := transaction.Amount.Float64()
		accounts = append(accounts, Account{category, balance})
	}

  totalAssets := 0.0
  totalDebts := 0.0
  for _, account := range accounts {
    if strings.HasPrefix(account.Category, "Assets") {
      totalAssets += transaction.Balance
    }

    if strings.HasPrefix(account.Category, "Liability.NonCurrent.LoansPayable") {
      totalDebts += transaction.Balance
    }
  }

  gearingRatio := totalDebts / totalAssets

  fmt.Println(gearingRatio)
}
```

</TabItem>

</Tabs>

## Commencer

Une fois que vous avez activé la solution Lending, configurez votre instance pour travailler avec notre fonctionnalité d'états financiers.

#### Configurer les sources de données

Suivez les guides respectifs pour configurer et activer les intégrations comptables qui serviront de source de données pour la fonctionnalité :

<IntegrationsList integrations={accountingIntegrations} />

#### Activer les types de données et la planification de synchronisation

Découvrez comment [activer les types de données](/core-concepts/data-type-settings#override-the-default-sync-settings) et assurez-vous que les types de données suivants ont été activés :

- Proft and loss `profitAndLoss`
- Balance sheet `balanceSheet`
- Cash flow statement `cashFlowStatement`
- Chart of accounts `chartOfAccounts`

Configurez la solution pour actualiser les données quand vous en avez besoin en [définissant une fréquence de synchronisation](/core-concepts/data-type-settings#choose-a-synchronization-frequency). Nous recommandons de la définir sur une synchronisation quotidienne ou mensuelle.

#### Configurer les webhooks

Nous vous recommandons de [configurer des consommateurs de webhook](/using-the-api/webhooks/create-consumer) avec les [types d'événements](/using-the-api/webhooks/event-types) suivants pour gérer vos pipelines de données. Ces webhooks envoient un message pour chaque `dataType` séparément.

- [`DataSyncStatusChangedToError`](/using-the-api/webhooks/event-types)

  Cela signifie qu'un problème est survenu lors de la synchronisation du type de données spécifié. Résolvez le problème et [lancez la synchronisation](/using-the-api/queueing-data-syncs#refresh-data) pour cet ensemble de données à nouveau.

- [`DatasetDataChanged`](/using-the-api/webhooks/event-types)

  Cela signifie que les données ont été mises à jour pour le type de données spécifié. Cela peut inclure des données nouvelles, mises à jour ou supprimées. Vous devriez alors actualiser les données dans votre plateforme.

- [`AccountCategoriesUpdated`](/using-the-api/webhooks/event-types)

  Cela signifie que les catégories associées aux comptes ont été mises à jour pour les composants [état de résultat catégorisé](https://docs.codat.io/lending-api#/operations/get-enhanced-profit-and-loss-accounts) et [bilan catégorisé](https://docs.codat.io/lending-api#/operations/get-enhanced-balance-sheet-accounts).

  Cette mise à jour peut être effectuée automatiquement par Codat en mettant à jour les catégories `suggested`, ou manuellement par un utilisateur en mettant à jour les catégories `confirmed`.

---

## À lire ensuite

- [Passifs](/lending/features/liabilities-overview)
