---
title: "Set up redirect URLs"
description: "Complete your customer's Hosted Link journey with a redirect location"
createdAt: "2022-05-11T17:45:39.001Z"
updatedAt: "2023-01-11T13:09:39.574Z"
---

Once your customers have successfully completed authorization of the connection to their data via [Link](/auth-flow), you can redirect them to the locations of your choice.

The following options of redirect configuration are available in the Codat Portal:

- redirect to a static website
- redirect with custom query parameters
- redirect with reserved query parameters

:::note Redirect URLs in Embedded Link

Note that configuring redirects in the Codat Portal is only possible for Hosted Link. For Embedded Link, build out the required redirect configuration within your application.
:::

## Redirect to a static website

A static website is a single web address you set for every customer to be directed to.

To set up a redirect to a static website:

1. Open the [Codat Portal](https://app.codat.io) and sign in.
2. In the navigation bar, select **Settings > Redirects**.
3. Enter the website address that you want to redirect your customers to.

## Redirect with custom query parameters

Codat supports custom query parameters for redirects. You can define your own values for each custom parameter so that you can direct different customers to, for example, different versions of a landing page. To do this, you need to add custom query parameters to the Redirect Parameter.

Note that this page autosaves when changes are made.

To set up a redirect with custom query parameters:

1. Follow steps 1 to 3 in the Redirect to a static website section above.
2. In the **Redirect URL** box, enter a base URL along with the parameters you want to use to build the custom redirect. To add a parameter, wrap it in curly braces. For example: `https://redirect.site/{customparam}/show`.
3. Before you send out a **Link URL** to a customer, modify the string in the URL box by adding a question mark and the parameter name and value to the end of it.  
   For example: `https://link.codat.io/.../link?customparam=123456`.  
   If you want to add more than one parameter, separate them with an ampersand (`&`).
4. If you use the redirect parameter and Link URL values shown above, your customer is redirected to `https://redirect.site/123456/show`.

### Unspecified custom parameters

It's not possible to specify default parameters. If you don't add a parameter to the Link URL when the redirect is built, it's replaced with an empty string.

For example, if you set your Redirect URL to: `https://www.codat.io/{journeyType}/success?ClientType={clientType}`, then the link URLs would give the following outcomes:

- `...f67e946f84c9/link?journeyType=demo&clientType=test` would ultimately send you to `https://www.codat.io/demo/success?ClientType=test`.
- `...f67e946f84c9/link?clientType=test` would ultimately send you to `https://www.codat.io//success?ClientType=test`.
- `...f67e946f84c9/link?journeyType=demo` would ultimately send you to `https://www.codat.io/demo/success?ClientType=`.
- `...f67e946f84c9/link` would ultimately send you to `https://www.codat.io//success?ClientType=`.

:::caution Special character encoding

Please ensure any and all special characters used in the link URL are correctly encoded; otherwise custom parameters may not pull through correctly.
:::

## Redirect with reserved query parameters

Codat supports a number of reserved query parameters for redirects. Codat will replace the reserved parameters in your redirects with pre-defined, non-customizable values. This way you can, for instance, redirect your customers through your own flows after they have left Link. To do this, you need to add reserved parameters to the Redirect Parameter and the Link URL that you send to your customer.

:::success Before you start:

- Follow steps 1 to 3 in the Redirect to a static website section above.
  :::

Note that this page autosaves when changes are made.

To set up a redirect with reserved query parameters:

1. In the **Redirect URL** box, enter a base URL along with the reserved parameters you want to use to build the redirect. To add a parameter, wrap it in curly braces. For example: `https://redirect.site/{sourceType}/?flow=Codat&statuscode={statusCode}&errormessage={errorMessage}`
2. If you use the redirect parameter values shown above, your customer is redirected to: `https://redirect.site/accounting/?flow=Codat&statuscode=403&errormessage=User%20cancelled`.

:::note Availability of reserved query parameters

Please note that the names of the parameters listed in the table below are currently available for the following platforms:  
**accounting**: FreeAgent, Freshbooks, Microsoft Dynamics 365 Business Central, MYOB AccountRight, Pandle, Quickbooks Online, Sage Business Cloud, Wave  
**banking**: Plaid
:::

[block:parameters]
{
"data": {
"h-0": "Codat’s reserved parameters",
"h-1": "Substitution values",
"h-2": "Additional information",
"0-0": "clientId",
"0-1": "GUID (Globally Unique Identifier)",
"0-2": "Identifier of the client that completes the authorization flow.

**Note**: As a Codat client you may have multiple Codat instances. Each of those instances will have a separate `clientId`.",
"1-0": "[connectionId](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_)",
"1-1": "GUID",
"1-2": "Identifier of the data connection that the authorization flow was completed for.",
"2-0": "[companyId](https://api.codat.io/swagger/index.html#/Companies/post_companies__companyId__syncSettings)",
"2-1": "GUID",
"2-2": "Identifier of the company that completes the authorization flow.",
"3-0": "[integrationId](https://api.codat.io/swagger/index.html#/Integrations/get_integrations)",
"3-1": "GUID",
"3-2": "Identifier of the integration the company authorized.",
"4-0": "[sourceId](https://api.codat.io/swagger/index.html#/Integrations/get_integrations)",
"4-1": "GUID",
"4-2": "Identifier of the data source for the authorized integration.",
"5-0": "[platform](https://api.codat.io/swagger/index.html#/Integrations/get_integrations__platformKey_)",
"5-1": "e.g. _gbol, mqjo, zsth, ugxp_",
"5-2": "4 character key of the platform as used to reference integrations.",
"6-0": "[platformName](https://api.codat.io/swagger/index.html#/Integrations/get_integrations)",
"6-1": "e.g. _Xero, SandBox, Square, iZettle Go_ ",
"6-2": "Name of the platform as displayed in the Codat Portal.",
"7-0": "[sourceType](https://api.codat.io/swagger/index.html#/Integrations)",
"7-1": "Accounting, Banking, BankFeed, Commerce, Expense, Other",
"7-2": "Name of the source used to retrieve data from.",
"8-0": "statusCode",
"8-1": "200, 201, 403, 500, 501",
"8-2": "Codat standardises the status codes returned by the integrations to the following:

200 = Successful — user’s request has been fulfilled.

201 = No content — successful, but no information about data connection will be available.

_Possible scenario_: A user visits Link with a connection to their accounting source already established, so they do not take any action before exiting the flow.

403 = Not available

_Possible scenario_: A user chooses to quit the Link flow before the Linking process is completed.

501 = Platform not supported.

_Possible scenario_: A user chooses an integration that is not supported by the client. At this point, the client offers them an alternative option outside of the Codat flows.

500 = Internal Server Error

Codat standardises any errors which do not fit into one of the above categories to a 500 code - Internal Server Error.",
"9-0": "errorMessage",
"9-1": ""User cancelled"  
"Unknown error occurred"  
"Not supported"",
"9-2": "Codat standardises error messages for the status codes. This means that an error message returned in the redirect will always be mapped with the status codes listed in the `statusCode` line above.

StatusCode 403 = “User cancelled.”

StatusCode 500 = "Unknown error occurred."

StatusCode 501 = "Not supported."

**Note**: If you want to use the original error message from the integration, use `statusText`.",
"10-0": "statusText",
"10-1": "_String_ ",
"10-2": "String as it's passed back from the integration."
},
"cols": 3,
"rows": 11,
"align": [
"left",
"left",
"left"
]
}
[/block]

**Note**: The names of query parameters are case sensitive, e.g. `companyId` is not the same as `companyid`.

### Configuration examples

Have a look at some examples of how your redirects can be configured with reserved query parameters in several typical scenarios.

Initial configuration: `https://www.rocketbank.io/{integrationType}?flow=Codat&statuscode={statusCode}&errormessage={errorMessage}`

1. For a user who authenticates the connection and can be redirected to the next stage in the flow, the redirect would be: `https://www.rocketbank.io/accounting?flow=Codat&statuscode=200&errormessage=`

2. For a user who quits the linking process without providing access to their financial data either because a) their platform is not supported or b) they do not wish to provide access to their data, the redirect would be`https://www.rocketbank.io/accounting?flow=Codat&statuscode=403&errormessage=User%20cancelled`, where they can upload the relevant documents manually.

