import type { Link as MemorialLink } from '@/lib/types'

interface Props {
  links: MemorialLink[]
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

/** The first video, stripped of its section heading, sized to sit in the photo
 *  grid. Used by the mosaic layout so the wall reads photos, video, photos —
 *  the standalone YouTubeBlock is suppressed there to avoid showing it twice. */
export function YouTubeTile({ links }: Props) {
  const link = links.find((l) => l.kind === 'youtube' && extractYouTubeId(l.url))
  if (!link) return null
  const videoId = extractYouTubeId(link.url)!

  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-warm-line bg-warm-surface">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={link.label || 'סרטון זיכרון'}
        loading="lazy"
      />
    </div>
  )
}

export default function YouTubeBlock({ links }: Props) {
  const ytLinks = links.filter((l) => l.kind === 'youtube')
  if (ytLinks.length === 0) return null

  return (
    <section className="py-8">
      <h2 className="serif text-2xl font-medium text-warm-ink mb-1.5">סרטונים</h2>
      <div className="w-11 h-0.5 bg-warm-gold rounded mb-4" />

      <div className="flex flex-col gap-4">
        {ytLinks.map((link) => {
          const videoId = extractYouTubeId(link.url)
          if (!videoId) return null
          return (
            <div key={link.id} className="rounded-xl overflow-hidden border border-warm-line">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={link.label}
                loading="lazy"
              />
              {link.label && (
                <p className="text-center text-warm-muted text-sm py-2">{link.label}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
