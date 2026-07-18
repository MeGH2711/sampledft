import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import dftLogo from '../assets/Logo/dft-logo.png'
import './Footer.css'

const footerLinks = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', to: 'home' },
      { label: 'About', to: 'about' },
      { label: 'Vision & Mission', to: 'vision' },
      { label: 'Committee', to: 'committee' },
      { label: 'Newsletter', to: 'newsletter' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'Gallery', to: 'gallery' },
      { label: 'Sangam 2026', to: '/sangam2026', isRouter: true },
      { label: 'Contact Us', to: 'contact' },
    ],
  },
]

const socials = [
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/dftalumnifamily' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/dftalumnifamily/' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/dft-alumni/posts/?feedView=all' },
  { icon: <FaYoutube />, label: 'YouTube', href: 'https://www.youtube.com/@DFTAlumniFamily' },
]

export default function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <footer className="footer">
      {/* Red accent top line */}
      <div className="footer__top-bar" />

      <div className="footer__body">
        <div className="container footer__inner">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={dftLogo} alt="DFT Logo" className="footer__logo-img" />
              <div>
                <div className="footer__logo-title">DFT ALUMNI</div>
                <div className="footer__logo-sub">Sir Bhavsinhji Polytechnic, Bhavnagar</div>
              </div>
            </div>
            <p className="footer__brand-text">
              A proud community of graduates united by the legacy of the Diploma in Fabrication
              Technology — connecting, inspiring, and giving back generation after generation.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="footer__social" target='__blank' aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer__col">
              <h4 className="footer__col-heading">{col.heading}</h4>
              <ul className="footer__col-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.isRouter ? (
                      <RouterLink to={link.to} className="footer__link">
                        <span className="footer__link-arrow">›</span>
                        {link.label}
                      </RouterLink>
                    ) : isHome ? (
                      <ScrollLink to={link.to} smooth duration={600} offset={-80} className="footer__link">
                        <span className="footer__link-arrow">›</span>
                        {link.label}
                      </ScrollLink>
                    ) : (
                      <RouterLink to="/" state={{ scrollTo: link.to }} className="footer__link">
                        <span className="footer__link-arrow">›</span>
                        {link.label}
                      </RouterLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h4 className="footer__col-heading">Stay Updated</h4>
            <p className="footer__newsletter-text">
              Subscribe for the latest events, reunions, and updates from the DFT Alumni community.
            </p>
            <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                id="footer-email"
                placeholder="your@email.com"
                className="footer__newsletter-input"
              />
              <button type="submit" className="footer__newsletter-btn">
                JOIN
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} DFT Alumni Association · Bhavnagar · Gujarat
          </p>
          <p className="footer__design">
            Designed and Developed with 💙 by <a href="https://meghpatel.vercel.app" target="_blank" rel="noopener noreferrer">Megh Patel</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
