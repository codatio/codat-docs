---
title: "Overview"
description: "Explore how your customers can authorize access to their data"
createdAt: "2022-05-11T12:25:17.094Z"
updatedAt: "2022-11-23T13:57:58.076Z"
---

![Conceptual drawing of a lock and key](/img/old/b80d96c-19B0071C-0CCD-4423-8903-A979A32DD225.jpeg)

Authorization is a key part of any Codat solution - every Company must authorize access to their data before you can pull that data. A frictionless and reassuring auth flow is essential for accessing your SMB customers' data.

## Building your auth flow

There are three ways you can enable your customers to connect their financial accounts:

<ul className="card-container col-3">
  <li className="card">
    <p>No-code</p>
    <div class="header">
      <img
        src="https://www.codat.io/wp-content/themes/class/dist/images/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Hosted Link</h3>
    </div>
    <p>
      Start capturing data today with our simple, pre-built,
      conversion-optimized, and customizable authorization flow.
    </p>
    <p>
      <a href="/auth-flow/authorize-hosted-link">
        Read more...
      </a>
      .
    </p>
  </li>

  <li className="card">
    <p>Low-code</p>
    <div class="header">
      <img
        src="https://www.codat.io/wp-content/themes/class/dist/images/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Embedded Link</h3>
    </div>
    <p>
      Maximise conversion and authorize from within your app in 10 lines of code
      with our auth flow SDK.
    </p>
    <p>
      <a href="/auth-flow/authorize-embedded-link">
        Read more...
      </a>
      .
    </p>
  </li>

  <li className="card">
    <p>More code</p>
    <div class="header">
      <img
        src="https://www.codat.io/wp-content/themes/class/dist/images/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Link API</h3>
    </div>
    <p>Leverage our API for a fully customized bespoke user journey.</p>
    <p>
      <a href="/auth-flow/build/build-your-own-authorization-journey">
        Read more...
      </a>
      .
    </p>
  </li>
</ul>

## What is Link?

Link is a pre-built, conversion-optimized, and white-labelled authorization journey. Your customers can connect their financial accounts in minutes using Link. <a href="https://links.codat.io/client/873ff19e-6fe0-47b0-a4e1-e19f344c78f6?user=8ee6c557-949c-40a8-b31d-e1fa02ef7fbc" target="_blank">See a demo in action</a>.

1. For best results, you can fully embed Link in your experience and [use our Embedded Link component](/auth-flow/authorize-embedded-link) in your front-end code.

2. If you're looking to get up and running as quick as possible, use our [Hosted Link authorization flow](/auth-flow/authorize-hosted-link). You can use it out of the box or integrate this into your existing app.

### Link's values

We built Link with these values in mind: Transparency, Consent, and Control.

:::tip Transparency

The data sharing flow should be **transparent** when explaining to your business customer: What exactly is being shared, how the data will be used, the value they will receive by sharing the data.

Link ensures customers have a clear understanding of:

- The value exchange on the benefits of providing data access
- What will happen with the shared data and how it is secured
- The data that has been shared

:::

:::tip Consent

After familiarizing themselves with the conditions of sharing their data, your customers should have enough confidence and trust to authorize **consented** access to their data.

Link provides:

- Visibility of the data requiring consent to access,
- A way for the user to authorize consent.

:::

:::tip Control

You should have enough **control** over the authorization flow to offer your customer an experience seamlessly aligned with your brand’s values and aesthetics.

Codat gives you control of Link, ensuring that it meets your use case and provides a focused and relevant flow which your customers understand.
:::

## Building your own

We suggest using Link for best results, which can be [embedded within your app](/auth-flow/authorize-embedded-link). However, where you need full control of the flow, you can use our API to [build your own authorization journey](/auth-flow/build/build-your-own-authorization-journey).

## Pitfalls

:::note Device compatibility

Whether you build your own or use Link, browser and mobile compatibility varies for different integrations:

- Some integrations are **desktop-only** e.g. [Sage 50](integrations/accounting/accounting-sage50), [QuickBooks Desktop](/accounting-quickbooksdesktop).
- Some integrations require **downloading a desktop package** e.g. [Oracle NetSuite](integrations/accounting/accounting-netsuite), [Microsoft Dynamics 365 Business Central](/accounting-dynamics365businesscentral).
- Some integrations require switching to complex flows on **non mobile-optimized websites** due to the complexity of the third-party platform e.g. [Sage 200cloud](/accounting-sage200), [Sage Intacct](/accounting-sage-intacct).

:::caution Link compatibility with Codat Products

Link is compatible with the whole product range of Codat except for [Sync for Commerce](/sync-commerce/overview) which is currently not supported. To set up your Sync for Commerce authorization flow, follow the instructions in our [Sync for Commerce documentation](/sync-commerce/overview).
