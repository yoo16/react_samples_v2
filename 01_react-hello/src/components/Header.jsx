/* src/components/Header.jsx */
import { useAuth } from '../hooks/useAuth'
import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import logoDark from '../assets/logo-dark.svg'
import ThemeButton from './ThemeButton'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

function Header() {
  const { user, logout } = useAuth()
  const { theme } = useContext(ThemeContext)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={theme === 'dark' ? logoDark : logo} alt="Logo" />
      </div>
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
