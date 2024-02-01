---
title: "How the decisioning works"
description: "Reference page with details on our decisioning logic, fetching data, and coming to a decision"
sidebar_label: "App's decisioning logic"
---

### 🚀 In this section, you will...

* Understand how we fetch the required data, 
* Review how we assess the risk associated with customers and invoices,
* See how the app makes a decision based on that data. 

### Fetch unpaid invoices and associated data

After the app is notified by the webhook that invoice and customer syncs are complete, it fetches a filtered invoice list that we could potentially lend against. 

In our demo, we focus on unpaid and partially paid invoices valued between 50 and 1000 USD, using the `query` parameter on our [List invoices](/lending-api#/operations/list-accounting-invoices) endpoint:

```
query = {status=submitted||status=partiallyPaid}&&currency=USD&&{amountDue>50&&amountDue<=1000}
```

From this data set, we pick up a list of unique customer Ids (`customerRef.id`) for the unpaid invoices, and then the associated customer details using the [Get customer](/lending-api#/operations/get-accounting-customer) endpoint. 

Finally, we fetch all paid invoices for each of these customers to assess their previous payment behavior. After this, we are ready to perform the risk assessment.

### Assess risk for each customer

To perform the risk assessment of customers, we calculate the measure of **customer concentration**. This is the percentage of the applicant's revenue that comes from a single customer. 

The concentration threshold is set to 5% in the `appSettings.json` file, which you can change later if you want to see the app run through a different scenario.

:::info Customer concentration

Concentration = Customer balance / Total outstanding balance across all customers, or, in Codat's terms, it is the sum of all unpaid invoices `amountDue` for a customer divided by the sum of all unpaid invoices `amountDue`.  

:::

In our demo, we also exclude any customers that fit the criteria below, meaning invoices linked to them will not be eligible for the loan: 

- Concentration is more than the threshold of 5%,
- Customer `country` is not `US`, thus excluding foreign business customers,
- Customer `registrationNo` is null, thus excluding sole traders, and
- Number of paid invoices is less than 2, thus lowering the risk based on past behavior.

### Assess risk for each invoice

For each remaining invoice, we calculate the following: 

- **Terms**, expressed as (`dueDate` — `issueDate`),
- **Days left to pay**, expressed as (`dueDate` - today's date),
- **Time left to pay ratio**, expressed as (Days left to pay / Terms).

We then discard any invoices where `Days left to pay` value is less than 14 days. For the remaining invoices, we calculate a **charge rate** based on the Time left to pay ratio.

:::info Charge rate

Charge rate = 5 - (4 * Ratio), where Ratio is the Time left to pay rate between 1% and 5%, rounded to 1 decimal place.

:::

### Return a decision array

Finally, we are ready to return a decision array to the applicant. It shows them which invoices we agree to lend against, and under what terms and conditions. The array can be obtained by calling the `GET applications/{applicationId}` endpoint. 

```json title="Example decision response"
  {
    "status": "Complete" // Response displays an application status of "Complete" when the assessment has been finished
    "decisions": [ // An array of decisions per each invoice Id found eligible for the loan
      {
        "invoiceId": "string", // Codat's internal Id associated with fetched invoices
        "invoiceNo": "string", // Identifying number of the invoice in the applicant's accounting system
        "amountDue": decimal,  // Amount to be paid on the invoice issued to customer
        "offerAmount": decimal, // Amount the app offers to lend, calculated as 90% of amountDue
        "rate": decimal, // Rate with which the app offers to lend, based on each invoice's risk
      }
                 ]
  }
```

### Access additional resources

🗝️ You may want to enhance this simple working guide with some UI elements - why not use [Embedded Link](/auth-flow/authorize-embedded-link) to seamlessly include our authorization journey into your app?

🛍️ Take your digital lending solution one step further by using Lending API's [Reconciled invoices](/lending/features/accounts-receivable-overview#reconciled-invoices) feature enrichment. 

📈 If you want to understand the growth potential of the invoice financing services, you can read through [Credit Connect's blog](https://www.credit-connect.co.uk/news/demand-for-invoice-finance-predicted-to-grow/).

💸 Read through our [Ampla case study](https://www.codat.io/case-study/ampla/) to see how Codat supports digital lenders in providing quicker, smarter credit decisions and offering more tailored lending services.

### Recap

In this reference section, you have learned and understood in detail the checks we performed during our invoice finance decisioning process, how we fetched and filtered the data, and how all of this influenced the decision on the loan made automatically. 

Next, you can find out more about [Lending API](/lending/overview), or [explore other use cases](/usecases/overview).