/* src/components/WorkCard.jsx */
import styles from './WorkCard.module.css'

function WorkCard({ id, title, genre, year, description, image, onSelect }) {
  return (
    <div className={styles.card} onClick={onSelect}>
      <div className={styles.thumbnailWrapper}>
        <img src={image} alt={title} className={styles.thumbnail} />
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.genre}>{genre}</span>
          <span className={styles.year}>{year}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default WorkCard