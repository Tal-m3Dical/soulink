import { Routes, Route } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'

// Site paused pending privacy (Amendment 13) + accessibility (IS 5568) work.
// Every route serves the holding page. To restore, revert this file — the
// original routes below are unchanged in git history:
//   <Route path="/"       element={<LandingPage />} />
//   <Route path="/:code"  element={<MemorialPage />} />
//   <Route path="*"       element={<NotFoundPage />} />
export default function App() {
  return (
    <Routes>
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  )
}
