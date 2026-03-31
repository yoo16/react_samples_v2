/* src/components/Counter.jsx */
import { useState } from 'react'
import styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.counter}>
      <p className={styles.count}>{count}</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => setCount(count + 1)}>+1</button>
        <button className={styles.button} onClick={() => setCount(count - 1)}>-1</button>
        <button className={styles.buttonReset} onClick={() => setCount(0)}>リセット</button>
      </div>
    </div>
  )
}

export default Counter
