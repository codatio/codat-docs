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
    label: "Manage clients",
    customProps: {
      hr: true,
      section: "User guides",
    },
    href: "/supplier-enablement/guides/manage-relationships",
  },
  "supplier-enablement/guides/analyze-spend",
  "supplier-enablement/guides/refresh-data",
  {
    type: "link",
    label: "Relationship Manager",
    customProps: {
      hr: true,
    },
    href: "https://relationships.codat.io/",
  },
];