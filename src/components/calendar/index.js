import React, { useState } from 'react'
import Month from '../month'

import InputBox from '../imputBox'
import { Form, StyledLabel, StyledBlockPicker } from './style'

const Calendar = () => {
	const [ remindersList, setRemidersList ] = useState([
		{
			title: 'All Day Event very long title',
			date: new Date('2019-04-11'),
			start: '10:00',
			end: '11:00'
		}
	])
	const [ title, setTitle ] = useState('')
	const [ backgroundColor, setBackgroundColor ] = useState('')
	const [ hour, setHour ] = useState('')
	const [ errors, SetErrors ] = useState([])

	const [ activeForm, SetActiveForm ] = useState(false)

	const handleBackgroundColor = (color) => {
		setBackgroundColor(color.hex)
	}

	const handleActiveForm = () => {
		SetActiveForm(true)
	}

	return (
		<div className="container">
			{activeForm && (
				<Form className="row">
					<div className="col-md-6">
						<StyledLabel>Titulo:</StyledLabel>
						<InputBox
							type="text"
							maxLength="30"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							error={errors.title}
						/>
					</div>
					<div className="col-md-6">
						<StyledBlockPicker color={backgroundColor} onChangeComplete={handleBackgroundColor} />
					</div>
					<div className="col-md-6">
						<StyledLabel>Hora:</StyledLabel>
						<InputBox
							type="text"
							maxLength="10"
							value={hour}
							onChange={(e) => setHour(e.target.value)}
							error={errors.hour}
						/>
					</div>
					<div style={{ textAlign: 'center' }} className="col-md-12">
						<button>Guardar</button>
					</div>
				</Form>
			)}

			<Month reminders={remindersList} activeForm={handleActiveForm} />
		</div>
	)
}

export default Calendar
