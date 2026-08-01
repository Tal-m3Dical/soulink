import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <h1 className="serif text-3xl font-medium text-warm-ink mb-3">
        העמוד לא נמצא
      </h1>
      <p className="text-warm-muted mb-6">
        הזיכרון שחיפשת לא קיים או שהקישור שגוי
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 rounded-full border border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white transition-colors"
      >
        חזרה לדף הראשי
      </Link>
    </div>
  )
}
