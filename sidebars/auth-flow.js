module.exports = [
  "auth-flow/authorize-embedded-link",
  {
    type: "category",
    label: "Customize flow",
    collapsed: true,
    items: [
      "auth-flow/customize/customize-link",
      "auth-flow/customize/branding",
      "auth-flow/customize/sdk-customize-code",
    ],
  },
  "auth-flow/optimize/connection-management",
  "auth-flow/optimize/monitor-auth-flow",
  {
    type: "category",
    label: "Optimize flow",
    collapsed: true,
    items: [
      "auth-flow/optimize/optimize-the-connection-journey",
      "auth-flow/customize/use-openid-connect",
      "auth-flow/optimize/funnel",
      "auth-flow/optimize/value-exchange",
      "auth-flow/optimize/privacy",
      "auth-flow/optimize/platform-selection",
    ],
  },
  {
    type: "link",
    label: "See the demo",
    href: "https://sdk-link.vercel.app/",
  },
  {
    type: "link",
    label: "See examples",
    href: "https://github.com/codatio/sdk-link/tree/main/examples",
  },
];
