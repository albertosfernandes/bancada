import { Logo } from '../Logo'
import { GithubIcon, LinkedinIcon } from '../BrandIcons'

export function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Logo showWordmark={false} className="opacity-70" />

        <p className="text-center text-sm text-ink-faint md:text-left">
          Alberto S. Fernandes · Distribuído sob a licença MIT
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/albertosfernandes"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/alberto-souza-fernandes"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
