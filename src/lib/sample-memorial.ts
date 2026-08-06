// Fixed sample used by the template picker. Deliberately NOT read from the
// database: the picker must never show one family's page to another family,
// and it has to render before any memorial exists.
//
// The name is the Israeli placeholder convention — ישראל ישראלי for a man,
// ישראלה ישראלי for a woman. Never use a real person here.

import type { Memorial, MemorialComponent, Media, Link } from './types'

export const SAMPLE_MEMORIAL: Memorial = {
  id: 'sample',
  code: 'sample',
  owner_id: null,
  theme: 'warm',
  full_name: 'ישראלה ישראלי',
  gender: 'female',
  birth_date: null,
  death_date: null,
  birth_year: 1945,
  death_year: 2023,
  bio:
    'נולדה בחיפה, גדלה בין הים להרים, ולימדה מתמטיקה ארבעים שנה.\n' +
    'אהבה גינון, קפה חזק בבוקר, ולשבת עם כל הנכדים סביב שולחן אחד.\n' +
    'מי שהכיר אותה יודע שהיא לא ידעה לומר "לא" לאף אחד שביקש עזרה.',
  header_image_url: null,
  grave_plot: 'חלקה 12',
  grave_row: 'שורה 4',
  town: 'תל אביב',
  country: 'ישראל',
  lat: null,
  lng: null,
  is_public: true,
  privacy: 'public',
  created_at: '2026-01-01T00:00:00.000Z',
}

export const SAMPLE_COMPONENTS: MemorialComponent[] = [
  { id: 'c1', memorial_id: 'sample', component_key: 'bio', enabled: true, sort_order: 1, config: {} },
  { id: 'c2', memorial_id: 'sample', component_key: 'gallery_photos', enabled: true, sort_order: 2, config: {} },
  {
    id: 'c3',
    memorial_id: 'sample',
    component_key: 'eulogies',
    enabled: true,
    sort_order: 3,
    config: {
      eulogies: [
        { author: 'הבת, מיכל', text: 'אמא לימדה אותי שאפשר להיות רכה וחזקה באותו הרגע.' },
        { author: 'תלמיד לשעבר', text: 'היא האמינה בי כשאף אחד אחר לא האמין. בזכותה למדתי הנדסה.' },
      ],
    },
  },
  { id: 'c4', memorial_id: 'sample', component_key: 'grave_location', enabled: true, sort_order: 4, config: {} },
  { id: 'c5', memorial_id: 'sample', component_key: 'candle', enabled: true, sort_order: 5, config: {} },
  { id: 'c6', memorial_id: 'sample', component_key: 'guestbook', enabled: true, sort_order: 6, config: {} },
  { id: 'c7', memorial_id: 'sample', component_key: 'share_qr', enabled: true, sort_order: 7, config: {} },
]

// Placeholder tiles drawn inline rather than fetched, so the picker renders
// with no network and no stock-photo licensing. They only exist to show how a
// layout arranges photographs — the family's real album replaces them.
function tile(a: string, b: string, label: string): string {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/>` +
    `</linearGradient></defs>` +
    `<rect width="400" height="400" fill="url(#g)"/>` +
    `<circle cx="200" cy="165" r="52" fill="rgba(255,255,255,0.34)"/>` +
    `<path d="M92 330c0-58 48-98 108-98s108 40 108 98z" fill="rgba(255,255,255,0.34)"/>` +
    `<text x="200" y="380" text-anchor="middle" font-family="Georgia,serif" font-size="22"` +
    ` fill="rgba(255,255,255,0.85)">${label}</text></svg>`
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
}

const TILES: Array<[string, string, string]> = [
  ['#c9b591', '#a88d63', 'תמונה'],
  ['#9fb4c4', '#6d8ba3', 'תמונה'],
  ['#b6c3ac', '#8aa07f', 'תמונה'],
  ['#cbb6b0', '#a68b83', 'תמונה'],
  ['#bdb2c6', '#94879f', 'תמונה'],
  ['#c7c2b4', '#a09a89', 'תמונה'],
  ['#d0bfa4', '#b09a75', 'תמונה'],
]

export const SAMPLE_MEDIA: Media[] = TILES.map(([a, b, label], i) => ({
  id: `m${i}`,
  memorial_id: 'sample',
  type: 'photo' as const,
  url: tile(a, b, label),
  caption: null,
  sort_order: i,
}))

// One video so the mosaic layout can show the tile riding inside the photo wall.
// NOTE: this is a real YouTube embed, so /templates does make a request to
// Google. That is true of any memorial page with a video, and /legal discloses it.
export const SAMPLE_LINKS: Link[] = [
  {
    id: 'v1',
    memorial_id: 'sample',
    kind: 'youtube',
    label: 'סרטון זיכרון',
    url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
  },
]

export const SAMPLE_DATA = {
  memorial: SAMPLE_MEMORIAL,
  components: SAMPLE_COMPONENTS,
  media: SAMPLE_MEDIA,
  links: SAMPLE_LINKS,
}
