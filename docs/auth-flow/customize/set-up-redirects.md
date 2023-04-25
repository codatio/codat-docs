---
title: "Set up redirect URLs"
description: "Complete your customer's Hosted Link journey with a redirect location"
createdAt: "2022-05-11T17:45:39.001Z"
updatedAt: "2023-01-11T13:09:39.574Z"
---

Once your customers have successfully completed authorization of the connection to their data via [Link](/auth-flow/overview), you can redirect them to another website.

There are a few ways you can redirect your customers:

- [Redirect to a static URL](#redirect-to-a-static-url)
- [Redirect with custom query parameters](#redirect-with-custom-query-parameters)
- [Redirect with reserved query parameters](#redirect-with-reserved-query-parameters)

:::note Redirect URLs in Embedded Link

Your redirects will only apply to Hosted Link. For Embedded Link, build out the required redirect configuration within your application.
:::

## Setting redirect settings

You can find the redirect settings page in the Portal:

1. In the navigation bar click **Settings**
2. In the side nav, click [**Auth flow > Redirects**](https://app.codat.io/settings/redirects)

## Types of redirect URL

### Redirect to a static URL

A static URL is a single, unchanging web address that every customer would be directed to.

Just enter the website address that you want to redirect your customers to in the URL field.

### Redirect with custom query parameters

Codat supports custom query parameters for redirects. You can define your own values for each custom parameter so that you can direct different customers to, for example, different versions of a landing page. To do this, you need to add custom query parameters to the Redirect Parameter.

To set up a redirect with custom query parameters:

1. In the **Redirect URL** box, enter a base URL along with the parameters you want to use to build the custom redirect. To add a parameter, wrap it in curly braces. For example: `https://mybank.io/{customparam}/show`.
2. Before you send out a **Link URL** to a customer, modify the string in the URL box by adding a question mark and the parameter name and value to the end of it.  
   For example: `https://link.codat.io/.../link?customparam=123456`.  
   If you want to add more than one parameter, separate them with an ampersand (`&`).
3. If you use the redirect parameter and Link URL values shown above, your customer is redirected to `https://redirect.site/123456/show`.

#### Unspecified custom parameters

It's not possible to specify default parameters. If you don't add a parameter to the Link URL when the redirect is built, it's replaced with an empty string.

For example, if you set your Redirect URL to the URL below...

```
https://www.mybank.io/{journeyType}/success?ClientType={clientType}
```

...the link URLs would give the following outcomes:

- `...f67e946f84c9/link?journeyType=demo&clientType=test` -> `https://www.mybank.io/demo/success?ClientType=test`.
- `...f67e946f84c9/link?clientType=test` -> `https://www.mybank.io//success?ClientType=test`.
- `...f67e946f84c9/link?journeyType=demo` -> `https://www.mybank.io/demo/success?ClientType=`.
- `...f67e946f84c9/link` -> `https://www.mybank.io//success?ClientType=`.

:::caution Special character encoding

Ensure any and all special characters used in the link URL are correctly encoded; otherwise custom parameters may not pull through correctly.
:::

### Redirect with reserved query parameters

Codat supports a number of reserved query parameters for redirects. Codat will replace the reserved parameters in your redirects with pre-defined, non-customizable values. This way you can, for instance, redirect your customers through your own flows after they have left Link. To do this, you need to add reserved parameters to the Redirect Parameter and the Link URL that you send to your customer.

To set up a redirect with reserved query parameters:

1. In the **Redirect URL** box, enter a base URL along with the reserved parameters you want to use to build the redirect. To add a parameter, wrap it in curly braces. For example: 
   ```http
   https://redirect.site/{sourceType}/?flow=Codat&statuscode={statusCode}&errormessage={errorMessage}
   ```
2. If you use the redirect parameter values shown above, your customer is redirected to: 
   ```http
   https://redirect.site/accounting/?flow=Codat&statuscode=403&errormessage=User%20cancelled
   ```

:::note Availability of reserved query parameters

That the names of the parameters listed in the table below are currently available for the following platforms:  
**accounting**: FreeAgent, Freshbooks, Microsoft Dynamics 365 Business Central, MYOB Business, Pandle, Quickbooks Online, Sage Business Cloud, Wave  
**banking**: Plaid
:::

| Codat's reserved parameters | Substitution values | Additional information |
|----|----|----|
| clientId|GUID (Globally Unique Identifier)|Identifier of the client that completes the authorization flow. **Note**: As a Codat client you may have multiple Codat instances. Each of those instances will have a separate `clientId`.|
| [connectionId](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_)|GUID|Identifier of the data connection that the authorization flow was completed for.|
| [companyId](https://api.codat.io/swagger/index.html#/Companies/post_companies__companyId__syncSettings)|GUID|Identifier of the company that completes the authorization flow.|
| [integrationId](https://api.codat.io/swagger/index.html#/Integrations/get_integrations)|GUID|Identifier of the integration the company authorized.|
| [sourceId](https://api.codat.io/swagger/index.html#/Integrations/get_integrations)|GUID|Identifier of the data source for the authorized integration.|
| [platform](https://api.codat.io/swagger/index.html#/Integrations/get_integrations__platformKey_)|e.g. _gbol, mqjo, zsth, ugxp_|4 character key of the platform as used to reference integrations.|
| [platformName](https://api.codat.io/swagger/index.html#/Integrations/get_integrations)|e.g. _Xero, SandBox, Square, iZettle Go_|Name of the platform as displayed in the Codat Portal.|
| [sourceType](https://api.codat.io/swagger/index.html#/Integrations)|Accounting, Banking, BankFeed, Commerce, Expense, Other|Name of the source used to retrieve data from.|
| statusCode|200, 201, 403, 500, 501|Codat standardises the status codes returned by the integrations to the following: 200 = Successful - user's request has been fulfilled. 201 = No content - successful, but no information about data connection will be available. _Possible scenario_: A user visits Link with a connection to their accounting source already established, so they do not take any action before exiting the flow. 403 = Not available. _Possible scenario_: A user chooses to quit the Link flow before the Linking process is completed. 501 = Platform not supported. _Possible scenario_: A user chooses an integration that is not supported by the client. At this point, the client offers them an alternative option outside of the Codat flows. 500 = Internal Server Error. Codat standardises any errors which do not fit into one of the above categories to a 500 code - Internal Server Error.|
|errorMessage||Codat standardises error messages for the status codes. This means that an error message returned in the redirect will always be mapped with the status codes listed in the `statusCode` line above. StatusCode 403 = "User cancelled.", StatusCode 500 = "Unknown error occurred.", StatusCode 501 = "Not supported." **Note**: If you want to use the original error message from the integration, use `statusText`.|
|statusText|_String_|String as it's passed back from the integration.|

:::info Case sensitivity

The names of query parameters are case sensitive, e.g. `companyId` is not the same as `companyid`.
:::

#### Configuration examples

Have a look at some examples of how your redirects can be configured with reserved query parameters in several typical scenarios.

Initial configuration:

```
https://www.mybank.io/{integrationType}?flow=Codat&statuscode={statusCode}&errormessage={errorMessage}
```

1. For a user who authenticates the connection and can be redirected to the next stage in the flow, the redirect would be: 
   ```http
   https://www.mybank.io/accounting?flow=Codat&statuscode=200&errormessage=
   ```

2. For a user who quits the linking process without providing access to their financial data either because a) their platform is not supported or b) they do not wish to provide access to their data, the redirect below would be where they can upload the relevant documents manually.
   ```http
   https://www.mybank.io/accounting?flow=Codat&statuscode=403&errormessage=User%20cancelled
   ```

3. For a user who encounters an unexpected error during the linking process, the redirect below would be where they can contact your support team for assistance.
   ```http
   https://www.mybank.io/accounting?flow=Codat&statuscode=500&errormessage= Unknown%20error%20occured
   ```

### Allowed redirect hosts

The **Allowed redirect URLs** option allows you to use a [custom query parameter](/auth-flow/customize/set-up-redirects#redirect-with-custom-query-parameters) to dynamically change the redirect URL, including its host, when initiating the authorization flow. When your customer starts the linking flow, Codat verifies if the host of the URL is listed as an allowable host.

### Configuration

The **Authorization Complete Redirection Url** is a URL your customers are sent to when they've authenticated their connection via Link. In Codat, you can decide if you want to:

- Redirect to a static website (static host)
- Redirect with custom query parameters (dynamic host).


| Redirect | Configuration |
|----|----|
| Static host|Provide one URL in **Authorization Complete Redirection Url**.|
| Dynamic host|To build dynamically: 1. Provide one URL that uses custom parameters in **Authorization Complete Redirection Url**. 2. List one or more URLs of each allowable host in **Allowed redirect URLs**. 3. When sending the Link URL to your customers, add the configured parameters to the URL.|
| |If the redirect evaluates to a host that has not been placed on this list, your customer will not be redirected to it and will see an error.|

**Note**: The URLs must be valid URLs, which means they must have* https://* or* http\://* added before them.

Example configuration:  
If you set the redirect to `https://{dynamichost}/example` and set the dynamic host to `dynamichost=codat.io` the redirect will be evaluated to `https://codat.io/example`.

:::note Reserved parameters

Do not use reserved parameters in your redirect hosts.
:::
