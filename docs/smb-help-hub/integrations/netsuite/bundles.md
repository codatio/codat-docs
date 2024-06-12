---
title: Understand bundles
description: Understand bundles
sidebar_label: Understand bundles
hide_table_of_contents: false
---

How you ended up here from the netsuite flow
what this page will help with


## What is a bundle?

- collection of javascrpt files that a user can install 
a group of files from someone in the netsuite universe (not necessari;y netsuite themselves) made available to be installed by someone
it then performs whatever it was built to do

NetSuite Bundles are packages of customizations, scripts, and configurations that can be installed into NetSuite accounts.

Simply put a bundle is a grouping of code, records, and settings that allow you to extend the functionality of NetSuite.

A bundle is a collection of components that are packaged together within NetSuite.can also be called a suiteapp. 

any risk associated with a bundle?

- yiou re allowing us not to just fetch data, but also changee xisting data - so there needs to be assurance and confidence. it s been installed over 1000 times by different people (SMBs)

- your provider trusts us
- we do lots of testing of our bundle on test data. it s currently running against 10s and 100s of live netsuite production accounts. it is used by X number of our clients (financial service providers) - 71 clients atm actively in the last year. 

A bundle in NetSuite refers to a collection of customizations, configurations, and functionalities packaged together for easy deployment. It allows businesses to streamline processes, enhance productivity, and meet specific requirements. A bundle can include features like custom fields, workflows, scripts, and saved searches.

a bundle sometimes is called a suite bundle, or a suite app - but it s the same thing. 

ours is an unmanaged bundle. not approved by netsuite, we just chose to deploy it into the world of netsuite as smth we made in our instance. 

## How do I install a bundle?



## What bundles does Codat use?

we use our bundle for pushing and pulling, but mostly pushing. that s what our bundle does. we need the bindle (you can just query using Netsuite QL) because it allows us to do more advanced things, 

what does our bundle do - 
- to pull and push specific fields that arent accessible via normal UI (eg sales tax items, tax groups)
- interact with attachments in netsuite
- helps search through records quicker using specific fields and indices to get the data quicker
- 

we support - 

update - bills and purchase orders
create - bank accounts, credit notes, payments, acocunts, 
it s not easily identifiable which records were created by codat - check this



netsuite-created bundle - Bank Statement Parser - they have made and released that allows the reading of bank statements in a way that we can easily extract it and read/write data (to confirm). we push the bank feed data into the accounting platform. 

as an smb i get my bank statemnt data reconciled in my acctg platform without typing it in


