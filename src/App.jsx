import { useEffect, useState } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import VisionMission from './pages/VisionMission'
import Stats from './pages/Stats'
import AlumniSpotlight from './pages/AlumniSpotlight'
import Committee from './pages/Committee'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Sangam2026 from './pages/Sangam2026'

import FounderDesk from './pages/FounderDesk'
import DftAlumniMeet2023 from './pages/DftAlumniMeet2023'
import Sangaath2024 from './pages/Sangaath2024'
import NewsletterSection from './pages/NewsletterSection'
import Newsroom from './pages/Newsroom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import Network from './pages/Network'
import TermsAndConditions from './pages/TermsAndConditions'
import NotFound from './pages/NotFound'
import { auth, isFirebaseConfigured } from './firebase'
import { signOut } from 'firebase/auth'

function App() {
  const location = useLocation()
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('alumniUser')
    try {
      if (saved) {
        const parsed = JSON.parse(saved)
        if (isFirebaseConfigured && parsed.uid && String(parsed.uid).startsWith('mock-')) {
          localStorage.removeItem('alumniUser')
          return null
        }
        return parsed
      }
      return null
    } catch (e) {
      return null
    }
  })

  // Scroll behavior: scroll to top on path change, or scroll to section if state.scrollTo is set
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const target = location.state.scrollTo
      const scrollTimer = setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 600,
          offset: -80,
        })
        window.history.replaceState({}, document.title)
      }, 150)
      return () => clearTimeout(scrollTimer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.state])

  // Global scroll-reveal: observe every .reveal* element and add 'visible' when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // fire once
          }
        }),
      { threshold: 0.12 }
    )

    // Small timeout so all components have mounted before we query
    const timer = setTimeout(() => {
      document
        .querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach((el) => observer.observe(el))
    }, 150)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [location.pathname])

  const handleLoginSuccess = (userData) => {
    setUser(userData)
    localStorage.setItem('alumniUser', JSON.stringify(userData))
  }

  const handleUpdateUser = (updatedData) => {
    setUser(prev => {
      // Deep-merge section buckets so partial updates (e.g. just systemMetaData) merge correctly
      const merged = { ...(prev || {}) }
      for (const key of Object.keys(updatedData)) {
        if (updatedData[key] && typeof updatedData[key] === 'object' && !Array.isArray(updatedData[key]) && merged[key] && typeof merged[key] === 'object') {
          merged[key] = { ...merged[key], ...updatedData[key] }
        } else {
          merged[key] = updatedData[key]
        }
      }
      localStorage.setItem('alumniUser', JSON.stringify(merged))
      return merged
    })
  }

  const handleLogout = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await signOut(auth)
      } catch (err) {
        console.error("Firebase SignOut Error:", err)
      }
    }
    setUser(null)
    localStorage.removeItem('alumniUser')
  }

  const knownPaths = [
    '/', '/sangam2026', '/dftalumnimeet2023', '/sangaath2024',
    '/newsroom', '/login', '/profile', '/admin', '/portal/network', '/terms'
  ]
  const isKnownPath = knownPaths.includes(location.pathname)

  const showHeaderFooter = isKnownPath && location.pathname !== '/login' && location.pathname !== '/admin' && !location.pathname.startsWith('/portal')

  return (
    <>
      {showHeaderFooter && <Navbar user={user} onLogout={handleLogout} />}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <VisionMission />
              <FounderDesk />
              <Stats />
              <AlumniSpotlight />
              <Committee />
              <Gallery />
              <Events />
              <NewsletterSection />
              <Contact />
            </>
          } />
          <Route path="/sangam2026" element={<Sangam2026 />} />

          <Route path="/dftalumnimeet2023" element={<DftAlumniMeet2023 />} />
          <Route path="/sangaath2024" element={<Sangaath2024 />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/login" element={<Login user={user} onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/profile" element={<Profile user={user} onUpdateUser={handleUpdateUser} />} />
          <Route path="/admin" element={<Admin user={user} onUpdateUser={handleUpdateUser} />} />
          <Route path="/portal/network" element={<Network user={user} onLogout={handleLogout} />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showHeaderFooter && <Footer />}
    </>
  )
}

export default App
