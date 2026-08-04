interface Props {
  config: Record<string, unknown>
}

interface Eulogy {
  text: string
  author: string
}

export default function EulogiesBlock({ config }: Props) {
  const eulogies = (config.eulogies as Eulogy[] | undefined) || []
  if (eulogies.length === 0) return null

  return (
    <section className="py-8">
      <div className="bg-warm-surface border border-warm-line rounded-2xl shadow-[0_6px_28px_rgba(80,60,30,0.08)] p-7 max-sm:p-5">
        <h2 className="serif text-2xl font-medium text-warm-ink mb-1.5">הספדים</h2>
        <div className="w-11 h-0.5 bg-warm-gold rounded mb-4" />

        <div className="flex flex-col gap-5">
          {eulogies.map((eulogy, i) => (
            <blockquote
              key={i}
              className="serif text-[17px] text-warm-ink border-s-[3px] border-warm-gold-soft ps-4 my-0"
            >
              "{eulogy.text}"
              <cite className="block mt-2 text-warm-gold text-sm not-italic">
                — {eulogy.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
