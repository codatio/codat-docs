---
title: "Company tags: introducing filtering"
date: "2024-11-25"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning

Please contact your account manager to access this feature.
:::

The *List companies* endpoint now supports querying by tags, streamlining company management in Codat. This feature lets you retrieve companies based on specific criteria.

<!--truncate-->

## What's new?

You can now use the `tags` query parameter on the [*List companies*](/platform-api#/operations/list-companies) endpoint to filter by one or more tags assigned to your companies. The `tags` query parameter supports the following operators, using [Codat’s query language](https://docs.codat.io/using-the-api/querying):

- Equals (`=`)
- Not equals (`!=`)
- Contains (`~`)

Here is a query example that returns a specific company by a customer ID:

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const result = await platformClient.companies.list({
    tags:`uid=${customerId}`,
  });
```
</TabItem>

<TabItem value="python" label="Python">

```python
res = platform_client.companies.list(operations.ListCompaniesRequest(
    tags=f'uid={customerId}'
))
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var res = await platformClient.Companies.ListAsync(new() {
    Tags = $"uid={customerId}",
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
res, err := platformClient.Companies.List(ctx, operations.ListCompaniesRequest{
    Tags: platform.String(fmt.Sprintf("uid=%d", customerId)),
})
```
</TabItem>

<TabItem value="java" label="Java">

```java
ListCompaniesRequest req = ListCompaniesRequest.builder()
  .tags(String.format("uid=%d", customerId))
  .build();

ListCompaniesResponse res = platformClient.companies().list()
  .request(req)
  .call();
```
</TabItem>

</Tabs>

## Who is this relevant for?

This feature is ideal for anyone looking to find companies based on their customer ID or to access a group of companies categorized by the products or services you provide.

## How to get started?

1. Enrich company records with tags using the [Create company](/platform-api#/operations/create-company) or [Update company](https://docs.codat.io/platform-api#/operations/update-company) endpoints. See [Add metadata to a company](/using-the-api/managing-companies#add-metadata-to-a-company).
2. Filter companies using the `tags` query parameter on the [List companies](/platform-api#/operations/list-companies) endpoint. See [Filter companies by metadata](/using-the-api/managing-companies#filter-companies-by-metadata).
