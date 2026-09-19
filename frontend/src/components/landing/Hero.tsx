import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { LogoMark } from '../Logo'
import { GithubIcon } from '../BrandIcons'

const BADGES = ['AWS', 'Terraform', 'Node.js', 'Serverless-first']

export function Hero() {
  return (
    <section className="bp-grid bp-glow relative overflow-hidden border-b border-border-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <div className="mb-8 flex items-center gap-2 rounded-full border border-border bg-panel/80 px-4 py-1.5 font-mono text-xs text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" />
          em desenvolvimento ativo — fase 1 · MVP serverless
        </div>

        <LogoMark className="mb-8 h-16 w-16" />

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
          Uma bancada de testes na{' '}
          <span className="text-gradient-ember">AWS</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Cada estudo, POC e MVP vira código de verdade, rodando em produção na nuvem —
          em vez de ficar só em anotações ou cursos. O espaço onde a distância entre{' '}
          <strong className="text-ink">SRE Specialist</strong> e{' '}
          <strong className="text-ink">Staff / Platform Engineer</strong> é testada, quebrada
          e reconstruída.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-md bg-ember px-5 py-3 text-sm font-semibold text-[#0A0D12] transition-colors hover:bg-ember-soft"
          >
            Entrar na plataforma
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://github.com/albertosfernandes/bancada"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-faint"
          >
            <GithubIcon size={16} />
            Ver repositório
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
          {BADGES.map((badge, i) => (
            <span key={badge} className="flex items-center gap-6">
              {badge}
              {i < BADGES.length - 1 && <span className="text-border">/</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
