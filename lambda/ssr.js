import fs from 'node:fs/promises'

export default async function handler(req, res) {
	const { url } = req
	const template = await fs.readFile(`../dist/client/index.html`, 'utf-8')
	const manifest = await fs.readFile(
		`../dist/client/ssr-manifest.json`,
		'utf-8'
	)

	const render = (await import(`../dist/server/entry-server.js`)).render

	const appHtml = await render(url, manifest)

	console.log(`URL`, url)
	console.log(`Template`, template)
	const html = template
		.replace(`<!--app-head-->`, appHtml.head ?? '')
		.replace(`<!--app-html-->`, appHtml.html ?? '')

	res.setHeader(`Content-Type`, 'text/html')
	res.end(html)
}
