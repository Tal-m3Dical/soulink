import { useEffect } from 'react'
import type { Memorial, MemorialComponent, Media, Link as MemorialLink } from '@/lib/types'
import MemorialHero from './MemorialHero'
import IdentityBlock from './IdentityBlock'
import BioBlock from './BioBlock'
import GalleryBlock from './GalleryBlock'
import YouTubeBlock from './YouTubeBlock'
import EulogiesBlock from './EulogiesBlock'
import GraveBlock from './GraveBlock'
import CandleBlock from './CandleBlock'
import GuestbookBlock from './GuestbookBlock'
import ShareQRBlock from './ShareQRBlock'
import FamilyLinkBlock from './FamilyLinkBlock'
import MemorialFooter from './MemorialFooter'

interface Props {
  data: {
    memorial: Memorial
    components: MemorialComponent[]
    media: Media[]
    links: MemorialLink[]
  }
}

const COMPONENT_MAP: Record<string, React.ComponentType<Record<string, unknown>>> = {
  bio: BioBlock,
  gallery_photos: GalleryBlock,
  youtube: YouTubeBlock,
  eulogies: EulogiesBlock,
  grave_location: GraveBlock,
  candle: CandleBlock,
  guestbook: GuestbookBlock,
  share_qr: ShareQRBlock,
  family_links: FamilyLinkBlock,
}

// Templates the customer can choose between. `warm` is the fallback for any
// memorial saved before templates existed, or with an unrecognised value.
export const TEMPLATES = ['warm', 'light', 'evening', 'stone'] as const
export type Template = (typeof TEMPLATES)[number]

export function resolveTemplate(theme: string | null | undefined): Template {
  return (TEMPLATES as readonly string[]).includes(theme ?? '')
    ? (theme as Template)
    : 'warm'
}

export default function MemorialRenderer({ data }: Props) {
  const { memorial, components, media, links } = data
  const template = resolveTemplate(memorial.theme)

  // Set on <html> rather than a wrapper so body inherits it too — otherwise the
  // dark template shows a cream overscroll band above and below the page.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', template)
    return () => document.documentElement.removeAttribute('data-theme')
  }, [template])

  return (
    <div className="min-h-screen bg-warm-bg" data-theme={template}>
      <MemorialHero memorial={memorial} />
      <IdentityBlock memorial={memorial} />

      <div className="max-w-[760px] mx-auto px-5">
        {components.map((comp) => {
          const Component = COMPONENT_MAP[comp.component_key]
          if (!Component) return null
          return (
            <Component
              key={comp.id}
              memorial={memorial}
              config={comp.config}
              media={media}
              links={links}
            />
          )
        })}
      </div>

      <MemorialFooter />
    </div>
  )
}
