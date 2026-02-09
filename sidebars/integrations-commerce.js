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
    label: "Clover",
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "integrations/commerce/clover/commerce-clover",
        label: "Overview",
        key: "clover-overview",
      },
      "integrations/commerce/clover/set-up-your-clover-integration",
      "integrations/commerce/clover/test-your-clover-integration",
    ],
  },
  {
    type: "category",
    label: "Lightspeed Restaurant (K series)",
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "integrations/commerce/lightspeed-k/commerce-lightspeed-k",
        label: "Overview",
        key: "lightspeed-k-overview",
      },
      "integrations/commerce/lightspeed-k/commerce-lightspeed-k-setup",
    ],
  },
  {
    type: "category",
    label: "Shopify",
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "integrations/commerce/shopify/commerce-shopify",
        label: "Overview",
        key: "shopify-overview",
      },
      {
        type: "category",
        label: "Setup",
        collapsed: true,
        items: [
          "integrations/commerce/shopify/commerce-shopify-public-apps",
          "integrations/commerce/shopify/commerce-shopify-custom-apps",
        ],
      },
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
      {
        type: "doc",
        id: "integrations/commerce/zettle/commerce-zettle",
        label: "Overview",
        key: "zettle-overview",
      },
      "integrations/commerce/zettle/commerce-zettle-setup",
      "integrations/commerce/zettle/test-zettle",
      "integrations/commerce/zettle/zettle-integration-reference",
    ],
  },
];

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
];
