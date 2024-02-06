---
title: "Authorization flow"
description: "Understand Codat's authorization journey and its implementation "
---

Authorization is a key part of any solution built with Codat. Every company must authorize access to their data before you can use that data. A frictionless and reassuring auth flow is essential for receiving the authorization from your SMB customers.

To achieve this, use our [Link SDK component](/auth-flow/authorize-embedded-link) and embed our Link auth flow in your application. 

![](/img/auth-flow/embedded-link-selection.png)

## What is Link?

Link is our pre-built and white-labelled authorization journey, designed using our extensive build experience and authorization best practices to maximize conversion. 

Embed this best-in-class auth flow into your user journey with our [Link SDK component](/auth-flow/authorize-embedded-link). 

With our [rich examples](/auth-flow/authorize-embedded-link#get-started) and an <a href="https://links.codat.io/client/873ff19e-6fe0-47b0-a4e1-e19f344c78f6?user=8ee6c557-949c-40a8-b31d-e1fa02ef7fbc" target="_blank">interactive demo</a>, we have made it easy for you to get started. You can have the flow up and running in your front-end code with just a few lines of code.

## Our values

We built Link with these values in mind:

<ul className="card-container col-1">
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Transparency</h3>
    </div>
    <p>
      Link ensures customers have a clear understanding of what exactly is being shared, how the data will be used, and the value they will receive by sharing the data.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Consent</h3>
    </div>
    <p>
      Link provides visibility of the data requiring consent to access, developing enough confidence and trust to authorize consented access to their data.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Control</h3>
    </div>
    <p>
      Codat gives you control of the auth flow so you can serve your use case, provide an experience aligned with your brand, and give your customers an intuitive user experience.
    </p>
  </li>
</ul>

## Compatibility

### Device compatibility

- Browser and mobile compatibility of Link varies for different integrations:

  - Some integrations are **desktop-only**, e.g. [Sage 50](/integrations/accounting/sage50/accounting-sage50), [QuickBooks Desktop](/integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop).
  - Others require **downloading a desktop package**, e.g. [Oracle NetSuite](/integrations/accounting/netsuite/accounting-netsuite), [Microsoft Dynamics 365 Business Central](/integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral).
  - Other integrations require switching to complex flows on **non mobile-optimized websites** due to the complexity of the third-party platform, e.g. [Sage 200cloud](/integrations/accounting/sage200/accounting-sage200), [Sage Intacct](/integrations/accounting/sage-intacct/accounting-sage-intacct).

### Technology compatibility


- Link is compatible with our entire [product range](/using-the-api/overview#apis) except for [Sync for Commerce](/commerce/overview). To set up your Sync for Commerce authorization flow, follow the instructions in our [dedicated documentation](/commerce/overview).

- You should not iframe Link. Link is not compatible with iframes and will not work for security reasons (CORS). 

<details>
<summary>Other build options</summary>

<ul className="card-container col-2">
  <li className="card">
    <p>No-code</p>
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Hosted Link</h3>
    </div>
    <p>
      Get up and running in minutes without any developer resource with our out-of-the-box option.
    </p>
    <p>
      <a href="/auth-flow/authorize-hosted-link">
        Read more...
      </a>
      .
    </p>
  </li>

  <li className="card">
    <p>More code</p>
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Link API</h3>
    </div>
    <p>Leverage our API to build and control your own fully customized bespoke user journey.</p>
    <p>
      <a href="/auth-flow/build/build-your-own-authorization-journey">
        Read more...
      </a>
      .
    </p>
  </li>
</ul>

</details>

---
## Read next
- [Use the Link SDK](/auth-flow/authorize-embedded-link) to embed the auth journey in your app