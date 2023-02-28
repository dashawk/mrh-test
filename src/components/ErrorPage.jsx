import { useRouteError } from 'react-router'

export default function ErrorPage() {
	const error = useRouteError()

	console.log(error)

	return (
		<div className='layout-error'>
			<h1>Yikes!</h1>
			<p>Something terrible just happened!</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}
