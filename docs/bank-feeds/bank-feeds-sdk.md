---
title: "Bank Feeds SDK"
description: "See how your can simplify the deployment of the Bank Feeds product with our Bank Feeds SDK"
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { IntegrationsList } from "@components/Integrations";
import {
  bankfeedsExternalMappingIntegrations,
  bankfeedsIntegrations,
} from "@components/Integrations/integrations";

Building and launching a best-in-class bank feeds solution has never been easier than with our new Bank Feeds SDK.

![Bank Feeds SDK features](/img/updates/bank-feeds-bento.png)

## Overview

Our new [Bank Feeds SDK](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types) brings together all the complex pieces required to create a simple Bank Feeds setup experience.

It leverages our [Link SDK](/auth-flow/authorize-embedded-link) to allow your users to quickly and securely share access to their accounting software. It also enables them to set up the mapping between your accounts and the accounts in their software in one seamless flow.

All of this is included in a single low-code JavaScript component (available on [NPM](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types)). Its rich configuration properties allow your application to interact with the SDK and customize text and branding in a way that creates a trusted and compelling user experience.

Codat supports this by providing easier creation of many source accounts at once via our new batch [Create source accounts](/bank-feeds-api#/operations/create-batch-source-account) endpoint.

## Process flow

Once your user initiates the bank feeds setup process, engage our SDK in your application to establish the feed in a few easy steps:

1. Call the [Create a company](/bank-feeds-api#/operations/create-company) endpoint to create a representation of your customer in Codat.
2. Get an access token for this company by calling the [Get company access token](/platform-api#/operations/get-company-access-token) endpoint.
3. Initialize the Bank Feeds SDK in your application, passing the access token to the component for authorization.

   The SDK will direct your customer to select their accounting software and will automatically create a [data connection](/core-concepts/connections) for that software in response. Customer's software selection will trigger the SDK's `onConnectionStarted` callback function.

4. Use the SDK's `onConnectionStarted` callback function to call the [Create source accounts](/bank-feeds-api#/operations/create-batch-source-account) endpoint and create a representation of your customer's bank accounts in Codat.

   The SDK will direct your customer to authorize the connection to their software and map these source accounts to the relevant accounts in that software. Successful completion of the authorization and mapping steps till trigger the SDK's `onFinish` callback function.

5. Use the SDK's `onFinish` callback function to manage the completion of the bank feeds setup flow once the accounts are mapped.

If your user authorizes your access to their data but doesn't complete the accounts setup, we'll bring them back to the mapping step of the flow when they return. Once they're fully set up, you can use this component to allow them to reconfigure their accounts or set up additional accounts.

We also recommend using our [Connections SDK](/auth-flow/optimize/connection-management) to allow users to reauthorize or revoke your access to their accounting software. Providing your customers with this control is mandated by integration partners.

## Get started

You can access the SDK on [NPM](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types). We recommend all clients already using our [Bank Feeds](/bank-feeds/overview) product to migrate to the Bank Feeds SDK.

##### NPM

```sh
npm add @codat/sdk-bank-feeds-types
```

##### Yarn

```sh
yarn add @codat/sdk-bank-feeds-types
```

Create a component which initializes the SDK:

```react
  import React, { useEffect, useState } from "react";
  import ReactDOM from "react-dom/client";
  import { CodatBankFeedsProps, initializeCodatBankFeeds } from "@codat/sdk-bank-feeds-types";

  const CodatBankFeeds: React.FC<CodatBankFeedsProps> = (props: CodatBankFeedsProps) => {
    const [componentMount, setComponentMount] = useState<HTMLDivElement | null>(
      null
    );

    useEffect(() => {
      const target = componentMount;
      if (target && target.children.length === 0) {
        initializeCodatBankFeeds(target, props);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [componentMount]);

    return (
      <div ref={setComponentMount}/>
    );
  };
```

Use the component in your solution as needed:

```react
   <CodatBankFeeds
    accessToken="ACCESS_TOKEN"
    companyId="COMPANY_ID"
    onClose={() => alert("onClose")}
    onError={() => alert("onError")}
    onConnection={() => alert("onConnection")}
    onConnectionStarted={() => alert("onConnectionStarted")}
    onFinish={() => alert("onFinish")}
    options={{}}
  />
```

---

## Read next

- [Create the key elements](/bank-feeds/create-account) of the Codat infrastructure required to establish a bank feed.
