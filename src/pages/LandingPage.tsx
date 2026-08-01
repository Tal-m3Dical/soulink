import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const WHATSAPP_NUMBER = '972528983514'
const WHATSAPP_MESSAGE = 'היי, אשמח לשמוע עוד על Soulink'

const plans = [
  {
    name: 'בסיסי',
    price: 99,
    highlight: false,
    features: [
      'עד 10 תמונות',
      'QR בסיסי לחריטה',
      'מיקום קבר + ניווט',
      'ספר אורחים דיגיטלי',
      'אחריות QR ל-10 שנים',
    ],
  },
  {
    name: 'משפחתי',
    price: 199,
    highlight: true,
    features: [
      'עד 50 תמונות',
      'עד 5 סרטונים',
      'QR מותאם אישית',
      'הספדים ותגובות',
      'נר זיכרון וירטואלי',
      'תמיכת WhatsApp',
      'אחריות QR ל-10 שנים',
    ],
  },
  {
    name: 'מורחב',
    price: 499,
    highlight: false,
    features: [
      'תמונות וסרטונים ללא הגבלה',
      'כרטיס NFC + QR מותאם',
      'קישור בין דפי בני משפחה',
      'תמיכה 24/7',
      'גיבוי יומי',
      'אחריות QR ל-10 שנים',
    ],
  },
]

