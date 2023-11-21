export const integrationsFilterPayroll = [
	"Oracle NetSuite",
  "QuickBooks Online",
  "Sage Intacct",
  "Xero",
  "Sage Business Cloud Accounting",
  "Dynamics 365 Business Central",
]

export const integrationsFilterExpenses = [
  "QuickBooks Online",
  "Xero",
  "Oracle NetSuite",
  "Dynamics 365 Business Central",
]

export const integrationsFilterCommerceAcc = [
  "Exact Online",
  "FreeAgent",
  "MYOB Business",
  "QuickBooks Online",
  "Xero",
]

export const integrationsFilterCommerceComm = [
  "Clover",
  "Lightspeed Restaurant",
  "Shopify",
  "Zettle",
]

export const integrationsFilterPayables = [
  "MYOB Business",
  "Oracle NetSuite",
  "QuickBooks Desktop",
  "QuickBooks Online",
//  "Sage Business Cloud Accounting",
  "Sage Intacct",
  "Xero",
];

export const bankfeedsIntegrations = [
  {
    "name": "QuickBooks Online bank feeds",
    "to": "/integrations/bank-feeds/qbo-bank-feeds/",
    "sourceType": "bankfeeds",
    "img": "https://static.codat.io/public/officialLogos/Square/19EEFA32-58A8-4097-B95A-EF150BF24FA0.png",
    "tags": ["US", "Canada"],
  },
  {
    "name": "Oracle NetSuite bank feeds",
    "to": "/integrations/bank-feeds/netsuite-bank-feeds/netsuite-bank-feeds-setup",
    "sourceType": "bankfeeds",
    "img": "https://static.codat.io/public/officialLogos/Square/9815B998-024D-4415-A40B-89903B2CAD6F.png"
  },
  {
    "name": "Sage bank feeds",
    "to": "/integrations/bank-feeds/sage-bank-feeds/",
    "sourceType": "bankfeeds",
    "img": "https://static.codat.io/public/officialLogos/Square/177D08A5-97F1-4442-80D7-D62E400A28DB.png",
  },
  {
    "name": "Xero bank feeds",
    "to": "/integrations/bank-feeds/xero-bank-feeds/",
    "sourceType": "bankfeeds",
    "img": "https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png",
  },
  {
    "name": "FreeAgent bank feeds",
    "to": "/integrations/accounting/freeagent/accounting-freeagent",
    "sourceType": "bankfeeds",
    "img": "https://static.codat.io/public/officialLogos/Square/3DA57C23-A4FA-4BC8-8C02-A7A686ED8B36.png",
  },
]

export const bankfeedsInternalMappingIntegrations = [
  {
    "name": "Oracle NetSuite bank feeds",
    "to": "/integrations/bank-feeds/netsuite-bank-feeds/netsuite-bank-feeds-setup",
    "sourceType": "bankfeeds",
    "img": "https://static.codat.io/public/officialLogos/Square/9815B998-024D-4415-A40B-89903B2CAD6F.png"
  },
  {
    "name": "Xero bank feeds",
    "to": "/integrations/bank-feeds/xero-bank-feeds/",
    "type": "bankfeeds",
    "img": "https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png",
  },
  {
    "name": "FreeAgent bank feeds",
    "to": "/integrations/accounting/freeagent/accounting-freeagent",
    "type": "bankfeeds",
    "img": "https://static.codat.io/public/officialLogos/Square/3DA57C23-A4FA-4BC8-8C02-A7A686ED8B36.png",
  },
]


