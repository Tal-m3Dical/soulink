export type Gender = 'male' | 'female'
export type Privacy = 'public' | 'link' | 'hidden'
export type ComponentKey =
  | 'header_image'
  | 'identity'
  | 'bio'
  | 'gallery_photos'
  | 'gallery_video'
  | 'youtube'
  | 'eulogies'
  | 'grave_location'
  | 'guestbook'
  | 'candle'
  | 'social_links'
  | 'family_links'
  | 'share_qr'

export interface Memorial {
  id: string
  code: string
  owner_id: string | null
  theme: string
  full_name: string
  gender: Gender
  birth_date: string | null
  death_date: string | null
  birth_year: number
  death_year: number
  bio: string | null
  header_image_url: string | null
  grave_plot: string | null
  grave_row: string | null
  town: string | null
  country: string | null
  lat: number | null
  lng: number | null
  is_public: boolean
  privacy: Privacy
  created_at: string
}

export interface MemorialComponent {
  id: string
  memorial_id: string
  component_key: ComponentKey
  enabled: boolean
  sort_order: number
  config: Record<string, unknown>
}

export interface Media {
  id: string
  memorial_id: string
  type: 'photo' | 'video' | 'audio'
  url: string
  caption: string | null
  sort_order: number
}

export interface Link {
  id: string
  memorial_id: string
  kind: 'social' | 'youtube' | 'external' | 'spouse'
  label: string
  url: string
}

export interface GuestbookEntry {
  id: string
  memorial_id: string
  name: string
  message: string
  image_url: string | null
  likes: number
  created_at: string
}

export type Database = {
  public: {
    Tables: {
      memorials: { Row: Memorial; Insert: Omit<Memorial, 'id' | 'created_at'>; Update: Partial<Memorial> }
      memorial_components: { Row: MemorialComponent; Insert: Omit<MemorialComponent, 'id'>; Update: Partial<MemorialComponent> }
      media: { Row: Media; Insert: Omit<Media, 'id'>; Update: Partial<Media> }
      links: { Row: Link; Insert: Omit<Link, 'id'>; Update: Partial<Link> }
      guestbook: { Row: GuestbookEntry; Insert: Omit<GuestbookEntry, 'id' | 'created_at' | 'likes'>; Update: Partial<GuestbookEntry> }
    }
  }
}
