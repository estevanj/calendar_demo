import React from 'react'

import { Container, RemiderStyle } from './style'

const CellDay = ({ day, reminder }) => {
	let remiderData = ''
	if (reminder[0].title) {
		remiderData = reminder.map((item, index) => {
			return (
				<RemiderStyle className="col-md-12">
					<div className="col-md-4">
						{item.start} {item.end}
					</div>
					<div className="col-md-8">{item.title}</div>
				</RemiderStyle>
			)
		})
	}

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
