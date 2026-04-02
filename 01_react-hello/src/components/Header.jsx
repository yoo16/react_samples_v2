/* src/components/Header.jsx */
import { useAuth } from '../context/AuthContext'
import styles from './Header.module.css'

function Header() {
  const { user, logout } = useAuth()

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Anime Station</h1>
      {user && (
        <div className={styles.userArea}>
          <span className={styles.username}>{user.name}</span>
          <button className={styles.logout} onClick={logout}>
            ログアウト
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
