import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, LogIn } from 'lucide-react'
import { LogoMark } from '../components/Logo'
import { useAuth, DEMO_CREDENTIALS } from '../lib/auth'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState(DEMO_CREDENTIALS.email)
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname ?? '/app'

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Não foi possível entrar.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bp-grid flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <Link
          to="/"
          className="mb-8 flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <div className="rounded-xl border border-border bg-panel p-8 shadow-2xl shadow-black/40">
          <div className="mb-6 flex flex-col items-center text-center">
            <LogoMark className="mb-4 h-12 w-12" />
            <h1 className="font-display text-xl font-semibold text-ink">Entrar na bancada</h1>
            <p className="mt-1 text-sm text-ink-muted">Acesse seu perfil e seus tokens de API.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-muted">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-border bg-panel-raised px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ember"
                placeholder="voce@exemplo.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-xs font-medium text-ink-muted"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-border bg-panel-raised px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ember"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="rounded-md border border-ember-dim bg-ember-dim/20 px-3 py-2 text-xs text-ember-soft">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-ember px-4 py-2.5 text-sm font-semibold text-[#0A0D12] transition-colors hover:bg-ember-soft disabled:opacity-60"
            >
              <LogIn size={16} />
              {loading ? 'Entrando…' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6 rounded-md border border-border-soft bg-panel-raised px-4 py-3 font-mono text-[11px] leading-relaxed text-ink-faint">
            <p className="mb-1 text-ink-muted">modo demonstração — Cognito ainda não está no ar</p>
            <p>login: {DEMO_CREDENTIALS.email}</p>
            <p>senha: {DEMO_CREDENTIALS.password}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
