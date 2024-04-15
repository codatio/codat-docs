---
title: "Set up redirect URLs in the Portal"
sidebar_label: Redirects
description: "Complete your customer's authorization journey with a redirect location"
displayed_sidebar: docs
---

## Overview

Once your customers have successfully authorized the connection to their data via [Hosted Link](/auth-flow/authorize-hosted-link), you can redirect them to another website. There are several ways you can redirect your customers:

- [Redirect to a static URL](#redirect-to-a-static-url)
- [Redirect with custom query parameters](#redirect-with-custom-query-parameters)
- [Redirect with reserved query parameters](#redirect-with-reserved-query-parameters)

:::note See an example

Not sure how to handle the params in your website? [See an example here](https://github.com/mcclowes/hosted-link-redirect-page).
:::

## Configure redirect settings

You can find the [redirect settings page](https://app.codat.io/settings/redirects) in the Portal:

1. In the navigation bar, click **Settings**.
2. On the Settings page, choose **Auth flow > Redirects**.

## Redirect to a static URL

A static URL is a single, unchanging web address that every customer would be directed to. To set it, enter the website address that you want to redirect your customers to in the **Redirect URL > URL** field.

You can ignore the other settings on the page.

## Redirect with reserved query parameters

You can conditionally redirect users based on what happens during authorization. 

Codat supports a number of reserved query parameters for redirects. If you add reserved parameters to the Redirect URL you send to your customer, Codat will replace the parameters with the relevant information.

To set up a redirect with reserved query parameters, enter a base URL with the reserved parameters you want to use to build the redirect in the **Redirect URL > URL** field. 

To add a parameter, wrap it in curly braces. For example: 

```http
https://redirect.site/{sourceType}/?flow=Codat&statuscode={statusCode}&errormessage={errorMessage}
```

If you use the redirect parameter values shown above, your customer is redirected to: 
  
```http
https://redirect.site/accounting/?flow=Codat&statuscode=403&errormessage=User%20cancelled
```

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
| `statusCode` | `200`, `201`, `403`, `500`, `501` | Codat standardizes the status codes returned by the integrations: <br/> **200** = Successful - user's request has been fulfilled. <br/> **201** = No content - successful, but no information about data connection will be available. <br/>_Possible scenario_: A user visits Link with a connection to their accounting source already established, so they do not take any action before exiting the flow. <br/> **403** = Not available. <br/>_Possible scenario_: A user chooses to quit the Link flow before the Linking process is completed. <br/> **501** = Platform not supported. <br/>_Possible scenario_: A user chooses an integration that is not supported by the client. At this point, the client offers them an alternative option outside of the Codat flows. <br/> **500** = Internal Server Error. Codat standardizes any errors which do not fit into one of the above categories to a 500 code - Internal Server Error. |
|`errorMessage` | | Codat standardizes error messages for the status codes. Error messages returned in the redirect will always be mapped with the status codes listed above. <br/> **403** = "User cancelled." <br/>  **500** = "Unknown error occurred." <br/>  **501** = "Not supported." <br/>  **Note**: If you want to use the original error message from the integration, use `statusText`. |
| `statusText` | _String_ | String as it's passed back from the integration. |
| `data.company.companyName` | _String_ | The name of the connected party within the underlying platform. <br/>This maps to the company name property in the [company info dataset](/accounting-api#/schemas/CompanyDataset). | 


:::note Availability of reserved query parameters
At present, the `data.company.companyName` is only supported for the following integrations:
- **Accounting**: Dynamics 365 Business Central, NetSuite, QuickBooks Online, Sage Intacct, and Xero.
:::

:::info Case sensitivity

The names of query parameters are case-sensitive, e.g. `companyId` is not the same as `companyid`.
:::

<details>
  <summary><b>Example: Use redirect params to see errors in the Link flow</b></summary>

   Redirect URL:
   ```
   https://www.mybank.io/{integrationType}?flow=Codat&statuscode={statusCode}&errormessage={errorMessage}
   ```
   
   1. For a user who authenticates the connection and can be redirected to the next stage in the flow, the redirect would be: 
      ```http
      https://www.mybank.io/accounting?flow=Codat&statuscode=200&errormessage=
      ```
   
   2. For a user who quits the linking process without providing access to their financial data because their platform is not supported or they do not wish to provide access to their data, the redirect below would be where they can upload the relevant documents manually.
      ```http
      https://www.mybank.io/accounting?flow=Codat&statuscode=403&errormessage=User%20cancelled
      ```
   
   3. For a user who encounters an unexpected error during the linking process, the redirect below would be where they can contact your support team for assistance.
      ```http
      https://www.mybank.io/accounting?flow=Codat&statuscode=500&errormessage= Unknown%20error%20occurred
      ```

</details>


## Redirect with custom query parameters

Codat supports custom query parameters for redirects. You can define your own values for each custom parameter so that you can direct different customers to, for example, different versions of a landing page. To do this, you need to add custom query parameters to the Redirect Parameter.

To set up a redirect with custom query parameters:

1. In the **Redirect URL** box, enter a base URL along with the parameters you want to use to build the custom redirect. To add a parameter, wrap it in curly braces. 
   For example: `https://mybank.io/{customParam}/show`.
2. Before you send out a **Link URL** to a customer, modify the URL by adding a question mark and the parameter name and value to the end of it.  
   For example: `https://link.codat.io/.../link?customParam=123456`.  
   If you want to add more than one parameter, separate them with an ampersand (`&`).
3. If you use the redirect parameter and Link URL values shown above, your customer is redirected to `https://redirect.site/123456/show`.

:::caution Special character encoding

Ensure any and all special characters used in the Link URL are correctly encoded, otherwise custom parameters may not pull through correctly.
:::

:::caution Unspecified custom parameters

It's not possible to specify default parameters. If you don't add a parameter to the Link URL when the redirect is built, it's replaced with an empty string.

<details>
  <summary><b>Example: Redirect behavior when custom parameters are missing</b></summary>

   For example, if you set your Redirect URL to the URL below...

   ```
   https://www.mybank.io/{journeyType}/success?ClientType={clientType}
   ```
   
   ...the Link URLs would give the following outcomes:
   
   | Link URL | Computed redirect |
   | :- | :- |
   | `...f67e946f84c9/link?journeyType=demo&clientType=test` | `https://www.mybank.io/demo/success?ClientType=test` |
   | `...f67e946f84c9/link?clientType=test` | `https://www.mybank.io//success?ClientType=test` |
   | `...f67e946f84c9/link?journeyType=demo` | `https://www.mybank.io/demo/success?ClientType=` |
   | `...f67e946f84c9/link` | `https://www.mybank.io//success?ClientType=` |

</details>
:::

## Dynamic hosts

It's also possible to send users to completely different websites and subdomains.

| Redirect URL setting | Link URL | Resolves to... |
| :- | :- | :- | 
| `https://{environment}.mybank.io/success` | `...f67e946f84c9/link?environment=uat` | `https://uat.mybank.io/success` |
| `https://mybank{customerType}.io/success` | `...f67e946f84c9/link?customerType=business` | `https://mybank{business}.io/success` |
| `https://{website}/success` | `...f67e946f84c9/link?website=mybank.io` | `https://mybank.io/success` |
| `https://mybank.{region}/success` | `...f67e946f84c9/link?region=com` | `https://mybank.com/success` |
| `https://{business}.io/success` | `...f67e946f84c9/link?business=mybank` | `https://mybank.io/success` |

<br/>

To use this dynamic host behaviour, you'll need to list each allowed host in **Allowed redirect URLs**.

For the above example, `https://{environment}.mybank.io/success`, you'd have to explicitly list all valid environments:
- `https://local.mybank.io/success`
- `https://uat.mybank.io/success`
- `https://prod.mybank.io/success`

**Note**: The URLs must be valid URLs, which means they must have *https://* or *http://* added before them.

:::note Reserved parameters

Do not use reserved parameters in your redirect hosts.
:::

## Allowed redirect hosts

Dynamic hosts will need to be defined here. A different domain suffix would count as a different host - e.g. mybank.io and mybank.com should be listed separately.

If you're not using the dynamic host feature, you don't need to use this setting.

---

## Read next

- Learn more about our [Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link)
