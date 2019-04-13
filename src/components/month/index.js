import React from 'react'
import moment from 'moment'
import { Container } from './style'
import Week from '../week'

const Month = ({ reminders, activeForm }) => {
	const getDaysForWeek = () => {
		const startWeek = moment().startOf('month').week()
		const endWeek = moment().endOf('month').week()

		let calendar = []
		for (let week = startWeek; week <= endWeek; week++) {
			calendar.push({
				week: week,
				days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
			})
		}

		return calendar
	}

	const daysForWeek = getDaysForWeek()

	const calendarMonth = daysForWeek.map((item, index) => {
		console.log(daysForWeek)
		return <Week activeForm={activeForm} key={index} data={item} reminders={reminders} />
	})

	return (
		<div className="container">
			<table>
				<thead>
					<tr>
						<th>
							<Container>Sunday</Container>
						</th>
						<th>
							<Container>Monday</Container>
						</th>
						<th>
							<Container>Tuesday</Container>
						</th>
						<th>
							<Container>Wednesday</Container>
						</th>
						<th>
							<Container>Thusday</Container>
						</th>
						<th>
							<Container>Friday</Container>
						</th>
						<th>
							<Container>Saturday</Container>
						</th>
					</tr>
				</thead>
				{calendarMonth}
			</table>
		</div>
	)
}

export default Month
