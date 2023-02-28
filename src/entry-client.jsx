import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from '@/routes'

let router = createBrowserRouter(routes)

hydrateRoot(
	document.getElementById('root'),
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
