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
      customProps: {
        hr: true,
        section: "User guides",
      },
      href: "/spend-insights/guides/create-account",
    },
    "spend-insights/guides/create-customer",
    "spend-insights/guides/connect-customer",
    "spend-insights/guides/analyze-spend",
    {
      type: "link",
      customProps: {
        hr: true, 
        section: "Customer support",
      },
      href: "/spend-insights/resources/customer-faqs",
    },
    "spend-insights/resources/benefits",
    "spend-insights/resources/concerns",
    "spend-insights/resources/link-software",
    "spend-insights/resources/link-file",  
    {
      type: "link",
      label: "Relationship Portal",
      customProps: {
        hr: true,
      },
      href: "https://app.codat.io/",
    },
  ];