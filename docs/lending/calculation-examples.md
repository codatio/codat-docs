---
title: Examples
---

### Amount Due
Invoices
The outstanding amount due on the invoice.

### Customer view
Formula
invoices.amountDue
Filter: invoices.totalAmount > 0

### Amount Due
Bills
The outstanding amount due on the bill.

Supplier view
Formula
bills.amountDue
Filter: bills.totalAmount > 0

### Assets
The total value of assets, taken directly from the balance sheet, as at the end of the period selected.

Company summary
Formula
balanceSheet.assets.value
Filter: balanceSheet.date = date selection

### Avg. Bill Amount
Total average value of a bill per supplier, over the period selected.

Company summary
Supplier overview
Supplier view
Formula
Total bills/count of bills per supplier

Total bills:
SUM(bills.totalAmount)
Filter: bills.status = Open, PartiallyPaid, Paid
and bills.totalAmount > 0

Count of bills:
Filter: bills.status = Open, PartiallyPaid, Paid
and bills.totalAmount > 0

### Avg. Invoice Amount
The average value of an invoice per customer, over the period selected.

Company summary
Customer overview
Customer view
Formula
Total revenue/count of invoices per customer

Total revenue:
SUM(invoices.totalAmount)
Filter: invoices.status = Submitted, PartiallyPaid, Paid
and invoices.totalAmount > 0

Count of invoices:
Filter: invoices.status = Submitted, PartiallyPaid, Paid
and invoices.totalAmount > 0

Formula for other debtors:
Total Revenue for Filter range - SUM(total revenue for top 5/ Count of invoices)

### Avg. Payment Days
Customers
The weighted average number of days it takes a customer to pay an invoice, over the period selected.

Company summary
Customer overview
Customer view
Formula
SUM(weighted average payment days per invoice) by customer

Weighted average payment days per invoice:

a*(b/c):

a. invoices.PaidOnDate - invoices.issueDate
b. invoices.totalAmount - invoices.amountDue
c. SUM(invoices.totalAmount-invoices.amountDue) for all invoices for that customer
Filter: invoices.status = Paid
and invoices.totalAmount > 0

### Avg. Payment Days
Suppliers
The weighted average number of days it takes a business to pay its bills, over the period selected.

Company summary
Supplier overview
Supplier view
Formula
SUM(weighted average payment days per bill) by supplier

Weighted average payment days per bill:

a*(b/c):

a. If bills.status = Paid then billsPayments.Date - bills.issueDate, else
billsPayments where billspaymentsLink.ID = bills.ID
If payments allocations > 1, then take most recent billsPayments.date

b. bills.totalAmount - bills.amountDue
c. SUM(bills.totalAmount - bills.amountDue)

Filter: bills.status = Paid
and bills.totalAmount > 0

Avg. Payment Terms
Customers
The weighted average number of days the business has given its customers to pay invoices, over the period selected.

Company summary
Customer overview
Customer view
Formula
SUM(weighted average payment terms per invoices) by customer

Weighted average payment terms per invoice:
a*(b/c)

a. invoices.dueDate - invoices.issueDate
b. invoices.totalAmount (this therefore consider partial payments as well)
c. SUM(invoices.totalAmount) by customer
Filter: customer, invoices.status = Paid, PartiallyPaid, Submitted
and invoices.totalAmount > 0

### Avg. Payment Terms
Suppliers
The weighted average number of days the suppliers has given the business to pay their bills, over the period selected.

Company summary
Supplier overview
Supplier view
Formula
SUM(weighted avg payment terms per bill) by supplier:

Weighted average payment terms per bill:

a*(b/c)

a. bills.dueDate - bills.issueDate
b. bills.totalAmount
c. SUM(bills.totalAmount) by supplier
Filter: supplier, bills.status = Paid, PartiallyPaid, Open
and bills.totalAmount > 0

### Base Currency
The base currency as set in the accounting package.

Company summary
Formula
info.baseCurrency

### Bill Amount
The total amount of the bill.

Supplier view
Formula
bills.totalAmount

### Bill Number
The bill number.

Supplier view
Formula
bills.billsNumber

### Bill Payment Terms
The number of days the the supplier has given the business to pay the bill.

Supplier view
Formula
bills.dueDate - bills.issueDate

### Concentration %
Customers
The distribution of total revenue across the businesses customer base, over the period selected.

Company summary
Customer overview
Formula
Total invoices per customer/total invoices for period

Total invoices per customer= a-b-c

