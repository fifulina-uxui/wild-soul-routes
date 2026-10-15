import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { LeadDialogProvider } from './sections/LeadDialog'
import Home from './pages/Home'

// Все страницы, кроме главной, грузятся отдельными чанками по мере перехода
const ToursPage = lazy(() => import('./pages/ToursPage'))
const TourDetailPage = lazy(() => import('./pages/TourDetailPage'))
const DirectionsPage = lazy(() => import('./pages/DirectionsPage'))
const CruisesPage = lazy(() => import('./pages/CruisesPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    // Мгновенный сброс: при smooth-поведении браузер иначе анимирует
    // прокрутку от низа предыдущей страницы, и переход выглядит рывком
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <LeadDialogProvider>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/tours/:id" element={<TourDetailPage />} />
          <Route path="/directions" element={<DirectionsPage />} />
          <Route path="/cruises" element={<CruisesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogArticlePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </LeadDialogProvider>
  )
}
