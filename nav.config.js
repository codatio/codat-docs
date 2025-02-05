module.exports = {
  hideOnScroll: true,
  logo: {
    alt: "Site logo",
    src: `/logos/codat-docs-dark.png`,
    srcDark: `/logos/codat-docs-light.png`,
    href: "/",
    target: "_self",
    width: 170,
    height: 28,
  },
  items: [
    {
      type: "doc",
      docId: "index",
      label: "Docs",
      position: "left",
    },
    {
      label: "API",
      position: "left",
      className: "navbar__link--api",
      items: [
        {
          href: "/supplier-enablement-api",
          label: "Spend Insights",
        },
        {
          href: "/bank-feeds-api",
          label: "Bank Feeds",
          hr: true,
        },
        {
          href: "/sync-for-payables-api",
          label: "Bill Pay (async)",
        },
        {
          href: "/sync-for-payables-v2-api",
          label: "Bill Pay (sync)",
        },
        {
          href: "/sync-for-expenses-api",
          label: "Expenses",
        },
        {
          href: "/lending-api",
          label: "Lending",
        },
        {
          href: "/platform-api",
          label: "Platform API",
          hr: true,
        },
        {
          href: "https://github.com/codatio/oas",
          label: "OpenAPI spec",
          hr: true,
        },
      ],
    },
    { to: "updates", label: "Updates", position: "left" },
    {
      label: "Community",
      position: "left",
      items: [
        {
          href: "https://github.com/codatio",
          label: "GitHub",
          target: "_blank",
          rel: null,
        },
        {
          href: "https://twitter.com/codatdata",
          label: "Twitter",
          target: "_blank",
          rel: null,
        },
        {
          href: "https://www.codat.io/blog/",
          label: "Blog",
          target: "_blank",
          rel: null,
        },
      ],
      className: "navbar__link--community",
    },
    {
      label: "Support",
      position: "left",
      items: [
        {
          to: "support/get-help",
          label: "Get help",
        },
        {
          href: "https://status.codat.io/",
          label: "API status",
          target: "_blank",
          rel: null,
        },
        {
          href: "https://github.com/codatio/codat-docs/issues/new?assignees=&labels=&projects=&template=issue-with-codat-docs.md&title=",
          label: "Issue with the docs?",
          target: "_blank",
          rel: null,
        },
      ],
      className: "navbar__link--support",
    },
    {
      href: "https://app.codat.io/",
      label: "Sign in",
      className: "navbarButton secondary",
      position: "right",
    },
  ],
}