a. SUM(invoices.totalAmount)
Filter: customers; invoices.status = Submitted, PartiallyPaid, Paid
and invoices.totalAmount > 0
b. SUM(creditNotes.totalAmount)
Filter: customers; creditNotes.status = Submitted, Paid
c. SUM(PaymentLink.amount)
Filter: customers; PaymentLink.type = refund

Total invoices for period = a-b-c

a. SUM(invoices.totalAmount)
Filter: invoices.status = Submitted, PartiallyPaid, Paid
and invoices.totalAmount > 0
b. SUM(creditNotes.totalAmount)
Filter: creditNote.status = Submitted, Paid
c. SUM(PaymentLink.amount)
Filter: PaymentLink.type = refund

Formula for ‘Other customers’:
Total invoices for period - SUM(Total invoices for Top 5 customers over that period)

### Concentration %
Suppliers
The distribution of total expenditure across a businesses suppliers, over the period selected.

Company summary
Supplier overview
Formula
Total bills per supplier over that period/total bills over that period

Formula for top suppliers:
Total bills per supplier over that period/total bills over that period

Total bills per supplier= a-b-c

a. SUM(bills.totalAmount)
Filter: suppliers; bills.status = Open, PartiallyPaid, Paid
and bills.totalAmount = > 0
b. SUM(billCreditNotes.totalAmount)
Filter: suppliers; billCreditNotes.status = Submitted, Paid
c. SUM(BillPaymentLink.amount)
Filter: suppliers; BillPaymentLink.type = refund

Total bills for period= a-b-c

a. SUM(bills.totalAmount)
Filter: bills.status = Open, PartiallyPaid, Paid
and bills.totalAmount > 0
b. SUM(billCreditNotes.totalAmount)
Filter: billCreditNotes.status = Submitted, Paid
c. SUM(BillPaymentLink.amount)
Filter: BillPaymentLink.type = refund

Formula for ‘Other Suppliers’:
Total bills for period - SUM(Total bills for Top 5 suppliers over that period)

### Costs
The sum of expenses, taken directly from the profit and loss statement, over the period selected.

Company summary
Formula
profitAndLoss.costOfSales.value + profitAndLoss.expenses.value + profitAndLoss.otherExpenses.value
Filter: profitAndLoss.fromDate and profitAndLoss.toDate = end date range

### Customer Name
The name of the customer.

Customer overview
Formula
customer.customerName

### Days Payable Outstanding
The average number of days it takes a business to pay its suppliers, over the last 365 days.

Supplier overview
Supplier view
Formula
(Accounts Payable/Annual Purchases) * 365 days

Accounts Payable:SUM(bills.amountDue)
Filter: bills.status = Submitted, PartiallyPaid
and bills.totalAmount > 0

Annual Purchases: Total bills= a-b-c

a. SUM(bills.totalAmount)
Filter: bills.status = Open, PartiallyPaid, Paid
and bills.totalAmount > 0
b. SUM(billCreditNotes.totalAmount)
Filter: billCreditNotes.status = Submitted, Paid
c. SUM(billPaymentsLink.Amount)
Filter: billPaymentsLink.type = refund

Time Period: Start Date: Today - 365 Days End Date: Today

### Days Sales Outstanding
The average number of days it takes a businesses customers to pay them, over the last 365 days.

Customer overview
Customer view
Formula
(Accounts Receivable/Annual Sales) * 365 days

Accounts receivable:
SUM(invoices.amountDue)
Filter: invoices.status = Submitted, PartiallyPaid
and invoices.totalAmount > 0

Annual Sales:
Total revenue for that period = a-b-c

a. SUM(invoices.totalAmount)
Filter: invoices.status = Submitted, PartiallyPaid, Paid
and invoices.totalAmount > 0
b. SUM(creditNotes.totalAmount)
Filter: creditNotes.status = Submitted, Paid &
c. SUM(paymentsLink.amount)
Filter: paymentsLink.type = refund
Start Date: Today - 365 days
End Date = Today

### Debt to Assets
The ratio of total liabilities to total assets over the period selected.

Company summary
Formula
balanceSheet.liabilities.value/balanceSheet.assets.value
Filter: balanceSheet.date = date selection

### Equity
The total value of equity, taken directly from the balance sheet, as at the the end of the period selected.

Company summary
Formula
equity.value
Filter: balanceSheet.date = date selection

### Income
The sum of income, taken directly from the profit and loss statement, over the period selected.

