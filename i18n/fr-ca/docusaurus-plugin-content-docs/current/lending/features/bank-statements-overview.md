---
title: "Aperçu des relevés bancaires"
description: "Souscrire avec des flux de trésorerie précis et en temps réel enrichis de catégories détaillées de dépenses et de revenus"
displayed_sidebar: "lending"
image: "/img/banners/social/lending.png"
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import { bankingIntegrations } from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Notre fonctionnalité de **relevés bancaires** fournit des données provenant des connexions bancaires d'une entreprise liée. Les transactions sont enrichies d'informations sur les catégories financières et les fournisseurs de paiement.

## Cas d'utilisation

Les utilisations courantes de notre fonctionnalité de relevés bancaires incluent :

1. **Évaluation de la liquidité :** déterminer la capacité de l'emprunteur à couvrir les dépenses à court terme et les obligations financières.

2. **Évaluation des obligations financières :** évaluer la capacité de l'emprunteur à respecter les paiements de la dette et autres engagements financiers.

3. **Analyse des tendances des flux de trésorerie :** identifier les modèles et les fluctuations dans les flux de trésorerie de l'emprunteur pour prédire leur santé financière future.

4. **Analyse des revenus :** identifier tous les canaux de revenus d'une entreprise en utilisant l'enrichissement du fournisseur de paiement.

## Composants de la fonctionnalité

Notre fonctionnalité bancaire se compose des composants suivants, pris en charge sur un certain nombre de sources de données bancaires.

