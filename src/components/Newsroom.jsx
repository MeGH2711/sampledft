import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaFileAlt, FaDownload, FaCalendarAlt } from 'react-icons/fa'
import './Newsroom.css'

import { newsletters } from '../data/newslettersData'

export default function Newsroom() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="newsroom-page">
      {/* Hero */}
      <section className="newsroom-hero">
        <div className="container newsroom-hero__inner">
          <Link to="/" className="back-link">
            <FaArrowLeft /> BACK TO HOME
          </Link>
          <span className="newsroom-hero__eyebrow">COMMUNITY UPDATES</span>
          <h1 className="newsroom-hero__title">
            Alumni <span>Newsroom</span>
          </h1>
          <p className="newsroom-hero__sub">
            The central hub for all our past newsletters, important publications, and major announcements. Stay connected with the DFT alumni journey.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="section newsroom-list-section">
        <div className="container">
          <div className="newsroom-list">
            {newsletters.map((nl, i) => (
              <div
                key={i}
                className={`newsroom-card reveal horizontal-card ${i === 0 ? 'horizontal-card--featured' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="newsroom-card__icon-wrap">
                  <div className="newsroom-card__icon">
                    <FaFileAlt />
                  </div>
                </div>
                <div className="newsroom-card__content">
                  {i === 0 && <span className="newsroom-card__badge">LATEST</span>}
                  <h3 className="newsroom-card__title">{nl.title}</h3>
                  <div className="newsroom-card__meta">
                    <FaCalendarAlt /> <span>{nl.date}</span>
                  </div>
                  <p className="newsroom-card__desc">{nl.description}</p>
                  <div className="newsroom-card__actions">
                    <a href={nl.link} className="newsroom-card__btn" target="_blank" rel="noopener noreferrer">
                      <FaDownload /> Download PDF
                    </a>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="newsroom-card__glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
