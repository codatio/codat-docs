---
title: "Interroger les données"
description: "Bases et exemples d'interrogation dans les API de Codat"
createdAt: "2019-02-20T09:52:29.305Z"
updatedAt: "2022-11-09T16:56:43.148Z"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

L'API Codat utilise un langage de requête simple et flexible pour vous permettre de filtrer les données de réponse.

:::caution Utilisez l'encodage URL

Incluez un paramètre de requête **encodé en URL** avec votre requête pour filtrer les données retournées par l'API.
:::

La fonctionnalité de requête ci-dessous ne fonctionnera que lors de la recherche de données d'entreprise (p. ex. factures, clients, etc.), elle ne fonctionnera pas sur les endpoints de paramètres ou de métadonnées comme la liste des intégrations, des entreprises ou des connexions de données.

## Format de requête

- La requête prend la forme `propertyName=value`.
- Vous pouvez également inclure des opérateurs de comparaison, tels que supérieur à, inférieur à ou égal à. Le tableau suivant montre les opérateurs de comparaison pris en charge pour les types de données numériques, date et chaîne de caractères.

| Opérateur | Nom                      | Encodé       | Nombre | Chaîne | Date |
| --------- | ------------------------ | :----------- | ------ | ------ | ---- |
| `=`       | Égal                     | `%3d`        | ✔      | ✔      | ✔    |
| `!=`      | Différent de             | `%21%3d`     | ✔      | ✔      | ✔    |
| `~`       | Contient                 | `%7E`        | ❌     | ✔      | ❌   |
| `>`       | Supérieur à              | `%3e`        | ✔      | ❌     | ✔    |
| `<`       | Inférieur à              | `%3c`        | ✔      | ❌     | ✔    |
| `>=`      | Supérieur ou égal à      | `%3e%3d`     | ✔      | ❌     | ✔    |
| `<=`      | Inférieur ou égal à      | `%3c%3d`     | ✔      | ❌     | ✔    |
| `&&`      | ET                       | `%26%26`     | -      | -      | -    |
| `\|\|`    | OU                       | `%7C%7C`     | -      | -      | -    |
| `{`, `}`  | Séparateur logique       | `%7B`, `%7D` | -      | -      | -    |

