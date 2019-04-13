import React from 'react'
import Month from '../month'

const Calendar = () => {
	const remindersList = [
		{
			id: 0,
			title: 'All Day Event very long title',
			allDay: true,
			start: new Date(2019, 4, 0),
			end: new Date(2019, 4, 1)
		}
	]

	return (
		<div className="container">
			<Month reminders={remindersList} />
		</div>
	)
}

export default Calendar
