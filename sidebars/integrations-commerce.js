const integrations = [
  "integrations/commerce/api-workflow",
  {
    type: "category",
    label: "Amazon Seller Central",
    collapsed: true,
    customProps: {
      hr: true,
      section: "Integrations",
    },
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
]

module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Commerce integrations",
    href: "/integrations/commerce/overview",
    className: "header",
  },
  ...integrations,
]