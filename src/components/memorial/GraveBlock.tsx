import type { Memorial } from '@/lib/types'

interface Props {
  memorial: Memorial
}

export default function GraveBlock({ memorial }: Props) {
  const { grave_plot, grave_row, town, country, lat, lng } = memorial

  const hasLocation = lat && lng
  const mapsQuery = hasLocation
    ? `${lat},${lng}`
    : [town, country].filter(Boolean).join(', ')
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`
  const wazeUrl = hasLocation
    ? `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`
    : `https://waze.com/ul?q=${encodeURIComponent(mapsQuery)}&navigate=yes`
  const mapsEmbed = hasLocation
    ? `https://www.google.com/maps?q=${lat},${lng}&output=embed`
    : null

  return (
    <section className="py-8">
      <div className="bg-warm-surface border border-warm-line rounded-2xl shadow-[0_6px_28px_rgba(80,60,30,0.08)] p-7 max-sm:p-5">
        <h2 className="serif text-2xl font-medium text-warm-ink mb-1.5">מיקום קבורה</h2>
        <div className="w-11 h-0.5 bg-warm-gold rounded mb-4" />

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-warm-muted text-[15px] mb-4">
          {grave_plot && <span>חלקה <b className="text-warm-ink font-semibold">{grave_plot}</b></span>}
          {grave_row && <span>שורה <b className="text-warm-ink font-semibold">{grave_row}</b></span>}
          {town && <span>יישוב <b className="text-warm-ink font-semibold">{town}</b></span>}
          {country && <span>מדינה <b className="text-warm-ink font-semibold">{country}</b></span>}
        </div>

        {mapsEmbed ? (
          <iframe
            src={mapsEmbed}
            className="w-full h-[200px] rounded-xl border border-warm-line"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="מיקום הקבר"
          />
        ) : (
          <div className="h-[200px] rounded-xl bg-warm-surface border border-warm-line flex items-center justify-center text-warm-muted">
            מפה · הזינו קואורדינטות
          </div>
        )}

        <div className="flex gap-3 mt-4 flex-wrap">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[150px] text-center no-underline py-3 px-4 rounded-full border-[1.5px] border-warm-gold text-warm-gold font-semibold text-[15px] hover:bg-warm-gold hover:text-warm-on-gold transition-colors"
          >
            ניווט ב-Google
          </a>
          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[150px] text-center no-underline py-3 px-4 rounded-full border-[1.5px] border-warm-route text-warm-route font-semibold text-[15px] hover:bg-warm-route hover:text-warm-bg transition-colors"
          >
            ניווט ב-Waze
          </a>
        </div>
      </div>
    </section>
  )
}