Company summary
Formula
SUM(profitAndLoss.income.value)
Filter: profitAndLoss.fromDate and profitAndLoss.toDate = date range

### Invoice Amount
The total amount of the invoice.

Customer view
Formula
invoices.totalAmount

### Invoice Number
The invoice number.

Customer view
Formula
invoices.invoiceNumber

### Invoice Payment Terms
The number of days the the business has given the customer to pay the invoice.

Customer view
Formula
invoices.issueDate – invoices.dueDate

### Issue Date
The date the business issued the invoice.

Customer view
Formula
invoices.issueDate

### Issue Date
The date the business was issued with the bill.

Supplier view
Formula
bills.issueDate

### Liabilites
The total value of liabilities, taken directly from the balance sheet, as at the end of the period selected.

Company summary
Formula
balanceSheet.liabilities.value
Filter: balanceSheet.date = date selection

### Net Assets
The net asset value, taken directly from the balance sheet, as at the end of the period selected.

Company summary
Formula
balanceSheet.netAssets
Filter: balanceSheet.date = date selection

### Net Profit
The sum of net profit, taken directly from the profit and loss statement, over the period selected.

Company summary
Formula
SUM(profitAndLoss.netProfit)
Filter: profitAndLoss.fromDate and profitAndLoss.toDate = date range

### No. Bills Outstanding
The total number of outstanding bills.

Supplier overview
Supplier view
Formula
COUNT(bills)
Filter: bills.status = Open, PartiallyPaid
and bills.totalAmount > 0

### No. Invoices Outstanding
The total number of oustanding invoices.

Customer overview
Customer view
Formula
COUNT(invoices)
Filter: invoices.status = Submitted, PartiallyPaid
and invoices.totalAmount > 0

### Operating Profit
The sum of operating profit, taken directly from the profit and loss statement, over the period selected.

Company summary
Formula
SUM(profitAndLoss.operatingProfit)
Filter: profitAndLoss.fromDate and profitAndLoss.toDate = date range

### Paid In days
Bills
The total number of days it took the business to pay the bill. This will only appear once the bill has been fully paid and will appear in red if it was paid late.

Supplier view
Formula
Paid In:
If bills.status = Paid, then paidOnDate - issueDate.

If bills = PartiallyPaid, then Paid In column is blank.

If Paid In > Payment Terms, then Paid In value appears in red.

### Paid In days
Invoices
The total number of days it took the customer to pay the invoice. This will only appear once the invoice has been fully paid and will appear in red if it was paid late.

Customer view
Formula
If invoices.status = Paid
Then: paidOnDate - issueDate

If invoices.status = PartiallyPaid, then Paid In column is blank.

If Paid In > Payment Terms, then Paid In value appears in red.

### Paid vs Outstanding
Customers
The total value of paid invoices vs outstanding invoices per customer, over the period selected.

Company summary
Customer overview
Customer view
Formula
Total Paid invoices:
SUM(invoices.totalAmount - invoices.amountDue)
Filter: invoices.status = Paid, PartiallyPaid
and invoices.totalAmount > 0

Total outstanding invoices:
SUM(invoices.amountDue)
Filter: invoices.status = Submitted, PartiallyPaid
and invoices.totalAmount > 0

Calculation for ‘Other Customers’:
Total paid invoices - Total paid invoices for the top 5 customers

Paid vs Outstanding
Suppliers
The total value of paid bills vs outstanding bills per supplier, over the period selected.

Company summary
Supplier overview
Supplier view
Formula
Total paid bills:
SUM(bills.totalAmount - bills.amountDue)
Filter: bills.status = Paid, PartiallyPaid
and bills.totalAmount > 0

Total outstanding bills:
SUM(bills.amountDue)
Filter: bills.status = Submitted, PartiallyPaid
and bills.totalAmount > 0

Calculation for ‘Other Suppliers’:
Total Paid bills for Filter - Total Paid bills for Top 5

### Profit Margin
The net profit margin ratio is the the ratio of net profits to revenues, over the period selected.

Company summary
Formula
profitAndLoss.netprofit/profitAndLoss.Income x 100
Filter: profitAndLoss.fromDate and profitAndLoss.toDate = date range

Reference
The ID of the invoice.

Customer view
Formula
invoices.id

### Reference
The ID of the bill.

Supplier view
Formula
bills.Id

### Supplier Name
The name of the supplier.

Supplier overview
Formula
suppliers.supplierName

