---
title: Manage suppliers
description: "View, create, and update suppliers using Sync for Payables"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

In accounts payable, each bill is associated with a [supplier](/sync-for-payables-api#/schemas/Supplier). The supplier represents a business or a sole trader that provides goods or services to your SMB customer. 

Their records also contain key information, such as contact details, that can be used to notify the supplier once a payment is made.

To pay a bill in Sync for Payables, you can use your customer's existing supplier or create a new one. We have highlighted this alternative sequence of steps in our detailed process diagram below. 

<details>
<summary><b>Detailed process diagram</b></summary>

```mermaid

  sequenceDiagram
      participant smb as SMB customer
      participant app as Your application 
      participant codat as Codat
      participant acctg as Accounting platform
      
      alt Retrieve suppliers
        app ->> codat: Requests details of existing suppliers
        codat ->> acctg: Fetches suppliers
        acctg -->> codat: Returns suppliers
        codat ->> app: Returns suppliers
        app ->> smb: Displays suppliers
        smb ->> app: Selects supplier
      else Create supplier
        smb ->> app: Provides supplier details
        app ->> codat: Creates supplier
        codat ->> acctg: Creates supplier record
      end
```

</details>

## Retrieve supplier

Call our [List suppliers](/sync-for-payables-api#/operations/list-suppliers) endpoint to retrieve the full list of your customer's existing suppliers. You can also use [query parameters](/using-the-api/querying) to narrow down the list of results, for example:

- `status=Active` returns only active suppliers.
- `defaultCurrency=USD` returns suppliers that provide goods or services in dollars.
- `supplierName=Acme` returns suppliers with a name that matches the query.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const suppliersResponse = await payablesClient.suppliers.list({
    companyId: companyId,
    query: 'status=Active&&defaultCurrency=USD'
  });

if(suppliersResponse.statusCode != 200){
  throw new Error("Could not get current suppliers")
}

console.log(suppliersResponse.suppliers[0].supplierName)
```

</TabItem>

<TabItem value="python" label="Python">

```python
suppliers_request = operations.ListSuppliersRequest(
    company_id=company_id,
    query='status=Active&&defaultCurrency=USD'
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
    CompanyId = companyId,
    Query = "status=Active&&defaultCurrency=USD"
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
    CompanyID: companyID,
    Query: "status=Active&&defaultCurrency=USD",
})

if suppliersResponse.StatusCode == 200 {
  fmt.Println(suppliersResponse.Suppliers[0].SupplierName)
}
```

</TabItem>

</Tabs>

:::tip Supplier balances

Sync for Payables does not expose supplier balances on the supplier endpoints. Instead, you can:
- Aggregate bills by supplier
- Use the [Aged debtors](/sync-for-payables-api#/operations/get-aged-debtors-report) report
:::

## Create supplier

When your customer's company does business with a new supplier for the first time, you will need to create a supplier before creating a bill against that supplier. Use the [Create supplier](/sync-for-payables-api#/operations/create-supplier) endpoint to do that.

<Tabs>

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

### Update supplier

If your customer's existing supplier changes address or business name, you can reflect this change in their accounting software using the [Update supplier](/sync-for-payables-api#/operations/put-supplier) endpoint.

<Tabs>

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

:::tip Recap

You have learnt how to view, create, and update your customer's suppliers who provide them with goods and services. 

Next, you can choose to manage your supplier's bills or payment methods prior to paying those bills.

:::

---
### Read next

* [Manage your customer's bills](/payables/bills)
* [Manage your customer's payment methods](/payables/mapping)