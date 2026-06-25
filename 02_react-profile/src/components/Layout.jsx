import { BadgeCheck, Home, Sparkles, UserRound } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './Layout.module.css'

const Motion = motion

function Layout({ children, currentPage, onNavigate }) {
  return (
    <div className={styles.wrapper}>
      <header
        className={styles.header}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className={styles.brand}>
          <div
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5 }}
          >
            <Sparkles className={styles.brandIcon} size={28} aria-hidden="true" />
          </div>
          <div>
            <p className={styles.label}>React Layout Sample</p>
            <h1 className={styles.title}>Profile Site</h1>
          </div>
        </div>

        <nav className={styles.nav} aria-label="ページ切り替え">
          <button
            className={currentPage === 'home' ? styles.activeButton : styles.navButton}
            type="button"
            onClick={() => onNavigate('home')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <Home size={18} aria-hidden="true" />
            ホーム
          </button>
          <button
            className={currentPage === 'about' ? styles.activeButton : styles.navButton}
            type="button"
            onClick={() => onNavigate('about')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <UserRound size={18} aria-hidden="true" />
            About
          </button>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.3 }}
      >
        <p>
          <BadgeCheck size={16} aria-hidden="true" />
          &copy; 2026 React Profile
        </p>
      </footer>
    </div>
  )
}

export default Layout
