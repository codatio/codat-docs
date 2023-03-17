module.exports = [
  "auth-flow/overview",
  {
    type: "category",
    label: "Authorize with Embedded Link",
    collapsed: true,
    items: [
      "auth-flow/authorize-embedded-link",
      {
        type: "link",
        label: "Link SDK",
        href: "https://www.npmjs.com/package/@codat/link-sdk",
      },
      {
        type: "link",
        label: "Sample project",
        href: "https://github.com/codatio/link-sdk-sample-project",
      },
    ],
  },
  {
    type: "category",
    label: "Authorize with Hosted Link",
    collapsed: true,
    items: [
      "auth-flow/authorize-hosted-link",
      {
        type: "link",
        label: "Demo",
        href: "https://links.codat.io/client/873ff19e-6fe0-47b0-a4e1-e19f344c78f6?user=8ee6c557-949c-40a8-b31d-e1fa02ef7fbc",
      },
    ],
  },
  {
    type: "category",
    label: "Customize your auth flow",
    collapsed: true,
    items: [
      "auth-flow/customize/customize-link",
      "auth-flow/customize/branding",
      "auth-flow/customize/set-up-redirects",
      "auth-flow/customize/set-up-webhooks",
      "auth-flow/customize/use-openid-connect",
    ],
  },
  {
    type: "category",
    label: "Build your own auth flow",
    collapsed: true,
    items: [
      "auth-flow/build/build-your-own-authorization-journey",
      {
        type: "link",
        label: "Demo",
        href: "https://codat-dev-link-demo.azurewebsites.net/home",
      },
      "auth-flow/build/faqs",
    ],
  },
  {
    type: "category",
    label: "Optimize your auth flow",
    collapsed: true,
    items: [
      "auth-flow/optimize/monitor-auth-flow",
      "auth-flow/optimize/optimize-the-connection-journey",
      "auth-flow/optimize/funnel",
      "auth-flow/optimize/value-exchange",
      "auth-flow/optimize/privacy",
      "auth-flow/optimize/platform-selection",
      "auth-flow/optimize/connection-management",
    ],
  },
];
