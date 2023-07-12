import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const Loader = styled.div`
	border: 5px solid rgba(125, 101, 231, 0.3);
	border-top: 5px solid rgb(125, 101, 231);
	border-radius: 50%;
	width: 60px;
	height: 60px;
	animation: ${spin} 0.6s linear infinite;
`

export default Loader
