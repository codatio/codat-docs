---
title: "Set up the Clear Books integration"
description: "Explore our API integration with Clear Books."
createdAt: "2019-04-09T10:56:14.342Z"
updatedAt: "2023-01-06T15:57:44.318Z"
---

No application registration is required for the Clear Books integration to work. While linking their data, the SMB user is asked to enter their API key as shown:

<img src="/img/old/0c9d3d9-Clear_Books_Link.png" />

To find their API key, the SMB user does the following:

1. Logs in to their Clear Books account.

2. Selects **Settings > Configure system > API keys** from the menu bar.

   ![Clear Book: SMB user selects API keys from Settings > Configure system in the menu bar.](/img/old/00c84fa-clear-books_select-api-key.png)

3. Selects **Provide required information**, then provides the following information:

   1. Under **Intended API usage**, selects the second option: **I want to connect Clear Books with a piece of third-party software, exclusively for my own use**.
   2. Under **Third-party software information**, enters the name of your app or website in the first box and "Codat" in the second box.

Their API key is now available to copy from the **API keys** page (under **SOAP API**).

<img
  src="/img/old/c176f58-clear-books_api-keys-page-highlighted.png"
  alt="Clear Books: API keys page with the SMB user's API key highlighted under 'SOAP API'."
/>

## Enable the Clear Books integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **Clear Books** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.
