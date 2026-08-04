import type { Memorial } from '@/lib/types'
import { getDedicationText } from '@/lib/memorial-utils'

interface Props {
  memorial: Memorial
}

export default function MemorialHero({ memorial }: Props) {
  const hasImage = !!memorial.header_image_url

  return (
    <header
      className="relative h-[340px] max-sm:h-[260px] overflow-hidden flex items-end justify-center text-center"
      style={
        hasImage
          ? { backgroundImage: `url(${memorial.header_image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : { background: 'linear-gradient(150deg, var(--color-warm-gold-soft), var(--color-warm-line))' }
      }
    >
      {/* The family uploads this photo, so it can be any brightness. The scrim
          has to be dark enough that the white name below clears 4.5:1 even over
          a white sky, which is why it is heavier than it looks like it needs. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative z-10 pb-8 text-white">
        <div className="serif text-sm tracking-[0.22em] text-white/85 mb-2 font-semibold">
          {getDedicationText(memorial.gender)}
        </div>
        <h1 className="serif text-[clamp(30px,7vw,46px)] font-medium leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
          {memorial.full_name}
        </h1>
      </div>
    </header>
  )
}
