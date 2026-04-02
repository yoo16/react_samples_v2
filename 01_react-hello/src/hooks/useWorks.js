/* src/hooks/useWorks.js */
import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

export function useWorks() {
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchWorks = async () => {
      try {
        const res = await fetch(`${API_URL}/works`)
        if (!res.ok) throw new Error('データの取得に失敗しました')
        const data = await res.json()
        if (isMounted) {
          setWorks(data)
          setLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message)
          setLoading(false)
        }
      }
    }

    fetchWorks()

    return () => {
      isMounted = false
    }
  }, [])

  return { works, loading, error }
}
