import React from 'react'
import moment from 'moment'

import CellDay from '../../components/cellDay'
const Week = ({ data }) => {
	const dataweek = data.days.map((item, index) => {
		const day = moment(item._d).format('DD')
		return (
			<td key={day}>
				<CellDay day={day} reminder="" />
			</td>
		)
	})

	return (
		<tbody>
			<tr>{dataweek}</tr>
		</tbody>
	)
}

export default Week
