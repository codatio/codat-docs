import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Deauthorize a connection

If your customer wants to revoke their approval and sever the connection to their accounting software, use the <a href={props.endpointlink} target="_blank">Unlink connection</a> endpoint.

You can [learn more](/auth-flow/optimize/connection-management) about connection management best practices and see how you can provide this functionality in your app's UI.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const unlinkResponse = payablesClient.connections.unlink({
    requestBody: {
      status: DataConnectionStatus.Unlinked
    },
    companyId: companyResponse.company.id,
    connectionId: connectionResponse.connection.id,
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
unlink_request = operations.UnlinkConnectionRequest(
    request_body=operations.UnlinkConnectionUpdateConnection(
      status=shared.DataConnectionStatus.UNLINKED
    ),
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id,
)

unlink_response = payables_client.connections.unlink(unlink_request)

```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var unlinkResponse = await payablesClient.Connections.UnlinkAsync(new() {
    RequestBody = new UnlinkConnectionUpdateConnection() {
      Status = DataConnectionStatus.Unlinked
    },
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
unlinkResponse, err := payablesClient.Connections.Unlink(ctx, operations.UnlinkConnectionRequest{
    RequestBody: &operations.UnlinkConnectionUpdateConnection{
      Status: shared.DataConnectionStatusUnlinked
    },
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID,
})
```
</TabItem>

</Tabs>