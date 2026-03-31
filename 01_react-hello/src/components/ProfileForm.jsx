/* src/components/ProfileForm.jsx */
import { useState } from 'react'
import styles from './ProfileForm.module.css'

function ProfileForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>名前：</label>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前を入力"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>年齢：</label>
        <input
          className={styles.input}
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="年齢を入力"
        />
      </div>
      <button className={styles.button} onClick={handleSubmit}>送信</button>

      {submitted && (
        <p className={styles.result}>{name}（{age}歳）の情報を受け付けました。</p>
      )}
    </div>
  )
}

export default ProfileForm
