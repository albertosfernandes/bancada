import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#arquitetura', label: 'Arquitetura' },
  { href: '#stack', label: 'Stack' },
  { href: '#roadmap', label: 'Roadmap' },
]

export function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" aria-label="Bancada — início">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          to="/login"
          className="rounded-md border border-border bg-panel-raised px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ember hover:text-ember"
        >
          Entrar
        </Link>
      </div>
    </header>
  )
}
