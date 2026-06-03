/* src/hooks/useWorks.js */

import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

export function useWorks() {
    const [works, setWorks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        const fetchWorks = async () => {
            try {
                // json-server に APIリクエスト
                const res = await fetch(`${API_URL}/works`, { signal: controller.signal })
                if (!res.ok) {
                    setError('データの取得に失敗しました')
                    return
                }
                // JSONをJSオブジェクトに変換
                const data = await res.json()
                // 作品データを状態に保存
                setWorks(data)
            } catch (err) {
                // キャンセルは正常扱い
                if (err.name === 'AbortError') return
                setError(err.message)
            } finally {
                // ローディング完了
                setLoading(false)
            }
        }
        fetchWorks()

        // クリーンアップ：アンマウント時に fetch をキャンセル
        return () => controller.abort()
    }, [])

    // 作品, ローディング, エラー を返す
    return { works, loading, error }
}

export default useWorks