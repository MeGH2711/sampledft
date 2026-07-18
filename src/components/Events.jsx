import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import eventAhmedabad from '../assets/Meet2023/img79.dcf15f8c3bf07d813ed0.png'
import eventSurat from '../assets/Sangaath2024/AJY_6380.avif'
import eventVadodara from '../assets/event-vadodara.png'
import './Events.css'

const events = [
  {
    image: eventAhmedabad,
    name: 'DFT Alumni Meet 2023',
    city: 'Ahmedabad',
    year: '2023',
    description:
      'The inaugural DFT Alumni Meet brought together graduates from across Gujarat for a day of networking, nostalgia, and forging new connections in the vibrant city of Ahmedabad.',
    status: 'past',
    link: '/dftalumnimeet2023',
  },
  {
    image: eventSurat,
    name: 'Sangaath 2024',
    city: 'Surat',
    year: '2024',
    description:
      'Sangath united DFT alumni in Surat with cultural performances, industry talks, and heartfelt reunions — a celebration of our shared bond and professional growth.',
    status: 'past',
    link: '/sangaath2024',
  },
  {
    image: eventVadodara,
    name: 'Sangam 2026',
    city: 'Vadodara',
    year: '2026',
    description:
      'The grandest alumni reunion yet — Sangam 2026 in Vadodara promises an unforgettable evening of legacy, celebration, and the spirit of DFT excellence.',
    status: 'upcoming',
  },
]

export default function Events() {
  return (
    <section className="section section-white events" id="events">
      <div className="container">
        {/* Section header */}
        <div className="section-head reveal">
          <h2>
            Our <span>Events</span>
          </h2>
        </div>
        <p className="section-sub reveal">
          From Ahmedabad to Vadodara — every gathering strengthens the DFT
          alumni network. Here's a look at our journey so far and what's coming
          next.
        </p>

        {/* Timeline connector (desktop) */}
        <div className="events__timeline" aria-hidden="true">
          <div className="events__timeline-line" />
          {events.map((_, i) => (
            <div
              key={i}
              className="events__timeline-node"
              style={{ left: `${((i + 0.5) / events.length) * 100}%` }}
            />
          ))}
        </div>

        {/* Event cards */}
        <div className="events__grid">
          {events.map((evt, i) => (
            <div
              key={i}
              className={`events__card reveal ${evt.status === 'upcoming' ? 'events__card--upcoming' : ''
                }`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Image */}
              <div className="events__card-img-wrap">
                <img
                  src={evt.image}
                  alt={evt.name}
                  className="events__card-img"
                />
                <div className="events__card-img-overlay" />
                {/* Year badge */}
                <div className="events__card-year">
                  <span>{evt.year}</span>
                </div>
                {/* Status badge */}
                {evt.status === 'upcoming' && (
                  <div className="events__card-badge">UPCOMING</div>
                )}
              </div>

              {/* Content */}
              <div className="events__card-body">
                <div className="events__card-meta">
                  <span className="events__card-city">
                    <FaMapMarkerAlt /> {evt.city}
                  </span>
                  <span className="events__card-date">
                    <FaCalendarAlt /> {evt.year}
                  </span>
                </div>

                <h3 className="events__card-title">{evt.name}</h3>
                <p className="events__card-desc">{evt.description}</p>

                <div className="events__card-footer">
                  {evt.status === 'upcoming' ? (
                    <Link to="/sangam2026" className="events__card-cta events__card-cta--upcoming">
                      COMING SOON <FaArrowRight />
                    </Link>
                  ) : evt.link ? (
                    <Link to={evt.link} className="events__card-cta">
                      VIEW MEMORIES <FaArrowRight />
                    </Link>
                  ) : (
                    <span className="events__card-cta">
                      VIEW MEMORIES <FaArrowRight />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