export const payrollIntegrations = [
	{
		"name": "Oracle NetSuite",
		"to": "/integrations/accounting/netsuite/accounting-netsuite",
		"type": "accounting",
		"tags": [
			"Premium"
		],
		"img": "https://static.codat.io/public/officialLogos/Square/9815B998-024D-4415-A40B-89903B2CAD6F.png"
	},
	{
		"name": "QuickBooks Online",
		"to": "/integrations/accounting/quickbooksonline/accounting-quickbooksonline",
		"type": "accounting",
		"img": "https://static.codat.io/public/officialLogos/Square/19EEFA32-58A8-4097-B95A-EF150BF24FA0.png"
	},
	{
		"name": "Sage Intacct",
		"to": "/integrations/accounting/sage-intacct/accounting-sage-intacct",
		"type": "accounting",
		"tags": [
			"Premium"
		],
		"img": "https://static.codat.io/public/officialLogos/Square/177D08A5-97F1-4442-80D7-D62E400A28DB.png"
	},
	{
		"name": "Xero",
		"to": "/integrations/accounting/xero/accounting-xero",
		"type": "accounting",
		"img": "https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png"
	},
  {
    "name": "Sage Business Cloud Accounting",
    "to": "/integrations/accounting/sagebusinesscloud/accounting-sagebusinesscloud",
    "type": "accounting",
    "tags": ["UK", "US", "Ireland", "Canada", "France", "Germany", "Spain"],
    "img": "https://static.codat.io/public/officialLogos/Square/177D08A5-97F1-4442-80D7-D62E400A28DB.png"
  },
  {
    "name": "Dynamics 365 Business Central",
    "to": "/integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral",
    "type": "accounting",
    "tags": ["Premium"],
    "img": "https://static.codat.io/public/officialLogos/Square/6B579544-0E46-4F02-B343-578CE5C3C6CC.png"
  }
]

export const sfeIntegrations = [
  {
    "name": "QuickBooks Online",
    "to": "/integrations/accounting/quickbooksonline/accounting-quickbooksonline",
    "type": "Sync For Expenses",
    "img": "https://static.codat.io/public/officialLogos/Square/19EEFA32-58A8-4097-B95A-EF150BF24FA0.png"
  },
  {
    "name": "Xero",
    "to": "/integrations/accounting/xero/accounting-xero",
    "type": "Sync For Expenses",
    "img": "https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png"
  },
  {
    "name": "Oracle NetSuite",
    "to": "/integrations/accounting/netsuite/accounting-netsuite",
    "type": "Sync For Expenses",
    "tags": ["Credit Cards only"],
    "img": "https://static.codat.io/public/officialLogos/Square/9815B998-024D-4415-A40B-89903B2CAD6F.png"
  },
  {
    "name": "Dynamics 365 Business Central",
    "to": "/integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral",
    "type": "Sync For Expenses",
    "tags": ["Payments, Refund, Chargeback & Rewards only"],
    "img": "https://static.codat.io/public/officialLogos/Square/6B579544-0E46-4F02-B343-578CE5C3C6CC.png"
  }
]

export const sfcaccIntegrations = [
  {
    "name": "Exact Online",
    "to": "/integrations/accounting/exact-online/accounting-exact-online",
    "type": "accounting",
    "tags": ["NL", "UK"],
    "img": "https://static.codat.io/public/officialLogos/Square/B0FF8466-1421-415B-A551-1DC3B73006F4.png"
  },
  {
    "name": "FreeAgent",
    "to": "/integrations/accounting/freeagent/accounting-freeagent",
    "type": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/3DA57C23-A4FA-4BC8-8C02-A7A686ED8B36.png"
  },
  {
    "name": "MYOB Business",
    "to": "/integrations/accounting/myob/accounting-myob",
    "type": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/00812DF4-8A0F-4F06-9566-16E5CA1346AE.png"
  },
  {
    "name": "QuickBooks Online",
    "to": "/integrations/accounting/quickbooksonline/accounting-quickbooksonline",
    "type": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/19EEFA32-58A8-4097-B95A-EF150BF24FA0.png"
  },
  {
    "name": "Xero",
    "to": "/integrations/accounting/xero/accounting-xero",
    "type": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png"
  }
]

export const sfccommIntegrations = [
  {
    "name": "Clover",
    "to": "/integrations/commerce/clover/commerce-clover",
    "type": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/83A4EF46-A57D-4D2A-ACE7-39FE279F43F8.png"
  },
  {
    "name": "Lightspeed Restaurant",
    "to": "/integrations/commerce/lightspeed-k/commerce-lightspeed-k",
    "type": "commerce",
    "tags": ["K Series"],
    "img": "https://static.codat.io/public/officialLogos/Square/E221662A-DDA4-45E0-8F73-5563183A875A.png"
  },
  {
    "name": "Shopify",
    "to": "/integrations/commerce/shopify/commerce-shopify",
    "type": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/853B004F-3A02-4A73-A13F-3EDED3D2F361.png"
  },
  {
    "name": "Zettle",
    "to": "/integrations/commerce/zettle/commerce-zettle",
    "type": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/CE91071B-51BF-4A9E-91A2-4D2ECA672A56.png"
  }
]

