---
title: "Review spend analysis and insights"
sidebar_label: Review insights
description: "Learn how to review the spend and supplier information from your customer and associated insights"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Prerequisites

Before you can review spend data and associated insights, you need to request access to it. We cover this in detail in our [Onboard customer](/spend-insights/guides/onboard-customer) guide.

In this guide, we will cover how you can view the insights generated from your customer's business data using the [Codat Portal](https://app.codat.io/).

## Check data status

Once you onboard the customer, their initial Spend Insights report generates immediately. In the Codat Portal, navigate to the **Spend Insights** tab, locate the customer's company, and check that the report is ready. 

You may see one of the following statuses next to the company name:

| **Report status**              | **Action**                                                                                   |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| **Available**           | Codat successfully generated the spend report for this customer, and it's ready to download. |
| **Generating**          | Codat is currently generating the spend report for this customer. Check back later.          |
| **Unavailable**         | Codat hasn't yet received data from this customer. Onboard the customer first.              |

![An image of the Portal user interface on the Spend Insights tab with four companies listed and their statuses highlighted.](/img/spend-insights/si-spend-report-statuses.png)

## Update report

You can refresh the data in the Spend Insights report as often as you need, ensuring you are always working with the most up-to-date financial information of your customers. To generate an updated report, follow these steps:

