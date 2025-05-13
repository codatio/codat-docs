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
  "spend-insights/get-started",
  {
    type: "link",
    label: "Request information",
    customProps: {
      hr: true,
      section: "Manage opportunities",
    },
    href: "/spend-insights/guides/manage-relationships",
  },
  "spend-insights/guides/analyze-spend",
  "spend-insights/guides/refresh-data",
  {
    type: "link",
    label: "Customer FAQs",
    customProps: {
      hr: true,
      section: "Resources",
    },
    href: "/spend-insights/resources/customer-faqs",
  },
  {
    type: "link",
    label: "Codat Portal",
    customProps: {
      hr: true,
    },
    href: "https://app.codat.io/",
  },
];
