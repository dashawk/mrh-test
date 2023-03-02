const getMenuItems = () => {
	return [
		{
			path: '/',
			title: 'Home'
		},
		{
			path: '/about-us',
			title: 'About Us'
		},
		{
			path: '/categories',
			title: 'Categories',
			children: [
				{
					path: '/residential',
					title: 'Residential'
				},
				{
					path: '/commercial',
					title: 'Commercial'
				},
				{
					path: '/industrial',
					title: 'Industrial'
				},
				{
					path: '/land',
					title: 'Land'
				},
				{
					path: '/special',
					title: 'Special Usage'
				}
			]
		},
		{
			path: '/properties',
			title: 'Properties',
			children: [
				{
					path: '/trending',
					title: 'Trending'
				},
				{
					path: '/latest-properties',
					title: 'Latest'
				}
			]
		},
		{
			path: '/developments',
			title: 'Developments'
		},
		{
			path: '/explore-places',
			title: 'Explore Places'
		},
		{
			path: '/developers',
			title: 'Developers'
		}
		// {
		// 	path: '/blog',
		// 	title: 'Blog'
		// },
		// {
		// 	path: '/contact-us',
		// 	title: 'Contact Us'
		// }
	]
}

export default getMenuItems
