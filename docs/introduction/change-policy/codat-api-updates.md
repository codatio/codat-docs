---
title: "API updates"
createdAt: "2021-04-15T09:26:34.992Z"
updatedAt: "2022-11-07T20:40:39.598Z"
type: "link"
link_url: "https://docs.codat.io/changelog"
---

:::info More updates

More of our latest and upcoming product features can be viewed on [Product Roadmap](https://portal.productboard.com/codat/1-product-portal/tabs/4-in-progress).

You can keep track of our new and updated documentation articles on [Documentation updates](https://docs.codat.io/changelog).
:::

## Check out our latest developments, features, and updates we have built for you.

In line with our [deprecation policy](https://docs.codat.io/docs/what-is-codats-deprecation-policy) all changes are announced **12 weeks** before implementation. Any changes in the functionality are available from the day of the announcement so that code updates can take place during the notice period, to prevent any breaking changes, and to allow a smooth changeover.

If you have any questions about how these changes affect you and the data you manage, please contact our [Support Team](mailto:support@codat.io).

## In the works

[block:parameters]
{
"data": {
"h-0": "Announced",
"h-1": "Change",
"h-2": "Planned delivery",
"0-0": "June 9, 2021",
"0-1": "`Updated`
Changes to [platform keys](https://docs.codat.io/docs/platform-keys)",
"0-2": "November 10, 2021 (extended from September 01, 2021)",
"1-0": "July 14, 2021",
"1-1": "`Deprecated`
Requiring the status field when creating [Customer](https://docs.codat.io/docs/datamodel-accounting-customers) or [Supplier](https://docs.codat.io/docs/datamodel-accounting-suppliers) in QuickBooks Online",
"1-2": "October 06, 2021",
"2-0": "July 14, 2021",
"2-1": "`Updated`
Newly paginated endpoints: [GET /rules](https://api.codat.io/swagger/index.html#/Rules/get_rules) and [GET /alerts](https://api.codat.io/swagger/index.html#/Rules/get_rules_alerts)",
"2-2": "October 06, 2021",
"3-0": "July 14, 2021",
"3-1": "`Updated`
Requiring account id when retrieving [Bank Statements](https://api.codat.io/swagger/index.html#/BankStatements/get_companies__companyId__data_bankStatements)",
"3-2": "October 06, 2021",
"4-0": "July 14, 2021",
"4-1": "`Deprecated`
Deprecation of [alerts resolved endpoint](https://api.codat.io/swagger/index.html#/Rules/post_rules_alerts__alertId__resolve)",
"4-2": "October 06, 2021",
"5-0": "August 11, 2021",
"5-1": "`Deprecated`
Deprecation of bill.PurchaseOrderRef and purchaseOrder.billRef objects from the accounting data model. Learn more about [Bills data model](https://docs.codat.io/docs/datamodel-accounting-bills).",
"5-2": "November 10, 2021",
"6-0": "August 11, 2021",
"6-1": "`Deprecated`
Deprecation of [/profile](https://api.codat.io/swagger/index.html#/Profile/get_profile) and [/profile/apiKey](https://api.codat.io/swagger/index.html#/Profile/put_profile_apiKey) endpoints",
"6-2": "November 10, 2021",
"7-0": "September 08, 2021",
"7-1": "`Updated`
Removal of the 'Show Company Name Confirmation Page' toggle from Xero integrations management page, meaning it will be shown to all companies linking to Xero",
"7-2": "December 01, 2021"
},
"cols": 3,
"rows": 8
}
[/block]

## Delivered

**September 2021**

- `Updated`: Enforcing the configuration of an [allowed redirect URLs list](https://docs.codat.io/docs/link-redirect-allowedhosts) on dynamic redirects
- `Updated`: Adding pagination to GET [/connections](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections) endpoint

**August 2021**

- `Improved`: Moving one-time sync configuration settings for offline platforms
  (Sage 50 and QuickBooks Desktop) from the [/integrations/credentials ](https://api.codat.io/swagger/index.html#/Integrations/get_integrations_credentials__platformKey_)
  endpoint to the [/settings/integrations](https://api.codat.io/swagger/index.html#/Settings/get_settings_integrations__integrationId_) endpoint
- `Deprecated`: Migrated all users to Codat's new Link product, which replaced the [old authorisation flow](https://docs.codat.io/docs/new-link)

**July 2021**

- `Improved`: Standardising the [error codes](https://docs.codat.io/docs/status-codes) on our data endpoints

**June 2021**

- `Updated`: Page number will be required for [Paged endpoints](https://docs.codat.io/docs/pagination#request)
- `Deprecated`: Removing the `type` field in our [TrackingCategories model](https://docs.codat.io/docs/datamodel-accounting-trackingcategories)
- `Deprecated`: Removing [Company status](https://docs.codat.io/docs/company-statuses) field

**May 2021**

- `Deprecated`: Removing non-reference data from [webhook alerts body](https://docs.codat.io/docs/core-rules-types)

**April 2021**

- `New`: Ability to [unlink and delete data](https://docs.codat.io/docs/core-dataconnections) connections
- `Updated`: Platform/integration name changes:
  - Sage One -> Sage Business Cloud Accounting
  - QuickBooks -> QuickBooks Desktop
  - iZettle Go -> Zettle
  - iZettle Pro -> Zettle Food and Drink
  - MYOB AccountRight Live -> MYOB AccountRight and Essentials
- `Improved`: Returning the correct time zone information in dateTime fields. See [Shared fields](https://docs.codat.io/docs/datamodel-shared-date) for details.
- `Improved`: Querying [company connection statuses](https://docs.codat.io/docs/querying-1#section-for-companies-whose-status-is-pending-with-data-connection-established)
