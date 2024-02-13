const mapIntegrationRedirect = (item, category) => {
  return {
    to: item.to,
    from: `/redirects/integrations/${category}/${item.platformKey}`
  }
}

const mapIntegrationRedirects = (items, category) => {
  return items.map(item => mapIntegrationRedirect(item, category))
}

const prodRework = [
  {
  from: "/accounting-api/overview",
  to: "/using-the-api/overview"
},
{
  from: "/bank-feeds-api/overview",
  to: "/bank-feeds/overview"
},
{
  from: "/bank-feeds-api/qbo-bank-feeds",
  to: "/integrations/bank-feeds/qbo-bank-feeds"
},
{
  from: "/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions",
  to: "/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions"
},
{
  from: "/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup",
  to: "/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-setup"
},
{
  from: "/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-smb-user",
  to: "/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-smb-user"
},
{
  from: "/bank-feeds-api/sage-bank-feeds",
  to: "/integrations/bank-feeds/sage-bank-feeds"
},
{
  from: "/bank-feeds-api/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app",
  to: "/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app"
},
{
  from: "/bank-feeds-api/sage-bank-feeds/sage-bank-feeds-setup",
  to: "/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup"
},
{
  from: "/bank-feeds-api/sage-bank-feeds/sage-bank-feeds-use",
  to: "/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-use"
},
{
  from: "/bank-feeds-api/xero-bank-feeds",
  to: "/integrations/bank-feeds/xero-bank-feeds"
},
{
  from: "/bank-feeds-api/xero-bank-feeds/xero-bank-feeds-partner",
  to: "/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-partner"
},
{
  from: "/bank-feeds-api/xero-bank-feeds/xero-bank-feeds-push-bank-transactions",
  to: "/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-push-bank-transactions"
},
{
  from: "/bank-feeds-api/xero-bank-feeds/xero-bank-feeds-setup",
  to: "/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-setup"
},
{
  from: "/bank-feeds-api/xero-bank-feeds/xero-bank-feeds-smb-user",
  to: "/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-smb-user"
},
{
  from: "/banking-api/overview",
  to: "/using-the-api/overview"
},
{
  from: "/commerce-api/overview",
  to: "/using-the-api/overview"
},
{
  from: "/data-model/accounting",
  to: "/lending/data-types"
},
{
  from: "/data-model/banking",
  to: "/lending/data-types"
},
{
  from: "/data-model/commerce",
  to: "/lending/data-types"
},
{
  from: "/guides/bank-feeds-tutorial",
  to: "/bank-feeds/guides/bank-feeds-tutorial"
},
{
  from: "/guides/bill-pay/how-the-demo-app-works",
  to: "/payables/guides/bill-pay/how-the-demo-app-works"
},
{
  from: "/guides/bill-pay/introduction",
  to: "/payables/guides/bill-pay/introduction"
},
{
  from: "/guides/bill-pay/run-demo-app-locally",
  to: "/payables/guides/bill-pay/run-demo-app-locally"
},
{
  from: "/guides/bill-pay/use-bill-pay-demo-app",
  to: "/payables/guides/bill-pay/use-bill-pay-demo-app"
},
{
  from: "/guides/invoice-finance/introduction",
  to: "/lending/guides/invoice-finance/introduction"
},
{
  from: "/guides/invoice-finance/inv-fin-decision",
  to: "/lending/guides/invoice-finance/inv-fin-decision"
},
{
  from: "/guides/invoice-finance/process-invoice",
  to: "/lending/guides/invoice-finance/process-invoice"
},
{
  from: "/guides/invoice-finance/setting-up",
  to: "/lending/guides/invoice-finance/setting-up"
},
{
  from: "/guides/loan-qualification/introduction",
  to: "/lending/overview"
},
{
  from: "/guides/loan-qualification/process-loan",
  to: "/lending/overview"
},
{
  from: "/guides/loan-qualification/setting-up",
  to: "/lending/overview"
},
{
  from: "/guides/loan-qualification/uw-decision",
  to: "/lending/overview"
},
{
  from: "/integrations/bankfeeds/overview",
  to: "/integrations/bank-feeds/overview"
},
{
  from: "/sfc/build-with-sync-for-commerce/sync-for-commerce-prerequisites",
  to: "/commerce/overview"
},
{
  from: "/sfc/coming-soon",
  to: "/commerce/overview"
},
{
  from: "/sfc/error-documentation",
  to: "/commerce/error-documentation"
},
{
  from: "/sfc/mapping-specifications/overview",
  to: "/commerce/overview"
},
{
  from: "/sfc/mapping-specifications/qbo-mapping-specification",
  to: "/commerce/merchant-configuration"
},
{
  from: "/sfc/mapping-specifications/xero-mapping-specification",
  to: "/commerce/merchant-configuration"
},
{
  from: "/sync-for-expenses/configandcategorize",
  to: "/expenses/config-and-categorize"
},
{
  from: "/sync-for-expenses/gettingstarted",
  to: "/expenses/getting-started"
},
{
  from: "/sync-for-expenses/overview",
  to: "/expenses/overview"
},
{
  from: "/sync-for-expenses/sync-for-expenses-faq",
  to: "/expenses/faq"
},
{
  from: "/sync-for-expenses/sync-process/expense-transactions",
  to: "/expenses/sync-process/expense-transactions"
},
{
  from: "/sync-for-expenses/sync-process/sync-process-explained",
  to: "/expenses/getting-started"
},
{
  from: "/sync-for-expenses/sync-process/syncing-expenses",
  to: "/expenses/sync-process/syncing-expenses"
},
{
  from: "/sync-for-expenses/sync-process/updating-expenses",
  to: "/expenses/sync-process/expense-transactions"
},
{
  from: "/sync-for-expenses/sync-process/uploading-receipts",
  to: "/expenses/sync-process/uploading-receipts"
}
]

