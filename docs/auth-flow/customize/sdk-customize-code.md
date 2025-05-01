---
title: "Customize Link interface and behavior using SDK properties"
sidebar_label: "Manage Link in code"
description: "Exercise advanced programmatic control over user interface settings of the Link auth flow"
banner_image: "/img/banners/link.png"
---

## Overview

Most of the configuration for the auth flow is currently managed in <a href="https://app.codat.io/settings/" target="_blank">**Auth flow settings**</a> in the Codat Portal. 

However, you can use the SDK's `options` property to override the settings set in the Portal and control them programmatically instead. This is useful if you want more control over the UI based on application-specific logic or want to vary it conditionally.

```jsx live
function AuthFlow() {
  const onConnection = (connection) => alert(`Connection: ${connection.connectionId}`);
  const onFinish = () => alert("On finish callback");

  const config = {
    companyId: "e0e0462f-d7f3-456f-b3e9-0b40afe0245e",
    options: {
      nonModal: false,
      showLandingPage: true,
      showSandboxIntegrations: true,
      //theme: {...},
      //sourceTypes: {
      //  accounting: {...},
      //},
      //text: {...},
      enableAdditionalConsent: true,
      enableMultiEntityLinking: true,
    }
  }

  return <div>
    <p>Click the button below to start authing.</p>

    <CodatLink {...config}/>
  </div>
}
```

:::caution Advanced functionality

As the `options` object overrides the Link settings set in the Portal, this may result in confusion about the source of truth for what users are seeing. Ensure you document and communicate your use of the `options` prop internally.
:::

## Properties

```js
<CodatLink
  companyId={companyId}
  onConnectionStarted={onConnectionStarted}
  onConnection={onConnection}
  onError={onError}
  onClose={onClose}
  onFinish={onFinish}
  options={{
    nonModal: true,
    showLandingPage: true,
    showSandboxIntegrations: true,
    theme: {...},
    sourceTypes: {
      accounting: {...},
      banking: {...},
      commerce: {...},
    },
    text: {...},
    enableAdditionalConsent: true,
    enableMultiEntityLinking: true,
  }}
/>
```

The `options` prop is optional and accepts an object containing the following optional properties:

| Property                  | Description                                                                                                                        |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `nonModal`                | Determines whether Link is initialized with non-modal styling (no border   and no close button).                                   |
| `showLandingPage`         | Determines whether an extra landing page is displayed to the user at the   start of Link.                                          |
| `showSandboxIntegrations` | Controls whether integrations that only connect Sandbox data are   displayed for selection.                                        |
| `theme`                   | Contains options that control the visual appearance of the Link flow.                                                              |
| `sourceTypes`             | Controls the data source types (Accounting, Commerce, Banking, and Business Documents) the user can connect or upload files for. |
| `text`                    | Contains options that control what text is displayed to the user. Markdown is supported.                                        |
| `enableAdditionalConsent` | Determines whether an additional consent journey for further use cases is displayed to the user.      |
| `enableMultiEntityLinking` | Allows users to authorize to multiple companies within a single accounting platform in one go for compatible integrations.      |


The object is applied **as the `CodatLink` component is mounted**, so doesn't support hot reloading. Modify the options and refresh the page to see the options reflected.

:::tip Try it out!

