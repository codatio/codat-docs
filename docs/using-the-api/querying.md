---
title: "Querying"
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
| =        	| Equals                   	| `%3d`       | ✔      	| ✔      	| ✔    	|
| !=       	| Not equals               	|  `%21%3d`   | ✔      	| ✔      	| ✔    	|
| ~        	| Contains                 	| `%7E`       | ❌      | ✔      	| ❌    |
| >        	| Greater than             	| `%3e`       | ✔      	| ❌      | ✔    	|
| <        	| Less than                	| `%3c`       | ✔      	| ❌      | ✔    	|
| >=       	| Greater than or equal to 	| `%3e%3d`    | ✔      	| ❌      | ✔    	|
| <=       	| Less than or equal to    	|  `%3c%3d`   | ✔      	| ❌      | ✔    	|
| &&        | AND                       | `%26%26`    |  -      | -       | -     |
| \|\|       | OR                       |  `%7C%7C`   | -       | -       | -     |
| {, }     | Logical separator          | `%7B`, `%7D`| -       | -       | -     |

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
<TabItem value="javascript" label="Javascript">

```javascript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  query: "amountDue>0",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>
<TabItem value="c" label="C#">

```c
var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "amountDue>0");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
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
<TabItem value="javascript" label="Javascript">

```javascript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  query: "currency=GBP",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>
<TabItem value="c" label="C#">

```c
var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "currency=GBP");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
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
<TabItem value="javascript" label="Javascript">

```javascript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  query: "customerRef.id=61",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>
<TabItem value="c" label="C#">

```c
var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "customerRef.id=61");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
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
<TabItem value="javascript" label="Javascript">

```javascript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  query: "amountDue>0&&totalAmount<1000",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});

```
</TabItem>
<TabItem value="c" label="C#">

```c
var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "amountDue>0&&totalAmount<1000");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
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
<TabItem value="javascript" label="Javascript">

```javascript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  query: "dueDate>2021-01-28",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});

```
</TabItem>
<TabItem value="c" label="C#">

```c
var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "dueDate>2021-01-28");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
```
</TabItem>
</Tabs>

### Invoices deleted in the source platform

Query: `metadata.isDeleted!=true`

Codat identifies records that have been deleted in the source accounting platform between successive data syncs using the `isDeleted` flag. You may need to exclude these records from the results.

<Tabs>
<TabItem value="http" label="HTTP">

```http
GET /companies/{companyId}/data/invoices?metadata.isDeleted%21%3dtrue
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  query: "metadata.isDeleted!=true",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
</TabItem>
<TabItem value="c" label="C#">

```c
var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "metadata.isDeleted!=true");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
```
</TabItem>
</Tabs>

### Companies with "Pending" status connections
  
Query: `dataConnections.status=PendingAuth`

_Note_: the page size value is obligatory for querying.

<Tabs>
<TabItem value="http" label="HTTP">

```http
GET /companies?page=1&pageSize=100&query=dataConnections.status=PendingAuth
```
</TabItem>
<TabItem value="c" label="C#">

```c
var request = new RestRequest("companies", Method.GET);
request.AddUrlSegment("page", 1);
request.AddUrlSegment("query", "dataConnections.status=PendingAuth");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
```
</TabItem>
</Tabs>  
  
## Queries that won't work

Although you can query properties of objects, you can't query arrays.  

✅ Objects: Invoices > `customerRef.id`
  
`GET /invoices?page=1&pageSize=100&query=customerRef.id%3Def6f54c1-eb45-4956-b8cd-1be82ad665f2`
  
❌ Arrays: Invoices > `lineItems`
  
`GET /invoices?page=1&pageSize=100&query=lineItems.unitAmount%3D700`
