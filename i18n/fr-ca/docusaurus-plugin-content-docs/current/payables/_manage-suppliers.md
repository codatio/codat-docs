import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Récupérer les fournisseurs

Appelez notre point de terminaison <a href={props.listendpoint} target="_blank">Lister les fournisseurs</a> pour récupérer la liste complète des fournisseurs existants de votre client.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const suppliersResponse = await payablesClient.suppliers.list({
  companyId: companyId,
});

if (suppliersResponse.statusCode != 200) {
  throw new Error("Could not get current suppliers");
}

console.log(suppliersResponse.suppliers[0].supplierName);
```

</TabItem>

<TabItem value="python" label="Python">

```python
suppliers_request = operations.ListSuppliersRequest(
    company_id=company_id
)

suppliers_response = payables_client.suppliers.list(suppliers_request)

if suppliers_response.status_code != 200:
  raise Exception('Could not get current suppliers')

print(suppliers_response.suppliers[0].supplier_name)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp

var suppliersResponse = await payablesClient.Suppliers.ListAsync(new() {
    CompanyId = companyId
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
suppliersResponse, err := payablesClient.Suppliers.List(ctx,
  operations.ListSuppliersRequest{
    CompanyID: companyID
})

if suppliersResponse.StatusCode == 200 {
  fmt.Println(suppliersResponse.Suppliers[0].SupplierName)
}
```

</TabItem>

</Tabs>

:::tip Soldes des fournisseurs

Bill Pay n'expose pas les soldes des fournisseurs sur les points de terminaison des fournisseurs. À la place, vous pouvez agréger les factures par fournisseur.

:::

## Créer un fournisseur

Lorsque l'entreprise de votre client fait affaire avec un nouveau fournisseur pour la première fois, vous devrez créer un fournisseur avant de créer une facture pour ce fournisseur. Utilisez le point de terminaison <a href={props.createendpoint} target="_blank">Créer un fournisseur</a> pour ce faire.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const supplierCreateResponse = await payablesClient.suppliers.create({
  supplier: {
    supplierName: "Kelly's Industrial Supplies",
    contactName: "Kelly's Industrial Supplies",
    emailAddress: "sales@kellysupplies.com",
    status: SupplierStatus.Active,
  },
  companyId: companyId,
  connectionId: connectionId,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
supplier_create_request = operations.CreateSupplierRequest(
    supplier=shared.Supplier(
        supplier_name="Kelly's Industrial Supplies",
        contact_name="Kelly's Industrial Supplies",
        status=shared.SupplierStatus.ACTIVE,
    ),
    company_id=company_id,
    connection_id=connection_id,
)

supplier_create_response = payables_client.suppliers.create(req)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var supplierCreateResponse = await payablesClient.Suppliers.CreateAsync(new() {
    Supplier = new Supplier() {
        SupplierName = "Kelly's Industrial Supplies",
        ContactName = "Kelly's Industrial Supplies",
        Status = SupplierStatus.Active,
    },
    CompanyId = companyId,
    ConnectionId = connectionId,
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
        Status: shared.SupplierStatusActive,
    },
    CompanyID: companyID,
    ConnectionID: connectionID,
})
```

</TabItem>

</Tabs>
