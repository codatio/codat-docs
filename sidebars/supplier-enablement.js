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
    label: "Relationship manager",
    customProps: {
      hr: true,
      section: "Features",
    },
    href: "/supplier-enablement/features/relationship-manager",
  },
  "supplier-enablement/features/financials",
  "supplier-enablement/features/excel-addon",
];
