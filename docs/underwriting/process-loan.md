---
title: "Processing a loan application"
description: "End-to-end application process steps of the lender and the borrower"
---

<input type="checkbox" unchecked /> <b>Initiate a new loan application</b>  

When a prospective borrower starts a new loan application by calling the `application/start` endpoint, we return an application `id` and then use it as the company name to create a company using Codat's `POST /companies` endpoint. 

This allows us to assign the application a reference in Codat, even though we don't have the company details yet. When the new company is created, the company and application `id`s are stored, and then returned to the prospective borrower, together with a `linkUrl`.

We also advise to store the date the application was created to use as a reference date later.

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip Demo app: loan application

<Tabs>
  <TabItem value="Starting an application" label="Starting an application">We use the `application/start` endpoint when a new loan application is triggered, and return an application `id` to then use it as the company name to create a company.</TabItem>
  <TabItem value="Application UI" label="Application UI">In our demo, we do not provide a UI for the loan application form. For your underwriting solution, we recommend developing an interface to enable form submission. </TabItem>
  <TabItem value="Creating a company" label="Creating a company">Code snippet - critical pieces of logic, comments on which file to find them in </TabItem>
</Tabs>
:::




:::tip Demo app: loan application

In our demo, we do not provide a UI for the loan application form. For your underwriting solution, we recommend developing an interface to enable form submission. 

code - show how we created a company?

:::


<input type="checkbox" unchecked /> <b>Provide application details</b>  


The borrower then uses the application `id` to complete the application form. If the details provided are valid, they are stored against the application `id` with an acknowledgement of their receipt. 

In the example app, we only request the borrower's full name, company name, and the loan amount, length, and purpose. These details are posted to the `applications/forms` endpoint, which validates that the required fields exist and are within acceptable limits.

:::tip Demo app: example application

```json
{
  "id": "applicationId", 
  "companyName": "Example Company",
  "fullName": "John Smith",
  "loanAmount": 25000.00, // must be greater than zero 
  "loanTerm": 36, // must be at least 12 months
  "loanPurpose": "Growth marketing campaign."
}
```
:::

:::tip Demo app: loan application

<Tabs>
  <TabItem value="Starting an application" label="Starting an application">
    We only request the borrower's full name, company name, and the loan amount, length, and purpose. These details are posted to the `applications/forms` endpoint, which validates that the required fields exist and are within acceptable limits.
  </TabItem>
  <TabItem value="Application UI" label="Application UI">
    Example application form  

    ```json
        id": "applicationId", 
        "companyName": "Example Company",
        "fullName": "John Smith",
    ```
  </TabItem>
</Tabs>
:::


<input type="checkbox" unchecked /> <b>Provide financial data</b>  

Next, the borrower also needs to provide Codat access to their accounting platform so that we can fetch the data required to underwrite their application. 

To enable this, share the `linkUrl` returned by the `POST /companies` endpoint with the borrower. They should navigate to the link, follow the flow built using our [Link feature](/auth-flow/overview), and select a platform that is the source of their accounting data. You can [customize](/auth-flow/customize/customize-link) the applicant's authorization journey to suit your business needs, including branding, redirects, and available connections. You can also choose between our [Hosted](/auth-flow/authorize-hosted-link) and [Embedded](/auth-flow/authorize-embedded-link) solutions.

:::tip Demo app: linking an accounting platform

In the demo project, we expect you to select the **Codat Sandbox** as the source of accounting data. You can authorize this connection without entering any credentials. You should also skip the step of uploading business documents. 

Screenshots?

:::

<input type="checkbox" unchecked /> <b>Check the progress of the loan</b>  


The borrower and lender can check the loan status anytime by calling the `GET applications/{applicationId}`. 

The underwriting model we use in the demo requires the following data about the company and the borrower:

- Validated application details
- Chart of accounts
- Balance sheet
- Profit and loss statement
- Classified accounts

Once the data requirements needed for the underwriting model are complete, and the model finishes the application assessment, the loan request is automatically updated with an _Accepted_ or _Rejected_ status to indicate the decision made on the loan. We also cater for a scenario of programmatic errors that means a decision could not be made with a _UnderwritingFailure_ status. 



what codat does - webhooks





<input type="checkbox" unchecked /> <b>Manually categorize accounts</b>   


While Codat’s Assess product is able to automatically categorize most of the source chart of accounts accounts, it is not always possible, and a manual intervention is required. 

To do that, log in to the [Codat Portal](https://app.codat.io/) and click on the **Companies** tab in the top menu. Click on the company you are performing underwriting for, and navigate to **Products > Assess**. Red **Categorization required** button to the right of the company name indicates there are uncategorized accounts in the chart. 

Clicking the button takes you to the **Account categorization** page which displays a list of all the uncategorized accounts. You can select the **Account type**, **Account subtype**, and **Account detail** from drop down lists. Once this is done, you can **Save** the categorization.

In real world, an underwriting specialist would do this I assume

:::tip Demo app: free account


In our demo, when accounts are pulled from the Accounting Sandbox and categorized, one account remains without a specified category. You need to assign a category to it before the application is ready for underwriting. This is because the Profit and Loss, and Balance Sheet metrics in Assess depend on fully categorized accounts.

:::