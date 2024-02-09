module.exports = [
  "auth-flow/authorize-embedded-link",
  {
    type: "category",
    label: "Customize",
    collapsed: true,
    items: [
      "auth-flow/customize/sdk-customize-code",
      "auth-flow/customize/customize-link",
      "auth-flow/customize/branding",
      "auth-flow/customize/set-up-redirects",
    ],
  },
  "auth-flow/customize/use-openid-connect",
  "auth-flow/optimize/connection-management",
  {
    type: "category",
    label: "Optimize",
    collapsed: true,
    items: [
      "auth-flow/optimize/optimize-the-connection-journey",
      "auth-flow/optimize/monitor-auth-flow",
      "auth-flow/optimize/funnel",
      "auth-flow/optimize/value-exchange",
      "auth-flow/optimize/privacy",
      "auth-flow/optimize/platform-selection",
    ],
  },
  {
    type: "link",
    label: "Try our auth flow",
    href: "https://sdk-link.vercel.app/",
  },
  {
    type: "link",
    label: "See examples",
    href: "https://github.com/codatio/sdk-link/tree/main/examples",
  },
];
