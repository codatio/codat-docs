---
title: "How the lending risk assessment works"
description: "Reference page with details on our decisioning logic, fetching data, and coming to a decision"
---

### 🚀 In this section, you will...

* Understand how we fetch the required data, 
* Review how we assess the risk associated with customers and invoices,
* See how the app makes a decision based on that data. 

### <input type="checkbox" unchecked/> Fetch unpaid invoices and associated data

Once the app is notified by the webhook that invoice and customer syncs are complete, it fetches a filtered invoice list that we could potentially lend against. In our demo, we focus on unpaid and partially paid invoices valued between 50 and 1000 USD, using the `query` parameter on our [List invoices](/accounting-api#/operations/list-invoices) endpoint.

```
query = amountDue <= 1000 &&
	amountDue > 50 &&
	status = "submitted" &&
	status = "partiallyPaid" &&
	currency = "USD"
```

From this data set, we pick up a list of unique customer Ids (`customerRef.id`) for the unpaid invoices, and then the associated customer details using the [Get customers](/accounting-api#/operations/get-customers) endpoint. 

Finally, we fetch all paid invoices for each customer that has unpaid invoices proposed for invoice financing. After this, we are ready to perform risk assessment.

### <input type="checkbox" unchecked/> Assess risk for each customer

To perform risk assessment, we calculate the measure of **customer concentration** - the percentage of the applicant's revenue that comes from a single customer - as follows:

:::tip Customer concentration

Concentration (%) = Customer balance / Total outstanding across all customers = (sum of all unpaid invoices amountDue for customer)/(sum of all unpaid invoices amountDue)

attempt a formula

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

We then exclude any customers that fit these criteria: 
- 

This means invoices linked to them will not be eligible for the loan. 



Next, we determine the risk level for our borrower based on their previous history. We check if the borrower is typically paid back by their customers as follows:

```
// filter invoices
	// invoices.dueDate < today()
  // invoices.dueDate > today() - 6 months
// map reduce on invoice status
// return a risk value
```
### <input type="checkbox" unchecked/> Check customer validity

In our demo, we choose not to lend against invoices issued to sole traders or foreign business customers. To exclude these, we perform a customer validity check:

```
const isCustomerValid = (customer) => {
	if(customer.registrationNo === null && customer.country !== "US") {
		return false
	}
	
	return true
}

invoices.filter(invoice => isCustomerValid(invoice))
```

### <input type="checkbox" unchecked/> Calculate customer risk

We also want to understand which customers of our borrower applicant pose the lowest risk based on their past invoice payment behaviour. To do that, we search for customers with a track record of paying their bills:

```
// map over valid invoices, return list of customerRefs
// map over customers, sum paid status for customer
// essentially looking for customers with a track record of paying their bills
```

### <input type="checkbox" unchecked/> Assess invoice due date risk

Next, we check due dates of selected invoices to understand the level of risk associated with them:

```
const overdueRisk = (invoice) => {
	if(today() < invoice.dueDate) {
		return 1
	}
	else if (today() < invoice.dueDate + 15) {
		return 1.5
	}
	else if (today() < invoice.dueDate + 30)
		return 2
	}
	return false // don't lend
}
```

### <input type="checkbox" unchecked/> Crunch some numbers

Decisioning based on all the factors described above

### <input type="checkbox" unchecked/> Return a decision array

Having assessed and made a decision on each eligible invoice, we are now ready to return a decision array to the borrower. This shows them which invoices we agree to lend against, and under what terms and conditions: 

```
decisions: [
	{
		invoiceId: "j89ej2198jedsads", // foreign key
		invoiceNo: "001", // purely for readability
		amountDue: 1000.00,
		offerAmount: 900.00, // 90% of amountDue
		rate: 0.03, // 1-5% based on risk
    dueDate: somedateformat // today + 90 days
	},
	...
]
```

### <input type="checkbox" unchecked/> Access additional resources

🗝️ You may want to enhance this simple working guide with some UI elements - why not use [Embedded Link](https://docs.codat.io/auth-flow/authorize-embedded-link) to seamlessly include our authorization journey into your app?

📊 If you are interested in underwriting models used by lenders in the industry, you can read through [Bigfoot Capital's blog](https://www.bigfootcap.com/revenue-based-financing/) on revenue-based finance or [Workweek's article](https://workweek.com/2023/03/02/unlocking-lending-innovation) on unlocking underwriting innovation.

💸 Lenders also use Assess to understand a business' liquidity via the [enhanced cash flow report](/assess/reports/enhanced-cash-flow-report/overview), or whether a business' accounts are accurate using both [data integrity](/assess/data-integrity) and the [audit report](/assess/reports/audit-report).

🧠 See what else [Codat recommends](https://www.codat.io/blog/how-to-underwrite-ecommerce-merchants-effectively/) to build your underwriting process effectively. 

[Ampla use case](https://www.codat.io/case-study/ampla/) to see how digital lending works 

### Recap

In this reference section, you have learned and understood in detail the checks we performed during our invoice finance decisioning process, how we fetched and filtered the data, and how all of this influenced the decision on the loan made automatically. 

Next, you can find out more about [Accounting API](/accounting-api/overview), or explore other use cases.