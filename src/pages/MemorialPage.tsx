import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import type { Memorial, MemorialComponent, Media, Link as MemorialLink } from '@/lib/types'
import MemorialRenderer from '@/components/memorial/MemorialRenderer'
import NotFoundPage from './NotFoundPage'

interface MemorialData {
  memorial: Memorial
  components: MemorialComponent[]
  media: Media[]
  links: MemorialLink[]
}

export default function MemorialPage() {
  const { code } = useParams<{ code: string }>()
  const [data, setData] = useState<MemorialData | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!code) return

    async function load() {
      try {
        const { data: memorial, error } = await supabase
          .from('memorials')
          .select('*')
          .eq('code', code)
          .eq('is_public', true)
          .single()

        if (error || !memorial) {
          setNotFound(true)
          setLoading(false)
          return
        }

        const [componentsRes, mediaRes, linksRes] = await Promise.all([
          supabase
            .from('memorial_components')
            .select('*')
            .eq('memorial_id', memorial.id)
            .eq('enabled', true)
            .order('sort_order'),
          supabase
            .from('media')
            .select('*')
            .eq('memorial_id', memorial.id)
            .order('sort_order'),
          supabase
            .from('links')
            .select('*')
            .eq('memorial_id', memorial.id),
        ])

        setData({
          memorial,
          components: componentsRes.data || [],
          media: mediaRes.data || [],
          links: linksRes.data || [],
        })
      } catch {
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [code])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-6 h-6 border-2 border-warm-gold border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-warm-muted text-sm">טוען זיכרון...</p>
        </div>
      </div>
    )
  }

  if (notFound || !data) {
    return <NotFoundPage />
  }

  return <MemorialRenderer data={data} />
}
