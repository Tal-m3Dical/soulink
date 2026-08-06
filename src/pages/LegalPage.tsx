// Legal hub — privacy, terms, accessibility, cookies, DSR, consumer details.
// Modelled on talkats.com/privacy.html so both sites read as one business.
//
// DRAFT — reviewed by no lawyer. See the notice rendered at the top of the page.
// Update LAST_UPDATED whenever the substance changes.

import { useEffect } from 'react'

const LAST_UPDATED = 'אוגוסט 2026'

const BUSINESS = {
  legalName: 'טל וינר־קציר',
  tradeName: 'Tal m3Dical',
  vatId: '300818887',
  address: 'דרך שרה 11/3, זכרון יעקב',
  email: 'info@talkats.com',
  phone: '+972-52-8983514',
  phoneHref: 'tel:+972528983514',
}

const SECTIONS = [
  { id: 'accessibility', title: 'הצהרת נגישות' },
  { id: 'privacy', title: 'מדיניות פרטיות' },
  { id: 'terms', title: 'תנאי שימוש' },
  { id: 'cookies', title: 'מדיניות עוגיות' },
  { id: 'dsr', title: 'פניות בנושא מידע אישי' },
  { id: 'consumer', title: 'פרטי העוסק וביטול עסקה' },
]

const CSS = `
:root{
  --bg:#f6f1e9; --surface:#fffaf2;
  --ink:#2e2a24; --muted:#5c554a; --gold:#7a5c2b; --line:#e2d8c8;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  background:var(--bg); color:var(--ink);
  font-family:"Assistant","Segoe UI","Arial Hebrew",Arial,sans-serif;
  font-size:17px; line-height:1.8; -webkit-text-size-adjust:100%;
}
.skip-link{
  position:absolute; inset-inline-start:-9999px; top:0;
  background:var(--gold); color:#fff; padding:.75rem 1.25rem;
  z-index:100; text-decoration:none; border-radius:0 0 .5rem .5rem;
}
.skip-link:focus{inset-inline-start:0}
:focus-visible{outline:3px solid var(--gold);outline-offset:3px;border-radius:4px}
.wrap{max-width:46rem;margin:0 auto;padding:2.5rem 1.25rem 4rem}
.topbar{margin-bottom:2.5rem}
.topbar a{color:var(--gold);font-size:.9375rem}
.doc-title{
  font-family:Georgia,"Times New Roman",serif;
  font-size:clamp(1.75rem,5vw,2.5rem);font-weight:500;margin:0 0 .5rem;
}
.updated{color:var(--muted);font-size:.875rem;margin:0 0 2rem}
.notice{
  background:var(--surface);border:1px solid var(--line);
  border-inline-start:3px solid var(--gold);border-radius:0;
  padding:1rem 1.25rem;margin:0 0 2.5rem;font-size:.9375rem;color:var(--muted);
}
.notice strong{color:var(--ink);font-weight:600}
nav.toc{background:var(--surface);border:1px solid var(--line);border-radius:1rem;padding:1.25rem 1.5rem;margin:0 0 3rem}
nav.toc h2{font-size:.9375rem;font-weight:600;margin:0 0 .75rem}
nav.toc ol{margin:0;padding-inline-start:1.25rem;color:var(--muted);list-style:decimal}
nav.toc li{margin-bottom:.25rem}
nav.toc a{color:var(--gold)}
section{margin:0 0 3.5rem;scroll-margin-top:1.5rem}
section h2{
  font-family:Georgia,"Times New Roman",serif;
  font-size:1.5rem;font-weight:500;margin:0 0 .25rem;
  padding-bottom:.5rem;border-bottom:1px solid var(--line);
}
section h3{font-size:1.0625rem;font-weight:600;margin:1.75rem 0 .5rem}
p{margin:0 0 1rem}
section ul{margin:0 0 1rem;padding-inline-start:1.25rem;list-style:disc}
li{margin-bottom:.375rem}
dl{margin:0 0 1rem}
dt{font-weight:600;margin-top:.75rem}
dd{margin:0;color:var(--muted)}
a{color:var(--gold)}
.ltr{direction:ltr;unicode-bidi:embed;display:inline-block}
.contact-box{background:var(--surface);border:1px solid var(--line);border-radius:1rem;padding:1.25rem 1.5rem;margin-top:1.5rem}
.contact-box p{margin:0 0 .375rem;font-size:.9375rem}
.contact-box p:last-child{margin-bottom:0}
footer{border-top:1px solid var(--line);padding-top:1.5rem;color:var(--muted);font-size:.8125rem}
@media (prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
}
`

