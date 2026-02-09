import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Appelez notre point de terminaison <a href={props.listendpoint} target="_blank">Lister les factures</a> pour récupérer la liste complète des factures existantes d'une entreprise.

Vous pouvez également <a href={props.downloadendpoint} target="_blank">Télécharger les pièces jointes des factures</a> associées à une facture donnée, comme une copie PDF de la facture de comptes fournisseurs émise par le fournisseur.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const billsResponse = await payablesClient.bills.list({
  companyId: companyId,
  query: "supplierRef.supplierName=acme",
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
bills_request = operations.ListBillsRequest(
    company_id=company_id,
    query='supplierRef.supplierName=acme'
)

bills_response = payables_client.bills.list(bills_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var billsResponse = await payablesClient.Bills.ListAsync(new ListBillsRequest() {
    CompanyId = companyId,
    Query = "supplierRef.supplierName=acme"
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billsResponse, err := payablesClient.Bills.List(ctx, operations.ListBillsRequest{
    CompanyID: companyID,
    Query: "supplierRef.supplierName=acme"
})
```

</TabItem>

</Tabs>
