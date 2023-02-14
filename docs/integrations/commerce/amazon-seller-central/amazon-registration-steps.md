---
title: "Amazon Web Services, IAM & Developer Registration"
description: "Set up your AWS and Amazon Seller Central credentials"
createdAt: "2021-09-08T11:11:09.951Z"
updatedAt: "2022-10-20T09:40:42.443Z"
---

Before setting up your Amazon Seller Central integration, you will need to:

- Register or have an existing Amazon Web Services (AWS) account
- Create an Identity and Access Management (IAM) User and generate an AWS Secret Access Key
- Create an IAM Policy
- Create an IAM role that trusts your IAM User
- Add an AWS Security Token Service Policy to your IAM User.
  :::caution Registration Requirements
  Amazon has manual verification steps as part of their developer registration process. Please note that it can take some time for your application to be reviewed before you can start using Codat's Amazon Seller Central integration.

:::info Charges & Fees
Amazon charges a monthly fee dependant on location to register with Seller Central. Please consult your local Amazon Seller Central website for more details.

An AWS account is also required, although Amazon does not currently charge for the use of the IAM services. Other usage of your AWS account may incur separate charges.
:::

## Register as an Amazon Seller Central App Developer

1. Sign into Amazon Seller Central using the credentials that you want to associate with your developer account.
2. In the Apps & Services menu, click Develop Apps. The Developer Central page appears.
3. You will need to complete the Developer Registration Form.

**Data Access Section**
Please select My organization builds and offers publicly available applications.

**Use Cases Section**
You will only need to select the "Selling Partners" APIs. You will need to be clear about the data that you are interested in, and be able to justify how you will help the merchant’s business grow on Amazon.

**Security Controls Section**
You will need to outline the controls you have in place to ensure the security of any synced data. Amazon require you to demonstrate that you will be compliant with their privacy and data sharing policies; and you will need to provide your company's incident response policy.

:::caution Personally Identifiable Information (PII)
Amazon is highly sensitive about PII data from their merchant’s customers.

Due to the stringent restrictions, Codat does not pull any PII data from Amazon to populate our Customers datatype.

:::info Reviewing your application status
After the submission of request to register as a developer, Amazon will evaluate and review the application. You should receive a notification when your request has been reviewed. You should also see a "Your developer registration is under review banner" on the ASC page that will reflect the status of your application.
:::

## Registering for an AWS Account

If you do not already have an AWS account, you can register for a free tier account [here](https://aws.amazon.com/free/).

## Create your IAM User, Access Policy & Role

Please follow steps 2 through 5 on Amazon's instructional guide [here](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/developer-guide/SellingPartnerApiDeveloperGuide.md#step-2-create-an-iam-user) to create the required user, policy and role.

:::danger Important - Step 2.8

This is your only opportunity to view or download your user's AWS secret access key, which you will need to authenticate your calls to the Selling Partner API. Save the AWS access key ID and AWS secret access key in a safe and secure place.

**You will not have access to the AWS access key again after this step.**

If you lose your AWS secret access key you will need to create a new IAM user with its own new set of keys.
:::

## Create your Amazon Seller Central App

1. On the [Amazon Seller Central Developer Page](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole), choose "Add new app client"
2. Choose a name for your app, and select "SP API" from the "API Type" Dropdown
3. Enter the IAM ARN for the IAM Role you created above.
4. Select "Sellers" for "Business Entities Supported"
5. Select all the available roles
6. Under "OAuth Login URI" enter `https://codat.io`
7. Under "OAuth Redirect URI" enter `https://amazonsellercentral.codat.io/oauth/callback`
8. Click Save and Exit

Before you can link an Amazon company in your Codat environment, you must submit your Amazon Seller Central app for listing in the Marketplace. Apps must be reviewed and approved by Amazon, which may take up to two weeks. For more details, see the next task.

## Using Amazon Seller Central Apps to access Live Data

To use Amazon Seller Central app credentials in a production environment (connecting to live data) you first need to list the app on the Amazon Seller Central Partner Network (Amazon SCPN). For detailed information about the form and app listing process, refer to the <a href="https://docs.developer.amazonservices.com/en_UK/dev_guide/DG_AppListingGuide.html" target="_blank">official guide</a>. Alternatively, follow these steps to submit your app for listing:

1. On the Amazon Seller Central navigation bar, hover on **Partner Network**.

2. From the dropdown, click **Develop Apps**.

3. From the list of client apps on Developer Central, select the app that you want to list by clicking **Authorise** on the **Action** column drop down.

4. Navigate back to the Developer Central portal and click **View App listings**.

5. You are re-directed to another page; click **Add App Listing**.

6. On the **List your App** form, complete the required sections:

   - **App information**
   - **Pricing**
   - **Details**

7. When you've completed the above sections, click **Save and submit** to submit the form.

8. Amazon will communicate the outcome of your form submission in due course.
   After approval, apps take approximately **2 weeks** to be published and made available for use in production environments.

:::caution App image dimensions

Some sections of the form require you to upload images of your application in specific dimensions. These requirements must be complied with.
:::
