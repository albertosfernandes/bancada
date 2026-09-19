export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ember">{kicker}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-ink-muted">{description}</p>}
    </div>
  )
}
