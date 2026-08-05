// A template = one LAYOUT + one PALETTE, stored together in memorials.theme as
// "layout/palette" so this needed no migration. Anything unrecognised (including
// the old single-value rows like "warm") falls back safely.

export const LAYOUTS = ['classic', 'split', 'mosaic', 'timeline', 'book'] as const
export const PALETTES = ['warm', 'light', 'evening', 'stone', 'sea', 'sage'] as const

export type Layout = (typeof LAYOUTS)[number]
export type Palette = (typeof PALETTES)[number]

export const LAYOUT_LABELS: Record<Layout, { name: string; blurb: string }> = {
  classic: { name: 'קלאסי', blurb: 'טור אחד, כרטיסים בזה אחר זה. הכי קריא, הכי בטוח.' },
  split: { name: 'פרופיל', blurb: 'פאנל קבוע עם הדיוקן והתאריכים, והתוכן נגלל לצידו.' },
  mosaic: { name: 'פסיפס', blurb: 'התמונות ברוחב מלא ובגדלים משתנים, עם סרטון משובץ ביניהן.' },
  timeline: { name: 'ציר חיים', blurb: 'הכל תלוי על ציר אנכי, לפי סדר הזמנים.' },
  book: { name: 'ספר', blurb: 'הטקסט קודם. הספדים וסיפורים גדולים, הגלריה אחריהם.' },
}

export const PALETTE_LABELS: Record<Palette, string> = {
  warm: 'חם וקלאסי',
  light: 'לבן ומינימלי',
  evening: 'כהה וערבי',
  stone: 'אבן ומסורת',
  sea: 'כחול ים',
  sage: 'ירקרק ולבן',
}

export const DEFAULT_LAYOUT: Layout = 'classic'
export const DEFAULT_PALETTE: Palette = 'warm'

export function parseTemplate(theme: string | null | undefined): { layout: Layout; palette: Palette } {
  const [rawLayout, rawPalette] = (theme ?? '').split('/')
  // Rows written before layouts existed hold just a palette name.
  const layout = (LAYOUTS as readonly string[]).includes(rawLayout)
    ? (rawLayout as Layout)
    : DEFAULT_LAYOUT
  const paletteCandidate = rawPalette ?? rawLayout
  const palette = (PALETTES as readonly string[]).includes(paletteCandidate)
    ? (paletteCandidate as Palette)
    : DEFAULT_PALETTE
  return { layout, palette }
}

export function formatTemplate(layout: Layout, palette: Palette): string {
  return `${layout}/${palette}`
}

// `book` leads with the words rather than the pictures, so it overrides the
// stored sort_order. Every other layout respects whatever the family arranged.
const BOOK_ORDER = ['bio', 'eulogies', 'guestbook', 'gallery_photos', 'youtube', 'candle', 'grave_location', 'share_qr', 'family_links']

export function orderForLayout<T extends { component_key: string; sort_order: number }>(
  components: T[],
  layout: Layout,
): T[] {
  if (layout !== 'book') return [...components].sort((a, b) => a.sort_order - b.sort_order)
  const rank = (k: string) => {
    const i = BOOK_ORDER.indexOf(k)
    return i === -1 ? BOOK_ORDER.length : i
  }
  return [...components].sort(
    (a, b) => rank(a.component_key) - rank(b.component_key) || a.sort_order - b.sort_order,
  )
}
