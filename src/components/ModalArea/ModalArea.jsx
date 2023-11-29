import { useState } from 'react'
import styles from './ModalArea.module.scss'
export const ModalArea = () => {
	const [showModal, setShowModal] = useState(false)

    const toggleBtn = () => {
        setShowModal(showModal => !showModal)
    }
	return (
		<>
			<div className={styles.infoArea}>
				<button
					className={styles.modalBtn}
					onClick={toggleBtn}>
					?
				</button>
			</div>
			{showModal && (
				<div className={styles.modal}>
					<p className={styles.modalText}>Minimalna długość hasła: 3</p>
					<p className={styles.modalText}>Maksymalna długość hasła: 20</p>
				</div>
			)}
		</>
	)
}
