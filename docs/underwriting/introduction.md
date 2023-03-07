---
title: "Welcome to the demo app guide"
description: "  " 
---

:::tip Who is this guide for?

This guide is for tech-savvy backend developers who know how to use an API. No frontend experience is needed.

:::

### Overview

🎯 Codat makes underwriting easier by getting you trusted data with which to check a loan applicant’s finances. With our demo app, you will experience the end-to-end underwriting process flow with automatic decision-making supported by Codat's [Assess](/assess/overview) product. We will focus on the lender's perspective. 

⏳ Estimated time to complete: X minutes

🛠️ The demo project is implemented in [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) as a backend API. You can configure and run the demo app in the terminal, or use your preferred IDE or code editor.

### ✔️ Delve into the demo app to...

- Create and submit an example loan application form,
- Create a test company via Codat’s API to represent the borrower,
- Link the test company to Codat's sandbox source of financial data,
- Fetch that data using Codat’s Enhanced Profit and Loss and Enhanced Balance Sheet endpoints,
- Use Codat’s webhooks to trigger the underwriting of a loan,
- Produce an automated underwriting decision based on custom financial data points. 

### ❌ This guide does not cover...

- Building any application form and dashboard UIs,
- Details or recommendations of various financial data points used in different underwriting models.

### About the demo app

The app's codebase is available via our [GitHub repo](https://github.com/codatio/build-guide-underwriting-be). Clone it locally to try out the application.

The codebase uses Codat and its [Assess](/assess/overview) product to make an underwriting decision. We will walk you through the setup in the Portal and the code [next](/underwriting/setting-up). 

### Why we use _Assess_

The demo app makes use of the categorization feature of [Assess](/assess/overview). It assigns a category to each account in the company's full list of accounts, thus standardizing the data irrespective of its source. 

In turn, this helps you make a comprehensive assessment of your customer's financial health, produce additional insights (e.g. calculate financial ratios), and automate decisioning based on these insights. 

### Read next

Now that you know the focus and purpose of our demo app and its guide, take the next step:
* [Set up Codat and your local environment](/underwriting/setting-up).