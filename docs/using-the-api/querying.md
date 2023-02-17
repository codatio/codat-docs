---
title: "Querying"
description: "Basics and examples of querying in Codat's APIs"
createdAt: "2019-02-20T09:52:29.305Z"
updatedAt: "2022-11-09T16:56:43.148Z"
---

The Codat API uses a simple, flexible query language to allow you to filter response data.

:::caution Use URL encoding

Include a **URL encoded** query parameter with your request to filter data returned from the API.
:::

The below query functionality will only work when searching for company data (eg invoices, customers etc.), they will not work on settings or metadata endpoints such as listing integrations, companies or data connections.

## Query format

- The query takes the form of `propertyName=value`.
- You can also include comparison operators, such as greater than, less than or equal to. The following table shows comparison operators that are supported for numeric, date, and string data types.


{
"data": {
"h-0": "Operator",
"h-1": "Name",
"h-2": "Number",
"h-3": "String",
"0-0": "**=**",
"2-0": "**~**",
"3-0": "**>**",
"4-0": "**<**",
"5-0": "**>=**",
"6-0": "**<=**",
"0-1": "Equals",
"2-1": "Contains",
"3-1": "Greater than",
"4-1": "Less than",
"5-1": "Greater than or equal to",
"6-1": "Less than or equal to",
"0-2": "✔",
"2-2": "❌",
"3-2": "✔",
"4-2": "✔",
"5-2": "✔",
"6-2": "✔",
"0-3": "✔",
"2-3": "✔",
"3-3": "❌",
"4-3": "❌",
"5-3": "❌",
"6-3": "❌",
"1-0": "**!=**",
"1-1": "Not equals",
"1-2": "✔",
"1-3": "✔",
"0-4": "✔",
"1-4": "✔",
"3-4": "✔",
"4-4": "✔",
"5-4": "✔",
"6-4": "✔",
"h-4": "Date",
"2-4": "❌"
},
"cols": 5,
"rows": 7
}


- Separate multiple query clauses with ampersands (`&&`) for _AND_ queries or pipes (`||`) for _OR_ queries.
- Access sub-properties by separating them from the property with a dot (see [Invoices to a particular customer](/using-the-api/querying#invoices-to-a-particular-customer) example below).

:::info Combining queries

To combine AND and OR queries, use curly braces (`{` and `}`), for example:


`query={totalAmount > 100 || totalAmount < 50} && status != paid`
:::

:::info Query length limits

The total length of your query should be under 2048 characters in order to be valid. If your query is longer, the API will return an error message.
:::

## Getting all vs one item

Our `GET /{dataType}` endpoints typically return an array of items of that given data type. If you want to retrieve just a single data type by an ID, you can use a query. For example:

`query=id%253D81be41e9-5c2c-4064-829c-bca43b5e6f59.

## Example queries

Note that characters (<, >) are url-encoded.

### Invoices with amounts outstanding

`GET /companies/{companyId}/data/invoices?query=amountDue%3e0`

````
import {InvoicesQuery} from 'codat-queries';
import { api as codat } from 'codat';

var query = new InvoicesQuery(companyId, 'amountDue>0')
.run(codat.uat(apiKey));```

```var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "amountDue>0");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
````

### GBP Invoices

` GET /companies/{companyId}/data/invoices?query=currency%3dGBP`

````
import {InvoicesQuery} from 'codat-queries';
import { api as codat } from 'codat';

var query = new InvoicesQuery(companyId, 'currency=GBP')
.run(codat.uat(apiKey));```

```var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "currency=GBP");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
````

### Invoices to a particular customer

` GET /companies/{companyId}/data/invoices?query=customerRef.id%3d61`

````
import {InvoicesQuery} from 'codat-queries';
import { api as codat } from 'codat';

var query = new InvoicesQuery(companyId, 'customerRef.id=61')
.run(codat.uat(apiKey));```

```var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "customerRef.id=61");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
````

### Outstanding Invoices of value less than 1000

` GET /companies/{companyId}/data/invoices?query=amountDue%3e0%26%26totalAmount%3c1000`

````
import {InvoicesQuery} from 'codat-queries';
import { api as codat } from 'codat';

var query = new InvoicesQuery(companyId, 'amountDue>0&&totalAmount<1000')
.run(codat.uat(apiKey));```

```var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "amountDue>0&&totalAmount<1000");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
````

### Invoices that are due after a certain date (YYYY-MM-DD) e.g. "2021-01-28"

` GET /companies/{companyId}/data/invoices?query=dueDate%3E2021-01-28`

````
import {InvoicesQuery} from 'codat-queries';
import { api as codat } from 'codat';

var query = new InvoicesQuery(companyId,'dueDate>2021-01-28')
.run(codat.uat(apiKey));```

```var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddUrlSegment("query", "dueDate>2021-01-28");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
````

### For companies whose status is "Pending" (with data connection established)

` GET /companies?page=1&pageSize=100&query=dataConnections.status=PendingAuth`

_Note_: the page size value is obligatory for querying.

```
var request = new RestRequest("companies", Method.GET);
request.AddUrlSegment("page", 1);
request.AddUrlSegment("query", "dataConnections.status=PendingAuth");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;",
      "language": "javascript",
      "name": "C#"
    }
  ]
}
```


### For companies with no data connection established
`` GET /companies?page=1&pageSize=100&query=dataConnections.count=0``

*Note*: The page size value is obligatory for querying.

```

var request = new RestRequest("companies", Method.GET);
request.AddUrlSegment("page", 1);
request.AddUrlSegment("query", "dataConnections.count=0");
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;",
"language": "javascript",
"name": "C#"
}
]
}
```
