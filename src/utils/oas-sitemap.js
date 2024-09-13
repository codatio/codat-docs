const bankFeeds = require("../../static/oas/Codat-Bank-Feeds.json")
const lending = require("../../static/oas/Codat-Lending.json")
const sfc = require("../../static/oas/Codat-Sync-Commerce.json")
const sfe = require("../../static/oas/Codat-Sync-Expenses.json")
const sfp = require("../../static/oas/Codat-Sync-Payables-v1.json")
const billPay = require("../../static/oas/Codat-Sync-Payables.json")
const platform = require("../../static/oas/Codat-Platform.json")

//https://docs.codat.io/accounting-api/

const cruds = [
	'get', 
	'post', 
	'put', 
	'patch', 
	'delete'
]

const generatePath = (prefix, id) => {
	const url = `${prefix}#/operations/${id}`

	const siteRecord = `<url>
		<loc>${url}</loc>
		<changefreq>weekly</changefreq>
		<priority>0.5</priority>
	</url>
	`

	//console.log(url)

	return siteRecord
}

const generateAPISitemap = (ref, prefix) => {
	const arr = []
	const paths = ref.paths
	
	Object.keys(paths)
		.forEach(path => arr.push(
			cruds.forEach(crud => {
				const endpoint = paths[path][crud]
				if(!!endpoint) {
					arr.push(generatePath(prefix, endpoint.operationId))
				}
			})
		))

	return arr.join('')
}


const generateAPISitemaps = () => {
	const refs = [
		[ bankFeeds, 'https://docs.codat.io/bank-feeds-api' ],
		[ lending, 'https://docs.codat.io/lending-api' ],
		[ sfc, 'https://docs.codat.io/sync-for-commerce-api' ],
		[ sfe, 'https://docs.codat.io/sync-for-expenses-api' ],
		[ sfp, 'https://docs.codat.io/sync-for-payables-api' ],
		[ billPay, 'https://docs.codat.io/sync-for-payables-v2-api' ],
		[ platform, 'https://docs.codat.io/platform-api' ],
	]


	const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
	${refs.map(ref => generateAPISitemap(ref[0], ref[1]))}
</urlset>
		`

	console.log(sitemap)
	return sitemap
}

return generateAPISitemaps()