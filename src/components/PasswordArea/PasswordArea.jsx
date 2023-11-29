import { useState } from 'react'
import { ButtonOptions } from '../ButtonOptions/ButtonOptions'
import styles from './PasswordArea.module.scss'

export const PasswordArea = ({ value, onCopyPassword }) => {
	const [showText, setShowText] = useState(true)
	const [showPassword, setShowPassword] = useState(false)

	return (
		<>
			<div className={styles.passwordArea}>
				<label htmlFor='password' className={styles.labelPassword}>
					Twoje Hasło:
				</label>
				{showPassword ? (<input type='text' readOnly={value} value={value} className={styles.inputPassword} />) : (<input type='password' readOnly={value} value={value} className={styles.inputPassword} />)}
				<div className={styles.btnsArea}>
					{showText ? (
						<ButtonOptions
							text='Pokaż'
							onClick={() => {
								setShowText(false)
								setShowPassword(true)
							}}
						/>
					) : (
						<ButtonOptions
							text='Ukryj'
							onClick={() => {
								setShowText(true)
								setShowPassword(false)
							}}
						/>
					)}
					<ButtonOptions text='Kopiuj' onClick={onCopyPassword} />
				</div>
			</div>
		</>
	)
}
