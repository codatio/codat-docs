---
title: "C# client libraries now available"
date: "2023-09-12"
tags: ["Product", "Update"]
authors: dcoplowe
---

We are excited to announce the release of C# client libraries for our new product suite.

<!--truncate-->

```csharp
using Codat.Lending;

var company = await codatClient.Companies.CreateAsync(new(){
    Name = "Bank of Dave"
});

logger.LogInformation("{Id}: {Name}, company.Id, company.Name);

```
---

Our suite of C# client libraries simplifies integration, saves time, and provides well-documented code bases for easy use across multiple services.
Each library includes robust error handling, stays updated with the latest features, and enhances the reliability, productivity, and flexibility of your development projects.

## Available libraries    

- [Bank Feeds API](https://github.com/codatio/client-sdk-csharp/tree/main/bank-feeds)
- [Lending API](https://github.com/codatio/client-sdk-csharp/tree/main/lending)
- [Sync for Commerce](https://github.com/codatio/client-sdk-csharp/tree/main/sync-for-commerce)
- [Sync for Expenses](https://github.com/codatio/client-sdk-csharp/tree/main/sync-for-expenses)
- [Sync for Payables](https://github.com/codatio/client-sdk-csharp/tree/main/sync-for-payables)
- [Sync for Payroll](https://github.com/codatio/client-sdk-csharp/tree/main/sync-for-payroll)
- [Platform](https://github.com/codatio/client-sdk-csharp/tree/main/platform)

--- 
[Click here](/get-started/libraries) for more information on client libraries and other supported languages.