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
  header_image_url: '/demo/hero.webp',
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

// Demo photographs in public/demo/. Generated locally (SwarmUI, Z-Image Turbo)
// rather than taken from a stock library — no licence to track, and nothing here
// depicts a real person or a real grave. Life-texture shots carry most of it;
// one portrait is enough to show how each layout treats a face.
//
// Captions are real alt text, not filler: the gallery renders them into alt=,
// so an empty caption means a screen reader hears nothing.
const PHOTOS: Array<[string, string]> = [
  ['portrait', 'ישראלה יושבת ליד החלון, מביטה החוצה ומחייכת'],
  ['coffee', 'ידיה של ישראלה אוחזות בספל קפה שחור על שולחן המטבח'],
  ['garden', 'הגינה שלה, ורדים ומזלף השקיה ירוק בין עציצי חרס'],
  ['chalkboard', 'לוח ירוק בכיתה ריקה עם תרגילי מתמטיקה בכתב ידה'],
  ['sea', 'ספסל ריק מול הים בטיילת, בשעת בין ערביים'],
  ['table', 'שולחן האוכל המשפחתי ערוך, הכיסאות ריקים'],
  ['letters', 'ערימת מכתבים בכתב יד ואלבום תמונות ישן'],
]

export const SAMPLE_MEDIA: Media[] = PHOTOS.map(([name, caption], i) => ({
  id: `m${i}`,
  memorial_id: 'sample',
  type: 'photo' as const,
  url: `/demo/${name}.webp`,
  caption,
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
