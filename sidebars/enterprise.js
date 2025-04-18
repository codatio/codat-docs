module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Enterprise",
    id: "enterprise/overview",
    className: "header",
  },
  {
    type: "category",
    customProps: {
      hr: true,
    },
    items: [
      "enterprise/tech-overview/intro",
      {
        type: "category",
        label: "Architecture",
        items: [
          "enterprise/tech-overview/architecture/overview",
          "enterprise/tech-overview/architecture/api",
          "enterprise/tech-overview/architecture/data-flow",
          "enterprise/tech-overview/architecture/rate-limits",
          "enterprise/tech-overview/architecture/webhooks",
          "enterprise/tech-overview/architecture/shared-responsibility-model",
        ],
      },
      {
        type: "category",
        label: "Security",
        items: [
          "enterprise/tech-overview/security/data-security",
          "enterprise/tech-overview/security/network-security",
          "enterprise/tech-overview/security/api-mTLS",
          "enterprise/tech-overview/security/sso",
        ],
      },
    ],
    label: "Technology overview",
  },
  {
    type: "category",
    items: [
      "enterprise/tech-implementation/getting-started",
      {
        type: "category",
        label: "Consent journey",
        items: [
          "enterprise/tech-implementation/consent/overview",
          "enterprise/tech-implementation/consent/build",
          "enterprise/tech-implementation/consent/considerations",
          "enterprise/tech-implementation/consent/lifecyle",
          "enterprise/tech-implementation/consent/uiexamples",
        ],
      },
      "enterprise/tech-implementation/implementation-roles",
      "enterprise/tech-implementation/implementation-workstreams",
      "enterprise/tech-implementation/managing-platform-credentials",
      "enterprise/tech-implementation/syncing-data",
      "enterprise/tech-implementation/data-types",
    ],
    label: "Technical implementation",
  },
];
