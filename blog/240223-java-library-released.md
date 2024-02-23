---
title: "Java client libraries now available"
date: "2024-02-23"
tags: ["Product", "Update"]
authors: dcoplowe
---

import ClientLibraries from '@components/global/ClientLibraries';

We are excited to announce the release of Java client libraries for our new product suite.

<!--truncate-->

Our suite of Java client libraries simplifies integration, saves time, and provides well-documented code bases for easy use across multiple services.
Each library includes robust error handling, stays updated with the latest features, and enhances the reliability, productivity, and flexibility of your development projects.

For example, creating a company:

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


## All available languages

Codat offers official SDK client libraries for different programming languages, which are regularly updated for breaking and non-breaking API changes. These client libraries are generated from our [OpenAPI specification](https://github.com/codatio/oas).

<ClientLibraries/>

---
[Click here](/get-started/libraries) for more information on client libraries and other supported languages.