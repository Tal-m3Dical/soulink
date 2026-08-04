import { useState } from 'react'
import type { Media } from '@/lib/types'

interface Props {
  media: Media[]
}

export default function GalleryBlock({ media }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const photos = media.filter((m) => m.type === 'photo')

  if (photos.length === 0) return null

  return (
    <section className="py-8">
      <h2 className="serif text-2xl font-medium text-warm-ink mb-1.5">אלבום</h2>
      <div className="w-11 h-0.5 bg-warm-gold rounded mb-4" />

      <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setLightboxIndex(i)}
            className="aspect-square rounded-xl overflow-hidden bg-warm-gold-soft transition-transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer border-0 p-0"
          >
            <img
              src={photo.url}
              alt={photo.caption || ''}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 left-4 text-white text-3xl bg-transparent border-0 cursor-pointer"
            onClick={() => setLightboxIndex(null)}
            aria-label="סגור"
          >
            ✕
          </button>

          <img
            src={photos[lightboxIndex].url}
            alt={photos[lightboxIndex].caption || ''}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {photos[lightboxIndex].caption && (
            <p className="absolute bottom-6 text-white text-sm text-center">
              {photos[lightboxIndex].caption}
            </p>
          )}

          {lightboxIndex > 0 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-transparent border-0 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1) }}
              aria-label="הקודם"
            >
              ›
            </button>
          )}
          {lightboxIndex < photos.length - 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-transparent border-0 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1) }}
              aria-label="הבא"
            >
              ‹
            </button>
          )}
        </div>
      )}
    </section>
  )
}
