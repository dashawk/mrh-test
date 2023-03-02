import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
	return (
		<div className='page-about'>
			<p>This is the about page.</p>
			<NavLink to={`/`}>Home</NavLink>
		</div>
	)
}

export default About