const faqs = [
  {
    q: 'איך זה עובד?',
    a: 'אתם משאירים פרטים, אנחנו בונים עמוד זיכרון דיגיטלי יפה ומותאם אישית. מקבלים QR לחריטה על המצבה או להדבקה. כל מי שסורק את הקוד רואה את העמוד.',
  },
  {
    q: 'האם צריך ידע טכני?',
    a: 'בכלל לא. אנחנו בונים הכל עבורכם. פשוט שולחים לנו תמונות, טקסט וסרטונים ואנחנו עושים את השאר.',
  },
  {
    q: 'מה קורה אם ה-QR נשבר?',
    a: 'ה-QR מפנה לכתובת שאנחנו שולטים בה. גם אם האתר עובר שינויים, הקוד שחרוט על המצבה ימשיך לעבוד. אחריות ל-10 שנים.',
  },
  {
    q: 'אפשר לעדכן את העמוד אחרי שהוא עולה?',
    a: 'כמובן. אפשר להוסיף תמונות, סרטונים, הספדים ותגובות בכל עת. פשוט שולחים לנו ואנחנו מעדכנים.',
  },
  {
    q: 'האם התשלום חד-פעמי?',
    a: 'כן. תשלום אחד וזהו. אין מנוי חודשי, אין עלויות נסתרות.',
  },
]

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formName, setFormName] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formSent, setFormSent] = useState(false)
  const [formSending, setFormSending] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formName.trim() || !formPhone.trim()) return
    setFormSending(true)
    await supabase.from('leads').insert({
      name: formName.trim(),
      phone: formPhone.trim(),
      message: formMessage.trim() || null,
    })
    setFormSent(true)
    setFormSending(false)
  }

  return (
    <div className="min-h-screen bg-warm-bg text-warm-ink" dir="rtl">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-warm-bg/80 backdrop-blur-md border-b border-warm-line">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 h-14">
          <span className="serif text-xl font-semibold text-warm-ink tracking-wide">Soulink</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-5 rounded-full bg-warm-gold text-white text-sm font-semibold no-underline hover:bg-warm-gold-deep transition-colors"
          >
            דברו איתנו
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6">
            המקום בו הזיכרון
            <br />
            <span className="text-warm-gold">נשאר לנצח</span>
          </h1>
          <p className="text-warm-muted text-lg sm:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
            עמוד זיכרון דיגיטלי שמקושר מ-QR על המצבה.
            <br />
            כל מי שסורק — רואה תמונות, סיפורים, סרטונים ואת הזיכרון השלם.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 rounded-full bg-warm-gold text-white font-semibold text-[17px] no-underline hover:bg-warm-gold-deep transition-colors shadow-[0_4px_20px_rgba(176,141,87,0.3)]"
            >
              אני רוצה עמוד זיכרון
            </a>
            <a
              href="/shula-tzivoni"
              className="py-3.5 px-8 rounded-full border-[1.5px] border-warm-gold text-warm-gold font-semibold text-[17px] no-underline hover:bg-warm-gold hover:text-white transition-colors"
            >
              צפו בדוגמה חיה
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="serif text-3xl font-medium text-center mb-2">איך זה עובד?</h2>
          <div className="w-11 h-0.5 bg-warm-gold rounded mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'משאירים פרטים', desc: 'שולחים לנו תמונות, טקסט וזיכרונות של היקר לכם. אנחנו בונים הכל.' },
              { step: '2', title: 'מקבלים QR', desc: 'QR מותאם לחריטה או הדבקה על המצבה. קוד אחד, לנצח.' },
              { step: '3', title: 'הזיכרון חי', desc: 'כל מי שסורק רואה עמוד יפה עם תמונות, סיפורים, סרטונים וספר אורחים.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-warm-gold text-white serif text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-warm-muted text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo preview */}
      <section className="py-16 px-5 bg-warm-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif text-3xl font-medium mb-2">ככה זה נראה</h2>
          <div className="w-11 h-0.5 bg-warm-gold rounded mx-auto mb-8" />
          <p className="text-warm-muted mb-8 max-w-md mx-auto">
            עמוד זיכרון אמיתי. נסו לגלול, ללחוץ ולהרגיש את החוויה.
          </p>

          <div className="mx-auto max-w-[375px] rounded-[2rem] border-4 border-warm-line shadow-2xl overflow-hidden bg-warm-bg" style={{ height: 680 }}>
            <iframe
              src="/shula-tzivoni"
              className="w-full h-full border-0"
              title="דוגמת עמוד זיכרון"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-5" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="serif text-3xl font-medium text-center mb-2">מסלולים</h2>
          <div className="w-11 h-0.5 bg-warm-gold rounded mx-auto mb-3" />
          <p className="text-warm-muted text-center mb-12">תשלום חד-פעמי. בלי מנוי, בלי הפתעות.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 flex flex-col ${
                  plan.highlight
                    ? 'bg-warm-gold text-white shadow-[0_8px_40px_rgba(176,141,87,0.3)] scale-[1.03] relative'
                    : 'bg-warm-surface border border-warm-line'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warm-gold-deep text-white text-xs font-bold py-1 px-4 rounded-full">
                    הכי פופולרי
                  </span>
                )}
                <h3 className="serif text-2xl font-medium mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-warm-muted'}`}>&#8362;</span>
                </div>
                <ul className="flex-1 flex flex-col gap-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className={`text-[15px] flex items-start gap-2 ${plan.highlight ? 'text-white/90' : 'text-warm-muted'}`}>
                      <span className={`mt-0.5 ${plan.highlight ? 'text-white' : 'text-warm-gold'}`}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`היי, אני מתעניין/ת במסלול ${plan.name} (${plan.price} ש"ח)`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full font-semibold text-[15px] no-underline transition-colors ${
                    plan.highlight
                      ? 'bg-white text-warm-gold hover:bg-warm-bg'
                      : 'bg-warm-gold text-white hover:bg-warm-gold-deep'
                  }`}
                >
                  בחרו מסלול
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5 bg-warm-surface">
        <div className="max-w-2xl mx-auto">
          <h2 className="serif text-3xl font-medium text-center mb-2">שאלות נפוצות</h2>
          <div className="w-11 h-0.5 bg-warm-gold rounded mx-auto mb-10" />

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-warm-line rounded-xl bg-warm-bg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 px-5 text-right bg-transparent border-0 cursor-pointer text-warm-ink font-semibold text-[16px]"
                >
                  {faq.q}
                  <span className={`text-warm-gold text-xl transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-warm-muted text-[15px] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-5" id="contact">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="serif text-3xl font-medium mb-2">בואו נדבר</h2>
          <div className="w-11 h-0.5 bg-warm-gold rounded mx-auto mb-4" />
          <p className="text-warm-muted mb-8">השאירו פרטים ונחזור אליכם, או שלחו הודעה ב-WhatsApp</p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3.5 px-8 rounded-full bg-[#25D366] text-white font-semibold text-[17px] no-underline hover:bg-[#1da851] transition-colors mb-8 shadow-[0_4px_20px_rgba(37,211,102,0.25)]"
          >
            WhatsApp
          </a>

          <div className="text-warm-muted text-sm mb-6">או השאירו פרטים</div>

          {formSent ? (
            <div className="bg-warm-surface border border-warm-line rounded-2xl p-8 text-center">
              <p className="text-warm-gold text-lg font-semibold mb-1">תודה!</p>
              <p className="text-warm-muted">קיבלנו את הפרטים ונחזור אליכם בהקדם.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-warm-surface border border-warm-line rounded-2xl p-7 flex flex-col gap-4 text-right">
              <input
                type="text"
                placeholder="שם מלא"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                required
                className="w-full py-3 px-4 rounded-lg border border-warm-line bg-warm-bg text-warm-ink text-[15px] outline-none focus:border-warm-gold transition-colors"
              />
              <input
                type="tel"
                placeholder="טלפון"
                value={formPhone}
                onChange={(e) => setFormPhone(e.target.value)}
                required
                className="w-full py-3 px-4 rounded-lg border border-warm-line bg-warm-bg text-warm-ink text-[15px] outline-none focus:border-warm-gold transition-colors"
              />
              <textarea
                placeholder="הודעה (אופציונלי)"
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                rows={3}
                className="w-full py-3 px-4 rounded-lg border border-warm-line bg-warm-bg text-warm-ink text-[15px] outline-none focus:border-warm-gold transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={formSending}
                className="py-3 rounded-full bg-warm-gold text-white font-semibold text-[15px] border-0 cursor-pointer hover:bg-warm-gold-deep transition-colors disabled:opacity-50"
              >
                {formSending ? 'שולח...' : 'שלחו'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 border-t border-warm-line text-center">
        <p className="serif text-lg text-warm-ink mb-1">Soulink</p>
        <p className="text-warm-muted text-sm">
          המקום בו הזיכרון נשאר לנצח
        </p>
        <p className="text-warm-muted text-xs mt-4">
          &copy; {new Date().getFullYear()} Soulink by Tal m3Dical
        </p>
      </footer>
    </div>
  )
}
