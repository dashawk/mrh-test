import { Link } from 'react-router-dom'
import { Col } from '../containers'

import phoneIcon from '@/assets/images/icons/phone-2.png'
import mailCloseIcon from '@/assets/images/icons/mail-close.png'

const Agent = ({ data }) => {
	return (
		<Col column={3}>
			<div className='single-agent'>
				<div className='agent-image'>
					<img src={data.avatar} alt='' />
				</div>
				<div className='agent-info'>
					<div className='agent-name'>
						<h5>
							<Link to={`/agents/${data.path}`}>{data.name}</Link>
						</h5>
						<p>{data.title}</p>
					</div>
				</div>
				<div className='agent-info-hover'>
					<div className='agent-name'>
						<h5>
							<Link to={`/agents/${data.path}`}>{data.name}</Link>
						</h5>
						<p>{data.title}</p>
					</div>
					<ul className='agent-address'>
						<li>
							<img src={phoneIcon} alt='' />
							{data.phone}
						</li>
						<li>
							<img src={mailCloseIcon} alt='' />
							{data.email}
						</li>
					</ul>
				</div>
			</div>
		</Col>
	)
}

export default Agent
