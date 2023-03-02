---
title: "Demo app guide overview"
description: "Goals, purpose, and structure of Codat's underwriting demo app guide"
---

:::tip Who is this demo app guide for?

Codat's demo app guides are for our developer users. We assume you are a tech-savvy backend developer and know how to use an API. No frontend experience is needed.
:::

## Summary

In simple terms, underwriting means checking an applicant’s finances to make a decision on their loan request. With the demo app, you experience the end-to-end underwriting process flow with automatic decision-making supported by Codat's [Assess](/assess/overview) product, with focus on the lender's perspective. 

:hourglass_flowing_sand: Estimated time to complete: X minutes

🛠️ The demo project is implemented in [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) as a backend API. We also recommend using [ngrok](https://ngrok.com/) for exposing services from a local server to the public Internet. You can configure and run the demo app in the terminal, or use your preferred IDE or code editor.

## Outcomes

🥅 With this build guide, we will explain how a lender can use Codat to automate the underwriting decision-making using our [Assess](/assess/overview) product against the end-to-end lending process. We will also guide you with a demo project, where you can see underwriting with Codat in action using our Sandbox integration data. 

✔️ Explore our demo project to:

- Create a test company via Codat’s API and submit an example loan application form,
- Access and fetch test financial data using Codat’s Enhanced Profit and Loss and Enhanced Balance Sheet endpoints,
- Use Codat’s webhooks to trigger the underwriting of a loan,
- Produce an automated underwriting decision based on custom financial metrics. 

❌ This guide does not cover: 

- Building a user interface to support the application form submissions and review of the application’s underwriting status,
- Details or recommendations of various financial metrics used in different underwriting models.

## Why use Assess

Assess is built on top of the latest accounting, commerce and banking data, providing you with the most important data points you need to get a full picture of SMB creditworthiness, and make a comprehensive assessment of your customers.

We have done the heavy lifting for you by building integrations to the platforms your customers already use, handling the complexity of standardization and now providing pre-calculated accounting and commerce metrics and easily digestible insights that you didn’t have before, helping you automate and make smarter risk assessments.

he chart of accounts defines the financial structure of a company by providing a list of all accounts used in the company's general ledger.

Every account is assigned one of Codat’s 162 categories. This allows Codat to produce insights about your SMB customers irrespective of the accounting data source they use. The assigned categories apply in the Codat platform only, not in the accounting data source.

## Running the demo project

Pick up our underwriting demo repository on [GitHub](https://github.com/codatio/build-guide-underwriting-be) and clone it. 

To run the demo app, you need to have an account with Codat, enable the Assess product, and get your API key to use it in the demo app. You also need a way to access remote systems from your locally hosted server. We will take you through these steps in detail when [setting up the solution](/underwriting/setting-up). 

## Recap

Now that you know the focus and purpose of our demo app and its guide, continue on to [set up Codat and your local environment](/underwriting/setting-up).