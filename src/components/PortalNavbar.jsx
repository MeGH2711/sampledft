import { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { FaArrowLeft, FaNetworkWired, FaBriefcase } from 'react-icons/fa'
import dftLogo from '../assets/Logo/dft-logo.avif'
import { personal, meta, getUserFirstName } from '../utils/userHelpers'
import './PortalNavbar.css'

export default function PortalNavbar({ user }) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const firstName = user ? getUserFirstName(user) || 'Alumni' : null
  const avatarLetter = firstName ? firstName.charAt(0).toUpperCase() : 'A'
  const photoUrl = user ? meta(user, 'profilePhotoUrl', '') : ''

  return (
    <header className={`portal-nav${scrolled ? ' portal-nav--scrolled' : ''}`}>
      <div className="portal-nav__container">

        {/* Left: Logo + PORTAL badge */}
        <RouterLink to="/portal/network" className="portal-nav__brand">
          <img src={dftLogo} alt="DFT Alumni" className="portal-nav__logo-img" />
          <div className="portal-nav__brand-text">
            <span className="portal-nav__brand-name">DFT Alumni</span>
            <span className="portal-nav__portal-badge">PORTAL</span>
          </div>
        </RouterLink>

        {/* Center: Interactive Portal Navigation Links */}
        <nav className="portal-nav__menu" aria-label="Portal Navigation">
          <RouterLink
            to="/portal/network"
            className={`portal-nav__menu-item${location.pathname === '/portal/network' ? ' portal-nav__menu-item--active' : ''}`}
          >
            <FaNetworkWired />
            <span>Alumni Network</span>
          </RouterLink>
          <RouterLink
            to="/portal/jobs"
            className={`portal-nav__menu-item${location.pathname === '/portal/jobs' ? ' portal-nav__menu-item--active' : ''}`}
          >
            <FaBriefcase />
            <span>Job Board</span>
          </RouterLink>
        </nav>

        {/* Right: Actions */}
        <div className="portal-nav__actions">
          <RouterLink to="/" className="portal-nav__home-link">
            <FaArrowLeft />
            <span>Back to Site</span>
          </RouterLink>
          <div className="portal-nav__divider" />
          {user && (
            <RouterLink to="/profile" className="portal-nav__user-btn">
              <div className="portal-nav__avatar">
                {photoUrl
                  ? <img src={photoUrl} alt={firstName} />
                  : avatarLetter
                }
              </div>
              <span className="portal-nav__user-name">Hi, {firstName}</span>
            </RouterLink>
          )}
        </div>

      </div>
    </header>
  )
}
