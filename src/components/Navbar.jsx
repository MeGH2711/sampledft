import { useState, useEffect } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaBars, FaTimes, FaChevronDown, FaCheckCircle, FaClock } from 'react-icons/fa'
import dftLogo from '../assets/Logo/dft-logo.avif'
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

export default function Navbar({ user, onLogout }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const getDropdownDisplayName = () => {
    if (!user) return '';
    if (user.firstName || user.lastName) {
      return `${user.firstName || ''} ${user.lastName || ''}`.trim();
    }
    const parts = (user.name || '').trim().split(/\s+/);
    if (parts.length <= 2) return user.name;
    const titles = ['dr', 'dr.', 'prof', 'prof.', 'mr', 'mr.', 'ms', 'ms.', 'mrs', 'mrs.'];
    let startIndex = 0;
    if (titles.includes(parts[0].toLowerCase()) && parts.length > 2) {
      startIndex = 1;
    }
    const prefix = startIndex === 1 ? parts[0] + ' ' : '';
    const first = parts[startIndex];
    const last = parts[parts.length - 1];
    return `${prefix}${first} ${last}`.trim();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    if (!userMenuOpen) return
    const closeMenu = () => setUserMenuOpen(false)
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [userMenuOpen])

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
                        <span className="navbar__dropdown-item-status"></span>
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

            {user ? (
              <div className="navbar__user-menu">
                <button
                  className="navbar__user-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    setUserMenuOpen(!userMenuOpen)
                  }}
                  aria-label="User menu"
                >
                  <span className="navbar__avatar">{user.name.charAt(0).toUpperCase()}</span>
                  <span className="navbar__user-name">Hi, {user.name.split(' ')[0]}</span>
                  <FaChevronDown className={`navbar__dropdown-arrow ${userMenuOpen ? 'open' : ''}`} />
                </button>
                <div className={`navbar__user-dropdown ${userMenuOpen ? 'navbar__user-dropdown--open' : ''}`}>
                  <div className="navbar__dropdown-header">
                    <strong className="navbar__dropdown-name">{getDropdownDisplayName()}</strong>
                    <div className={`navbar__user-badge ${user.verification_status ? 'navbar__user-badge--verified' : 'navbar__user-badge--unverified'}`}>
                      {user.verification_status ? (
                        <>
                          <FaCheckCircle className="navbar__user-badge-icon" /> Verified Alumni
                          <span className="navbar__user-badge-tooltip">Your account has been successfully verified by the Administrator.</span>
                        </>
                      ) : (
                        <>
                          <FaClock className="navbar__user-badge-icon" /> Pending Verification
                          <span className="navbar__user-badge-tooltip">Admin will verify the account, this might take 1-2 days</span>
                        </>
                      )}
                    </div>
                    <span className="navbar__dropdown-sub">Class of {user.degree ? `${user.degree} · ` : ''}{user.passoutYear || user.batch}</span>
                  </div>
                  <RouterLink
                    to="/profile"
                    className="navbar__user-dropdown-item"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    My Profile
                  </RouterLink>
                  <hr className="navbar__dropdown-divider" />
                  {(user.account_type === 'admin' || user.account_type === 'developer') && (
                    <>
                      <RouterLink
                        to="/admin"
                        className="navbar__user-dropdown-item navbar__user-dropdown-admin"
                        onClick={() => setUserMenuOpen(false)}
                        style={{ color: 'var(--signal-red)', fontWeight: 'bold' }}
                      >
                        Admin Dashboard
                      </RouterLink>
                      <hr className="navbar__dropdown-divider" />
                    </>
                  )}
                  <button
                    onClick={() => {
                      onLogout()
                      setUserMenuOpen(false)
                    }}
                    className="navbar__user-dropdown-item navbar__user-dropdown-logout"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <RouterLink to="/login" className="navbar__login-btn">
                Alumni Portal
              </RouterLink>
            )}

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
            {user ? (
              <div className="navbar__mobile-user">
                <div className="navbar__mobile-user-info">
                  <span className="navbar__mobile-avatar">{user.name.charAt(0).toUpperCase()}</span>
                  <div style={{ textAlign: 'left' }}>
                    <div className="navbar__mobile-user-name">{getDropdownDisplayName()}</div>
                    <div className={`navbar__user-badge ${user.verification_status ? 'navbar__user-badge--verified' : 'navbar__user-badge--unverified'}`}>
                      {user.verification_status ? (
                        <>
                          <FaCheckCircle className="navbar__user-badge-icon" /> Verified Alumni
                          <span className="navbar__user-badge-tooltip">Your account has been successfully verified by the Administrator.</span>
                        </>
                      ) : (
                        <>
                          <FaClock className="navbar__user-badge-icon" /> Pending Verification
                          <span className="navbar__user-badge-tooltip">Admin will verify the account, this might take 1-2 days</span>
                        </>
                      )}
                    </div>
                    <div className="navbar__mobile-user-class">{user.passoutYear || user.batch}</div>
                  </div>
                </div>
                <RouterLink
                  to="/profile"
                  className="navbar__mobile-profile-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  My Profile
                </RouterLink>
                {(user.account_type === 'admin' || user.account_type === 'developer') && (
                  <RouterLink
                    to="/admin"
                    className="navbar__mobile-profile-btn"
                    onClick={() => setMenuOpen(false)}
                    style={{ background: 'var(--navy-deep)', color: 'var(--paper-white)', border: 'none', marginTop: '8px', marginBottom: '8px' }}
                  >
                    Admin Dashboard
                  </RouterLink>
                )}
                <button
                  onClick={() => {
                    onLogout()
                    setMenuOpen(false)
                  }}
                  className="navbar__mobile-logout-btn"
                >
                  Logout
                </button>
              </div>
            ) : (
              <RouterLink
                to="/login"
                className="navbar__mobile-login-btn"
                onClick={() => setMenuOpen(false)}
              >
                Alumni Portal
              </RouterLink>
            )}

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
