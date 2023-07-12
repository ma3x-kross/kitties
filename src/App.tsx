import React from 'react'
import Checkbox from './components/Checkbox'
import styled from 'styled-components'
import Button from './components/Button'
import Loader from './components/Loader'
import Title from './components/Title'
import Stack from './components/Stack'
import { CatResponse } from './interfaces/CatResponse'

const StyledApp = styled.div`
	min-height: 100vh;
	width: 800px;
	padding: 25px 40px 10px 40px;
	background-color: #fff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
	@media (max-width: 991px) {
		width: 700px;
	}
	@media (max-width: 767px) {
		width: 600px;
	}
	@media (max-width: 650px) {
		width: 450px;
	}
	@media (max-width: 480px) {
		width: 300px;
	}
	@media (max-width: 320px) {
		width: 250px;
	}
`

function App() {
	const initialState = {
		enabled: localStorage.getItem('enabled') === 'true' ? true : false,
		refresh: localStorage.getItem('refresh') === 'true' ? true : false,
	}
	const [enabled, setEnabled] = React.useState(initialState.enabled)
	const [autoRefresh, setAutoRefresh] = React.useState(initialState.refresh)

	const [cat, setCat] = React.useState({} as CatResponse)
	const [isLoading, setIsLoading] = React.useState(false)

	const interval = React.useRef<NodeJS.Timeout | null>()

	React.useEffect(() => {
		if (autoRefresh) {
			getData()
			interval.current = setInterval(() => {
				getData()
			}, 5000)
		}
	}, [])

	const getData = React.useCallback(async () => {
		try {
			setIsLoading(true)
			const response = await fetch('https://api.thecatapi.com/v1/images/search')
			const data = await response.json()
			setCat(() => data[0])
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	}, [])

	const onChangeEnabled = () => {
		setEnabled((prev) => {
			localStorage.setItem('enabled', (!prev).toString())
			return !prev
		})
	}

	const onChangeAutoRefresh = () => {
		setAutoRefresh((prev) => {
			localStorage.setItem('refresh', (!prev).toString())
			if (interval.current && prev) {
				clearInterval(interval.current)
				interval.current = null
				console.log(interval)
			} else {
				getData()
				interval.current = setInterval(() => {
					getData()
				}, 5000)
			}
			return !prev
		})
	}

	const onClickButton = () => {
		getData()
		if (interval.current) {
			console.log(interval.current)
			clearInterval(interval.current)
			interval.current = setInterval(() => {
				getData()
			}, 5000)
		}
	}

	return (
		<StyledApp>
			<Title>Kitties</Title>
			<Stack>
				<Checkbox
					checked={enabled}
					onChange={onChangeEnabled}
					label='enabled'
				/>
				<Checkbox
					checked={autoRefresh}
					onChange={onChangeAutoRefresh}
					label='Auto-refresh every 5 second'
					disabled={!enabled}
				/>
				<Button disabled={!enabled} onClick={onClickButton}>
					Get cat
				</Button>

				{isLoading ? (
					<Loader style={{ margin: '50px auto' }} />
				) : (
					cat.url && <img src={cat.url} alt={`cat ${cat.id}`} />
				)}
			</Stack>
		</StyledApp>
	)
}

export default App
