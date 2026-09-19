import { Link } from 'react-router-dom'
import { LogoMark } from '../components/Logo'

export function NotFoundPage() {
  return (
    <div className="bp-grid flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <LogoMark className="h-12 w-12" />
      <div>
        <p className="font-mono text-sm text-ember">404</p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-ink">
          Essa peça não está na bancada
        </h1>
      </div>
      <Link
        to="/"
        className="rounded-md border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-ember hover:text-ember"
      >
        Voltar ao início
      </Link>
    </div>
  )
}
