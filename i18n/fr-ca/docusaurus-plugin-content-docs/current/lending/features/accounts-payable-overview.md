---
title: "Aperçu des comptes créditeurs"
sidebar_label: "Comptes créditeurs"
description: "Obtenez une vue détaillée et en temps réel des factures fournisseurs de vos clients pour évaluer le risque créancier"
image: "/fr-ca/img/banners/social/lending.png"
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import { accountingIntegrations } from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Notre fonctionnalité **comptes créditeurs** offre une ventilation complète du grand livre des créanciers d'un emprunteur provenant de son logiciel comptable. Vous pouvez examiner le grand livre dans son intégralité ou approfondir des historiques de fournisseurs spécifiques, permettant une automatisation complète du processus de financement des créances.

## Cas d'utilisation

Les utilisations courantes de notre fonctionnalité de comptes créditeurs incluent :

- **Collecte de données numériques:** obtenez un flux continu de factures fournisseurs.

- **Analyse du risque fournisseur:** obtenez des informations sur la relation de l'emprunteur avec le fournisseur, y compris un historique complet des factures, du comportement de paiement et des remises accordées sur les factures précédentes.

## Composants de la fonctionnalité

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=1075181493&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "300px" }}
/>

## Sorties prises en charge

Vous pouvez récupérer les données lues et enrichies par la fonctionnalité en [téléchargeant un rapport au format Excel](/lending/features/excel-download-overview) ou en appelant les [endpoints de l'API](/lending-api#/operations/list-accounting-bill-credit-notes) **comptes créditeurs**.

Par exemple, utilisez l'endpoint [Lister les fournisseurs](/lending-api#/operations/list-accounting-suppliers) pour accéder aux fournisseurs actuels de l'entreprise pour une évaluation plus approfondie.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const suppliersResponse = await lendingClient.accountsPayable.suppliers.list({
  companyId: companyId,
  query: "status=Active",
});

if (suppliersResponse.statusCode != 200) {
  throw new Error("Could not get current suppliers");
}

console.log(suppliersResponse.suppliers[0].supplierName);
```

</TabItem>

<TabItem value="python" label="Python">

```python
suppliers_request = operations.ListAccountingSuppliersRequest(
    company_id=company_id,
    query='status=Active'
)

suppliers_response = lending_client.accounts_payable.suppliers.list(suppliers_request)

if suppliers_response.status_code != 200:
  raise Exception('Could not get current suppliers')

print(suppliers_response.suppliers[0].supplier_name)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp

var suppliersResponse = await lendingClient.AccountsPayable.Suppliers.ListAsync(new() {
    CompanyId = companyId,
    Query = "status=Active"
});

if(suppliersResponse.StatusCode != 200){
  throw new Exception("Could not get current suppliers");
}

Console.WriteLine(suppliersResponse.Suppliers[0].SupplierName);
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
suppliersResponse, err := lendingClient.AccountsPayable.Suppliers.List(ctx,
  operations.ListAccountingSuppliersRequest{
    CompanyID: companyID,
    Query: "status=Active",
})

if suppliersResponse.StatusCode == 200 {
  fmt.Println(suppliersResponse.Suppliers[0].SupplierName)
}
```

</TabItem>

</Tabs>

## Commencer

Une fois que vous avez activé la solution Lending, configurez votre instance pour qu'elle fonctionne avec notre fonctionnalité de comptes créditeurs.

#### Configurer les sources de données

Suivez les guides respectifs pour configurer et activer les intégrations comptables qui serviront de source de données pour la fonctionnalité :

<IntegrationsList integrations={accountingIntegrations} />

#### Activer les types de données et le calendrier de synchronisation

Voir comment [activer les types de données](/core-concepts/data-type-settings#override-the-default-sync-settings) et assurez-vous que les types de données suivants ont été activés :

- Suppliers `suppliers`
- Bills `bills`
- Bill payments `billPayments`
- Bill credit notes `billCreditNotes`

Configurez la solution pour actualiser les données lorsque vous en avez besoin en [définissant une fréquence de synchronisation](/core-concepts/data-type-settings#choose-a-synchronization-frequency). Nous recommandons de définir une synchronisation quotidienne ou mensuelle.

#### Configurer les webhooks

Nous recommandons de [configurer des consommateurs de webhook](/using-the-api/webhooks/create-consumer) avec les [types d'événements](/using-the-api/webhooks/event-types) suivants pour gérer vos pipelines de données. Ces webhooks envoient un message pour chaque `dataType` séparément.

- [Le statut du jeu de données a changé pour un état d'erreur](/using-the-api/webhooks/event-types)

  Cela signifie qu'un problème s'est produit lors de la synchronisation du type de données spécifié. Résolvez le problème et [lancez la synchronisation](/using-the-api/queueing-data-syncs#refresh-data) pour ce jeu de données à nouveau.

- [Les données du jeu de données ont changé](/using-the-api/webhooks/event-types)

  Cela signifie que les données ont été mises à jour pour le type de données spécifié. Cela peut inclure des données nouvelles, mises à jour ou supprimées. Vous devriez alors actualiser les données dans votre plateforme.

---

## Lire ensuite

- [Informations sur l'entreprise](/lending/features/company-info-overview)
