import { Outlet, useNavigation } from 'react-router-dom'
import BaseLayout from './BaseLayout'

const DefaultLayout = () => {
	const navigation = useNavigation()

	return (
		<BaseLayout className='layout-default'>
			<Outlet />
		</BaseLayout>
	)
}

export default DefaultLayout
