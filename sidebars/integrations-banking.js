const integrations = [
  {
    type: "category",
    label: "Basiq",
    collapsed: true,
    customProps: {
      hr: true,
      section: "Bank integrations",
    },
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
    customProps: {
      hr: true,
      section: "Advanced features",
    },
    items: [
      "integrations/banking/proxy-access-banking-data",
      "integrations/banking/proxy-access-banking-data/enabling-proxy-access",
      "integrations/banking/proxy-access-banking-data/example-proxy-requests",
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
    label: "Banking integrations",
    href: "/integrations/banking/overview",
    className: "header",
  },
  ...integrations,
]