import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MemorialPage from './pages/MemorialPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:code" element={<MemorialPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
