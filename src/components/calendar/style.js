import styled from 'styled-components'
import { BlockPicker } from 'react-color'

export const StyledLabel = styled.label`
	margin: 0;
	margin-right: 10px;
	font-weight: bold;
	text-align: center;
`

export const StyledBlockPicker = styled(BlockPicker)`
  margin-top: 5px;
  margin-bottom: 5px;
`

export const Form = styled.div`
	border: 0;
	box-shadow: 0px 2px 6px;
	padding: 10px;
	margin-bottom: 15px;
`

export const Button = styled.button`
	background-color: #44c767;
	-moz-border-radius: 28px;
	-webkit-border-radius: 28px;
	border-radius: 28px;
	border: 1px solid #18ab29;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 17px;
	padding: 10px 21px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #2f6627;
`
