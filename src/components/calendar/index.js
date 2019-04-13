import React, { useState } from 'react'
import Month from '../month'

const Calendar = () => {
	const [ remindersList, setRemidersList ] = useState([
		{
			title: 'All Day Event very long title',
			date: new Date('2019-04-11'),
			start: '10:00',
			end: '11:00'
		}
	])

	return (
		<div className="container">
			<Month reminders={remindersList} />
		</div>
	)
}

export default Calendar