Grab our [example file](/documents/example-link-options.json), edit it as desired, and use it in our [Options demo](https://codat-intg-link-sdk-v2-react-18-ui.azurewebsites.net/) to see how the Link UI reflects the changes you make to the properties.  You will need a `companyId` to do this.
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

The `sourceTypes` option controls the source types the user can connect via the Link flow. Use the `accounting`, `banking`, `commerce`, and `businessDocuments` properties to indicate the desired source type. 

For each source type, you can also configure the following properties: 
- `optional`: this is a mandatory property. When set to `true`, the user can complete the flow without connecting an integration of the specified type or uploading relevant files.
- `enableIntegrations`: this is a mandatory property. When set to `true`, it enables the user to connect to an integration of the specified type.
- `enableFileUpload`: this is a mandatory property. When set to `true`, it allows the user to upload relevant documents. You must also enable the relevant file upload integrations in [Other integrations](https://app.codat.io/settings/integrations/other).
- `allowedIntegrations`: this is an optional property. By default, all configured integrations appear in Link. Add an array of the relevant [accounting](/integrations/accounting/overview#platform-keys), [banking](/integrations/banking/overview#platform-keys) or [commerce](/integrations/commerce/overview#platform-keys) platform keys to this property to filter the list of platforms displayed to the user during the authorization journey. 
- `dataTypes`: Data types that the business would be sharing with your company. These are displayed as a list in the platform data accordion on the consents page. This replaces the deprecated `accounting.dataAccess.dataTypes`, `banking.dataAccess.dataTypes`, and `commerce.dataAccess.dataTypes` text options.


:::tip Banking integrations in the auth flow
You should only have one of the banking integrations enabled at a time. This ensures optimal use of Link, as each banking integration is [represented differently](/integrations/banking/overview#banking-integrations-in-the-authorization-flow) in the auth flow and may confuse the customer.

:::

:::tip Enable users without credentials

In your customer's organization, the person signing up through Codat may not have their credentials to hand. For example, it may be their accountant who actually logs into their accounting software.

To enable them to proceed and explore your product, make upfront authorization for different integration categories optional. Later, remind them to authorize or give them an option to share a Link URL or even a `mailto:` link.

:::

### Custom text

Use the `text` property to override text displayed within the Link UI. For example, you can detect the language the user speaks and set the displayed text according to their locale. You can see a [simple example of this on GitHub](https://github.com/codatio/sdk-link/tree/main/examples/locales).

The property accepts Markdown, meaning you can add links, lists, tables, and more to all the text options, excluding `companyName` . You can override the following text options:

| Option                                  |Type and description                                                                                                                                                                                                                                                                                                              |
|-------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `companyName`                          |`string` <br/><br/> Your company name displayed on the final page of the flow before   connecting an integration.|
| `landing.title`                        |`string` _(accepts Markdown)_ <br/><br/>Landing page title displayed on the first page the user sees. <br/>   Enable the landing page by setting  `showLandingPage` to   `true` or configuring it in [Link settings](https://app.codat.io/settings/link-settings/onboarding).|
| `landing.subtitle`                     |`string` _(accepts Markdown)_ <br/><br/>Landing page subtitle displayed on the first page the user sees.   <br/> Enable the landing page by setting  `showLandingPage` to   `true` or configuring it in [Link settings](https://app.codat.io/settings/link-settings/onboarding).|
| `landing.nextButton`                     |`string` <br/><br/>Text displayed on the primary (continuation) button of the landing page. By default, this option is set to `Next`.|
| `main.title`                           |`string` _(accepts Markdown)_ <br/><br/>Title displayed on the page where the user selects what source types to   connect.|
| `main.subtitle`                        |`string` _(accepts Markdown)_ <br/><br/>Subtitle displayed on the page where the user selects what source types   to connect.|
| `accounting.fileUpload.subtitle`       |`string` _(accepts Markdown)_ <br/><br/>Subtitle displayed on the accounting file upload page. <br/> To use   this, enable the accounting file upload by setting the [source type option](/auth-flow/customize/sdk-customize-code#source-types) to `true` or by   configuring it in [Other integrations](https://app.codat.io/settings/integrations/other).|
| `banking.fileUpload.subtitle`          |`string` _(accepts Markdown)_ <br/><br/>Subtitle displayed on the banking file upload page. <br/> To use   this, enable the banking file upload by setting the [source type option](/auth-flow/customize/sdk-customize-code#source-types) to `true` or by   configuring it in [Other integrations](https://app.codat.io/settings/integrations/other).|
| `businessDocuments.fileUpload.subtitle`|`string` _(accepts Markdown)_ <br/><br/>Subtitle displayed on the business documents file upload page.   <br/> To use this, enable the business documents file upload by setting the [source type option](/auth-flow/customize/sdk-customize-code#source-types) to `true`   or by configuring it in [Other integrations](https://app.codat.io/settings/integrations/other).|
| `accounting.dataAccess.consent`<br/>`banking.dataAccess.consent`<br/>`commerce.dataAccess.consent`        |⚠️ **Deprecated**: Use `accounting.consents.termsAndConditions`, `banking.consents.termsAndConditions`, or `commerce.consents.termsAndConditions` instead. <br/><br/> `string` _(accepts Markdown)_ <br/><br/> Text displayed on the final flow page before connecting an accounting, banking or commerce  platform, underneath the list of data types. If you want to display a terms   and conditions link, add it here using Markdown.|
| `accounting.consents.termsAndConditions`<br/>`banking.consents.termsAndConditions`<br/>`commerce.consents.termsAndConditions` | `string` _(accepts Markdown)_ <br/><br/>Text displayed on the final flow page before connecting an accounting, banking or commerce platform, underneath the list of data types. Use this to display terms and conditions links using Markdown.|
| `accounting.consents.purpose`<br/>`banking.consents.purpose`<br/>`commerce.consents.purpose` | `string` _(accepts Markdown)_ <br/><br/>Specifies the purpose of the data access. Accepts `{companyName}` and `{platformName}` interpolation. For example: `Allow {companyName} to access {platformName} data.`|
| `accounting.consents.access`<br/>`banking.consents.access`<br/>`commerce.consents.access` | `string` _(accepts Markdown)_ <br/><br/>Specifies the required access to the data (e.g., read and write). Accepts `{companyName}` and `{platformName}` interpolation. For example: `Allow {companyName} to access {platformName} data.`|
| `accounting.consents.accountInfo`<br/>`banking.consents.accountInfo`<br/>`commerce.consents.accountInfo` | `string` _(accepts Markdown)_ <br/><br/>Specifies the account information business would be sharing with your company. Accepts `{companyName}` and `{platformName}` interpolation. For example: `Allow {companyName} to access {platformName} data.`|
| `accounting.consents.retention`<br/>`banking.consents.retention`<br/>`commerce.consents.retention` | `string` _(accepts Markdown)_ <br/><br/>Specifies the conditions for the retention of the data. Accepts `{companyName}` and `{platformName}` interpolation. For example: `Allow {companyName} to access {platformName} data.`|
| `accounting.dataAccess.nextButton`<br/>`banking.dataAccess.nextButton`<br/>`commerce.dataAccess.nextButton`        |⚠️ **Deprecated**: Use `accounting.consents.nextButton`, `banking.consents.nextButton`, or `commerce.consents.nextButton` instead. <br/><br/> `string` <br/><br/> Text displayed on the primary (continuation) button of the final flow page before connecting an accounting, banking or commerce  platform. By default, this option is set to `Next`.|
| `accounting.consents.nextButton`<br/>`banking.consents.nextButton`<br/>`commerce.consents.nextButton` | `string` <br/><br/>Text displayed on the primary (continuation) button of the final flow page before connecting an accounting, banking or commerce platform. By default, this option is set to `Next`.|
| `accounting.dataAccess.dataTypes`<br/>`banking.dataAccess.dataTypes`<br/>`commerce.dataAccess.dataTypes`      |⚠️ **Deprecated**: Use the `dataTypes` property in the source types configuration instead. <br/><br/> `array[string]` _(accepts Markdown)_ <br/><br/> List of requested data types displayed on the final flow page before connecting an accounting, banking or commerce software.|
| `accounting.dataAccess.additionalConsent.title`<br/>`banking.dataAccess.additionalConsent.title`<br/>`commerce.dataAccess.additionalConsent.title` | ⚠️ **Deprecated**: Use `accounting.additionalConsents.title`, `banking.additionalConsents.title`, or `commerce.additionalConsents.title` instead. <br/><br/> `string` _(accepts Markdown)_ <br/><br/> Title displayed on the page where the customer consents to the use of their accounting, banking or commerce data for an additional use case. <br/><br/> Ensure you set up the [source types](/auth-flow/customize/sdk-customize-code#source-types) to support the additional consent flow.|
| `accounting.additionalConsents.title`<br/>`banking.additionalConsents.title`<br/>`commerce.additionalConsents.title` | `string` _(accepts Markdown)_ <br/><br/> Title displayed on the page where the customer consents to the use of their accounting, banking or commerce data for an additional use case. <br/><br/> Ensure you set up the [source types](/auth-flow/customize/sdk-customize-code#source-types) to support the additional consent flow.|
| `accounting.dataAccess.additionalConsent.subtitle`<br/>`banking.dataAccess.additionalConsent.subtitle`<br/>`commerce.dataAccess.additionalConsent.subtitle` | ⚠️ **Deprecated**: Use `accounting.additionalConsents.subtitle`, `banking.additionalConsents.subtitle`, or `commerce.additionalConsents.subtitle` instead. <br/><br/> `string` _(accepts Markdown)_ <br/><br/> Subtitle displayed on the page where the customer consents to the use of their accounting, banking or commerce data for an additional use case. <br/><br/> Ensure you set up the [source types](/auth-flow/customize/sdk-customize-code#source-types) to support the additional consent flow.|
| `accounting.additionalConsents.subtitle`<br/>`banking.additionalConsents.subtitle`<br/>`commerce.additionalConsents.subtitle` | `string` _(accepts Markdown)_ <br/><br/> Subtitle displayed on the page where the customer consents to the use of their accounting, banking or commerce data for an additional use case. <br/><br/> Ensure you set up the [source types](/auth-flow/customize/sdk-customize-code#source-types) to support the additional consent flow.|

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

### Additional consent journey

You may need to request additional consent from your customer to use their previously shared financial data for a different purpose. For example, if the customer linked a platform to use your application's cash flow forecasting dashboard, you need additional consent from them if you want to use that data for a lending assessment. 

To request additional consent, set the `enableAdditionalConsent` option to `true`. This will display an extra consent journey to the customers on their subsequent visits to the Link flow, as shown below.

![](/img/auth-flow/additional-consent-journey.png)

By default, this option is set to `false`. Next, use [custom text](/auth-flow/customize/sdk-customize-code#custom-text) to manage the content displayed to them during this journey.

## Multi-entity linking

You may want to enable your customers to authorize access to multiple companies within a single accounting platform in the same connection flow. This is relevant for integrations that allow their users to operate several subsidiaries within the same account. 

To provide your customers with this option, set the `enableMultiEntityLinking` option to `true`. Ths will display additional subsidiary selection steps in the auth flow for the integrations that provide multi-entity support. By default, this option is set to `false`.

---
## Read next

- [Manage Link settings in Portal](/auth-flow/customize/customize-link)
- [Manage branding settings in Portal](/auth-flow/customize/branding)
- [Enable your customer to manage connections](/auth-flow/optimize/connection-management)
