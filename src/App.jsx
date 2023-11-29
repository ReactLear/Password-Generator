import styles from './style.module.scss'
import { useState } from 'react'
import { Header } from './components/Header/Header'
import { CheckBox } from './components/CheckBox/CheckBox'
import { ButtonGenerate } from './components/ButtonGenerate/ButtonGenerate'
import { PasswordArea } from './components/PasswordArea/PasswordArea'
import { ModalArea } from './components/ModalArea/ModalArea'
import { CheckPasswordArea } from './components/CheckPasswordArea/CheckPasswordArea'
import { ModalPassword } from './components/ModalPassword/ModalPassword'

function App() {
	const [generateArea, setGenerateArea] = useState(false)
	const [password, setPassword] = useState('')
	const [lowerCase, setLowerCase] = useState(true)
	const [upperCase, setUpperCase] = useState(true)
	const [numbersCase, setNumbersCase] = useState(true)
	const [symbolsCase, setSymbolsCase] = useState(true)
	const [passwordLength, setPasswordLength] = useState(12)
	const [copiedPassword, setCopiedPassword] = useState(false)

	const smallLetters = 'abcdefghijlmnouprstwyxz'
	const bigLetters = 'ABCDEFGHIJKLMNOUPRSTWYXZ'
	const special = '!@#$%^&*()?'
	const numbers = '0123456789'

	const generatePassword = () => {
		let charaterList = ''

		if (lowerCase) {
			charaterList += smallLetters
		}
		if (upperCase) {
			charaterList += bigLetters
		}
		if (numbersCase) {
			charaterList += numbers
		}
		if (symbolsCase) {
			charaterList += special
		}

		let tempPassword = ''
		const characterListLength = charaterList.length

		for (let i = 0; i < passwordLength; i++) {
			const characterIndex = Math.round(Math.random() * characterListLength)
			tempPassword += charaterList.charAt(characterIndex)
			setPassword(tempPassword)
		}
	}

	const copyPassword = async () => {
		if (password.length) {
			await navigator.clipboard.writeText(password)
			setCopiedPassword(true)
		}
	}


	return (
		<>
			<div className={styles.appArea}>
				<ModalArea />
				<Header defaultValue={passwordLength} onChange={e => setPasswordLength(e.currentTarget.value)} />
				<ul>
					<CheckBox text='Znaki specjalne' checked={symbolsCase} onChange={() => setSymbolsCase(!symbolsCase)} />
					<CheckBox
						text='Numery'
						checked={numbersCase}
						onChange={() => {
							setNumbersCase(!numbersCase)
						}}
					/>
					<CheckBox
						text='Wielkie litery'
						checked={upperCase}
						onChange={() => {
							setUpperCase(!upperCase)
						}}
					/>
					<CheckBox
						text='Małe litery'
						checked={lowerCase}
						onChange={() => {
							setLowerCase(!lowerCase)
						}}
					/>
				</ul>
				<ButtonGenerate
					text='Generuj hasło'
					onClick={() => {
						setGenerateArea(true)
						generatePassword()
					}}
				/>
				{generateArea && <PasswordArea value={password} onCopyPassword={copyPassword} />}
			</div>
			{generateArea && <CheckPasswordArea />}
			{copiedPassword && (<ModalPassword onHandleClick={() => setCopiedPassword(false)}/>)}
		</>
	)
}

export default App
