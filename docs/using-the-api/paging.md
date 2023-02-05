---
title: "Pagination"
description: "Basics and examples of pagination in Codat's APIs"
createdAt: "2019-02-20T10:05:50.550Z"
updatedAt: "2022-11-07T20:00:07.343Z"
---

The Codat API uses a simple set of query parameters on most of its endpoints to facilitate paging through large amounts of data.

## Request

Our endpoints which return multiple results are paged, e.g. [companies ](https://api.codat.io/swagger/index.html#/Companies/get_companies) or [push ](https://api.codat.io/swagger/index.html#/Push/get_companies__companyId__push) operations. If you're calling these endpoints, you will need to supply a `page` query parameter. You can configure the size of each page by using the `pageSize` query parameter.

A typical request will have the following properties:

- `page` : This is the page number that you would like to have displayed. The default page is 1.
- `pageSize` : You can define the number of the results you would like to have displayed on one page. The default page size is 100, while the maximum page size can be set to 5000..

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

````
GET /companies/{companyId}/data/invoices?page=5&pageSize=20",
      "language": "http",
      "name": "HTTP"
    },
    {
      "code": "var query = new InvoicesQuery(companyId,
                  /* filter query */ null,
                  /* page number  */ 5,
                  /* page size    */ 20)
              .run(codat.uat(apiKey));

// Following of the pages directly from the HAL links is not yet supported by the client library.```

```var request = new RestRequest("companies/{companyId}/data/invoices", Method.GET);
request.AddUrlSegment("companyId", companyId);
request.AddQueryParameter("page", 5.ToString());
request.AddQueryParameter("pageSize", 20.ToString());
request.AddHeader("Authorization", $"Basic {encodedApiKey}");
var response = client.Execute(request);
var info = response.Data;
````

```
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
