import React, { useState } from 'react'
import Month from '../month'

import InputBox from '../imputBox'
import { Button, Form, StyledLabel, StyledBlockPicker } from './style'

const Calendar = () => {
	const [ remindersList, setRemidersList ] = useState([
		{
			title: 'All Day Event very long title',
			date: new Date('2019-04-11'),
			hour: '10:00',
			color: '#37D67A'
		}
	])
	const [ title, setTitle ] = useState('')
	const [ backgroundColor, setBackgroundColor ] = useState('37D67A')
	const [ hour, setHour ] = useState('')
	const [ activeForm, setActiveForm ] = useState(false)
	const [ errors, setErrors ] = useState({})
	const [ date, setDate ] = useState('')

	const handleBackgroundColor = (color) => {
		setBackgroundColor(color.hex)
	}

	const handleActiveForm = (dayData) => {
		setActiveForm(true)
		setDate(dayData)
	}

	const saveForm = () => {
		if (validar()) {
			return
		}
		setRemidersList([
			...remindersList,
			{
				title,
				date,
				hour,
				color: backgroundColor
			}
		])
		setActiveForm(false)
	}

	const validar = () => {
		const errorsValid = {}
		let hasError = false
		if (title.length < 1) {
			errorsValid.title = 'Ingrese un titulo'
			hasError = true
		} else {
			errorsValid.title = ''
		}
		if (hour.length < 1) {
			errorsValid.hour = 'Ingrese un tiempo'
			hasError = true
		} else {
			errorsValid.hour = ''
		}
		setErrors(errorsValid)
		return hasError
	}

	return (
		<div className="container">
			{activeForm && (
				<Form className="row">
					<div className="col-md-12">
						<h1>Insert Remider</h1>
					</div>
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
						<Button onClick={saveForm} type="button">
							Save
						</Button>
					</div>
				</Form>
			)}

			<Month reminders={remindersList} activeForm={handleActiveForm} />
		</div>
	)
}

export default Calendar