- Séparez les clauses de requête multiples avec des esperluettes (`&&`) pour les requêtes _ET_ ou des barres verticales (`||`) pour les requêtes _OU_.
- Accédez aux sous-propriétés en les séparant de la propriété par un point (voir l'exemple [Factures pour un client spécifique](/using-the-api/querying#invoices-for-a-specific-customer) ci-dessous). Ceci est uniquement applicable aux objets dans nos endpoints de données. Nous ne prenons pas en charge les requêtes à l'intérieur des tableaux.

:::info Combiner des requêtes

Pour combiner des requêtes ET et OU, utilisez des accolades (`{` et `}`). Par exemple :

`query={totalAmount > 100 || totalAmount < 50} && status != paid`
:::

:::info Limites de longueur des requêtes

La longueur totale de votre requête doit être inférieure à 2048 caractères pour être valide. Si votre requête est plus longue, l'API retournera un message d'erreur.
:::

:::info Interroger les champs null

Nous ne prenons actuellement pas en charge les requêtes sur les champs null.
:::

## Obtenir tous les éléments vs un seul

Nos endpoints `GET /{dataType}` retournent généralement un tableau d'éléments de ce type de données donné. Si vous souhaitez récupérer un seul type de données par son identifiant, vous pouvez utiliser une requête. Par exemple :

`query=id%253D81be41e9-5c2c-4064-829c-bca43b5e6f59.`

## Exemples de requêtes

### Factures avec montants impayés

Requête : `amountDue > 0`

<Tabs>
<TabItem value="http" label="HTTP">

```http
GET /companies/{companyId}/data/invoices?query=amountDue%3e0
```

</TabItem>

<TabItem value="csharp" label="C#">

```c
using CodatLending;
using CodatLending.Models.Shared;
using CodatLending.Models.Operations;

var codatLending = new CodatLendingSDK(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);

var res = await codatLending.AccountsReceivable.Invoices.ListAsync(new ListAccountingInvoicesRequest() {
    CompanyId = "{companyId}",
    Query = "amountDue>0",
});
```

</TabItem>

<TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

codatLending.accountsReceivable.invoices
  .list({
    companyId: "{companyId}",
    query: "amountDue>0&&totalAmount<1000",
  })
  .then((res) => {
    // handle response
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
from codat_lending import CodatLending
from codat_lending.models import operations, shared

codat_lending = CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(
    request=operations.ListAccountingInvoicesRequest(
        company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
        query='amountDue>0',
    )
)

if res:
    # handle response
    pass
```

</TabItem>

<TabItem value="go" label="Go">

```go
package main

import(
	"context"
	"log"
	"github.com/codatio/client-sdk-go/lending"
	"github.com/codatio/client-sdk-go/lending/pkg/models/shared"
	"github.com/codatio/client-sdk-go/lending/pkg/models/operations"
)

func main() {
    codatLending := codatlending.New(
        codatlending.WithSecurity(shared.Security{
            AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
        }),
    )

    ctx := context.Background()
    res, err := codatLending.AccountsReceivable.Invoices.List(ctx, operations.ListAccountingInvoicesRequest{
        CompanyID: "{companyId}",
        Query: codatlending.String("amountDue>0"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountingInvoices != nil {
        // handle response
    }
}
```

</TabItem>

</Tabs>

### Factures en GBP

Requête : `currency = GBP`

<Tabs>

<TabItem value="http" label="HTTP">

```http
GET /companies/{companyId}/data/invoices?query=currency%3dGBP
```

</TabItem>

<TabItem value="csharp" label="C#">

```c
using CodatLending;
using CodatLending.Models.Shared;
using CodatLending.Models.Operations;

var codatLending = new CodatLendingSDK(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);

var res = await codatLending.AccountsReceivable.Invoices.ListAsync(new ListAccountingInvoicesRequest() {
    CompanyId = "{companyId}",
    Query = "currency=GBP",
});
```

</TabItem>

<TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

codatLending.accountsReceivable.invoices
  .list({
    companyId: "{companyId}",
    query: "currency=GBP",
  })
  .then((res) => {
    // handle response
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
from codat_lending import CodatLending
from codat_lending.models import operations, shared

codat_lending = CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(
    request=operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='currency=GBP',
))

if res:
    # handle response
    pass
```

</TabItem>

<TabItem value="go" label="Go">

```go
package main

import(
	"context"
	"log"
	"github.com/codatio/client-sdk-go/lending"
	"github.com/codatio/client-sdk-go/lending/pkg/models/shared"
	"github.com/codatio/client-sdk-go/lending/pkg/models/operations"
)

func main() {
    codatLending := codatlending.New(
        codatlending.WithSecurity(shared.Security{
            AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
        }),
    )

    ctx := context.Background()
    res, err := codatLending.AccountsReceivable.Invoices.List(ctx, operations.ListAccountingInvoicesRequest{
        CompanyID: "{companyId}",
        Query: codatlending.String("currency=GBP"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountingInvoices != nil {
        // handle response
    }
}
```

</TabItem>

</Tabs>

### Factures pour un client spécifique

Requête : `customerRef.id = 61`

<Tabs>

<TabItem value="http" label="HTTP">

```http
GET /companies/{companyId}/data/invoices?query=customerRef.id%3d61
```

</TabItem>

<TabItem value="csharp" label="C#">

```c
using CodatLending;
using CodatLending.Models.Shared;
using CodatLending.Models.Operations;

var codatLending = new CodatLendingSDK(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);

var res = await codatLending.AccountsReceivable.Invoices.ListAsync(new ListAccountingInvoicesRequest() {
    CompanyId = "{companyId}",
    Query = "customerRef.id=61",
});
```

</TabItem>

<TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

codatLending.accountsReceivable.invoices
  .list({
    companyId: "{companyId}",
    query: "customerRef.id=61",
  })
  .then((res) => {
    // handle response
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
from codat_lending import CodatLending
from codat_lending.models import operations, shared

codat_lending = CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(
    request=operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='customerRef.id=61',
))

if res:
    # handle response
    pass
```

</TabItem>

<TabItem value="go" label="Go">

```go
package main

import(
	"context"
	"log"
	"github.com/codatio/client-sdk-go/lending"
	"github.com/codatio/client-sdk-go/lending/pkg/models/shared"
	"github.com/codatio/client-sdk-go/lending/pkg/models/operations"
)

func main() {
    codatLending := codatlending.New(
        codatlending.WithSecurity(shared.Security{
            AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
        }),
    )

    ctx := context.Background()
    res, err := codatLending.AccountsReceivable.Invoices.List(ctx, operations.ListAccountingInvoicesRequest{
        CompanyID: "{companyId}",
        Query: codatlending.String("customerRef.id=61"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountingInvoices != nil {
        // handle response
    }
}
```

</TabItem>

</Tabs>

### Factures impayées de moins de 1000

Requête : `amountDue > 0 && totalAmount < 1000`

<Tabs>

<TabItem value="http" label="HTTP">

```http
GET /companies/{companyId}/data/invoices?query=amountDue%3e0%26%26totalAmount%3c1000
```

</TabItem>

<TabItem value="csharp" label="C#">

```c
using CodatLending;
using CodatLending.Models.Shared;
using CodatLending.Models.Operations;

var codatLending = new CodatLendingSDK(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);

var res = await codatLending.AccountsReceivable.Invoices.ListAsync(new ListAccountingInvoicesRequest() {
    CompanyId = "{companyId}",
    Query = "amountDue>0&&totalAmount<1000",
});
```

</TabItem>

<TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

codatLending.accountsReceivable.invoices
  .list({
    companyId: "{companyId}",
    query: "amountDue>0&&totalAmount<1000",
  })
  .then((res) => {
    // handle response
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
from codat_lending import CodatLending
from codat_lending.models import operations, shared

codat_lending = CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(
    request=operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='amountDue>0&&totalAmount<1000',
))

if res:
    # handle response
    pass
```

</TabItem>

<TabItem value="go" label="Go">

```go
package main

import(
	"context"
	"log"
	"github.com/codatio/client-sdk-go/lending"
	"github.com/codatio/client-sdk-go/lending/pkg/models/shared"
	"github.com/codatio/client-sdk-go/lending/pkg/models/operations"
)

func main() {
    codatLending := codatlending.New(
        codatlending.WithSecurity(shared.Security{
            AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
        }),
    )

    ctx := context.Background()
    res, err := codatLending.AccountsReceivable.Invoices.List(ctx, operations.ListAccountingInvoicesRequest{
        CompanyID: "{companyId}",
        Query: codatlending.String("amountDue>0&&totalAmount<1000"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountingInvoices != nil {
        // handle response
    }
}
```

</TabItem>

</Tabs>

### Factures échues après une certaine date

p. ex. "2021-01-28" (format AAAA-MM-JJ)

Requête : `dueDate > 2021-01-28`

<Tabs>

<TabItem value="http" label="HTTP">

```http
GET /companies/{companyId}/data/invoices?query=dueDate%3E2021-01-28
```

</TabItem>

<TabItem value="csharp" label="C#">

```c
using CodatLending;
using CodatLending.Models.Shared;
using CodatLending.Models.Operations;

var codatLending = new CodatLendingSDK(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);

var res = await codatLending.AccountsReceivable.Invoices.ListAsync(new ListAccountingInvoicesRequest() {
    CompanyId = "{companyId}",
    Query = "dueDate>2021-01-28",
});
```

</TabItem>

<TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

codatLending.accountsReceivable.invoices
  .list({
    companyId: "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
    query: "dueDate>2021-01-28",
  })
  .then((res) => {
    // handle response
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
from codat_lending import CodatLending
from codat_lending.models import operations, shared

codat_lending = CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(
    request=operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='dueDate>2021-01-28',
))

if res:
    # handle response
    pass
```

</TabItem>

<TabItem value="go" label="Go">

```go
package main

import(
	"context"
	"log"
	"github.com/codatio/client-sdk-go/lending"
	"github.com/codatio/client-sdk-go/lending/pkg/models/shared"
	"github.com/codatio/client-sdk-go/lending/pkg/models/operations"
)

func main() {
    codatLending := codatlending.New(
        codatlending.WithSecurity(shared.Security{
            AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
        }),
    )

    ctx := context.Background()
    res, err := codatLending.AccountsReceivable.Invoices.List(ctx, operations.ListAccountingInvoicesRequest{
        CompanyID: "{companyId}",
        Query: codatlending.String("dueDate>2021-01-28"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountingInvoices != nil {
        // handle response
    }
}
```

</TabItem>

</Tabs>

### Factures supprimées dans la plateforme source

Requête : `metadata.isDeleted!=true`

Codat identifie les enregistrements qui ont été supprimés dans le logiciel comptable source entre des synchronisations de données successives à l'aide du drapeau `isDeleted`. Vous pourriez avoir besoin d'exclure ces enregistrements des résultats.

<Tabs>

<TabItem value="http" label="HTTP">

```http
GET /companies/{companyId}/data/invoices?query=metadata.isDeleted%21%3dtrue
```

</TabItem>

<TabItem value="csharp" label="C#">

```c
using CodatLending;
using CodatLending.Models.Shared;
using CodatLending.Models.Operations;

var codatLending = new CodatLendingSDK(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);

var res = await codatLending.AccountsReceivable.Invoices.ListAsync(new ListAccountingInvoicesRequest() {
    CompanyId = "{companyId}",
    Query = "metadata.isDeleted!=true",
});
```

</TabItem>

<TabItem value="nodejs" label="TypeScript">

```javascript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

codatLending.accountsReceivable.invoices
  .list({
    companyId: "{companyId}",
    query: "metadata.isDeleted!=true",
  })
  .then((res) => {
    // handle response
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
from codat_lending import CodatLending
from codat_lending.models import operations, shared

codat_lending = CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(
    request=operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='metadata.isDeleted!=true',
))

if res:
    # handle response
    pass
```

</TabItem>

<TabItem value="go" label="Go">

```go
package main

import(
	"context"
	"log"
	"github.com/codatio/client-sdk-go/lending"
	"github.com/codatio/client-sdk-go/lending/pkg/models/shared"
	"github.com/codatio/client-sdk-go/lending/pkg/models/operations"
)

func main() {
    codatLending := codatlending.New(
        codatlending.WithSecurity(shared.Security{
            AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
        }),
    )

    ctx := context.Background()
    res, err := codatLending.AccountsReceivable.Invoices.List(ctx, operations.ListAccountingInvoicesRequest{
        CompanyID: "{companyId}",
        Query: codatlending.String("metadata.isDeleted!=true"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountingInvoices != nil {
        // handle response
    }
}
```

</TabItem>

</Tabs>

### Entreprises avec des connexions au statut "En attente"

Requête : `dataConnections.status=PendingAuth`

_Remarque_ : la valeur de taille de page est obligatoire pour les requêtes.

<Tabs>

<TabItem value="csharp" label="C#">

```c
using CodatPlatform;
using CodatPlatform.Models.Shared;
using CodatPlatform.Models.Operations;

var sdk = new CodatPlatformSDK(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);

var res = await sdk.Companies.ListAsync(new ListCompaniesRequest() {
    Query = "dataConnections.status=PendingAuth",
});

// handle response
```

</TabItem>

<TabItem value="http" label="HTTP">

```http
GET /companies?query=dataConnections.status=PendingAuth
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
    query: "dataConnections.status=PendingAuth",
  })
  .then((res) => {
    // handle response
  });
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
        query='dataConnections.status=PendingAuth',
    )
)

if res:
    # handle response
    pass
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
        Query: codatplatform.String("dataConnections.status=PendingAuth"),
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

</Tabs>

### Entreprises sans connexions

Requête : `dataConnections.status!=PendingAuth&&dataConnections.status!=Linked&&dataConnections.status!=Deauthorized&&dataConnections.status!=Unlinked`

:::note

- La valeur de taille de page est obligatoire pour les requêtes.
- La réponse exclura les entreprises qui avaient des connexions mais celles-ci ont été supprimées.

:::

<Tabs>

<TabItem value="csharp" label="C#">

```c
using CodatPlatform;
using CodatPlatform.Models.Shared;
using CodatPlatform.Models.Operations;

var sdk = new CodatPlatformSDK(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);

var res = await sdk.Companies.ListAsync(new ListCompaniesRequest() {
    Query = "dataConnections.status!=PendingAuth&&dataConnections.status!=Linked&&dataConnections.status!=Deauthorized&&dataConnections.status!=Unlinked",
});

// handle response
```

</TabItem>

<TabItem value="http" label="HTTP">

```http
GET /companies?query=dataConnections.status=PendingAuth
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
    query:
      "dataConnections.status!=PendingAuth&&dataConnections.status!=Linked&&dataConnections.status!=Deauthorized&&dataConnections.status!=Unlinked",
  })
  .then((res) => {
    // handle response
  });
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
        query='dataConnections.status!=PendingAuth&&dataConnections.status!=Linked&&dataConnections.status!=Deauthorized&&dataConnections.status!=Unlinked',
    )
)

if res:
    # handle response
    pass
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
        Query: codatplatform.String("dataConnections.status!=PendingAuth&&dataConnections.status!=Linked&&dataConnections.status!=Deauthorized&&dataConnections.status!=Unlinked"),
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

</Tabs>

## Requêtes qui ne fonctionneront pas

Bien que vous puissiez interroger les propriétés des objets, vous ne pouvez pas interroger les tableaux.

✅ Objets : Factures > `customerRef.id`

`GET /invoices?page=1&pageSize=100&query=customerRef.id%3Def6f54c1-eb45-4956-b8cd-1be82ad665f2`

❌ Tableaux : Factures > `lineItems`

`GET /invoices?page=1&pageSize=100&query=lineItems.unitAmount%3D700`
