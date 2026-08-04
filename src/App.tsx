import { Routes, Route } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import LegalPage from './pages/LegalPage'
import TemplatesPage from './pages/TemplatesPage'

// Site paused pending privacy (Amendment 13) + accessibility (IS 5568) work.
// /legal is already live; every other route serves the holding page. To restore,
// re-add the routes below — the pages themselves are unchanged in git:
//   <Route path="/"       element={<LandingPage />} />
//   <Route path="/:code"  element={<MemorialPage />} />
//   <Route path="*"       element={<NotFoundPage />} />
export default function App() {
  return (
    <Routes>
      <Route path="/legal" element={<LegalPage />} />
      {/* Unlinked while the site is paused — for reviewing the templates only.
          Renders a fictional sample, touches no customer data. */}
      <Route path="/templates" element={<TemplatesPage />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  )
}
