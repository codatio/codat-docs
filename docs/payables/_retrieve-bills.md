import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Call our <a href={props.listendpoint} target="_blank">List bills</a> endpoint to retrieve the full list of a company's existing bills. 

You can also <a href={props.downloadendpoint} target="_blank">Download bill attachments</a> associated with a given bill, such as a PDF copy of the accounts payable invoice issued by the supplier.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const billsResponse = await payablesClient.bills.list({
    companyId: companyId,
    query: 'supplierRef.supplierName=acme'
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