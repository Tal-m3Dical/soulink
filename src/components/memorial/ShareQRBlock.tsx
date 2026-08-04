import { useEffect, useRef, useState } from 'react'
import type { Memorial } from '@/lib/types'

interface Props {
  memorial: Memorial
}

export default function ShareQRBlock({ memorial }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [shareSupported] = useState(() => typeof navigator.share === 'function')

  const pageUrl = `${window.location.origin}/${memorial.code}`

  useEffect(() => {
    let cancelled = false
    import('qrcode').then((QRCode) => {
      if (cancelled || !canvasRef.current) return
      QRCode.toCanvas(canvasRef.current, pageUrl, {
        width: 180,
        margin: 1,
        color: { dark: '#33302b', light: '#fffdf9' },
      })
    })
    return () => { cancelled = true }
  }, [pageUrl])

  async function handleShare() {
    if (shareSupported) {
      await navigator.share({
        title: `${memorial.full_name} - Soulink`,
        url: pageUrl,
      })
    } else {
      await navigator.clipboard.writeText(pageUrl)
    }
  }

  return (
    <section className="text-center py-8">
      <h2 className="serif text-2xl font-medium text-warm-ink mb-1.5">שתפו את הדף</h2>
      <div className="w-11 h-0.5 bg-warm-gold rounded mx-auto mb-4" />

      <canvas ref={canvasRef} className="mx-auto rounded-xl" />

      <div className="mt-4 flex gap-3 justify-center flex-wrap">
        <button
          onClick={handleShare}
          className="py-2.5 px-6 rounded-full border-[1.5px] border-warm-gold text-warm-gold font-semibold text-[15px] bg-transparent hover:bg-warm-gold hover:text-warm-on-gold transition-colors cursor-pointer"
        >
          {shareSupported ? 'שיתוף' : 'העתקת קישור'}
        </button>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(pageUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-6 rounded-full border-[1.5px] border-warm-share text-warm-share font-semibold text-[15px] no-underline hover:bg-warm-share hover:text-warm-bg transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}
