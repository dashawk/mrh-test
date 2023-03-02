import { Outlet } from 'react-router-dom'

const BlankLayout = ({ className }) => {
	return (
		<div className={`${className ?? `layout-base`}`}>
			<h1>Hello there</h1>
			<Outlet />
		</div>
	)
}

export default BlankLayout
