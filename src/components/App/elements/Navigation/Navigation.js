import React from 'react'
import {Link } from 'react-router-dom'
import './Navigation.css'


const Navigation=(props)=>{
	return(
		<div className="rmdb-navigation">
			<div className="rmdb-navigation-content">
			<Link to="/">
				<p>Home</p>
				<p>{props.movie}</p>
				<p>Home</p>
			</Link>
			</div>
		</div>
		)
}
export default Navigation