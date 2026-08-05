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

  const blocks = orderForLayout(components, layout).map((comp) => {
    const Component = COMPONENT_MAP[comp.component_key]
    if (!Component) return null
    return (
      <div key={comp.id} className="mem-block" data-block={comp.component_key}>
        <Component memorial={memorial} config={comp.config} media={media} links={links} />
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
          <div className="mem-flow">{blocks}</div>
        </>
      )}

      <MemorialFooter />
    </div>
  )
}
