/* src/components/Header.jsx */
import { useAuth } from '../hooks/useAuth'
import styles from './Header.module.css'
import ThemeButton from './ThemeButton'
import logo from '../assets/logo.svg'

function Header() {
  const { user, logout } = useAuth()

  return (
    <header className={styles.header}>
      <img src={logo} alt="ロゴ" />
      <h1 className={styles.title}>Anime Station</h1>
      <div className={styles.actions}>
        <ThemeButton />
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
      </div>
    </header>
  )
}

export default Header
