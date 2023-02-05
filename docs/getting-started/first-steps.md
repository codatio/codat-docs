---
title: "First steps with Codat"
sidebar_label: First steps
description: "A practical introduction to Codat's Portal and API"
createdAt: "2021-02-12T12:07:42.887Z"
updatedAt: "2022-12-19T06:12:29.871Z"
---

:::note Prerequisites
You need an account and its API key to start with Codat. You can <a href="https://signup.codat.io/" target="_blank">sign up</a> for an account for free, or <a href="https://docs.codat.io/docs/core-account-signup" target="_blank">learn more</a> about creating one.
:::

## In this guide...

With Codat, you can leverage the financial data of your SMB customers to make smarter and faster decisions.

Set up your customers by adding them as companies in Codat. Then, establish authorized connections to the customers' accounting, banking, or commerce platforms using one of our integrations.

Finally, review and analyze the data relevant to your use case, which Codat pulls from your SMB customers' data sources.

This guide is aimed at developers and non-developers alike. In three easy steps, you will create a company, link it to Codat's sandbox, and review its financial data to get acquainted with Codat's solution.

:::info 🚀 Want to view data even faster?

Your free account comes equipped with a demo company. Navigate to **Companies** in the <a href="https://app.codat.io/companies?userflow=41dae845-29a6-4dd9-b886-4cb6c3464b1d" target="_blank">Codat Portal</a> and click the demo company to examine data relevant for your use case.
:::

You can perform each step in the Codat Portal or using our API.

<img
  src="https://raw.githubusercontent.com/codatio/codat-diagrams/03bed5cd40b599365aa7d4e2faa74379fcf5da8d/codat-concepts-quickstart.svg?token=A2XEKEOBLPXDEIA43SRARIDDQUARC"
  alt="A diagram showing the relationships between key Codat concepts"
/>

## Developer prerequisites

If you are a developer and want to work with Codat using our <a href="https://docs.codat.io/reference/using-codats-api-1" target="_blank">API Reference</a> or by making calls to our API in code, you first need to authenticate.

<details>
  <summary><b>Authenticate with Codat's API</b></summary>

:::caution
Authorization headers can only be viewed and copied by users with Administrator or Developer <a href="https://docs.codat.io/docs/user-roles" target="_blank">roles</a>.
:::

Codat uses API keys, Base64 encoded within an authorization header, to control access to the API. To copy your authorization header, navigate to **Developers > API keys** in the <a href="https://app.codat.io/developers/api-keys" target="_blank">Codat Portal</a>.

Then, replace `{basicAuthHeader}` in the code snippets below.

```Text Unix Bash
// Create a variable to hold your authorization header value
// In this guide, we use:

CODAT_AUTH_HEADER='{basicAuthHeader}'
```

```Text .NET
// Add package RestSharp and create a new REST client

using RestSharp;

var baseUrl = "https://api.codat.io";
var authHeaderValue = "{basicAuthHeader}";

var codatApiClient = new RestClient(baseUrl);
codatApiClient.AddDefaultHeader("Authorization", authHeaderValue);
```

```Text Node.js
// NOTE: This example is for server side code.
// Do not include your auth header in a client side rendered app.

// npm install axios@1.1.3

const axios = require("axios");

var baseUrl = "https://api.codat.io";
var authHeaderValue = "{basicAuthHeader}";

var codatApiClient = axios.create({
    baseURL: baseUrl,
  headers: {
      Authorization: authHeaderValue,
    "Content-Type": "application/json;charset=UTF-8",
  },
});
```

You can read more about <a href="https://docs.codat.io/reference/authentication" target="_blank">authentication at Codat</a>, or proceed to create your first company.

</details>

## 1. Create a company

Set up your SMB customer by adding them as a company. In the <a href="https://app.codat.io/companies" target="_blank">Codat Portal</a>, navigate to **Companies > New company**. The "Add new company" dialog appears.

Enter the name you want to give the entity that represents your SMB customer and click **Add**. A success message pops up, providing a connection URL. Normally, you would share this URL with your customer so they can authorize a connection with Codat.

Copy this URL for use in the next step. Note that this URL can be accessed again at any time in the future.

<img
  src="https://files.readme.io/5ab4ca8-2022-11-21_16-26-23.png"
  alt="Success modal of new company creation with company name and Link URL displayed"
/>

<details>
  <summary><b>Create a company using Codat's API</b></summary>

To create a company in Codat, use the `POST /companies` endpoint with a request body containing the `name` of the company. It does not have to be unique and serves to identify your customer in Codat.

