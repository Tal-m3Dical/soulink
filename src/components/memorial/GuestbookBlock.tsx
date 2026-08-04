import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { Memorial, GuestbookEntry } from '@/lib/types'

interface Props {
  memorial: Memorial
}

export default function GuestbookBlock({ memorial }: Props) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    supabase
      .from('guestbook')
      .select('*')
      .eq('memorial_id', memorial.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setEntries(data)
      })
  }, [memorial.id])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setSubmitting(true)
    const { data, error } = await supabase
      .from('guestbook')
      .insert({ memorial_id: memorial.id, name: name.trim(), message: message.trim() })
      .select()
      .single()

    if (!error && data) {
      setEntries([data, ...entries])
      setName('')
      setMessage('')
    }
    setSubmitting(false)
  }

  async function handleLike(entry: GuestbookEntry) {
    const newLikes = entry.likes + 1
    await supabase.from('guestbook').update({ likes: newLikes }).eq('id', entry.id)
    setEntries(entries.map((e) => (e.id === entry.id ? { ...e, likes: newLikes } : e)))
  }

  const visible = showAll ? entries : entries.slice(0, 3)

  return (
    <section className="py-8">
      <div className="bg-warm-surface border border-warm-line rounded-2xl shadow-[0_6px_28px_rgba(80,60,30,0.08)] p-7 max-sm:p-5">
        <h2 className="serif text-2xl font-medium text-warm-ink mb-1.5">ספר אורחים</h2>
        <div className="w-11 h-0.5 bg-warm-gold rounded mb-4" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
          <input
            type="text"
            placeholder="השם שלכם"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2.5 px-4 rounded-lg border border-warm-line bg-warm-bg text-warm-ink text-[15px] outline-none focus:border-warm-gold transition-colors"
          />
          <textarea
            placeholder="כתבו כמה מילים..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full py-2.5 px-4 rounded-lg border border-warm-line bg-warm-bg text-warm-ink text-[15px] outline-none focus:border-warm-gold transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={submitting || !name.trim() || !message.trim()}
            className="self-start py-2.5 px-6 rounded-full border-[1.5px] border-warm-gold text-warm-gold font-semibold text-[15px] bg-transparent hover:bg-warm-gold hover:text-warm-on-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            {submitting ? 'שולח...' : 'שלחו'}
          </button>
        </form>

        {visible.length > 0 && (
          <div className="flex flex-col gap-4">
            {visible.map((entry) => (
              <div key={entry.id} className="border-t border-warm-line pt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-semibold text-warm-ink">{entry.name}</span>
                    <span className="text-warm-muted text-xs mr-2">
                      {new Date(entry.created_at).toLocaleDateString('he-IL')}
                    </span>
                  </div>
                  <button
                    onClick={() => handleLike(entry)}
                    className="flex items-center gap-1 text-warm-muted hover:text-red-400 transition-colors text-sm bg-transparent border-0 cursor-pointer"
                  >
                    ♥ {entry.likes > 0 && entry.likes}
                  </button>
                </div>
                <p className="text-[15px] text-warm-ink mt-1">{entry.message}</p>
              </div>
            ))}
          </div>
        )}

        {entries.length > 3 && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-4 text-warm-gold text-sm bg-transparent border-0 cursor-pointer underline"
          >
            הצגת כל {entries.length} התגובות
          </button>
        )}
      </div>
    </section>
  )
}
