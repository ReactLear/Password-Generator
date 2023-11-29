import styles from './CheckBox.module.scss'

export const CheckBox = ({ text, onChange, checked }) => {
	return (
		<>
			<div className={styles.checkBoxArea}>
				<input type='checkbox' checked={checked} onChange={onChange} /> <p className={styles.infoText}>{text}</p>
			</div>
		</>
	)
}
