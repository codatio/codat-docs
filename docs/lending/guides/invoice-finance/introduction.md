---
title: "Invoice financing build guide"
displayed_sidebar: "lending"
description: "Selective invoice financing with Codat and our Lending solution" 
hide_title: true
hide_description: true
banner_title: Invoice financing build guide
banner_image: "/img/banners/lending-cropped.png"
banner_text: "Selective invoice financing with Codat and our Lending solution"
---

:::tip Who is this guide for?

This guide is for tech-savvy backend developers who know how to use an API. No frontend experience is needed.

:::

### Summary

🎯 With our demo app, you will go through the invoice financing process flow, from establishing a connection with a borrower's accounting software to issuing a decision on selected invoices. You will see how Codat makes it easier for the borrower to raise capital against the amounts due from customers, and for the lender to make an invoice financing decision. 

⏳ Estimated time to complete: 15-25 minutes

🛠️ The demo project is implemented in [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) as a backend API. You can configure and run the demo app in the terminal, or use your preferred IDE or code editor.

### ✔️ Delve into the demo app to...

- Establish a connection with our test accounting software
- Read invoice data required for the financing assessment
- Check the invoices' eligibility based on a set of criteria we defined in the app
- Issue a decision on eligible invoices

### ❌ This guide does not cover...

- Building any application form or dashboard UIs
- Carrying out due diligence checks on the borrower
- Instructions on how to build your own invoice financing product
- Details on how to perform [loan writeback](/lending/guides/loan-writeback/introduction) for invoice financing 

### About the demo app

The app's codebase is available via our [GitHub repo](https://github.com/codatio/demo-invoice-finance). Clone it locally to try out the application.

The codebase uses Codat's [Lending](/lending/overview) solution to make an invoice financing decision. We will walk you through the setup in the Portal and the code when [setting up the demo app](/lending/guides/invoice-finance/setting-up). 

### Why we use _Lending_

The demo app relies on Codat's [Lending](/lending/overview) solution, which simplifies the following aspects of invoice financing:

- Invoice collection

    We remove the manual effort of uploading and extracting invoice data with our accounting software integrations, saving your team’s time and effort and providing the borrower with a better digital experience.

- Risk assessment

    Our accounting software integrations give you real-time insight into the financial health of a business and its customers, allowing you to make better invoice financing decisions.

---

### Read next

Now that you know the focus and purpose of our demo app and its guide, you can:
* [Set up Codat and your local environment](/lending/guides/invoice-finance/setting-up).
