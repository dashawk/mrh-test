import { createStaticHandler } from '@remix-run/router'
import { StrictMode } from 'react'
import ReactDOMServer from 'react-dom/server'

import {
	createStaticRouter,
	StaticRouterProvider
} from 'react-router-dom/server'
import { routes } from '@/routes'

export async function render(request) {
	let { query } = createStaticHandler(routes)
	let remixRequest = createFetchRequest(request)
	let context = await query(remixRequest)

	if (context instanceof Response) {
		throw context
	}

	let router = createStaticRouter(routes, context)

	const html = ReactDOMServer.renderToString(
		<StrictMode>
			<StaticRouterProvider
				router={router}
				context={context}
				nonce='react-nonce'
			/>
		</StrictMode>
	)
	return { html }
}

export function createFetchRequest(req) {
	let origin = `${req.protocol}://${req.get('host')}`
	let url = new URL(req.originalUrl || req.url, origin)

	let controller = new AbortController()

	req.on('close', () => {
		controller.abort()
	})

	let init = {
		method: req.method,
		headers: createFetchHeaders(req.headers),
		signal: controller.signal
	}

	if (req.method !== 'GET' && req.method !== 'HEAD') {
		init.body = req.body
	}

	return new Request(url.href, init)
}

export function createFetchHeaders(requestHeaders) {
	let headers = new Headers()

	for (let [key, values] of Object.entries(requestHeaders)) {
		if (values) {
			if (Array.isArray(values)) {
				for (let value of values) {
					headers.append(key, value)
				}
			} else {
				headers.set(key, values)
			}
		}
	}

	return headers
}
