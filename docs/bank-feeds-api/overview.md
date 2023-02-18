---
title: "Bank Feeds API overview"
sidebar_label: Bank Feeds API
hide_title: true
hide_description: true
hide_table_of_contents: true
description: "Bank Feeds API enables your SMB users to set up bank feeds from accounts in your application to supported accounting platforms."
createdAt: "2022-11-17T12:09:28.950Z"
updatedAt: "2023-01-05T15:04:48.214Z"
---

<Head>
  <meta property="og:image" content="/img/old/fd21af0-codat_whitepaper_accounting-automation_diagram_B.png"/>
</Head>


<div className="background-video-wrapper bankfeed">
  <div className="banner-video">
    <h1>Bank Feeds API</h1>
    <p>
      Bank Feeds API enables your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.
    </p>
  </div>
</div>

<div className="background-video-spacer bankfeed">
  <h1>Bank Feeds API</h1>
  <p>
    Bank Feeds API enables your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.
  </p>
</div>

**A bank feed is a connection between a _source bank account_—in your application—and a _target bank account_ in a supported accounting package.**

The source account might be a business current account, savings account, credit card, or payments processor feed. Bank feeds allow accounting software users to easily reconcile bank transactions against accounting entries, like invoices and bills.

In Codat's API, bank feeds are represented as [Bank transactions](/accounting-api#/schemas/BankTransactions), which are pushed from a source to a target bank account in chronological order. Bank feeds from the source account are then viewable in the SMB user's accounting software.

Bank Feeds API uses standalone integrations to [popular accounting software](/bank-feeds-api/overview#which-integrations-support-bank-feeds-api). The connection journey for SMB users is handled by the integration and is different for each supported platform.

<img
  src="/img/old/fd21af0-codat_whitepaper_accounting-automation_diagram_B.png"
  alt="Data flow between your application and the SMB user's accounting platform with Bank Feeds API."
/>

:::note Product feedback

Tell us how you'd like to use Bank Feeds API on <a className="external" href="https://codat.productboard.com/feature-board/1378101-feature-organization/features/11073763/detail" target="_blank">Productboard</a>.
:::

## Why use Bank Feeds API?

<ul className="card-container col-2">
  <li className="card">
    <div class="header">
      <img
        src="https://www.codat.io/wp-content/themes/class/dist/images/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Fast, easy reconciliation</h3>
    </div>
    <p>
      Send transactions to your SMB customers' accounting
      platforms&mdash;leading to faster and easier reconciliation.
    </p>
  </li>
  <li className="card">
    <div class="header">
      <img
        src="https://www.codat.io/wp-content/themes/class/dist/images/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Standardization</h3>
    </div>
    <p>
      We map and standardize banking and card transactions to different
      accounting platforms via dedicated Bank Feed integrations. You can focus
      on app development.
    </p>
  </li>
  <li className="card">
    <div class="header">
      <img
        src="https://www.codat.io/wp-content/themes/class/dist/images/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>High quality, robust integrations</h3>
    </div>
    <p>
      Provide your customers with the standard of accounting integrations they
      expect, whether you're a startup or a global bank.
    </p>
  </li>
  <li className="card">
    <div class="header">
      <img
        src="https://www.codat.io/wp-content/themes/class/dist/images/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Reduce manual errors</h3>
    </div>
    <p>
      We help your customers to close the books faster and with fewer manual
      errors.
    </p>
  </li>
</ul>

## Which integrations support Bank Feeds API?

To leverage the functionality of Bank Feeds API, first choose an integration to a supported accounting platform.

- [QuickBooks Online Bank Feeds](/bank-feeds-api/qbo-bank-feeds/) (US and Canada only)
- [Sage Bank Feeds](/bank-feeds-api/sage-bank-feeds)
- [Xero](/integrations/accounting/xero/accounting-xero-setup#configure-direct-bank-feeds)

For detailed setup instructions, refer to the documentation for each integration.

:::note Platform requirements

The setup process and platform registration requirements vary for each Bank Feeds integration.
:::

## How Bank Feeds API works

Here's a high-level overview of the setup and connection flow for Bank Feeds API.

1. Enable the integration you want to use on the <a className="external" href="https://app.codat.io/settings/integrations/bankfeeds" target="_blank">Bank feed integrations</a> page in the Codat Portal.

2. Enter your platform credentials, if required, and customize the integration's authorization UI.

3. Create the following objects using Codat's Accounting API:

   - A Company.
   - A [data connection](/core-concepts/connections) that specifies the platform key of the Bank Feeds integration you want to use.

4. Provide a list of source bank accounts. These accounts will be displayed to the SMB user in the integration's authorization UI.

   You use the <a href="/bank-feeds-api#/operations/put-bank-feeds" target="_blank">PUT /connectionInfo/bankFeedAccounts</a> endpoint to do this.

5. Initiate the SMB user connection journey - when the user chooses a source bank account to connect to their accounting platform. This process varies by integration:

   - For QBO Bank Feeds, you redirect the user to the `linkUrl` returned in the data connection response to load the integration's authorization UI.

   - For Sage Bank Feeds, you surface the ID of the data connection you created in your application. The SMB user must then enter this ID in the integration's authorization UI.

6. The SMB user follows the instructions in the integration's authorization UI. They choose which source bank account they want to connect to their accounting platform.

7. You can add more source bank accounts, or update existing accounts as needed.

When the SMB user is authorized, you can begin to push bank transactions to the target account in the accounting platform. You use the [POST /bankTransactions](/accounting-api#/operations/post-bank-transactions) endpoint to do this.

:::caution Important

Bank Feeds integrations are push only; you can't use them to pull bank transaction data from Codat's API.

Your users must reconcile bank transactions using the features of their accounting software.
:::
