import { useState, useEffect } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import dftLogo from '../assets/Logo/dft-logo.png'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Vision', to: 'vision' },
  { label: 'Alumni Spotlight', to: 'spotlight' },
  { label: 'Committee', to: 'committee' },
  { label: 'Gallery', to: 'gallery' },
  { label: 'Events', to: 'events' },
  { label: 'Newsletter', to: 'newsletter' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">

          {/* Left: Logo */}
          <div className="navbar__brand">
            <RouterLink to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
              <img src={dftLogo} alt="DFT Alumni Logo" className="navbar__logo-img" />
            </RouterLink>
          </div>

          {/* Center: Desktop nav */}
          <nav className="navbar__nav">
            {navLinks.map((link) => {
              const isEvents = link.label === 'Events';
              if (isEvents) {
                return (
                  <div key={link.to} className="navbar__dropdown-container">
                    {isHome ? (
                      <ScrollLink
                        to={link.to}
                        smooth
                        duration={600}
                        offset={-90}
                        spy
                        activeClass="active"
                        className="navbar__link navbar__link--dropdown"
                      >
                        {link.label} <FaChevronDown className="navbar__dropdown-icon" />
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to="/"
                        state={{ scrollTo: link.to }}
                        className="navbar__link navbar__link--dropdown"
                      >
                        {link.label} <FaChevronDown className="navbar__dropdown-icon" />
                      </RouterLink>
                    )}
                    <div className="navbar__dropdown-menu">
                      <RouterLink to="/sangam2026" className="navbar__dropdown-item">
                        <span className="navbar__dropdown-item-title">Sangam 2026</span>
                        <span className="navbar__dropdown-item-desc">Vadodara (Upcoming)</span>
                      </RouterLink>
                      <RouterLink to="/sangaath2024" className="navbar__dropdown-item">
                        <span className="navbar__dropdown-item-title">Sangaath 2024</span>
                        <span className="navbar__dropdown-item-desc">Surat</span>
                      </RouterLink>
                      <RouterLink to="/dftalumnimeet2023" className="navbar__dropdown-item">
                        <span className="navbar__dropdown-item-title">DFT Alumni Meet 2023</span>
                        <span className="navbar__dropdown-item-desc">Ahmedabad</span>
                      </RouterLink>
                    </div>
                  </div>
                );
              }
              return isHome ? (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-90}
                  spy
                  activeClass="active"
                  className="navbar__link"
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={link.to}
                  to="/"
                  state={{ scrollTo: link.to }}
                  className="navbar__link"
                >
                  {link.label}
                </RouterLink>
              );
            })}
          </nav>

          {/* Right: CTA & Hamburger */}
          <div className="navbar__actions">
            <RouterLink to="/sangam2026" className="navbar__cta">
              <span className="navbar__cta-text">SANGAM 2026</span>
              <div className="navbar__cta-glow"></div>
            </RouterLink>

            <button
              className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`navbar__mobile-overlay ${menuOpen ? 'navbar__mobile-overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile-drawer ${menuOpen ? 'navbar__mobile-drawer--open' : ''}`}>
        <div className="navbar__mobile-drawer-inner">
          <nav className="navbar__mobile-nav">
            {navLinks.map((link, index) => (
              <div
                key={link.to}
                className="navbar__mobile-item"
                style={{ transitionDelay: `${0.05 + (index * 0.05)}s` }}
              >
                {link.label === 'Events' ? (
                  <>
                    {isHome ? (
                      <ScrollLink
                        to={link.to}
                        smooth
                        duration={600}
                        offset={-90}
                        className="navbar__mobile-link"
                        activeClass="active"
                        spy
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to="/"
                        state={{ scrollTo: link.to }}
                        className="navbar__mobile-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </RouterLink>
                    )}
                    <div className="navbar__mobile-submenu">
                      <RouterLink
                        to="/sangam2026"
                        className="navbar__mobile-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        Sangam 2026
                      </RouterLink>
                      <RouterLink
                        to="/sangaath2024"
                        className="navbar__mobile-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        Sangaath 2024
                      </RouterLink>
                      <RouterLink
                        to="/dftalumnimeet2023"
                        className="navbar__mobile-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        DFT Alumni Meet 2023
                      </RouterLink>
                    </div>
                  </>
                ) : isHome ? (
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-90}
                    className="navbar__mobile-link"
                    activeClass="active"
                    spy
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to="/"
                    state={{ scrollTo: link.to }}
                    className="navbar__mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </RouterLink>
                )}
              </div>
            ))}
          </nav>

          <div
            className="navbar__mobile-footer"
            style={{ transitionDelay: `${0.05 + (navLinks.length * 0.05)}s` }}
          >
            <RouterLink
              to="/sangam2026"
              className="navbar__mobile-cta-btn"
              onClick={() => setMenuOpen(false)}
            >
              SANGAM 2026
            </RouterLink>
          </div>
        </div>
      </div>
    </>
  )
}
