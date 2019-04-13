import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const Calendar = () => {
	const localizer = BigCalendar.momentLocalizer(moment)
	const myEventsList = [
		{
			id: 0,
			title: 'All Day Event very long title',
			allDay: true,
			start: new Date(2015, 3, 0),
			end: new Date(2015, 3, 1)
		}
	]

	return <BigCalendar localizer={localizer} events={myEventsList} startAccessor="start" endAccessor="end" />
}

export default Calendar