const acc = [
  {
    integration: "Clear Books",
    platformKey: "jhch",
    to: "/integrations/accounting/clearbooks/accounting-clearbooks",
  },
  {
    integration: "Dynamics 365 Business Central",
    platformKey: "trji",
    to: "/integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral",
  },
  {
    integration: "Exact (Netherlands)",
    platformKey: "qudb",
    to: "/integrations/accounting/exact-online/accounting-exact-online",
  },
  {
    integration: "Exact (UK)",
    platformKey: "pbbf",
    to: "/integrations/accounting/exact-online/accounting-exact-online",
  },
  {
    integration: "FreeAgent",
    platformKey: "fbrh",
    to: "/integrations/accounting/freeagent/accounting-freeagent",
  },
  {
    integration: "FreshBooks",
    platformKey: "vxvy",
    to: "/integrations/accounting/freshbooks/accounting-freshbooks",
  },
  {
    integration: "KashFlow",
    platformKey: "wvzu",
    to: "/integrations/accounting/kashflow/accounting-kashflow",
  },
  {
    integration: "MYOB AccountRight Live",
    platformKey: "pdvj",
    to: "/integrations/accounting/myob/accounting-myob",
  },
  {
    integration: "Oracle NetSuite",
    platformKey: "akxx",
    to: "/integrations/accounting/netsuite/accounting-netsuite",
  },
  {
    integration: "Pandle",
    platformKey: "vjms",
    to: "/integrations/accounting/pandle/accounting-pandle",
  },
  {
    integration: "QuickBooks",
    platformKey: "pqsw",
    to: "/integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop",
  },
  {
    integration: "QuickBooks Online",
    platformKey: "qhyg",
    to: "/integrations/accounting/quickbooksonline/accounting-quickbooksonline",
  },
  {
    integration: "QuickBooks Online Sandbox",
    platformKey: "ndsk",
    to: "/integrations/accounting/quickbooksonline/accounting-quickbooksonline",
  },
  {
    integration: "Sage 200cloud",
    platformKey: "jcrp",
    to: "/integrations/accounting/sage200/accounting-sage200",
  },
  {
    integration: "Sage 50",
    platformKey: "hbql",
    to: "/integrations/accounting/sage50/accounting-sage50",
  },
  {
    integration: "Sage Intacct",
    platformKey: "knfz",
    to: "/integrations/accounting/sage-intacct/accounting-sage-intacct",
  },
  {
    integration: "Sage One",
    platformKey: "tgff",
    to: "/integrations/accounting/sagebusinesscloud/accounting-sagebusinesscloud",
  },
  {
    integration: "Sandbox",
    platformKey: "mqjo",
    to: "/integrations/accounting/sandbox/accounting-sandbox",
  },
  {
    integration: "Wave",
    platformKey: "pbtz",
    to: "/integrations/accounting/wave/accounting-wave",
  },
  {
    integration: "Xero",
    platformKey: "gbol",
    to: "/integrations/accounting/xero/accounting-xero",
  },
  {
    integration: "Zoho Books",
    platformKey: "rwuv",
    to: "/integrations/accounting/zoho-books/accounting-zoho-books",
  },
]

