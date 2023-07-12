import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
	position: relative;
	background-color: transparent;
	height: 45px;
	width: 25%;
	z-index: 1;
	overflow: hidden;
	border: none;
	color: #fff;
	text-transform: uppercase;
	transition: all 0.4s;

	@media (max-width: 650px) {
		width: 50%;
	}

	&:disabled {
		cursor: not-allowed;
		pointer-events: none;
		opacity: 0.4;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 300%;
		height: 100%;
		z-index: -1;
		background: linear-gradient(to right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
		transition: left 0.3s;
	}

	&:hover {
		cursor: pointer;
		&::before {
			left: 0;
		}
	}

	&:active {
		transform: scale(1.1);
	}
`

interface ButtonProps {
	disabled?: boolean
	onClick?: () => void
	children: ReactNode
}
const Button: React.FC<ButtonProps> = ({ disabled, onClick, children }) => {
	return (
		<StyledButton disabled={disabled} onClick={onClick}>
			{children}
		</StyledButton>
	)
}

export default Button
