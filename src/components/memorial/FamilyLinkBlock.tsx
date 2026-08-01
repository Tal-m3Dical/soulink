interface Props {
  config: Record<string, unknown>
}

interface FamilyMember {
  name: string
  code: string
  relation: string
}

export default function FamilyLinkBlock({ config }: Props) {
  const members = (config.family as FamilyMember[] | undefined) || []
  if (members.length === 0) return null

  return (
    <section className="py-8">
      <h2 className="serif text-2xl font-medium text-warm-ink mb-1.5">בני משפחה</h2>
      <div className="w-11 h-0.5 bg-warm-gold rounded mb-4" />

      <div className="flex flex-col gap-3">
        {members.map((m) => (
          <a
            key={m.code}
            href={`/${m.code}`}
            className="flex items-center gap-3 p-4 rounded-xl border border-warm-line hover:border-warm-gold transition-colors no-underline bg-warm-surface"
          >
            <div className="w-10 h-10 rounded-full bg-warm-gold-soft flex items-center justify-center text-warm-gold-deep font-bold text-lg shrink-0">
              {m.name.charAt(0)}
            </div>
            <div>
              <span className="text-warm-ink font-semibold">{m.name}</span>
              <span className="text-warm-muted text-sm block">{m.relation}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
