---
title: "Customize auth flow UI using SDK properties"
sidebar_label: "Manage UI in code"
description: "Exercise advanced programmatic control over UI settings of the Link auth flow"
---

## Overview

Most of the configuration for the auth flow is currently managed in <a href="https://app.codat.io/settings/" target="_blank">**Auth flow settings**</a> in the Codat Portal. 

However, you can use the SDK's `options` property to override the settings set in the Portal and control them programmatically instead. This is useful if you want more control over the UI based on application-specific logic or want to vary it conditionally.

:::caution Advanced functionality

As the `options` object overrides the Link settings set in the Portal, this may result in confusion about the source of truth for what users are seeing. Ensure you document and communicate your use of the `options` prop internally.
:::

```
<CodatLink
  companyId={companyId}
  onConnection={onConnection}
  onError={onError}
  onClose={onClose}
  onFinish={onFinish}
  options={{
    nonModal: true ...
    showLandingPage: true,
    showSandboxIntegrations: true,
    theme: {...},
    sourceTypes: {
      accounting: {...},
      banking: {...},
      commerce: {...},
    },
    text: {...},
  }}
/>
```
## Properties

The `options` prop is optional and accepts an object containing the following optional properties:

| Property                  | Description                                                                                                                        |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `nonModal`                | Determines whether Link is initialized with non-modal styling (no border   and no close button).                                   |
| `showLandingPage`         | Determines whether an extra landing page is displayed to the user at the   start of Link.                                          |
| `showSandboxIntegrations` | Controls whether integrations that only connect Sandbox data are   displayed for selection.                                        |
| `theme`                   | Contains options that control the visual appearance of the Link flow.                                                              |
| `sourceTypes`             | Controls the data source types (Accounting, Commerce, Banking, and Business Documents) the user can connect or upload files for. |
| `text`                    | Contains options that control what text is displayed to the user. Markdown is supported.                                        |

The object is applied as the `CodatLink` component is mounted and doesn't support reloading. Make sure to modify the options before mounting the component.

:::tip Try it out!

