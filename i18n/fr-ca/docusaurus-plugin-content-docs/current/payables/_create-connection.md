import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Créer une connexion

Ensuite, utilisez le point de terminaison <a href={props.endpointlink} target="_blank">Créer une connexion</a> pour connecter l'entreprise à une source de données comptables via l'une de nos intégrations. Cela vous permettra de synchroniser les données avec cette source, en récupérant ou en créant des fournisseurs, des factures et des méthodes de paiement. Dans le corps de la requête, spécifiez un `platformKey` du logiciel comptable auquel vous souhaitez vous connecter.

Par exemple, créons une connexion QuickBooks Online (QBO). En réponse, le point de terminaison retourne un objet `dataConnection` avec un statut `PendingAuth` et un `linkUrl`. Dirigez votre client vers le `linkUrl` pour initier notre [flux d'authentification Link](/auth-flow/overview) et lui permettre d'autoriser cette connexion.

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

print(connection_response.connection.link_url)
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
