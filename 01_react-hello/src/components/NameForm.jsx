/* src/components/NameForm.jsx */
import { useState } from 'react'
import styles from './NameForm.module.css'

function NameForm() {
  const [name, setName] = useState('')

  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前を入力"
      />
      <p className={styles.message}>こんにちは、{name} さん！</p>
    </div>
  )
}

export default NameForm
