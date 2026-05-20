// src/components/ThemeButton.jsx
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import styles from './ThemeButton.module.css'

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isDark = theme === 'dark'
  const label = isDark ? 'Dark Mode' : 'Light Mode'

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={`Switch theme. Current theme: ${label}`}
      title="テーマを切り替え"
    >
      <span className={styles.dot} aria-hidden="true" />
      <span>{label}</span>
    </button>
  )
}

export default ThemeButton
