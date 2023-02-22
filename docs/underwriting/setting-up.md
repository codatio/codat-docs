---
title: "Setting up the solution"
description: "Write a description"
---

To begin building the underwriting demo app, make the following preparations:

## Setting up in the Codat Portal

<input type="checkbox" unchecked /> <b>Create a free Codat account</b>  

We provide a [free account](https://signup.codat.io/) that lets you explore and test our APIs and other products, including Assess. It also comes equipped with a sample company. 

You will not be charged when using the account for this demo project. 

<input type="checkbox" unchecked /> <b>Enable data types needed for underwriting</b> 

Log in to the [Codat Portal](https://app.codat.io/) and click on the **Settings** tab in the top menu. Then, navigate to **Integrations > Data types** and make sure that `balanceSheet` and `profitAndLoss` accounting data types are set to fetch on first link. If you don’t have these data types enabled, the Assess product will not work in this demo. 

<input type="checkbox" unchecked /> <b>Check your auth flow settings</b>  

In the [Codat Portal](https://app.codat.io/), click on the **Settings** tab in the top menu. Then, navigate to **Auth flow > Link**. Scroll down to _Integration categories_ and ensure _Accounting_ integration category is enabled, and _Sandbox integrations_ switch is toggled on. 

<input type="checkbox" unchecked /> <b>Enable the Assess product</b>  

Log in to the [Codat Portal](https://app.codat.io/) and click on the **Settings** tab in the top menu. Select **Organization settings**, then **Products**. Find **Assess** in the list of proudcts and toggle the switch to enable it.

## Setting up your local environment

:::info Demo app
Perform these steps if you plan to explore our sample project and run the demo app.
:::