3. For a user who encounters an unexpected error during the linking process, the redirect would be: `https://www.rocketbank.io/accounting?flow=Codat&statuscode=500&errormessage= Unknown%20error%20occured`, where they can contact your support team for assistance.

## Allowed redirect hosts

The **Allowed redirect URLs** option allows you to use a [custom query parameter ](/redirect-urls#redirect-with-custom-query-parameters) to dynamically change the redirect URL, including its host, when initiating the authorization flow. When your customer starts the linking flow, Codat verifies if the host of the URL is listed as an allowable host.

## Configuration

The **Authorization Complete Redirection Url** is a URL your customers are sent to when they've authenticated their connection via Link. In Codat, you can decide if you want to:

- Redirect to a static website (static host)
- Redirect with custom query parameters (dynamic host).

[block:parameters]
{
"data": {
"h-0": "Redirect",
"h-1": "Configuration",
"0-0": "Static host",
"0-1": "Provide one URL in **Authorization Complete Redirection Url**.",
"1-0": "Dynamic host",
"1-1": "To build dynamically:

1. Provide one URL that uses custom parameters in **Authorization Complete Redirection Url**.

2. List one or more URLs of each allowable host in **Allowed redirect URLs**.

3. When sending the Link URL to your customers, add the configured parameters to the URL.",
   "2-0": "",
   "2-1": "If the redirect evaluates to a host that has not been placed on this list, your customer will not be redirected to it and will see an error."
   },
   "cols": 2,
   "rows": 3,
   "align": [
   "left",
   "left"
   ]
   }
   [/block]

**Note**: The URLs must be valid URLs, which means they must have* https://* or* http\://* added before them.

Example configuration:  
If you set the redirect to `https://{dynamichost}/example` and set the dynamic host to `dynamichost=codat.io` the redirect will be evaluated to `https://codat.io/example`.

:::note Reserved parameters

Do not use reserved parameters in your redirect hosts.
:::
