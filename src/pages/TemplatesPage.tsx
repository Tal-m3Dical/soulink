// Template picker. Renders the same sample memorial in every template so the
// family can see the real thing before choosing, rather than a swatch.
//
// Not routed in production yet — the site is still on the holding page.

import { useEffect, useState } from 'react'
import MemorialRenderer, { TEMPLATES, type Template } from '@/components/memorial/MemorialRenderer'
import { SAMPLE_DATA } from '@/lib/sample-memorial'

const LABELS: Record<Template, { name: string; blurb: string }> = {
  warm: { name: 'חם וקלאסי', blurb: 'שמנת וזהב, אותיות סריף. שקט ומכובד.' },
  light: { name: 'לבן ומינימלי', blurb: 'הרבה מרחב לבן, טיפוגרפיה דקה. התמונה היא הכל.' },
  evening: { name: 'כהה וערבי', blurb: 'רקע כהה עם אור רך של נר. אינטימי.' },
  stone: { name: 'אבן ומסורת', blurb: 'גווני אבן ירושלמית, אופי מסורתי.' },
}

const CSS = `
.tpl-bar{
  position:sticky;top:0;z-index:50;
  background:#ffffff;border-bottom:1px solid #e2ddd4;
  padding:.875rem 1.25rem;
}
.tpl-bar-inner{max-width:60rem;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}
.tpl-bar h1{font-family:Georgia,serif;font-size:1.0625rem;font-weight:500;margin:0;margin-inline-end:auto;color:#2e2a24}
.tpl-btn{
  padding:.5rem 1rem;border-radius:999px;border:1.5px solid #7a5c2b;
  background:transparent;color:#7a5c2b;font:inherit;font-size:.875rem;font-weight:600;cursor:pointer;
}
.tpl-btn[aria-pressed="true"]{background:#7a5c2b;color:#fff}
.tpl-meta{max-width:60rem;margin:0 auto;padding:.5rem 1.25rem 0;font-size:.875rem;color:#5c554a}
`

export default function TemplatesPage() {
  const [active, setActive] = useState<Template>('warm')

  useEffect(() => {
    const previous = document.title
    document.title = 'Soulink — בחירת תבנית'
    return () => { document.title = previous }
  }, [])

  return (
    <>
      <style>{CSS}</style>

      <div className="tpl-bar">
        <div className="tpl-bar-inner">
          <h1>בחירת תבנית</h1>
          {TEMPLATES.map((t) => (
            <button
              key={t}
              type="button"
              className="tpl-btn"
              aria-pressed={active === t}
              onClick={() => setActive(t)}
            >
              {LABELS[t].name}
            </button>
          ))}
        </div>
        <p className="tpl-meta">{LABELS[active].blurb}</p>
      </div>

      <div aria-live="polite">
        <MemorialRenderer
          key={active}
          data={{ ...SAMPLE_DATA, memorial: { ...SAMPLE_DATA.memorial, theme: active } }}
        />
      </div>
    </>
  )
}
