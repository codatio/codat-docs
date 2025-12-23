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
  {
    type: "link",
    label: "Create account",
    customProps: {
      hr: true,
      section: "Codat user guides",
    },
    href: "/spend-insights/guides/create-account",
  },
  "spend-insights/guides/onboard-customer",
  "spend-insights/guides/analyze-spend",
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
    label: "Help Hub",
    customProps: {
      hr: true,
    },
    href: "https://help.codat.io/",
  },
];
