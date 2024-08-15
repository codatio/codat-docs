module.exports = [
{
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Supplier Enablement",
    href: "/supplier-enablement/overview",
    className: "header top-level-item products product supplier-enablement",
  },
  "supplier-enablement/get-started",
  {
    type: "link",
    label: "Request information",
    customProps: {
      hr: true,
      section: "Manage opportunities",
    },
    href: "/supplier-enablement/guides/manage-relationships",
  },
  "supplier-enablement/guides/analyze-spend",
  "supplier-enablement/guides/refresh-data",
  {
    type: "link",
    label: "Customer FAQs",
    customProps: {
      hr: true,
      section: "Resources",
    },
    href: "/supplier-enablement/resources/customer-faqs",
  },
  "supplier-enablement/guides/customer-journey",
  {
    type: "link",
    label: "Relationship Portal",
    customProps: {
      hr: true,
    },
    href: "https://relationships.codat.io/",
  },
];
