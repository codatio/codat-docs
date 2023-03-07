---
title: "Welcome to the demo app guide"
description: "  " 
---

:::tip Who is this guide for?

This guide is for developers. We assume you are a tech-savvy backend developer and know how to use an API. No frontend experience is needed.

:::

### Overview

🎯 Codat makes underwriting easier by getting you trusted data with which to check a loan applicant’s finances. With our demo app, you will experience the end-to-end underwriting process flow with automatic decision-making supported by Codat's [Assess](/assess/overview) product. We will focus on the lender's perspective. 

⏳ Estimated time to complete: X minutes

🛠️ The demo project is implemented in [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) as a backend API. We also recommend using [ngrok](https://ngrok.com/) for exposing services from a local server to the public Internet. You can configure and run the demo app in the terminal, or use your preferred IDE or code editor.

### What this guide covers

✔️ Explore the guide and the demo app to:

- Create a test company via Codat’s API and submit an example loan application form,
- Access and fetch test financial data using Codat’s Enhanced Profit and Loss and Enhanced Balance Sheet endpoints,
- Use Codat’s webhooks to trigger the underwriting of a loan,
- Produce an automated underwriting decision based on custom financial data points. 

❌ This guide does not cover: 

- Building any application form and dashboard UIs,
- Details or recommendations of various financial data points used in different underwriting models.

### Why we use _Assess_

The demo app makes use of the categorization feature of [Assess](/assess/overview). It assigns a category to each account in the company's chart of accounts, thus standardizing the data irrespective of its source. 

In turn, this helps you make a comprehensive assessment of your customer's financial health, produce additional insights (e.g. calculate financial ratios), and automate decisioning based on these insights. 

### About the demo app

Clone our underwriting demo repository on [GitHub](https://github.com/codatio/build-guide-underwriting-be). 

To run the demo app, you need to have an account with Codat, enable the Assess product, and get your API key to use it in the demo app. You also need a way to access remote systems from your locally hosted server. We will take you through these steps in detail when [setting up the demo app](/underwriting/setting-up). 

### What's next

Now that you know the focus and purpose of our demo app and its guide, go ahead and [set up Codat and your local environment](/underwriting/setting-up).