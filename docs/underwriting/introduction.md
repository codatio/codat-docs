---
title: "Build guide overview"
description: "Key goals, purpose, and structure of Codat's underwriting build guide"
---

:::tip Who is this guide for?

Codat's build guides are for our developer users. We assume you are tech-savvy and know how to use an API.
:::

you are  abe developer
no fe is needed


## Summary

:dart: This guide lets you experience the end-to-end underwriting process flow, both as an applicant and as a lender, and understand the key steps of building an underwriting application supported by Codat's [Assess](/assess/overview) product.

Will point out the steps your customer will take, but the focus is the lender.

:hourglass_flowing_sand: Estimated time to complete: X minutes

:hammer: The accompanying demo project is implemented in [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) as a backend API.

## Outcomes

In simple terms, underwriting means checking an applicant’s finances to make a decision on their loan request. 

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

## Running the demo project

Pick up our underwriting demo repository on [GitHub](https://github.com/codatio/build-guide-underwriting-be) and clone it. 

To run the demo app, you need to have an account with Codat, enable the Assess product, and get your API key to use it in the demo app. You also need a way to access remote systems from your locally hosted server. We will take you through these steps in detail when [setting up the solution](/underwriting/setting-up). 

## Read next

- [Setting up Codat and your local environment](/underwriting/setting-up)