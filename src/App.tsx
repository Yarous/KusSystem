import { useState } from 'react'
import Header from './components/header/Header'
import './styles/main.css'
import CardBody from './common/CardBody/CardBody'

function App() {
	// Указываем тип состояния theme как 'light' | 'dark'
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		document.documentElement.className = theme === 'light' ? 'dark' : 'light'
	}

	return (
		<div className='App'>
			<Header theme={theme} toggleTheme={toggleTheme} />
			<CardBody theme={theme}>
				<p>HellO!</p>
			</CardBody>
		</div>
	)
}

export default App
