import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

export type User = {
  name: string
  email: string
  role: string
  memberSince: string
}

type AuthContextValue = {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const STORAGE_KEY = 'bancada.session'

// Conta de demonstração: enquanto o Cognito real (ver README/arquitetura) não
// está no ar, a autenticação roda localmente só para permitir navegar pela
// área logada da plataforma.
const DEMO_ACCOUNT = {
  email: 'alberto@bancada.dev',
  password: 'bancada',
  user: {
    name: 'Alberto S. Fernandes',
    email: 'alberto@bancada.dev',
    role: 'Platform Engineer (em construção)',
    memberSince: '2026',
  } satisfies User,
}

const AuthContext = createContext<AuthContextValue | null>(null)

function readStoredUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as User) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => readStoredUser())

  const login = useCallback(async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 450))

    const normalized = email.trim().toLowerCase()
    if (normalized !== DEMO_ACCOUNT.email || password !== DEMO_ACCOUNT.password) {
      throw new Error('Credenciais inválidas. Use a conta de demonstração indicada abaixo.')
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_ACCOUNT.user))
    setUser(DEMO_ACCOUNT.user)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({ user, isAuthenticated: user !== null, login, logout }),
    [user, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>')
  return ctx
}

export const DEMO_CREDENTIALS = {
  email: DEMO_ACCOUNT.email,
  password: DEMO_ACCOUNT.password,
}