export default function LegalPage() {
  // WCAG 2.4.2 — the title must describe this page, not the holding page.
  useEffect(() => {
    const previous = document.title
    document.title = 'Soulink — מידע משפטי'
    return () => { document.title = previous }
  }, [])

  return (
    <>
      <style>{CSS}</style>

      <a className="skip-link" href="#main">דלג לתוכן הראשי</a>

      <div className="wrap">
        <div className="topbar">
          <a href="/">← חזרה לעמוד הראשי</a>
        </div>

        <main id="main" tabIndex={-1}>
          <h1 className="doc-title">מידע משפטי</h1>
          <p className="updated">עודכן לאחרונה: {LAST_UPDATED}</p>

          <div className="notice">
            <strong>לתשומת לבכם:</strong> Soulink נמצאת בהקמה והשירות אינו פתוח עדיין
            להזמנות. המסמכים שלהלן מפורסמים מראש כדי שתוכלו לדעת בדיוק כיצד ננהג
            במידע שלכם עוד לפני שתמסרו לנו דבר.
          </div>

          <nav className="toc" aria-labelledby="toc-heading">
            <h2 id="toc-heading">תוכן העניינים</h2>
            <ol>
              {SECTIONS.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
              ))}
            </ol>
          </nav>

          <section id="accessibility" aria-labelledby="h-accessibility">
            <h2 id="h-accessibility">הצהרת נגישות</h2>
            <p>
              אנו רואים בהנגשת האתר חלק מהשירות עצמו. אתר Soulink נבנה בהתאם לתקנות
              שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג־2013,
              ולתקן הישראלי ת"י 5568 ברמת התאמה AA (המבוסס על הנחיות WCAG 2.1).
            </p>

            <h3>אמצעי הנגישות באתר</h3>
            <ul>
              <li>ניווט מלא באמצעות מקלדת, כולל קישור "דלג לתוכן הראשי"</li>
              <li>סימון פוקוס ברור וגלוי בכל רכיב אינטראקטיבי</li>
              <li>מבנה סמנטי עם כותרות היררכיות ואזורי תוכן מוגדרים</li>
              <li>ניגודיות צבעים של 4.5:1 לפחות בטקסט רגיל</li>
              <li>תיאור טקסטואלי חלופי לתמונות</li>
              <li>תמיכה בהגדלת טקסט ובשינוי גודל התצוגה</li>
              <li>כיבוד העדפת המערכת להפחתת תנועה ואנימציות</li>
              <li>תמיכה בקוראי מסך נפוצים (NVDA, JAWS, VoiceOver, TalkBack)</li>
            </ul>

            <h3>מגבלות ידועות</h3>
            <p>
              עמודי זיכרון עשויים לכלול תמונות וסרטונים שנמסרו לנו על ידי המשפחה.
              איננו שולטים בתוכן החזותי עצמו, אך אנו מוסיפים תיאור חלופי לכל תמונה
              ומאפשרים למשפחה לערוך אותו. סרטונים מוטמעים מיוטיוב כפופים לנגן של
              יוטיוב ולא לנגן שלנו.
            </p>

            <h3>פנייה בנושא נגישות</h3>
            <p>
              נתקלתם בבעיית נגישות באתר? נשמח שתעדכנו אותנו ונטפל בכך. אנו מתחייבים
              להשיב לכל פנייה בנושא נגישות תוך 14 ימי עסקים לכל היותר.
            </p>
            <div className="contact-box">
              <p><strong>רכז הנגישות:</strong> {BUSINESS.legalName}</p>
              <p>טלפון: <a className="ltr" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p>
              <p>דוא"ל: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
            </div>
          </section>

          <section id="privacy" aria-labelledby="h-privacy">
            <h2 id="h-privacy">מדיניות פרטיות</h2>
            <p>
              Soulink עוסקת בהנצחה. המידע שתמסרו לנו הוא מטבעו אישי ורגיש, ולעיתים
              נוגע גם לאנשים שאינם יכולים עוד להביע את דעתם. אנו מתייחסים אליו
              בהתאם. מדיניות זו נכתבה לפי חוק הגנת הפרטיות, התשמ"א־1981, לרבות
              תיקון 13 שנכנס לתוקף באוגוסט 2025.
            </p>

            <h3>איזה מידע אנחנו אוספים</h3>
            <dl>
              <dt>פרטי יצירת קשר</dt>
              <dd>שם וטלפון שאתם משאירים בטופס, ולצידם הודעה חופשית אם בחרתם לכתוב.</dd>

              <dt>חומרי ההנצחה</dt>
              <dd>
                תמונות, סרטונים, טקסטים, הספדים, תאריכי לידה ופטירה ומיקום הקבר של
                הנפטר, וכן כל חומר נוסף שתבחרו למסור לנו לצורך בניית העמוד. חומרים
                אלה עשויים לכלול גם תמונות ופרטים של בני משפחה חיים.
              </dd>

              <dt>ספר האורחים</dt>
              <dd>
                שם והודעה שמשאירים מבקרים בעמוד. תוכן זה מוצג בפומבי בעמוד הזיכרון.
              </dd>

              <dt>מידע טכני</dt>
              <dd>
                כתובת IP ונתוני שימוש בסיסיים הנוצרים בעת הגלישה. לפי תיקון 13 גם
                כתובת IP היא מידע אישי, ולכן אנו מתייחסים אליה ככזו.
              </dd>
            </dl>

            <h3>הצהרתכם בעת מסירת החומרים</h3>
            <p>
              בעת מסירת חומרים לבניית עמוד זיכרון אתם מצהירים כי אתם בני משפחה או
              מיופי כוח מטעם המשפחה, כי קיבלתם את הסכמת בני המשפחה הרלוונטיים
              לפרסום, וכי יש בידיכם את הזכויות בתמונות ובטקסטים שאתם מוסרים. זו
              נקודה מהותית ולא פורמלית: אנחנו לא יכולים לבדוק זאת בעצמנו.
            </p>

            <h3>למה אנחנו משתמשים במידע</h3>
            <ul>
              <li>בניית עמוד הזיכרון, הפעלתו ותחזוקתו לאורך זמן</li>
              <li>יצירת קשר איתכם בנוגע לשירות</li>
              <li>הפקת חשבונית וניהול רישומים חשבונאיים כנדרש בדין</li>
              <li>שיפור השירות ואבטחת המערכת</li>
            </ul>
            <p>
              איננו עושים במידע שימוש שיווקי כלפי צדדים שלישיים, איננו מוכרים מידע,
              ואיננו מבצעים פרופיילינג או קבלת החלטות אוטומטית לגביכם.
            </p>

            <h3>הבסיס החוקי</h3>
            <p>
              עיבוד המידע נשען על הסכמתכם, הניתנת בעת מסירת המידע מרצון ולאחר קריאת
              מדיניות זו. אתם רשאים לחזור בכם מההסכמה בכל עת, בפנייה אלינו.
              משיכת הסכמה עשויה להביא להסרת עמוד הזיכרון.
            </p>

            <h3>היכן המידע נשמר</h3>
            <p>
              המידע נשמר בשירותי Supabase, בשרתים הממוקמים באיחוד האירופי (פרנקפורט,
              גרמניה). לישראל הוכרה החלטת נאותות מול האיחוד האירופי, ולכן העברת מידע
              לשרתים באיחוד אינה טעונה אמצעי הגנה נוספים. אם נעביר בעתיד מידע ליעד
              אחר, נעדכן מדיניות זו מראש.
            </p>

            <h3>כמה זמן נשמר המידע</h3>
            <ul>
              <li>
                <strong>פניות שלא הבשילו להזמנה</strong> — עד 12 חודשים, ולאחר מכן
                נמחקות.
              </li>
              <li>
                <strong>תוכן עמוד זיכרון פעיל</strong> — לאורך כל תקופת השירות,
                שכן מהות המוצר היא שמירה לאורך זמן.
              </li>
              <li>
                <strong>רישומים חשבונאיים</strong> — לתקופה הקבועה בדין.
              </li>
            </ul>

            <h3>מסירת מידע לצדדים שלישיים</h3>
            <p>
              איננו מוכרים ואיננו משכירים מידע. המידע נחשף רק לספקי תשתית הפועלים
              עבורנו (אחסון האתר ומסד הנתונים), ולגורמים שהדין מחייב למסור להם מידע.
              עמוד הזיכרון עצמו, וספר האורחים שבו, גלויים לכל מי שמחזיק בקישור או
              סורק את קוד ה־QR — זו מהות השירות, ואנו מבקשים שתביאו זאת בחשבון
              בבחירת החומרים.
            </p>

            <h3>אבטחת מידע</h3>
            <p>
              התעבורה לאתר מוצפנת ב־HTTPS. הגישה למסד הנתונים מוגבלת ברמת השורה
              (Row Level Security) כך שגורם חיצוני אינו יכול לקרוא פניות או מידע של
              משפחות אחרות. הגישה הניהולית מוגבלת ומאובטחת. אין מערכת חסינה לחלוטין,
              ואיננו יכולים להתחייב לאבטחה מוחלטת.
            </p>

            <h3>אירוע אבטחה</h3>
            <p>
              אם יתרחש אירוע אבטחה חמור, נדווח לרשות להגנת הפרטיות ללא דיחוי כנדרש
              בתקנות, ונודיע גם לכם אם קיים חשש לפגיעה משמעותית.
            </p>

            <h3>קטינים</h3>
            <p>
              השירות אינו מיועד לשימוש עצמאי של קטינים. אם עמוד הזיכרון כולל תמונות
              של קטינים חיים, נדרשת הסכמת ההורה או האפוטרופוס.
            </p>
          </section>

          <section id="terms" aria-labelledby="h-terms">
            <h2 id="h-terms">תנאי שימוש</h2>

            <h3>השירות</h3>
            <p>
              Soulink בונה ומפעילה עמוד זיכרון דיגיטלי, ומספקת קוד QR המקשר אליו
              לצורך חריטה או הדבקה על המצבה. בשלב הראשון העמוד נבנה על ידינו עבורכם;
              בהמשך תיפתח גם אפשרות לבנייה ועריכה עצמית.
            </p>

            <h3>התמורה</h3>
            <p>
              התשלום הוא חד־פעמי לפי המסלול שנבחר, ואינו כולל מנוי חודשי. מחירים
              המפורסמים באתר כוללים מע"מ אלא אם צוין אחרת, וניתנים לשינוי מעת לעת;
              המחיר המחייב הוא זה שסוכם עמכם בעת ההזמנה.
            </p>

            <h3>אחריות ה־QR</h3>
            <p>
              אנו מתחייבים כי קוד ה־QR שסופק לכם יוסיף להפנות לעמוד הזיכרון למשך 10
              שנים ממועד האספקה, גם אם מבנה האתר או כתובות הפנים בו ישתנו. האחריות
              חלה על תקינות ההפניה, ואינה חלה על נזק פיזי לחריטה או למדבקה, על
              שינויים שביצעתם בעצמכם, או על נסיבות שאינן בשליטתנו.
            </p>

            <h3>הזכויות בתוכן שלכם</h3>
            <p>
              התמונות, הסרטונים והטקסטים שאתם מוסרים נשארים שלכם. אתם מעניקים לנו
              רישיון מוגבל להשתמש בהם אך ורק לצורך בניית עמוד הזיכרון, אחסונו
              והצגתו. איננו רשאים לעשות בהם שימוש אחר, לרבות שיווקי, ללא אישורכם
              בכתב.
            </p>

            <h3>תוכן אסור</h3>
            <p>אין למסור לנו או לפרסם בספר האורחים תוכן אשר:</p>
            <ul>
              <li>מפר זכויות יוצרים או זכויות של צד שלישי</li>
              <li>פוגע בכבודו של הנפטר או של בני משפחתו</li>
              <li>מהווה לשון הרע, הטרדה, הסתה או פגיעה בפרטיות</li>
              <li>אינו חוקי או מנוגד לתקנת הציבור</li>
            </ul>

            <h3>ספר האורחים והסרת תוכן</h3>
            <p>
              ספר האורחים פתוח לכתיבה. אנו רשאים להסיר כל רשומה הפוגעת בכללים לעיל,
              ובני המשפחה רשאים לבקש הסרה של רשומה. פנייה להסרה תטופל תוך 3 ימי
              עסקים. אנו רשאים גם להשבית זמנית את ספר האורחים בעמוד מסוים לבקשת
              המשפחה.
            </p>

            <h3>זמינות השירות</h3>
            <p>
              אנו שואפים לזמינות מלאה, אך איננו מתחייבים לפעילות רציפה וללא הפרעות.
              ייתכנו הפסקות לצורך תחזוקה או עקב תקלות אצל ספקי התשתית.
            </p>

            <h3>אחריות</h3>
            <p>
              אחריותנו הכוללת בגין השירות לא תעלה על הסכום ששילמתם בפועל. איננו
              אחראים לנזק עקיף או תוצאתי. אין באמור כדי לגרוע מזכויות המוקנות לכם
              לפי דין שאינן ניתנות להתניה.
            </p>

            <h3>דין וסמכות שיפוט</h3>
            <p>
              על תנאים אלה יחולו דיני מדינת ישראל. סמכות השיפוט הבלעדית נתונה לבתי
              המשפט המוסמכים במחוז חיפה.
            </p>
          </section>

          <section id="cookies" aria-labelledby="h-cookies">
            <h2 id="h-cookies">מדיניות עוגיות</h2>
            <p>
              נכון למועד עדכון מסמך זה, האתר <strong>אינו משתמש בעוגיות</strong>
              ואינו מפעיל כלי ניתוח, מדידה או מעקב. איננו טוענים גופנים חיצוניים
              ואיננו משתפים מידע עם מפרסמים.
            </p>
            <p>
              <strong>חריג אחד, ורק כשהמשפחה בוחרת בו:</strong> אם עמוד זיכרון
              כולל סרטון מיוטיוב, הסרטון מוטמע מהשרתים של Google. בעת צפייה בעמוד
              כזה הדפדפן שלכם פונה ל-Google, ו-Google עשויה להציב עוגיות ולקבל את
              כתובת ה-IP שלכם — זאת בהתאם למדיניות הפרטיות שלה ולא שלנו. עמוד ללא
              סרטון אינו יוצר שום פנייה חיצונית. משפחה שמעדיפה להימנע מכך יכולה
              לבקש מאיתנו להעלות את הסרטון ישירות במקום להטמיע אותו.
            </p>
            <p>
              אם נוסיף בעתיד כלי מדידה כלשהו, נעשה זאת רק לאחר הצגת בקשת הסכמה
              מפורשת, שבה האפשרות לסרב תוצג באותה בולטות כמו האפשרות לאשר, ורק לאחר
              עדכון מסמך זה.
            </p>
          </section>

          <section id="dsr" aria-labelledby="h-dsr">
            <h2 id="h-dsr">פניות בנושא מידע אישי</h2>
            <p>לפי חוק הגנת הפרטיות אתם זכאים:</p>
            <ul>
              <li>לעיין במידע שנשמר עליכם</li>
              <li>לבקש את תיקונו אם אינו מדויק</li>
              <li>לבקש את מחיקתו</li>
              <li>לחזור בכם מהסכמה שנתתם</li>
            </ul>
            <p>
              לפנייה יש לשלוח דוא"ל לכתובת{' '}
              <a href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent('בקשה בנושא פרטיות — Soulink')}`}>
                {BUSINESS.email}
              </a>{' '}
              עם הנושא "בקשה בנושא פרטיות". כדי להגן עליכם, נבקש לוודא את זהות
              הפונה לפני מסירת מידע או ביצוע מחיקה — ובמקרה של עמוד זיכרון, גם את
              זיקתכם למשפחה. נשיב לפנייה תוך 30 ימים.
            </p>
            <p>
              אם לא נענתם כנדרש, אתם רשאים לפנות לרשות להגנת הפרטיות במשרד המשפטים.
            </p>
          </section>

          <section id="consumer" aria-labelledby="h-consumer">
            <h2 id="h-consumer">פרטי העוסק וביטול עסקה</h2>

            <h3>פרטי העוסק</h3>
            <div className="contact-box">
              <p><strong>שם:</strong> {BUSINESS.legalName} ({BUSINESS.tradeName})</p>
              <p><strong>עוסק מורשה:</strong> <span className="ltr">{BUSINESS.vatId}</span></p>
              <p><strong>כתובת:</strong> {BUSINESS.address}</p>
              <p><strong>טלפון:</strong> <a className="ltr" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p>
              <p><strong>דוא"ל:</strong> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
            </div>

            <h3>ביטול עסקה</h3>
            <p>
              ניתן לבטל את העסקה בהודעה בכתב לכתובת הדוא"ל שלעיל, בתוך 14 ימים ממועד
              ביצוע העסקה או ממועד קבלת מסמך פרטי העסקה, לפי המאוחר, והכל בכפוף
              לתקנות הגנת הצרכן (ביטול עסקה), תשע"א־2010.
            </p>
            <p>
              עמוד זיכרון מיוצר במיוחד עבור המשפחה על בסיס החומרים שנמסרו. ככל
              שהתחלנו בעבודת ההתאמה בפועל, ייתכן שיחול חריג ה"טובין שיוצרו במיוחד
              עבור הצרכן" שבתקנות. כדי למנוע אי־הסכמה, נודיע לכם בכתב לפני תחילת
              עבודת ההתאמה, וכל עוד לא התחלנו — הביטול מלא וללא תנאי.
            </p>
            <p>
              בביטול שאינו עקב פגם או אי־התאמה, אנו רשאים לגבות דמי ביטול בשיעור 5%
              ממחיר העסקה או 100 ש"ח, לפי הנמוך מביניהם. בביטול עקב פגם או אי־התאמה
              יוחזר מלוא הסכום ולא ייגבו דמי ביטול.
            </p>
            <p>
              החזר כספי יבוצע באותו אמצעי שבו בוצע התשלום, תוך 14 ימים ממועד קבלת
              הודעת הביטול.
            </p>
          </section>

          <footer>
            <p>
              המסמכים בעמוד זה מנוסחים בלשון זכר מטעמי נוחות בלבד ומופנים לכל
              המגדרים. בכל שאלה — {' '}
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
            </p>
            <p>© {new Date().getFullYear()} Soulink by {BUSINESS.tradeName}</p>
          </footer>
        </main>
      </div>
    </>
  )
}