1. Navigate to the **Spend Insights** tab in the [Codat Portal](https://app.codat.io).

2. Search or scroll to locate the company you require reports for.

3. Click the **Download** icon on the company line to view the dropdown menu.

4. Click **Update reports** in the dropdown menu.

5. Track the progress by checking the _Report Status_ column. 

Once updated, the status will change from _Generating_ to _Available_, and you can go ahead and download the resulting report.

![An image of the Portal user interface on the Spend Insights tab with the Update Reports button visible and highlighted.](/img/spend-insights/si-update-reports.png)

## Download report

When you are ready to download a company's Spend Insights report, you can do so from the Spend Insights tab. 

1. Search or scroll to locate the company you require reports for.

2. Click the **Download** icon again, then click on the _Spend Analysis_ line item.

This will initiate the download and save the Excel report to your default download folder.

![An image of the Portal user interface with the download dropdown displayed and download button highlighted for an example company](/img/spend-insights/si-reports-download.png)

## Spend Analysis report

Codat's **Spend Analysis** covers the summary and details of the customer's spend and suppliers in an Excel format.

It offers a detailed look into your customer's spend data, providing an overview of their spending and suppliers by payment method and detailed supplier analysis. It also contains the source bills, bill payments, and direct costs that inform the report.

### Customer tab

The **Customer** tab provides an at-a-glance view of the company you're reviewing, including their administrative details, and the parameters of the generated report.

### Spend Analysis tab

The **Spend Analysis** tab analyses the performance of various payment methods utilized by your customer and looks at the quantities and amounts of suppliers, bills, payments, and direct costs associated with these payment methods.

This tab uses the same parameters as the **Supplier Analysis** tab, but breaks the data down by payment method instead of supplier. We will review each parameter in detail when covering the **Supplier Analysis** tab.

![A section of the Spend Analysis tab from the Excel report that displays the payment method breakdown of the data.](/img/spend-insights/si-spend-analysis-report-payment-tab.png)

### Supplier Analysis tab

Let's now focus on the **Supplier Analysis** tab, where you will find sections covering supplier details, payment methods, amounts, and terms. You can distinguish between the sections by using their colors. We will go through the columns of this tab and explain how to read their details and data.

#### Suppliers

This section covers the supplier's name, the most common method used to pay them, and their imported date.

<Tabs>

<TabItem value="columns" label="Definitions">

- **Supplier Name** - supplier's name as recorded in your customer's accounting system.
- **Most Common Payment Method** - an aggregate value reflecting the most common method your customer used to pay the supplier.
- **Imported Date** - the date this supplier first appeared in the Spend Analysis file. This becomes significant when reviewing files on an ongoing basis.

</TabItem>

<TabItem value="details" label="Details and data">

![A section of the Supplier Analysis tab from the Excel report that displays the supplier name, most common payment method, and imported date columns.](/img/spend-insights/si-spend-analysis-report-suppliers.png)

In the above example, the supplier _Fahey and Sons_ is most commonly paid by check and first appeared in the file on May 13, 2025.

If you download a spend analysis file a month later, you will be able to identify new suppliers by using the imported date.

</TabItem>

</Tabs>

#### Bills

This section goes into the details of bills incurred by your customer, highlighting the amounts and quantities the supplier has raised with the business.

<Tabs>

<TabItem value="columns" label="Definitions">

- **# of Bills** - the total number of bills raised by the supplier.
- **# of Bills Outstanding** - the total number of bills that haven't been paid yet.
- **Bills Amount** - the total amount the supplier raised bills for.
- **Bills Outstanding Amount** - the total raised amount of bills that haven't been paid yet.
- **% of Bills Outstanding (by amount)** - the outstanding bills amount expressed as a percentage of the total billed amount.
- **Most Recent Bill** - the date when the supplier's most recent bill was raised.

</TabItem>

<TabItem value="details" label="Details and data">

![A section of the Supplier Analysis tab from the Excel report that displays the columns related to bills.](/img/spend-insights/si-spend-analysis-report-bills.png)

Let's look at the fourth row in the above example that relates to the _Fahey and Sons_ supplier. This supplier has raised a total of 4 bills, 1 of which is not yet paid. The total amount of these 4 bills comes to £133,195.10, with £1,097.06 of that amount still requiring payment. In percentage terms, 0.8% of the total amount still needs to be paid to the supplier. _Fahey and Sons_ raised their most recent bill on December 27, 2024.

</TabItem>

</Tabs>

#### Payments

This section goes into the details of payments your customer has made to their suppliers.

<Tabs>

<TabItem value="columns" label="Definitions">

- **# of Payments** - the total number of payments the business made to the supplier.
- **# of Late Payments** - the total number of payments made to the supplier that were past their due date.
- **Payments Amount** - the total amount of payments the business made to the supplier.
- **Late Payments Amount** - the total amount of payments that were past their due date.
- **% Late Payments (by amount)** - the amount of payments past due date expressed as a percentage of the total payments amount.
- **Average Payment Amount** - the average payment size for this supplier based on the number of payments made to them.

</TabItem>

<TabItem value="details" label="Details and data">

![A section of the Supplier Analysis tab from the Excel report that displays the columns related to payments.](/img/spend-insights/si-spend-analysis-report-payments.png)

Revisiting _Fahey and Sons_ on row 4, we can see that our customer has paid them on time 4 times and has not yet missed a payment. In relation to the bills data from the previous section, we can conclude that the outstanding £1,097.06 bill is not yet late for payment. Based on 4 payments at a total of £130,975.97, the average payment amount to _Fahey and Sons_ is £32,743.99.

</TabItem>

</Tabs>

#### Payment terms and settlements

This section covers the customer's average payment terms and settlements.

<Tabs>

<TabItem value="columns" label="Definitions">

- **Average Payment Terms** shows how many days on average it takes for the customer business to pay this supplier. This is weighted by payment amount.
- **Common Payment Terms Days** represents the number of days that you are likely to see from this supplier as the payment terms.
- **Average Settlement Period** shows how many days the payment actually takes to settle and process on the supplier's side.

</TabItem>

<TabItem value="details" label="Details and data">

![A section of the Supplier Analysis tab from the Excel report that displays the columns related to payment terms and settlements.](/img/spend-insights/si-spend-analysis-report-averages.png)

We can see that _Fahey and Sons_ on row 4 usually sets their payment terms at 60 days. It takes a little less than that for the customer to pay them and for the payment to settle. Using these numbers helps identify which suppliers could benefit from the acceptance of virtual cards.

</TabItem>

</Tabs>

#### Direct costs

This section covers the customer's direct costs associated with the suppliers. Direct costs are money that leave the business without impacting Accounts Payable, and refunds associated with such transactions.

<Tabs>

<TabItem value="columns" label="Definitions">

- **# Of Direct Costs** - the total number of direct costs associated with this supplier.
- **Direct Costs Amt** - the total amount of direct costs associated with this supplier.
- **Most Recent Direct Cost** - the date when the supplier's most recent direct cost was incurred.

</TabItem>

<TabItem value="details" label="Details and data">

![A section of the Supplier Analysis tab from the Excel report that displays the columns related to direct costs.](/img/spend-insights/si-spend-analysis-report-costs.png)

In our example, the customer has had 3 occurrences of a direct cost associated with _Fahey and Sons_ on row 4. The total amount of these direct costs comes to £19,459.05, and the most recent cost was raised on January 19, 2025.

</TabItem>

</Tabs>

#### Supplier details

The final section of this tab provides administrative details of each supplier, such as their ID in the customer's software, their contact details, and tax information.

### Other tabs

The **Bills**, **Bill Payments**, and **Direct Costs** tabs contain the source spend data that Codat used to generate the report.
