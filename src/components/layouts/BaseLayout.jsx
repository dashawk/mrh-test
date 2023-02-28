import { Outlet } from 'react-router-dom'

const BaseLayout = ({ className }) => {
	return (
		<div className={`${className ?? `layout-base`}`}>
			<Outlet />
		</div>
	)
}

export default BaseLayout
