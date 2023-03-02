import thumb01 from '@/assets/images/service/1.jpg'
import thumb02 from '@/assets/images/service/2.jpg'
import thumb03 from '@/assets/images/service/3.jpg'
import thumb04 from '@/assets/images/service/4.jpg'

export const getServicesCards = () => {
	return [
		{
			id: 1,
			title: 'Buy Property',
			description:
				'Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo',
			thumbnail: thumb01,
			route: '/services/1'
		},
		{
			id: 2,
			title: 'Sell Property',
			description:
				'Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo',
			thumbnail: thumb02,
			route: '/services/2'
		},
		{
			id: 3,
			title: 'Buy Property',
			description:
				'Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo',
			thumbnail: thumb03,
			route: '/services/3'
		},
		{
			id: 4,
			title: 'Sell Property',
			description:
				'Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo',
			thumbnail: thumb04,
			route: '/services/4'
		}
	]
}
