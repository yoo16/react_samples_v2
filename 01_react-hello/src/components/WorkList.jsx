/* src/components/WorkList.jsx */
import WorkCard from './WorkCard'
import styles from './WorkList.module.css'

export const WorkList = ({ works, onSelect }) => {
    return (
        <div>
            <p className={styles.count}>{works.length} 件</p>
            <div className={styles.grid}>
                {works.map((work) => (
                    <WorkCard
                        key={work.id}
                        {...work}
                        onSelect={() => onSelect(work)}
                    />
                ))}
            </div>
        </div>
    )
}