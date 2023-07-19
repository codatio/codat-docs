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
    //
    {
      from: "/assess/guides/underwriting/introduction",
      to: "/guides/loan-qualification/introduction",
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
      to: "/bank-feeds/sage-bank-feeds", //sage
    },
    {
      from: "/docs/status-codes",
      to: "/using-the-api/errors", //sage
    },
    // --- delete soon
    {
      from: "/assess/guides/loan-qualification/introduction",
      to: "/guides/loan-qualification/introduction",
    },
    {
      from: "/assess/guides/loan-qualification/setting-up",
      to: "/guides/loan-qualification/setting-up",
    },
    {
      from: "/assess/guides/loan-qualification/process-loan",
      to: "/guides/loan-qualification/process-loan",
    },
    {
      from: "/assess/guides/loan-qualification/uw-decision",
      to: "/guides/loan-qualification/uw-decision",
    },
    {
      from: "/accounting-api/guides/bill-pay/introduction",
      to: "/guides/bill-pay/introduction",
    },
    {
      from: "/accounting-api/guides/bill-pay/use-bill-pay-demo-app",
      to: "/guides/bill-pay/use-bill-pay-demo-app",
    },
    {
      from: "/accounting-api/guides/bill-pay/run-demo-app-locally",
      to: "/guides/bill-pay/run-demo-app-locally",
    },
    {
      from: "/accounting-api/guides/bill-pay/how-the-demo-app-works",
      to: "/guides/bill-pay/how-the-demo-app-works",
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
