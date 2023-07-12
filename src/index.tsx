import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
		font-family: 'Arial', sans-serif;
		font-size: 16px;
	}

	body{
		display: flex;
		min-height: 100vh;
		align-items: center;
		justify-content: center;
		padding: 10px;
		background: linear-gradient(115deg, #56d8e4, 10%, #9f01ea);

	}
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<>
		<GlobalStyle />
		<App />
	</>,
)
