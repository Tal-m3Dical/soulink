import type { Memorial } from '@/lib/types'

interface Props {
  memorial: Memorial
  config: Record<string, unknown>
}

export default function BioBlock({ memorial }: Props) {
  if (!memorial.bio) return null

  return (
    <section className="py-8">
      <div className="bg-warm-surface border border-warm-line rounded-2xl shadow-[0_6px_28px_rgba(80,60,30,0.08)] p-7 max-sm:p-5">
        <h2 className="serif text-2xl font-medium text-warm-ink mb-1.5">אודות</h2>
        <div className="w-11 h-0.5 bg-warm-gold rounded mb-4" />
        <p className="text-[17px] text-warm-ink leading-relaxed whitespace-pre-line">
          {memorial.bio}
        </p>
      </div>
    </section>
  )
}
