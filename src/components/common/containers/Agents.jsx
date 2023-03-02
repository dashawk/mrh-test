import Agent from '../Cards/Agent'
import { Row } from './Section'

const Agents = ({ agents }) => {
	if (!agents?.length) return null

	return (
		<Row>
			{agents.map((agent, i) => (
				<Agent key={`${agent.name}-${i}`} data={agent} />
			))}
		</Row>
	)
}

export default Agents
