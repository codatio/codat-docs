---
title: "Processing a loan application"
description: "End-to-end application process steps carried out by the lender and the borrower"
---

## 🚀 In this section, you will...

:::note Underwriting process flow

Review the full [swimlane diagram](https://github.com/codatio/build-guide-underwriting-be#implementing-the-solution) of the underwriting process flow followed by the demo app.
:::  

SHORT SWIMLANE DIAGRAM

``` mermaid
  sequenceDiagram
    participant frontend as Underwriting Frontend 
    participant backend as Underwriting Backend 
    participant codat as Codat API
    frontend ->> backend: Submit application
    backend ->> codat: Request enriched data
    codat ->> backend: Fetched data
    backend ->> backend: Underwrite loan
    backend ->> frontend: Application outcome
```

 
Use Swagger http://localhost:5069/swagger/index.html


## <input type="checkbox" unchecked /> Initiate a new loan application  

When a prospective borrower starts a new loan application by calling your relevant endpoint, we expect it to return an application `id`. This is so we can use it as the company name to create a company using Codat's `POST /companies` endpoint. 

This allows us to assign the application a reference in Codat, even though we don't have the company details yet. These would be provided by the borrower at the next step. When the new company is created, the company and application `id`s are stored in Codat, and should be returned to the prospective borrower, together with a `linkUrl`.

We also advise to store the date the application was created to use as a reference date later.

🙏🏽 This step is normally performed by the borrower.

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip Demo app: loan application

<Tabs>
  <TabItem value="Starting an application" label="Starting an application">  
   In our demo, we do not provide a UI for the loan application form. For your business case, we recommend developing an interface to enable form submission and status review. 
    
  We use an example `application/start` endpoint when a new loan application is triggered.  
  </TabItem>
  <TabItem value="Creating a company" label="Creating a company">  
  Code snippet - critical pieces of logic, comments on which file to find them in 
  </TabItem>
</Tabs>
:::

## <input type="checkbox" unchecked /> Provide application details  

The borrower uses the application `id` returned to them to complete the application form. If the details provided are valid, they are stored against the application `id` with an acknowledgement of their receipt. We expect the applicant to use your business' graphic interface to fill the required application details.

🙏🏽 This step is normally performed by the borrower.

:::tip Demo app: loan application

<Tabs>
  <TabItem value="Starting an application" label="Starting an application">
    In our demo, we request the borrower's full name, company name, and the loan amount, length, and purpose. These details are posted to the `applications/forms` endpoint, which validates that the required fields exist and are within acceptable limits.
  </TabItem>
  <TabItem value="Example form" label="Example form">  

    Application form values proposed in our demo:
    ```json
        {
        "id": "applicationId", 
        "companyName": "Example Company",
        "fullName": "John Smith",
        "loanAmount": 25000.00, // must be greater than zero 
        "loanTerm": 36, // must be at least 12 months
        "loanPurpose": "Growth marketing campaign"
        }
    ```
  </TabItem>
</Tabs>
:::

## <input type="checkbox" unchecked /> Provide financial data  

Next, the borrower also needs to provide Codat access to their accounting platform so that we can fetch the data required to underwrite their application. 

To enable this, share the `linkUrl` returned by our `POST /companies` endpoint with the borrower. They should navigate to the link, follow the flow built using our [Link feature](/auth-flow/overview), and select a platform that is the source of their accounting data. 

You can [customize](/auth-flow/customize/customize-link) the applicant's authorization journey to suit your business needs, including branding, redirects, and available connections. You can also choose between our [Hosted](/auth-flow/authorize-hosted-link) and [Embedded](/auth-flow/authorize-embedded-link) solutions.

🙏🏽 This step is normally performed by the borrower.

:::tip Demo app: linking an accounting platform

In the demo project, we expect you to select the **Codat Sandbox** as the source of accounting data. You can authorize this connection without entering any credentials. You should also skip the step of uploading business documents. 

Screenshots?

:::

## <input type="checkbox" unchecked /> Manually categorize accounts 

While Codat’s Assess product is able to automatically categorize most of the source chart of accounts accounts, it is not always possible, and a manual intervention may be required. 

To do that, the underwriting analyst needs to log in to the [Codat Portal](https://app.codat.io/) and click on the **Companies** tab in the top menu. Next, click on the company they are performing underwriting for, and navigate to **Products > Assess**. The red **Categorization required** button to the right of the company name indicates there are uncategorized accounts in the chart. 

Clicking the button takes the analyst to the **Account categorization** page which displays a list of all the uncategorized accounts. They can select the **Account type**, **Account subtype**, and **Account detail** from drop down lists. Once this is done, they can **Save** the categorization. This enables the underwriting process to continue.

💰 This step is normally performed by the lender.

SCREENSHOT

:::tip Demo app: account categorization

In our demo, when accounts are pulled from Codat's Accounting Sandbox and categorized, one account remains without a specified category. You need to assign a category to it before the demo application is ready for underwriting. This is because the Profit and Loss, and Balance Sheet data types in Assess depend on fully categorized accounts.

:::


The underwriting model we use in the demo requires the following data about the company and the borrower:

- Validated application details
- Chart of accounts
- Balance sheet
- Profit and loss statement
- Classified accounts

## <input type="checkbox" unchecked /> Check the decision on the loan 

The borrower and lender should be able to check the loan status anytime. In our demo, this can be done by calling the `GET applications/{applicationId}`. 

You can use the webhooks previously set up to track the progress of the application. 

We can only assess the application and provide an outcome once the data requirements for the underwriting model are complete. The loan request is then automatically updated with a relevant status to indicate the decision made on the loan, or any errors that occurred in the process.

🙏🏽💰 This step can be performed by both borrower and lender.

:::tip Ready to explore further?

<Tabs>
  <TabItem value="thresh" label="Thresholds">
  Play around with thresholds
  In the `appsettings.json` file of the `\DemosUnderwriting\Codat.Demos.Underwriting.Api\` directory, you can also choose to set your own example thresholds to be passed for gross profit margin, revenue, and gearing ratio. These are the metrics our demo uses to make an underwriting decision.
  </TabItem>
  <TabItem value="comptype" label="Company types">
  try linking other sandboxes, other types of company
  </TabItem>
  <TabItem value="realco" label="Real company">
  A real company
  </TabItem>
</Tabs>

:::


## Recap

## Read next

- [Making an application decision](/underwriting/uw-decision)