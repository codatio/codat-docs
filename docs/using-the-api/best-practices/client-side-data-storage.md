---
title: "Implementing client-side data storage"
description: "Tips and advice on storing, working with, and consuming Codat data"
sidebar_label: "Client-side data storage"

---
You can store JSON data retrieved from the Codat API in many different ways. We have described some of the options for you, but the right choice depends on your requirements and the tools and skillset you have available.

:::tip Data storage support
If you have specific questions based on your use case, please reach out to your contact at Codat.
:::

## Data storage options

We advise storing data retrieved from the API locally because it is much faster to fetch it from local storage than the Codat API. You can use one of the following options for storage.

1. **Relational database**

   In a relational database, such as SQL Server or MySQL, you can store data fields extracted from the JSON in separate tables with predefined columns. This allows for sophisticated querying but means you need to define a rigid schema for the data and create relationships between tables. 

2. **NoSQL database**

   NoSQL databases, such as MongoDB or CouchDB, can store JSON documents as-is without requiring a predefined schema. Each document can have its own structure, and the database can index fields within the documents to enable efficient querying.

3. **File-based storage**
   
   You can store JSON data in files on disk. This approach supports very limited querying but is useful when you want a simple and portable solution, or when you need to exchange data with other systems that expect JSON files.

## 💡 Tips and traps

* Consider the [sync settings](/core-concepts/data-type-settings) configured for a specific data type when determining the data retrieval frequency. 

  For example, if Codat syncs invoice data weekly, there is no point in fetching that data from the Codat API daily. 

* Store the date and time of when you fetch the data from the Codat API. You limit subsequent retrievals only to data changed since the preious fetch using [modified dates](/using-the-api/modified-dates) to control retrieval.

* Codat stores most data in a relational shape, but it may not be necessary to follow all the relational paths. 

  For example, if you need invoice data, but not the associated customer details, you don't need to retrieve them separately because invoices contain a `customerId` already.

* Use the identifier (also referred to as the key) included into our data types to identify the data correctly when storing it locally. This will help easily associate this data to the source records in Codat. 

* Check the scope of the identifier. For example, the identifier for an invoice is the `id` property within the scope of an individual company, so an invoice should be stored with a `companyId` + `invoiceId` identifier.

