import type { LucideIcon } from 'lucide-react'
import { User, Globe, Server, ShieldCheck, Zap, Database, Boxes, ArrowRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

type Node = { icon: LucideIcon; label: string; hint: string }

const COLUMNS: Node[][] = [
  [{ icon: User, label: 'Usuário', hint: 'navegador' }],
  [{ icon: Globe, label: 'CloudFront', hint: 'CDN' }],
  [
    { icon: Server, label: 'S3', hint: 'frontend estático' },
    { icon: Server, label: 'API Gateway', hint: 'roteamento' },
  ],
  [
    { icon: ShieldCheck, label: 'Cognito', hint: 'auth' },
    { icon: Zap, label: 'Lambda', hint: 'Node.js' },
  ],
  [
    { icon: Database, label: 'RDS', hint: 'relacional' },
    { icon: Boxes, label: 'DynamoDB', hint: 'NoSQL' },
  ],
]

function NodeCard({ icon: Icon, label, hint }: Node) {
  return (
    <div className="flex w-40 flex-col items-center gap-2 rounded-lg border border-border bg-panel-raised px-4 py-5 text-center">
      <Icon size={20} className="text-cyan" />
      <div>
        <p className="font-mono text-sm font-medium text-ink">{label}</p>
        <p className="text-[11px] text-ink-faint">{hint}</p>
      </div>
    </div>
  )
}

export function Architecture() {
  return (
    <section id="arquitetura" className="border-b border-border-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Arquitetura"
          title="Fase atual — MVP serverless"
          description="Toda a infraestrutura é provisionada via Terraform."
        />

        <div className="overflow-x-auto rounded-xl border border-border-soft bg-panel/60 p-8">
          <div className="flex min-w-[820px] items-center justify-center gap-3">
            {COLUMNS.map((column, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex flex-col gap-3">
                  {column.map((node) => (
                    <NodeCard key={node.label} {...node} />
                  ))}
                </div>
                {i < COLUMNS.length - 1 && (
                  <ArrowRight size={18} className="flex-none text-ink-faint" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
