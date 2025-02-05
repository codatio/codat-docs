---
title: "Get started with Link SDK"
sidebar_label: Get started
description: "Embed our auth flow in your application UI using our low-code component"
banner_image: "/img/banners/link.png"
---

import ReadNext from "@components/ReadNext";
import CodeExamples from './_partial-auth-flow-examples.md';

![](/img/auth-flow/embedded-link-selection.png)

Our Link SDK is a pre-built JavaScript component that neatly sits in your front-end code and can be deployed in a matter of minutes. 

We built it to be flexible so that you can integrate and initialize it in any way you want, and provide the user with a native feel of your authorization journey. As a result, clients using the SDK note that **89%** of their users successfully complete their journeys.

```jsx live
function AuthFlow() {
  const onConnection = (connection) => alert(`Connection: ${connection.connectionId}`);
  const onFinish = () => alert("On finish callback");

  const config = {
    companyId: "e0e0462f-d7f3-456f-b3e9-0b40afe0245e",
    options: {
      showLandingPage: true,
    }
  }

  return <div>
    <p>Click the button below to start authing.</p>

    <CodatLink {...config}/>
  </div>
}
```

## Resources

We've provided you with [rich examples on GitHub](https://github.com/codatio/sdk-link/tree/main/examples) that illustrate how you can add the Link component to your project.

:::note Need help with designing your auth flow experience?

Our user experience team is ready to help you design a high converting and trusted auth flow, and ensure your user journey complies with integration partnerships' requirements. Speak to your account manager to set up time with our experts.

:::

:::info Indicative demo

Curious where Codat's Link flow might fit in your customer's experience? See [our indicative demo](https://sdk-link.vercel.app/).

:::

## Prerequisites

#### Your application

You need a JavaScript application to render the component in. The component works with all major JavaScript frameworks, including React, and with vanilla JavaScript. You can choose to implement it in TypeScript. We don't recommend using Link in an iframe because it will not work for security reasons (CORS).

The application should take care of creating [companies](../terms/company) programmatically and retrieving the `companyId` of any company you want to authorize. Additionally, build out the required redirect configuration within your application.

## Get started

:::tip Install the npm package

Take advantage of our [npm package](https://www.npmjs.com/package/@codat/sdk-link-types) so you don't have to manually import and maintain type definitions. You will benefit from it the most if you are using Typescript, so our examples are prepared with that assumption.

`npm install @codat/sdk-link-types`

:::

<CodeExamples />

:::note Dynamic imports

Link SDK is imported at runtime, so you'll always get the latest version of our auth flow UI with no risk of staleness. To achieve this, we use ES6's [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) feature (aka dynamic imports).

:::

## Authorize user

By default, we enforce additional security measures within our Link SDK. The SDK requires an access token to verify your customer, serving as an equivalent to a one-time password. Contact your account manager if you want to disable these measures. 

### Access token

Once your customer authorizes within your application, use the [Get company access token](/platform-api#/operations/get-company-access-token) endpoint to retrieve an access token for this customer's company. 

Pass the token to the Link SDK when initializing. We use this to verify your customer and get company-specific information to display in the UI.

:::tip Token validity
The token is only valid for one day and applies to a single company.
:::

#### CORS settings

[Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) (CORS) settings are required for access token to work. To control the domain list that your application can make token requests from, register the allowed origins using the [Set CORS settings](/platform-api#/operations/set-connection-management-cors-settings) endpoint.

To display the origins you previously registered for your instance, use the [Get CORS settings](/platform-api#/operations/get-connection-management-cors-settings) endpoint. 

## Use callback functions

You can add custom logic into our SDK by using callback functions to complete an action. Use the properties below to pass the callback functions into the SDK component:

| Property       | Description                                                                                                                                                                                                                                          | Arguments                                                                                                                                                                                                                                                                 |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onConnectionStarted` | Called when the user selects their integration. A connection is successfully created in a `pending` state.                                                                                                                                    | A `connection` object containing the following properties: <br/>`connectionId` - unique identifier of the connection.                                                                                                                                                                                                                      |
| `onConnection` | Called when a connection is successfully authorized and moved out of a `pending` state or files are   uploaded.                                                                                                                                    | A `connection` object containing the following properties: <br/>`connectionId` - unique identifier of the connection.                                                                                                                                                                                                                      |
| `onFinish`     | Called when the user completes all required steps of the connection flow and clicks the   "Complete" button.<br/> We recommend unmounting the `CodatLink` component   in this callback. In the React example above, we call `setModalOpen(false)` to do this.                                                                   |                                                                                                                                                                                                                                                                            |
| `onClose`      | Called when the user   clicks the "X" ("Close") button of the connection flow. <br/>  We recommend removing the `CodatLink` component in this callback. In the React example above, we call `setModalOpen(false)` to do this.                                                                                                  |                                                                                                                                                                                                                                                                            |
| `onError`      | Called when an error   occurs in the connection flow, returning the error information. <br/><br/>  **Log these errors.** We also recommend   unmounting the `CodatLink` component in production if the `userRecoverable` parameter   is `false`. |  An `error` object containing the following properties: <ul><li>`correlationId` - internal identifier used to track errors within   Codat</li><li>`message` - descriptive error   response</li><li>`errorCode` - numerical code of the   error</li><li>`userRecoverable` - boolean value   indicating whether the error can be resolved by the user.</li></ul> `correlationId`, `message`, and `errorCode` are optional and may not be available in all errors. |

## Customize Link

You can configure Link's UI to match your company branding and reflect your company's values, and adjust Link's behavior using the [Codat Portal](https://app.codat.io/) or our SDK's advanced options. 

#### Configure in Portal

In the [Codat Portal](https://app.codat.io/settings), navigate to **Settings > Auth flow** to view the auth flow settings pages. Use these to add UI copy, set file upload options, choose to make steps optional, or disable steps. We provide detailed instructions for each category of settings:

- [Link settings](/auth-flow/customize/customize-link)
- [Branding settings](/auth-flow/customize/branding)

#### Configure in code

If you need more control over the UI based on application-specific logic, want to vary it conditionally, or simply prefer to manage the UI in code, we offer programmatic control via the `options` property that **overrides the Link settings set in the Portal**. We explain these advanced options in detail:

- [Manage UI settings in code](/auth-flow/customize/sdk-customize-code)

To control the redirects that happen upon flow completion, you need to build out the required redirect configuration within your application.

<ReadNext
  links={[
    [ "Manage Link settings in Portal", "/auth-flow/customize/customize-link" ],
    [ "Manage branding settings in Portal", "/auth-flow/customize/branding" ],
    [ "Manage UI settings in code", "/auth-flow/customize/sdk-customize-code" ],
    [ "Use the Connections SDK in your app", "/auth-flow/optimize/connection-management" ], 
  ]}
/>