````Text Unix Bash
curl --request POST \
     --url "https://api.codat.io/companies" \
     --header "Authorization: $CODAT_AUTH_HEADER" \
     --header "accept: application/json" \
     --header "content-type: application/json" \
     --data '
     {
          "name": "SMB company name"
     }
     ```

```Text .NET
var createCompanyRequest = new RestRequest("companies", Method.Post)
    .AddBody(new
    {
          name = "SMB company name",
        platformType = "mqjo"
    });
    var createCompanyResponse = codatApiClient.Execute(createCompanyRequest);
Console.WriteLine(createCompanyResponse.Content);
````

```Text Node.js
codatApiClient
  .post("/companies", {
      name: "SMB company name",
    platformType: "mqjo",
  })
  .then((response) => {
      console.log(response.data);
  })
  .catch((error) => {
      console.log(error);
  });
```

The endpoint returns a JSON response, confirming the unique `id` of the company and a `redirect` URL used to establish a connection with a data source.

Retain the `id` and `redirect` URL for use in the next steps.

You can also use the <a href="https://docs.codat.io/reference/createcompany" target="_blank"><i>Create company</i></a> endpoint in our API reference to try this out.

</details>

## 2. Create a sandbox data connection

Next, connect your company to our Sandbox to make use of mock accounting, commerce, and banking data. It gives you access to many of the data types and operations supported by Codat.

If you have retained the connection URL from the previous step, simply open it in a new browser tab.

If you need to view the URL again, navigate to **Companies** in the <a href="https://app.codat.io/companies" target="_blank">Codat Portal</a>. Next, find the company you created for the customer, and click **Request data** next to the company name. Copy the Link URL and open it in the new tab.

This opens Codat's authorization flow built using our Link <a href="https://docs.codat.io/docs/auth-flow" target="_blank">feature</a>.

<img
  src="https://files.readme.io/cdeee57-2022-11-21_20-09-48.png"
  alt="Link URL in the Request Data modal"
/>

Follow the flow and select **Codat Sandbox** as your source of accounting, commerce, and banking data. You don't need to enter any credentials. Skip the step of uploading business documents.

When all Sandbox connections are complete, you'll see a confirmation message. You can now close the tab. Meanwhile, Codat pulls the Sandbox data via the established connection.

<img
  src="https://files.readme.io/e802c95-2022-11-21_20-15-14.png"
  alt="Link flow step connecting to Codat Sandbox for accounting data. Sandbox integration is selected"
/>

<details>
  <summary><b>Link to Sandbox using Codat's API</b></summary>

Pick up the `redirect` URL returned in the response body of the company creation step and open it in a new browser window.

Follow the flow to connect to the Codat Sandbox as your source of accounting, commerce, and banking data. You don't need to enter any credentials.

Once the flow is complete, you can verify the company's status under the <a href="https://docs.codat.io/reference/getcompany" target="_blank"><i>View a single company</i></a> endpoint.

Remember to replace `{companyId}` with your company `id` obtained previously.

````Text Unix Bash
curl --request GET \
     --url "https://api.codat.io/companies/{companyId}" \
     --header "Authorization: $CODAT_AUTH_HEADER" \
     --header "accept: application/json"
     ```

```Text .NET
var getCompanyRequest = new RestRequest($"companies/{companyId}", Method.Get);
var getCompanyResponse = codatApiClient.Execute(getCompanyRequest);
Console.WriteLine(getCompanyResponse.Content);
````

```Text Node.js
codatApiClient
  .get(`/companies/${companyId}`)
  .then((response) => {
      console.log(response.data);
  })
  .catch((error) => {
      console.log(error);
  });
```

In the JSON response, you can see that the the `status` of data connections changed to **linked**.

On first connection, Codat pulls data from the data source immediately. You can also use the <a href="https://docs.codat.io/reference/get_companies-companyid-datastatus" target="_blank"><i>Get company data status</i></a> endpoint to confirm the sync was successful.

</details>

Now you are ready to examine the company's financial data and view the datasets relevant to your use case.

## 3. Examine company data for your use case

Navigate back to the **Companies** page in the <a href="https://app.codat.io/companies" target="_blank">Codat Portal</a>. You will see your newly created company, along with the connections to the Accounting, Commerce, and Banking Sandboxes that were connected in the previous step.

<img
  src="https://files.readme.io/671c3bb-2022-11-22_16-04-26.png"
  alt="Example created company is visible in the companies list with its connections to sandbox"
/>

Now, click the company name and use the side menu to navigate to **Products**. You can review the data pulled by Codat's accounting, banking, and commerce APIs. Switch between the data types using the dropdown on the right, and view and export data as needed for your use case.

