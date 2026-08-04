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

export const SAMPLE_MEDIA: Media[] = []
export const SAMPLE_LINKS: Link[] = []

export const SAMPLE_DATA = {
  memorial: SAMPLE_MEMORIAL,
  components: SAMPLE_COMPONENTS,
  media: SAMPLE_MEDIA,
  links: SAMPLE_LINKS,
}
