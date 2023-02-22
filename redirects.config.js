module.exports = {
  redirects: [
    {
      to:  '/introduction/first-steps',
      from: '/docs',
    },
    {
      to:  '/introduction/first-steps',
      from: '/docs/guide-1',
    },
    {
      to:  '/introduction/first-steps',
      from: '/docs/get-started',
    },
    {
      to:  '/introduction/create-account',
      from: '/docs/core-account-signup',
    },
    {
      to:  '/using-the-api/overview',
      from: '/docs/using-codats-api',
    },
    {
      to:  '/using-the-api/authentication',
      from: '/reference/authentication',
    },
    {
      to:  '/using-the-api/querying',
      from: '/reference/querying',
    },
    {
      to:  '/using-the-api/paging',
      from: '/reference/paging',
    },
    {
      to:  '/using-the-api/ordering-results',
      from: '/reference/ordering-results',
    },
    {
      to:  '/using-the-api/modified-dates',
      from: '/reference/modified-dates-1',
    },
    {
      to:  '/using-the-api/managing-companies',
      from: '/reference/managing-companies-1',
    },
    {
      to:  '/using-the-api/queueing-data-syncs',
      from: '/reference/queueing-data-syncs-1',
    },
    {
      to:  '/using-the-api/errors',
      from: '/reference/errors',
    },
    {
      to:  '/using-the-api/push',
      from: '/reference/push-creating-and-updating-data',
    },
    {
      to:  '/using-the-api/rate-limits',
      from: '/reference/rate-limits-1',
    },
    {
      to:  '/using-the-api/optimizing-api-calls',
      from: '/reference/optimizing-your-api-calls-1',
    },
    // Changelog - remove soon
    {
      to: '/updates/220817-sage-50-soft-deletion',
      from: '/changelog/41921-sage-50-deleted-payment-on-accounts-soft-deleted',
    },
    {
      to: '/updates/220826-wbo-invoice-push',
      from: '/changelog/42327-qbo-change-to-invoice-push-validation',
    },
    {
      to: '/updates/220817-qbd-refs',
      from: '/changelog/42998-qbd-push-validation-accountref-itemref',
    },
    {
      to: '/updates/220825-string-request-deprecation',
      from: '/changelog/44714-deprecation-string-request-create-connections-endpoint',
    },
    {
      to: '/updates/220926-freshbooks-expenses',
      from: '/changelog/upcoming-2023-01-10-freshbooks-expenses-no-longer-fetched-as-bills-and-bill-payments',
    },
    {
      to: '/updates/221003-quickbooks-online',
      from: '/changelog/upcoming-2023-01-10-quickbooks-online-purchases-will-no-longer-be-fetched-as-bills-and-bill-payments',
    },
    {
      to: '/updates/230131-uat-deprecation',
      from: '/changelog/upcoming-2023-01-31-deprecation-of-uat-environment',
    },
    {
      to: '/updates/230411-deletion-of-data',
      from: '/changelog/upcoming-2023-04-10-changes-to-handling-of-deleted-data',
    },
    {
      to: '/updates/230411-api-keys',
      from: '/changelog/upcoming-2023-04-10-deprecation-of-api-key-management',
    },
    {
      to: '/updates/230411-legacy-bank-account-endpoints',
      from: '/changelog/upcoming-2023-04-10-deprecation-of-legacy-bank-account-endpoints'
    },
    {
      to:  '/updates',
      from: '/changelog',
    },
  ],
  createRedirects(existingPath) {
    if (existingPath.includes('/docs/banking-')) {
      console.log(existingPath)
      // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
      return [
        existingPath.replace('/', '/docs'),
      ];
    }
    if (existingPath.includes('/docs')) {
      // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
      return [
        existingPath.replace('/', '/docs'),
      ];
    }
    
    return undefined; // Return a falsy value: no redirect created
  },
};