const mapIntegrationRedirect = (item, category) => {
  return {
    to: item.to,
    from: `/redirects/integrations/${category}/${item.platformKey}`
  }
}

const mapIntegrationRedirects = (items, category) => {
  return items.map(item => mapIntegrationRedirect(item, category))
}

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
    integration: "Chargify",
    platformKey: "rkgp",
    to: "/integrations/commerce/chargify/commerce-chargify",
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
    {
      to:  '/assess/guides/loan-qualification/introduction',
      from: '/assess/guides/underwriting/introduction',
    },
    {
      to:  '/usecases/summary/lending',
      from: '/usecases/summary/underwriting',
    },
    {
      to:  '/introduction/first-steps',
      from: '/docs',
    },
    {
      to:  '/introduction/first-steps',
      from: '/docs/guide-1',
    },
    {
      to:  '/introduction/first-steps',
      from: '/docs/get-started',
    },
    {
      to:  '/introduction/create-account',
      from: '/docs/core-account-signup',
    },
    {
      to:  '/using-the-api/overview',
      from: '/docs/using-codats-api',
    },
    {
      to:  '/using-the-api/authentication',
      from: '/reference/authentication',
    },
    {
      to:  '/using-the-api/querying',
      from: '/reference/querying',
    },
    {
      to:  '/using-the-api/paging',
      from: '/reference/paging',
    },
    {
      to:  '/using-the-api/ordering-results',
      from: '/reference/ordering-results',
    },
    {
      to:  '/using-the-api/modified-dates',
      from: '/reference/modified-dates-1',
    },
    {
      to:  '/using-the-api/managing-companies',
      from: '/reference/managing-companies-1',
    },
    {
      to:  '/using-the-api/queueing-data-syncs',
      from: '/reference/queueing-data-syncs-1',
    },
    {
      to:  '/using-the-api/errors',
      from: '/reference/errors',
    },
    {
      to:  '/using-the-api/push',
      from: '/reference/push-creating-and-updating-data',
    },
    {
      to:  '/using-the-api/rate-limits',
      from: '/reference/rate-limits-1',
    },
    {
      to:  '/using-the-api/optimizing-api-calls',
      from: '/reference/optimizing-your-api-calls-1',
    },
    // Changelog - remove soon
    {
      to: '/updates/220817-sage-50-soft-deletion',
      from: '/changelog/41921-sage-50-deleted-payment-on-accounts-soft-deleted',
    },
    {
      to: '/updates/220826-wbo-invoice-push',
      from: '/changelog/42327-qbo-change-to-invoice-push-validation',
    },
    {
      to: '/updates/220817-qbd-refs',
      from: '/changelog/42998-qbd-push-validation-accountref-itemref',
    },
    {
      to: '/updates/220825-string-request-deprecation',
      from: '/changelog/44714-deprecation-string-request-create-connections-endpoint',
    },
    {
      to: '/updates/220926-freshbooks-expenses',
      from: '/changelog/upcoming-2023-01-10-freshbooks-expenses-no-longer-fetched-as-bills-and-bill-payments',
    },
    {
      to: '/updates/221003-quickbooks-online',
      from: '/changelog/upcoming-2023-01-10-quickbooks-online-purchases-will-no-longer-be-fetched-as-bills-and-bill-payments',
    },
    {
      to: '/updates/230131-uat-deprecation',
      from: '/changelog/upcoming-2023-01-31-deprecation-of-uat-environment',
    },
    {
      to: '/updates/230411-deletion-of-data',
      from: '/changelog/upcoming-2023-04-10-changes-to-handling-of-deleted-data',
    },
    {
      to: '/updates/230411-api-keys',
      from: '/changelog/upcoming-2023-04-10-deprecation-of-api-key-management',
    },
    {
      to: '/updates/230411-legacy-bank-account-endpoints',
      from: '/changelog/upcoming-2023-04-10-deprecation-of-legacy-bank-account-endpoints'
    },
    {
      to:  '/updates',
      from: '/changelog',
    },
    {
      to:  '/integrations/accounting/xero/accounting-xero-setup', //xero
      from: '/redirects/integrations/bankfeeds/qalf',
    },
    {
      to:  '/bank-feeds-api/sage-bank-feeds', //sage
      from: '/redirects/integrations/bankfeeds/olpr',
    },
    {
      to:  '/using-the-api/errors', //sage
      from: '/docs/status-codes',
    },
    ...mapIntegrationRedirects(acc, "accounting"),
    ...mapIntegrationRedirects(bank, "banking"),
    ...mapIntegrationRedirects(comm, "commerce"),
  ],
  createRedirects(existingPath) {
    if (existingPath.includes('/docs/banking-')) {
      console.log(existingPath)
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