const bank = [
  {
    integration: "Banking Sandbox",
    platformKey: "qhnd",
    to: "/integrations/banking/overview",
  },
  {
    integration: "Basiq",
    platformKey: "dfxm",
    to: "/integrations/banking/basiq/banking-basiq",
  },
  {
    integration: "Plaid",
    platformKey: "suuo",
    to: "/integrations/banking/plaid/banking-plaid",
  },
  {
    integration: "TrueLayer",
    platformKey: "upvr",
    to: "/integrations/banking/truelayer/banking-truelayer",
  },
]

const comm = [
  {
    integration: "Amazon Seller Central",
    platformKey: "qkdj",
    to: "/integrations/commerce/amazon-seller-central/commerce-amazon-seller-central",
  },
  {
    integration: "BigCommerce",
    platformKey: "vqzp",
    to: "/integrations/commerce/bigcommerce/commerce-bigcommerce",
  },
  {
    integration: "Chargebee",
    platformKey: "xwsy",
    to: "/integrations/commerce/chargebee/commerce-chargebee",
  },
  {
    integration: "Clover",
    platformKey: "fqly",
    to: "/integrations/commerce/clover/commerce-clover",
  },
  {
    integration: "Commerce Sandbox",
    platformKey: "aiwb",
    to: "/integrations/commerce/lightspeed-k/commerce-lightspeed-k",
  },
  {
    integration: "Lightspeed K",
    platformKey: "ldgh",
    to: "/integrations/commerce/lightspeed-k/commerce-lightspeed-k",
  },
  {
    integration: "Lightspeed K Trial",
    platformKey: "ltes",
    to: "/integrations/commerce/lightspeed-k/commerce-lightspeed-k",
  },
  {
    integration: "Maxio",
    platformKey: "rkgp",
    to: "/integrations/commerce/chargify/commerce-chargify",
  },
  {
    integration: "Mollie",
    platformKey: "dxfw",
    to: "/integrations/commerce/mollie/commerce-mollie",
  },
  {
    integration: "Mollie Test",
    platformKey: "dlqr",
    to: "/integrations/commerce/mollie/commerce-mollie",
  },
  {
    integration: "PayPal",
    platformKey: "gvom",
    to: "/integrations/commerce/paypal/commerce-paypal",
  },
  {
    integration: "PrestaShop",
    platformKey: "zgbz",
    to: "/integrations/commerce/prestashop/commerce-prestashop",
  },
  {
    integration: "Recurly",
    platformKey: "lhcb",
    to: "/integrations/commerce/recurly/commerce-recurly",
  },
  {
    integration: "Shopify",
    platformKey: "fztf",
    to: "/integrations/commerce/shopify/commerce-shopify",
  },
  {
    integration: "Square",
    platformKey: "zsth",
    to: "/integrations/commerce/square/commerce-square",
  },
  {
    integration: "Square Sandbox",
    platformKey: "xcwv",
    to: "/integrations/commerce/square/commerce-square",
  },
  {
    integration: "Stripe",
    platformKey: "exgd",
    to: "/integrations/commerce/stripe/commerce-stripe",
  },
  {
    integration: "Stripe Test",
    platformKey: "yzth",
    to: "/integrations/commerce/stripe/commerce-stripe",
  },
  {
    integration: "SumUp",
    platformKey: "pshf",
    to: "/integrations/commerce/sumup/commerce-sumup",
  },
  {
    integration: "WooCommerce",
    platformKey: "ltpp",
    to: "/integrations/commerce/woocommerce/commerce-woocommerce",
  },
  {
    integration: "iZettle Go",
    platformKey: "ugxp",
    to: "/integrations/commerce/zettle/commerce-zettle",
  },
]

