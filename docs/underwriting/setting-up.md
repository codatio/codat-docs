---
title: "Setting up for underwriting"
description: "Prepare your Codat instance and local environment for the underwriting app build"
---
## Setting up in the Codat Portal

<input type="checkbox" unchecked/> <b>Create a free Codat account</b>  

We provide a [free account](https://signup.codat.io/) that lets you explore and test our APIs and other products, including Assess. It also comes equipped with a sample company. 

:::tip Demo app: free account

You will not be charged when using the account for running the example underwriting project.

:::

<input type="checkbox" unchecked /> <b>Enable data types needed for underwriting</b>  

Log in to the [Codat Portal](https://app.codat.io/) and click on the **Settings** tab in the top menu. Then, navigate to **Integrations > Data types** and make sure that data types required by Assess that you intend to use in the underwriting logic are set to fetch on first link. 

:::tip Demo app: data types

To successfully complete an underwriting request using the demo project, make sure that `balanceSheet` and `profitAndLoss` accounting data types are set to fetch on first link. 

:::

<input type="checkbox" unchecked /> <b>Check your auth flow settings</b><br/>



In the [Codat Portal](https://app.codat.io/), click on the **Settings** tab in the top menu. Then, navigate to **Auth flow > Link**. Scroll down to _Integration categories_ and ensure _Accounting_ integration category is enabled, and _Sandbox integrations_ switch is toggled on. 

You may want to explore and customize Codat's [auth flow](/auth-flow/customize/customize-link) further as part of following this build guide, or working on an underwriting solution of your own.

<input type="checkbox" unchecked /> <b>Enable the Assess product</b>  


Log in to the [Codat Portal](https://app.codat.io/) and click on the **Settings** tab in the top menu. Select **Organization settings**, then **Products**. Find **Assess** in the list of products and toggle the switch to enable it.

## Setting up your local environment

:::info Demo app
Perform these steps if you plan to explore our sample project and run the demo app.
:::

