---
title: "Filter companies by tags"
date: "2024-11-25"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The *List companies* endpoint now supports querying by tags, streamlining company management in Codat. This feature lets you retrieve groups of companies or even a specific company using your customer ID.

<!--truncate-->

## What's new?

You can now use the [*List companies*](/platform-api#/operations/list-companies) endpoint to filter by one or more tags assigned to your companies. The tags query parameter supports the following operators with [Codat’s query language](https://docs.codat.io/using-the-api/querying):

- Equals (`=`)
- Bot equals (`!=`)
- Contains (`~`)

For example, to retrieve a specific company using your customer ID:

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

This feature is ideal for anyone looking to find companies based on their customer ID or to access a cohort or group of companies categorized by the products or services you provide.

## How to get started?

1. Begin tagging companies using the create or update company endpoints. [Learn more](/using-the-api/managing-companies#add-metadata-to-a-company).
2. Filter companies using the *List companies* endpoint. [Learn more](/using-the-api/managing-companies#filtering-companies-by-metadata).