Here, we review the SMB customer's invoice data pulled from the accounting Sandbox. This data helps with business forecasts and cash flow management based on sales changes over time, average payment timelines, and amounts related to the invoices.

<img
  src="https://files.readme.io/32f7dff-2022-11-22_16-22-17.png"
  alt="Invoices data type view of Codat's accounting API"
/>

Developers can also use the Portal to review how Codat polled for a specific data type and the results it received at the bottom of each data type page.

<img
  src="https://files.readme.io/bf495eb-2022-11-22_16-28-50.png"
  alt="Invoices data type view of Codat's accounting API"
/>

<details>
  <summary><b>Access company data using Codat's API</b></summary>

Codat provides various endpoints for you to query each of the supported data types easily.

For example, to query invoices, use the <a href="https://docs.codat.io/reference/listinvoicespaged" target="_blank"><i>All invoices</i></a> endpoint. You can perform filtering on the response data using querying. In this guide, we are using `page` and `pageSize` parameters to pull ten invoices for the company we created earlier.

Remember to replace `{companyId}` with your company `id` obtained previously.

````Text Unix Bash
curl --request GET \
     --url "https://api.codat.io/companies/{companyId}/data/invoices?page=1&pageSize=10" \
     --header "Authorization: $CODAT_AUTH_HEADER" \
     --header "accept: application/json"
     ```

```Text .NET
var getInvoicesRequest = new RestRequest($"companies/{companyId}/data/invoices", Method.Get)
    .AddQueryParameter("page", "1")
    .AddQueryParameter("pageSize", "10");
    var getInvoicesResponse = codatApiClient.Execute(getInvoicesRequest);
Console.WriteLine(getInvoicesResponse.Content);
````

```Text Node.js
codatApiClient
  .get(`/companies/${companyId}/data/invoices`, {
      params: { page: 1, pageSize: 10 },
  })
  .then((response) => {
      console.log(response.data);
  })
  .catch((error) => {
      console.log(error);
  });
```

In the JSON response, the API provides ten detailed invoices as a result.

You can also use the Portal to review how Codat polled for a specific data type and the results it received at the bottom of each data type page.

</details>

:::success Recap
You have now:

- created a Codat company that represents your small business customer,
- authorized sandbox connections to pull various financial data, and
- reviewed the data and its visual representation, relating it to your use case.
  :::

## Next steps

### Want to pull and view data from a different platform?

Codat enables you to connect to over 30 different accounting, banking, and commerce platforms. You can choose to pull data from a platform most relevant to you.

Navigate to **Settings > Integrations** in the Portal. Choose the integration type, find the platform you need, and set it up. Once you've enabled the platform, create a data connection to it, as you have done with the Sandbox earlier. You will need valid credentials for the platform you are trying to link.

You can review our detailed instructions for setting up integrations like [Xero](https://docs.codat.io/docs/accounting-xero-setup), [QuickBooks Online](https://docs.codat.io/docs/accounting-quickbooksonline-new-setup), [PayPal](https://docs.codat.io/docs/set-up-paypal-in-production), [Plaid](https://docs.codat.io/docs/banking-plaid-setup), and many more.

### Curious about what other data Codat can provide you with?

Codat pulls a variety of data types from the source platforms, making it easy to suit the needs of your use case.

With our [accounting integrations](https://docs.codat.io/docs/datamodel-accounting), you can pull financial statements, earning and spending detail, journal entries, tax details, and many more. Our [banking integrations](https://docs.codat.io/docs/datamodel-banking) provide you with banking transactions, accounts, and account balances. Finally, our [commerce integrations](https://docs.codat.io/docs/datamodel-commerce) can show you details of orders, customers, payments, products, and others.

### Keen to customize the look and feel of the auth flow?

Colors, logos, and icons of Codat's authorization flow [can be changed](https://docs.codat.io/docs/set-up-your-company-branding) for a bespoke experience. Navigate to **Settings > Auth flow > Branding** in the Codat Portal and adjust to fit the flow to your brand's palette.

Then, use the Link URL of the company you created earlier to review your customer's experience with the flow. You can even take the customization [one step further](https://docs.codat.io/docs/set-up-link) and amend the accompanying text and behaviors.

### Want to migrate your existing integration to Codat?

If you already have an OAuth application with one of our supported integrations, you can seamlessly migrate your customers' connections — without your customers needing to reconnect.

You can choose a self-service token migration, or engage us for a managed migration. [Choose the option](https://docs.codat.io/docs/oauth-token-migration) that best suits your use case.
