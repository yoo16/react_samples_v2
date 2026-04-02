/* src/components/LoginForm.jsx */
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import styles from './LoginForm.module.css'

function LoginForm() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')

  const handleSubmit = () => {
    if (!username.trim()) return
    login(username)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <h2 className={styles.title}>ログイン</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="ユーザー名を入力"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className={styles.button} onClick={handleSubmit}>
          ログイン
        </button>
      </div>
    </div>
  )
}

export default LoginForm
