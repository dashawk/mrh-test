import ErrorPage from '@/components/ErrorPage'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import About from '@/pages/About'
import Home from '@/pages/Home'

export const routes = [
	{
		path: '/',
		element: <DefaultLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About /> }
		]
	}
]
