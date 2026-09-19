import { SectionHeading } from './SectionHeading'

const PHASES = [
  {
    phase: 'Fase 1',
    title: 'MVP serverless',
    description: 'CloudFront, Cognito, API Gateway, Lambda, S3, RDS/DynamoDB, Terraform.',
    status: 'done' as const,
  },
  {
    phase: 'Fase 2',
    title: 'Observabilidade',
    description: 'Métricas, logs estruturados e tracing distribuído.',
    status: 'planned' as const,
  },
  {
    phase: 'Fase 3',
    title: 'Processamento orientado a eventos',
    description: 'SQS, EventBridge, arquitetura assíncrona.',
    status: 'planned' as const,
  },
  {
    phase: 'Fase 4',
    title: 'EKS',
    description: 'Migração de cargas selecionadas para Kubernetes.',
    status: 'planned' as const,
  },
  {
    phase: 'Fase 5',
    title: 'Plataforma de dados',
    description: 'Pipelines de ingestão e transformação.',
    status: 'planned' as const,
  },
  {
    phase: 'Fase 6',
    title: 'IA/ML',
    description: 'Integração de modelos e casos de uso inteligentes.',
    status: 'planned' as const,
  },
]

const STATUS_STYLES = {
  done: 'border-ok bg-ok',
  progress: 'border-warn bg-warn',
  planned: 'border-border-soft bg-panel',
}

const STATUS_LABEL = {
  done: 'concluída',
  progress: 'em andamento',
  planned: 'planejada',
}

export function Roadmap() {
  return (
    <section id="roadmap" className="border-b border-border-soft px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading kicker="Roadmap" title="Para onde a bancada está indo" />

        <ol className="relative space-y-8 border-l border-border-soft pl-8">
          {PHASES.map(({ phase, title, description, status }) => (
            <li key={phase} className="relative">
              <span
                className={`absolute -left-[38px] top-1 h-3.5 w-3.5 rounded-full border-2 ${STATUS_STYLES[status]}`}
              />
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-ember">
                  {phase}
                </span>
                <span className="text-xs text-ink-faint">· {STATUS_LABEL[status]}</span>
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
