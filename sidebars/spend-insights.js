module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Spend Insights",
    href: "/spend-insights/overview",
    className: "header top-level-item products product spend-insights",
  },
  "spend-insights/guides/key-terms",
  {
    type: "link",
    label: "Key terms",
    customProps: {
      hr: true,
      section: "User guides",
    },
    href: "/spend-insights/guides/key-terms",
  },
  "spend-insights/guides/create-account",
  "spend-insights/guides/onboard-customer",
  "spend-insights/guides/get-report",
  {
    type: "link",
    label: "Spend Summary",
    customProps: {
      hr: true,
      section: "Report reference",
    },
    href: "/spend-insights/reports/spend-summary",
  },
  "spend-insights/reports/spend-analysis",
  "spend-insights/reports/ongoing-insights",
  "spend-insights/reports/vendor-match",
  {
    type: "link",
    label: "Questions and concerns",
    customProps: {
      hr: true,
      section: "Customer support",
    },
    href: "/spend-insights/resources/customer-faqs",
  },
  "spend-insights/resources/link-software",
  "spend-insights/resources/link-file",
  {
    type: "link",
    label: "Codat Portal",
    customProps: {
      hr: true,
    },
    href: "https://app.codat.io/",
  },
  {
    type: "link",
    label: "ERP Resource Hub",
    customProps: {
      hr: true,
    },
    href: "https://help.codat.io/",
  },
];
