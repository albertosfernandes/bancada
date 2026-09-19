import { useState, type FormEvent } from 'react'
import { Copy, Check, Trash2, KeyRound } from 'lucide-react'
import { useTokens, type ApiToken } from '../../lib/tokens'

function maskToken(token: string) {
  return `${token.slice(0, 8)}${'•'.repeat(18)}${token.slice(-4)}`
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function TokenRow({ token, revealed, onRevoke }: { token: ApiToken; revealed: boolean; onRevoke: (id: string) => void }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(token.token)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border-soft bg-panel px-5 py-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-ink">{token.label}</p>
        <p className="mt-1 truncate font-mono text-xs text-ink-faint">
          {revealed ? token.token : maskToken(token.token)}
        </p>
        <p className="mt-1 text-[11px] text-ink-faint">criado em {formatDate(token.createdAt)}</p>
      </div>
      <div className="flex flex-none items-center gap-2">
        <button
          onClick={handleCopy}
          aria-label="Copiar token"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-cyan hover:text-cyan"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
        <button
          onClick={() => onRevoke(token.id)}
          aria-label="Revogar token"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-ember hover:text-ember"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  )
}

export function TokensPage() {
  const { tokens, createToken, revokeToken } = useTokens()
  const [label, setLabel] = useState('')
  const [revealedId, setRevealedId] = useState<string | null>(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const created = createToken(label)
    setRevealedId(created.id)
    setLabel('')
  }

  function handleRevoke(id: string) {
    revokeToken(id)
    if (revealedId === id) setRevealedId(null)
  }

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-ember">API</p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-ink">Gerar token</h1>
      <p className="mt-2 max-w-xl text-sm text-ink-muted">
        Tokens de acesso para chamar a API do Bancada. Guarde o valor completo assim que ele
        for gerado — depois disso ele fica mascarado.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-3 rounded-lg border border-border bg-panel p-5 sm:flex-row"
      >
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Nome do token (ex.: CI pipeline)"
          className="flex-1 rounded-md border border-border bg-panel-raised px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ember"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-md bg-ember px-4 py-2.5 text-sm font-semibold text-[#0A0D12] transition-colors hover:bg-ember-soft"
        >
          <KeyRound size={16} />
          Gerar
        </button>
      </form>

      <div className="mt-6 space-y-3">
        {tokens.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border-soft px-5 py-8 text-center text-sm text-ink-faint">
            Nenhum token gerado ainda.
          </p>
        ) : (
          tokens.map((token) => (
            <TokenRow
              key={token.id}
              token={token}
              revealed={token.id === revealedId}
              onRevoke={handleRevoke}
            />
          ))
        )}
      </div>
    </div>
  )
}
