---
title: "Build guide overview"
description: "Key goals, purpose, and structure of Codat's underwriting build guide"
---

:::tip Who is this guide for?

Codat's build guides are for our developer users. We assume you are technically savvy and know how to use an API.
:::

## Summary

:dart: This guide lets you experience the end-to-end underwriting process flow, both as an applicant and as a lender, and understand the key steps of building an underwriting application supported by Codat's [Assess](/assess/overview) product.

:hourglass_flowing_sand: Estimated time to complete: X minutes

:hammer: The project is implemented in [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) as a backend API.

## Key targets

In simple terms, underwriting means checking an applicant’s finances to make a decision on their loan request. 

With this build guide, we will explain how a lender can use Codat to automate the underwriting decision-making using our [Assess](/assess/overview) product against the end-to-end lending process. We also provide you with a demo project, where you can see underwriting with Codat in action using our Sandbox integration data. 

✔️ Explore our demo project to:

- Create a test company via Codat’s API and submit an example loan application form,
- Access and fetch test financial data using Codat’s Enhanced Profit and Loss and Enhanced Balance Sheet endpoints,
- Use Codat’s webhooks to trigger the underwriting of a loan,
- Produce an automated underwriting decision based on custom financial metrics. 

❌ This guide does not cover: 

- Building a user interface to support the application form submissions and review of the application’s underwriting status,
- Details or recommendations of various financial metrics used in different underwriting models.

## Running the demo project

Pick up our underwriting demo repository on [Github](https://github.com/codatio/build-guide-underwriting-be) and clone it. 

To run the demo app, you need to have an account with Codat, enable the Assess product, and get your API key to use it in the demo app. You also need a way to access remote systems from your locally hosted server. We will take you through these steps in detail when [setting up the solution](/underwriting/setting-up). 

### Directory structure

The main file directory for the demo app is `Codat.Demos.Underwriting.Api`. Key logic components of the app are located in `Controllers`, `Orchestrator`, and `Services` folders.

Note that the other directory in the repository, `Codat.Demos.Underwriting.Api.Tests`, contains a series of unit tests for the demo app and is not needed for you to run the demo project. 

```json title="Codat.Demos.Underwriting.Api"
├──BindingModule.cs
├──Codat.Demos.Underwriting.Api.csproj
├──Program.cs
├──appsettings.Development.json
├──appsettings.json // Maintain your API key and desired underwriting thresholds in this file
|   
├──Controllers // Controllers for the API endpoints to manage expected actions and results
|    ├──UnderwritingController.cs // Front-end endpoint controller
|    └──WebhooksController.cs     // Back-end endpoint controller
|       
├──DataClients // A service to make API calls to Codat
|    └──CodatDataClient.cs
|       
├──Exceptions // Definitions for managing error events 
|    ├──ApplicationOrchestratorException.cs
|    ├──ApplicationStatusStoreException.cs
|    ├──ApplicationStoreException.cs
|    ├──CodatDataClientException.cs
|    ├──ConfigurationMissingException.cs
|    ├──LoanUnderwriterException.cs
|    └──StreamHelperException.cs
|       
├──Extensions // Used to add new methods to the IEnumerable class
|    └──CollectionExtensions.cs
|       
├──Models // Represent the shape of data that will be returned to the user
|    ├──Application.cs
|    ├──CodatAlerts.cs
|    ├──CodatPaginatedResponse.cs
|    ├──Company.cs
|    ├──DataConnection.cs
|    ├──FinancialMetric.cs
|    ├──Platform.cs
|    ├──Report.cs
|    └──UnderwritingParameters.cs
|       
├──Orchestrators // Manages the six methods that relate to endpoints used in the app
|    └──ApplicationOrchestrator.cs
|       
├──Properties // IDE setup for http, https, and IIS Express profiles
|    └──launchSettings.json
|       
└──Services // Key application components that perform specified tasks
     ├──ApplicationStore.cs // Handles creating and storing the loan application in-memory
     └──LoanUnderwriter.cs  // Decision process method for the underwriting model used in the demo
```
### Read next

- [Setting up Codat and your local environment](/underwriting/setting-up)