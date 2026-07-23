import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { FaArrowLeft, FaNetworkWired } from 'react-icons/fa'
import dftLogo from '../assets/Logo/dft-logo.avif'
import { personal, meta, getUserFirstName } from '../utils/userHelpers'
import './PortalNavbar.css'

export default function PortalNavbar({ user }) {
  const [scrolled, setScrolled] = useState(false)

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

        {/* Center: Page label */}
        <div className="portal-nav__title">
          <div className="portal-nav__title-dot" />
          <span className="portal-nav__title-text">Alumni Network</span>
          <div className="portal-nav__title-dot" />
        </div>

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
