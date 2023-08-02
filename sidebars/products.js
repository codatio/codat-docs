module.exports  =[ 
  {
    type: "link",
    label: "Lending",
    className: "top-level-item products product lending",
    customProps: {
      hr: true,
    },
    href: "lending/overview",
    // link: {
    //   type: 'doc',
    //   id: "lending/overview",
    // },
    // items: lending,
  },
  {
    type: "link",
    label: "Bank Feeds",
    className: "top-level-item products product bankfeed",
    href: "/bank-feeds-api/overview",
    // collapsed: true,
    // link: {
    //   type: 'doc',
    //   id: "bank-feeds/overview",
    // },
    // items: bankfeeds,
  },
  {
    type: "link",
    label: "Sync for Commerce",
    className: "top-level-item products product sfc",
    href: "/commerce/overview",
  },
  // {
  //   type: "category",
  //   label: "Sync for Commerce",
  //   collapsed: true,
  //   className: "top-level-item products",
  //   link: {
  //     type: 'doc',
  //     id: "commerce/overview",
  //   },
  //   items: sfc,
  // },
  {
    type: "link",
    label: "Sync for Expenses",
    className: "top-level-item products product sfe",
    href: "expenses/overview",
    // link: {
    //   type: 'doc',
    //   id: "expenses/overview",
    // },
    // items: sfe,
  },
  {
    type: "link",
    label: "Sync for Payables",
    className: "top-level-item products product sfpayables",
    href: "payables/overview",
    // link: {
    //   type: 'doc',
    //   id: "payables/overview",
    // },
    // items: payables,
  },
  {
    type: "link",
    label: "Sync for Payroll",
    className: "top-level-item products product sfpayroll",
    href: "sync-for-payroll/overview",
    // link: {
    //   type: 'doc',
    //   id: "sync-for-payroll/overview",
    // },
    // items: sfp,
  },
];