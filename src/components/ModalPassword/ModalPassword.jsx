import { ButtonOptions } from '../ButtonOptions/ButtonOptions'
import styles from './ModalPassword.module.scss'
export const ModalPassword = ({ onHandleClick }) => {
	return (
		<>
			<div className={styles.modalPasswordArea}>
				<h2 className={styles.h2}>Hasło skopiowane do schowka!</h2>
				<ButtonOptions onClick={onHandleClick} text='Zamknij' />
			</div>
		</>
	)
}
