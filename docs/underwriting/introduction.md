---
title: "Welcome to the demo app guide"
description: "Goals, purpose, and structure of Codat's underwriting demo app guide"
---

:::tip Who is this guide for?

Codat's demo app guides are for our developer users. We assume you are a tech-savvy backend developer and know how to use an API. No frontend experience is needed.
:::

## Overview

🎯 In simple terms, underwriting means checking an applicant’s finances to make a decision on their loan request. With the demo app, you will experience the end-to-end underwriting process flow with automatic decision-making supported by Codat's [Assess](/assess/overview) product. We will focus on the lender's perspective. 

⏳ Estimated time to complete: X minutes

🛠️ The demo project is implemented in [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) as a backend API. We also recommend using [ngrok](https://ngrok.com/) for exposing services from a local server to the public Internet. You can configure and run the demo app in the terminal, or use your preferred IDE or code editor.

## What this guide covers

✔️ Explore the guide and the demo app to:

- Create a test company via Codat’s API and submit an example loan application form,
- Access and fetch test financial data using Codat’s Enhanced Profit and Loss and Enhanced Balance Sheet endpoints,
- Use Codat’s webhooks to trigger the underwriting of a loan,
- Produce an automated underwriting decision based on custom financial metrics. 

❌ This guide does not cover: 

- Building a user interface to support the application form submissions and review of the application’s underwriting status,
- Details or recommendations of various financial metrics used in different underwriting models.

## Why we use Assess

The demo app makes use of the categorization feature of Assess. It assigns a category to each account in the company's chart of accounts, thus standardizing the data irrespective of its source. 

In turn, this helps you make a comprehensive assessment of your customer's financial health, produce additional insights (e.g. calculate financial ratios), and automate decisioning based on these insights. 

## About the demo app

Pick up our underwriting demo repository on [GitHub](https://github.com/codatio/build-guide-underwriting-be) and clone it. 

To run the demo app, you need to have an account with Codat, enable the Assess product, and get your API key to use it in the demo app. You also need a way to access remote systems from your locally hosted server. We will take you through these steps in detail when [setting up the solution](/underwriting/setting-up). 

## Recap

Now that you know the focus and purpose of our demo app and its guide, continue on and [set up Codat and your local environment](/underwriting/setting-up).