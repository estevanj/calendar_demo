import React from 'react'
import { Container, Error, Input } from './style'

const InputBox = (props) => {
	return (
		<Container>
			<Input {...props} />
			<Error>{props.error ? props.error : ''}</Error>
		</Container>
	)
}

export default InputBox