Grab our [example file](https://github.com/codatio/sdk-link/tree/main/examples/non-modal), edit it as desired, and use it in our [Options demo](https://codat-intg-link-sdk-v2-react-18-ui.azurewebsites.net/) to see how the Link UI reflects the changes you make to the properties.  You will need a `companyId` to do this.
:::

### Non-modal styling

By default, the Link component is designed to be presented in a modal. To override this, you can use the `nonModal` options setting. When set to `true`, it will:

- Hide the close icon.
- Remove the modal-styled border and padding.

You can see an [example of this on GitHub](https://github.com/codatio/sdk-link/tree/main/examples/non-modal).

### Landing page

When `showLandingPage` property is set to `true`, an extra page is displayed to the user at the start of the Link flow. When set to `false`, the user is directed straigt to the navigation page. 

### Sandbox integrations

The `showSandboxIntegrations` property controls whether Sanbox integrations are displayed for selection. This should be set to `true` for test environments and `false` for live environments.

### Theme

Use the `colors` property of the `theme` option to set the hex value for the `primary` color for buttons, links, and loading animations. 

### Source types

The `sourceTypes` option controls the source types the user can connect via the Link flow. Use the `accounting`, `banking`, `commerce`, and `businessDocuments` properties to indicate the desired source type. If you want a source type to be displayed, you must also provide its following properties: 
- `optional`: when set to `true`, the user can complete the flow without connecting an integration of the specified type or uploading relevant files.
- `enableIntegrations`: when set to `true`, it enables the user to connect to an integration of the specified type.
- `enableFileUpload`: when set to `true`, it allows the user to upload relevant documents. You must also enable the relevant file upload integrations in [Other integrations](https://app.codat.io/settings/integrations/other).

### Custom text

Use the `text` property to override text displayed within the Link UI. For example, you can detect the language the user speaks and set the displayed text according to their locale. You can see a [simple example of this on GitHub](https://github.com/codatio/sdk-link/tree/main/examples/locales).

The property accepts Markdown, meaning you can add links, lists, tables, and more to all the text options, excluding `companyName` . You can override the following text options:

| Option                                  |Type and description                                                                                                                                                                                                                                                                                                              |
|-------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `companyName`                          |`string` <br/><br/> Your company name displayed on the final page of the flow before   connecting an integration.|
| `landing.title`                        |`string` _(accepts Markdown)_ <br/><br/>Landing page title displayed on the first page the user sees. <br/>   Enable the landing page by setting  `showLandingPage` to   `true` or configuring it in [Link settings](https://app.codat.io/settings/link-settings/onboarding).|
| `landing.subtitle`                     |`string` _(accepts Markdown)_ <br/><br/>Landing page subtitle displayed on the first page the user sees.   <br/> Enable the landing page by setting  `showLandingPage` to   `true` or configuring it in [Link settings](https://app.codat.io/settings/link-settings/onboarding).|
| `main.title`                           |`string` _(accepts Markdown)_ <br/><br/>Title displayed on the page where the user selects what source types to   connect.|
| `main.subtitle`                        |`string` _(accepts Markdown)_ <br/><br/>Subtitle displayed on the page where the user selects what source types   to connect.|
| `accounting.fileUpload.subtitle`       |`string` _(accepts Markdown)_ <br/><br/>Subtitle displayed on the accounting file upload page. <br/> To use   this, enable the accounting file upload by setting the `sourceTypes.accounting.enableFileUpload` option to `true` or by   configuring it in [Other integrations](https://app.codat.io/settings/integrations/other).|
| `banking.fileUpload.subtitle`          |`string` _(accepts Markdown)_ <br/><br/>Subtitle displayed on the banking file upload page. <br/> To use   this, enable the banking file upload by setting the `sourceTypes.banking.enableFileUpload` option to `true` or by   configuring it in [Other integrations](https://app.codat.io/settings/integrations/other).|
| `businessDocuments.fileUpload.subtitle`|`string` _(accepts Markdown)_ <br/><br/>Subtitle displayed on the business documents file upload page.   <br/> To use this, enable the business documents file upload by setting the `sourceTypes.businessDocuments.enableFileUpload` option to `true`   or by configuring it in [Other integrations](https://app.codat.io/settings/integrations/other).|
| `accounting.dataAccess.consent`        |`string` _(accepts Markdown)_ <br/><br/>Text displayed on the final flow page before connecting an accounting   platform, underneath the list of data types. If you want to display a terms   and conditions link, add it here using Markdown.|
| `accounting.dataAccess.dataTypes`      |`array[string]` _(accepts Markdown)_ <br/><br/>List of requested data types displayed on the final flow page before   connecting an accounting platform.|
| `banking.dataAccess.consent`           |`string` _(accepts Markdown)_ <br/><br/>Text displayed on the final flow page before connecting a bank account,   underneath the list of data types. If you want to display a terms and   conditions link, add it here using Markdown.|
| `banking.dataAccess.dataTypes`         |`array[string]` _(accepts Markdown)_ <br/><br/>List of requested data types displayed on the final flow page before   connecting a bank account.|
| `commerce.dataAccess.consent`          |`string` _(accepts Markdown)_ <br/><br/>Text displayed on the final flow page before connecting a commerce   platform, underneath the list of data types. If you want to display a terms   and conditions link, add it here using Markdown.|
| `commerce.dataAccess.dataTypes`        |`array[string]` _(accepts Markdown)_ <br/><br/>List of requested data types displayed on the final flow page before   connecting a commerce platform.|
<details>
  <summary><b>Learn more about array custom text properties</b></summary>

Properties `accounting.dataAccess.dataTypes`, `banking.dataAccess.dataTypes`, and `commerce.dataAccess.dataTypes` are arrays because they control the bullet points displayed on the data access consent page of the Link flow. 

Each item of the array is rendered as a separate bullet point and details the data types your customer is agreeing to let you access.

For example, if using Javascript, you can set these values as follows: 

```javascript
// Set when initializing the object
const text : CodatTextOptions = {
  "companyName": "Polly's Profiteroles",
  "accounting.dataAccess.dataTypes": ["Accounts receivable information", "Accounts payable information", "Financial summary information"],
}

// Or set after initializing the object 
text["accounting.dataAccess.dataTypes"] = ["Accounts receivable information", "Accounts payable information", "Financial summary information"];
```
In the Link flow, this will then be rendered as follows:

![A snippet of Codat's Link flow that reflects the values set in the code example as bullet points](/img/auth-flow/link-sdk-datatypes-array.png)
</details>

## Redirects

Once your customers have successfully authorized the connection to their data via [Link](/auth-flow/overview), you can redirect them to another website. There are several ways you can redirect your customers:

- [Redirect to a static URL](#redirect-to-a-static-url)
- [Redirect with custom query parameters](#redirect-with-custom-query-parameters)
- [Redirect with reserved query parameters](#redirect-with-reserved-query-parameters)

## Redirect to a static URL

A static URL is a single, unchanging web address that every customer would be directed to.

Enter the website address that you want to redirect your customers to

## Redirect with reserved query parameters

You can conditionally redirect users based on what happened when authorizing.

Codat supports a number of reserved query parameters for redirects. If you add reserved parameters to the Redirect URL you send to your customer, Codat will replace the parameters with the relevant information.

To set up a redirect with reserved query parameters:

In the **Redirect URL > URL** field, enter a base URL along with the reserved parameters you want to use to build the redirect.

<details>
<summary> summary </summary>

| Codat's reserved parameters | Substitution values | Additional information |
| :- | :- | :- |
| `clientId` | GUID (Globally Unique Identifier)|Identifier of the client that completes the authorization flow. **Note**: As a Codat client you may have multiple Codat instances. Each of those instances will have a separate `clientId`. |
| `connectionId` | GUID | Identifier of the data connection that the authorization flow was completed for. |
| `companyId` | GUID | Identifier of the company that completes the authorization flow. |
| `integrationId` | GUID | Identifier of the integration the company authorized. |
| `sourceId` | GUID | Identifier of the data source for the authorized integration. |
| `platform` | e.g. `gbol`, `mqjo`, `zsth`, `ugxp` | 4 character key of the platform as used to reference integrations. |
| `platformName` | e.g. `Xero`, `Sandbox`, `Square` | Name of the platform as displayed in the Codat Portal. | 
| `sourceType` | Accounting, Banking, BankFeed, Commerce, Expense, Other | Name of the source used to retrieve data from. |
| `statusCode` | `200`, `201`, `403`, `500`, `501` | Codat standardises the status codes returned by the integrations: <br/> **200** = Successful - user's request has been fulfilled. <br/> **201** = No content - successful, but no information about data connection will be available. _Possible scenario_: A user visits Link with a connection to their accounting source already established, so they do not take any action before exiting the flow. <br/> **403** = Not available. _Possible scenario_: A user chooses to quit the Link flow before the Linking process is completed. <br/> **501** = Platform not supported. _Possible scenario_: A user chooses an integration that is not supported by the client. At this point, the client offers them an alternative option outside of the Codat flows. <br/> **500** = Internal Server Error. Codat standardises any errors which do not fit into one of the above categories to a 500 code - Internal Server Error. |
|`errorMessage` | | Codat standardises error messages for the status codes. Error messages returned in the redirect will always be mapped with the status codes listed above. <br/> **403** = "User cancelled." <br/>  **500** = "Unknown error occurred." <br/>  **501** = "Not supported." <br/>  **Note**: If you want to use the original error message from the integration, use `statusText`. |
| `statusText` | _String_ | String as it's passed back from the integration. |
| `data.company.companyName` | _String_ | The name of the connected party within the underlying platform. <br/>This maps to the company name property in the [company info dataset](/accounting-api#/schemas/CompanyDataset). | 

</details>

:::note Availability of reserved query parameters
At present, the `data.company.companyName` is only supported for the following integrations:
- **Accounting**: Dynamics 365 Business Central, NetSuite, QuickBooks Online, Sage Intacct, and Xero.
:::

:::info Case sensitivity

The names of query parameters are case sensitive, e.g. `companyId` is not the same as `companyid`.
:::

## Redirect with custom query parameters

Codat supports custom query parameters for redirects. You can define your own values for each custom parameter so that you can direct different customers to, for example, different versions of a landing page. To do this, you need to add custom query parameters to the Redirect Parameter.

:::caution Special character encoding

Ensure any and all special characters used in the link URL are correctly encoded; otherwise custom parameters may not pull through correctly.
:::

:::caution Unspecified custom parameters

It's not possible to specify default parameters. If you don't add a parameter to the Link URL when the redirect is built, it's replaced with an empty string.
---
## Read next

- [Manage Link settings in Portal](/auth-flow/customize/customize-link)
- [Manage branding settings in Portal](/auth-flow/customize/branding)
- [Manage redirects in Portal](/auth-flow/customize/set-up-redirects)
- [Enable your customer to manage connections](/auth-flow/optimize/connection-management)