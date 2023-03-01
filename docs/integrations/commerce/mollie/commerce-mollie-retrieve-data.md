---
title: "Retrieve commerce data from Mollie"
hidden: true
createdAt: "2022-02-15T14:12:15.093Z"
updatedAt: "2022-05-20T09:13:26.861Z"
---

Now that the Mollie integration is set up and tested, you can pull live consented commerce data, including orders and payments, from your customers into Codat.

### Prerequisites:

- [Set up your Mollie integration](/integrations/commerce/mollie/commerce-mollie-setup)
- [Test your Mollie integration](/integrations/commerce/mollie/commerce-mollie-test)

## Add a company and connect it to your Mollie app

You can use the same Mollie app for production as for testing, but linked to a live company.

Perform these steps in the <a href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. In the navigation bar, click **Companies**.

2. Click **New company**.

3. In the **Add new company** dialog, enter a name for the company then click **Add**.
   The Link URL for the company is displayed.

## Customer authorization using Link

Before you can retrieve commerce data from Mollie, your customer needs to authorize your access and connect their commerce data to the Mollie integration.

1. Send the Link URL, which you obtained in [Set up your Mollie integration](/integrations/commerce/mollie/commerce-mollie-setup), to your customer. Alternatively, you can embed the authorization journey into your site or application using the Link API.

2. In the Link UI or through the embedded authorization flow, the customer authorizes access to a requested subset of their Mollie data. The exact steps depend on your Link configuration, but in general your customer must:

   1. Select **Mollie** as the commerce data source to connect to.
   2. Sign in to their Mollie account if prompted.
   3. Authorize your Mollie app to access the requested Mollie objects.
   4. Click **Finish**.

## Retrieve commerce data from Mollie

Now that your customer has authorized access, you can pull their consented commerce data from Mollie into Codat.

Perform these steps in the <a href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. In the navigation bar, click **Companies**.

2. Click the name of your company to view the company’s data.

3. Click the **Commerce** tab.

4. Click **View datasets**.

5. On the **Data History** page, click **Queue sync**, and wait until the sync completes successfully.

6. Return to the company then click **Commerce**.

7. Use the data type tabs to view the commerce data that was pulled from Mollie; for example, click **Transactions**.
