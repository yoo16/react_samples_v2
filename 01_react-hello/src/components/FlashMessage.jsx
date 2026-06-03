/* src/components/FlashMessage.jsx */

import { useState, useEffect } from 'react'
import styles from './FlashMessage.module.css'

function FlashMessage({ message, type = 'error' }) {
    const [dismissed, setDismissed] = useState(false)
    const duration = 3000

    // マウント時にタイマーセット、アンマウント時にクリア
    useEffect(() => {
        const timer = setTimeout(() => {
            setDismissed(true)
        }, duration)
        // クリーンアップ関数でタイマーをクリア
        return () => clearTimeout(timer)
    }, [])

    // メッセージがない or 既に消えている場合は null を返す
    if (!message || dismissed) return null

    return (
        <div className={`${styles.flash} ${styles[type]}`}>
            <p className={styles.message}>{message}</p>
        </div>
    )
}

export default FlashMessage