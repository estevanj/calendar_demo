import React from 'react'
import moment from 'moment'

const Week = ({ data }) => {
	const dataweek = data.days.map((item, index) => {
		const day = moment(item._d).format('MM/DD/YYYY')

		return <td key={day}>{day}</td>
	})

	return (
		<tbody>
			<tr>{dataweek}</tr>
		</tbody>
	)
}

export default Week
