import agent1 from '@/assets/images/agents/1.jpg'
import agent2 from '@/assets/images/agents/2.jpg'
import agent3 from '@/assets/images/agents/3.jpg'
import agent4 from '@/assets/images/agents/4.jpg'

const getAgents = () => {
	return [
		{
			id: 1,
			name: 'Shah M Nawah',
			title: 'Real Estate Agent',
			avatar: agent1,
			phone: '+65 498 0343',
			email: 'shah@email.com'
		},
		{
			id: 2,
			name: 'Eva M Shalks',
			title: 'Real Estate Broker',
			avatar: agent2,
			phone: '+65 498 0343',
			email: 'shah@email.com'
		},
		{
			id: 3,
			name: 'Robin Padaplin',
			title: 'Real Estate Broker',
			avatar: agent3,
			phone: '+65 498 0343',
			email: 'shah@email.com'
		},
		{
			id: 4,
			name: 'Sharim Gum',
			title: 'Real Estate Agent',
			avatar: agent4,
			phone: '+65 498 0343',
			email: 'shah@email.com'
		}
	]
}

export default getAgents
