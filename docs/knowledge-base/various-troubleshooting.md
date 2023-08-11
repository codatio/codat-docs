---
title: "Various troubleshooting"
---


## Duplicate data created in accounting platform

Codat does not currently provide endpoints to delete data within an accounting platform for the majority of data types.

If duplicate data has been pushed via the Codat API, you will need to inform your customer on what data should be deleted manually from within their accounting platform.

Some accounting platforms do not allow deletion, in these cases you should advise them to Void the data instead.

## Data not pulled from the platform
Update data

Ensure that data has been synchronised between Codat and the platform.

The most recent synchronised date is available via the API or under company data history on the Codat Portal.

A new synchronisation to pull the data should be triggered if out of date.

Filtering

Your application may have applied filtering to the data types, or adhering to filtering restrictions imposed by the platform.

## Integration user rights

You may experience errors or limitations when reading, writing or synchronizing data with a specific source platform because of insufficient user permissions. To resolve, make sure that your user has access to roles that give appropriate access to the source platform.

| Platform            | User roles                                                                                                                                                                    |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [QuickBooks Desktop](https://quickbooks.intuit.com/learn-support/global/manage-your-account/what-different-types-of-users-can-i-add-to-my-company/00/382355)  |  - Standard user (all)<br/>- Company admin <br/> - Accountant                                                                              |
| [Sage Business Cloud](https://help.accounting.sage.com/en-gb/accounting/manage-your-subscription/user-management.html) |  - Full access <br/> - Custom                                                                                                                                          |
| [Sage 50](https://help-sage50.na.sage.com/en-us/2019/Content/USERS/Role_Setup.htm)             |  - Full access <br/> - Custom <br/> - Customers & Sales <br/> - Vendors & Purchases <br/>- Inventory & Services <br/> - Banking & General Ledger <br/> - Company     |
| [Xero](https://central.xero.com/s/article/User-roles-and-permissions-in-Xero-Business-edition?userregion=true)                |  - Adviser <br/> - Standard                                                                                                                                            |

## Client Disabled via Login Provider

Occasionally, you may see the below screen while signing into the Codat portal:

![](/img/knowledge-base/client-disabled.png)

To resolve this issue and successfully sign in, sign out of the portal and sign back in using a different authentication method. Try signing in with Google first and if Google does not work try signing in with Microsoft.