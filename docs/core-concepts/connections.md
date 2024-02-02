---
title: "Connections"
description: "Concept overview and key details"
tags:
  - Core concept
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

A data connection represents a [company's](/core-concepts/companies) connection to a data source and allows you to synchronize data (pull and/or push) with that source.

A company can have multiple data connections depending on the type of data source it is connecting to. For example, a single company can link to:

- [Accounting data](/integrations/accounting/overview) - 1 active connection.
- [Banking data](/integrations/banking/overview) - Multiple active connections.
- [Commerce data](/integrations/commerce/overview) - Multiple active connections.

Any combination of accounting, banking, and commerce data connections is allowed.

Before you can use a data connection to pull or push data, the company must grant you access to their business data by [linking the connection](/auth-flow/overview).

## Connection status

Connections can have one of the statuses described in the following table.

| Status         | Definition                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Linked`        | The connection is linked to a data source; you can use it to pull and push a company's consented data to and from the underlying provider's platform.                                                                                                                                                                                                                                                        |
| `PendingAuth`    | The company hasn't authorized access to their financial platform (the data source). The SMB customer selected the platform in Link but did not complete the authorization flow.                                                                                                                                                                                                                              |
| `Deauthorized`   | The connection was linked but is no longer able to access data from the underlying provider's platform.<br/>You can access any data that was already pulled or pushed using this data connection. However, you can't perform any new pulls or pushes until the connection is re-linked.<br/>A data connection usually becomes Deauthorized if the company revoked your access or an expiry time was reached. |
| `Unlinked`       | The data connection was previously linked but you asked for your access to be revoked (see [Disconnect a data connection to revoke your access to a data source](/core-concepts/connections#disconnect-a-data-connection-to-revoke-your-access-to-a-data-source)).<br/>Similar to Deauthorized, you can still access any data that was already pulled or pushed using the data connection, but can't perform any new pulls or pushes unless the connection is re-linked.                                       |
| No connections | The company has been created but does not have any connections to financial platforms established in any of the above statuses. |

## Linked data connection example

Verify that a connection returns a Linked `status` using one of our [Connections](/platform-api#/operations/list-connections) endpoints. 

In the response, note the following fields:

- `sourceId` identifies the source of information, like a bank or accounting software; 
- `integrationId` identifies the Codat integration that supports the data source.

```json title="GET /companies/{companyId}/connections"
{
  "id": "00000000-0000-0000-0000-000000000000",
  "integrationId": "18cb53c4-3807-4a5a-8da9-303053a40002",
  "sourceId": "58e1d32f-a092-438a-bffb-3bf6af9ba8ec",
  "platformName": "Sage 50 (UK & Ireland)",
  "linkUrl": "https://link.codat.io/companies/00000000-0000-0000-0000-000000000000/connections/00000000-0000-0000-0000-000000000000/start",
  "status": "Linked",
  "lastSync": "2022-01-01T12:00:00.0000000Z",
  "created": "2021-01-01T12:00:00Z",
  "sourceType": "Accounting"
}
```

## Disconnect a data connection to revoke your access to a data source

You can disconnect a data connection using the [Codat Portal](https://app.codat.io/). Navigate to **Companies**, choose the company you want to manage connections for, then select **Manage connections** and use the three-dot menu to unlink the connection. 

This revokes your access to synchronize data with the linked company and sets the data connection's status to `Unlinked`.

Alternatively, you can use our <a href="/platform-api#/operations/unlink-connection" target="_blank">Unlink connection</a> endpoint. To disconnect a data connection, you'll need to provide:

- The `companyId` of the linked company as a path parameter.
- The `connectionId` of the data connection to disconnect as a path parameter.
- A `status` of `Unlinked` in the request body.

When a connection is set to `Unlinked`, you can continue to access any data that was already pulled or pushed to the data source, but you can't perform any new pulls or pushes (unless the connection is re-linked).

:::note Unlinking data connections

Only `Linked` data connections can be unlinked.
:::

#### Example: Disconnect a data connection

<Tabs>

<TabItem value="curl" label="cURL">

```bash
curl --request PATCH \
      --url "https://api.codat.io/companies/{companyId}/connections/{connectionId}" \
      --header "Authorization: {codatAuthHeader}" \
      --header "accept: application/json" \
      --header "content-type: application/json" \
      --data '{
        "status": "Unlinked"
      }'
```

</TabItem>

<TabItem value="python" label="Python">

```python
import codatplatform
from codatplatform.models import operations, shared

codat_platform = codatplatform.CodatPlatform(
    security=shared.Security(
        auth_header='{codatAuthHeader}',
    ),
)

req = operations.UnlinkConnectionRequest(
    update_connection=shared.UpdateConnection(
        status=shared.DataConnectionStatus.UNLINKED,
    ),
    company_id='{companyId}',
    connection_id='{connectionId}',
)

