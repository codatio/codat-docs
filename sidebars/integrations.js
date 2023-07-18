module.exports = [
{
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  "integrations/all-integrations",
  {
    type: "link",
    label: "Integration coverage",
    href: "https://knowledge.codat.io/supported-features/accounting",
  },
  {
    type: "category",
    label: "Accounting",
    collapsed: true,
    items: [
      "integrations/accounting/overview",
      "integrations/accounting/sandbox/accounting-sandbox",
      "integrations/accounting/clearbooks/accounting-clearbooks",
      {
        type: "category",
        label: "Dynamics 365 Business Central",
        collapsed: true,
        items: [
          "integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral",
          "integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral-setup",
          "integrations/accounting/dynamics365businesscentral/test-your-dynamics-365-business-central-integration",
          "integrations/accounting/dynamics365businesscentral/accounting-dynamics-365-business-central-reference",
        ],
      },
      {
        type: "category",
        label: "Exact Online",
        collapsed: true,
        items: [
          "integrations/accounting/exact-online/accounting-exact-online",
          "integrations/accounting/exact-online/accounting-exact-setup",
          "integrations/accounting/exact-online/exact-online-integration-reference",
        ],
      },
      {
        type: "category",
        label: "FreeAgent",
        collapsed: true,
        items: [
          "integrations/accounting/freeagent/accounting-freeagent",
          "integrations/accounting/freeagent/accounting-freeagent-setup",
          "integrations/accounting/freeagent/freeagent-integration-reference",
        ],
      },
      "integrations/accounting/freshbooks/accounting-freshbooks",
      "integrations/accounting/kashflow/accounting-kashflow",
      {
        type: "category",
        label: "MYOB",
        collapsed: true,
        items: [
          "integrations/accounting/myob/accounting-myob",
          "integrations/accounting/myob/accounting-myob-setup",
          "integrations/accounting/myob/myob-integration-reference",
          "integrations/accounting/myob/myob-dev-registration",
        ],
      },
      {
        type: "category",
        label: "NetSuite",
        collapsed: true,
        items: [
          "integrations/accounting/netsuite/accounting-netsuite",
          "integrations/accounting/netsuite/accounting-netsuite-setup",
          "integrations/accounting/netsuite/company-linking-journey",
          "integrations/accounting/netsuite/accounting-netsuite-how-deleting-bill-payments-works",
          "integrations/accounting/netsuite/oracle-netsuite-faq",
          "integrations/accounting/netsuite/oracle-netsuite-integration-reference",
        ],
      },
      "integrations/accounting/pandle/accounting-pandle",
      {
        type: "category",
        label: "QuickBooks Desktop",
        collapsed: true,
        items: [
          "integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop",
          "integrations/accounting/quickbooksdesktop/software-and-hardware-requirements",
          "integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector",
          "integrations/accounting/quickbooksdesktop/quickbooks-desktop-faq",
          "integrations/accounting/quickbooksdesktop/quickbooks-desktop-troubleshooting",
          "integrations/accounting/quickbooksdesktop/install-qbd-connector-right-networks",
        ],
      },
      {
        type: "category",
        label: "QuickBooks Online",
        collapsed: true,
        items: [
          "integrations/accounting/quickbooksonline/accounting-quickbooksonline",
          "integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup",
          "integrations/accounting/quickbooksonline/faq-quickbooks-online",
          "integrations/accounting/quickbooksonline/quickbooks-online-integration-reference",
        ],
      },
      {
        type: "category",
        label: "Sage Intacct",
        collapsed: true,
        items: [
          "integrations/accounting/sage-intacct/accounting-sage-intacct",
          "integrations/accounting/sage-intacct/accounting-sage-intacct-setup",
          "integrations/accounting/sage-intacct/sage-intacct-integration-reference",
        ],
      },
      {
        type: "category",
        label: "Sage 200cloud",
        collapsed: true,
        items: [
          "integrations/accounting/sage200/accounting-sage200",
          "integrations/accounting/sage200/accounting-sage200-setup",
          "integrations/accounting/sage200/sage200-limitations",
        ],
      },
      {
        type: "category",
        label: "Sage 50",
        collapsed: true,
        items: [
          "integrations/accounting/sage50/accounting-sage50",
          "integrations/accounting/sage50/sage-50-requirements",
          "integrations/accounting/sage50/installing-the-sage-50-connector",
          "integrations/accounting/sage50/uninstalling-the-sage-50-connector",
          "integrations/accounting/sage50/sage50-multi-company-mode",
          "integrations/accounting/sage50/pushing-data-to-sage-50",
          "integrations/accounting/sage50/restart-the-sage-50-connector",
          "integrations/accounting/sage50/sage50-troubleshooting",
        ],
      },
      {
        type: "category",
        label: "Sage Business Cloud",
        collapsed: true,
        items: [
          "integrations/accounting/sagebusinesscloud/accounting-sagebusinesscloud",
          "integrations/accounting/sagebusinesscloud/accounting-sagebusinesscloud-setup",
          "integrations/accounting/sagebusinesscloud/accounting-sagebusinesscloud-reference",
        ],
      },
      "integrations/accounting/wave/accounting-wave",
      {
        type: "category",
        label: "Xero",
        collapsed: true,
        items: [
          "integrations/accounting/xero/accounting-xero",
          "integrations/accounting/xero/accounting-xero-setup",
          "integrations/accounting/xero/accounting-xero-test",
          "integrations/accounting/xero/xero-faq",
          "integrations/accounting/xero/xero-app-partner-program",
        ],
      },
      {
        type: "category",
        label: "Zoho Books",
        collapsed: true,
        items: [
          "integrations/accounting/zoho-books/accounting-zoho-books",
          "integrations/accounting/zoho-books/accounting-zohobooks-setup",
          "integrations/accounting/zoho-books/zoho-book-limits",
          "integrations/accounting/zoho-books/zoho-books-integration-reference",
        ],
      },
      "integrations/accounting/offline-connectors",
    ],
  },
  {
    type: "category",
    label: "Banking",
    collapsed: true,
    items: [
      "integrations/banking/overview",
      {
        type: "category",
        label: "Basiq",
        collapsed: true,
        items: [
          "integrations/banking/basiq/banking-basiq",
          "integrations/banking/basiq/banking-basiq-setup",
          "integrations/banking/basiq/test-your-basiq-integration",
        ],
      },
      {
        type: "category",
        label: "Plaid",
        collapsed: true,
        items: [
          "integrations/banking/plaid/banking-plaid",
          "integrations/banking/plaid/banking-plaid-setup",
          "integrations/banking/plaid/test-your-plaid-integration",
          "integrations/banking/plaid/switching-between-plaid-environments",
          "integrations/banking/plaid/reauthorise-url-links",
        ],
      },
      {
        type: "category",
        label: "Truelayer",
        collapsed: true,
        items: [
          "integrations/banking/truelayer/banking-truelayer",
          "integrations/banking/truelayer/register-for-truelayer",
          "integrations/banking/truelayer/set-up-truelayer-2",
          "integrations/banking/truelayer/test-truelayer",
          "integrations/banking/truelayer/faqs-about-truelayer",
        ],
      },
      {
        type: "category",
        label: "Proxy access",
        collapsed: true,
        items: [
          "integrations/banking/proxy-access-banking-data",
          "integrations/banking/proxy-access-banking-data/enabling-proxy-access",
          "integrations/banking/proxy-access-banking-data/example-proxy-requests",
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Commerce",
    collapsed: true,
    items: [
      "integrations/commerce/overview",
      "integrations/commerce/api-workflow",
      "integrations/commerce/commerce-sync-settings",
      {
        type: "category",
        label: "Amazon Seller Central",
        collapsed: true,
        items: [
          "integrations/commerce/amazon-seller-central/commerce-amazon-seller-central",
          "integrations/commerce/amazon-seller-central/set-up-amazon-seller-central",
          "integrations/commerce/amazon-seller-central/amazon-registration-steps",
        ],
      },
      {
        type: "category",
        label: "BigCommerce",
        collapsed: true,
        items: [
          "integrations/commerce/bigcommerce/commerce-bigcommerce",
          "integrations/commerce/bigcommerce/commerce-bigcommerce-setup",
          "integrations/commerce/bigcommerce/commerce-bigcommerce-test",
          "integrations/commerce/bigcommerce/commerce-bigcommerce-integration-reference",
        ],
      },
      {
        type: "category",
        label: "Chargebee",
        collapsed: true,
        items: [
          "integrations/commerce/chargebee/commerce-chargebee",
          "integrations/commerce/chargebee/commerce-chargebee-setup",
          "integrations/commerce/chargebee/commerce-chargebee-use",
        ],
      },
      {
        type: "category",
        label: "Clover",
        collapsed: true,
        items: [
          "integrations/commerce/clover/commerce-clover",
          "integrations/commerce/clover/set-up-your-clover-integration",
          "integrations/commerce/clover/test-your-clover-integration",
        ],
      },
      {
        type: "category",
        label: "Lightspeed Restaurant (K series)",
        collapsed: true,
        items: [
          "integrations/commerce/lightspeed-k/commerce-lightspeed-k",
          "integrations/commerce/lightspeed-k/commerce-lightspeed-k-setup",
        ],
      },
      {
        type: "category",
        label: "Maxio",
        collapsed: true,
        items: [
          "integrations/commerce/chargify/commerce-chargify",
          "integrations/commerce/chargify/commerce-chargify-setup",
          "integrations/commerce/chargify/commerce-chargify-use",
        ],
      },
      {
        type: "category",
        label: "Mollie",
        collapsed: true,
        items: [
          "integrations/commerce/mollie/commerce-mollie",
          "integrations/commerce/mollie/commerce-mollie-setup",
          "integrations/commerce/mollie/commerce-mollie-test",
          "integrations/commerce/mollie/mollie-integration-reference",
        ],
      },
      {
        type: "category",
        label: "PayPal",
        collapsed: true,
        items: [
          "integrations/commerce/paypal/commerce-paypal",
          "integrations/commerce/paypal/set-up-paypal-in-production",
          "integrations/commerce/paypal/test-paypal",
        ],
      },
      {
        type: "category",
        label: "PrestaShop",
        collapsed: true,
        items: [
          "integrations/commerce/prestashop/commerce-prestashop",
          "integrations/commerce/prestashop/set-up-prestashop-in-production",
          "integrations/commerce/prestashop/test-prestashop",
        ],
      },
      {
        type: "category",
        label: "Recurly",
        collapsed: true,
        items: [
          "integrations/commerce/recurly/commerce-recurly",
          "integrations/commerce/recurly/commerce-recurly-setup",
          "integrations/commerce/recurly/commerce-recurly-use",
        ],
      },
      {
        type: "category",
        label: "Shopify",
        collapsed: true,
        items: [
          "integrations/commerce/shopify/commerce-shopify",
          {
            type: "category",
            label: "Setup",
            collapsed: true,
            items: [
              "integrations/commerce/shopify/commerce-shopify-setup",
              "integrations/commerce/shopify/commerce-shopify-custom-apps",
            ]
          },
          "integrations/commerce/shopify/commerce-shopify-requirements-public-apps",
          "integrations/commerce/shopify/test-shopify",
        ],
      },
      {
        type: "category",
        label: "Square",
        collapsed: true,
        items: [
          "integrations/commerce/square/commerce-square",
          "integrations/commerce/square/commerce-square-setup",
          "integrations/commerce/square/test-square",
        ],
      },
      {
        type: "category",
        label: "Stripe",
        collapsed: true,
        items: [
          "integrations/commerce/stripe/commerce-stripe",
          "integrations/commerce/stripe/commerce-stripe-setup",
          "integrations/commerce/stripe/test-stripe",
        ],
      },
      {
        type: "category",
        label: "SumUp",
        collapsed: true,
        items: [
          "integrations/commerce/sumup/commerce-sumup",
          "integrations/commerce/sumup/set-up-sumup-in-production-1",
          "integrations/commerce/sumup/test-sumup-1",
        ],
      },
      {
        type: "category",
        label: "WooCommerce",
        collapsed: true,
        items: [
          "integrations/commerce/woocommerce/commerce-woocommerce",
          "integrations/commerce/woocommerce/commerce-woocommerce-setup",
          "integrations/commerce/woocommerce/test-woocommerce",
        ],
      },
      {
        type: "category",
        label: "Zettle",
        collapsed: true,
        items: [
          "integrations/commerce/zettle/commerce-zettle",
          "integrations/commerce/zettle/commerce-zettle-setup",
          "integrations/commerce/zettle/test-zettle",
          "integrations/commerce/zettle/zettle-integration-reference",
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Bank feeds",
    collapsed: true,
    items: [
      {
        type: "link",
        href: "/integrations/bankfeeds/overview",
        label: "Overview",
      },
      {
        type: "link",
        href: "/bank-feeds-api/qbo-bank-feeds/",
        label: "QuickBooks Online",
      },
      {
        type: "link",
        href: "/bank-feeds/sage-bank-feeds/",
        label: "Sage",
      },
      {
        type: "link",
        href: "/bank-feeds-api/xero-bank-feeds/",
        label: "Xero",
      },
    ],
  },
  {
    type: "category",
    label: "Other integrations",
    collapsed: true,
    items: [
      "integrations/file-upload",
    ]
  },
];
