// Template picker. Two independent axes — layout and palette — so the family
// picks where things sit and what colour they are separately. Renders the same
// fictional sample in every combination rather than showing swatches.
//
// Unlinked in production while the site is paused.

import { useEffect, useState } from 'react'
import MemorialRenderer from '@/components/memorial/MemorialRenderer'
import {
  LAYOUTS, PALETTES, LAYOUT_LABELS, PALETTE_LABELS, formatTemplate,
  type Layout, type Palette,
} from '@/components/memorial/layouts'
import { SAMPLE_DATA } from '@/lib/sample-memorial'

const SWATCH: Record<Palette, string> = {
  warm: '#c9ac78',
  light: '#c8ccd4',
  evening: '#2b2620',
  stone: '#c3b49c',
  sea: '#5b87a8',
  sage: '#7f9c82',
}

const CSS = `
.tpl-bar{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid #e2ddd4;padding:.75rem 1.25rem}
.tpl-row{max-width:64rem;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}
.tpl-row + .tpl-row{margin-top:.5rem}
.tpl-legend{font-size:.8125rem;color:#5c554a;min-width:4.5rem}
.tpl-btn{padding:.4375rem .875rem;border-radius:999px;border:1.5px solid #7a5c2b;background:transparent;
  color:#7a5c2b;font:inherit;font-size:.8125rem;font-weight:600;cursor:pointer}
.tpl-btn[aria-pressed="true"]{background:#7a5c2b;color:#fff}
.tpl-sw{display:inline-flex;align-items:center;gap:.4375rem}
.tpl-dot{width:.75rem;height:.75rem;border-radius:50%;border:1px solid rgba(0,0,0,.25)}
.tpl-note{max-width:64rem;margin:.5rem auto 0;font-size:.8125rem;color:#5c554a}
.tpl-note code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
.tpl-btn:focus-visible{outline:3px solid #7a5c2b;outline-offset:2px}
`

export default function TemplatesPage() {
  const [layout, setLayout] = useState<Layout>('classic')
  const [palette, setPalette] = useState<Palette>('warm')

  useEffect(() => {
    const previous = document.title
    document.title = 'Soulink — בחירת תבנית'
    return () => { document.title = previous }
  }, [])

  return (
    <>
      <style>{CSS}</style>

      <div className="tpl-bar">
        <div className="tpl-row">
          <span className="tpl-legend" id="lbl-layout">פריסה</span>
          {LAYOUTS.map((l) => (
            <button key={l} type="button" className="tpl-btn"
              aria-pressed={layout === l} aria-describedby="lbl-layout"
              onClick={() => setLayout(l)}>
              {LAYOUT_LABELS[l].name}
            </button>
          ))}
        </div>

        <div className="tpl-row">
          <span className="tpl-legend" id="lbl-palette">צבע</span>
          {PALETTES.map((p) => (
            <button key={p} type="button" className="tpl-btn"
              aria-pressed={palette === p} aria-describedby="lbl-palette"
              onClick={() => setPalette(p)}>
              <span className="tpl-sw">
                <span className="tpl-dot" style={{ background: SWATCH[p] }} aria-hidden="true" />
                {PALETTE_LABELS[p]}
              </span>
            </button>
          ))}
        </div>

        <p className="tpl-note">
          {LAYOUT_LABELS[layout].blurb} · <code>{formatTemplate(layout, palette)}</code>
        </p>
      </div>

      <div aria-live="polite">
        <MemorialRenderer
          key={formatTemplate(layout, palette)}
          data={{
            ...SAMPLE_DATA,
            memorial: { ...SAMPLE_DATA.memorial, theme: formatTemplate(layout, palette) },
          }}
        />
      </div>
    </>
  )
}
