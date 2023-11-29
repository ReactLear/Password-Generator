import styles from './ButtonGenerate.module.scss'

export const ButtonGenerate = ({ text, onClick }) => {
	return <button className={styles.btnGenerate} onClick={onClick}>{text}</button>
}