1. **[Accounts:](/lending-api#/operations/list-banking-accounts)** informations détaillées sur les comptes bancaires d'une entreprise, y compris les soldes, les numéros de compte et les institutions détenant les comptes

2. **[Transactions:](/lending-api#/operations/list-banking-transactions)** transactions engagées par le compte bancaire

3. **[Account balances:](/lending-api#/operations/list-banking-account-balances)** soldes d'un compte bancaire, y compris le solde de fin de journée ou les soldes courants par transaction

4. **[Categorized bank statements:](/lending-api#/operations/get-categorized-bank-statement)** tous les comptes bancaires connectés et les transactions avec enrichissements dans un seul endpoint.

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=1760315404&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "200px" }}
/>

## Enrichissements de la fonctionnalité

Nous fournissons les enrichissements suivants via notre composant [categorized bank statement](/lending-api#/operations/get-categorized-bank-statement).

#### Catégories de transactions

Les transactions bancaires manquent de contexte utile pour la souscription. Nous avons résolu ce problème en enrichissant les transactions bancaires avec les mêmes catégories financières que vous trouvez dans un état des résultats (compte de résultat) et un bilan. Les prêteurs peuvent reconstruire un compte de résultat basé sur la trésorerie en utilisant les données bancaires. Cela leur donne une vue claire et fiable de la capacité de remboursement de l'emprunteur.

<details>
  <summary>Voir les catégories de transactions prises en charge</summary>

  <iframe
    src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=340133827&amp;single=true&amp;widget=true&amp;headers=false"
    frameborder="0"
    className="googleSheets"
    style={{ height: "660px" }}
  />
</details>

#### Fournisseur de paiement

Les entreprises vendent souvent sur plusieurs canaux, par exemple, en magasin physique, en ligne ou sur une marketplace. Nous aidons les prêteurs à identifier le revenu total d'une entreprise en identifiant les fournisseurs de paiement dans leurs transactions bancaires.

<details>
  <summary>Voir les fournisseurs de paiement pris en charge</summary>

 <iframe
   src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=88475193&amp;single=true&amp;widget=true&amp;headers=false"
   frameborder="0"
   className="googleSheets"
   style={{ height: "660px" }}
 />
</details>

## Sorties prises en charge

Vous pouvez récupérer les données lues et enrichies par la fonctionnalité en [téléchargeant un rapport au format Excel](/lending/features/excel-download-overview) ou en appelant les [endpoints de notre API](/lending-api#/operations/get-categorized-bank-statement) pour les **relevés bancaires**.

Par exemple, utilisez l'endpoint [Get categorized bank statement](/lending-api#/operations/get-categorized-bank-statement) pour calculer avec précision la position actuelle des prêts en cours de l'entreprise.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
type Transaction {
  category: string;
  amount: number;
}

const statementResponse = await lendingClient.banking.categorizedStatement.get({
    companyId: companyId
});

if (statementResponse.statusCode != 200) {
  throw new Error("Could not get categorized bank statement")
}

const transactions: Transaction[] = statementResponse.enhancedCashFlowTransactions.reportItems.transactions.map(x => ({
  category: x.transactionCategory.levels.join('.'),
  amount: x.amount
}));

const loansPayable = transactions.filter(x => x.category
  .startsWith('Liability.Current.Debt.LoansPayable'))
  .reduce((sum, current) => sum + current.amount, 0);
```

</TabItem>

<TabItem value="python" label="Python">

```python
@dataclass
class Transaction:
  category: str
  amount: Decimal

statement_request = operations.GetCategorizedBankStatementRequest(
    company_id=company_id,
)

statement_response = lending_client.banking.categorized_statement.get(statement_request)

if statement_response.status_code != 200:
  raise Exception('Could not get categorized bank statement')

transactions = []
for x in statement_response.enhanced_cash_flow_transactions.report_items.transactions:
  transactions.append(Transaction(category='.'.join(x.transaction_category.levels), amount=x.amount))

loans_payable = sum(transaction.amount for transaction in transactions \
    if transaction.category.startswith('Liability.Current.Debt.LoansPayable'))
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
public record Transaction(string Category, decimal Amount);

var statementResponse = await lendingClient.Banking.CategorizedStatement.GetAsync(new() {
    CompanyId = companyId
});

if (statementResponse.StatusCode != 200) {
  throw new Exception("Could not get categorized bank statement");
}

var transactions = statementResponse.EnhancedCashFlowTransactions.ReportItems.Transactions
  .Select(x => new Transaction(){
    Category = string.Join(".", x.TransactionCategory.Levels),
    Amount = x.Amount
  });

var loansPayable = transactions.Sum(x =>
  x.category.startsWith('Liability.Current.Debt.LoansPayable'));
```

</TabItem>

<TabItem value="go" label="Go">

```go
type Transaction struct {
  Category string
  Amount float64
}

ctx := context.Background()
statementResponse, err := lendingClient.Banking.CategorizedStatement.Get(ctx, operations.GetCategorizedBankStatementRequest{
    CompanyID: companyID,
})

if err == nil && statementResponse.StatusCode == 200 {
  transactions := []Transaction{}

  for _, transaction := range statementResponse.EnhancedCashFlowTransactions.ReportItems.Transactions {
    category := strings.Join(transaction.TransactionCategory.Levels, ".")
    amount, _ := transaction.Amount.Float64()
		transactions = append(transactions, Transaction{category, amount})
	}

  loansPayable := 0.0
  for _, transaction := range transactions {
    if strings.HasPrefix(transaction.Category, "Liability.Current.Debt.LoansPayable") {
      loansPayable += transaction.Amount
    }
  }

  fmt.Println(loansPayable)
}
```

</TabItem>

</Tabs>

## Pour commencer

Une fois la solution Lending activée, configurez votre instance pour fonctionner avec notre fonctionnalité de relevés bancaires.

#### Configurer les sources de données

Suivez les guides respectifs pour configurer et activer les intégrations bancaires qui serviront de source de données :

<IntegrationsList integrations={bankingIntegrations} />

:::tip Vous avez déjà une intégration bancaire ?

Si vous avez une intégration bancaire existante, vous pouvez utiliser notre fonctionnalité de [téléchargement de données](/lending/functions/data-upload) pour télécharger manuellement des enregistrements qui seront utilisés comme source pour la catégorisation des relevés bancaires.

:::

#### Activer les types de données et le calendrier de synchronisation

Consultez comment [activer les types de données](/core-concepts/data-type-settings#override-the-default-sync-settings) et assurez-vous que les types de données suivants ont été activés :

- Accounts `banking-accounts`
- Transactions `banking-transactions`
- Account balances `banking-accountBalances`

Configurez la solution pour actualiser les données lorsque vous en avez besoin en [définissant une fréquence de synchronisation](/core-concepts/data-type-settings#choose-a-synchronization-frequency). Nous recommandons de définir une synchronisation quotidienne ou mensuelle.

#### Configurer les webhooks

Nous vous recommandons de [configurer des consommateurs de webhooks](/using-the-api/webhooks/create-consumer) avec les [types d'événements](/using-the-api/webhooks/event-types) suivants pour gérer vos pipelines de données. Ces webhooks envoient un message pour chaque `dataType` séparément.

- [Dataset status has changed to an error state](/using-the-api/webhooks/event-types)

  Cela signifie qu'un problème s'est produit lors de la synchronisation du type de données spécifié. Résolvez le problème et [lancez la synchronisation](/using-the-api/queueing-data-syncs#refresh-data) pour cet ensemble de données à nouveau.

- [Dataset data changed](/using-the-api/webhooks/event-types)

  Cela signifie que les données ont été mises à jour pour le type de données spécifié. Cela peut inclure des données nouvelles, mises à jour ou supprimées. Vous devez alors actualiser les données dans votre plateforme.

---

## À lire ensuite

- [Sales](/lending/features/sales-overview)
