// Holding page. The full site is paused pending privacy (Amendment 13) and
// accessibility (IS 5568) work. Original routes live in git history — see
// LandingPage.tsx / MemorialPage.tsx, still present and unmodified.

const CSS = `
:root{
  --bg:#f6f1e9; --surface:#fffaf2;
  --ink:#2e2a24;   /* 12.68:1 on --bg */
  --muted:#5c554a; /*  6.55:1 on --bg */
  --gold:#7a5c2b;  /*  5.50:1 on --bg, 6.19:1 behind white */
  --line:#e2d8c8;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  background:var(--bg); color:var(--ink);
  font-family:"Assistant","Segoe UI","Arial Hebrew",Arial,sans-serif;
  font-size:17px; line-height:1.7; min-height:100vh;
  display:flex; flex-direction:column; -webkit-text-size-adjust:100%;
}
#root{display:flex;flex-direction:column;flex:1}
.skip-link{
  position:absolute; inset-inline-start:-9999px; top:0;
  background:var(--gold); color:#fff; padding:.75rem 1.25rem;
  z-index:100; text-decoration:none; border-radius:0 0 .5rem .5rem;
}
.skip-link:focus{inset-inline-start:0}
:focus-visible{outline:3px solid var(--gold);outline-offset:3px;border-radius:4px}
main{flex:1;display:flex;align-items:center;justify-content:center;padding:3rem 1.25rem}
.card{max-width:34rem;width:100%;text-align:center}
.mark{
  font-family:Georgia,"Times New Roman",serif; font-size:1.75rem;
  font-weight:600; letter-spacing:.02em; margin:0 0 2.5rem;
}
h1{
  font-family:Georgia,"Times New Roman",serif;
  font-size:clamp(2rem,7vw,3rem); font-weight:500; line-height:1.25; margin:0 0 1rem;
}
.rule{width:2.75rem;height:2px;background:var(--gold);border:0;border-radius:2px;margin:0 auto 1.75rem}
.lede{color:var(--muted);font-size:1.0625rem;margin:0 auto 2.5rem;max-width:26rem}
.whats-new{text-align:start;margin:0 0 1.5rem}
.whats-new h2{font-size:.9375rem;font-weight:600;margin:0 0 .75rem;text-align:center;color:var(--muted)}
.whats-new ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:.625rem}
.whats-new li{
  background:var(--surface);border:1px solid var(--line);border-radius:.75rem;
  padding:.875rem 1.125rem;font-size:.9375rem;color:var(--muted);line-height:1.65;
}
.whats-new strong{color:var(--ink);font-weight:600}
.contact{background:var(--surface);border:1px solid var(--line);border-radius:1rem;padding:1.5rem}
.contact h2{font-size:1rem;font-weight:600;margin:0 0 .25rem}
.contact p{color:var(--muted);font-size:.9375rem;margin:0 0 1.25rem}
.actions{display:flex;flex-wrap:wrap;gap:.625rem;justify-content:center}
.btn{
  display:inline-block;padding:.75rem 1.5rem;border-radius:999px;
  font-weight:600;font-size:.9375rem;text-decoration:none;border:1.5px solid var(--gold);
}
.btn-primary{background:var(--gold);color:#fff}
.btn-primary:hover{background:#63491f}
.btn-secondary{background:transparent;color:var(--gold)}
.btn-secondary:hover{background:var(--gold);color:#fff}
footer{border-top:1px solid var(--line);padding:2rem 1.25rem 2.5rem}
.foot-inner{max-width:34rem;margin:0 auto;color:var(--muted);font-size:.8125rem;line-height:1.75}
footer h2{font-size:.875rem;font-weight:600;color:var(--ink);margin:0 0 .5rem}
footer p{margin:0 0 .75rem}
footer a{color:var(--gold)}
.ltr{direction:ltr;unicode-bidi:embed;display:inline-block}
.copyright{margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid var(--line)}
@media (prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
}
`

const WA = 'https://wa.me/972528983514?text=' +
  encodeURIComponent('היי, אשמח לשמוע עוד על Soulink')

export default function ComingSoon() {
  return (
    <>
      <style>{CSS}</style>

      <a className="skip-link" href="#main">דלג לתוכן הראשי</a>

      <main id="main" tabIndex={-1}>
        <div className="card">
          <p className="mark">Soulink</p>

          <h1>האתר בהכנה</h1>
          <hr className="rule" />
          <p className="lede">
            אנחנו משדרגים את Soulink ומעדכנים את מסמכי הפרטיות והנגישות.
            האתר יחזור לאוויר בקרוב.
          </p>

          <div className="whats-new">
            <h2>מה מחכה לכם</h2>
            <ul>
              <li>
                <strong>בנייה עצמית</strong> — תוכלו לבנות ולערוך את עמוד הזיכרון
                בעצמכם, בקצב שלכם, ולעדכן אותו בכל עת.
              </li>
              <li>
                <strong>או שנבנה עבורכם</strong> — כמו תמיד. שולחים לנו את החומרים
                ואנחנו מרכיבים הכל.
              </li>
              <li>
                <strong>מגוון עיצובים</strong> — כמה תבניות לבחירה, כדי שהעמוד
                יתאים לאדם שהוא מנציח.
              </li>
            </ul>
          </div>

          <div className="contact">
            <h2>רוצים שנחזור אליכם?</h2>
            <p>אפשר ליצור קשר ישירות, ונשמח לעדכן אתכם כשהאתר עולה.</p>
            <div className="actions">
              <a className="btn btn-primary" href={WA} target="_blank" rel="noopener noreferrer">
                שליחת הודעה ב-WhatsApp
              </a>
              <a className="btn btn-secondary" href="mailto:info@talkats.com?subject=Soulink">
                info@talkats.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="foot-inner">
          <p>
            עמוד זה אינו אוסף מידע אישי, אינו משתמש בעוגיות ואינו מפעיל כלי ניתוח
            או מעקב. לא נשלחת ממנו בקשה לשום שירות צד שלישי.
          </p>
          <p>
            <a href="/legal">מידע משפטי</a> — מדיניות פרטיות, תנאי שימוש והצהרת
            נגישות (ת"י 5568 ברמה AA).
            <br />
            רכז נגישות: טל וינר־קציר · טלפון:{' '}
            <a className="ltr" href="tel:+972528983514">+972-52-8983514</a> · דוא"ל:{' '}
            <a href="mailto:info@talkats.com">info@talkats.com</a>
          </p>

          <p className="copyright">© {new Date().getFullYear()} Soulink by Tal m3Dical</p>
        </div>
      </footer>
    </>
  )
}
