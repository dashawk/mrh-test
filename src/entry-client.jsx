import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from '@/routes'

import '@/assets/styles/core.css'
import '@/assets/styles/shortcodes/shortcodes.css'
import '@/assets/styles/style.css'
import '@/assets/styles/responsive.css'
import '@/assets/styles/custom.css'
import '@/assets/styles/skin/skin-default.css'

let router = createBrowserRouter(routes)

hydrateRoot(
	document.getElementById('root'),
	<StrictMode>
		<RouterProvider router={router} fallbackElement={null} />
	</StrictMode>
)
