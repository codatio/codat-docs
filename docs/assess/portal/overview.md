---
title: "Assess in the Portal"
description: "Codat's no-code product that provides insights about a company's data to help make informed lending decisions"
createdAt: "2022-04-11T16:50:27.970Z"
updatedAt: "2022-11-03T09:22:59.470Z"
---

Assess in the Portal leverages Codat APIs to produce features that serve data on the health of a business and provide insights required for making informed lending decisions. Assess consists of five sections: Profit and Loss, Balance Sheet, Commerce, Banking and Marketing.

To benefit from all of the features of Assess, a company should be linked to accounting, banking and commerce data sources. Explore our [How to get started](/assess/get-started) guide.

The categorized Profit and Loss, and Balance Sheet showcase the power of the [Categories](/assess/categories) feature which standardizes bespoke data across SMEs. After the data is standardized, meaningful insights and measurements are produced for financial performance.

**Data Match**

The data match percentage button is located next to the **Assess** header on every Assess page and it leverages the [Data Integrity](/assess/data-integrity) feature. The match percentage is pre-calculated using the [Data Integrity summaries](/assess/data-integrity/api-data-integrity#summaries) endpoint.

It takes the match percentage from the summaries endpoint for both `banking-transactions` and `accountTransactions` to calculate an overall match percentage, and it accounts for all dates, not just the optimal date range.

Hovering over the button reveals further detail about the data match. Clicking the **Data match** button takes you to the **Data Integrity** page which provides detailed information about matches. Explore [Data Integrity](/assess/data-integrity).

**Reports**

The **Reports** button is located in the top right corner of every Assess page and directs you to the [Reports](#reports) page in the Portal where you can generate and download the [Assess Report](/assess/reports/excel-reports/assess-report) and the [Audit Report](/assess/reports/excel-reports/audit-report) in in [Excel format](/assess/reports/excel-reports).

## Assess sections

- [Profit and Loss](#profit-and-loss)
- [Balance Sheet](#balance-sheet)
- [Commerce](#commerce)
- [Banking](#banking)
- [Marketing](#marketing)

## Profit and Loss

The Profit and Loss page is the landing page when accessing Assess. The page consists of the graph displaying selections for the categorized financial statement, and ratios. If you have uncategorized accounts, the Account Categorization modal will be displayed. Only uncategorized accounts will be shown and you will need to manually assign categories. Our [Categorization of accounts](/assess/portal/categorization-of-accounts) documentation provides more detail.

### Selection panel

![A screenshot of the P&L selection panel](/img/old/e8a9d6f-PLSelectionPanel3.png)

**Currency**: The currency displayed in the profit and loss statement. This is predefined for the P&L and reflects the currency in the accounting platform.

**Period start**: Periods are defined in months. Financial statements are backwards looking, so this is the period you want to start looking back from. The system will prefill the latest full month available in the company's data. If you select a month that’s out of range, the system will notify you of the latest available month for the company.

**Period length**: Specified in months.

**Periods to compare**: The number of periods for which calculated data is returned and compared.

Select the **Period start**, **Period length** and **Periods to compare** to achieve the views you want. For example:

**If you want a monthly view of the last 12 months:**  

Period start = latest month (prepopulated for you)  
Period length = 1 (month)  
Periods to compare = 12

**If you want to view the last 4 full quarters:**  
Period start = choose the last month of the last quarter you want to choose, e.g. June 2022  
Period length = 3  
Periods to compare = 4  

### Mapping to a common statement outline

On load, we will automatically categorize the lines on the business's profit and loss statement. The results will be presented in a modal for you to review. When you are finished reviewing each group, press _Next_. In some cases, we may not be able to automatically map every statement line - these will highlight in red and you will be required to select the relevant category from the list. Once complete, press _Save_ to view the final statement.

### Statement

The categorized profit and loss statement is obtained from the **Enhanced Profit and Loss** endpoint. It provides the fully categorized statement over specified periods of time, for a specific company’s accounting connection.

The following information is displayed:

- Income
- Expense
- Gross profit
- Net operating profit
- Net profit

![P&L graph and extract of a statement based on selection criteria](/img/old/a1b310e-PL1.png)

The **Statement** table renders the [Enhanced Profit and Loss](/assess/reports/enhanced-financials/profit-and-loss) endpoint response data to give a clear visual of the company’s performance over the specified periods. The green and red arrowheads alongside the numbers indicate an increase or decrease respectively compared to the previous period.

Rows can be expanded or collapsed to show more or less information. A maximum of 5 checkboxes can be checked, like Income above, to display the selection on the graph. Hovering over the graph displays a tooltip which contains information about all of the points plotted for that date.

### Ratios

Ratios are produced from the [Financial Metrics](/assess/metrics/accounting/api-financial-metrics) endpoint. It provides a set of pre-calculated ratios and metrics used to assess a company’s financial performance. The Financial Metrics feature performs complex calculations on fully standardized financial statements to produce the following financial metrics and ratios (see [formulas](/assess/metrics/accounting/api-financial-metrics#what-ratios-and-metrics-are-available)):

- Gross Profit Margin
- EBITDA
- Debt Service Coverage Ratio
- Current Ratio
- Quick Ratio
- Free Cash Flow
- Working Capital
- Fixed-charge Coverage Ratio

The **Ratios** table is displayed below the Statement table. Each metric/ratio can be expanded to show the inputs and values used to calculate the metric (see extract of the Ratios table below).

![An extract of a table of P&L ratios based on the selection criteria](/img/old/b28af34-AssessPortal_3.png)

## Balance Sheet

The Balance Sheet page consists of a graph displaying selections for the categorized balance sheet, a statement and ratios.

The balance sheet statement provides the fully categorized statement over specified periods of time, for a specific company’s accounting connection.

Check [Prerequisites](/assess/get-started#prerequisites) to make sure you have the required data types enabled.

The **Data match** percentage displayed in the top right is a comparison of how closely the accounting data aligns with banking data.

### Selection panel

![A screenshot of the balance sheet selection panel](/img/old/05c0127-BSSelectionPanel2.png)

**Currency**: The currency displayed in the balance sheet statement. This is predefined for the balance sheet and reflects the currency in the accounting platform.

**Period start**: Periods are defined in months. Financial statements are backwards looking, so this is the period you want to start looking back from. The system will prefill the latest full month available in the company's data. If you select a month that’s out of range, the system will notify you of the latest available month for the company.

**Period length**: Specified in months.

**Periods to compare**: The number of periods for which calculated data is returned and compared.

Select the **Period start**, **Period length** and **Periods to compare** to achieve the views you want. For example:

**If you want a monthly view of the last 12 months**  
Period start = latest month (prepopulated for you)  
Period length = 1 (month)  
Periods to compare = 12  

**If you want to view the last 4 full quarters**  
Period start = choose the last month of the last quarter you want to choose, e.g. June 2022  
Period length = 3  
Periods to compare = 4  

### Balance Sheet statement and graph

The statement displays balance sheet data based on the **Period start**, **Period length** and **Periods to compare** specified at the top of the screen.

![A screenshot of a balance sheet graph and extract of a statement based on selection criteria](/img/old/ec2864e-bs_graph_statement2.png)

#### Statement format

Each statement has four levels. The fourth level is the original line item (general ledger account) in the company’s accounting package. The first three levels represent a smart categorization layer that we have applied. If you want to change the group that a line item is categorized to, you can do this by following the [instructions for categorizing accounts](/assess/portal/categorization-of-accounts#how-to-categorize-accounts).

##### Categorizing debit accounts

Debit accounts are categorized as **Asset > Current assets > Cash**. However, when the debit account is in overdraft over a given period, the **Enhanced Balance Sheet** automatically categorizes it as **Liability > Non-current liabilities > Loans payable**, and changes the sign from negative to positive.

#### Statement and graph options

**Green and red arrows**: Positioned alongside the numbers, they indicate an increase or decrease respectively compared to the previous period.

**Statement rows**: These can be expanded to view a breakdown of each value. A maximum of five checkboxes can be checked, like **Net Operating Profit** above, to display the selection on the graph. Hovering over the graph displays a tooltip which contains information about all the points plotted for that month.

### Ratios

The ratios and metrics are calculated from the data in the statement above and use the same period configuration as set at the top of the screen. The supported metrics are (see [formulas](/assess/metrics/accounting/overview)):

- Current Ratio
- Debt Service Coverage Ratio
- Free Cash Flow
- Quick Ratio
- Working Capital

The Ratios table is displayed below the Statement table. Each metric/ratio can be expanded to show the inputs and values used to calculate the metric (see the extract of the Ratios table below).

![An extract of a table of balance sheet ratios based on the selection criteria](/img/old/ec63022-bs_ratios.png)

### Developer - Feature box

If you are a developer, and you are looking to reproduce the outputs of this section, refer to the following API documentation:

- [Enhanced Balance Sheet](/assess/reports/enhanced-financials/balance-sheet): To produce the balance sheet statement table and graph.
- [Financial Metrics](/assess/metrics/accounting/api-financial-metrics): To produce the ratios table.
- [Data Integrity](/assess/data-integrity/api-data-integrity): To produce the Data match percentage.

## Commerce

The Commerce page consists of the sales analysis and key indicators of merchant health. The [Commerce Metrics](/assess/metrics/commerce/overview) endpoints are used to generate the graphs and metrics displayed on this page.

### Sales

The _Sales_ section provides a revenue graph generated from the [Revenue](/assess/metrics/commerce/api-revenue) endpoint, and displays the average order value for the date range selected. The dropdown to the right of the graph gives you the option to map _Revenue_ (represented as a currency) or _Revenue growth_ (represented as a percent). Hovering over the graph displays a tooltip that contains information about the point plotted for that date.

![Revenue and revenue growth graphs based on selection criteria](/img/old/4d18153-Sales_1.png)

### Merchant Health

The Merchant Health section displays customer information. You can select graphs for _New vs. existing customers_ or _Orders vs. refunds_. Hovering over the graph displays the value for each of these at that point in time.

![Merchant health graphs for the orders vs. refunds selection](/img/old/108f299-AssessPortal_9.png)

The following metrics are displayed as follows:

- [New vs. existing customers](/assess/metrics/commerce/api-customer-retention) (graph)
- [Orders](/assess/metrics/commerce/api-orders) vs. [Refunds](/assess/metrics/commerce/api-refunds) (graph)
- [Refund rate](/assess/metrics/commerce/api-refunds) (pill)
- [Customer retention](/assess/metrics/commerce/api-customer-retention) (pill)
- [Lifetime value](/assess/metrics/commerce/api-lifetime-value) (pill)

## Banking

The Banking page displays the latest current balance, overdraft limit and a graph of either _account balances_ or _inflows vs outflows_ depending on which you select.

The selection panel lets you choose:

- Which graph you want displayed &ndash; _Account balances_ or _Inflows vs outflows_.
- The company's bank accounts that are included in the graph &ndash; by default, you are unable to deselect all accounts.
- Start and end month.

All the banking values on the UI are currently converted to GBP. There may be the ability to convert to other currencies in a future release.

The _balance_ and the _Account limits_ displayed are aggregate views for the selected bank accounts and are values as of the end date of the report.

![A screenshot of the banking selection panel](/img/old/1513c65-banking_balances_4.png)

### Account Balances graph

This graph displays when chosen in the _Select graph_ dropdown. Hovering over the graph displays a tooltip containing the total account balance for the selected bank accounts.

![A banking graph based on selection criteria](/img/old/11d2897-banking_balances_1.png)

### Inflows vs outflows graph

This graph displays when chosen in the _Select graph_ dropdown. Hovering over the graph displays a tooltip containing the total inflows and outflows for the selected bank accounts for that month.

The graph is produced from the [Banking transactions](/banking-api#/schemas/banking-transactions) endpoint response.

![A bar graph showing inflows vs outflows based on selection criteria](/img/old/2a880ed-Inflows_1.png)

### Transaction table

The transaction table displays below the _Inflows vs outflows_ graph and contains all transactions for the selected bank accounts, for the selected dates. Clicking the _Date_ column header orders the transactions by ascending, descending or unordered date.

![An extract of a table of transactions for a selected bank account for selected dates](/img/old/969bb45-Transaction_table_1.png)

#### Exclude transactions

:::info Unavailable for Plaid
The filter and exclude functionality is currently unavailable for Plaid-connected companies.
:::

You can type into a search bar located above the table to find matches in the _Description_ column. As you type, the table refreshes with all transactions that match the search term. In the search bar, to the right, the number of matching transactions is displayed in grey and the _Exclude all_ button becomes active.

![A screenshot demonstrating the search bar functionality using the word "payment" as an example and showing the results](/img/old/7142a41-Transaction_table_2.png)

Clicking the _Exclude all_ button removes the filtered results from the transaction table. The transaction table then goes back to displaying the remaining transactions for the selected dates and the graph is updated. The _Excluded terms_ box to the top right of the table, displays all excluded terms in a drop down menu.

Terms that were excluded are stored locally in the browser and will continue to be excluded whenever you access _Inflows vs outflows_.

![A screenshot showing the excluded terms button showing "direct cost" and "payment-customer" as examples of excluded terms](/img/old/b2e5be6-Transaction_table_3.png)

To review an existing excluded term, clicking on the term itself within the _Excluded terms_ drop down adds it to the search bar. The transactions linked to the term are displayed in grey in the table. To reinstate a transaction back into the transactions table, click the _X_ alongside the excluded term. The graph and the transaction table updates to include the term.

## Marketing

The Marketing page displays graphs for the **Marketing to revenue** and **Marketing to expense** metrics, and a table of the percentages and metric inputs. These marketing metrics are calculated from accounting data. It is generated from data available on the customer's profit and loss statement (see [formulas](/assess/metrics/accounting/api-financial-metrics#marketing-metrics-formulas)).

### Selection panel

![A screenshot showing the marketing selection panel](/img/old/27785f4-MarketingSelectionPanel2.png)

The dismissible banner displayed at the top of the _Marketing_ page invites you to our <a className="external" href="https://portal.productboard.com/codat/7-product-roadmap/c/459-marketing-metrics" target="_blank">product roadmap</a> to let us know which platforms and insights you would be interested in.

**Currency**: This reflects the currency in the accounting platform.

**Period start**: Periods are defined in months. Statements are backwards looking, so this is the period you want to start looking back from. The system will prefill the latest full month available in the company's data. If you select a month that’s out of range, the system will notify you of the latest available month for the company.

**Period length**: Specified in months.

**Periods to compare**: The number of periods for which calculated data is returned and compared.

Select the **Period start**, **Period length** and **Periods to compare** to achieve the views you want. For example:

**If you want a monthly view of the last 12 months**  
Period start = latest month (prepopulated for you)  
Period length = 1 (month)  
Periods to compare = 12  

**If you want to view the last 4 full quarters**  
Period start = choose the last month of the last quarter you want to choose, e.g. June 2022  
Period length = 3  
Periods to compare = 4  

### Marketing data and graph

![An image showing marketing graphs and extract of a table of marketing data based on selection criteria](/img/old/288edbe-Mark_1.png)

The [Marketing Metrics](/assess/metrics/accounting/api-marketing-metrics) endpoint is used to generate the graphs and metrics displayed on this page. The green and red arrowheads alongside the numbers indicate an increase or decrease respectively compared to the previous period.

See the [API reference](/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-accountingMetrics-marketing).

Rows can be expanded or collapsed to show more or less information. Hovering over the graph displays a tooltip which contains information about the points plotted for that date.

## Reports

A **Reports** button is located in the top right corner of every Assess page. It takes you to the **Reports** page where you can generate and download the [Assess Report](/assess/reports/excel-reports/assess-report) and the [Audit Report](/assess/reports/excel-reports/audit-report) in [Excel format](/assess/reports/excel-reports).

![A screenshot of the reports page showing the Audit Report row with a sub-row showing a report that was generated](/img/old/a3d1d09-ReportsPage1.png)

The **Report name** provides the name of the report and an informative description of the report's objectives.

Click the **Generate report** button to produce a new report. The **Last generated** field will be updated to the date and time you generated the report. It will keep this timestamp until the next time you generate the report.

When a report was successfully generated, the report name (which is also the file name), with the file size and latest timestamp will be available for download. Clicking the **Download** button saves the Excel report to your local machine.

### Report types

- [Assess Report](/assess/reports/excel-reports/assess-report): Summary of Assess data in one Excel document.
- [Audit Report](/assess/reports/excel-reports/audit-report): Identifies indicators of inaccurate or out-of-date accounts, helping you to decision with confidence.
