---
title: "Overview"
description: "Explore how to build a consent journey for your customers"
---

:::tip Auth flow docs

See the full docs on our [customer authorization here](https://docs.codat.io/auth-flow/overview).
:::


Authorization is a key part of any Codat solution - every Company must authorize access to their data before you can pull that data. A frictionless and reassuring auth flow is essential for accessing your SMB customers' data.

This solution's primary purpose is to streamline customer consent processes specifically related to sharing various data types, including accounting, banking, and commerce data. You will aim to create a modular framework that can be applied across different banking functions and user experiences, such as onboarding and loan applications.


## Overview

View full steps and endpoints required [here](https://docs.codat.io/auth-flow/build/build-your-own-authorization-journey).

![](/img/enterprise/implementation/consent/authjourney.png)

### Onboarding options

There are two options to onboard new customers onto packages. We break these down further on the [build options page](/enterprise/tech-implementation/consent/build).

#### **Option 1:**
Codat has built an SDK, which can be deployed within a front-end UI.

The component works with all major JavaScript frameworks, including React, and also with vanilla JavaScript. You can choose to implement the component in TypeScript.

#### **Option 2:**
Codat provides a series of API endpoints that allow financial service providers to fully embed the authentication journey within your digital application journeys. 

These APIs can be called to set up a customer within Codat’s instance, and set up the connection to the applicable integration(s).



<details>
<summary><b>FAQ</b></summary>

**What is a link process?**

The link process is the mechanism by which your existing and prospective customers securely share their financial data with you. This provides benefits for both the SME linking, and you as the financial services provider. 

**What is the first step in building a bespoke authentication flow using Codat? (Option 1)**

The first step is to create a Codat company for a user when they sign up for your app. This allows you to track their connection status from the beginning using `POST /Companies`.

**How should users enter their 3rd party credentials to authorize a connection? (Option 1)**

Users should be directed to enter their credentials on the `linkUrl` found in the response after creating a data connection for the selected integration.

**How does Codat secure the connection with the underlying packages?**

Codat uses OAuth 2.0 to facilitate the consent and authentication process between Codat and each accounting and/or banking package.

**How does the user login?**

Each accounting package has a slightly different login & consent experience. In general, cloud-based packages require a username and password login once they user has been redirected.

**What happens when a customer connects?**

When a customer connects, Codat will start extracting and caching relevant data types. This process will likely take a few minutes but will depend on the amount of historical data being extracted.

**How does Codat highlight a completed sync?**

Codat generates a webhook once a data sync has been completed. A webhook can be set up to trigger for specific data types or once all data-types have synced.

**How can users manage their ongoing connections and revoke access to platforms?**

It is recommended that a ‘Manage Connections’ UI is built, which can link to Codat’s underlying platform API endpoints, such as the ability to sever a connection via `PATCH /Connection`.

</details>



