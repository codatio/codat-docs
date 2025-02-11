module.exports = [
  {
    type: "doc",
    label: "Business Help Hub",
    id: "smb-help-hub/overview",
    className: "header",
  },
  {
    type: "doc",
    label: "What is Codat?",
    id: "smb-help-hub/codat/faq",
    customProps: {
      hr: true,
    },
  },
  {
    type: "category",
    label: "NetSuite",
    collapsed: true,
    customProps: {
      hr: true,
      section: "Software support",
    },
    items: [
      "smb-help-hub/integrations/netsuite/overview",
      "smb-help-hub/integrations/netsuite/suitecloud",
      "smb-help-hub/integrations/netsuite/bundles",
      "smb-help-hub/integrations/netsuite/troubleshooting",
    ],
  },
  {
    type: "category",
    label: "Sage 50",
    collapsed: true,
    items: [
      "smb-help-hub/integrations/sage-50/overview",
      "smb-help-hub/integrations/sage-50/troubleshooting",
    ],
  },
  {
    type: "category",
    label: "Sage Intacct",
    collapsed: true,
    items: [
      "smb-help-hub/integrations/sage-intacct/overview",
      "smb-help-hub/integrations/sage-intacct/web-services-subscription",
      "smb-help-hub/integrations/sage-intacct/web-services-user",
      "smb-help-hub/integrations/sage-intacct/error-messages",
    ],
  },
  {
    type: "category",
    label: "QuickBooks Desktop",
    collapsed: true,
    items: [
      "smb-help-hub/integrations/qb-desktop/overview",
      "smb-help-hub/integrations/qb-desktop/install-connector",
      "smb-help-hub/integrations/qb-desktop/configure-connector",
      "smb-help-hub/integrations/qb-desktop/troubleshooting",
    ],
  },
]