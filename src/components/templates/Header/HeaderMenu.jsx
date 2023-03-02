// import menuItems from '@/services/getMenuItems'
import getMenuItems from '@/services/getMenuItems'
import { MenuItem } from './HeaderMenuItem'

export default function HeaderMenu() {
	const menuItems = getMenuItems()

	return (
		<nav id='primary-menu'>
			<ul className='main-menu text-center'>
				{menuItems.map(menuItem => (
					<MenuItem key={`${menuItem.title}`} menu={menuItem} />
				))}
			</ul>
		</nav>
	)
}
