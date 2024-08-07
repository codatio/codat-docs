---
title: Troubleshooting and issue resolution
sidebar_label: Resolve issues
description: Get help if you have questions or experience issues when connecting to Sage Intacct
hide_table_of_contents: false
---

## Prerequisites

### What do I need before I start connecting Sage?

To successfully connect to your Sage Intacct accout / in order to complete the flow, the user ID you log in with needs to have: 
Full administrator rights - 
Access to the top-level entity

A user with administrator privileges is given the highest level of access, including the ability to:
Configure and subscribe to applications
Create users
Assign permissions to users

You will need 

Path to check - 

You can check if your user ID has the full administrator rights by going to Company > Admin > Users and check that the Admin privileges column next to your user name has admin privileges set to "Full".

If you can't see this menu path, this likely means the user ID you logged in with doesnt have the access privileges trequired to complete connection steps. Talk to someone in your organization who can 

https://www.intacct.com/ia/docs/en_US/help_action/Administration/Admins/admin-users.htm

Access to the top-level entity

This is reevant if your organization has multiple entities in Sage Intacct. You can cehck this by going to company > setup > entities. If there is a single entry there, you re not likely to have a top entity level. 

to navigate tot he top level entity itself, click ont he entity dropdown next to yoru organization's name an dlogo, click All entitites, and select the top-level entity. The displayed information will change to list the top level entity.

If you dont have access to either of these, speak to someone in your orgnization who can give you the privileges or ask them fro a different set of credentials.

## Web Services subscription 

### What is a Web Services subscription?


Web Services enables you to exchange Sage Intacct information with external applications and integrations. Data is sent or received in the form of API requests that are made through a Web Services endpoint.
For example, you might have a CRM or bill payment system that you want to run externally but post back to Intacct. Web Services works as a mechanism to create, update, read, and delete data.
For information on using the API though Web Services, see API and developer resources. Additionally, the Sage Intacct Developer portal hosts more specific information about Web Services capabilities.

why does codat need this

### How do I enable a Web Services subscription?

screenshot

it may already be enabled, so you dont need to do that again. 

steps from the figma with a bit more detail
mention the scare screen

### How do I add a Web Services authorization?

  a set of steps from figma with a bit more detail
screenshot

Use the Web Services authorizations list to control which sender IDs can and cannot make Web Services requests to your company. If a sender ID is not on this list, any Web Services requests they make to your company will fail. For this reason, it is important to review your regular Web Services activity and integrations to ensure the proper sender IDs are on your authorization list.

link to sage https://www.intacct.com/ia/docs/en_US/help_action/Company/Company_setup/Company_Information/Security/company-web-services-authorizations.htm

the sender ID we provide these values to you in our flow. You MUST use these values in the  authorization, otherwise the connection estup will not be successful. 



## Web Services user

### How do I create a Web Services user?

a web services user is ... 

Web Services users exchange information programmatically with Sage Intacct via Web Services API calls—they are not allowed to log in to the UI.
A Web Services user does not provide access to Web Services itself. Rather, a Web Services user is paired with a Web Services sender ID, which is an additional credential that lets you send requests to a Web Services endpoint. You can obtain a sender ID by contacting your Sage Intacct account representative.



steps from the figma

screenshot

Business as the User type and Full for Admin privileges. 

Enter the user's Account email address.
This field is used for verification purposes whenever the user initiates or requests a password reset. If a Contact is associated with the user, the Account email address does not have to match the Primary email address of the associated Contact name. Users can update the Account email address from the My preferences page.
You can control the user's ability to log in by changing the Status from active to locked-out or inactive. Learn more about the meaning of each status.
New users can only be created with a status of Active or Locked out. You can edit a user after creation to change its status to Inactive.
Select a User type for the user. User type controls the maximum features available to the user, while permissions set what a user can actually within those restrictions. Learn more about what each user type can do.
For a Business user type, determine whether the user has Admin privileges. If you do not want the user to be an administrator, select Off. Otherwise, select either Limited or Full.
A user with administrator privileges is given the highest possible level of system access, including the ability to:
Configure and subscribe to applications
Create users
Assign permissions to users
A full administrator has complete administration privileges, including the ability to create other full administrators, access to all features in Platform Services, which let admins edit pages in Intacct.
Additionally, in role-based companies, full administrators can use the Try role feature. Limited administrators have all administration privileges, except for the aforementioned items.

https://www.intacct.com/ia/docs/en_US/help_action/Administration/Users/web-services-only-users.htm

### How do I create an admin role for the Web Services user?

### Why don't I see the Roles information tab?


### How can I manage granular permissions for the admin role?


### How can I check that my admin role has correct permissions?


## Error resolution 

### I have not received an email with credentials. What do I do?


### How do I resolve the 'Unable to connect to Intacct' error?

### How do I resolve the 'Missing permissions' error?


