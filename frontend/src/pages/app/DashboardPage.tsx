import { Link } from 'react-router-dom'
import { UserRound, KeyRound, ArrowRight } from 'lucide-react'
import { useAuth } from '../../lib/auth'

const SHORTCUTS = [
  {
    to: '/app/perfil',
    icon: UserRound,
    title: 'Perfil',
    description: 'Veja seus dados de conta e função na plataforma.',
  },
  {
    to: '/app/tokens',
    icon: KeyRound,
    title: 'Gerar token',
    description: 'Crie e gerencie tokens de acesso à API do Bancada.',
  },
]

export function DashboardPage() {
  const { user } = useAuth()
  const firstName = user?.name.split(' ')[0]

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-ember">Visão geral</p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Olá, {firstName}</h1>
      <p className="mt-2 max-w-xl text-sm text-ink-muted">
        Esta é a área logada da bancada. Por enquanto ela reúne seu perfil e a geração de
        tokens de API — conforme as próximas fases do roadmap saem do papel, novos painéis
        entram aqui.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {SHORTCUTS.map(({ to, icon: Icon, title, description }) => (
          <Link
            key={to}
            to={to}
            className="group flex flex-col rounded-lg border border-border bg-panel p-6 transition-colors hover:border-ember/40"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-ember-dim">
              <Icon size={18} className="text-ember-soft" />
            </div>
            <h3 className="font-display font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-sm text-ink-muted">{description}</p>
            <span className="mt-4 flex items-center gap-1.5 text-xs font-medium text-ember opacity-0 transition-opacity group-hover:opacity-100">
              Acessar <ArrowRight size={13} />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-border-soft bg-panel/60 p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          status da fase 1
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          CloudFront, Cognito, API Gateway, Lambda, S3 e RDS/DynamoDB provisionados via
          Terraform — MVP serverless em construção.
        </p>
      </div>
    </div>
  )
}