res = codat_platform.connections.unlink(req)
```
</TabItem>

<TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatPlatform } from "@codat/platform";
import { UnlinkConnectionResponse } from "@codat/platform/dist/sdk/models/operations";
import { DataConnectionStatus } from "@codat/platform/dist/sdk/models/shared";

const codatPlatform = new CodatPlatform({
  security: {
    authHeader: "",
  },
});

codatPlatform.connections.unlink({
  updateConnection: {
    status: DataConnectionStatus.Unlinked,
  },
  companyId: "{companyId}",
  connectionId: "{connectionId}",
}).then((res: UnlinkConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
package main

import(
	"context"
	"log"
	"github.com/codatio/client-sdk-go/platform"
	"github.com/codatio/client-sdk-go/platform/pkg/models/shared"
	"github.com/codatio/client-sdk-go/platform/pkg/models/operations"
)

func main() {
    codatPlatform := codatplatform.New(
        codatplatform.WithSecurity(shared.Security{
            AuthHeader: "{codatAuthHeader}",
        }),
    )

    ctx := context.Background()
    res, err := codatPlatform.Connections.Unlink(ctx, operations.UnlinkConnectionRequest{
        UpdateConnection: &shared.UpdateConnection{
            Status: shared.DataConnectionStatusUnlinked.ToPointer(),
        },
        CompanyID: "{companyId}",
        ConnectionID: "{connectionId}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
using CodatPlatform;
using CodatPlatform.Models.Shared;
using CodatPlatform.Models.Operations;

var codatPlatform = new CodatPlatformSDK(
    security: new Security() {
        AuthHeader = "{codatAuthHeader}",
    }
);

var res = await codatPlatform.Connections.UnlinkAsync(new UnlinkConnectionRequest() {
    UpdateConnection = new UpdateConnection() {
        Status = DataConnectionStatus.Unlinked,
    },
    CompanyId = "{companyId}",
    ConnectionId = "{connectionId}",
});
```
</TabItem>

</Tabs>

#### Sample response to `Unlinked` request

```json Sample response to "Unlinked" request
{
  "id": "69c25cc8-e1cd-4b63-b43d-75da021df35d",
  "integrationId": "43b64770-a953-46d6-ab30-46c21094a276",
  "sourceId": "9a96f326-226a-4e0f-923a-6758fdba40cc",
  "platformName": "Stripe",
  "linkUrl": "https://link.codat.io/link/start/c9219b93-4eff-4806-99d8-ed3337b6ded2/69c25cc8-e1cd-4b63-b43d-75da021df35d",
  "status": "Unlinked",
  "lastSync": "2021-02-11T12:12:13.1988465Z",
  "created": "2021-02-11T12:04:53Z",
  "sourceType": "Commerce"
}
```

## Delete a data connection

You can delete a data connection using the [Codat Portal](https://app.codat.io/). Navigate to **Companies**, choose the company you want to manage connections for, then select **Manage connections** and use the three-dot menu to delete the connection.

Alternatively, you can send a request to the <a href="/platform-api#/operations/delete-connection" target="_blank">DELETE /connectionId endpoint</a> and provide the `companyId` and `connectionId` as path parameters.

<Tabs>
  <TabItem value="curl" label="cURL">

  ```bash
  curl --request DELETE \
        --url "https://api.codat.io/companies/{companyId}/connections/{connectionId}" \
        --header "Authorization: {codatAuthHeader}" \
  ```
  </TabItem>

  <TabItem value="python" label="Python">

  ```python

  import codatplatform
  from codatplatform.models import operations, shared

  codat_platform = codatplatform.CodatPlatform(
      security=shared.Security(
          auth_header="{codatAuthHeader}",
      ),
  )

  codat_platform.connections.delete(
    operations.DeleteConnectionRequest(
      company_id='{companyId}',
      connection_id='{connectionId}',
    )
  )

  if res.status_code == 200:
    print('Connection deleted successfully')
  ```
  </TabItem>

  <TabItem value="nodejs" label="TypeScript">

  ```javascript
  import { CodatPlatform } from "@codat/platform";
  import { DeleteConnectionResponse } from "@codat/platform/dist/sdk/models/operations";

  const codatPlatform = new CodatPlatform({
    security: {
      authHeader: "{codatAuthHeader}",
    },
  });

  codatPlatform.connections.delete({
    companyId: "{companyId}",
    connectionId: "{connectionId}",
  }).then((res: DeleteConnectionResponse) => {
    if (res.statusCode == 200) {
      console.log('Connection deleted successfully')
    }
  });
  ```
  </TabItem>

  <TabItem value="go" label="Go">

  ```go
  package main

  import(
    "context"
    "log"
    "github.com/codatio/client-sdk-go/platform"
    "github.com/codatio/client-sdk-go/platform/pkg/models/shared"
    "github.com/codatio/client-sdk-go/platform/pkg/models/operations"
  )

  func main() {
      codatPlatform := codatplatform.New(
          codatplatform.WithSecurity(shared.Security{
              AuthHeader: "{codatAuthHeader}",
          }),
      )

      ctx := context.Background()
      res, err := codatPlatform.Connections.Delete(ctx, operations.DeleteConnectionRequest{
          CompanyID: "{companyId}",
          ConnectionID: "{connectionId}",
      })
      if err != nil {
          log.Fatal(err)
      }

      if res.StatusCode == http.StatusOK {
          log.Print("Connection deleted successfully")
      }
  }
  ```
  </TabItem>

  <TabItem value="csharp" label="C#">

  ```c#
  using CodatPlatform;
  using CodatPlatform.Models.Shared;
  using CodatPlatform.Models.Operations;

  var codatPlatform = new CodatPlatformSDK(
      security: new Security() {
          AuthHeader = "{codatAuthHeader}",
      }
  );

  var res = await codatPlatform.Connections.DeleteAsync(new DeleteConnectionRequest() {
      CompanyId = "{companyId}",
      ConnectionId = "{connectionId}",
  });

  if(res.StatusCode == 200){
    Console.WriteLine("Connection deleted successfully");
  }
  ```
  </TabItem>

</Tabs>

When you delete a data connection:

- You can't make any data pulls or pushes against the underlying data provider.
- The data connection isn't returned by `GET /connections` or `GET / companies`.

## Provide credentials or tokens for a data connection

If you are migrating an existing integration to use Codat, you can provide tokens for the connection to migrate your users access. You can read more about how to do this on our [migration page](/get-started/migration).

---

## Read next

- Next concept: [Integrations](/core-concepts/integrations)
- [`GET /connections`](/platform-api#/operations/list-connections) API reference
