import type { Memorial } from '@/lib/types'
import { calculateAge, getBlessingText } from '@/lib/memorial-utils'

interface Props {
  memorial: Memorial
}

export default function IdentityBlock({ memorial }: Props) {
  const age = calculateAge(memorial.birth_year, memorial.death_year)

  return (
    <div className="text-center py-6">
      <div className="serif text-xl tracking-wide text-warm-ink">
        {memorial.birth_year} — {memorial.death_year}
      </div>

      <div className="flex items-center justify-center gap-3 my-3.5 text-warm-gold">
        <span className="h-px w-14 bg-gradient-to-l from-warm-gold-soft to-transparent" />
        <span className="serif">✦</span>
        <span className="h-px w-14 bg-gradient-to-r from-warm-gold-soft to-transparent" />
      </div>

      <div className="text-warm-muted text-[15px]">
        גיל {age} · {getBlessingText(memorial.gender)}
      </div>
    </div>
  )
}
