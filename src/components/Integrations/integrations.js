export const integrationsFilterCustomData = [
//	"BigCommerce",
//  "FreeAgent",
  "MYOB Business",
  "Oracle NetSuite",
  "QuickBooks Online",
//  "Sage Intacct",
  "Xero",
]

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
  "QuickBooks Desktop",
  "FreeAgent"
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

export const integrationsFilterSupplierEnablement = [
  "FreeAgent",
  "FreshBooks",
  "Dynamics 365 Business Central",
  "Exact Online",
  "MYOB Business",
  "Oracle NetSuite",
  "QuickBooks Desktop",
  "QuickBooks Online",
  "Sage 200 Standard",
  "Sage 50",
  "Sage Business Cloud Accounting",
  "Sage Intacct",
  "Xero",
];

export const integrationsFilterBillPayKit = [
  "Xero",
  "QuickBooks Online",
  "FreeAgent",
  "Oracle NetSuite"
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
  {
    "name": "Exact Online (NL) bank feeds",
    "to": "/integrations/accounting/exact-online/accounting-exact-online",
    "sourceType": "bankfeeds",
    "img": "https://static.codat.io/public/officialLogos/Square/BF8A9736-7133-4F03-BBDE-D328714887C8.png",
  }
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
  {
  "name": "Exact Online (NL) bank feeds",
  "to": "/integrations/accounting/exact-online/accounting-exact-online",
  "sourceType": "bankfeeds",
  "img": "https://static.codat.io/public/officialLogos/Square/BF8A9736-7133-4F03-BBDE-D328714887C8.png",
  }
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
]

export const accountingIntegrations = [
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
    "name": "Sage 200 Standard",
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
