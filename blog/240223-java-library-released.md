---
title: "Java client libraries now available"
date: "2024-02-23"
tags: ["Product", "Update"]
authors: dcoplowe
---

import ClientLibraries from '@components/global/ClientLibraries';

We are excited to announce the release of Java client libraries for our product suite.

<!--truncate-->

Our Java libraries simplify integration, save time, and provide well-documented code bases for easy use across multiple services.
Each library includes robust error handling, stays updated with the latest features, and enhances the reliability, productivity, and flexibility of your development projects.

For example, this is how easy it is to create a company:

```java
CompanyRequestBody req = CompanyRequestBody.builder()
  .name("Bank of Dave")
  .description("Requested early access to the new financing scheme.")
  .build();

CreateCompanyResponse res = sdk.companies().create()
  .request(req)
  .call();
```

## Available libraries    

- [Bank Feeds API](https://github.com/codatio/client-sdk-java/tree/main/bank-feeds)
- [Lending API](https://github.com/codatio/client-sdk-java/tree/main/lending)
- [Sync for Commerce](https://github.com/codatio/client-sdk-java/tree/main/sync-for-commerce)
- [Sync for Expenses](https://github.com/codatio/client-sdk-java/tree/main/sync-for-expenses)
- [Sync for Payables](https://github.com/codatio/client-sdk-java/tree/main/sync-for-payables)
- [Sync for Payroll](https://github.com/codatio/client-sdk-java/tree/main/sync-for-payroll)
- [Platform](https://github.com/codatio/client-sdk-java/tree/main/platform)


## Other available languages

Codat offers official SDK client libraries for different programming languages, which are regularly updated for breaking and non-breaking API changes. These client libraries are generated from our [OpenAPI specification](https://github.com/codatio/oas).

Read our documentation for [more information on client libraries](/get-started/libraries) and other supported languages.
<ClientLibraries/>
