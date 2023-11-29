import styles from './Header.module.scss'
export const Header = ({ defaultValue, onChange }) => {
	return (
		<>
			<p className={styles.headerText}>
				Długość hasła:{' '}
				<input
					type='number'
					min={3}
					max={20}
					className={styles.input}
					defaultValue={defaultValue}
					onChange={onChange}
				/>
			</p>
		</>
	)
}
