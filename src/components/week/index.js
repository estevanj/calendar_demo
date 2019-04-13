import React from 'react'
import moment from 'moment'

import { Button } from './style'

import CellDay from '../../components/cellDay'
const Week = ({ data, reminders, activeForm }) => {
	const dataweek = data.days.map((item, index) => {
		const day = moment(item._d).format('DD')
		const dayData = item._d
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
				<Button onClick={() => activeForm(dayData)}>
					<CellDay day={day} reminder={remider} />
				</Button>
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
