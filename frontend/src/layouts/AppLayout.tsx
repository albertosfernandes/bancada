import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, UserRound, KeyRound, LogOut } from 'lucide-react'
import { Logo, LogoMark } from '../components/Logo'
import { useAuth } from '../lib/auth'

const NAV_ITEMS = [
  { to: '/app', label: 'Visão geral', icon: LayoutDashboard, end: true },
  { to: '/app/perfil', label: 'Perfil', icon: UserRound },
  { to: '/app/tokens', label: 'Gerar token', icon: KeyRound },
]

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

export function AppLayout() {
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-screen bg-bg">
      <aside className="flex w-64 flex-none flex-col border-r border-border-soft bg-panel">
        <div className="flex h-16 items-center border-b border-border-soft px-5">
          <Logo />
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-panel-raised text-ember'
                    : 'text-ink-muted hover:bg-panel-raised hover:text-ink'
                }`
              }
            >
              <Icon size={18} strokeWidth={2} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-border-soft p-3">
          <div className="flex items-center gap-3 rounded-md px-3 py-2.5">
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ember-dim font-display text-sm font-semibold text-ember-soft">
              {user ? initials(user.name) : '?'}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{user?.name}</p>
              <p className="truncate text-xs text-ink-faint">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="mt-1 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-panel-raised hover:text-ember"
          >
            <LogOut size={18} strokeWidth={2} />
            Sair
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 flex-none items-center justify-between border-b border-border-soft bg-bg px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            bancada · área logada
          </p>
          <LogoMark className="h-6 w-6 opacity-60" />
        </header>
        <main className="flex-1 overflow-y-auto px-8 py-10">
          <div className="mx-auto max-w-4xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
