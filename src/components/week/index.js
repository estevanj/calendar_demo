import React from 'react'
import moment from 'moment'

import CellDay from '../../components/cellDay'
const Week = ({ data, reminders }) => {
	const dataweek = data.days.map((item, index) => {
		const day = moment(item._d).format('DD')
		const dateWeek = moment(item._d).format('YYYY-MM-DD')
		const remider = reminders.map((iremR, indexR) => {
			const dateRemiders = moment(iremR.date).format('YYYY-MM-DD')
			if (dateRemiders === dateWeek) {
				return iremR
			} else {
				return ''
			}
		})

		return (
			<td key={day}>
				<CellDay day={day} reminder={remider} />
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
