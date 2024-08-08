---
title: Issues with a Web Services user
sidebar_label: Web Services user
description: Get help if you have questions or experience issues when connecting to Sage Intacct
hide_table_of_contents: false
---

## Web Services user

### How do I create a Web Services user?

a web services user is ... 

Web Services users exchange information programmatically with Sage Intacct via Web Services API calls—they are not allowed to log in to the UI.
A Web Services user does not provide access to Web Services itself. Rather, a Web Services user is paired with a Web Services sender ID, which is an additional credential that lets you send requests to a Web Services endpoint. You can obtain a sender ID by contacting your Sage Intacct account representative.

in the concatc field, explain how to create a new contact. say you dont need an email address

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

### How do I create a role for the Web Services user?

to create a full access role, 

we recommend creating a new role so that we an make sure it has the correct access settings. If you already have a full access role you can assign to this user, you can skip this step and proceed to Y. 

steps from the figma

screenshots

you may encounter the following scenarios: 

- no roles information tab

- you already have a role

### How do I assign permissions to this role?

#### Assigning permissions

Permissions enable users to perform a particular function or task within a specific area of the product. For example, you might grant permission within the General Ledger to view financial reports but not to create, edit, or delete them.
By assigning permissions to a role, you automatically grant the permissions to all users who have that role.
To update permissions, you must be a full administrator or be a limited administrator with privileges to "assign permissions."

https://www.intacct.com/ia/docs/en_US/help_action/Administration/Permissions/assign-permissions-to-roles.htm?tocpath=Administration%7CRoles%7C_____3

steps from figma

then we say

you might run into an issuewhere you dont see the tab. this means blabla, go to htis section

https://www.intacct.com/ia/docs/en_US/help_action/Administration/Permissions/user-permissions-to-intacct.htm?tocpath=Administration%7CPermissions%7C_____4


#### Managing granular permissions

How to manage specific permissions
Andy to give details of granular permissions


### Why don't I see the Roles information tab?

we explain what user based permissions are

#### Managing granular permissions

How to manage specific permissions
Andy to give details of granular permissions

### How can I check that my role has correct permissions?

navigate to 

roles based - company _> admin _> roles and view the role you plan to assign, then view its subscriptions

user based - ompany > admin > web services user > view permissions and roles to view them

the list of permissions you need:
(full list from figma)

if you want this granular, see this section 