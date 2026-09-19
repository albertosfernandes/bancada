import { useCallback, useEffect, useState } from 'react'

export type ApiToken = {
  id: string
  label: string
  token: string
  createdAt: string
}

const STORAGE_KEY = 'bancada.tokens'

function randomSegment(length: number) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let out = ''
  const bytes = new Uint8Array(length)
  crypto.getRandomValues(bytes)
  for (const b of bytes) out += chars[b % chars.length]
  return out
}

function generateToken() {
  return `bnc_${randomSegment(8)}_${randomSegment(24)}`
}

function readStoredTokens(): ApiToken[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ApiToken[]) : []
  } catch {
    return []
  }
}

export function useTokens() {
  const [tokens, setTokens] = useState<ApiToken[]>(() => readStoredTokens())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens))
  }, [tokens])

  const createToken = useCallback((label: string) => {
    const next: ApiToken = {
      id: crypto.randomUUID(),
      label: label.trim() || 'Token sem nome',
      token: generateToken(),
      createdAt: new Date().toISOString(),
    }
    setTokens((prev) => [next, ...prev])
    return next
  }, [])

  const revokeToken = useCallback((id: string) => {
    setTokens((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return { tokens, createToken, revokeToken }
}