export const bankingIntegrations = [
  {
    "name": "Plaid",
    "to": "/integrations/banking/plaid/banking-plaid",
    "sourceType": "banking",
    "img": "https://static.codat.io/public/officialLogos/Square/46EE0089-DC88-405A-9667-9FB3D9976F19.png"
  },
  {
    "name": "TrueLayer",
    "to": "/integrations/banking/truelayer/banking-truelayer",
    "sourceType": "banking",
    "img": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiM0MjY5OTIiLz4KPHBhdGggZD0iTTExLjEyNDMgMzEuNTEwMUwyMi45MzQgMzguMDk3OUMyMy4yMDQgMzguMjk0MyAyMy41MjkzIDM4LjQwMDEgMjMuODYzMiAzOC40MDAxQzI0LjE5NzEgMzguNDAwMSAyNC41MjI0IDM4LjI5NDMgMjQuNzkyNCAzOC4wOTc5TDM3LjMyNjkgMzEuMDU0OEMzNy43NjM2IDMwLjc3NiAzOC4wNzAzIDMwLjU1MyAzOC4wNzAzIDMwLjA1MTNDMzguMDU4MyAyOS44NjQ2IDM3Ljk5NTcgMjkuNjg0NyAzNy44ODkzIDI5LjUzMDlDMzcuNzgyOSAyOS4zNzcgMzcuNjM2NyAyOS4yNTUgMzcuNDY2MyAyOS4xNzc4TDM0LjEwMjcgMjYuOTc1N0wzNy4zMDgzIDI1LjE2MzhDMzcuNjA3NyAyNS4wMjY3IDM3Ljg2NTMgMjQuODEyNSAzOC4wNTQ3IDI0LjU0MzFDMzguMjQ0MSAyNC4yNzM3IDM4LjM1ODUgMjMuOTU4OCAzOC4zODYyIDIzLjYzMDdWMTguNzQzMkMzOC40MjgzIDE4LjM1NjcgMzguMzQ0MyAxNy45NjY4IDM4LjE0NjcgMTcuNjMxOUMzNy45NDkxIDE3LjI5NyAzNy42NDg1IDE3LjAzNDkgMzcuMjg5OCAxNi44ODQ5QzM3LjI4OTggMTYuODg0OSAyNC45ODc1IDkuOTYyNTYgMjQuOTg3NSA5Ljk2MjU2QzI0LjY1MTQgOS43MjY2NiAyNC4yNTA3IDkuNjAwMSAyMy44NCA5LjYwMDFDMjMuNDI5MyA5LjYwMDEgMjMuMDI4NiA5LjcyNjY2IDIyLjY5MjUgOS45NjI1NkwxMC4zODA5IDE2Ljk3NzhDMTAuMTY0NyAxNy4wODgxIDkuOTgyODMgMTcuMjU1NiA5Ljg1NTA2IDE3LjQ2MkM5LjcyNzI5IDE3LjY2ODQgOS42NTg1MSAxNy45MDU4IDkuNjU2MTcgMTguMTQ4NkM5LjY1NjE3IDE4Ljc0MzIgMTAuMjg4IDE5LjE5ODUgMTAuMzgwOSAxOS4yNzI5TDEzLjU4NjYgMjEuMTMxMkwxMC4xOTUxIDIzLjE0NzVDMTAuMDM0NSAyMy4yNDcyIDkuODk5NTUgMjMuMzgzMyA5LjgwMTExIDIzLjU0NDdDOS43MDI2NyAyMy43MDYgOS42NDM0NyAyMy44ODgzIDkuNjI4MjkgMjQuMDc2N1YyNC4wNzY3QzkuNjI4MjkgMjQuMzQ2MiA5LjYyODI5IDI4Ljc5NjkgOS42MjgyOSAyOC43OTY5QzkuNTQ0NDUgMjkuMzUwNyA5LjY0NTYgMjkuOTE2NyA5LjkxNjA1IDMwLjQwNzJDMTAuMTg2NSAzMC44OTc3IDEwLjYxMTIgMzEuMjg1NCAxMS4xMjQzIDMxLjUxMDFWMzEuNTEwMVpNMzUuODU4OCAzMC4xMzQ5TDIzLjg2MzIgMzYuNzIyN0wxMi4yNzY0IDMwLjMyMDdMMTUuOTAwMiAyOC4yODU4TDIzLjQyNjUgMzIuNTA0M0MyMy41NTYyIDMyLjU2OTYgMjMuNjk5NCAzMi42MDM3IDIzLjg0NDYgMzIuNjAzN0MyMy45ODk5IDMyLjYwMzcgMjQuMTMzMSAzMi41Njk2IDI0LjI2MjggMzIuNTA0M0wzMi4zOTMgMjcuODU4NEwzNS44NTg4IDMwLjEzNDlaTTM2Ljg2MjMgMjMuMTE5NkwzMy42Mjg4IDIxLjE3NzdMMzYuODYyMyAxOS4zMTkzVjIzLjExOTZaTTI0Ljc4MzEgMTEuNzc0NEwzNS43ODQ1IDE4LjEwMjFMMzIuMTYwNyAyMC4yNzY0TDI0LjcyNzMgMTUuODUzNUwyNC43ODMxIDExLjc3NDRaTTIzLjg1MzkgMTcuMjI4N0wzMC41NTMzIDIxLjIyNDFMMjMuODUzOSAyNS4wMDU5TDE3LjAxNTIgMjEuMTMxMkwyMy44ODE4IDE3LjIyODdIMjMuODUzOVpNMTEuNzA5NiAxOC4xNDg2TDIyLjk4MDUgMTEuNzc0NFYxNS44NTM1TDE1LjE1NjkgMjAuMTkyOEwxMS43MDk2IDE4LjE0ODZaTTE1LjI2ODQgMjIuMTE2MUwyMy40MjY1IDI2LjY5N0MyMy41NTk4IDI2Ljc2NyAyMy43MDggMjYuODAzNSAyMy44NTg2IDI2LjgwMzVDMjQuMDA5MSAyNi44MDM1IDI0LjE1NzQgMjYuNzY3IDI0LjI5MDYgMjYuNjk3TDMyLjExNDMgMjIuMTE2MUwzNS42NDUxIDI0LjIyNTRMMjMuODQ0NiAzMC44MDM5TDExLjg0OSAyNC4wMzk1TDE1LjI2ODQgMjIuMTE2MVpNMTEuMTcwNyAyNS41NzI3TDE0LjMzOTIgMjcuMzM4MUwxMS4xNzA3IDI5LjExMjhWMjUuNTcyN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
  },
  {
    "name": "Basiq",
    "to": "/integrations/banking/basiq/banking-basiq-setup",
    "sourceType": "banking",
    "tags": ["AU", "NZ"],
    "img": "https://static.codat.io/public/officialLogos/Square/BDD831CE-EEBD-4896-89A7-20E5EE8989EE.png"
  },
]

