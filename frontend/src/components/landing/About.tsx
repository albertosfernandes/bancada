import { Hammer, Gauge } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const PRINCIPLES = [
  {
    icon: Hammer,
    title: 'Tecnicamente sólida',
    description:
      'Sem atalhos superficiais. Cada peça — do IAM ao pipeline — é construída para aguentar uso real, não só para "funcionar na demo".',
  },
  {
    icon: Gauge,
    title: 'Barata e escalável',
    description:
      'Arquitetura serverless-first, com custo sob controle. Escala quando precisa, custa quase nada quando ninguém está olhando.',
  },
]

export function About() {
  return (
    <section id="sobre" className="border-b border-border-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Sobre o projeto"
          title="Da anotação ao código em produção"
          description="O Bancada nasceu com o nome Forge e foi rebatizado para ter identidade própria."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PRINCIPLES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-panel p-8 transition-colors hover:border-ember/40"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-ember-dim">
                <Icon size={20} className="text-ember-soft" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-ink-muted">
          Sair do nível de <strong className="text-ink">SRE Specialist</strong> e chegar em{' '}
          <strong className="text-ink">Staff Engineer / Platform Engineer</strong> exige
          profundidade que só se constrói construindo. O Bancada é onde esse conhecimento é
          testado, quebrado e reconstruído — em produção, na nuvem.
        </p>
      </div>
    </section>
  )
}
