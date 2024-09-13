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

	return url
}

const generateAPISitemap = (ref, prefix) => {
	const arr = []
	const paths = ref.paths
	
	Object.keys(paths)
		.forEach(path => cruds.forEach(crud => {
			const endpoint = paths[path][crud]
			if(!!endpoint) {
				arr.push(generatePath(prefix, endpoint.operationId))
			}
		}))

	return arr
}


const generateAPISitemaps = () => {
	const refs = [
		[ bankFeeds, '/bank-feeds-api' ],
		[ lending, '/lending-api' ],
		[ sfc, '/sync-for-commerce-api' ],
		[ sfe, '/sync-for-expenses-api' ],
		[ sfp, '/sync-for-payables-api' ],
		[ billPay, '/sync-for-payables-v2-api' ],
		[ platform, '/platform-api' ],
	]

	const refMaps = refs.map(ref => {
		return generateAPISitemap(ref[0], ref[1])
	})

	const sitemap = [].concat(...refMaps);

// 	const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
// 	${refs.map(ref => generateAPISitemap(ref[0], ref[1]))}
// </urlset>
// 		`

	//console.log(sitemap)

	return sitemap
}

module.exports = { generateAPISitemaps }