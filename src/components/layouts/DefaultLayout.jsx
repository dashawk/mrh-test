import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../templates/Footer/Footer'
import Header from '../templates/Header'

import Loading from '../utilities/Loading'

const DefaultLayout = () => {
	const navigation = useNavigation()

	if (navigation.state !== 'idle') {
		return <Loading />
	}

	return (
		<div className='wrapper layout-default'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default DefaultLayout
