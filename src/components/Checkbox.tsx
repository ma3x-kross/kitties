import React from 'react'
import { styled } from 'styled-components'

const StyledCheckbox = styled.div<{ $disabled?: boolean }>`
	display: flex;
	flex-wrap: wrap-reverse;
	align-items: center;
	gap: 5px;

	cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
	pointer-events: ${({ $disabled }) => ($disabled ? 'none' : '')};
	opacity: ${({ $disabled }) => ($disabled ? '0.4' : '')};

	input {
		cursor: pointer;
		width: 20px;
		height: 20px;
		&:checked {
			accent-color: #9f01ea;
		}
		&:checked ~ label {
			color: #9f01ea;
		}
	}

	label {
		font-size: 20px;
		color: #333;
	}
`

interface CheckboxProps {
	checked: boolean
	onChange: () => void
	label?: string
	disabled?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
	checked,
	onChange,
	label,
	disabled,
}) => {
	return (
		<>
			<StyledCheckbox $disabled={disabled}>
				<input type='checkbox' checked={checked} onChange={onChange} />
				<label>{label}</label>
			</StyledCheckbox>
		</>
	)
}

export default Checkbox
