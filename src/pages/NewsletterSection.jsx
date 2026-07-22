import { Link } from 'react-router-dom'
import { FaFileAlt, FaArrowRight, FaDownload } from 'react-icons/fa'
import './Newsroom.css'

import { newsletters } from '../data/newslettersData'

export default function NewsletterSection() {
  const latestNewsletter = newsletters[0]

  if (!latestNewsletter) return null

  return (
    <section className="section section-fog newsletter-section" id="newsletter">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Latest <span>Newsletter</span>
          </h2>
        </div>
        <p className="section-sub reveal">
          Stay updated with the latest happenings, alumni achievements, and upcoming events in our community.
        </p>

        <div className="newsletter__card reveal">
          <div className="newsletter__icon">
            <FaFileAlt />
          </div>
          <div className="newsletter__content">
            <h3 className="newsletter__title">{latestNewsletter.title}</h3>
            <p className="newsletter__date">{latestNewsletter.date}</p>
            <p className="newsletter__desc">{latestNewsletter.description}</p>
            <div className="newsletter__actions">
              <a href={latestNewsletter.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <FaDownload /> Download PDF
              </a>
              <Link to="/newsroom" className="newsletter__link">
                View All Newsletters <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
