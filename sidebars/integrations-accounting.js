const integrations = [
  {
    type: "doc",
    id: "integrations/accounting/clearbooks/accounting-clearbooks",
    customProps: {
      hr: true,
      section: "Integrations",
    },
  },
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

]

const onPremIntegrations = [
  {
    type: "category",
    label: "QuickBooks Desktop",
    collapsed: true,
    customProps: {
      hr: true,
      section: "On-premise integrations",
    },
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
  "integrations/accounting/offline-connectors",
]

const sandboxIntegrations = [
  {
    type: "doc",
    id: "integrations/accounting/sandbox/accounting-sandbox",
    customProps: {
      hr: true,
      section: "Sandbox",
    },
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
    label: "Accounting integrations",
    href: "/integrations/accounting/overview",
    className: "header",
  },
  ...integrations,
  ...onPremIntegrations,
  ...sandboxIntegrations,
]