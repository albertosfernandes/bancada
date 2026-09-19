import { useAuth } from '../../lib/auth'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

const FIELDS = [
  { label: 'Nome', key: 'name' as const },
  { label: 'E-mail', key: 'email' as const },
  { label: 'Função', key: 'role' as const },
  { label: 'Membro desde', key: 'memberSince' as const },
]

export function ProfilePage() {
  const { user } = useAuth()
  if (!user) return null

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-ember">Conta</p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Perfil</h1>
      <p className="mt-2 max-w-xl text-sm text-ink-muted">
        Dados básicos da sua conta. Esta seção passa a ser gerenciada pelo Cognito quando o
        backend de autenticação entrar em produção.
      </p>

      <div className="mt-8 flex items-center gap-4 rounded-lg border border-border bg-panel p-6">
        <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-ember-dim font-display text-lg font-semibold text-ember-soft">
          {initials(user.name)}
        </div>
        <div>
          <p className="font-display font-semibold text-ink">{user.name}</p>
          <p className="text-sm text-ink-muted">{user.role}</p>
        </div>
      </div>

      <dl className="mt-6 divide-y divide-border-soft rounded-lg border border-border-soft bg-panel/60">
        {FIELDS.map(({ label, key }) => (
          <div key={key} className="flex items-center justify-between px-6 py-4">
            <dt className="text-sm text-ink-muted">{label}</dt>
            <dd className="font-mono text-sm text-ink">{user[key]}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
