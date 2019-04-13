import React from 'react'

import { Container, RemiderStyle } from './style'

const CellDay = ({ day, reminder }) => {
	let remiderData = ''

	remiderData = reminder.map((item, index) => {
		if (item.title) {
			return (
				<RemiderStyle key={`content_${index}`} style={{ color: `${item.color}` }} className="col-md-12">
					<div className="col-md-4">{item.hour}</div>
					<div className="col-md-8">{item.title}</div>
				</RemiderStyle>
			)
		}
	})

	return (
		<Container>
			<div className="container">
				<div className="row">
					<div className="col-md-12">{day}</div>
					{remiderData}
				</div>
			</div>
		</Container>
	)
}

export default CellDay
