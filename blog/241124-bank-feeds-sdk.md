---
title: "Launch your bank feed faster with Bank Feeds SDK"
date: "2024-11-24"
tags: ["Product", "Update", "Bank Feeds"]
authors: mcclowes
---

Building and launching a best-in-class bank feeds solution has never been easier than with our new Bank Feeds SDK.

<!--truncate-->

![Bank Feeds SDK features](/img/updates/bank-feeds-bento.png)

## What's new?

Our new [Bank Feeds SDK](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types) brings together all the complex pieces to create a simple Bank Feeds setup experience.

It leverages our [Link SDK](auth-flow/authorize-embedded-link) to allow your users to quickly and securely share access to their accounting software. It also enables them to set up the mapping between your accounts and the accounts in their software in one seamless flow.

All of this is included in a single [low-code JavaScript component](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types). Our rich configuration properties allow your application to interact with the SDK and customize text and branding in a way that creates a trusted, compelling experience.

This is supported by easier creation of many source accounts at once via our new batch [Create source accounts](/bank-feeds-api#/operations/create-batch-source-account) endpoint.

## The flow

Once your user initiates the bank feeds setup process, engage our SDK to establish the feed in a few easy steps:

1. Call the [Create a company](/bank-feeds-api#/operations/create-company) endpoint to create a representation of your customer in Codat.
2. Get an access token for this company by calling the [Get company access token](/bank-feeds-api#/operations/get-company-access-token) endpoint.
3. Initialize the Bank Feeds SDK, passing the access token to the component. The SDK will direct your customer to select their accounting software and authorize access to it.
4. Use the SDK's `onConnection` callback function prop to call the [Create source accounts](/bank-feeds-api#/operations/create-batch-source-account) endpoint once authorized. The SDK will redirect your customer to map these source accounts to the relevant accounts in their accounting platform.
5. Use the SDK's `onFinish` callback function to manage the completion of the bank feeds setup flow once the accounts are mapped. 

If your user authorizes your access but doesn't complete the accounts setup, we'll bring them straight back to where they left off when they return to the flow. Once they're fully set up, you can use this component to allow them to reconfigure their accounts or set up additional accounts. 

We also recommend using our [Connections SDK](/auth-flow/optimize/connection-management) to allow users to reauthorize or revoke your access to their accounting software. Providing your customers with this control is mandated by integration partners.

## How to get started?

You can access the SDK on [NPM](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types). We recommend all clients already using our [Bank Feeds](/bank-feeds/overview) product to migrate to the Bank Feeds SDK. 

First, create a component which initializes the SDK:

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

Then use the component in your solution as needed:

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
