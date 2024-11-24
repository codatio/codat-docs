---
title: "Launch your bank feed faster with Bank Feeds SDK"
date: "2024-11-24"
tags: ["Product", "Update", "Bank Feeds"]
authors: mcclowes
---

Building and launching a best-in-class bank feeds has never been easier than with our new Bank Feeds SDK.

<!--truncate-->

![Bank Feeds SDK features](/img/updates/bank-feeds-bento.png)

## What's new?

Our new [Bank Feeds SDK](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types) brings together all the complex pieces of creating a simple Bank Feeds setup experience.

It allows your users to securely share access to their accounting software (through our [Link SDK](auth-flow/authorize-embedded-link)) and set up the mapping between your accounts and the relevant ones in their software in one seamless flow.

All of this is included in a single [low-code JavaScript component](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types). Our rich config props allow your application to interact with the SDK and customize text and branding to create a trusted, compelling experience.

This is supported by easier creation of source accounts via our new [batch source accounts endpoint](https://docs.codat.io/bank-feeds-api#/operations/create-batch-source-account) allowing you to create many source accounts at once.

## The flow

1. Your user clicks that they want to set up bank feeds
2. [Create a company](https://docs.codat.io/bank-feeds-api#/operations/create-company) for their business
3. [Get an access token](https://docs.codat.io/platform-api#/operations/get-company-access-token) for that company
4. Initialize the Bank Feeds SDK (passing in the access token)
5. You user selects their accounting software and authorizes
6. Use the `onConnection` callback function prop to [create source accounts](https://docs.codat.io/bank-feeds-api#/operations/create-batch-source-account) at the right time
7. Your user is redirected to map these source accounts to the relevant accounts in their accounting platform.
8. Use the `onFinish` callback function

If your user authorizes but doesn't complete setup, we'll bring them straight back to where they left off.

Once they're fully set up, you can use this component to allow them to reconfigure their accounts or set up any additional accounts. 

You should also use our [Connection SDK](http://localhost:3000/auth-flow/optimize/connection-management) to allow users to reconnect or disconnect access to their accounting software. This is mandated by integratino partners.

## How to get started?

You can access the SDK on [NPM](https://www.npmjs.com/package/@codat/sdk-bank-feeds-types).

You should create a component which initializes the compoenent:

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

Then you can then use that component where needed:

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