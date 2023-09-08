---

title: "Implementing client side data storage"
description: "Tips and advice on consuming and working with Codat data"
sidebar_label: "Client Side Data Storage"

---
There are many different ways that JSON data retrieved from the Codat API can be stored. Some of the options are briefly described here but the right choice will depend on your requirements as well as the tools and skills at your disposal.
If you have any further questions or specifics based on your use case please reach out to your Account Manager or Implementation Specialist.

It is much slower to retrieve data from the Codat API than it is to retrieve it from local storage so we advise storing any data retrieved from the API locally for faster retrieval in the future. 

Some of the different ways that Codat data can be stored are;
* Relational Database: In a relational database, such as SQL Server or MySQL, you can store JSON data by extracting its fields and storing them in separate tables with predefined columns. This approach supports sophisticated querying but requires you to define a rigid schema for the data and create relationships between tables. 
* NoSQL Database: NoSQL databases, such as MongoDB or CouchDB, are designed to store and query unstructured or semi-structured data like JSON. They can store JSON documents as-is without requiring a predefined schema. Each document can have its own structure, and the database can index fields within the documents to enable efficient querying.
* File-based Storage: You can store JSON data in files on disk. This approach supports very limited querying but is useful when you want a simple and portable solution, or when you need to exchange data with other systems that expect JSON files.

Data retrieval frequency should reflect the sync settings configured for the datatype. For example, if Codat syncs invoice data weekly there is no point retrieving the data from the Codat API daily. Learn more about how [data type settings](/core-concepts/data-type-settings) are configured. 

The date and time that data is retrieved from the Codat API should be stored so that subsequent retrieval can be limited to creates/changes/deletes done since the previous one. Learn more about how you can use [modified dates](/using-the-api/modified-dates) to control retrieval.

Codat stores most data in a relational shape, but it may not be necessary to follow all the relational paths. For example, if you need invoice data, but not the associated customer details, you do not need to retrieve them separately because invoices contain a `customerId` already.

All data should be correctly identified when stored locally so it can be easily associated to the source data in Codat. The Codat Data Model includes the identifier (also referred to as the key) for each data type. It’s important to note the scope of the identifier, for example, the identifier for an invoice is the `Id` property within the scope of a company, so an invoice should be stored with a `companyId`+`invoiceId` identifier.
