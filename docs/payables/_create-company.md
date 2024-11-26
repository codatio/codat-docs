## Create a company

Within Bill Pay, a company represents your SMB customer that pays and manages their bills using your application. To create it, use our [Create company]({props.endpointlink}) endpoint. It returns the company schema containing the ID that you will use to establish a connection to an accounting software. 

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const companyResponse = payablesClient.companies.create({
    name: companyName,
});

if(companyResponse.statusCode == 200){
  throw new Error("Could not create company")
}

const companyId = companyResponse.company.id
console.log(companyId)
```

</TabItem>

<TabItem value="python" label="Python">

```python
company_request = shared.CompanyRequestBody(
    name=company_name,
)

company_response = payables_client.companies.create(company_request)

if company_response.status_code != 200:
  raise Exception('Could not create company')

company_id = company_response.company.id
print(company_id)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var companyResponse = await payablesClient.Companies.CreateAsync(new() {
    Name = companyName,
});

if(companyResponse.StatusCode != 200){
  throw new Exception("Could not create company");
}

var companyId = companyResponse.Company.Id;
console.log(companyId)
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
companyResponse, err := payablesClient.Companies.Create(ctx, &shared.CompanyRequestBody{
  Name: companyName,
	})

if companyResponse.StatusCode == 200 {
  companyID := companyResponse.Company.ID
  fmt.Println("%s", companyID)
}
```
</TabItem>

</Tabs>