---
title: "C# client libraries now available"
date: "2023-09-12"
tags: ["Product", "Update"]
authors: dcoplowe
---


We are excited to announce the release of C# client libraries for our new product suite.

<!--truncate-->

Our suite of C# client libraries simplifies integration, saves time, and provides well-documented code bases for easy use across multiple services.
Each library includes robust error handling, stays updated with the latest features, and enhances the reliability, productivity, and flexibility of your development projects.

For example, creating a company:

```csharp
using Codat.Lending;

var company = await codatClient.Companies.CreateAsync(new(){
    Name = "Bank of Dave"
});

logger.LogInformation("{Id}: {Name}, company.Id, company.Name);

```

## Available libraries    

- [Bank Feeds API](https://github.com/codatio/client-sdk-csharp/tree/main/bank-feeds)
- [Lending API](https://github.com/codatio/client-sdk-csharp/tree/main/lending)
- [Sync for Commerce](https://github.com/codatio/client-sdk-csharp/tree/main/sync-for-commerce)
- [Sync for Expenses](https://github.com/codatio/client-sdk-csharp/tree/main/sync-for-expenses)
- [Sync for Payables](https://github.com/codatio/client-sdk-csharp/tree/main/sync-for-payables)
- [Sync for Payroll](https://github.com/codatio/client-sdk-csharp/tree/main/sync-for-payroll)
- [Platform](https://github.com/codatio/client-sdk-csharp/tree/main/platform)


## All available languages

Codat offers official SDK client libraries for different programming languages, which are regularly updated for breaking and non-breaking API changes. These client libraries are generated from our [OpenAPI specification](https://github.com/codatio/oas).

<ul className="card-container mini">
  <li className="card mini">
    <div className="card-row">
      <div className="header">
        <a href="https://github.com/codatio/client-sdk-csharp">
          <img
            src="/img/libraries/csharp.svg"
            className="icon usecase"
          />
        </a>
      </div>
      
      <div className="content">
        <h4>C#</h4>
        <p>
          <a href="https://github.com/codatio/client-sdk-csharp">Start using →</a>
        </p>    
      </div>
    </div>
  </li>
  <li className="card mini">
    <div className="card-row">
      <div className="header">
        <a href="https://github.com/codatio/client-sdk-typescript">
          <img
            src="/img/libraries/typescript.svg"
            className="icon usecase"
          />
        </a>
      </div>
      
      <div className="content">
        <h4>TypeScript</h4>
        <p>
          <a href="https://github.com/codatio/client-sdk-typescript">Start using →</a>
        </p>    
      </div>
    </div>
  </li>
  <li className="card mini">
    <div className="card-row">
      <div className="header">
        <a href="https://github.com/codatio/client-sdk-python">
          <img
            src="/img/libraries/python.svg"
            className="icon usecase"
          />
        </a>
      </div>
      
      <div className="content">
        <h4>Python</h4>
        <p>
          <a href="https://github.com/codatio/client-sdk-python">Start using →</a>
        </p>    
      </div>
    </div>
  </li>
  <li className="card mini">
    <div className="card-row">
      <div className="header">
        <a href="https://github.com/codatio/client-sdk-go">
          <img
            src="/img/libraries/go.svg"
            className="icon usecase"
          />
        </a>
      </div>
      
      <div className="content">
        <h4>Go</h4>
        <p>
          <a href="https://github.com/codatio/client-sdk-go">Start using →</a>
        </p>    
      </div>
    </div>
  </li>
</ul>

---
[Click here](/get-started/libraries) for more information on client libraries and other supported languages.