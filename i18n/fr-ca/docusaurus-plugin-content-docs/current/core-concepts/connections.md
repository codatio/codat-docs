---
title: "Connexions"
description: "Aperçu du concept et détails clés"
tags:
  - Core concept
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Une connexion de données représente la connexion d'une [entreprise](/core-concepts/companies) à une source de données et vous permet de synchroniser les données (lecture et/ou écriture) avec cette source.

Une entreprise peut avoir plusieurs connexions de données selon le type de source de données à laquelle elle se connecte. Par exemple, une seule entreprise peut se lier à :

- [Données comptables](/integrations/accounting/overview) - 1 connexion active.
- [Données bancaires](/integrations/banking/overview) - Plusieurs connexions actives.
- [Données commerciales](/integrations/commerce/overview) - Plusieurs connexions actives.

Toute combinaison de connexions de données comptables, bancaires et commerciales est autorisée.

Avant de pouvoir utiliser une connexion de données pour lire ou écrire des données, l'entreprise doit vous accorder l'accès à ses données commerciales en [liant la connexion](/auth-flow/overview).

## Statut de connexion

Les connexions peuvent avoir l'un des statuts décrits dans le tableau suivant.

| Statut         | Définition                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Linked`       | La connexion est liée à une source de données ; vous pouvez l'utiliser pour lire et écrire les données consenties d'une entreprise vers et depuis la plateforme du fournisseur sous-jacent.                                                                                                                                                                                                                                                                                     |
| `PendingAuth`  | L'entreprise n'a pas autorisé l'accès à sa plateforme financière (la source de données). Le client PME a sélectionné la plateforme dans Link mais n'a pas terminé le flux d'autorisation.                                                                                                                                                                                                                                                                                      |
| `Deauthorized` | La connexion était liée mais n'est plus en mesure d'accéder aux données de la plateforme du fournisseur sous-jacent.<br/>Vous pouvez accéder à toutes les données qui ont déjà été lues ou écrites en utilisant cette connexion de données. Cependant, vous ne pouvez effectuer aucune nouvelle opération de lecture ou d'écriture tant que la connexion n'est pas reliée.<br/>Une connexion de données devient généralement Désautorisée si l'entreprise a révoqué votre accès ou si un délai d'expiration a été atteint. |
| `Unlinked`     | La connexion de données était précédemment liée mais vous avez demandé la révocation de votre accès (voir [Déconnecter une connexion de données pour révoquer votre accès à une source de données](/core-concepts/connections#disconnect-a-data-connection-to-revoke-your-access-to-a-data-source)).<br/>Comme pour Désautorisée, vous pouvez toujours accéder à toutes les données qui ont déjà été lues ou écrites en utilisant la connexion de données, mais vous ne pouvez effectuer aucune nouvelle opération de lecture ou d'écriture à moins que la connexion ne soit reliée. |
| No connections | L'entreprise a été créée mais n'a aucune connexion à des plateformes financières établies dans l'un des statuts ci-dessus.                                                                                                                                                                                                                                                                                                                                                      |

## Exemple de connexion de données liée

Vérifiez qu'une connexion retourne un `status` Linked en utilisant l'un de nos points de terminaison [Connexions](/platform-api#/operations/list-connections).

Dans la réponse, notez les champs suivants :

- `sourceId` identifie la source d'information, comme une banque ou un logiciel de comptabilité ;
- `integrationId` identifie l'intégration Codat qui prend en charge la source de données.

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

## Déconnecter une connexion de données pour révoquer votre accès à une source de données

Vous pouvez déconnecter une connexion de données en utilisant le [portail Codat](https://app.codat.io/). Accédez à **Entreprises**, choisissez l'entreprise pour laquelle vous souhaitez gérer les connexions, puis sélectionnez **Gérer les connexions** et utilisez le menu à trois points pour dissocier la connexion.

Cela révoque votre accès à la synchronisation des données avec l'entreprise liée et définit le statut de la connexion de données sur `Unlinked`.

Alternativement, vous pouvez utiliser notre point de terminaison <a href="/platform-api#/operations/unlink-connection" target="_blank">Dissocier la connexion</a>. Pour déconnecter une connexion de données, vous devrez fournir :

- Le `companyId` de l'entreprise liée comme paramètre de chemin.
- Le `connectionId` de la connexion de données à déconnecter comme paramètre de chemin.
- Un `status` de `Unlinked` dans le corps de la requête.

Lorsqu'une connexion est définie sur `Unlinked`, vous pouvez continuer à accéder à toutes les données qui ont déjà été lues ou écrites vers la source de données, mais vous ne pouvez effectuer aucune nouvelle opération de lecture ou d'écriture (sauf si la connexion est reliée).

:::note Dissociation des connexions de données

Seules les connexions de données `Linked` peuvent être dissociées.
:::

#### Exemple : Déconnecter une connexion de données

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
from codat_platform import CodatPlatform
from codat_platform.models import operations, shared

codat_platform = CodatPlatform(
    security=shared.Security(
        auth_header='{codatAuthHeader}',
    ),
)

req = codat_platform.connections.unlink(request={
        "company_id": "8a210b68-6988-11ed-a1eb-0242ac120002",
        "connection_id": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        "update_connection_status": {
            "status": shared.DataConnectionStatus.UNLINKED,
        },
    }
)

```

</TabItem>

<TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "",
});

codatPlatform.connections
  .unlink({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    updateConnectionStatus: {
      status: "Unlinked",
    },
  })
  .then((res) => {
    if (res) {
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

#### Exemple de réponse à une demande `Unlinked`

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

## Supprimer une connexion de données

Vous pouvez supprimer une connexion de données en utilisant le [portail Codat](https://app.codat.io/). Accédez à **Entreprises**, choisissez l'entreprise pour laquelle vous souhaitez gérer les connexions, puis sélectionnez **Gérer les connexions** et utilisez le menu à trois points pour supprimer la connexion.

Alternativement, vous pouvez envoyer une requête au point de terminaison <a href="/platform-api#/operations/delete-connection" target="_blank">`DELETE /connectionId`</a> et fournir le `companyId` et le `connectionId` comme paramètres de chemin.

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

from codat_platform import CodatPlatform
from codat_platform.models import operations, shared

codat_platform = CodatPlatform(
    security=shared.Security(
        auth_header="{codatAuthHeader}",
    ),
)

res = codat_platform.connections.delete(
  request={
        "company_id": "8a210b68-6988-11ed-a1eb-0242ac120002",
        "connection_id": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    }
)

```

  </TabItem>

  <TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "{codatAuthHeader}",
});

codatPlatform.connections
  .delete({
    companyId: "{companyId}",
    connectionId: "{connectionId}",
  })
  .then((res) => {
    console.log("Connection deleted successfully");
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

Lorsque vous supprimez une connexion de données :

- Vous ne pouvez effectuer aucune opération de lecture ou d'écriture de données contre le fournisseur de données sous-jacent.
- La connexion de données n'est pas retournée par `GET /connections` ou `GET /companies`.

## Fournir des identifiants ou des jetons pour une connexion de données

Si vous migrez une intégration existante pour utiliser Codat, vous pouvez fournir des jetons pour la connexion afin de migrer l'accès de vos utilisateurs. Vous pouvez en savoir plus sur la façon de le faire sur notre [page de migration](/get-started/migration).

---

## Lire ensuite

- Concept suivant : [Intégrations](/core-concepts/integrations)
- [`GET /connections`](/platform-api#/operations/list-connections) Référence API
