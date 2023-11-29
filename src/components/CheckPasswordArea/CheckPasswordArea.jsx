import styles from './CheckPasswordArea.module.scss'

export const CheckPasswordArea = () => {
	return (
		<>
			<div className={styles.checkArea}>
				<label htmlFor='' className={styles.labelCheckArea}>
					Wklej i sprawdź skopiowane hasło
				</label>
				<input type='text' className={styles.inputCheckArea} />
			</div>
		</>
	)
}
