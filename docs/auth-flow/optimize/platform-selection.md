---
title: "Platform selection"
description: "Streamline the platform selection flow to increase conversion"
createdAt: "2022-06-16T06:35:34.305Z"
updatedAt: "2022-10-20T15:24:34.963Z"
---

The platform selection stage is the pivotal moment where your customers need to easily find the software they use and are ready to connect. Getting this right is critical to give your customers the best chance of connectivity.

:::info Why this matters
The action that most positively correlates to a successful connection is a user clicking a platform/integration name card, with a **50% increase of conversion** if done. This is the result of a well-executed platform selection flow.
:::

## Explain what is about to happen

For example, let them know that upon platform selection they will be redirected to a 3rd third-party website to enter their credentials to authenticate and authorize data access, and once they have done so they will be redirected to your app.

## Group available integrations by category

The available integrations should be grouped by category when there are multiple types available to connect, making it easy for the user to determine identify and connect their accounts. For example:

- Accounting data
- Commerce data (which may be more useful to refer to as "Revenue", "Revenue streams" or similar depending on the terminology used in your product)
- Banking data (or "Bank Accounts" in the context of "Connect your bank accounts")

## Use accurate integration branding

To establish a sense of familiarity and certainty in users, make sure you show the correct name and logo of integration, as well as the website address that users navigate to when using their software.

We recommend [using the assets provided by Codat](https://docs.codat.io/docs/build-your-own-authorization-journey#step-2-display-a-list-of-integrations-for-your-users-to-select-including-the-integration-name-and-logo) as they meet the requirements of the supported integrations.

:::caution

Make sure to show the full integration name to avoid confusion i.e. QuickBooks Online vs QuickBooks Desktop, Sage Business Cloud Accounting vs Sage Intacct.
:::

## Include a search function

Allow integrations to be searched via a search bar, especially if you can’t display them on one screen.

## Provide alternatives to selecting a platform

Ensure you handle the 'unhappy' path in the scenario when a user can’t find their platform in the provided list. For example, if a user’s platform is not available, offer a way to share their data via uploading files.

## Build a non-linear flow

In many organizations, different people are stewards of the different platforms used within their business. This means that the person viewing your connection journey may not have the rights or know the login details to the software being asked to connect. You should therefore give them the ability to pause the flow until they get the necessary input or share the flow with other users.

If your use case allows or requires multiple connections, ensure the user can navigate and view different integrations at any point, creating a ‘stateless’ view. This is important as it gives the freedom for users to choose what they want to connect and when they want to do it.

## Handle multiple connections

Ensure there is a way to add multiple connections if your use case will benefit from this or requires multiple connection types i.e. including an ‘Add another’ button in the same view. In addition, it is helpful to:

- Show the status of existing connections e.g. showing ‘Connected ✔️' against the connected platform’s name and logo
- Highlight previously selected platforms that are pending authorization

See [here](https://docs.codat.io/docs/authorize-hosted-link#managing-existing-users-with-pending-connections) for more detail on connections with a `pendingAuth` status and [here](https://docs.codat.io/docs/querying-1#for-companies-whose-status-is-pending-with-data-connection-established) on creating a query to find these companies.

:::info
[Using Codat's Link for authorization](https://docs.codat.io/docs/auth-flow) allows you to:

- Communicate to build trust with your customers by specifying the messaging that appears on the left panel
- Require an action to consent to data sharing
- Provide various support contact details

To read more about different ways to customize Link, read [Customize your Link](https://docs.codat.io/docs/set-up-link).

You can also [build your own authorization journey](https://docs.codat.io/docs/build-your-own-authorization-journey).
:::