export const commerceIntegrations = [
  {
    "name": "Amazon Seller Central",
    "to": "/integrations/commerce/amazon-seller-central/commerce-amazon-seller-central",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/53E2D8F7-CF70-4AFC-B1F2-CFBE093993F4.png"
  },
  {
    "name": "BigCommerce",
    "to": "/integrations/commerce/bigcommerce/commerce-bigcommerce",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/DD243090-2039-42FC-8A37-8877988909FF.png"
  },
  {
    "name": "Clover",
    "to": "/integrations/commerce/clover/commerce-clover",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/83A4EF46-A57D-4D2A-ACE7-39FE279F43F8.png"
  },
  {
    "name": "Lightspeed Restaurant",
    "to": "/integrations/commerce/lightspeed-k/commerce-lightspeed-k",
    "sourceType": "commerce",
    "tags": ["K Series"],
    "img": "https://static.codat.io/public/officialLogos/Square/E221662A-DDA4-45E0-8F73-5563183A875A.png"
  },
  {
    "name": "Mollie",
    "to": "/integrations/commerce/mollie/commerce-mollie",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/EFABBC64-03F5-407E-9FBC-C65B1FA7A353.png"
  },
  {
    "name": "PayPal",
    "to": "/integrations/commerce/paypal/commerce-paypal",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/1E34C065-5F50-4FAE-BC9D-7C45E4C88CE8.png"
  },
  {
    "name": "PrestaShop",
    "to": "/integrations/commerce/prestashop/commerce-prestashop",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/5CE7FE65-799C-43C7-BC47-5D3F90B1940E.png"
  },
  {
    "name": "Shopify",
    "to": "/integrations/commerce/shopify/commerce-shopify",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/853B004F-3A02-4A73-A13F-3EDED3D2F361.png"
  },
  {
    "name": "Square",
    "to": "/integrations/commerce/square/commerce-square",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/8200A401-B700-4800-83EE-F9164EEAFBE8.png"
  },
  {
    "name": "Stripe",
    "to": "/integrations/commerce/stripe/commerce-stripe",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/9A96F326-226A-4E0F-923A-6758FDBA40CC.png"
  },
  {
    "name": "SumUp",
    "to": "/integrations/commerce/sumup/commerce-sumup",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/2DAD1D3F-094D-4E1A-9B46-246087632610.png"
  },
  {
    "name": "WooCommerce",
    "to": "/integrations/commerce/woocommerce/commerce-woocommerce",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/1FEB821A-CB05-4375-9B53-CD6367E9FB60.png"
  },
  {
    "name": "Zettle",
    "to": "/integrations/commerce/zettle/commerce-zettle",
    "sourceType": "commerce",
    "img": "https://static.codat.io/public/officialLogos/Square/CE91071B-51BF-4A9E-91A2-4D2ECA672A56.png"
  },
  {
    "name": "Chargebee",
    "to": "/integrations/commerce/chargebee/commerce-chargebee",
    "sourceType": "commerce",
    "tags": ["Subscription data"],
    "img": "data:image/png;base64,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"
  },
  {
    "name": "Maxio",
    "to": "/integrations/commerce/chargify/commerce-chargify",
    "sourceType": "commerce",
    "tags": ["Subscription data"],
    "img": "data:image/svg+xml,%3Csvg width='601' height='601' viewBox='0 0 601 601' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='600' transform='translate(0.0273438 0.820312)' fill='%23F0F4FA'/%3E%3Cpath d='M203.956 128.421L221.871 110.506V110.497L286.379 174.498V287.094H174.771L110.027 222.341L127.689 204.68L185.01 262.018H232.617L237.478 256.641L156.856 175.512L174.255 158.113L255.393 238.726L261.277 233.357V185.243L203.956 128.421Z' fill='black'/%3E%3Cpath d='M396.107 128.421L378.183 110.506V110.497L313.693 174.498V287.094H425.283L490.027 222.341L472.366 204.68L415.045 262.018H367.447L362.585 256.641L443.198 175.512L425.799 158.113L344.67 238.726L338.786 233.357V185.243L396.107 128.421Z' fill='black'/%3E%3Cpath d='M203.956 473.22L221.871 491.135L221.88 491.144L286.379 427.143V314.547H174.771L110.027 379.3L127.689 396.962L185.01 339.623H232.617L237.478 345L156.856 426.129L174.255 443.528L255.393 362.915L261.277 368.284V416.398L203.956 473.22Z' fill='black'/%3E%3Cpath d='M396.107 473.22L378.183 491.135L313.693 427.143V314.547H425.283L490.027 379.3L472.366 396.962L415.045 339.623H367.447L362.585 345L443.198 426.129L425.799 443.528L344.67 362.915L338.786 368.284V416.398L396.107 473.22Z' fill='black'/%3E%3C/svg%3E%0A"
  },
  {
    "name": "Recurly",
    "to": "/integrations/commerce/recurly/commerce-recurly",
    "sourceType": "commerce",
    "tags": ["Subscription data"],
    "img": "data:image/png;base64,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"
  },
]

