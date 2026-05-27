import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Retrieve supplier

Call our <a href={props.listendpoint} target="_blank">List suppliers</a> endpoint to retrieve the full list of your customer's existing suppliers.

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

:::tip Supplier balances

Bill Pay does not expose supplier balances on the supplier endpoints. Instead, you can aggregate bills by supplier.

:::

## Create supplier

When your customer's company does business with a new supplier for the first time, you will need to create a supplier before creating a bill against that supplier. Use the <a href={props.createendpoint} target="_blank">Create supplier</a> endpoint to do that.

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
