---
title: "Customer consent journey"
sidebar_label: "Consent journey"
description: "Explore best practice and solutions to providing a consent journey for your customers"
---

:::tip Link solution documentation

For further implementation details, refer to our full documentation for [Link](/auth-flow/overview), our consent journey solution.

:::

Authorization is a key part of any Codat solution - every company must authorize your organization's access to their data before you can read or write that data. A frictionless and reassuring auth flow is essential for accessing your SMB customers' data.

To address this, Codat provides you with Link, our consent and authorization journey solution. You can see the key steps of this journey on the diagram below. Its primary purpose is to streamline customer consent processes specifically related to sharing various data types, including accounting, banking, and commerce data. You will aim to create a modular framework that can be applied across different banking functions and user experiences, such as onboarding and loan applications.

![](/img/enterprise/implementation/consent/authjourney.png)

:::info Sample consent journey

We prepared a consent journey prototype using an example business insights dashboard use case.

[View the protype in full screen →](https://www.figma.com/proto/YWkKvsYgeHJskPsfuIpy7w/Codat---Generic-bank---Consent-Journey?page-id=601%3A4488&type=design&node-id=641-11421&viewport=1275%2C-2886%2C0.1&t=rrDznIIhmQ8EayyY-1&scaling=contain&starting-point-node-id=641%3A11421&mode=design)

:::

### Implementation options

Codat offers two options to implement the Link solution in your application:

1. **Use pre-built SDK**

Codat has made it easy to deploy our Link solution within your front-end user interface (UI) with our software development kit (SDK). The SDK is Codat's recommended option to implement a consent journey.

Our SDK is a pre-built JavaScript component that neatly sits in your front-end code that you can integrate and initialize it in any way you want, providing your customers with a native feel of your authorization journey. The component works with all major JavaScript frameworks, including React, and also with vanilla JavaScript. You can choose to implement the component in TypeScript.

[**Start your Link build with the SDK →**](/auth-flow/authorize-embedded-link)

2. **Build with API**

Codat's Link solution covers a series of API endpoints that you can use to fully embed the authentication journey within your digital application. These API endpoints can be called to create a customer within Codat’s instance and set up the connection to the applicable integrations. With this option, your organization is fully responsible for building and owning the authorization user interface.

[Review build-your-own requirements →](/auth-flow//auth-flow/build/build-your-own-authorization-journey)

<details>
<summary>Build-your-own steps and endpoints</summary>

Review the key steps and endpoints involved in a build-your-own consent journey. These steps and corresponding endpoints are already considered and covered in our easy-to-use SDK.

| No.                     | Action                                                          | Description                                                                                                                                                                                              |
| :---------------------- | :-------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Onboarding:**         |
| 1                       | Customer clicks on “Connect” button                             | Customer clicks on button within UI to initiate connection                                                                                                                                               |
| 2                       | Application triggers company creation                           | Application places a call to Link's `POST Create company` endpoint to create a Codat company                                                                                                             |
| 3                       | API responds with Company details                               | Link's API endpoint responds with unique `CompanyId` to be stored and used by the application                                                                                                            |
| 4                       | Application triggers connection creation                        | Application places a call to Link's `POST Create connection` endpoint to create a connection                                                                                                             |
| 5                       | API responds with Connection details                            | Link's API endpoint responds with `linkURL` to be shared with customer by the application                                                                                                                |
| 6                       | Customer authorizes access                                      | Application directs user to the ‘linkURL’ where customer authenticates and authorizes access to data                                                                                                     |
| 7                       | Customer is redirected to application                           | Customer's consent journey finishes on a confirmation screen of the application                                                                                                                          |
| **Ongoing management:** |
| 8                       | Customer wants to connect an additional package at a later date | Customer clicks on button within appication to connect an additional package. Application places a call to Link's `POST Create connection` with a `companyId` to create connection and provide `linkURL` |
| 9                       | Customer wants to disconnect an existing package                | Customer clicks on a “Disconnect” button within appication. Application places a call to Link's `DELETE Delete connection`                                                                               |

</details>

#### Ownership of delivery

| Area                  | Description                                                  | Owner                                                           |
| :-------------------- | :----------------------------------------------------------- | :-------------------------------------------------------------- |
| UI                    | Front-end customer interaction UI                            | Client                                                          |
| Onboarding journey    | Ability to connect accounting, banking and commerce software | Using Link via SDK → Codat <br/> Using Link via API → Client    |
| Connection management | Ability to add, disconnect, and manage connections           | Using Connections SDK → Codat <br/> Using Link via API → Client |

### Data access considerations

#### Security & data privacy and GDPR

In our agreement with you, Codat acts as the Processor of your customers' data while you remain its controller. This relationship allows you to maintain full control over your customers' data, including deciding when to delete that data. You should provide the customer with an overview of your Security and Data Privacy policies within your strategic consent journey.

Our customer our [Help Hub](https://help.codat.io/resources/about#how-we-access-your-data) provides customer-centric responses to security and data privacy concerns.

#### Ongoing connection management

Your customer should have the ability to add, change, or delete existing connections via a UI. Some software providers, such as Xero, even list this as a mandatory requirement. You can use Codat's [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management), part of our Link solution, in your UI to add additional integrations or delete existing integrations.

When deleting a connection, it is critical that customers are aware of potential impact of rescinding that access. For example, if they are using multiple products you provide, all will be impacted.

### Customer lifecycle

Link, Codat’s authentication solution, is used at multiple stages of the customer lifecycle. We have covered some of the usage scenarios below.

1. Onboarding a customer for the first time

   If a customer hasn't granted access to integrations before, they will authenticate either through a specific product user journey or as part of a general new customer onboarding process.

2. Onboarding an existing customer onto a new product (multi-use case)

   Codat recommends that each customer grants access to all data during their first integration setup, but only relevant data will be read into Codat's cache based on the use case. This means Codat will initially only read relevant data for that first use case, but can later read data for other use cases without requiring the customer to re-authenticate.

   For example, a user might connect their Xero software via a Dashboard customer journey. They grant access to all data within their Xero account, but you initially only read data types that are relevant to the Dashboard product, because that is all the user has consented to.

3. An existing customer wants to add integration packages for an existing product

   Customers can use the the consent journey UI to make changes or add additional integration packages for a specific product, such as by clicking a “Click here to connect more packages" button.

4. A previously connected customer wants to grant data access for a specific product

   A customer has already connected their Xero account to a dashboard product and now wants to provide data for a lending use case. As they have previously granted access to all their Xero data, technically you already have access to read additional data types that you haven’t before.

   The customer will be presented with a screen that requires them to confirm they are happy to share additional datasets. This screen should contain a simple “Confirm I’m happy to share additional data” message and doesn't require the customer to re-auth or re-login to any accounting software. This consent should be stored and always adhered to with the ability to be revoked at any time.

5. An existing customer wants to remove consent for a specific use case

   Customers should have the option to revoke access to integrations through your product's user interface. It's important to inform customers about potential impacts when removing access, i.e. how it can impact other products.

   Consider also the data retention processes when a customer disconnects. If the customer has granted access for their data to be used in multiple products, keep in mind that access might still be needed for another product. Codat provides the capability to delete historical data via a specific endpoint.

6. An existing customer's Open Banking connection has expired

   When an Open Banking connection expires, it's important to communicate this to the customer. Provide them with an option to re-consent via the user journey within a specific product. Utilizing Codat API's connection endpoints, you can re-initiate the login journey for the customer to re-consent.

### Common questions

- **What is the Link process?**

  The Link process, supported by our Link solution, is the authorization mechanism that allows your existing and prospective customers to securely share their financial data with you. This provides benefits for both the linking customer and you as the financial services provider.

- **What is the first step in building a bespoke authentication flow using Codat?**

  Your application should create a Codat company to represent your customer when they sign up for your app. This allows you to track their connection status from the beginning using `POST Create company`.

- **How should users enter their third party credentials to authorize a connection?**

  Your application should redirect the customer to the `linkUrl` found in the API response after creating a data connection for the selected integration. This is where they will enter their credentials.

- **How does Codat secure the connection with the underlying packages?**

  Codat uses OAuth 2.0 to facilitate the consent and authentication process between Codat and each software integratoion. Our documentation contains details of our approach to [Data security](/enterprise/tech-overview/security/data-security), and our [Help Hub](https://help.codat.io/resources/about#how-we-access-your-data) contains customer-centric responses to security concerns.

- **How does the user log in?**

  Each accounting software has a slightly different login and consent experience. In general, cloud-based packages require a username and password login once they user has been redirected. We provide detailed connection instructions for every integration we support on our [Help Hub](https://help.codat.io).

- **What happens when a customer connects?**

  When a customer connects, Codat will start extracting and caching relevant data types. This process will likely take a few minutes but will depend on the amount of historical data being extracted.

- **How does Codat highlight a completed sync?**

  Codat generates a [webhook event](/using-the-api/webhooks/event-types) once a data sync has been completed. A webhook consumer can be set up to listen for read completion of specific data types or once all data types have synced.

- **How can users manage their ongoing connections and revoke access to platforms?**

  As part of implementing our Link solution, we recommend using the [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management) in your UI. The SDK fits perfectly with your Link deployment via our SDK and neatly links to Codat's underlying endpoints that support connection management functionality. If you choose the build-your-own approach, ensure you build a connection management UI that uses Codat's connection management endpoints.

- **Our customers are likely to have questions about sharing their data. How can we address them?**

  We address questions most commonly asked by our clients' customers on our [Help Hub](https://help.codat.io/resources/about#how-we-access-your-data). You can share the customer-centric responses provided there directly with your clients or use them as a foundation to prepare your own.

  Some of the questions we hear most often include:
  - Will you have access to all my data?
  - Will my data be shared securely?
  - What if my accounting software isn’t listed?
  - Will you share my data with any third parties?
  - How do I revoke access to my data?
