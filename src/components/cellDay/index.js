import React from 'react'

import { Container } from './style'

const CellDay = ({ day, reminder }) => {
	return (
		<Container>
			{day}
			{reminder}
		</Container>
	)
}

export default CellDay
