import { Link } from 'react-router-dom'
import './cards.css'

export const Card = ({ title, description, thumbnail, route }) => {
	return (
		<div className='card-item'>
			<div className='card-item-image'>
				<Link href={route}>
					<img src={thumbnail} alt='' />
				</Link>
			</div>
			<div className='card-item-info'>
				<h5>
					<Link href={route}>{title}</Link>
				</h5>
				<p>{description}</p>
			</div>
		</div>
	)
}
