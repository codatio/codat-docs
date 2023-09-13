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
          href: "/bank-feeds-api",
          label: "Bank Feeds API",
        },
        {
          href: "/lending-api",
          label: "Lending API",
        },
        {
          href: "/sync-for-commerce-api",
          label: "Sync for Commerce",
        },
        {
          href: "/sync-for-expenses-api",
          label: "Sync for Expenses",
        },
        {
          href: "/sync-for-payables-api",
          label: "Sync for Payables",
        },
        {
          href: "/sync-for-payroll-api",
          label: "Sync for Payroll",
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
          href: "https://github.com/orgs/codatio/discussions",
          label: "Forum",
          target: "_blank",
          rel: null,
        },
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
          href: "https://github.com/orgs/codatio/discussions/new?category=q-a",
          label: "Ask the community",
          target: "_blank",
          rel: null,
        },
        {
          href: "https://cochat.codat.io/",
          label: "Ask Cochat AI",
          target: "_blank",
          rel: null,
        },
        {
          href: "https://bit.ly/codatstatus",
          label: "API status",
          target: "_blank",
          rel: null,
        },
        {
          href: "https://github.com/codatio/codat-docs/issues/new",
          label: "Issue with the docs?",
          target: "_blank",
          rel: null,
        },
      ],
      className: "navbar__link--support",
    },
    {
      href: "https://app.codat.io/",
      label: "Portal",
      className: "navbarButton secondary",
      position: "right"
    },
    {
      href: "https://signup.codat.io/",
      label: "Sign up",
      className: "navbarButton primary",
      position: "right"
    },
  ],
}
