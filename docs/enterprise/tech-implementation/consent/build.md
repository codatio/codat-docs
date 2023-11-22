---
title: "Build options"
description: "View the different ways to build a consent journey"
---

## Delivery breakdown

| Area | Description | Owner |
| :- | :- | :-|
| UI | Front-end Customer UI | Client |
| Onboarding Journey | Ability to connect Accounting, Banking and Commerce platforms |  Embedded Link = Codat SDK <br /> API = TClient (via Codat’s API)  |
| Manage Connections | Ability to add, disconnect, or manage connections | Client (via Codat’s API) |


## Onboarding

### Option 1 - Low-code

Embedded Link is a pre-built JavaScript component that neatly sits in your front-end code, and can be deployed in a matter of minutes. 
Use it to benefit from our extensive experience in building authorization flows melded with best practices, while seamlessly embedding it into your webpage or front-end application.

#### Relevant resources

* [Embedded Link docs](https://docs.codat.io/auth-flow/authorize-embedded-link)
* [Sample code](https://github.com/codatio/sdk-link/tree/main/examples)

#### Limitations
* **UI**: The UI is customizable with colors, but can’t be fully customized.

![](/img/auth-flow/embedded-link-selection.png)

### Option 2 - Build your own

Codat Action ‘Company’ & ‘Connection’ end-points to allow Financial Service Providers to build & own the UI, while interacting with Codat to set up connections to individual integration partners.

| No. | Action | Description |
| :- | :- | :-|
| **Onboarding:** |
| 1  | User clicks on “Connect” button | Customer clicks on button within UI, to connect |
| 2  | Create a “Company” | /POST to “Company” API to create ‘Company’ (Link) |
| 3  | “Company” API Response | “Company” API responds with unique ‘CompanyID’ - to be stored |
| 4  | Create a “Connection” | /POST to “Connection” to create ‘Connection’ (Link) |
| 5  | “Connection” API Response | API responds with ‘linkURL’ |
| 6  | User Authenticates | Redirect user to ‘linkURL’, where customer authenticates |
| 7  | User Redirects back to UI |Customer auth journey is finished, and is redirected |
| **Ongoing Management:** |
| 8  | Customer wants to connect additional package at a later date | Customer clicks on button within UI, to connect - select additional package. /POST Connection with Company ID to create connection & provide redirect.  (Link) |
| 9  | Customer wants to disconnect an existing package | Customer clicks on “Disconnect” button within UI. /DELETE Connection (Link) |



[View our full auth Postman Collection](https://postman.codat.io/#bf371ef9-5d2c-4755-8f45-01c9a6fc467f)