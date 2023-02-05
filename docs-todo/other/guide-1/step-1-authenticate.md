---
title: "Step 1: Authenticate"
slug: "step-1-authenticate"
hidden: true
createdAt: "2021-03-08T11:24:30.166Z"
updatedAt: "2022-11-21T12:20:22.870Z"
---

To use the Codat API, you'll first need to get authenticated. In this tutorial we'll help you to:

- Get your authorization header.
- Make your first API request.

:::note You'll need a Codat account for this tutorial

Each Codat account is provided with an API key. If you haven't signed up for an account yet, you can [sign up here](http://signup.codat.io/?initial_utm_medium=docs).
:::

Codat uses API keys to control access to the API. Every request to the server must include an Authorization header containing your API key encoded as Base64, prefixed with the word `Basic`.

You can read our guide to getting your authorization header [here](https://docs.codat.io/reference/authentication).

## Make your first API call using our API reference

1. Click **API reference** in the navigation bar to open our <a class="external" href="https://docs.codat.io/reference/authentication">API reference</a>.
2. Click **Codat API** > **Companies** to view the endpoints available for interacting with companies. By default, this displays the "All companies" endpoint, which lists all of your created companies.
3. Add your [authorization header](https://docs.codat.io/reference/authentication) to the Authentication section on the right-hand side of the page.
4. You can edit the query parameters for the call. Parameters `page` and `pageSize` are set automatically.
5. To execute the API call, click **Try it!** in the code snippet on the right-hand side of the page.

The API response is returned in the **Response** section beneath the code snippet, alongside a 200 code.

## Make your first API call in code

1. Create a new REST client using `<https://api.codat.io`> as the base URL.
2. Add your `Authorization` header.
3. Create a `GET` request for the `/companies` endpoint.
4. Execute the request.

```csharp C#
//using RestSharp;

var baseUrl = "https://api.codat.io";
var authHeaderValue = "Basic ABCDEF1234567890";

//Create a RestClient using the Codat API's base URL
var codatApiClient = new RestClient(baseUrl);

//Add your authorization header
codatApiClient.AddDefaultHeader("Authorization", authHeaderValue);

//Create a GET request
var getCompaniesRequest = new RestRequest("companies", Method.GET);
getCompaniesRequest.AddQueryParameter("page", "1");

//Execute the request
var getCompaniesResponse = codatApiClient.Execute(getCompaniesRequest);
```

```python
import requests

baseUrl = 'https://api.codat.io/'
authHeaderValue = 'Basic ABCDEF1234567890=='

getCompaniesUrl = baseUrl + 'companies?page=1&pageSize=100'
requestHeaders = {'Authorization' : authHeaderValue}

getCompaniesResponse = requests.get(getCompaniesUrl, headers=requestHeaders)
```
