---
title: "Manage companies with our API"
sidebar_label: Via API
description: "Learn about creating and managing companies, their connections, and their data via API"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Onboarding your users

Your users or customers are [companies](/core-concepts/companies). To access their data you'll need to onboard them.

To onboard a new user or customer:
1. Create a company
2. Authorize access to sources of data
3. Pull the data

You can either onboard users:

- When they first create an account with your service
- At the first point you want to retrieve their financial data

### Create a company

To create a new company, use the [Create company](/platform-api#/operations/create-company) endpoint and provide a name for the company in the request body.  The `name` parameter is mandatory to execute this request. You can also provide a `description` to store additional information about the company.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
platformClient.companies.create({
    name: "Platypus Properties",
    description: "Platypuses are venomous mammals"
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
    name='Platypus Properties',
    description='Platypuses are venomous mammals'
    )

company_created_res = platform_client.companies.create(req)
print(company_created_res.company.id, company_created_res.company.name)
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyCreatedRes = await platformClient.Companies.CreateAsync(new CompanyRequestBody() {
    Name = "Platypus Properties",
    Description = "Platypuses are venomous mammals"
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
    Name: "Platypus Properties",
    Description: "Platypuses are venomous mammals"
})

if err != nil {
    log.Fatal(err)
}

if companyCreatedRes.Company != nil {
    fmt.Println("%s %s", companyCreatedRes.Company.Id, companyCreatedRes.Company.Name)
}
```
</TabItem>

</Tabs>

:::caution Retain the company ID

The `id` property that you receive in the response is the unique Codat identifier for this company. **We recommend that you retain it for future reference.**
:::

:::note Company name

The name of the company doesn't have to be unique. It's just there to help you identify the company in the portal. Make sure to [avoid forbidden characters](/core-concepts/companies).
:::

### Authorize access to company data

Once you've created the company, they'll need to give you permission to pull their data from a given source, like their accounting platform. There are several approaches to doing this, but for simplicity we've just covered our out-of-the-box [hosted link](/auth-flow/authorize-hosted-link) approach.

Send the user to the `redirect` URL returned in the previous step. They will be sent to [Link](/auth-flow/authorize-hosted-link) where they can select their accounting software and complete the linking process.

Once the user has completed the Link flow, the Codat platform will redirect them to the redirect URL you have configured in the **Settings > Auth flow > Link** in the Codat Portal. This URL can include the Codat `companyId` as well as any other custom query parameters.

:::note Redirect parameter settings

For more information on setting your redirect URL, refer to [this document](/auth-flow/customize/set-up-redirects).
:::

Once your user is redirected to the redirect URL page, they'll be able to authorize access to their data. Once this is successful, the linking process is complete and their data can be pulled.

## Re-authorizing access

Occasionally the Data Connections of a Codat company will go into a _deauthorized_ state. This indicates that Codat’s link to the platform is no longer valid, and you will not be able to queue any further data syncs for that connection. You will still be able to query data previously retrieved from the platform.

Data Connections can become _deauthorized_ by the user revoking access within their accounting software or due to platform limitations such as Xero's limited access period for non-partner companies.

To enable you to refresh the company's data, you will need to ask the user to complete the auth flow in Link again.

:::caution Re-linking and usage costs

Creating a new company may cause additional data to be pulled from the platform and is likely to incur additional usage costs.
:::

### Redirect the user to complete the auth flow

Get a `redirect` URL for the company by following the process [here](/auth-flow/authorize-hosted-link). Send the user to the `redirect` URL. They will be prompted to select their accounting software and complete the linking process using the [Link flow](/auth-flow/overview).

Once the user finishes the Link flow, they will be redirected back to the Redirect URL, as described [earlier in this guide](/using-the-api/managing-companies#redirect-the-user). At this point the re-authorization process is complete and their data has begun synchronizing again.

## Deleting companies

You can delete a company and its data using the [Delete company](/platform-api#/operations/create-company) endpoint.

<Tabs>

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

## Assign companies to a group

You can group several companies to simplify the management of these companies and their use cases.
If you are grouping companies for the first time, you need to create a group first using the [Create group](/platform-api#/operations/create-group) endpoint.
You will only have to do this operation once per group so make sure to persist the `groupId` for reuse within your application.
If you have an existing set of groups the [List groups](/platform-api#/operations/list-groups) endpoint.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const groupCreateResponse = await platformClient.groups.create({
  name: "Invoice finance team",
});

if (groupCreateResponse.statusCode == 200) {
  //Assign to global param:
  groupId = groupCreateResponse.group.id
  console.log(groupId)
}
```
</TabItem>

<TabItem value="python" label="Python">

```python
group_create_response = platform_client.groups.create(
  shared.GroupPrototype(
    name='Invoice finance team',
))

if group_create_response.group is not None:
  # Assign to global param:
  group_id = group_create_response.group.id
  print(group_id)
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var groupCreateResponse = await platformClient.Groups.CreateAsync(new(){
  Name = "Invoice finance team",
});

if(groupCreateResponse.Group != null){
  //Assign to global param:
  groupId = groupCreateResponse.group.Id;
  Console.WriteLine(groupId);
}
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
groupCreateResponse, err := s.Groups.Create(ctx, &shared.GroupPrototype{
    Name: platform.String("Invoice finance team"),
})
if err != nil {
  //Assign to global param:
  groupID = groupCreateResponse.Group.ID
  fmt.Println(groupID)
}
```
</TabItem>

</Tabs>

:::caution Create new groups with care

It's not possible to update or delete existing groups, so double-check that the group's name is correct when creating it.
:::

Once you have created a group, you can assign a company to it in two ways: either at the point of company creation or after it has been created.
For example, use the [Create company](/platform-api#/operations/create-company) endpoint and pass the `groupId` that you want to add the company to.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
platformClient.companies.create({
    name: "Platypus Properties",
    groups: [{ id: groupId }]
}).then((companyCreatedRes: CreateCompanyResponse) => {
    if (companyCreatedRes.statusCode == 200) {
      const company = companyCreatedRes.company
      console.log(company.id, company.name, company.groups[0].id)
    }
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
company_created_req = shared.CompanyRequestBody(
  name='Platypus Properties',
  groups=[shared.GroupRef(id=group_id)]
)

company_created_res = platform_client.companies.create(company_created_req)
company = company_created_res.company
print(company.id, company.name, company.groups[0].id)
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyCreatedRes = await platformClient.Companies.CreateAsync(new() {
    Name = "Platypus Properties",
    Groups = new List<GroupRef>(){
      new(){ Id = groupId }
    }
  });

if(companyCreatedRes.Company != null) {
    var company = companyCreatedRes.Company;
    logger.LogInformation("{CompanyId} {CompanyName} {GroupId}", company.Id, company.Name, company.Groups[0].Id);
}
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
companyCreatedRes, err := platformClient.Companies.Create(ctx, shared.CompanyRequestBody{
    Name: "Platypus Properties",
    Groups: []shared.GroupRef{
      shared.GroupRef{ ID: groupID }
    }
})

if err != nil {
    log.Fatal(err)
}

if companyCreatedRes.Company != nil {
  company := companyCreatedRes.Company
  fmt.Println("%s %s %s", company.ID, company.Name, company.Groups[0].ID)
}
```
</TabItem>

</Tabs>

If you need to add an existing company to a group, use the [Add company to group](/platform-api#/operations/add-company-to-group) endpoint.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const companyAddRes = await sdk.groups.addCompany({
  companyGroupAssignment: {
    groupId: groupId,
  },
  companyId: company.id,
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
company_add_req = operations.AddCompanyToGroupRequest(
  company_group_assignment=shared.CompanyGroupAssignment(
    group_id=group_id,
  ),
  company_id=company.id,
)

company_add_res = platform_client.groups.add_company(company_add_req)
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyAddRes = await platformClient.Groups.AddCompanyAsync(new() {
  CompanyGroupAssignment = new CompanyGroupAssignment() {
    GroupId = groupId,
  },
  CompanyId = company.Id,
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
companyAddRes, err := platformClient.Groups.AddCompany(ctx, operations.AddCompanyToGroupRequest{
  CompanyGroupAssignment: &shared.CompanyGroupAssignment{
    GroupID: platform.String(groupID),
  },
  CompanyID: company.ID,
})
```
</TabItem>

</Tabs>

To remove a company from a group, use the [Remove company from group](/platform-api#/operations/remove-company-from-group) endpoint.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const companyRemoveRes = await platformClient.groups.removeCompany({
  companyId: company.id,
  groupId: groupId,
});
```
</TabItem>

<TabItem value="python" label="Python">

```python
company_remove_req = operations.RemoveCompanyFromGroupRequest(
  company_id=company.id,
  group_id=group_id,
)

company_remove_res = platform_client.groups.remove_company(company_remove_req)
```
</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyRemoveRes = await platformClient.Groups.RemoveCompanyAsync(new() {
  CompanyId = company.Id,
  GroupId = groupId,
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
companyRemoveRes, err := s.Groups.RemoveCompany(ctx, operations.RemoveCompanyFromGroupRequest{
  CompanyID: company.ID,
  GroupID: groupID,
})
```
</TabItem>

</Tabs>

:::tip Recap
You've learned:
- How to create a company and authorize access to their data
- The basics of pulling data
- Managing companies
:::

---

## Read next

- [Get data](/using-the-api/get-data)
- [Create, update and delete data](/using-the-api/push)
