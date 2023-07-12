import React from 'react'
import styled from 'styled-components'

const StyledStack = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`
interface StackProps {
	children: React.ReactNode
}

const Stack: React.FC<StackProps> = ({ children }) => {
	return <StyledStack>{children}</StyledStack>
}

export default Stack
