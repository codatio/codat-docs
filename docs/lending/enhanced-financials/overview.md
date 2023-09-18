---
title: "Financial statements"
description: "Introduction to financial statements"
sidebar_label: "Overview"
displayed_sidebar: lending
image: "/img/banners/social/lending.png"
---

Our latest version of Enhanced Financials reduces the need for highly manual, time-consuming, and repetitive interpretation of SMB account names. 

With Codat, lenders can automate financial statement analysis using our fully standardized profit and loss statement and balance sheet.

The [Enhanced Profit and Loss Accounts](/lending-api#/operations/get-enhanced-profit-and-loss-accounts) and [Enhanced Balance Sheet Accounts](/lending-api#/operations/get-enhanced-balance-sheet-accounts) endpoints return a list of accounts enriched with the latest version of categorization. 

## Accounts and account categories

Our Enhanced Financials map each business's financial statements to a single standard chart of accounts, which we call account categories.

Each category comprises up to five levels. We will populate the lowest level deemed relevant to each account.

<details>
  <summary>Supported account categories</summary>

  <iframe
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkvocA0AjDFFHTyQ-ivddggN996pn2_FOhzE3iThrFje_RGnAvw1QqvaLKGhWNXHCOpgtekuFqb7xt/pubhtml?widget=true&amp;headers=false"
    frameborder="0"
    style={{ top: 0, left: 0, width: "100%", height: "660px" }}
  ></iframe>
</details>

### Categorize accounts

Our _Enhanced Profit and Loss Accounts_ and _Enhanced Balance Sheet Accounts_ endpoints return a list of accounts enriched with a suggested category for each account.

You can help improve the suggestions our model supplies by confirming them or providing a more applicable category. 

You can view all available categories proposed for accounts and, where relevant, recategorize them in the <a href="https://app.codat.io/" target="_blank">Codat Portal</a>. 

<details>
  <summary>Categorizing accounts in the Portal</summary>

1. Navigate to **Companies**, then click the company that requires categorization review. Select **Products > Lending** in the side menu. Finally, click **Categorize accounts**. 

![An image of the Lending portal view and the categorization button](/img/lending/acct-categorization-v3-1.png)

2. You can view the categories for each account.  These are ordered by _impact_ by default, which is determined by the current account balance and our confidence in our automatic categorization.  Accounts with a high _impact_  effect the [Enhanced Financials](/lending/enhanced-financials/overview) more, so its worth confirming these accounts.

![An image of the Lending Categorization view in the Portal](/img/lending/acct-categorization-v3-2.png)

3. To change the category of an account, select the accounts using the checkbox and click **Recategorize**. 

   Choose an appropriate category from the proposed five levels and click **Recategorize**.  This saves the newly assigned category.  Once you have confirmed or edited an account, the _impact_ will change to zero.


![An image of the Lending Categorization view in the Portal with an account in process of recategorizing](/img/lending/acct-categorization-v3-3.png)

That's it! The Enhanced Profit and Loss and Enhanced Balance Sheet will return the updated category for the accounts going forward.

</details>
