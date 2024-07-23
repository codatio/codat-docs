---
title: "Query data"
description: "Basics and examples of querying in Codat's APIs"
createdAt: "2019-02-20T09:52:29.305Z"
updatedAt: "2022-11-09T16:56:43.148Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Codat API uses a simple, flexible query language to allow you to filter response data.

:::caution Use URL encoding

Include a **URL encoded** query parameter with your request to filter data returned from the API.
:::

The below query functionality will only work when searching for company data (e.g. invoices, customers, etc), they will not work on settings or metadata endpoints such as listing integrations, companies or data connections.

## Query format

- The query takes the form of `propertyName=value`.
- You can also include comparison operators, such as greater than, less than or equal to. The following table shows comparison operators that are supported for numeric, date, and string data types.

| Operator 	| Name                     	| Encoded     | Number 	| String 	| Date 	|
|----------	|--------------------------	| :-          |--------	|--------	|------	|
| `=`        	| Equals                   	| `%3d`       | ✔      	| ✔      	| ✔    	|
| `!=`       	| Not equals               	|  `%21%3d`   | ✔      	| ✔      	| ✔    	|
| `~`        	| Contains                 	| `%7E`       | ❌      | ✔      	| ❌    |
| `>`        	| Greater than             	| `%3e`       | ✔      	| ❌      | ✔    	|
| `<`        	| Less than                	| `%3c`       | ✔      	| ❌      | ✔    	|
| `>=`       	| Greater than or equal to 	| `%3e%3d`    | ✔      	| ❌      | ✔    	|
| `<=`       	| Less than or equal to    	|  `%3c%3d`   | ✔      	| ❌      | ✔    	|
| `&&`        | AND                       | `%26%26`    |  -      | -       | -     |
| `||`       | OR                       |  `%7C%7C`   | -       | -       | -     |
| `{`, `}`    | Logical separator          | `%7B`, `%7D`| -       | -       | -     |

- Separate multiple query clauses with ampersands (`&&`) for _AND_ queries or pipes (`||`) for _OR_ queries.
- Access sub-properties by separating them from the property with a dot (see [Invoices to a particular customer](/using-the-api/querying#invoices-for-a-specific-customer) example below). This is only applicable to objects within our data endpoints. We do not support querying inside arrays.

:::info Combining queries

To combine AND and OR queries, use curly braces (`{` and `}`). For example:

`query={totalAmount > 100 || totalAmount < 50} && status != paid`
:::

:::info Query length limits

The total length of your query should be under 2048 characters in order to be valid. If your query is longer, the API will return an error message.
:::

:::info Querying on null fields

We do not currently support querying on null fields. 
:::

## Getting all vs one item

Our `GET /{dataType}` endpoints typically return an array of items of that given data type. If you want to retrieve just a single data type by an ID, you can use a query. For example:

`query=id%253D81be41e9-5c2c-4064-829c-bca43b5e6f59.`

## Example queries

### Invoices with amounts outstanding

Query: `amountDue > 0`

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
import { ListInvoicesResponse } from "@codat/lending/dist/sdk/models/operations";

const codatLending = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

codatLending.accountsReceivable.invoices.list({
  companyId: "{companyId}",
  query: "amountDue>0",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
import codatlending
from codatlending.models import operations, shared

codat_lending = codatlending.CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='amountDue>0',
))

if res.accounting_invoices is not None:
    # handle response
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

### Invoices in GBP

Query: `currency = GBP`

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
import { ListInvoicesResponse } from "@codat/lending/dist/sdk/models/operations";

const codatLending = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

codatLending.accountsReceivable.invoices.list({
  companyId: "{companyId}",
  query: "currency=GBP",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
import codatlending
from codatlending.models import operations, shared

codat_lending = codatlending.CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='currency=GBP',
))

if res.accounting_invoices is not None:
    # handle response
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

### Invoices for a specific customer

Query: `customerRef.id = 61`

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
import { ListInvoicesResponse } from "@codat/lending/dist/sdk/models/operations";

const codatLending = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

codatLending.accountsReceivable.invoices.list({
  companyId: "{companyId}",
  query: "customerRef.id=61",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
import codatlending
from codatlending.models import operations, shared

codat_lending = codatlending.CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='customerRef.id=61',
))

if res.accounting_invoices is not None:
    # handle response
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

### Outstanding Invoices worth less than 1000

Query: `amountDue > 0 && totalAmount < 1000`

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
import { ListInvoicesResponse } from "@codat/lending/dist/sdk/models/operations";

const codatLending = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

codatLending.accountsReceivable.invoices.list({
  companyId: "{companyId}",
  query: "amountDue>0&&totalAmount<1000",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
import codatlending
from codatlending.models import operations, shared

codat_lending = codatlending.CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='amountDue>0&&totalAmount<1000',
))

if res.accounting_invoices is not None:
    # handle response
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

### Invoices that are due after a certain date 

e.g. "2021-01-28" (YYYY-MM-DD format) 
  
Query: `dueDate > 2021-01-28`
  
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
import { ListInvoicesResponse } from "@codat/lending/dist/sdk/models/operations";

const codatLending = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

codatLending.accountsReceivable.invoices.list({
  companyId: "{companyId}",
  query: "dueDate>2021-01-28",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
import codatlending
from codatlending.models import operations, shared

codat_lending = codatlending.CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='dueDate>2021-01-28',
))

if res.accounting_invoices is not None:
    # handle response
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

### Invoices deleted in the source platform

Query: `metadata.isDeleted!=true`

Codat identifies records that have been deleted in the source accounting platform between successive data syncs using the `isDeleted` flag. You may need to exclude these records from the results.

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
import { ListInvoicesResponse } from "@codat/lending/dist/sdk/models/operations";

const codatLending = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

codatLending.accountsReceivable.invoices.list({
  companyId: "{companyId}",
  query: "metadata.isDeleted!=true",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
import codatlending
from codatlending.models import operations, shared

codat_lending = codatlending.CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(operations.ListAccountingInvoicesRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    query='metadata.isDeleted!=true',
))

if res.accounting_invoices is not None:
    # handle response
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

### Companies with "Pending" status connections
  
Query: `dataConnections.status=PendingAuth`

_Note_: the page size value is obligatory for querying.


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
import { ListCompaniesResponse } from "@codat/platform/dist/sdk/models/operations";

const codatPlatform = new CodatPlatform({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

codatPlatform.companies.list({
  query: "dataConnections.status=PendingAuth",
}).then((res: ListCompaniesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
import codatplatform
from codatplatform.models import operations, shared

codat_platform = codatplatform.CodatPlatform(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_platform.companies.list(operations.ListCompaniesRequest(
    query='dataConnections.status=PendingAuth',
))

if res.companies is not None:
    # handle response
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


## Queries that won't work

Although you can query properties of objects, you can't query arrays.  

✅ Objects: Invoices > `customerRef.id`
  
`GET /invoices?page=1&pageSize=100&query=customerRef.id%3Def6f54c1-eb45-4956-b8cd-1be82ad665f2`
  
❌ Arrays: Invoices > `lineItems`
  
`GET /invoices?page=1&pageSize=100&query=lineItems.unitAmount%3D700`
