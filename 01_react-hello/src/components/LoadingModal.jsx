// src/components/LoadingModal.jsx
import Spinner from './Spinner'
import styles from './LoadingModal.module.css'

function LoadingModal({ isOpen, message = '読み込み中...' }) {
    if (!isOpen) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <Spinner />
                <p className={styles.message}>{message}</p>
            </div>
        </div>
    )
}

export default LoadingModal