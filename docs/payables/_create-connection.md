import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Create a connection

Next, use the <a href={props.endpointlink} target="_blank">Create connection</a> endpoint to connect the company to an accounting data source via one of our integrations. This will allow you to synchronize data with that source, fetching or creating suppliers, bills, and payment methods. In the request body, specify a `platformKey` of the accounting software you're looking to connect.

As an example, let's create a QuickBooks Online (QBO) connection. In response, the endpoint returns a `dataConnection` object with a `PendingAuth` status and a `linkUrl`. Direct your customer to the `linkUrl` to initiate our [Link auth flow](/auth-flow/overview) and enable them to authorize this connection.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const connectionResponse = payablesClient.connections.create({
  requestBody: {
    platformKey: "qhyg",
  },
  companyId: companyResponse.company.id,
});

console.log(connectionResponse.connection.linkUrl);
```

</TabItem>

<TabItem value="python" label="Python">

```python
connection_request = operations.CreateConnectionRequest(
    request_body=operations.CreateConnectionRequestBody(
        platform_key='qhyg',
    ),
    company_id=company_response.company.id,
)

connection_response = payables_client.connections.create(connection_request)

console.log(connection_response.connection.link_url)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var connectionResponse = await payablesClient.Connections.CreateAsync(new() {
    RequestBody = new CreateConnectionRequestBody() {
        PlatformKey = "qhyg",
    },
    CompanyId = companyResponse.Company.Id,
});

Console.WriteLine(connectionResponse.Connection.LinkUrl)
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
connectionResponse, err := payablesClient.Connections.Create(ctx, operations.CreateConnectionRequest{
    RequestBody: &operations.CreateConnectionRequestBody{
        PlatformKey: syncforpayables.String("qhyg"),
    },
    CompanyID: companyResponse.Company.ID,
})

fmt.Println(connectionResponse.Connection.LinkUrl)
```

</TabItem>

</Tabs>
