/* src/components/Header.jsx */
import { useAuth } from '../hooks/useAuth'
import styles from './Header.module.css'

function Header() {
  const { user, logout } = useAuth()

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Anime Station</h1>
      {user && (
        <div className={styles.userArea}>
          <img
            src={user.photoURL}
            alt={user.displayName}
            className={styles.avatar}
          />
          <span className={styles.name}>{user.displayName}</span>
          <button className={styles.logout} onClick={logout}>
            ログアウト
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
