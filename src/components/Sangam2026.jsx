import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'
import eventImg from '../assets/event-vadodara.avif'
import sangamLogo from '../assets/Logo/sangam-logo.avif'
import './Sangam2026.css'
import ImageWithSkeleton from './ImageWithSkeleton'

export default function Sangam2026() {
  // Countdown timer calculations
  const calculateTimeLeft = () => {
    const eventDate = new Date('December 20, 2026 16:00:00').getTime()
    const now = new Date().getTime()
    const difference = eventDate - now

    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Scroll to top on load
    window.scrollTo(0, 0)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="sangam-page">
      {/* ── Hero Banner ── */}
      <section className="sangam-hero" style={{ backgroundImage: `linear-gradient(rgba(11, 27, 63, 0.92), rgba(11, 27, 63, 0.85)), url(${eventImg})` }}>
        <div className="container sangam-hero__inner">
          <div className="sangam-hero__content">
            <span className="sangam-hero__eyebrow">GRAND HOMECOMING REUNION</span>
            <h1 className="sangam-hero__title">
              SANGAM <span>2026</span>
            </h1>
            <p className="sangam-hero__sub">
              Reconnect, relive, and celebrate the enduring legacy of the Diploma in Fabrication Technology.
              Join generations of DFT alumni in Vadodara for an evening of shared memories and future visions.
            </p>

            <span className="hero-register-btn hero-register-btn--disabled" style={{ opacity: 0.8, cursor: 'default' }}>
              REGISTRATIONS OPENING SOON
            </span>

            {/* Quick Details Bar */}
            <div className="sangam-hero__meta">
              <div className="sangam-meta-item">
                <FaCalendarAlt className="meta-icon" />
                <div>
                  <div className="meta-label">DATE</div>
                  <div className="meta-val">Dec 20, 2026</div>
                </div>
              </div>
              <div className="sangam-meta-item">
                <FaClock className="meta-icon" />
                <div>
                  <div className="meta-label">TIME</div>
                  <div className="meta-val">To Be Announced</div>
                </div>
              </div>
              <div className="sangam-meta-item">
                <FaMapMarkerAlt className="meta-icon" />
                <div>
                  <div className="meta-label">LOCATION</div>
                  <div className="meta-val">Shakti Greens and Banquet, Vadodara, Gujarat</div>
                  <a
                    href="https://maps.app.goo.gl/FumHN3J6gbZuJ8Rd9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="venue-map-btn"
                  >
                    Open in Map
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="sangam-hero__logo-card reveal">
            <div className="logo-card-inner">
              <ImageWithSkeleton src={sangamLogo} alt="Sangam 2026 Logo" className="sangam-hero-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Countdown section ── */}
      <section className="countdown-section">
        <div className="container">
          <div className="countdown-card">
            <h2 className="countdown-title">COUNTDOWN TO SANGAM 2026</h2>
            <div className="countdown-grid">
              <div className="countdown-item">
                <span className="countdown-num">{timeLeft.days || '0'}</span>
                <span className="countdown-label">DAYS</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-num">{String(timeLeft.hours).padStart(2, '0') || '00'}</span>
                <span className="countdown-label">HOURS</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-num">{String(timeLeft.minutes).padStart(2, '0') || '00'}</span>
                <span className="countdown-label">MINUTES</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-num">{String(timeLeft.seconds).padStart(2, '0') || '00'}</span>
                <span className="countdown-label">SECONDS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Details Grid ── */}
      <section className="section sangam-details">
        <div className="container details-grid">

          {/* Left Column: Schedule & Highlights */}
          <div className="details-main">
            {/* Event Schedule commented out as it is not finalized yet
            <div className="details-card">
              <h2 className="details-heading">Event Schedule</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-time">04:00 PM</div>
                  <div className="timeline-content">
                    <h3>Registration & Welcome Reception</h3>
                    <p>Collect entry badges, alumni souvenirs, and enjoy high-tea while meeting batchmates.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">05:30 PM</div>
                  <div className="timeline-content">
                    <h3>Inaugural Ceremony & Legacy Talk</h3>
                    <p>Lamp lighting, address by distinguished professors, and special presentations highlighting DFT achievements.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">06:30 PM</div>
                  <div className="timeline-content">
                    <h3>Nostalgia & Interaction Panel</h3>
                    <p>Open mic session where alumni from different batches share their college memories and professional journeys.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">08:00 PM</div>
                  <div className="timeline-content">
                    <h3>Gala Dinner & Musical Night</h3>
                    <p>Indulge in a premium buffet dinner accompanied by live acoustic performances and networking sessions.</p>
                  </div>
                </div>
              </div>
            </div>
            */}

            <div className="details-card highlights-card">
              <h2 className="details-heading">Reunion Highlights</h2>
              <ul className="highlights-list">
                <li>
                  <FaCheckCircle className="hl-icon" />
                  <span><strong>Global Network:</strong> Connect with over 300+ alumni working in top fabrication, manufacturing, and design industries globally.</span>
                </li>
                <li>
                  <FaCheckCircle className="hl-icon" />
                  <span><strong>Faculty Interaction:</strong> Pay tribute to our beloved retired and current faculty members of Sir Bhavsinhji Polytechnic.</span>
                </li>
                <li>
                  <FaCheckCircle className="hl-icon" />
                  <span><strong>Commemorative Souvenir:</strong> Get a custom-designed DFT Alumni memorabilia pack at registration.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Ticket details and Register CTA */}
          <div className="details-sidebar">
            {/* Active Ticket / Registration info card commented out
            <div className="ticket-info-card">
              <h3 className="ticket-card-title">Entry Pass & Registration</h3>
              <p className="ticket-card-sub">Secure your place at the grandest homecoming. Paid registration is required for entry.</p>

              <ul className="ticket-benefits-list">
                <li>
                  <FaCheckCircle className="benefit-icon" />
                  <span>Full access to all event sessions & panel talks</span>
                </li>
                <li>
                  <FaCheckCircle className="benefit-icon" />
                  <span>Grand buffet dinner & high-tea reception</span>
                </li>
                <li>
                  <FaCheckCircle className="benefit-icon" />
                  <span>DFT Alumni kit (memorabilia, T-shirt & badge)</span>
                </li>
              </ul>

              <Link to="/sangam2026/register" className="register-now-btn">
                REGISTER NOW
              </Link>

              <p className="ticket-note">* Registration closes on December 10, 2026. Limited passes available.</p>
            </div>
            */}

            {/* Registration opening soon card */}
            <div className="ticket-info-card">
              <h3 className="ticket-card-title">Registration</h3>
              <p className="ticket-card-sub" style={{ marginBottom: '24px' }}>
                Details about entry passes and registration will be announced soon. Stay tuned!
              </p>
              <div className="register-opening-soon" style={{
                background: 'rgba(232, 48, 42, 0.1)',
                border: '1px dashed var(--signal-red)',
                color: 'var(--signal-red)',
                textAlign: 'center',
                padding: '12px 18px',
                fontWeight: '700',
                fontSize: '0.9rem',
                letterSpacing: '1px'
              }}>
                REGISTRATIONS OPENING SOON
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Sponsors Section ── */}
      <section className="sponsors-section">
        <div className="container">
          {/* Sponsors listing commented out as there are no active sponsors yet
          <div className="sponsors-header">
            <span className="sponsors-eyebrow">PARTNERS & SPONSORS</span>
            <h2 className="sponsors-title">Supporting Sangam 2026</h2>
            <div className="title-underline"></div>
            <p className="sponsors-subtitle">
              We extend our heartfelt gratitude to the leading companies and alumni-led enterprises
              championing this grand reunion.
            </p>
          </div>

          <div className="sponsors-container">
            <div className="sponsor-tier diamond-tier">
              <div className="tier-badge diamond">DIAMOND SPONSOR</div>
              <div className="sponsors-grid">
                <div className="sponsor-card diamond">
                  <div className="sponsor-logo">
                    <svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E3C72" />
                          <stop offset="100%" stopColor="#2A5298" />
                        </linearGradient>
                      </defs>
                      <path d="M30 40 L50 20 L70 40 L50 60 Z" fill="url(#diamondGrad)" />
                      <path d="M50 20 L50 60" stroke="#FFFFFF" strokeWidth="2" />
                      <path d="M30 40 L70 40" stroke="#FFFFFF" strokeWidth="2" />
                      <text x="90" y="46" fontFamily="Montserrat" fontWeight="800" fontSize="18" fill="var(--navy-deep)">APEX FAB</text>
                      <text x="90" y="58" fontFamily="Poppins" fontWeight="600" fontSize="10" fill="var(--slate)" letterSpacing="1.5">INDUSTRIES</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="sponsor-tier gold-tier">
              <div className="tier-badge gold">GOLD SPONSORS</div>
              <div className="sponsors-grid">
                <div className="sponsor-card gold">
                  <div className="sponsor-logo">
                    <svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="40" r="20" stroke="var(--navy-deep)" strokeWidth="4" />
                      <rect x="42" y="32" width="16" height="16" fill="var(--signal-red)" />
                      <text x="85" y="46" fontFamily="Montserrat" fontWeight="800" fontSize="16" fill="var(--navy-deep)">MATRIX</text>
                      <text x="85" y="58" fontFamily="Poppins" fontWeight="600" fontSize="10" fill="var(--slate)" letterSpacing="1.5">INFRASTRUCTURE</text>
                    </svg>
                  </div>
                </div>
                <div className="sponsor-card gold">
                  <div className="sponsor-logo">
                    <svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 55 L50 25 L70 55 Z" fill="none" stroke="var(--navy-deep)" strokeWidth="4" />
                      <path d="M42 45 L50 33 L58 45 Z" fill="var(--signal-red)" />
                      <text x="85" y="46" fontFamily="Montserrat" fontWeight="800" fontSize="16" fill="var(--navy-deep)">SUMMIT</text>
                      <text x="85" y="58" fontFamily="Poppins" fontWeight="600" fontSize="10" fill="var(--slate)" letterSpacing="1.5">HEAVY ENGG</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="sponsor-tier silver-tier">
              <div className="tier-badge silver">SILVER SPONSORS</div>
              <div className="sponsors-grid">
                <div className="sponsor-card silver">
                  <div className="sponsor-logo">
                    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 30 C20 20, 40 20, 40 30 C40 40, 20 40, 20 30 Z" stroke="var(--navy-deep)" strokeWidth="3" />
                      <circle cx="30" cy="30" r="5" fill="var(--signal-red)" />
                      <text x="55" y="36" fontFamily="Montserrat" fontWeight="800" fontSize="13" fill="var(--navy-deep)">DELTA ALLOYS</text>
                    </svg>
                  </div>
                </div>
                <div className="sponsor-card silver">
                  <div className="sponsor-logo">
                    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" y="20" width="20" height="20" rx="3" stroke="var(--navy-deep)" strokeWidth="3" />
                      <path d="M25 25 L35 35 M35 25 L25 35" stroke="var(--signal-red)" strokeWidth="2" />
                      <text x="55" y="36" fontFamily="Montserrat" fontWeight="800" fontSize="13" fill="var(--navy-deep)">NOVA WELD</text>
                    </svg>
                  </div>
                </div>
                <div className="sponsor-card silver">
                  <div className="sponsor-logo">
                    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 22 H40 M20 30 H40 M20 38 H40" stroke="var(--navy-deep)" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="30" cy="30" r="4" fill="var(--signal-red)" />
                      <text x="55" y="36" fontFamily="Montserrat" fontWeight="800" fontSize="13" fill="var(--navy-deep)">PRISM PIPES</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}

          {/* Call for Sponsors CTA */}
          <div className="sponsors-cta">
            <h3 className="sponsors-cta-title">Interested in Sponsoring?</h3>
            <p className="sponsors-cta-text">
              Support this grand homecoming reunion and connect your brand with 300+ elite DFT graduates globally.
              Get in touch to receive our sponsorship deck.
            </p>
            <a href="mailto:dftalumnifamily@gmail.com" className="sponsors-cta-btn">
              GET IN TOUCH
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