export const accountingIntegrations = [
  {
    "name": "Clear Books",
    "to": "/integrations/accounting/clearbooks/accounting-clearbooks",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/C23CFE49-1C1B-49BD-9192-8280B281F0C0.png"
  },
  {
    "name": "Dynamics 365 Business Central",
    "to": "/integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral",
    "sourceType": "accounting",
    "tags": ["Premium"],
    "img": "https://static.codat.io/public/officialLogos/Square/6B579544-0E46-4F02-B343-578CE5C3C6CC.png"
  },
  {
    "name": "Exact Online",
    "to": "/integrations/accounting/exact-online/accounting-exact-online",
    "sourceType": "accounting",
    "tags": ["NL", "UK"],
    "img": "https://static.codat.io/public/officialLogos/Square/B0FF8466-1421-415B-A551-1DC3B73006F4.png"
  },
  {
    "name": "FreeAgent",
    "to": "/integrations/accounting/freeagent/accounting-freeagent",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/3DA57C23-A4FA-4BC8-8C02-A7A686ED8B36.png"
  },
  {
    "name": "FreshBooks",
    "to": "/integrations/accounting/freshbooks/accounting-freshbooks",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/C08D614F-CBA9-4D30-ADF8-DCCE4F6AE25D.png"
  },
  {
    "name": "KashFlow",
    "to": "/integrations/accounting/kashflow/accounting-kashflow",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/4E552E84-0E07-41B7-9B2D-14D5EEFD11B6.png"
  },
  {
    "name": "MYOB Business",
    "to": "/integrations/accounting/myob/accounting-myob",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/00812DF4-8A0F-4F06-9566-16E5CA1346AE.png"
  },
  {
    "name": "Oracle NetSuite",
    "to": "/integrations/accounting/netsuite/accounting-netsuite",
    "sourceType": "accounting",
    "tags": ["Premium"],
    "img": "https://static.codat.io/public/officialLogos/Square/9815B998-024D-4415-A40B-89903B2CAD6F.png"
  },
  {
    "name": "Pandle",
    "to": "/integrations/accounting/pandle/accounting-pandle",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/396C3158-5DD7-481B-A7C4-A795CA31792B.png"
  },
  {
    "name": "QuickBooks Desktop",
    "to": "/integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop",
    "sourceType": "accounting",
    "tags": ["Premium", "On-premise"],
    "img": "https://static.codat.io/public/officialLogos/Square/19EEFA32-58A8-4097-B95A-EF150BF24FA0.png"
  },
  {
    "name": "QuickBooks Online",
    "to": "/integrations/accounting/quickbooksonline/accounting-quickbooksonline",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/19EEFA32-58A8-4097-B95A-EF150BF24FA0.png"
  },
  {
    "name": "Sage 50",
    "to": "/integrations/accounting/sage50/accounting-sage50",
    "sourceType": "accounting",
    "tags": ["Premium", "On-premise", "UK", "Ireland"],
    "img": "https://static.codat.io/public/officialLogos/Square/177D08A5-97F1-4442-80D7-D62E400A28DB.png"
  },
  {
    "name": "Sage 200cloud",
    "to": "/integrations/accounting/sage200/accounting-sage200",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/177D08A5-97F1-4442-80D7-D62E400A28DB.png"
  },
  {
    "name": "Sage Business Cloud Accounting",
    "to": "/integrations/accounting/sagebusinesscloud/accounting-sagebusinesscloud",
    "sourceType": "accounting",
    "tags": ["UK", "US", "Ireland", "Canada", "France", "Germany", "Spain"],
    "img": "https://static.codat.io/public/officialLogos/Square/177D08A5-97F1-4442-80D7-D62E400A28DB.png"
  },
  {
    "name": "Sage Intacct",
    "to": "/integrations/accounting/sage-intacct/accounting-sage-intacct",
    "sourceType": "accounting",
    "tags": ["Premium"],
    "img": "https://static.codat.io/public/officialLogos/Square/177D08A5-97F1-4442-80D7-D62E400A28DB.png"
  },
  {
    "name": "Wave",
    "to": "/integrations/accounting/wave/accounting-wave",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/A28BD05E-21F0-4CD8-A907-1E0464CF8EC5.png"
  },
  {
    "name": "Xero",
    "to": "/integrations/accounting/xero/accounting-xero",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png"
  },
  {
    "name": "Zoho Books",
    "to": "/integrations/accounting/zoho-books/accounting-zoho-books",
    "sourceType": "accounting",
    "img": "https://static.codat.io/public/officialLogos/Square/42C00468-A250-4355-9723-42E2DF730D77.png"
  },
]

export const allIntegrations = [
  ...accountingIntegrations,
  ...bankingIntegrations,
  ...commerceIntegrations,
  ...bankfeedsIntegrations,
]
