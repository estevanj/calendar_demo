import React from 'react'
import moment from 'moment'

import Week from '../../week'

const Month = ({ reminders }) => {
	const getDaysForWeek = () => {
		const startWeek = moment().startOf('month').week()
		const endWeek = moment().endOf('month').week()

		let calendar = []
		for (var week = startWeek; week < endWeek; week++) {
			calendar.push({
				week: week,
				days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
			})
		}

		return calendar
	}

	const daysForWeek = getDaysForWeek()

	const calendarMonth = daysForWeek.map((item, index) => {
		return <Week key={index} data={item} />
	})

	return (
		<div className="container">
			<table>
				<thead>
					<tr>
						<th>Sunday</th>
						<th rowSpan="2">Monday</th>
						<th rowSpan="2">Tuesday</th>
						<th rowSpan="2">wednesday</th>
						<th rowSpan="2">Friday</th>
						<th rowSpan="2">Saturday</th>
					</tr>
				</thead>
				{calendarMonth}
			</table>
		</div>
	)
}

export default Month
