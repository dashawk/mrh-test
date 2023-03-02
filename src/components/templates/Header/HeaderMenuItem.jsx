import { NavLink } from 'react-router-dom'

export const MenuItem = ({ menu }) => {
	return (
		<li>
			<NavLink to={menu.path}>{menu.title}</NavLink>

			{menu.children ? (
				<ul className='drop-menu'>
					{menu.children.map((item, index) => (
						<MenuItem key={`${item.title}-${index}`} menu={item} />
					))}
				</ul>
			) : null}
		</li>
	)
}
