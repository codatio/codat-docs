---
title: "Paginer les données"
description: "Bases et exemples de pagination dans les API de Codat"
createdAt: "2019-02-20T10:05:50.550Z"
updatedAt: "2022-11-07T20:00:07.343Z"
---

L'API Codat utilise un ensemble simple de paramètres de requête sur la plupart de ses endpoints pour faciliter la pagination à travers de grandes quantités de données.

## Requête

Nos endpoints qui retournent des résultats multiples sont paginés, p. ex. [`GET /companies`](/platform-api#/operations/list-companies). Si vous appelez ces endpoints, vous devrez fournir un paramètre de requête `page`. Vous pouvez configurer la taille de chaque page en utilisant le paramètre de requête `pageSize`.

Une requête typique aura les propriétés suivantes :

- `page` : C'est le numéro de page que vous souhaitez afficher. La page par défaut est 1.
- `pageSize` : Vous pouvez définir le nombre de résultats que vous souhaitez retourner par page. La taille de page par défaut est 100, tandis que la taille de page maximale peut être définie à 5000. Nous recommandons d'utiliser la taille de page par défaut pour assurer des temps de réponse optimaux. En savoir plus sur l'[Optimisation des appels API](/using-the-api/optimizing-api-calls).

## Réponse

Une réponse typique aura les propriétés suivantes :

- `results` : Un tableau des ressources spécifiées
- `pageNumber` : Numéro de page actuel
- `pageSize` : Nombre de résultats spécifié
- `totalResults` : Nombre total d'enregistrements dans l'ensemble de résultats
- `_links` : Liens (chacun avec un champ `href`) pour vous aider à naviguer dans la liste de résultats :
  - `self` : La ressource de base à laquelle votre requête a été envoyée, sans aucun paramètre de requête
  - `current` : Lien vers l'URL actuelle, incluant tous les paramètres de requête
  - `next` : Lien vers la page suivante, incluant tous les paramètres de requête
  - `previous` : Lien vers la page précédente, incluant tous les paramètres de requête

Vous pouvez utiliser `totalResults` et `pageSize` pour calculer le nombre de pages nécessaires pour récupérer toutes les données disponibles.

Vous n'êtes pas obligé de définir manuellement le paramètre de requête page. Si vous souhaitez naviguer à travers les pages, vous pouvez utiliser la propriété `_links`.

Remarque : `totalResults` retourne le nombre de résultats après l'application de tout filtre que vous avez spécifié à l'aide du paramètre `query`. Par exemple : s'il y a 100 factures au total, dont 50 sont payées, alors appeler l'endpoint des factures avec la requête `status=paid` retournerait `"totalResults": 50` plutôt que `"totalResults": 100`.

## Exemple

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs groupId="language">
<TabItem value="csharp" label="C#">

```c
using CodatPlatform;
using CodatPlatform.Models.Shared;
using CodatPlatform.Models.Operations;

var codatPlatform = new CodatPlatformSDK(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);

var res = await codatPlatform.Companies.ListAsync(new ListCompaniesRequest() {
    Page = 5,
    PageSize = 20,
});

// handle response
```

</TabItem>
<TabItem value="python" label="Python">

```python
from codat_platform import CodatPlatform
from codat_platform.models import operations, shared

codat_platform = CodatPlatform(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_platform.companies.list(
    request=operations.ListCompaniesRequest(
        page=5,
        page_size=20,
    )
)

if res:
    # handle response
    pass
```

</TabItem>
<TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

codatPlatform.companies
  .list({
    page: 5,
    pageSize: 20,
  })
  .then((res) => {
    // handle response
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
            AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
        }),
    )

    ctx := context.Background()
    res, err := codatPlatform.Companies.List(ctx, operations.ListCompaniesRequest{
      Page: codatplatform.Int(5),
      PageSize: codatplatform.Int(20),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Companies != nil {
        // handle response
    }
}
```

</TabItem>
<TabItem value="http" label="HTTP">

```http
GET /companies?page=5&pageSize=20
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="http" label="HTTP">

```http
GET /companies/{companyId}/data/invoices?page=5&pageSize=20
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript
var query = new InvoicesQuery(
  companyId,
  /* filter query */ null,
  /* page number  */ 5,
  /* page size    */ 20,
).run(codat.uat(apiKey));

// Following of the pages directly from the HAL links is not yet supported by the client library.
```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddQueryParameter("page", 5.ToString());
request.AddQueryParameter("pageSize", 20.ToString());
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
```

</TabItem>
</Tabs>

```json title="Exemple de réponse"
{
"results": ["...":"..."],
"pageNumber": 5,
"pageSize": 20,
"totalResults": 90,
"_links": {
  "current": {
    "href": "/companies?page=5&pageSize=20"
  },
  "self": {
    "href": "/companies"
  },
  "previous": {
    "href": "/companies?page=4&pageSize=20"
  }
}
}
```

:::tip Récapitulatif
Vous avez appris :

- Comment paginer avec les paramètres `page` et `pageSize`
  :::

---

## À lire ensuite

- [Ordonner les résultats](/using-the-api/ordering-results)
