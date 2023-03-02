import Property from '../Cards/Property'
import { Row, Section } from './Section'

const FeaturedItems = ({ items }) => {
	if (!items?.length) return null

	return (
		<Section>
			<div className='featured-items'>
				<Row>
					{items.map((item, i) => (
						<Property key={`${item.path}-${i}`} data={item} />
					))}
				</Row>
			</div>
		</Section>
	)
}

export default FeaturedItems