module.exports = {
  redirects: [
    // get started
    {
      from: "/introduction/first-steps",
      to: "/get-started/first-steps",
    },
    {
      from: "/introduction/first-ten-minutes",
      to: "/get-started/first-ten-minutes",
    },
    {
      from: "/introduction/libraries",
      to: "/get-started/libraries",
    },
    {
      from: "/other/developer-resources",
      to: "/get-started/developer-resources",
    },
    {
      from: "/introduction/office-hours",
      to: "/get-started/office-hours",
    },
    {
      from: "/introduction/migration",
      to: "/get-started/migration",
    },
    // config, other, etc.
    {
      from: "/introduction/change-policy",
      to: "/using-the-api/change-policy",
    },
    {
      from: "/reference/authentication",
      to: "/using-the-api/overview",
    },
    {
      from: "/introduction/create-account",
      to: "/configure/create-account",
    },
    {
      from: "/introduction/testing",
      to: "/using-the-api/testing",
    },
    {
      from: "/introduction/webhooks/core-rules-create",
      to: "/using-the-api/webhooks/create-event",
    },
    {
      from: "/introduction/webhooks/core-rules-types",
      to: "/using-the-api/webhooks/event-types",
    },
    {
      from: "/introduction/webhooks/core-rules-webhooks",
      to: "/using-the-api/webhooks/legacy/core-rules-webhooks",
    },
    {
      from: "/introduction/webhooks/core-rules-webhooksecurity",
      to: "/using-the-api/webhooks/legacy/core-rules-webhooksecurity",
    },
    {
      from: "/introduction/webhooks/receive-webhooks-as-email",
      to: "/using-the-api/webhooks/legacy/receive-webhooks-as-email",
    },
    {
      from: "/other/cochat",
      to: "/cochat",
    },
    {
      from: "/other/file-upload",
      to: "/integrations/file-upload",
    },
    {
      from: "/other/portal/account-management",
      to: "/configure/portal/account-management",
    },
    {
      from: "/other/portal/companies",
      to: "/configure/portal/companies",
    },
    {
      from: "/other/portal/dashboard",
      to: "/configure/portal/dashboard",
    },
    {
      from: "/other/portal/developers",
      to: "/configure/portal/developers",
    },
    {
      from: "/other/portal/pull-and-push-history",
      to: "/configure/portal/pull-and-push-history",
    },
    {
      from: "/other/portal/usage-and-billing",
      to: "/configure/create-account",
    },
    {
      from: "/other/user-management/adding-users",
      to: "/configure/user-management/adding-users",
    },
    {
      from: "/other/user-management/sso",
      to: "/configure/user-management/sso",
    },
    {
      from: "/other/user-management/user-roles",
      to: "/configure/user-management/user-roles",
    },
    {
      from: "/configure/plans/free",
      to: "/configure/create-account",
    },
    {
      from: "/configure/portal/usage-and-billing",
      to: "/configure/create-account",
    },

    //
    {
      from: "/guides/underwriting/introduction",
      to: "/lending/overview",
    },
    {
      from: "/usecases/summary/underwriting",
      to: "/usecases/summary/lending",
    },
    {
      from: "/redirects/integrations/bankfeeds/qalf",
      to: "/integrations/accounting/xero/accounting-xero-setup", //xero
    },
    {
      from: "/redirects/integrations/bankfeeds/olpr",
      to: "/integrations/bank-feeds/sage-bank-feeds", //sage
    },
    {
      from: "/docs/status-codes",
      to: "/using-the-api/errors", //sage
    },
    {
      from: "/integrations/accounting/myob/faq-myob-accountright-live",
      to: "/integrations/accounting/myob/myob-integration-reference", 
    },
    {
      from: "/accounting-api/guides/bill-pay/introduction",
      to: "/payables/guides/bill-pay/introduction",
    },
    {
      from: "/accounting-api/guides/bill-pay/use-bill-pay-demo-app",
      to: "/payables/guides/bill-pay/use-bill-pay-demo-app",
    },
    {
      from: "/accounting-api/guides/bill-pay/run-demo-app-locally",
      to: "/payables/guides/bill-pay/run-demo-app-locally",
    },
    {
      from: "/accounting-api/guides/bill-pay/how-the-demo-app-works",
      to: "/payables/guides/bill-pay/how-the-demo-app-works",
    },
    // ---- Integration pages - delete
    {
      from: "/integrations/accounting/clearbooks/accounting-clearbooks-setup",
      to: "/integrations/accounting/clearbooks/accounting-clearbooks",
    },
    {
      from: "/integrations/accounting/freshbooks/accounting-freshbooks-setup",
      to: "/integrations/accounting/freshbooks/accounting-freshbooks",
    },
    {
      from: "/integrations/accounting/kashflow/accounting-kashflow-setup",
      to: "/integrations/accounting/kashflow/accounting-kashflow",
    },
    {
      from: "/integrations/accounting/pandle/accounting-pandle-setup",
      to: "/integrations/accounting/pandle/accounting-pandle",
    },
    {
      from: "/integrations/accounting/sandbox/accounting-sandbox-setup",
      to: "/integrations/accounting/sandbox/accounting-sandbox",
    },
    {
      from: "/integrations/accounting/wave/accounting-wave-setup",
      to: "/integrations/accounting/wave/accounting-wave",
    },
    {
      from: "/integrations/banking/accounting-platform-keys",
      to: "/integrations/accounting/overview",
    },
    {
      from: "/integrations/banking/banking-platform-keys",
      to: "/integrations/banking/overview",
    },
    {
      from: "/integrations/commerce/commerce-platform-keys",
      to: "/integrations/commerce/overview",
    },
    {
      from: "/integrations/accounting/quickbooksdesktop/install-qbd-connector-right-networks",
      to: "/integrations/accounting/quickbooksdesktop/legacy/install-qbd-connector-right-networks",
    },

    // sfc

    {
      from: "/sfc/overview",
      to: "/commerce/overview",
    },
    {
      from: "/sfc/sync-for-commerce-knowledge-base/initiating-a-sync",
      to: "/commerce/advanced-data-sync",
    },
    {
      from: "/sfc/sync-for-commerce-knowledge-base/monitoring-a-sync",
      to: "/commerce/advanced-data-sync",
    },
    {
      from: "/sfc/sync-for-commerce-knowledge-base/synchronization-schedule",
      to: "/commerce/synchronization-schedule",
    },
    {
      from: "/sfc/sync-for-commerce-knowledge-base/sfc-journal-entry-mapping",
      to: "/commerce/overview",
    },
    {
      from: "/sfc/sync-for-commerce-knowledge-base/sfc-sales-product-categories",
      to: "/commerce/overview",
    },
    {
      from: "/sfc/build-with-sync-for-commerce/sync-for-commerce-prerequisites",
      to: "/commerce/setup",
    },
    {
      from: "/sfc/build-with-sync-for-commerce/sync-platform-selection",
      to: "/commerce/setup",
    },
    {
      from: "/sfc/build-with-sync-for-commerce/implementing-codats-no-code-merchant-configuration",
      to: "/commerce/merchant-configuration",
    },
    {
      from: "/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow",
      to: "/commerce/setup",
    },

    // expenses
    {
      from: "/sync-for-expenses/getting-started",
      to: "/expenses/getting-started",
    },
    {
      from: "/sync-for-expenses/config-and-categorize",
      to: "/expenses/config-and-categorize",
    },
    {
      from: "/sync-for-expenses/faq",
      to: "/expenses/faq",
    },
    {
      from: "/expenses/sync-process/updating-expenses",
      to: "/expenses/sync-process/expense-transactions",
    },
//    {
//      from: "/expenses/sync-process/uploading-receipts",
//      to: "/expenses/sync-process/expense-transactions",
//    },
    {
      from: "/expenses/sync-process/sync-process-explained",
      to: "/expenses/getting-started",
    },
    {
      from: "/expenses/sync-process/monitoring-a-sync",
      to: "/expenses/sync-process/syncing-expenses",
    },

    // assess

    {
      to: "/lending/overview",
      from: "/lending/metrics/accounting/api-financial-metrics",
    },
    {
      to: "/lending/overview",
      from: "/lending/metrics/accounting/overview",
    },
    {
      to: "/lending/overview",
      from: "/lending/metrics/accounting/api-marketing-metrics",
    },
    {
      to: "/lending/enhanced-financials/overview",
      from: "/assess/categories",
    },
    {
      to: "/lending/banking/banking-account-balances",
      from: "/assess/banking/banking-account-balances",
    },
    {
      to: "/lending/banking/banking-account-inflows-and-outflows",
      from: "/assess/banking/banking-account-inflows-and-outflows",
    },
    {
      to: "/lending/banking/overview",
      from: "/assess/banking/overview",
    },
    {
      to: "/lending/categories/api-categorization-of-accounts",
      from: "/assess/categories/api-categorization-of-accounts",
    },
    {
      to: "/lending/commerce-metrics/overview",
      from: "/assess/commerce-metrics/overview",
    },
    {
      to: "/lending/commerce-metrics/reporting-structure",
      from: "/assess/commerce-metrics/reporting-structure",
    },
    {
      to: "/lending/commerce-metrics/troubleshooting",
      from: "/assess/commerce-metrics/troubleshooting",
    },
    {
      to: "/lending/data-integrity/api-data-integrity",
      from: "/assess/data-integrity/api-data-integrity",
    },
    {
      to: "/lending/data-integrity/faqs",
      from: "/assess/data-integrity/faqs",
    },
    {
      to: "/lending/data-integrity/overview",
      from: "/assess/data-integrity/overview",
    },
    {
      to: "/lending/data-types",
      from: "/assess/data-types",
    },
    {
      to: "/lending/enhanced-cash-flow/overview",
      from: "/assess/enhanced-cash-flow/overview",
    },
    {
      to: "/lending/enhanced-cash-flow/transactions",
      from: "/assess/enhanced-cash-flow/transactions",
    },
    {
      to: "/lending/enhanced-financials/legacy/balance-sheet",
      from: "/assess/enhanced-financials/legacy/balance-sheet",
    },
    {
      to: "/lending/enhanced-financials/legacy/financials",
      from: "/assess/enhanced-financials/legacy/financials",
    },
    {
      to: "/lending/enhanced-financials/legacy/profit-and-loss",
      from: "/assess/enhanced-financials/legacy/profit-and-loss",
    },
    {
      to: "/lending/enhanced-financials/legacy/reporting-structure",
      from: "/assess/enhanced-financials/legacy/reporting-structure",
    },
    {
      to: "/lending/enhanced-financials/overview",
      from: "/assess/enhanced-financials/overview",
    },
    {
      to: "/lending/enhanced-invoices/overview",
      from: "/assess/enhanced-invoices/overview",
    },
    {
      to: "/lending/enhanced-liabilities/overview",
      from: "/assess/enhanced-liabilities/overview",
    },
    {
      to: "/lending/excel/audit-report",
      from: "/assess/excel/audit-report",
    },
    {
      to: "/lending/excel/enhanced-cash-flow-report",
      from: "/assess/excel/enhanced-cash-flow-report",
    },
    {
      to: "/lending/excel/enhanced-financials-report",
      from: "/assess/excel/enhanced-financials-report",
    },
    {
      to: "/lending/excel/enhanced-invoices-report",
      from: "/assess/excel/enhanced-invoices-report",
    },
    {
      to: "/lending/excel/overview",
      from: "/assess/excel/overview",
    },
    {
      to: "/lending/get-started",
      from: "/assess/get-started",
    },
    {
      to: "/lending/guides/invoice-finance/introduction",
      from: "/assess/guides/invoice-finance/introduction",
    },
    {
      to: "/lending/guides/invoice-finance/inv-fin-decision",
      from: "/assess/guides/invoice-finance/inv-fin-decision",
    },
    {
      to: "/lending/guides/invoice-finance/process-invoice",
      from: "/assess/guides/invoice-finance/process-invoice",
    },
    {
      to: "/lending/guides/invoice-finance/setting-up",
      from: "/assess/guides/invoice-finance/setting-up",
    },
    {
      to: "/lending/overview",
      from: "/assess/guides/loan-qualification/introduction",
    },
    {
      to: "/lending/overview",
      from: "/assess/guides/loan-qualification/process-loan",
    },
    {
      to: "/lending/overview",
      from: "/assess/guides/loan-qualification/setting-up",
    },
    {
      to: "/lending/overview",
      from: "/assess/guides/loan-qualification/uw-decision",
    },
    {
      to: "/lending/guides/migration-guides/deprecation-account-categories",
      from: "/assess/guides/migration-guides/deprecation-account-categories",
    },
    {
      to: "/lending/guides/migration-guides/deprecation-account-categories-api",
      from: "/assess/guides/migration-guides/deprecation-account-categories-api",
    },
    {
      to: "/lending/guides/migration-guides/deprecation-account-categories-excel",
      from: "/assess/guides/migration-guides/deprecation-account-categories-excel",
    },
    {
      to: "/lending/guides/migration-guides/deprecation-account-categories-portal",
      from: "/assess/guides/migration-guides/deprecation-account-categories-portal",
    },
    {
      to: "/lending/overview",
      from: "/assess/metrics/accounting/api-financial-metrics",
    },
    {
      to: "/lending/overview",
      from: "/assess/metrics/accounting/api-marketing-metrics",
    },
    {
      to: "/lending/overview",
      from: "/assess/metrics/accounting/overview",
    },
    {
      to: "/lending/metrics/commerce/api-customer-retention",
      from: "/assess/metrics/commerce/api-customer-retention",
    },
    {
      to: "/lending/metrics/commerce/api-lifetime-value",
      from: "/assess/metrics/commerce/api-lifetime-value",
    },
    {
      to: "/lending/metrics/commerce/api-orders",
      from: "/assess/metrics/commerce/api-orders",
    },
    {
      to: "/lending/metrics/commerce/api-refunds",
      from: "/assess/metrics/commerce/api-refunds",
    },
    {
      to: "/lending/metrics/commerce/api-revenue",
      from: "/assess/metrics/commerce/api-revenue",
    },
    {
      to: "/lending/metrics/commerce/overview",
      from: "/assess/metrics/commerce/overview",
    },
    {
      to: "/lending/overview",
      from: "/assess/overview",
    },
    {
      to: "/lending/portal/categorization-of-accounts",
      from: "/assess/portal/categorization-of-accounts",
    },
    {
      to: "/lending/portal/categorize-accounts",
      from: "/assess/portal/categorize-accounts",
    },
    {
      to: "/lending/portal/data-integrity",
      from: "/assess/portal/data-integrity",
    },
    {
      to: "/lending/portal/overview",
      from: "/assess/portal/overview",
    },
    {
      to: "/lending/troubleshooting",
      from: "/assess/troubleshooting",
    },

    ...prodRework,
    // integrations

    ...mapIntegrationRedirects(acc, "accounting"),
    ...mapIntegrationRedirects(bank, "banking"),
    ...mapIntegrationRedirects(comm, "commerce"),
  ],
  createRedirects(existingPath) {
    if (existingPath.includes('/docs/banking-')) {
      // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
      return [
        existingPath.replace('/', '/docs'),
      ];
    }
    if (existingPath.includes('/docs')) {
      // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
      return [
        existingPath.replace('/', '/docs'),
      ];
    }

    return undefined; // Return a falsy value: no redirect created
  },
};
