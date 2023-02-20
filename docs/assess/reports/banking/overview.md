---
title: "Banking"
hidden: true
createdAt: "2022-05-23T08:45:15.824Z"
updatedAt: "2022-06-16T13:20:53.350Z"
---

The Banking feature provides the banking data needed to assess an SMBs ability to repay a loan. Outputs are auto-calculated for you across the full history of financial statements for a linked company and can be retrieved for a single period or spread across multiple periods enabling you to perform time series analysis of the financial performance of the company.

# Banking formulas

|Metric|Formula|How that's translated to Codat data points|
|----|----|----|
|**Balance limit**|Sum of all balance limits.||
|**Current balance**|Sum of all current balances. The current balance returned from the account balances endpoint is what it is at the time of the last sync. Use the banking-transaction `postedDate` and `banking-transaction` value to work out the last period's closing balance.||


## Calculating the current balances for two periods

In this scenario, we will calculate the current balances over two 1-month periods (February 1 - March 31) for a single bank account for a company.

The latest sync for the company was on June 8 2022 which is the date of the latest current balance which was £190,000.

a. Current balance on June 8 2022 is £190,000.
b. Transactions from April 1 to June 7 (inclusive) total £11,000.
c. Transactions from March 1 to 31 March 31 (inclusive) total £5,000.

|Date|Current balance|Calculation|
|----|----|----|
|31 March 2022|£179,000|`a - b` a. Current balance on June 8 2022. b. Transactions total from April 1 to June 7|
|28 February 2022|£174.000|`(a - b) - c` a. Current balance on June 8 2022. b. Transactions total from April 1 to June 7 (inclusive). c. Transactions total from March 1 to 31 March 31 (inclusive)|

