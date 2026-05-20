import { useEffect, useState } from 'react'

export type Passport = {
  id: string
  name: string
  email?: string
  issuedAt?: string
  claims?: Array<{ k: string; v: unknown }>
}

export default function usePassport() {
  const [data, setData] = useState<Passport | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch('/api/passport')
      .then((r) => {
        if (!r.ok) throw new Error(`status:${r.status}`)
        return r.json()
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch((err) => {
        if (!cancelled) setError(err as Error)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { data, loading, error }
}
