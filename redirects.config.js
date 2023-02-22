
const acc = [
  {
    integration: "Clear Books",
    platformkey: "jhch",
    to: "",
  },
  {
    integration: "Dynamics 365 Business Central",
    platformkey: "trji",
    to: "",
  },
  {
    integration: "Exact (Netherlands)",
    platformkey: "qudb",
    to: "",
  },
  {
    integration: "Exact (UK)",
    platformkey: "pbbf",
    to: "",
  },
  {
    integration: "FreeAgent",
    platformkey: "fbrh",
    to: "",
  },
  {
    integration: "FreshBooks",
    platformkey: "vxvy",
    to: "",
  },
  {
    integration: "KashFlow",
    platformkey: "wvzu",
    to: "",
  },
  {
    integration: "MYOB AccountRight Live",
    platformkey: "pdvj",
    to: "",
  },
  {
    integration: "Oracle NetSuite",
    platformkey: "akxx",
    to: "",
  },
  {
    integration: "Pandle",
    platformkey: "vjms",
    to: "",
  },
  {
    integration: "QuickBooks",
    platformkey: "pqsw",
    to: "",
  },
  {
    integration: "QuickBooks Online",
    platformkey: "qhyg",
    to: "",
  },
  {
    integration: "QuickBooks Online Sandbox",
    platformkey: "ndsk",
    to: "",
  },
  {
    integration: "Sage 200cloud",
    platformkey: "jcrp",
    to: "",
  },
  {
    integration: "Sage 50",
    platformkey: "hbql",
    to: "",
  },
  {
    integration: "Sage Intacct",
    platformkey: "knfz",
    to: "",
  },
  {
    integration: "Sage One",
    platformkey: "tgff",
    to: "",
  },
  {
    integration: "Sandbox",
    platformkey: "mqjo",
    to: "",
  },
  {
    integration: "Wave",
    platformkey: "pbtz",
    to: "",
  },
  {
    integration: "Xero",
    platformkey: "gbol",
    to: "",
  },
  {
    integration: "Zoho Books",
    platformkey: "rwuv",
    to: "",
  },
]

const bank = [
  {
    integration: "Banking Sandbox",
    platformKey: "qhnd",
    to: "",
  },
  {
    integration: "Basiq",
    platformKey: "dfxm",
    to: "",
  },
  {
    integration: "Demo Bank",
    platformKey: "syin",
    to: "",
  },
  {
    integration: "Partner Banking",
    platformKey: "qwes",
    to: "",
  },
  {
    integration: "Plaid",
    platformKey: "suuo",
    to: "",
  },
]

const comm = [
  {
    integration: "Amazon Seller Central",
    platformKey: "qkdj",
    to: "",
  },
  {
    integration: "BigCommerce",
    platformKey: "vqzp",
    to: "",
  },
  {
    integration: "Chargebee",
    platformKey: "xwsy",
    to: "",
  },
  {
    integration: "Chargify",
    platformKey: "rkgp",
    to: "",
  },
  {
    integration: "Clover",
    platformKey: "fqly",
    to: "",
  },
  {
    integration: "Commerce Sandbox",
    platformKey: "aiwb",
    to: "",
  },
  {
    integration: "Lightspeed K",
    platformKey: "ldgh",
    to: "",
  },
  {
    integration: "Lightspeed K Trial",
    platformKey: "ltes",
    to: "",
  },
  {
    integration: "Mollie",
    platformKey: "dxfw",
    to: "",
  },
  {
    integration: "Mollie Test",
    platformKey: "dlqr",
    to: "",
  },
  {
    integration: "Partner Commerce",
    platformKey: "lqai",
    to: "",
  },
  {
    integration: "PayPal",
    platformKey: "gvom",
    to: "",
  },
  {
    integration: "PrestaShop",
    platformKey: "zgbz",
    to: "",
  },
  {
    integration: "Recurly",
    platformKey: "lhcb",
    to: "",
  },
  {
    integration: "Shopify",
    platformKey: "fztf",
    to: "",
  },
  {
    integration: "Square",
    platformKey: "zsth",
    to: "",
  },
  {
    integration: "Square Sandbox",
    platformKey: "xcwv",
    to: "",
  },
  {
    integration: "Stripe",
    platformKey: "exgd",
    to: "",
  },
  {
    integration: "Stripe Test",
    platformKey: "yzth",
    to: "",
  },
  {
    integration: "SumUp",
    platformKey: "pshf",
    to: "",
  },
  {
    integration: "WooCommerce",
    platformKey: "ltpp",
    to: "",
  },
  {
    integration: "iZettle Go",
    platformKey: "ugxp",
    to: "",
  },
]

module.exports = {
  redirects: [
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