import { Card } from './Card'
import './cards.css'

const Cards = ({ cards }) => {
	return (
		(cards?.length && (
			<div className='cards'>
				{cards.map(card => (
					<div key={card.id} className='col'>
						<Card
							title={card.title}
							description={card.description}
							route={card.route}
							thumbnail={card.thumbnail}
						/>
					</div>
				))}
			</div>
		)) ||
		null
	)
}

export default Cards
