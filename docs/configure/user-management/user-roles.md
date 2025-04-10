---
title: "User roles"
description: "Understand key differences and access features of Codat user roles"
createdAt: "2019-02-20T11:14:06.974Z"
updatedAt: "2022-10-04T14:21:33.026Z"
---

There are four levels of users on the Codat system which have access to different functionality of the Codat system.

- Onboarding
- Analyst
- Developer
- Administrator

## Onboarding

_Onboarding_ users have the ability to add companies to the Codat portal and link these companies with financial information sources. They have the ability to view when data sets have been linked but are unable to view the uploaded information.

## Analyst

_Analyst_ users have all the abilities of the _Onboarding_ users (adding and linking companies) as well as the ability to view the financial data that is uploaded, view webhook consumers that have been configured, and resolve raised events in the portal.

## Developer

_Developer_ users have access to all the functionality available in Codat except the ability to create, edit and remove other users. This includes all of the _Analyst_ user's abilities as well as the being able to create, edit and delete integrations, companies, and rules.

_Developers_ are also able to configure your authorization flow, organization, and data type settings, and manage upcoming deprecations.

## Administrator

_Administrator_ users have full access to all the features available in the Codat portal. They are the only users who are able to add, edit and remove other users from your account. This includes all levels of users, so any _Administrator_ can remove other _Administrator_, _Developer_, _Analyst_ and _Onboarding_ users.

### User roles summary

| Action                                       	| Onboarding 	| Analyst 	| Developer 	| Administrator 	|
|-------------------------------------------	  |------------	|---------	|-----------	|---------------	|
| Manage (add and delete) Companies            	| ✔          	| ✔       	| ✔         	| ✔             	|
| Add connections, view their status and link URLs | ✔             | ✔         | ✔             | ✔                   |
| Manage (delete and unlink) connections        |           	|        	| ✔         	| ✔             	|
| View contributed company data (Portal)        |            	| ✔       	| ✔         	| ✔             	|
| View contributed company data (API)           | ✔          	| ✔       	| ✔         	| ✔             	|
| Upload files on behalf of a company          	| ✔          	| ✔        	| ✔         	| ✔             	|
| Manage and view webhooks                    	|            	|         	| ✔         	| ✔             	|
| Configure Link                              	|            	|         	| ✔         	| ✔             	|
| Manage integrations                         	|            	|         	| ✔         	| ✔             	|
| Manage data type settings                  	  |            	|         	| ✔         	| ✔             	|
| Manage upcoming deprecations                	|            	|         	| ✔         	| ✔             	|
| Manage other settings                         |            	|         	| ✔         	| ✔             	|
| Add and update users                        	|            	|         	|           	| ✔             	|

