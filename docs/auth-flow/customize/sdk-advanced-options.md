---
title: "Customize auth flow"
sidebar_label: "Customize in code"
description: "Learn how to enhance the customer journey when a persistent connection is required"
---
## Advanced options

Most of the configuration for the auth flow is currently managed in <a href="https://app.codat.io/settings/link-settings" target="_blank">**Link settings**</a> page in the Codat Portal. 

If you need more control over the UI based on application-specific logic or want to vary it conditionally, we offer programmatic control via a new `options` property that overrides the Link settings set in the Portal.

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

:::caution Advanced functionality

As the `options` object overrides the Link settings set in the Portal, this may result in confusion about the source of truth for what users are seeing. Ensure you document and communicate your use of the `options` prop internally.
:::

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