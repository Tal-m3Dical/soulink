import { useEffect } from 'react'
import type { Memorial, MemorialComponent, Media, Link as MemorialLink } from '@/lib/types'
import MemorialHero from './MemorialHero'
import IdentityBlock from './IdentityBlock'
import BioBlock from './BioBlock'
import GalleryBlock from './GalleryBlock'
import YouTubeBlock, { YouTubeTile } from './YouTubeBlock'
import EulogiesBlock from './EulogiesBlock'
import GraveBlock from './GraveBlock'
import CandleBlock from './CandleBlock'
import GuestbookBlock from './GuestbookBlock'
import ShareQRBlock from './ShareQRBlock'
import FamilyLinkBlock from './FamilyLinkBlock'
import MemorialFooter from './MemorialFooter'
import { parseTemplate, orderForLayout } from './layouts'

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

export default function MemorialRenderer({ data }: Props) {
  const { memorial, components, media, links } = data
  const { layout, palette } = parseTemplate(memorial.theme)

  // Set on <html> rather than a wrapper so body inherits it too — otherwise the
  // dark palette shows a light overscroll band above and below the page.
  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette)
    return () => document.documentElement.removeAttribute('data-palette')
  }, [palette])

  // In mosaic the video rides inside the photo grid instead of sitting in its
  // own section below it, so the standalone youtube block is dropped.
  const inlineVideo = layout === 'mosaic' && links.some((l) => l.kind === 'youtube')

  const blocks = orderForLayout(components, layout)
    .filter((comp) => !(inlineVideo && comp.component_key === 'youtube'))
    .map((comp) => {
      const Component = COMPONENT_MAP[comp.component_key]
      if (!Component) return null
      const extra =
        inlineVideo && comp.component_key === 'gallery_photos'
          ? { inlineTile: <YouTubeTile links={links} />, inlineAfter: 3 }
          : {}
      return (
        <div key={comp.id} className="mem-block" data-block={comp.component_key}>
          <Component memorial={memorial} config={comp.config} media={media} links={links} {...extra} />
        </div>
      )
    })

  return (
    <div className="min-h-screen bg-warm-bg" data-palette={palette} data-layout={layout}>
      <MemorialHero memorial={memorial} />

      {layout === 'split' ? (
        // The one layout that needs a different DOM, not just different CSS:
        // identity has to be a sibling column so it can stick while content scrolls.
        <div className="mem-split">
          <aside className="mem-split-aside">
            <IdentityBlock memorial={memorial} />
          </aside>
          <div className="mem-split-main">{blocks}</div>
        </div>
      ) : (
        <>
          <IdentityBlock memorial={memorial} />
          <div className="mem-flow">
            {/* A life axis with no years on it is just a list with dots. */}
            {layout === 'timeline' && (
              <p className="mem-rail-cap" aria-hidden="true">{memorial.birth_year}</p>
            )}
            {blocks}
            {layout === 'timeline' && (
              <p className="mem-rail-cap" aria-hidden="true">{memorial.death_year}</p>
            )}
          </div>
        </>
      )}

      <MemorialFooter />
    </div>
  )
}
