import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaExclamationTriangle } from 'react-icons/fa'
import dftLogo from '../assets/Logo/dft-logo.avif'
import './NotFound.css'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 Page Not Found | DFT Alumni'
  }, [])

  return (
    <div className="not-found-page">
      {/* Background Ambient Glows & Grid */}
      <div className="not-found__glow not-found__glow--red" />
      <div className="not-found__glow not-found__glow--blue" />
      <div className="not-found__grid-bg" />

      <div className="not-found__card">
        {/* Brand Badge */}
        <div className="not-found__brand">
          <img src={dftLogo} alt="DFT Alumni" className="not-found__logo" />
          <span className="not-found__brand-name">DFT Alumni Network</span>
        </div>

        {/* Big 404 Graphic */}
        <div className="not-found__number-box">
          <span className="not-found__number">404</span>
          <div className="not-found__pulse-ring" />
        </div>

        <div className="not-found__tag">
          <FaExclamationTriangle className="tag-icon" /> <span>404 · ROUTE NOT FOUND</span>
        </div>

        {/* Content */}
        <h1 className="not-found__title">Page Lost in Space</h1>
        <p className="not-found__subtitle">
          The page or URL path you are attempting to visit does not exist or may have been relocated to a new address.
        </p>

        {/* Action Buttons */}
        <div className="not-found__actions">
          <Link to="/" className="not-found-btn not-found-btn--primary">
            <FaHome /> <span>Back to Homepage</span>
          </Link>
        </div>

        {/* Footer Navigation */}
        <div className="not-found__footer">
          <span className="footer-label">Quick Links:</span>
          <div className="footer-links">
            <Link to="/login">Account Access</Link>
            <span className="sep">•</span>
            <Link to="/sangam2026">Sangam 2026</Link>
            <span className="sep">•</span>
            <Link to="/newsroom">Newsroom</Link>
            <span className="sep">•</span>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
