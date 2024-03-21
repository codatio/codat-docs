---
title: "Pagination"
description: "Basics and examples of pagination in Codat's APIs"
createdAt: "2019-02-20T10:05:50.550Z"
updatedAt: "2022-11-07T20:00:07.343Z"
---

The Codat API uses a simple set of query parameters on most of its endpoints to facilitate paging through large amounts of data.

## Request

Our endpoints which return multiple results are paged, e.g. [`GET /companies`](/platform-api#/operations/list-companies). If you're calling these endpoints, you will need to supply a `page` query parameter. You can configure the size of each page by using the `pageSize` query parameter.

A typical request will have the following properties:

- `page` : This is the page number that you would like to have displayed. The default page is 1.
- `pageSize` : You can define the number of the results you would like to have displayed on one page. The default page size is 100, while the maximum page size can be set to 5000. We recommend that integrators keep this default page size to ensure optimal response times. Read more on [Optimizing API Calls](/using-the-api/optimizing-api-calls). 

## Response

A typical response will have the following properties:

- `results`: An array of the specified resources
- `pageNumber`: Current page number
- `pageSize`: Specified number of results
- `totalResults`: Total number of records in the result set
- `_links`: Links (each with an `href` field) to help you navigate through the list of results:
  - `self`: The base resource your request was sent to, without any query parameters
  - `current`: Link to the current URL, including any query parameters
  - `next`: Link to the next page, including any query parameters
  - `previous`: Link to the previous page, including any query parameters

You can use the `totalResults` and `pageSize` to calculate the number of pages that will be required to retrieve all of the available data.

You're not required to set the page query parameter manually. If you want to navigate through the pages, you can use the `_links` property.

Note: `totalResults` returns the number of results after applying any filter you've specified using the `query` parameter. For example: if there are 100 invoices in total, with 50 of them being paid, then calling the invoices endpoint with the query `status=paid` would return `"totalResults": 50` rather than `"totalResults": 100`.

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
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
import codatplatform
from codatplatform.models import operations, shared

codat_platform = codatplatform.CodatPlatform(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)

res = codat_platform.companies.list(operations.ListCompaniesRequest(
    page = 5,
    page_size = 20,
))

if res.companies is not None:
    # handle response
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
  page = 5,
  pageSize = 20,
}).then((res: ListCompaniesResponse) => {
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
var query = new InvoicesQuery(companyId, 
                    /* filter query */ null, 
                    /* page number  */ 5, 
                    /* page size    */ 20)
                .run(codat.uat(apiKey));

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

```json title="Sample response"
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

:::tip Recap
You have learned:
- How to paginate with the `page` and `pageSize` parameters
:::

---

## Read next

- [Ordering results](/using-the-api/ordering-results)
