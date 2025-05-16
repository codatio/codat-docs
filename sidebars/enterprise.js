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
      {
        type: "category",
        label: "Architecture",
        items: [
          "enterprise/tech-overview/architecture/overview",
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
      "enterprise/tech-implementation/consent-journey",
      "enterprise/tech-implementation/implementation-roles",
      "enterprise/tech-implementation/implementation-workstreams",
      "enterprise/tech-implementation/managing-platform-credentials",
      "enterprise/tech-implementation/multiple-use-cases",
    ],
    label: "Technical implementation",
  },
];