### Top 5 Customers
The top 5 customers on all graphs are determined by the total revenue against that customer, over the period selected.

Company summary
Customer overview
Customer view
Formula
Total invoice value per customer:
SUM(invoices.amount) per customer over that period

Total invoices across all customers:
SUM(invoices.amount) over that period

### Top 5 Suppliers
The top 5 suppliers on all graphs are determined by the total expenditure against that supplier, over the period selected.

Company summary
Supplier overview
Supplier view
Formula
Total bill value per supplier:
SUM(bills.amount) per supplier over that period

Total bills across all suppliers:
SUM(bills.amount) over that period

### Total Owed
Customers
Total value of outstanding invoices.

Customer overview
Customer view
Formula
SUM(invoices.amountDue)
Filter: invoices.status = Submitted, PartiallyPaid

### Total Owed
Suppliers
The total value of outstanding bills.

Supplier overview
Supplier view
Formula
SUM(bills.amountDue)
Filter: bills.status = Open, PartiallyPaid

### Concentration %
Individual Customer
The percentage of total revenue attributed to that customer.

Customer view
Formula
Total invoices per customer/total invoices for period

Total invoices per customer= a-b-c

a. SUM(invoices.totalAmount)
Filter: customers; invoices.status = Submitted, PartiallyPaid, Paid
and invoices.totalAmount > 0
b. SUM(creditNotes.totalAmount)
Filter: customers; creditNotes.status = Submitted, Paid
c. SUM(PaymentLink.amount)
Filter: customers; PaymentLink.type = refund

Total invoices for period = a-b-c

a. SUM(invoices.totalAmount)
Filter: invoices.status = Submitted, PartiallyPaid, Paid
and invoices.totalAmount > 0
b. SUM(creditNotes.totalAmount)
Filter: creditNote.status = Submitted, Paid
c. SUM(PaymentLink.amount)
Filter: PaymentLink.type = refund

Formula for ‘Other customers’:
Total invoices - Sum (Total invoices for this customer)

### Concentration %
Individual Supplier
The percentage of total expenditure attributed to that supplier.

Supplier view
Formula
Total bills per supplier over that period/total bills over that period

Formula for top suppliers:

Total bills per supplier over that period/total bills over that period

Total bills per supplier= a-b-c

a. SUM(bills.totalAmount)
Filter: suppliers; bills.status = Open, PartiallyPaid, Paid
and bills.totalAmount = > 0
b. SUM(billCreditNotes.totalAmount)
Filter: suppliers; billCreditNotes.status = Submitted, Paid
c. SUM(BillPaymentLink.amount)
Filter: suppliers; BillPaymentLink.type = refund

Total bills for period= a-b-c

a. SUM(bills.totalAmount)
Filter: bills.status = Open, PartiallyPaid, Paid
and bills.totalAmount > 0
b. SUM(billCreditNotes.totalAmount)
Filter: billCreditNotes.status = Submitted, Paid
c. SUM(BillPaymentLink.amount)
Filter: BillPaymentLink.type = refund

Formula for ‘Other Suppliers’:
Total bills - SUM(Total bills for this supplier)

### Net Sales
Commerce
Net sales is the sum of all gross sales of the merchant minus all their respective returns and discounts for all orders.

Formula
Net sales = SUM(a- b)

a. commerce-orders.orderLineItems.quantity * commerce-orders.orderLineItems.unitPrice

b. commerce-orders.totalDiscounts + commerce-orders.totalRefunds

### Gross Sales
Commerce
Gross sales is the grand total of all the sales processed by the merchant, without any deductions factored in.

Formula
Gross sale of an order: a

a: commerce-orders.orderLineItems.quantity * commerce-orders.orderLineItems.unitPrice

Gross sales of all orders: SUM(a)

### Discounts
Commerce
Total of discounts on all orders processed by the merchant.

Formula
SUM(commerce-orders.totalDiscount)

Refunds
Commerce
Total of refunds on all orders processed by merchant.

Formula
SUM(commerce-orders.totalRefund)

### No of Orders
Commerce
The count of all orders processed by the merchant.

Formula
COUNT(commerce-orders.id)

### Average Net Sales
Commerce
Cumulative average of all net sales for the merchants' sales.

Formula
Average of net sales:(a/b)

a: Net sales
b: COUNT(commerce-order.id)

### Average Order
Commerce
A cumulative average of all orders processed by the merchant

Formula
a/b

a: SUM(commerce-orders.totalAmount)
b: COUNT(commerce-orders.id)
