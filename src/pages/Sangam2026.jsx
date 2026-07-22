import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'
import eventImg from '../assets/event-vadodara.avif'
import sangamLogo from '../assets/Logo/sangam-logo.avif'
import './Sangam2026.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'
import { sponsorTiers } from '../data/SponserData'

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
            {sponsorTiers.map((tier) => (
              <div key={tier.id} className={`sponsor-tier ${tier.className}`}>
                <div className={`tier-badge ${tier.badgeClass}`}>{tier.name}</div>
                <div className="sponsors-grid">
                  {tier.sponsors.map((sponsor) => (
                    <div key={sponsor.id} className={`sponsor-card ${sponsor.cardClass}`}>
                      <div className="sponsor-logo">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          style={{ maxWidth: '100%', maxHeight: '52px', objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>


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
