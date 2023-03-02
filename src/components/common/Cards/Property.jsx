import { toCurrency } from '@/helpers/formats'
import { Link } from 'react-router-dom'
import locationIcon from '@/assets/images/icons/location.png'
import { propertyTypes } from '@/constants/property'

const Property = ({ className = 'col-lg-4 col-md-6 col-12', data }) => {
	return (
		<div className={className}>
			<div className='flat-item'>
				<div className='flat-item-image'>
					<SaleRent type={data.type} />
					<Link to={`/property/${data.path}`}>
						<img src={data.thumbnail} alt={data.title} />
					</Link>
					<div className='flat-link'>
						<Link to={`/property/${data.path}`}>More Details</Link>
					</div>
					<ul className='flat-desc'>
						{data.features.map((feat, i) => (
							<li key={`${feat.label}-${i}`}>
								<img src={feat.icon} alt={feat.label} />
								<span>{feat.value}</span>
							</li>
						))}
					</ul>
				</div>
				<div className='flat-item-info'>
					<div className='flat-title-price'>
						<h5>
							<Link to={`/property/${data.path}`}>{data.title}</Link>
						</h5>
						<span className='price'>{toCurrency(data.price)}</span>
					</div>
					<p>
						<img src={locationIcon} alt='' />
						{data.location}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Property

function SaleRent({ type }) {
	if (!propertyTypes[type]) {
		return null
	}

	const className = type === 'forSale' ? 'for-sale' : 'for-rent'

	return <span className={className}>{propertyTypes[type]}</span>
}
