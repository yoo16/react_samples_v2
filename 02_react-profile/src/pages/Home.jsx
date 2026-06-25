import { Code2, Target } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './Page.module.css'
import user from '../data/User'

const Motion = motion

const pageVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

function Home() {

  return (
    <section
      className={styles.page}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.profile} variants={itemVariants}>
        <div
          className={styles.avatar}
          whileHover={{ rotate: 4, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 280, damping: 16 }}
        >
          YK
        </div>
        <div>
          <p className={styles.kicker}>Home</p>
          <h2>{user.name} のプロフィール</h2>
          <p>{user.description}</p>
        </div>
      </div>

      <div className={styles.grid} variants={itemVariants}>
        <article
          className={styles.card}
          whileHover={{ y: -4, boxShadow: '0 14px 32px rgba(15, 23, 42, 0.12)' }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        >
          <h3 className={styles.iconTitle}>
            <Code2 size={20} aria-hidden="true" />
            好きな技術
          </h3>
          <p>{user.skills.join('、')}</p>
        </article>
        <article
          className={styles.card}
          whileHover={{ y: -4, boxShadow: '0 14px 32px rgba(15, 23, 42, 0.12)' }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        >
          <h3 className={styles.iconTitle}>
            <Target size={20} aria-hidden="true" />
            目標
          </h3>
          <p>{user.goal}</p>
        </article>
      </div>
    </section>
  )
}

export default Home
