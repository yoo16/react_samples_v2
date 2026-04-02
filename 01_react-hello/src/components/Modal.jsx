/* src/components/Modal.jsx */
import styles from './Modal.module.css'

function Modal({ work, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>✕</button>
        <img src={work.image} alt={work.title} className={styles.image} />
        <div className={styles.body}>
          <div className={styles.meta}>
            <span className={styles.genre}>{work.genre}</span>
            <span className={styles.year}>{work.year}</span>
          </div>
          <h2 className={styles.title}>{work.title}</h2>
          <p className={styles.description}>{work.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal