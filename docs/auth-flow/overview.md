---
title: "Authorization flow"
description: "Explore how your customers can authorize access to their data"
---

Authorization is a key part of any Codat solution - every Company must authorize access to their data before you can pull that data. A frictionless and reassuring auth flow is essential for accessing your SMB customers' data.

![](/img/auth-flow/embedded-link-selection.png)

## What is Embedded Link?

Link is a pre-built, conversion-optimized, and white-labelled authorization journey. Your customers can connect their financial accounts in minutes using Link. <a href="https://links.codat.io/client/873ff19e-6fe0-47b0-a4e1-e19f344c78f6?user=8ee6c557-949c-40a8-b31d-e1fa02ef7fbc" target="_blank">See a demo in action</a>.

You can fully embed our auth flow into your user journey and [use our Embedded Link component](/auth-flow/authorize-embedded-link) in your front-end code.

With our [rich examples](/auth-flow/authorize-embedded-link#get-started), you can have Link embedded in your application in minutes.

### Link's values

We built Link with these values in mind: Transparency, Consent, and Control.

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
      Link ensures customers have a clear understanding of what exactly is being shared, how the data will be used, the value they will receive by sharing the data.
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
    <p>
      
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
      Codat gives you control of the auth flow, ensuring that it serves your use case, provides an experience aligned with your brand’s values and aesthetics, and gives your customers and intuitive user experience.
    </p>
  </li>
</ul>

## Link in practice

Our auth flow solution supports many real world applications and scenarios that you can leverage regardless of the approach you take to building your auth flow.  

### Asynchronous use of Link

In your customer's organization, the person signing up through Codat may not have their credentials to hand. To enable them to proceed and explore your product, you can make upfront authorization for different integration categories optional in **Settings > Auth flow > Link**. Later, remind them to authorize, providing a clear indication of the value to them. 

The user signing up may not have access to their business's financial data at all. For best results, provide them with an option to authorize themselves, or to invite someone else to (e.g. a member of their finance team). This can be done via email, or within your product. If the user chooses to invite someone else, this will share the Link URL with the stakeholder who has the credentials for the relevant platform.  

This way, users do not have to share credentials with each other, and the user with platform access can complete the authorization asynchronously.

## Other build options

<ul className="card-container col-3">
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
        src="/img/wp-icons/copy-feature-bullet.svg"
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
        src="/img/wp-icons/copy-feature-bullet.svg"
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

In addition to Embedded Link, you can also leverage our no-code or fully custom solutions.

### Hosted Link

If you're looking to get up and running as quick as possible, or have limited developer resource, use our [Hosted Link authorization flow](/auth-flow/authorize-hosted-link). You can use it out of the box or integrate this into your existing app.

### Building your own

We suggest using Link for best results, which can be [embedded within your app](/auth-flow/authorize-embedded-link). However, where you need full control of the flow, you can use our API to [build your own authorization journey](/auth-flow/build/build-your-own-authorization-journey).

## 💡 Tips and traps

:::note Device compatibility

Whether you build your own or use Link, browser and mobile compatibility varies for different integrations:

- Some integrations are **desktop-only** e.g. [Sage 50](/integrations/accounting/sage50/accounting-sage50), [QuickBooks Desktop](/integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop).
- Some integrations require **downloading a desktop package** e.g. [Oracle NetSuite](/integrations/accounting/netsuite/accounting-netsuite), [Microsoft Dynamics 365 Business Central](/integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral).
- Some integrations require switching to complex flows on **non mobile-optimized websites** due to the complexity of the third-party platform e.g. [Sage 200cloud](/integrations/accounting/sage200/accounting-sage200), [Sage Intacct](/integrations/accounting/sage-intacct/accounting-sage-intacct).
:::

- Link is compatible with the whole product range of Codat except for [Sync for Commerce](/sfc/overview), which is currently not supported. To set up your Sync for Commerce authorization flow, follow the instructions in our [Sync for Commerce documentation](/sfc/overview).

- You should not iframe Link. Link is not compatible with iframes and will not work for security reasons (CORS). 

- You should only enable one of the banking integrations to be displayed in the auth flow because each integration is [represented differently](https://docs.codat.io/integrations/banking/overview#banking-integrations-in-the-authorization-flow) in the auth flow. Combining multiple approaches may confuse users and lead to reduced auth completion rates.