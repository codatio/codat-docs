---
title: "Usage and billing"
sidebar_label: Usage and billing
draft: true
description: "Monitor your Codat usage and the corresponding billing figures to stay in control of your expenses"
---

### Dashboard

Use the dashboard on the Portal's [home page](https://app.codat.io/) for a real-time, high-level view of the following details:
- Overall number of created companies
- Number of companies that have been active in the current billing period
- A quantitative breakdown of the companies' connection statuses 

:::tip Active company

Active companies represent your customer connections where you have successfully read or written data within a specific billing period.
:::

## Start-up plan

### Detailed usage view

If you are signed up to Codat's start-up plan, you can view detailed usage and billing information, including monetary amounts associated with your specific experience, by navigating to **Settings > Organization settings > Billing** in the [Codat Portal](https://app.codat.io/settings/billing). 
The **Plans** tab provides you with a summary view of your current [plan](https://www.codat.io/plans/), a list of your enabled products, and a preliminary billing total for the current billing period based on your usage to date. 

The **Usage** tab shows the active companies associated with your account and their impact on your expected billing totals. You can examine the companies that were active in the selected billing period, view this data in a graph form, and check how the number of active companies influences the amount of your predicted charge. You can also compare your usage and cost across periods by selecting a different **Billing range**. 

![](/img/other-guides/0002-usage-billing-page.png)

:::tip Sandbox connections

Active companies that are connected only to Codat Sandbox or QuickBooks Online Sandbox are excluded from billing.
:::

### Test client creation

When you upgrade to our start-up plan, we clone details from your existing client to automatically create a test instance for you. You can use it to test your solution before go-live or validate that your live solution is performing as expected. [Learn more](/using-the-api/testing) about client cloning, possible testing approaches, and our recommendations.

To see the new client once it's been created, you will need to reauthenticate. Log out and log back in if you are using Portal, or get a new token if you are using our APIs.

:::info Active company limit

Test clients are limited to 50 active connected companies and are not included in the billing. 

:::