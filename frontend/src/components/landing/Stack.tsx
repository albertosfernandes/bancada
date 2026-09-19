import { SectionHeading } from './SectionHeading'

const LAYERS = [
  { layer: 'Frontend', tech: 'React + Vite + TypeScript' },
  { layer: 'Backend', tech: 'Node.js (AWS Lambda)' },
  { layer: 'API', tech: 'Amazon API Gateway' },
  { layer: 'Autenticação', tech: 'Amazon Cognito' },
  { layer: 'CDN / Static hosting', tech: 'CloudFront + S3' },
  { layer: 'Dados', tech: 'RDS / DynamoDB' },
  { layer: 'Infraestrutura', tech: 'Terraform' },
  { layer: 'Ambiente de dev', tech: 'Devbox + Dev Containers' },
  { layer: 'Observabilidade', tech: 'Datadog (planejado)' },
]

export function Stack() {
  return (
    <section id="stack" className="border-b border-border-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Stack técnica" title="Ferramentas por camada" />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LAYERS.map(({ layer, tech }) => (
            <div
              key={layer}
              className="flex items-center justify-between gap-4 rounded-md border border-border-soft bg-panel px-5 py-4"
            >
              <span className="text-sm text-ink-muted">{layer}</span>
              <span className="text-right font-mono text-sm text-ink">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
