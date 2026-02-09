---
title: Gérer les fournisseurs
description: "Afficher, créer et mettre à jour les fournisseurs avec Bill Pay"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ManageSuppliers from "../_manage-suppliers.md";

## Aperçu

Dans les comptes fournisseurs, chaque facture est associée à un _fournisseur_. Le fournisseur représente une entreprise ou un travailleur autonome qui fournit des biens ou des services à votre client PME.

Leurs dossiers contiennent également des informations clés, telles que les coordonnées, qui peuvent être utilisées pour notifier le fournisseur une fois qu'un paiement est effectué.

Pour payer une facture dans Bill Pay, vous pouvez utiliser les fournisseurs existants de votre client ou en créer un nouveau. Nous avons mis en évidence cette séquence alternative d'étapes dans notre diagramme de processus détaillé ci-dessous.

<details>
<summary><b>Diagramme de processus détaillé</b></summary>

```mermaid

  sequenceDiagram
      participant smb as Client PME
      participant app as Votre application
      participant codat as Codat
      participant acctg as Logiciel comptable

      alt Récupérer les fournisseurs lors de la première liaison ou d'une extraction planifiée
        codat ->> acctg: Récupère les fournisseurs
        acctg -->> codat: Retourne les fournisseurs
        app ->> codat: Demande les détails des fournisseurs existants
        codat ->> app: Fournit les détails des fournisseurs
        app ->> smb: Affiche les fournisseurs
        smb ->> app: Sélectionne un fournisseur
      else Créer un fournisseur
        smb ->> app: Fournit les détails du fournisseur
        app ->> codat: Crée le fournisseur
        codat ->> acctg: Crée l'enregistrement du fournisseur
      end
```

</details>

:::tip Affiner la liste des fournisseurs

Les points de terminaison des fournisseurs de la solution Bill Pay asynchrone fournissent des enregistrements de fournisseurs complets et non filtrés. Vous pouvez utiliser les [paramètres de requête](/using-the-api/querying) pour affiner la liste des résultats. Par exemple :

- `status=Active` retourne uniquement les fournisseurs actifs.
- `defaultCurrency=USD` retourne les fournisseurs qui fournissent des biens ou services en dollars.
- `supplierName=Acme` retourne les fournisseurs dont le nom correspond à la requête.
  :::

<ManageSuppliers
  listendpoint="/sync-for-payables-api#/operations/list-suppliers"
  createendpoint="/sync-for-payables-api#/operations/create-supplier"
/>

## Mettre à jour un fournisseur

Si le fournisseur existant de votre client change d'adresse ou de raison sociale, vous pouvez refléter ce changement dans son logiciel comptable en utilisant le point de terminaison <a href="/sync-for-payables-api#/operations/update-supplier" target="_blank">Mettre à jour le fournisseur</a>.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const supplierUpdateResponse = await payablesClient.suppliers.update({
    supplier: {
      supplierName: "Kelly's Industrial Supplies",
      contactName: "Kelly's Industrial Supplies",
      emailAddress: "sales@kellysupplies.com",
      phone: "(877) 492-8687"
      status: SupplierStatus.Active,
    },
    companyId: companyId,
    connectionId: connectionId,
    supplierId: supplierCreateResponse.supplier.id
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
supplier_update_request = operations.UpdateSupplierRequest(
    supplier=shared.Supplier(
        supplier_name="Kelly's Industrial Supplies",
        contact_name="Kelly's Industrial Supplies",
        phone="(877) 492-8687",
        status=shared.SupplierStatus.ACTIVE,
    ),
    company_id=company_id,
    connection_id=connection_id,
    supplier_id=supplier_create_response.supplier.id
)

supplier_update_response = payables_client.suppliers.update(supplier_update_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var supplierUpdateResponse = await payablesClient.Suppliers.UpdateAsync(new() {
    Supplier = new Supplier() {
        SupplierName = "Kelly's Industrial Supplies",
        ContactName = "Kelly's Industrial Supplies",
        Phone = "(877) 492-8687",
        Status = SupplierStatus.Active,
    },
    CompanyId = companyId,
    ConnectionId = connectionId,
    SupplierId = supplierCreateResponse.Supplier.Id
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
supplierCreateResponse, err := payablesClient.Suppliers.Create(ctx, operations.CreateSupplierRequest{
    Supplier: &shared.Supplier{
        SupplierName: syncforpayables.String("Kelly's Industrial Supplies"),
        ContactName: syncforpayables.String("Kelly's Industrial Supplies"),
        Phone = syncforpayables.String("(877) 492-8687"),
        Status: shared.SupplierStatusActive,
    },
    CompanyID: companyID,
    ConnectionID: connectionID,
    SupplierID = supplierCreateResponse.Supplier.ID
})
```

</TabItem>

</Tabs>

:::tip Récapitulatif

Vous avez appris comment afficher, créer et mettre à jour les fournisseurs de votre client qui leur fournissent des biens et des services.

Ensuite, vous pouvez choisir de gérer les factures de votre fournisseur ou les méthodes de paiement avant de régler ces factures.

:::

---

## À lire ensuite

- [Gérer les factures de votre client](/payables/async/bills)
- [Payer les factures de votre client](/payables/async/payments)
