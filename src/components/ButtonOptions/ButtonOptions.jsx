import styles from './ButtonOptions.module.scss'

export const ButtonOptions = ({ text, onClick }) => {
	return <button className={styles.btnOptions} onClick={onClick}>{text}</button>
}
