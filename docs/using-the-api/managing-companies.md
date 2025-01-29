---
title: "Manage companies with our API"
sidebar_label: Via API
description: "Learn about creating and managing companies, their connections, and their data via API"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Onboard your users

Your users or customers are [companies](/core-concepts/companies). To access their data you'll need to onboard them.

To onboard a new user or customer:
1. Create a company
2. Authorize access to sources of data
3. Read the data

You can either onboard users:

- When they first create an account with your service
- At the first point you want to retrieve their financial data

### Create a company

To create a new company, use the [Create company](/platform-api#/operations/create-company) endpoint and provide a name for the company in the request body.  The `name` parameter is mandatory to execute this request. You can also provide a `description` to store additional information about the company.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
platformClient.companies.create({
    name: "Toft stores",
    description: "Need a loan for refurb."
}).then((companyCreatedRes: CreateCompanyResponse) => {
    if (companyCreatedRes.statusCode == 200) {
        console.log(companyCreatedRes.company.id, companyCreatedRes.company.name)
    }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
req = shared.CompanyRequestBody(
    name='Toft stores',
    description='Need a loan for refurb.'
    )

company_created_res = platform_client.companies.create(req)
print(company_created_res.company.id, company_created_res.company.name)
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyCreatedRes = await platformClient.Companies.CreateAsync(new CompanyRequestBody() {
    Name = "Toft stores",
    Description = "Need a loan for refurb."
  });

if(companyCreatedRes.Company != null) {
    var company = companyCreatedRes.Company;
    logger.LogInformation('{CompanyId} {CompanyName}', company.Id, company.Name);
}
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()

companyCreatedRes, err := platformClient.Companies.Create(ctx, shared.CompanyRequestBody{
    Name: "Toft stores",
    Description: "Need a loan for refurb."
})

if err != nil {
    log.Fatal(err)
}

if companyCreatedRes.Company != nil {
    fmt.Println("%s %s", companyCreatedRes.Company.Id, companyCreatedRes.Company.Name)
}
```
</TabItem>

<TabItem value="java" label="Java">

```go
CompanyRequestBody req = CompanyRequestBody.builder()
    .name("Toft stores")
    .description("Need a loan for refurb.")
    .build();

CreateCompanyResponse companyCreatedRes = platformClient.companies().create()
    .request(req)
    .call();

if (companyCreatedRes.company().isPresent()) {
    // handle response
}
```
</TabItem>


</Tabs>

:::caution Retain the company ID

The `id` property that you receive in the response is the unique Codat identifier for this company. **We recommend that you retain it for future reference.**
:::

:::note Company name

The name of the company helps you identify the company in the Codat Portal and doesn't have to be unique. Make sure to [avoid forbidden characters](/core-concepts/companies).
:::

### Add metadata to a company

You can enrich a company profile with additional information using the `tags` object. These tags provide flexible ways to store metadata.

For example, you can set foreign key associations, define operational regions, or record specific details about the financial services  a company has requested. 

Each company can have up to 10 tags that you can add using the [Create company](/platform-api#/operations/create-company) endpoint or when updating the company via the [Update company](/platform-api#/operations/update-company) endpoint.

:::tip Use tags with webhooks

You can use the `tags` object to filter companies to specific webhook consumers. To learn more, see [Filter webhooks by company tags](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags).

:::

For example, here's how you can add tags that define a user-defined ID (UID) and operating region:

<Tabs>

<TabItem value="create-company" label="Create company">

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
platformClient.companies.create({
    name: "Toft stores",
    tags: {
      uid: "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      region: "uk"
    }
}).then((companyCreatedRes: CreateCompanyResponse) => {
    if (companyCreatedRes.statusCode == 200) {
        console.log(companyCreatedRes.company.id, companyCreatedRes.company.name)
    }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
req = shared.CompanyRequestBody(
  name='Toft stores',
  tags={
    'uid': 'cust_1MtJUT2eZvKYlo2CNaw2HvEv',
    'region': 'uk'
  }
)

company_created_res = platform_client.companies.create(req)
print(company_created_res.company.id, company_created_res.company.name)
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyCreatedRes = await platformClient.Companies.CreateAsync(new CompanyRequestBody() {
    Name = "Toft stores",
    Tags = new Dict<string, string>(){
      ["uid"] = "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      ["region"] = "uk"
    }
});

if(companyCreatedRes.Company != null) {
    var company = companyCreatedRes.Company;
    logger.LogInformation('{CompanyId} {CompanyName}', company.Id, company.Name);
}
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()

companyCreatedRes, err := platformClient.Companies.Create(ctx, shared.CompanyRequestBody{
    Name: "Toft stores",
    Tags: map[string]string{
      "uid": "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      "region": "uk"
    }
})

if err != nil {
    log.Fatal(err)
}

if companyCreatedRes.Company != nil {
    fmt.Println("%s %s", companyCreatedRes.Company.Id, companyCreatedRes.Company.Name)
}
```
</TabItem>

<TabItem value="java" label="Java">

```java
CompanyRequestBody req = CompanyRequestBody.builder()
    .name("Toft stores")
    .tags(
      java.util.Map.ofEntries(
        entry("uid", "cust_1MtJUT2eZvKYlo2CNaw2HvEv"),
        entry("region", "uk")
      )
    )
    .build();

CreateCompanyResponse companyCreatedRes = platformClient.companies().create()
    .request(req)
    .call();

if (companyCreatedRes.company().isPresent()) {
    // handle response
}
```
</TabItem>

</Tabs>

</TabItem>

<TabItem value="update-company" label="Update company">

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
platformClient.companies.update({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyRequestBody: {
    name: "Toft stores",
    tags: {
      uid: "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      region: "uk"
    }
  }
}).then((companyUpdatedRes: UpdateCompanyResponse) => {
    if (companyUpdatedRes.statusCode == 200) {
        console.log(companyUpdatedRes.company.id, companyUpdatedRes.company.name)
    }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
req = shared.CompanyRequestBody(
  name='Toft stores',
  tags={
    'uid': 'cust_1MtJUT2eZvKYlo2CNaw2HvEv',
    'region': 'uk'
  }
)

company_updated_res = platform_client.companies.update(operations.UpdateCompanyRequest(
    company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
    company_request_body=req)
  )
print(company_updated_res.company.id, company_updated_res.company.name)
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyCreatedRes = await platformClient.Companies.UpdateAsync(new UpdateCompanyRequest() {
  CompanyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  CompanyRequestBody = new CompanyRequestBody() {
    Name = "Toft stores",
    Tags = new Dict<string, string>(){
      ["uid"] = "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      ["region"] = "uk"
    }
  }
});

if(companyCreatedRes.Company != null) {
    var company = companyCreatedRes.Company;
    logger.LogInformation('{CompanyId} {CompanyName}', company.Id, company.Name);
}
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()

companyUpdatedRes, err := platformClient.Companies.Create(ctx, operations.UpdateCompanyRequest{
  CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
  CompanyRequestBody: shared.CompanyRequestBody{
    Name: "Toft stores",
    Tags: map[string]string{
      "uid": "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      "region": "uk"
    }
  }
})

if err != nil {
    log.Fatal(err)
}

if companyUpdatedRes.Company != nil {
    fmt.Println("%s %s", companyUpdatedRes.Company.Id, companyUpdatedRes.Company.Name)
}
```
</TabItem>

<TabItem value="java" label="Java">

```java
UpdateCompanyRequest req = UpdateCompanyRequest.builder()
    .companyId("8a210b68-6988-11ed-a1eb-0242ac120002")
    .companyRequestBody(CompanyRequestBody.builder()
        .name("Bank of Dave")
        .tags(
            java.util.Map.ofEntries(
              entry("uid", "cust_1MtJUT2eZvKYlo2CNaw2HvEv"),
              entry("region", "uk")
            )
        ).build()
    )
    .build();

UpdateCompanyResponse companyUpdatedRes = platformClient.companies().update()
    .request(req)
    .call();

if (companyUpdatedRes.company().isPresent()) {
    // handle response
}
```
</TabItem>

</Tabs>

</TabItem>

</Tabs>

:::caution Updating a company with existing tags

If you use include a `null` or empty `tags` object in the [Update company](/platform-api#/operations/update-company) endpoint request, any existing tags for this company will be removed. To retain existing tags, ensure they are included in the update.

:::

### Authorize access to company data

Once you've created the company, they'll need to give you permission to read their data from a given source, like their accounting software. There are several approaches to doing this, but for simplicity we've just covered our out-of-the-box [hosted link](/auth-flow/authorize-hosted-link) approach.

Send the user to the `redirect` URL returned in the previous step. They will be sent to [Link](/auth-flow/authorize-hosted-link) where they can select their accounting software and complete the linking process.

Once the user has completed the Link flow, the Codat platform will redirect them to the redirect URL you have configured in the **Settings > Auth flow > Link** in the Codat Portal. This URL can include the Codat `companyId` as well as any other custom query parameters.

:::note Redirect parameter settings

For more information on setting your redirect URL, refer to [this document](/auth-flow/customize/set-up-redirects).
:::

Once your user is redirected to the redirect URL page, they'll be able to authorize access to their data. Once this is successful, the linking process is complete and their data can be read.

## Re-authorize access

Occasionally the Data Connections of a Codat company will go into a _deauthorized_ state. This indicates that Codat’s link to the platform is no longer valid, and you will not be able to queue any further data syncs for that connection. You will still be able to query data previously retrieved from the platform.

Data Connections can become _deauthorized_ by the user [revoking access](/core-concepts/connections#disconnect-a-data-connection-to-revoke-your-access-to-a-data-source) to their accounting software or due to platform limitations such as Xero's limited access period for non-partner companies.

To enable you to refresh the company's data, you will need to ask the user to complete the auth flow in Link again.

:::caution Re-linking and usage costs

Creating a new company may cause additional data to be read from the platform and is likely to incur additional usage costs.
:::

### Redirect the user to complete the auth flow

Get a `redirect` URL for the company by following the process [here](/auth-flow/authorize-hosted-link). Send the user to the `redirect` URL. They will be prompted to select their accounting software and complete the linking process using the [Link flow](/auth-flow/overview).

Once the user finishes the Link flow, they will be redirected back to the Redirect URL, as described [earlier in this guide](/using-the-api/managing-companies#redirect-the-user). At this point the re-authorization process is complete and their data has begun synchronizing again.

## Delete companies

You can delete a company and its data using the [Delete company](/platform-api#/operations/create-company) endpoint.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const companyDeleteResponse = await platformClient.companies.delete({
    companyId: companyCreatedRes.company.id,
  }); 
```
</TabItem>

<TabItem value="python" label="Python">

```python
company_delete_response = platform_client.companies.delete(
  operations.DeleteCompanyRequest(
    company_id=company_created_res.company.id,
  )
)
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyDeleteResponse = await platformClient.Companies.DeleteAsync(new(){
    CompanyId = companyCreatedRes.Company.Id,
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
companyDeleteResponse, err := platformClient.Companies.Delete(ctx, operations.DeleteCompanyRequest{
    CompanyID: companyCreatedRes.Company.ID,
})
```
</TabItem>

</Tabs>

:::tip Recap
You've learned:
- How to create a company and authorize access to their data
- The basics of reading data
- Manage companies
:::

---

## Read next

- [Get data](/using-the-api/get-data)
- [Create, update and delete data](/using-the-api/push)
- [Filter webhooks by company tags](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags)
