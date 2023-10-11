---
title: "Lending API overview"
sidebar_label: Lending API
description: "Learn about the features that make up the Lending API product"
displayed_sidebar: lending
image: "/img/banners/social/lending.png"
hide_title: true
hide_description: true
hide_table_of_contents: true
banner_title: Lending API
banner_class: lending
banner_icon: "/img/logos/products/logo_assess_clear.svg"
banner_image: "/img/banners/assess.png"
banner_text: "Our Lending API helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from accounting, banking, and commerce platforms they are already using. It also includes features to help providers verify the accuracy of data and process it more efficiently."
video_url: "https://www.youtube.com/embed/Hz5NqTwDa3U?si=_cYMj7SXHX7QXCvH"
video_text: What is Lending API?
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations, bankingIntegrations, commerceIntegrations } from "@components/global/Integrations/integrations";

## What is it?

Our Lending API is built on top of the latest accounting, commerce, and banking data, providing you with the most important data points you need to get a full picture of SMB creditworthiness and make a comprehensive assessment of your customers.

## Who is it for?

Our Lending API is best for digital lenders, neobanks, corporate card providers, and commerce platforms who want to make an assessment of a small business's financial health and performance.

## Why use it?

We have done the heavy lifting for you by building integrations to the platforms your customers already use and handling the complexity of standardization. Our Lending API comes with a range of features that make customer data easier to collect and process, and gives you insights you didn’t have before on the accuracy of the data shared.

#### With the Lending API, you can:

1. Automate affordability assessments using categorized bank data.
2. Assess financial strength of a company with our debt report.
3. Streamline ratio calculation with categorized financial statements.
4. Refresh borrower data at any time without the need for costly manual data collection.

## Features

Our Lending API empowers you with a host of features to help you streamline your underwriting process:

<ul className="card-container col-3">
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Bank statements</h3>
    </div>
    <p>
      Underwrite with accurate, real-time cash flows enriched with spend and income categories.
    </p>
  </li>
  
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Sales</h3>
    </div>
    <p>
      Underwrite with real-time data from SMB's payments and shopping platforms.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Financial statements</h3>
    </div>
    <p>
      Automate financial statement and ratio analysis with a fully standardized profit and loss and balance sheet.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Liabilities</h3>
    </div>
    <p>
      Comprehensive loan insights and credit history analysis.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Accounts receivable</h3>
    </div>
    <p>
      Assess debtor risk in real time with accounts receivable insights.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Accounts payable</h3>
    </div>
    <p>
      Enhance underwriting precision with streamlined accounts payable insights.
    </p>
  </li>

</ul>

## Supported integrations

#### Accounting

<IntegrationsList integrations={accountingIntegrations} />

#### Banking

<IntegrationsList integrations={bankingIntegrations} />

#### Commerce

<IntegrationsList integrations={commerceIntegrations} />  

---
## Read next

* [Get started](/lending/get-started) building with our Lending API
